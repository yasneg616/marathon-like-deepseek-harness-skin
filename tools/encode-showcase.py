"""Encode browser-recorded documentation frames without changing playback speed.

Requires Pillow. Input: .recordings/<clip>/frames.json and its JPEG frames.
Output: docs/media/<clip>.gif. The capture timestamps determine each frame delay.
"""
import json
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / '.recordings'
OUTPUT = ROOT / 'docs' / 'media'


def encode(folder):
    metadata = json.loads((folder / 'frames.json').read_text(encoding='utf-8'))
    frames = metadata['frames']
    images = []
    for frame in frames:
        with Image.open(folder / frame['file']) as image:
            image = image.convert('RGB')
            if metadata.get('trimBottom'):
                image = image.crop((0, 0, image.width, image.height-int(metadata['trimBottom'])))
            if image.width > 1080:
                image = image.resize((1080, round(image.height * 1080 / image.width)), Image.Resampling.LANCZOS)
            images.append(image)
    # One palette per clip prevents unchanged text from changing color between frames.
    swatches = Image.new('RGB', (256 * 4, 144 * 2))
    for i in range(8):
        selected = images[round(i * (len(images) - 1) / 7)]
        preview = selected.resize((256, 144), Image.Resampling.LANCZOS)
        swatches.paste(preview, ((i % 4) * 256, (i // 4) * 144))
    palette = swatches.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
    indexed = [image.quantize(palette=palette, dither=Image.Dither.NONE) for image in images]
    timestamps = [frame['time'] for frame in frames]
    end = max(metadata['durationMs'], timestamps[-1] + 60)
    durations = [max(20, round((right-left)/10)*10) for left,right in zip(timestamps, timestamps[1:]+[end])]
    output = OUTPUT / (metadata['name'] + '.gif')
    indexed[0].save(output, save_all=True, append_images=indexed[1:], duration=durations, loop=0, optimize=True, disposal=1)
    with Image.open(output) as gif:
        delays = []
        for i in range(gif.n_frames):
            gif.seek(i)
            delays.append(gif.info.get('duration', 0))
        result = {'file':output.name, 'size':output.stat().st_size, 'width':gif.width, 'height':gif.height, 'frames':gif.n_frames, 'durationMs':sum(delays)}
    if result['frames'] < 2:
        raise ValueError(f'Clip has no recorded movement: {output.name}')
    return result


if __name__ == '__main__':
    OUTPUT.mkdir(parents=True, exist_ok=True)
    folders = [RAW / name for name in sys.argv[1:]] if len(sys.argv) > 1 else sorted(folder for folder in RAW.iterdir() if (folder / 'frames.json').exists())
    report = [encode(folder) for folder in folders]
    (RAW / 'encode-report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(json.dumps({'clips':len(report), 'totalBytes':sum(item['size'] for item in report), 'files':report}, indent=2))
