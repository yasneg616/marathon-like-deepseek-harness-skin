window.__ModuleLoader__.load({
  id: 'dsh-industrial-acid-skin',
  factory: (require) => {
    const React = require('react');
    const { createPortal } = require('react-dom');
    const h = React.createElement;
    const ID = 'dsh-industrial-acid-skin';
    const CSS = "@font-face{font-family:Industrial GRID;src:url(data:font/woff2;base64,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) format('woff2');font-weight:900;font-style:normal;font-display:swap}\n@font-face{font-family:Industrial SIGNAL;src:url(data:font/woff2;base64,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) format('woff2');font-weight:400;font-style:normal;font-display:swap}\nhtml[data-industrial-acid]{--acid-lime:#c5fa31;--acid-blue:#2536ed;--acid-ink:#121711;--acid-paper:#f0f0e6;--acid-header-height:clamp(112px,21vh,var(--acid-header-max,216px));--acid-display:'Industrial GRID','Arial Black','Microsoft YaHei',sans-serif;--acid-mono:'Industrial SIGNAL','Cascadia Code',Consolas,'Microsoft YaHei',monospace;--acid-rule:var(--dsw-alias-border-l4);--dsh-frame-overlay-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height) + 20px)}\nhtml[data-industrial-acid] body{--acid-rule:var(--dsw-alias-border-l4,#121711);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}\n/* Keep the native grid, column widths, resizers and caption buttons. */\nhtml[data-industrial-acid] .BynINW_frame{box-sizing:border-box;padding-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height));grid-template-rows:minmax(0,1fr)}\nhtml[data-industrial-acid] .BynINW_centerCol{border-radius:0;border-left:1px solid var(--acid-ink)}\nhtml[data-industrial-acid] .BynINW_handle{top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height))}\n.acid-masthead{box-sizing:border-box;position:fixed;z-index:21;top:var(--dsh-frame-chrome-top,0px);left:0;width:100%;height:var(--acid-header-height);display:grid;grid-template-columns:minmax(0,76fr) minmax(0,24fr);border-bottom:1px solid var(--acid-sidebar-rule);pointer-events:none!important}\n.acid-wordmark{color:var(--acid-masthead-fore);background:var(--acid-masthead-bg);min-width:0;display:flex;align-items:center;overflow:hidden}\n.acid-wordmark svg{display:block;width:100%;height:100%}\n.acid-context{background:var(--acid-context-bg);color:var(--acid-context-fore);border-left:1px solid var(--acid-sidebar-rule);padding:clamp(10px,1.4vw,22px);display:flex;flex-direction:column;min-width:0;justify-content:space-between;overflow:hidden}\n.acid-meta{font:clamp(10px,1.1vw,15px)/1.2 var(--acid-mono);letter-spacing:.065em;white-space:nowrap}\n.acid-context-number{font:900 clamp(52px,9vh,116px)/.88 var(--acid-display);font-synthesis:none;letter-spacing:.025em;white-space:nowrap;color:var(--acid-context-number)}\n.acid-context-title{font:clamp(12px,1.5vw,22px)/1.2 var(--acid-mono);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n/* Day uses an acid navigation block; night limits bright accents to controls. */\nhtml[data-industrial-acid] [data-slot=sidebar]{--dsw-alias-label-primary:var(--acid-sidebar-fore);--dsw-alias-label-primary-dimmed:var(--acid-sidebar-fore);--dsw-alias-label-secondary:var(--acid-sidebar-secondary);--dsw-alias-label-tertiary:var(--acid-sidebar-tertiary);--dsw-alias-label-caption:var(--acid-sidebar-tertiary);--dsw-alias-interactive-bg-hover:var(--acid-sidebar-hover);--dsw-specific-sidebar-nav-item-hover:var(--acid-sidebar-hover);--dsw-specific-sidebar-nav-item-active:var(--acid-sidebar-active);--dsw-alias-border-l1:var(--acid-sidebar-rule);--dsw-alias-state-business-primary:var(--acid-sidebar-fore);color:var(--acid-sidebar-fore)}\nhtml[data-industrial-acid] ._2H3hWW_root{padding-top:12px;background:var(--acid-sidebar-bg)}\nhtml[data-industrial-acid] ._2H3hWW_root:not(._2H3hWW_collapsed) ._2H3hWW_logoRow{height:28px;margin:0 0 6px;padding:0;overflow:visible}\nhtml[data-industrial-acid] ._2H3hWW_root:not(._2H3hWW_collapsed) ._2H3hWW_brand{display:none}\nhtml[data-industrial-acid][data-windows-titlebar] ._2H3hWW_root:not(._2H3hWW_collapsed) ._2H3hWW_logoRow{height:0;margin:0}\nhtml[data-industrial-acid] .hIlkoa_sessionRow.hIlkoa_selected{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);--dsw-alias-label-caption:var(--acid-sidebar-active-fore);--dsw-alias-label-secondary:var(--acid-sidebar-active-fore);--dsw-alias-label-tertiary:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] .hIlkoa_sessionRow.hIlkoa_selected .hIlkoa_title{color:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] ._2H3hWW_newSession{background:var(--acid-sidebar-new-bg);color:var(--acid-sidebar-new-fore);border:1px solid var(--acid-sidebar-rule);border-radius:2px;font-weight:700}\nhtml[data-industrial-acid] ._2H3hWW_newSession:hover{background:var(--acid-blue);color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] ._2H3hWW_panelActive{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);--dsw-alias-label-primary:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] [data-slot=sidebar] [aria-current=page],html[data-industrial-acid] [data-slot=sidebar] [aria-selected=true]{color:var(--acid-sidebar-active-fore);background:var(--acid-sidebar-active)}\nhtml[data-industrial-acid] ._2H3hWW_regionArea{border-top:1px solid var(--acid-sidebar-rule);margin-top:12px;padding-top:12px}\nhtml[data-industrial-acid] ._2H3hWW_footArea{border-top:1px solid var(--acid-sidebar-rule);padding-top:8px}\n.acid-sidebar-signature{width:100%;color:var(--acid-sidebar-signature);padding:8px 0 2px;box-sizing:border-box}\n.acid-sidebar-signature strong{font:900 clamp(26px,3vw,50px)/.92 var(--acid-display);font-synthesis:none;letter-spacing:-.025em;display:block}\n.acid-sidebar-signature-base{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:8px;font:10px/1.3 var(--acid-mono)}\n.acid-stripes{width:64px;height:15px;background:repeating-linear-gradient(115deg,transparent 0 5px,var(--acid-sidebar-signature) 5px 10px)}\n/* Hero headline remains locale-owned. The English display line is decorative. */\nhtml[data-industrial-acid] [data-slot=conversation] [class$=_hero]{min-height:0}\n.acid-hero-mark{width:56px;height:60px;background:var(--acid-lime);color:var(--acid-accent-fore);display:flex;flex-direction:column;justify-content:space-between;padding:6px;box-sizing:border-box;font:900 24px/1 var(--acid-display);font-synthesis:none;flex:none}\n.acid-hero-bars{height:15px;background:repeating-linear-gradient(115deg,transparent 0 5px,var(--acid-accent-fore) 5px 10px)}\nhtml[data-industrial-acid] .Hqq-bq_headline{font-size:clamp(23px,3.2vw,50px);font-weight:900;letter-spacing:-.04em;line-height:1.2;justify-content:flex-start}\nhtml[data-industrial-acid] [data-slot='conversation.hero.brand.mark']{color:var(--acid-accent-fore)}\nhtml[data-industrial-acid] .Hqq-bq_stack:after{content:'NEW\\a SESSION';white-space:pre;display:block;font:900 clamp(38px,6vw,88px)/.92 var(--acid-display);font-synthesis:none;letter-spacing:-.035em;color:var(--dsw-alias-label-primary);align-self:flex-start;margin-top:16px;border-bottom:1px solid var(--acid-rule);padding-bottom:12px}\nhtml[data-industrial-acid] .RlGAzG_card{border:1px solid var(--acid-rule);box-shadow:none;border-radius:2px}\nhtml[data-industrial-acid] .RlGAzG_primary{border-radius:2px;background:var(--acid-blue);color:var(--acid-blue-fore);width:40px;height:40px}\nhtml[data-industrial-acid] .RlGAzG_add{border-radius:2px;border:1px solid var(--acid-rule)}\nhtml[data-industrial-acid] .RlGAzG_input{line-height:1.65}\nhtml[data-industrial-acid] [data-slot='conversation.session.header']{border-bottom:1px solid var(--acid-rule)}\nhtml[data-industrial-acid] [data-slot='conversation.session.tabs']{font-family:var(--acid-mono)}\n/* Native file/changes cards branch on the application's dark-mode attribute.\n   Resolve their local fills from the skin's canvas tokens instead. */\nhtml[data-industrial-acid] body .flL80G_root{--deliverable-fill:var(--dsw-alias-bg-layer-1);--deliverable-hover:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] body .kuvljq_card{--changes-fill:var(--dsw-alias-bg-layer-1);--changes-hover:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] body .flL80G_fileIcon,html[data-industrial-acid] body .kuvljq_tile{background:var(--dsw-alias-bg-base)}\n/* OS application icons are image assets; a dark tile keeps white glyphs visible. */\nhtml[data-industrial-acid] .flL80G_actions .WgQWqa_appIcon{background:var(--acid-ink);padding:2px;border-radius:1px}\nhtml[data-industrial-acid] ._0Fr0Ha_arrow{background:var(--dsw-specific-selector);color:var(--dsw-alias-label-primary)}\nhtml[data-industrial-acid] ._0Fr0Ha_arrow:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}\nhtml[data-industrial-acid] .md-code-block{--dsw-alias-markdown-code-block:#121711;--dsw-alias-markdown-code-block-banner:#121711;--dsw-alias-label-primary:#f0f0e6;--dsw-alias-label-secondary:#cbd5bf;--dsw-alias-label-tertiary:#a4b397;--shiki-light:#f0f0e6;border-left:5px solid var(--acid-lime);border-radius:2px}\nhtml[data-industrial-acid] .md-code-block pre code{font-family:var(--acid-mono);color:inherit}\nhtml[data-industrial-acid] .md-code-block .shiki span{color:var(--shiki-dark,inherit)!important}\nhtml[data-industrial-acid] .Hqq-bq_previewBadge{border-radius:1px;background:var(--acid-blue);color:var(--acid-blue-fore)}\n/* Plugins stay a native, searchable/configurable list. */\nhtml[data-industrial-acid] .fO69Vq_page{padding:clamp(18px,2vw,30px);width:100%;max-width:none;box-sizing:border-box;gap:20px}\nhtml[data-industrial-acid] .fO69Vq_pageHead{padding-top:0}\nhtml[data-industrial-acid] .fO69Vq_page>*{max-width:none}\nhtml[data-industrial-acid] .fO69Vq_pageTitle{font-size:18px;font-weight:700;line-height:1.3}\nhtml[data-industrial-acid] .fO69Vq_pageTitle:before{content:'PLUGINS';display:block;font:900 clamp(32px,4.7vw,66px)/1.05 var(--acid-display);font-synthesis:none;letter-spacing:-.025em;margin-bottom:8px}\nhtml[data-industrial-acid] .fO69Vq_cards{counter-reset:acid-plugins}\nhtml[data-industrial-acid] .fO69Vq_card{position:relative;counter-increment:acid-plugins;border-radius:0;border-bottom:1px solid var(--acid-rule);margin:0}\nhtml[data-industrial-acid] .fO69Vq_card:before{content:counter(acid-plugins,decimal-leading-zero);position:absolute;left:0;top:18px;font:18px/1 var(--acid-mono);color:var(--dsw-alias-label-secondary);pointer-events:none}\nhtml[data-industrial-acid] .fO69Vq_cardHead{padding:10px 4px 10px 44px}\nhtml[data-industrial-acid] .fO69Vq_cardIcon{border:1px solid var(--acid-rule);border-radius:2px}\nhtml[data-industrial-acid] .fO69Vq_cardTitle{font-weight:700;font-size:16px}\nhtml[data-industrial-acid] .fO69Vq_card:hover{background:var(--acid-blue);--dsw-alias-label-primary:var(--acid-blue-fore);--dsw-alias-label-secondary:var(--acid-blue-fore);--dsw-alias-label-tertiary:var(--acid-blue-fore);color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] .fO69Vq_card:hover:before{color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] .fO69Vq_addButton{border-radius:2px;background:var(--acid-blue);color:var(--acid-blue-fore);height:38px}\n/* Keep native dialogs and their focus/close handling. */\nhtml[data-industrial-acid] .wCInkW_overlay{box-sizing:border-box;align-items:flex-start;padding-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height) + 20px);padding-bottom:24px}\nhtml[data-industrial-acid] .wCInkW_mask{top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height))}\nhtml[data-industrial-acid] .wCInkW_panel{width:1050px;height:min(800px,calc(100vh - var(--dsh-frame-chrome-top,0px) - var(--acid-header-height) - 44px));border:1px solid var(--acid-rule);border-radius:2px;display:grid;grid-template-columns:220px minmax(0,1fr);grid-template-rows:72px minmax(0,1fr)}\nhtml[data-industrial-acid] .wCInkW_nav{background:var(--acid-settings-nav-bg);color:var(--acid-settings-nav-fore);width:auto;padding:12px;counter-reset:acid-settings;grid-column:1;grid-row:2;min-height:0}\nhtml[data-industrial-acid] .wCInkW_navTitle{color:var(--dsw-alias-label-primary);font-family:var(--acid-mono);position:absolute;top:0;left:0;height:72px;box-sizing:border-box;width:calc(100% - 220px);display:flex;align-items:center;padding:0 20px;z-index:1;pointer-events:none}\nhtml[data-industrial-acid] .wCInkW_content{display:contents}\nhtml[data-industrial-acid] .wCInkW_navCell{color:var(--acid-settings-nav-fore);border-radius:2px;min-height:44px;counter-increment:acid-settings;padding-left:10px}\nhtml[data-industrial-acid] .wCInkW_navCell:before{content:counter(acid-settings,decimal-leading-zero);font:14px/1 var(--acid-mono);margin-right:4px}\nhtml[data-industrial-acid] .wCInkW_navCell.wCInkW_active{background:var(--acid-lime);color:var(--acid-accent-fore)}\nhtml[data-industrial-acid] .wCInkW_navCell:hover:not(.wCInkW_active){background:var(--acid-settings-nav-hover)}\nhtml[data-industrial-acid] .wCInkW_header{height:auto;min-height:72px;border-bottom:1px solid var(--acid-rule);align-items:center;padding:14px 16px;grid-column:1/-1;grid-row:1}\n.acid-settings-title{display:flex;align-items:baseline;flex-wrap:wrap;gap:10px}\n.acid-settings-title strong{font:900 clamp(23px,3vw,38px)/1 var(--acid-display);font-synthesis:none}\n.acid-settings-title span{font:14px/1.4 var(--acid-mono)}\nhtml[data-industrial-acid] .wCInkW_options{padding-top:6px;grid-column:2;grid-row:2;min-height:0}\nhtml[data-industrial-acid] .v01cdW_themeCube{padding:12px 14px;border:1px solid var(--acid-rule);border-radius:2px}\nhtml[data-industrial-acid] .v01cdW_themeCube[aria-pressed=true]{background:var(--acid-lime);color:var(--acid-accent-fore);border:2px solid var(--acid-blue)}\n.acid-setting-row{display:flex;gap:20px;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:14px}\n.acid-setting-row label{font-weight:600}.acid-setting-row p{margin:4px 0 0;font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary);max-width:420px}\n.acid-setting-row select{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--acid-rule);border-radius:2px;font:inherit;padding:8px;min-width:130px}\n.acid-footer{width:100%;min-width:0}\n.acid-mode-switch{display:flex;gap:3px;padding:10px 0 4px;flex-wrap:wrap}\n.acid-mode-switch button{display:inline-flex;align-items:center;justify-content:center;gap:4px;min-height:28px;flex:1;padding:4px 5px;background:transparent;color:var(--acid-sidebar-fore);border:1px solid var(--acid-sidebar-rule);border-radius:2px;font:11px/1.3 var(--dsw-font-family);cursor:pointer;white-space:nowrap}\n.acid-mode-switch button:hover{background:var(--acid-sidebar-hover)}\n.acid-mode-switch button[aria-pressed=true]{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);border-color:var(--acid-sidebar-active-fore)}\n.acid-mode-switch-rail{flex-direction:column;align-items:center}\n.acid-mode-switch-rail button{width:28px;flex:none}\n.acid-appearance-settings{padding-bottom:16px;border-bottom:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}\n.acid-appearance-settings .acid-setting-row{border-bottom:0;padding-bottom:12px}\n.acid-palette-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-top:2px}\n.acid-palette-head strong{font:14px/1.5 var(--acid-mono)}\n.acid-palette-head p{font-size:12px;color:var(--dsw-alias-label-secondary);margin:4px 0 10px}\n.acid-palette-head button,.acid-palette-presets button{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:2px;padding:6px 10px;min-height:30px;cursor:pointer;font:12px/1.4 var(--dsw-font-family)}\n.acid-palette-head button:hover,.acid-palette-presets button:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-palette-presets{display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 14px}\n.acid-palette-presets button{display:inline-flex;align-items:center;gap:7px}\n.acid-palette-presets button[aria-pressed=true]{border-color:var(--acid-accent-display);box-shadow:inset 0 -2px var(--acid-accent-display)}\n.acid-preset-dot{display:inline-block;width:12px;height:12px;border:1px solid var(--dsw-alias-border-l2);flex:none}\n.acid-palette-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}\n.acid-color-field{min-width:0}\n.acid-color-field label{display:block;font-size:12px;margin-bottom:5px}\n.acid-color-inputs{display:flex;gap:7px;align-items:stretch}\n.acid-color-inputs input[type=color]{box-sizing:border-box;width:42px;height:32px;padding:2px;border:1px solid var(--dsw-alias-border-l2);border-radius:2px;background:var(--dsw-alias-bg-layer-1);flex:none;cursor:pointer}\n.acid-color-inputs input[type=color]::-webkit-color-swatch-wrapper{padding:0}.acid-color-inputs input[type=color]::-webkit-color-swatch{border:0;border-radius:0}\n.acid-color-inputs input[type=text]{box-sizing:border-box;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:2px;padding:4px 8px;min-width:0;width:100%;font:12px/1.5 var(--acid-mono)}\n.acid-color-inputs input[aria-invalid=true]{border-color:var(--dsw-alias-state-error-primary)}\n.acid-palette-preview{display:flex;align-items:center;gap:8px;min-height:44px;border:1px solid var(--dsw-alias-border-l2);padding:7px 10px;margin-top:14px;box-sizing:border-box;font:16px/1.4 var(--acid-mono)}\n.acid-palette-preview strong{margin-right:auto}.acid-palette-preview span{padding:2px 10px;font-family:var(--acid-display);font-weight:900;font-synthesis:none}\n.acid-contrast-note{margin:7px 0 0;font-size:11px;line-height:1.5;color:var(--dsw-alias-label-secondary)}\nhtml[data-industrial-acid][data-industrial-mode=night] .BynINW_centerCol{border-left-color:var(--acid-sidebar-rule)}\nhtml[data-industrial-acid][data-industrial-mode=night] .acid-masthead{border-bottom:2px solid var(--acid-masthead-fore)}\nhtml[data-industrial-acid][data-industrial-mode=night] .hIlkoa_sessionRow.hIlkoa_selected{box-shadow:inset 2px 0 var(--acid-sidebar-active-fore)}\n/* Real trajectory kinds, timing data and error statuses remain semantic. */\nhtml[data-industrial-acid] .haSm5q_table{font-family:var(--acid-mono)}\nhtml[data-industrial-acid] .haSm5q_toolAmber,html[data-industrial-acid] .haSm5q_subtoolAmber{background:var(--acid-lime);color:var(--acid-accent-fore);border-radius:1px}\nhtml[data-industrial-acid] .haSm5q_assistantVioletBright{background:var(--acid-blue);color:var(--acid-blue-fore);border-radius:1px}\nhtml[data-industrial-acid] .haSm5q_table tr[data-kind=tool],html[data-industrial-acid] .haSm5q_table tr[data-kind=subtool]{border-bottom:1px solid var(--dsw-alias-border-l1)}\nhtml[data-industrial-acid] .haSm5q_table tr[data-kind=tool]:hover{background:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] .ZNyiNW_span[data-timeline-span=message]{--trajectory-assistant-decoding-color:var(--acid-blue);--trajectory-assistant-ttft-color:color-mix(in srgb,var(--acid-blue),white 55%)}\nhtml[data-industrial-acid] .ZNyiNW_span[data-timeline-span=tool],html[data-industrial-acid] .ZNyiNW_span[data-timeline-span=subtool]{background:var(--acid-lime);box-shadow:inset 0 0 0 1px var(--acid-ink)}\n@media(max-width:900px){html[data-industrial-acid]{--acid-header-height:clamp(96px,18vh,148px)}.acid-masthead{grid-template-columns:76fr 24fr}.acid-context{padding:10px}.acid-context-number{font-size:clamp(35px,7vh,66px)}.acid-meta{font-size:9px;letter-spacing:0}.acid-context-title{font-size:11px}.acid-sidebar-signature strong{font-size:30px}html[data-industrial-acid] .wCInkW_panel{grid-template-columns:176px minmax(0,1fr);max-width:calc(100vw - 24px)}}\n@media(max-height:650px){html[data-industrial-acid]{--acid-header-height:112px}.acid-context-number{font-size:60px}.acid-hero-mark{height:40px;width:40px;font-size:19px}html[data-industrial-acid] .Hqq-bq_stack:after{font-size:38px;margin-top:8px}.acid-sidebar-signature{display:none}}\n@media(prefers-reduced-motion:reduce){html[data-industrial-acid] .acid-masthead *,html[data-industrial-acid] .acid-sidebar-signature *{animation:none;transition:none}}\n\n/* Approved planar shell, scoped to the skin. Native content and behavior remain in place. */\nhtml[data-industrial-acid]{--acid-header-height:128px;--dsh-frame-chrome-top:0px!important;--dsh-windows-titlebar-height:0px!important;--acid-fx-color:var(--acid-accent-display)}\nhtml[data-industrial-acid] .BynINW_frame{padding-top:var(--acid-header-height)}\nhtml[data-industrial-acid] .BynINW_frame:before{display:none}\nhtml[data-industrial-acid] .BynINW_handle{top:var(--acid-header-height)}\nhtml[data-industrial-acid] .BynINW_centerCol{border-left:1px solid var(--acid-rule);position:relative}\nhtml[data-industrial-acid] .acid-masthead{top:0;height:var(--acid-header-height);grid-template-columns:minmax(280px,1fr) 190px minmax(300px,460px) 48px;pointer-events:auto!important;-webkit-app-region:drag;border-bottom:1px solid var(--acid-accent-display)}\nhtml[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(280px,1fr) minmax(300px,460px)}\nhtml[data-industrial-acid] .acid-masthead button{-webkit-app-region:no-drag}\nhtml[data-industrial-acid] .acid-wordmark{padding:18px 27px;gap:19px;background:var(--acid-lime);color:var(--acid-accent-fore);position:relative;isolation:isolate}\n.acid-wordmark:after{content:'';position:absolute;right:0;top:0;width:18px;height:100%;background:linear-gradient(to bottom,var(--dsw-alias-bg-base) 0 18px,transparent 18px 52%,var(--dsw-alias-bg-base) 52% 65%,transparent 65%);z-index:-1}\n.acid-sidebar-toggle{width:32px;height:44px;flex:none;padding:7px;background:transparent;color:inherit;border:1px solid currentColor;cursor:pointer}\n.acid-sidebar-toggle svg{width:100%;height:100%;stroke:currentColor;fill:none;stroke-width:1.25}\n.acid-brand-home{min-width:0;flex:1;display:flex;align-items:center;gap:20px;background:transparent;color:inherit;border:0;padding:0;cursor:pointer}\nhtml[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:78px;height:78px;fill:currentColor;flex:none}\n.acid-wordmark-svg{min-width:0;width:100%;max-width:600px;display:block}\n.acid-wordmark-svg>svg{width:100%;max-height:88px;display:block;color:inherit;fill:currentColor;font-weight:900;font-synthesis:none}\n.acid-menus{display:grid;grid-template-columns:1fr 1fr;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}\n.acid-menus button{min-width:0;padding:12px;display:flex;align-items:center;gap:9px;background:transparent;color:inherit;border:0;border-right:1px solid var(--acid-rule);font:12px var(--dsw-font-family);cursor:pointer}\n.acid-menus button>span:not(.acid-fx){font:10px var(--acid-mono);color:var(--dsw-alias-label-secondary)}\nhtml[data-industrial-acid] .acid-context{display:flex;flex-direction:row;align-items:center;gap:18px;padding:19px 25px;border:0;border-top:5px solid var(--acid-lime);background:var(--acid-context-bg);color:var(--acid-context-fore);text-align:left;cursor:pointer;position:relative;isolation:isolate}\n.workspace-counter{position:relative;flex:none;inline-size:2.5em;block-size:1em;font:900 72px/1 var(--acid-display);font-synthesis:none;color:var(--acid-context-number)}\n.workspace-index,.workspace-number-ghost{display:flex;gap:.015em;position:relative;font:inherit;line-height:1;letter-spacing:0;color:inherit;transition:none}\n.workspace-number-ghost{position:absolute;inset:0;pointer-events:none}\n.workspace-digit{display:block;flex:none;inline-size:.72em;block-size:1em;overflow:hidden;text-align:center}\n.workspace-glyph{display:block}.workspace-overflow{position:absolute;right:0;top:.1em;font-size:.28em;line-height:1}\n.workspace-detail{display:flex;flex-direction:column;gap:16px;flex:1;min-width:0}\n.workspace-detail .acid-meta{font:10px var(--acid-mono);letter-spacing:.08em;white-space:nowrap}\n.workspace-name-slot{position:relative;display:block;min-width:0;overflow:hidden}\n.workspace-name-slot .acid-context-title,.workspace-name-ghost{display:block;width:100%;font:21px/1.2 var(--acid-mono);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.workspace-name-ghost{position:absolute;inset:0;pointer-events:none}\n.acid-workspace-arrow{font:28px var(--acid-mono);color:var(--acid-context-fore)}\n.workspace-switch-line{position:absolute;bottom:10px;left:25px;right:25px;height:3px;background:linear-gradient(to right,var(--acid-context-number) 0 69%,transparent 69% 73%,var(--acid-blue) 73%);opacity:0;pointer-events:none}\n.acid-window-controls{display:grid;grid-template-rows:repeat(3,1fr);background:var(--dsw-alias-bg-base);border-left:1px solid var(--acid-rule)}\n.acid-window-controls button{padding:0;width:100%;height:100%;color:var(--dsw-alias-label-primary);background:transparent;border:0;border-bottom:1px solid var(--acid-rule);font:20px var(--dsw-font-family);cursor:pointer}\n.acid-window-controls button:last-child{border-bottom:0}.acid-window-controls button:last-child:hover{color:#fff;background:#c5352d}\nhtml[data-industrial-acid] [data-windows-menu]{display:none!important}\nhtml[data-industrial-acid] ._2H3hWW_toggle,html[data-industrial-acid] ._2H3hWW_brand{display:none!important}\nhtml[data-industrial-acid] ._2H3hWW_logoRow{height:0!important;min-height:0!important;margin:0!important;padding:0!important}\nhtml[data-industrial-acid] ._2H3hWW_root{padding-top:23px;--dsh-sidebar-inline-padding:16px}\nhtml[data-industrial-acid] ._2H3hWW_newSession{height:52px;border-radius:0;margin-top:0!important;clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)}\nhtml[data-industrial-acid] ._2H3hWW_newSession:not(:disabled):hover{background:var(--acid-sidebar-new-bg);color:var(--acid-sidebar-new-fore)}\nhtml[data-industrial-acid] ._2H3hWW_panelRow{border-radius:0;min-height:47px;margin-top:6px}\nhtml[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_newSession{position:relative;top:auto;left:auto;margin-top:0!important}\nhtml[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_panelList,html[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_footArea{display:flex}\nhtml[data-industrial-acid] [data-acid-ordinal]:before{content:attr(data-acid-ordinal);font:10px var(--acid-mono);color:var(--acid-sidebar-secondary);margin-right:8px;flex:none}\n.acid-workspace-rail{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;min-height:0;width:36px;box-sizing:border-box;padding-bottom:8px;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain}\n.acid-workspace-rail::-webkit-scrollbar{display:none}\n.acid-rail-workspace{display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;width:36px;height:36px;padding:0;border:1px solid transparent;background:transparent;color:var(--acid-sidebar-fore);font:700 10px/1 var(--acid-mono);cursor:pointer}\n.acid-rail-workspace:hover{background:var(--acid-sidebar-hover)}\n.acid-rail-workspace[aria-pressed=true]{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);border-color:var(--acid-sidebar-active-fore)}\n.acid-rail-workspace:focus-visible{outline:2px solid var(--acid-sidebar-fore);outline-offset:-2px}\n.acid-sidebar-cut{height:88px;display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr .6fr;gap:5px;margin:20px 0 12px}\n.acid-sidebar-cut span{background:var(--acid-sidebar-signature);clip-path:polygon(0 0,100% 0,100% 58%,70% 58%,70% 100%,0 100%)}\n.acid-sidebar-cut span:nth-child(2){margin-top:24px}.acid-sidebar-cut span:nth-child(3){background:var(--acid-blue);margin-top:24px;clip-path:none}.acid-sidebar-cut span:nth-child(4){clip-path:polygon(0 0,100% 0,100% 100%,50% 100%,50% 45%,0 45%)}.acid-sidebar-cut span:nth-child(5){background:repeating-linear-gradient(to bottom,var(--acid-sidebar-signature) 0 3px,transparent 3px 7px);clip-path:none}\n.acid-mode-switch{gap:3px;padding:6px 0 4px}.acid-mode-switch button{border-radius:0;font-size:10px;min-height:30px}\n.acid-mode-switch button[aria-pressed=true]{background:var(--acid-sidebar-fore);color:var(--acid-sidebar-bg);border-color:var(--acid-sidebar-fore)}\n.acid-palette-shortcut{display:flex;align-items:center;gap:8px;width:100%;font:11px var(--dsw-font-family);background:transparent;color:var(--acid-sidebar-fore);border:1px solid var(--acid-sidebar-rule);padding:8px;margin-top:4px;cursor:pointer}\n.acid-palette-shortcut>span:last-child{margin-left:auto}.acid-palette-swatch{width:14px;height:14px;background:linear-gradient(135deg,var(--acid-lime) 50%,var(--acid-blue) 50%)}\nhtml[data-industrial-acid] .Hqq-bq_stack:after,html[data-industrial-acid] .fO69Vq_pageTitle:before{content:none}\nhtml[data-industrial-acid] .Hqq-bq_headline{justify-content:center;font-size:clamp(25px,3.2vw,47px);gap:16px}\nhtml[data-industrial-acid] .acid-hero-mark{width:56px;height:56px;padding:0;background:transparent;color:var(--dsw-alias-label-primary);fill:currentColor;display:block}\n/* Native command/attachment menus live inside the card and extend above it.\n   Paint the cut corner without clipping those interactive descendants. */\nhtml[data-industrial-acid] .RlGAzG_card{border-radius:0;clip-path:none}\nhtml[data-industrial-acid] .RlGAzG_card:after{content:'';position:absolute;right:-1px;bottom:-1px;width:12px;height:12px;background:linear-gradient(135deg,transparent calc(50% - .5px),var(--acid-rule) calc(50% - .5px),var(--acid-rule) calc(50% + .5px),var(--dsw-alias-bg-base) calc(50% + .5px));pointer-events:none}\nhtml[data-industrial-acid] .RlGAzG_card [data-trigger-menu]{max-height:var(--acid-composer-menu-height,400px)!important}\nhtml[data-industrial-acid] .RlGAzG_primary{background:var(--acid-lime);color:var(--acid-accent-fore);border-radius:0;clip-path:polygon(0 0,100% 0,100% 76%,76% 76%,76% 100%,0 100%)}\nhtml[data-industrial-acid] .RlGAzG_add{border-radius:0}\nhtml[data-industrial-acid] .fO69Vq_card:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);--dsw-alias-label-primary:inherit;--dsw-alias-label-secondary:inherit;--dsw-alias-label-tertiary:inherit}\nhtml[data-industrial-acid] .fO69Vq_cardTitle{font-size:18px}.acid-settings-title{font:28px var(--dsw-font-family)}\nhtml[data-industrial-acid] .wCInkW_panel{animation:acid-panel-in .36s cubic-bezier(.16,.8,.18,1) both}\nhtml[data-industrial-acid] .wCInkW_options>*,html[data-industrial-acid] .fO69Vq_cardHead{animation:acid-layer-in .42s cubic-bezier(.16,.8,.18,1) both}\nhtml[data-industrial-acid] .wCInkW_options>*:nth-child(2){animation-delay:45ms}html[data-industrial-acid] .wCInkW_options>*:nth-child(3){animation-delay:90ms}\n.acid-dialog{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);border:1px solid var(--acid-rule);width:min(660px,calc(100vw - 36px));max-height:calc(100dvh - 50px);padding:22px;box-sizing:border-box;box-shadow:7px 7px 0 color-mix(in srgb,var(--acid-lime),transparent 70%);animation:acid-panel-in .35s cubic-bezier(.16,.8,.18,1) both}\n.acid-dialog::backdrop{background:#000a;backdrop-filter:blur(4px)}\n.acid-dialog-heading{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid var(--acid-rule);margin-bottom:16px}.acid-dialog-heading h2{font:24px var(--dsw-font-family);margin:0}\n.acid-dialog-heading button{width:29px;height:29px;background:transparent;color:inherit;border:1px solid var(--acid-rule);font:20px var(--dsw-font-family);cursor:pointer}\n.acid-workspace-option{display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:14px;width:100%;padding:18px 5px;align-items:center;background:transparent;color:inherit;border:0;border-bottom:1px solid var(--acid-rule);text-align:left;cursor:pointer}\n.acid-workspace-option>span:first-of-type{font:900 22px var(--acid-display);font-synthesis:none;color:var(--acid-accent-display)}.acid-workspace-option strong{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.acid-workspace-option[aria-pressed=true]{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-route-curtain{position:fixed;z-index:40;display:grid;grid-template-rows:repeat(var(--bands),1fr);overflow:hidden;pointer-events:none}\n.acid-route-curtain[data-transition=page]{display:flex}\n.acid-curtain-band{position:relative;flex:1;height:100%;background:var(--dsw-alias-bg-layer-1);border-bottom:2px solid var(--dsw-alias-bg-base)}\n.acid-curtain-band:before{content:'';position:absolute;inset:0 auto 0 0;width:7px;background:var(--acid-accent-display)}.acid-curtain-band:nth-child(2):before{background:var(--acid-blue)}\n.acid-curtain-band:after{content:'';position:absolute;right:0;top:0;width:24%;height:3px;background:var(--acid-accent-display)}\n.acid-layered{isolation:isolate}.acid-layer-positioned{position:relative}.acid-fx{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none!important;color:var(--acid-fx-color);contain:layout paint}\n.acid-fx-slice{position:absolute;left:0;right:0;top:calc(var(--slice)*100%/6);height:calc(100%/6);opacity:0;transform:scaleX(.12);background:linear-gradient(to bottom,currentColor 0 2px,transparent 2px calc(100% - 2px),var(--acid-blue) calc(100% - 2px));pointer-events:none!important}\n.acid-fx-frame{position:absolute;inset:3px;border:1px solid currentColor;opacity:0;pointer-events:none!important}\n.acid-fx-registration{position:absolute;left:5px;right:5px;bottom:4px;height:3px;background:linear-gradient(to right,currentColor 0 17%,transparent 17% 23%,currentColor 23% 42%,transparent 42% 69%,var(--acid-blue) 69%);opacity:0;pointer-events:none!important}\n.acid-brand-home .acid-fx,.acid-sidebar-toggle .acid-fx{color:currentColor}.acid-menus button:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-intro{position:fixed;inset:0;z-index:2000;background:var(--acid-lime);color:var(--acid-accent-fore);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;pointer-events:none;animation:acid-intro-screen 1.15s cubic-bezier(.16,.8,.18,1) both}\n.acid-intro-name{font:900 clamp(40px,8vw,110px)/.9 var(--acid-display);font-synthesis:none;text-align:center;letter-spacing:-.035em}.acid-intro-name span{font:11px var(--acid-mono);letter-spacing:1.15em;display:block;margin-top:22px;padding-left:1.15em}\n.acid-intro-bar{width:180px;height:3px;background:currentColor;transform-origin:left;animation:acid-intro-line 1.05s cubic-bezier(.16,.8,.18,1) both}\n@keyframes acid-intro-screen{0%{clip-path:inset(100% 0 0)}20%,65%{clip-path:inset(0)}100%{clip-path:inset(0 0 100%)}}\n@keyframes acid-intro-line{0%,20%{transform:scaleX(0)}65%,100%{transform:scaleX(1)}}\n@keyframes acid-panel-in{from{clip-path:inset(0 0 100%);transform:translateY(12px)}to{clip-path:inset(0);transform:translateY(0)}}\n@keyframes acid-layer-in{from{opacity:0;transform:translateX(-16px);clip-path:inset(0 100% 0 0)}to{opacity:1;transform:translateX(0);clip-path:inset(0)}}\nhtml[data-industrial-motion=off] .acid-fx,html[data-industrial-motion=off] .acid-intro{display:none}\nhtml[data-industrial-motion=off] .acid-dialog,html[data-industrial-motion=off] .wCInkW_panel,html[data-industrial-motion=off] .wCInkW_options>*,html[data-industrial-motion=off] .fO69Vq_cardHead{animation:none!important}\n@media(min-width:1900px){html[data-industrial-acid]{--acid-header-height:145px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(350px,1fr) 230px minmax(350px,540px) 52px}.workspace-counter{font-size:85px}}\n@media(max-width:1190px){html[data-industrial-acid]{--acid-header-height:112px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(270px,1fr) 132px 295px 44px}html[data-industrial-acid] .acid-wordmark{padding:15px;gap:10px}.acid-brand-home{gap:12px}html[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:59px;height:59px}html[data-industrial-acid] .acid-context{padding:14px 17px;gap:13px}.workspace-counter{font-size:48px}.workspace-detail .acid-meta{font-size:8px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:17px}.acid-workspace-arrow{font-size:22px}.acid-menus button{padding:8px;gap:4px;font-size:11px}.acid-sidebar-cut{height:68px}}\n@media(max-width:980px){html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(180px,1fr) 76px 276px 44px}.acid-menus{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.acid-menus button{border-bottom:1px solid var(--acid-rule);font-size:10px}.acid-menus button:last-child{border-bottom:0}html[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(220px,1fr) 276px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:16px}}\n@media(max-width:720px){html[data-industrial-acid]{--acid-header-height:102px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(0,1fr) 48px 154px 36px}.acid-menus button{justify-content:center;padding:5px 2px;font-size:10px}.acid-menus button>span:not(.acid-fx){display:none}html[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,1fr) 154px}html[data-industrial-acid] .acid-wordmark{padding:9px 8px;gap:6px}.acid-brand-home{gap:5px;flex-direction:column;align-items:stretch}html[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:35px;height:35px}.acid-sidebar-toggle{height:50px;width:25px;border:0;padding:3px}.acid-wordmark-svg>svg{max-height:37px}html[data-industrial-acid] .acid-context{flex-direction:column;align-items:flex-start;padding:8px 11px;border-top-width:3px}.workspace-counter{font-size:32px;position:absolute;right:10px;top:25px}.workspace-detail{gap:0;flex:1;width:100%;align-self:stretch}.workspace-detail .workspace-name-slot{position:absolute;left:11px;right:11px;bottom:10px;width:auto;height:14px}.workspace-detail .acid-meta{font-size:7px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:11px}.acid-workspace-arrow{display:none}.workspace-switch-line{left:11px;right:11px;bottom:8px;height:2px}.acid-dialog{padding:18px}.acid-workspace-option{grid-template-columns:56px minmax(0,1fr) auto}.acid-palette-fields{grid-template-columns:1fr}html[data-industrial-acid] .wCInkW_panel{grid-template-columns:150px minmax(0,1fr);grid-template-rows:58px minmax(0,1fr)}html[data-industrial-acid] .wCInkW_navTitle{height:58px;width:calc(100% - 150px)}html[data-industrial-acid] .wCInkW_header{min-height:58px}.acid-settings-title{font-size:21px}}\n@media(prefers-reduced-motion:reduce){.acid-intro,.acid-fx{display:none}.acid-dialog,html[data-industrial-acid] .wCInkW_panel,html[data-industrial-acid] .wCInkW_options>*,html[data-industrial-acid] .fO69Vq_cardHead{animation:none!important}}\n\n/* Own the model slot only; editor, send policy and permissions remain native. */\n.acid-model-controls{display:flex;align-items:center;gap:6px;min-width:0;max-width:100%}\n.acid-model-trigger,.acid-effort-trigger{position:relative;display:flex;align-items:center;gap:6px;min-width:0;height:32px;padding:0 8px;border:1px solid var(--acid-rule);border-radius:0;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font-family:inherit;font-size:13px;line-height:1.4;cursor:pointer}\n.acid-model-trigger:hover:not(:disabled),.acid-effort-trigger:hover:not(:disabled){border-color:var(--acid-accent-display);background:var(--dsw-alias-bg-layer-3)}\n.acid-model-trigger:focus-visible,.acid-effort-trigger:focus-visible,.acid-model-popover button:focus-visible,.acid-model-popover input:focus-visible{outline:2px solid var(--acid-blue);outline-offset:2px}\n.acid-model-trigger:disabled,.acid-effort-trigger:disabled{opacity:.5;cursor:default}\n.acid-model-trigger{flex:1 1 auto;max-width:min(280px,42cqw)}\n.acid-model-trigger svg,.acid-effort-trigger svg{flex:none}\n.acid-model-name{display:var(--dsh-composer-model-text-display,block);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.acid-effort-trigger{flex:none;isolation:isolate;white-space:nowrap}\n.acid-effort-trigger>svg,.acid-effort-trigger>span{position:relative;z-index:1}\n.acid-effort-trigger[data-max]{color:var(--acid-accent-display);border-color:var(--acid-accent-display)}\n.acid-effort-trigger[data-max]:before{content:'';pointer-events:none;position:absolute;inset:2px;border-top:1px solid var(--acid-lime);border-bottom:1px solid var(--acid-lime);opacity:.5;clip-path:polygon(0 0,28% 0,28% 100%,0 100%,0 0,72% 0,100% 0,100% 100%,72% 100%,72% 0);animation:acid-reason-split 2.6s steps(1,end) infinite}\n.acid-reason-bars{display:flex;align-items:flex-end;gap:2px;height:16px;flex:none}\n.acid-reason-bars i{display:block;width:3px;background:currentColor;height:6px}.acid-reason-bars i:nth-child(2){height:11px}.acid-reason-bars i:nth-child(3){height:16px}\n.acid-model-popover{position:fixed;z-index:1100;box-sizing:border-box;width:min(520px,calc(100vw - 24px));overflow-y:auto;overscroll-behavior:contain;padding:20px;border:1px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:5px 5px 0 color-mix(in srgb,var(--acid-ink) 35%,transparent);font-family:inherit;scrollbar-width:thin}\n.acid-model-popover *{box-sizing:border-box}\n.acid-model-popover-head{position:relative;padding-right:32px;margin-bottom:14px}\n.acid-model-popover-head>span{color:var(--acid-accent-display);font:12px/1.4 var(--acid-mono)}\n.acid-model-popover-head h2{font-family:inherit;font-size:23px;font-weight:600;line-height:1.4;margin:6px 0 0}\n.acid-model-close{position:absolute;right:-6px;top:0;min-width:28px;height:28px;border:0;background:transparent;color:inherit;font-size:22px;cursor:pointer}\n.acid-model-section{display:flex;align-items:center;gap:12px;margin:12px 0 8px;font-size:14px;font-weight:600}\n.acid-model-section>span{color:var(--acid-accent-display);font:14px/1.4 var(--acid-mono)}\n.acid-model-section output{font-weight:500;margin-left:auto;color:var(--acid-accent-display);overflow-wrap:anywhere}\n.acid-model-search{display:block;width:100%;height:38px;padding:8px 10px;border:1px solid var(--acid-rule);border-radius:0;background:var(--dsw-alias-bg-layer-2);color:inherit;font-family:inherit;font-size:13px;line-height:1.4}\n.acid-model-search::placeholder{color:var(--dsw-alias-label-secondary)}\n.acid-model-list{display:flex;flex-direction:column;gap:5px;margin-top:10px;max-height:var(--acid-model-list-height,176px);overflow-y:auto;overscroll-behavior:contain}\n.acid-model-list>p{font-size:13px;color:var(--dsw-alias-label-secondary);margin:8px}\n.acid-model-option{display:flex;gap:10px;align-items:center;justify-content:space-between;width:100%;min-height:58px;flex:none;text-align:left;padding:9px 12px;border:1px solid var(--acid-rule);border-left:4px solid transparent;border-radius:0;background:var(--dsw-alias-bg-layer-1);color:inherit;cursor:pointer}\n.acid-model-option[aria-selected=true]{border-left-color:var(--acid-accent-display)}\n.acid-model-check{color:var(--acid-accent-display);font-size:20px}\n.acid-model-option:hover:not(:disabled){background:var(--dsw-alias-bg-layer-3)}\n.acid-model-option-copy{min-width:0}.acid-model-option strong{font-size:14px;font-weight:600;overflow-wrap:anywhere}\n.acid-model-option small{display:block;font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:2px;overflow-wrap:anywhere}\n.acid-model-option:disabled{cursor:default;opacity:.55}\n.acid-reason-slider{position:relative;height:152px;isolation:isolate;background:var(--dsw-alias-bg-layer-2);margin:6px 0;overflow:hidden}\n.acid-reason-energy{pointer-events:none;position:absolute;inset:0;width:100%;height:100%;z-index:0}\n.acid-reason-rail{position:absolute;left:26px;right:26px;top:54px;height:44px;z-index:2}\n.acid-reason-track{position:absolute;left:16px;right:16px;top:20px;height:4px;background:var(--acid-rule);pointer-events:none}\n.acid-reason-track:before{position:absolute;inset:0;width:var(--reason-fill);content:'';background:var(--acid-accent-display);transition:width .15s ease-out}\n.acid-reason-flow{position:absolute;left:16px;right:16px;top:14px;height:17px;opacity:0;pointer-events:none;background:repeating-linear-gradient(90deg,transparent 0 22px,var(--acid-lime) 22px 34px,transparent 34px 50px);clip-path:polygon(0 35%,100% 35%,100% 47%,0 47%,0 65%,100% 65%,100% 77%,0 77%)}\n.acid-reason-rail input[type=range]{position:relative;width:100%;height:44px;display:block;margin:0;appearance:none;-webkit-appearance:none;background:transparent;cursor:ew-resize;z-index:3}\n.acid-reason-rail input[type=range]::-webkit-slider-runnable-track{height:4px;background:transparent}\n.acid-reason-rail input[type=range]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:32px;height:32px;margin-top:-14px;border:6px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-layer-2)}\n.acid-reason-rail input[type=range]::-moz-range-track{height:4px;background:transparent}\n.acid-reason-rail input[type=range]::-moz-range-thumb{width:20px;height:20px;border:6px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-layer-2)}\n.acid-reason-rail input:disabled{cursor:default;opacity:.5}\n.acid-reason-levels{position:absolute;left:26px;right:26px;top:112px;display:flex;justify-content:space-between;gap:6px;max-width:100%;font-family:inherit;font-size:12px;line-height:1.4;color:var(--dsw-alias-label-secondary)}\n.acid-reason-levels>span{min-width:0;overflow-wrap:anywhere}.acid-reason-levels>span[data-current]{color:var(--acid-accent-display);font-weight:600}\n.acid-reason-slices{position:absolute;inset:14px;opacity:0;pointer-events:none}\n.acid-reason-slices:before,.acid-reason-slices:after{content:'';position:absolute;right:6px;top:8px;width:90px;height:126px;border:1px solid var(--acid-lime);clip-path:polygon(0 0,100% 0,100% 25%,94% 25%,94% 5%,0 5%,0 48%,100% 48%,100% 52%,0 52%,0 95%,94% 95%,94% 75%,100% 75%,100% 100%,0 100%)}\n.acid-reason-slices:after{right:12px;border-color:var(--acid-blue);opacity:.65}\n.acid-reason-ghost{position:absolute;right:1px;top:7px;width:30px;height:30px;border:1px solid var(--acid-lime);pointer-events:none;opacity:0}\n.acid-reason-slider[data-max] .acid-reason-flow{opacity:.8;animation:acid-reason-flow .65s linear infinite}\n.acid-reason-slider[data-max] .acid-reason-slices{opacity:1}\n.acid-reason-slider[data-max] .acid-reason-slices:before{animation:acid-reason-split 2.4s steps(1,end) infinite}\n.acid-reason-slider[data-max] .acid-reason-slices:after{animation:acid-reason-split 2.8s steps(1,end) infinite reverse}\n.acid-reason-slider[data-max] .acid-reason-ghost{animation:acid-reason-ghost 1.1s ease-out infinite}\n.acid-reason-slider[data-max] input[type=range]::-webkit-slider-thumb{background:var(--acid-lime);box-shadow:inset 0 0 0 7px var(--acid-ink),0 0 18px color-mix(in srgb,var(--acid-lime) 35%,transparent)}\n.acid-reason-slider[data-impact] .acid-reason-slices{animation:acid-reason-impact .75s ease-out}\n.acid-model-error{font-size:12px;color:var(--dsw-alias-state-error-primary);padding:10px 0;overflow-wrap:anywhere}\n.acid-model-error button{margin-left:8px;color:inherit;border:1px solid currentColor;background:transparent;padding:4px 8px;cursor:pointer}\n.acid-model-notice,.acid-model-note{font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary);margin:10px 0 0}\n.acid-model-note{border-top:1px solid var(--acid-rule);padding-top:8px}\n@keyframes acid-reason-flow{to{background-position:50px 0}}\n@keyframes acid-reason-split{0%,22%,32%,74%,84%,100%{transform:none}24%,28%{transform:translate(-3px,2px)}76%,80%{transform:translate(3px,-1px)}}\n@keyframes acid-reason-ghost{0%{transform:none;opacity:.6}75%,100%{transform:translate(-27px,-5px);opacity:0}}\n@keyframes acid-reason-impact{0%{transform:translate(-8px,2px)}14%{transform:translate(5px,-2px)}30%{transform:translate(-3px,1px)}60%,100%{transform:none}}\nhtml[data-industrial-motion=quiet] .acid-reason-ghost,html[data-industrial-motion=quiet] .acid-reason-slices:before,html[data-industrial-motion=quiet] .acid-reason-slices:after,html[data-industrial-motion=quiet] .acid-effort-trigger:before{animation:none!important}\nhtml[data-industrial-motion=quiet] .acid-reason-flow{animation-duration:1.5s!important;opacity:.45!important}\nhtml[data-industrial-motion=off] .acid-reason-energy{display:none}\nhtml[data-industrial-motion=off] .acid-reason-slider *,html[data-industrial-motion=off] .acid-reason-slider *:before,html[data-industrial-motion=off] .acid-reason-slider *:after,html[data-industrial-motion=off] .acid-effort-trigger:before{animation:none!important;transition:none!important}\nhtml[data-industrial-motion=off] .acid-reason-ghost{display:none}\n@media(max-width:600px){.acid-model-controls{gap:4px}.acid-model-trigger,.acid-effort-trigger{padding:0 6px;gap:4px}.acid-model-popover{padding:16px}.acid-model-popover-head h2{font-size:20px}}\n@media(pointer:coarse){.acid-model-trigger,.acid-effort-trigger,.acid-model-close{min-height:44px}.acid-model-search{font-size:16px}.acid-model-option{min-height:58px}}\n@media(prefers-reduced-motion:reduce){.acid-reason-energy,.acid-reason-ghost{display:none}.acid-reason-slider *,.acid-reason-slider *:before,.acid-reason-slider *:after,.acid-effort-trigger:before{animation:none!important;transition:none!important}}\n\n/* Approved H/I/J share one canvas. Keep a native input for focus, pointer and keyboard. */\n.acid-reason-slider.berserk-surface{height:134px;background:var(--dsw-alias-bg-layer-2)}\n.acid-max-canvas-owner,.acid-max-canvas-owner>.berserk-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;display:block}\n.acid-reason-slider.berserk-surface .acid-reason-rail{left:22px;right:34px;top:36px;height:50px}\n.acid-reason-slider.berserk-surface input[type=range]{height:50px}\n.acid-reason-slider.berserk-surface input[type=range]::-webkit-slider-thumb{width:18px;height:34px;margin-top:-15px;border:0;background:transparent;box-shadow:none}\n.acid-reason-slider.berserk-surface input[type=range]::-moz-range-thumb{width:18px;height:34px;border:0;background:transparent;box-shadow:none}\n.acid-reason-slider.berserk-surface .acid-reason-levels{top:101px;left:23px;right:35px}\n.acid-reason-slider.berserk-surface .acid-reason-track,.acid-reason-slider.berserk-surface .acid-reason-flow,.acid-reason-slider.berserk-surface .acid-reason-ghost,.acid-reason-slider.berserk-surface .acid-reason-slices{display:none}\n.acid-effort-trigger[data-max]:before{content:none}\n.acid-max-value{white-space:nowrap;position:relative;font-family:var(--acid-mono)}\n\n/* 02/03: approved 3px registration corners and central press feedback. */\n.acid-fx{overflow:visible;contain:layout;--acid-corner-width:3px}\n.acid-hover-corner{position:absolute;width:11px;height:11px;border:solid currentColor;opacity:0;pointer-events:none}\n.acid-hover-corner.tl{left:0;top:0;border-width:3px 0 0 3px}.acid-hover-corner.tr{right:0;top:0;border-width:3px 3px 0 0}\n.acid-hover-corner.bl{left:0;bottom:0;border-width:0 0 3px 3px}.acid-hover-corner.br{right:0;bottom:0;border-width:0 3px 3px 0}\n.acid-hover-line{position:absolute;left:5px;right:5px;bottom:2px;height:1px;background:currentColor;transform-origin:left;opacity:0}\n.acid-press-fill{position:absolute;inset:0;background:currentColor;opacity:0;pointer-events:none}\n.acid-press-outline{position:absolute;inset:0;border:1px solid currentColor;opacity:0;pointer-events:none}\n/* 04/06/07/10: vertical round trips; sidebars mirror horizontal round trips. */\n.acid-mask-positioned{position:relative}\n.acid-approved-mask{position:absolute;inset:0;z-index:5;display:grid;grid-template-columns:repeat(4,1fr);background:var(--acid-lime);color:var(--acid-accent-fore);pointer-events:none;overflow:hidden}\n.acid-approved-mask>i{border-right:1px solid color-mix(in srgb,currentColor 20%,transparent)}\n.acid-approved-mask>i:nth-child(1){background:var(--acid-lime)}\n.acid-approved-mask>i:nth-child(2){background:var(--acid-blue)}\n.acid-approved-mask>i:nth-child(3){background:var(--acid-palette-surface)}\n.acid-approved-mask>i:nth-child(4){background:var(--acid-palette-text)}\n.acid-transition-proxy{position:fixed;z-index:2200;overflow:hidden;pointer-events:none!important;isolation:isolate}\n.acid-transition-proxy *{pointer-events:none!important;animation:none!important;transition:none!important}\n.acid-transition-proxy>.acid-approved-mask{z-index:10}\n.acid-dialog,html[data-industrial-acid] .wCInkW_panel,html[data-industrial-acid] .wCInkW_options>*,html[data-industrial-acid] .fO69Vq_cardHead{animation:none!important}\n/* Keep the existing native icon controls when Windows hides its collapsed track. */\nhtml[data-industrial-acid][data-windows-titlebar] .BynINW_frame[data-sidebar-collapsed]{grid-template-columns:var(--acid-rail-columns,56px minmax(0,1fr) 0px)!important;--dsh-windows-sidebar-width:56px!important}\nhtml[data-industrial-acid][data-windows-titlebar] .BynINW_frame[data-sidebar-collapsed] .BynINW_handle[data-side=rightbar]{left:calc(100% - min(var(--acid-rail-right-width,0px),max(0px,calc(100% - 456px))))!important}\nhtml[data-industrial-acid][data-windows-titlebar] ._2H3hWW_root._2H3hWW_collapsed{padding:23px 10px 6px;--dsh-sidebar-inline-padding:10px}\nhtml[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_regionArea{display:flex}\nhtml[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_newSession{width:36px;height:36px;margin:0 0 12px;padding:0;border-radius:0;clip-path:none}\nhtml[data-industrial-acid] ._2H3hWW_root._2H3hWW_collapsed ._2H3hWW_panelRow{min-height:36px}\n/* Geometry and dock content are revealed by the approved masks, with no second slide. */\nhtml[data-industrial-acid] .BynINW_frame[data-animating],html[data-industrial-acid] .BynINW_frame[data-animating] .BynINW_handle{transition:none!important}\nhtml[data-industrial-acid] .OUqwTW_panel [data-dockkit-host=dock],html[data-industrial-acid] .OUqwTW_panel [data-dockkit-empty],html[data-industrial-acid] .OUqwTW_panel [data-dockkit-divider]{transition:none!important}\nhtml[data-industrial-acid] ._2H3hWW_wide,html[data-industrial-acid] ._2H3hWW_fading>*,html[data-industrial-acid] ._2H3hWW_railIn>*{animation:none!important;transition:none!important}\nhtml[data-industrial-acid][data-windows-titlebar] .BynINW_frame[data-sidebar-collapsed] .OUqwTW_panel[data-sidebar-right-panel=push]{max-width:max(0px,calc(100vw - 456px))}\n/* 05: the scanner is clipped to the real number, never the workspace name. */\n#workspace-index{position:relative;overflow:hidden;display:inline-flex}\n.acid-workspace-scan{position:absolute;top:0;bottom:0;width:3px;background:var(--acid-accent-display);z-index:3;pointer-events:none}\n.acid-digit-old,.acid-digit-calibration{position:absolute;inset:0;display:block;pointer-events:none}.acid-digit-calibration{color:var(--acid-accent-display);z-index:2}\n/* 08: leave the native editor, text nodes, caret and hit areas intact. */\n.acid-accepted-composer{position:relative}\n.acid-composer-fx{position:absolute;inset:0;z-index:1;pointer-events:none;color:var(--acid-accent-display)}\n.acid-composer-fx .acid-composer-line{position:absolute;left:0;right:0;height:1px;background:currentColor;opacity:0}\n.acid-composer-fx .acid-composer-line.top{top:0;transform-origin:left}.acid-composer-fx .acid-composer-line.bottom{bottom:0;transform-origin:right}\n.acid-composer-lamp{position:absolute;right:17px;top:9px;width:5px;height:5px;border:1px solid currentColor;background:var(--dsw-alias-border-l2);opacity:.65}\n.acid-composer-focused>.acid-composer-fx .acid-hover-corner,.acid-composer-focused>.acid-composer-fx .acid-composer-line{opacity:1}\n.acid-composer-focused>.acid-composer-fx .acid-composer-lamp{background:currentColor;opacity:1}\n/* 09: the native renderer continues to append actual provider chunks directly. */\n/* 12: signal real status changes with four squares; never fabricate progress. */\n.acid-signal-queue{display:inline-flex;gap:3px;margin-inline-start:8px;vertical-align:middle;pointer-events:none;color:var(--acid-accent-display)}\n.acid-signal-queue>i{display:block;width:4px;height:4px;background:currentColor}\nhtml[data-industrial-motion=off] .acid-composer-line,html[data-industrial-motion=off] .acid-approved-mask,html[data-industrial-motion=off] .acid-transition-proxy{display:none}\n@media(prefers-reduced-motion:reduce){.acid-fx,.acid-approved-mask,.acid-transition-proxy{display:none}.acid-composer-fx *{animation:none;transition:none}}\n";
    const MASTHEAD = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 828 142\">\n <defs><mask id=\"slices\"><rect width=\"828\" height=\"94\" fill=\"white\"/><path fill=\"black\" d=\"M0 37h828v5H0zM0 75h828v3H0zM185 0h4v94h-4zM395 0h4v94h-4zM710 0h4v94h-4z\"/></mask></defs>\n \n <g id=\"whale\" fill=\"currentColor\" fill-rule=\"evenodd\" mask=\"url(#slices)\">\n  <path data-letter=\"D\" d=\"M0 5h65l25 20v45L65 89H0V5Zm28 18v48h29l8-7V30l-8-7H28Z\"/>\n  <path data-letter=\"E\" d=\"M105 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"E\" d=\"M210 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"P\" d=\"M315 5h69l17 17v30l-17 15h-41v22h-28V5Zm28 18v27h28V23h-28Z\"/>\n  <path data-letter=\"S\" d=\"M438 5h69v18h-59v14h42l17 16v22l-15 14h-70V72h58V55h-43l-15-15V20l16-15Z\"/>\n  <path data-letter=\"E\" d=\"M527 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"E\" d=\"M632 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"K\" d=\"M737 5h28v32h12l23-32h28l-29 42 29 42h-29l-22-34h-12v34h-28V5Z\"/>\n </g>\n<text data-harness-letter=\"H\" x=\"0\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">H</text><text data-harness-letter=\"A\" x=\"115\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">A</text><text data-harness-letter=\"R\" x=\"230\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">R</text><text data-harness-letter=\"N\" x=\"345\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">N</text><text data-harness-letter=\"E\" x=\"460\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">E</text><text data-harness-letter=\"S\" x=\"575\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">S</text><text data-harness-letter=\"S\" x=\"690\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">S</text></svg>\r\n";
    const SYMBOL = "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M4 18h53v8h12v13h12V21h11v35H76v15H25V60H10V47H4V18ZM19 31v16h13v11h27V47H46V31H19Z\"/><path d=\"M52 66h16v22H52V66ZM15 8h34v5H15V8ZM4 79h28v9H4v-9ZM74 5h18v11H74V5Z\"/></g>";
    function formatWorkspaceIndex(ordinal){
  if(!Number.isSafeInteger(ordinal)||ordinal<1)throw new RangeError('Workspace ordinal must be a positive safe integer.');
  return ordinal>999?'999＋':String(ordinal).padStart(3,'0');
}

let activeHeader;

function paintDigits(node,value){
  const fragment=document.createDocumentFragment();
  for(const character of value.slice(0,3)){
    const cell=document.createElement('span'),glyph=document.createElement('span');
    cell.className='workspace-digit';glyph.className='workspace-glyph';glyph.textContent=character;
    cell.append(glyph);fragment.append(cell);
  }
  if(value.length>3){const suffix=document.createElement('span');suffix.className='workspace-overflow';suffix.textContent='＋';fragment.append(suffix);}
  node.replaceChildren(fragment);
}

function cancelWorkspaceHeader(){
  activeAcceptedMotion?.cancelWorkspace();
  const current=activeHeader;activeHeader=undefined;
  if(!current)return;
  for(const animation of current.animations)animation.cancel();
  for(const node of current.overlays)node.remove();
  current.button.classList.remove('workspace-switching');
  delete current.button.dataset.switchDirection;
}

async function updateWorkspaceHeader(button,ordinal,name,motion='off'){
  const index=button.querySelector('#workspace-index'),label=button.querySelector('#workspace-name');
  if(Number(index.dataset.ordinal)===ordinal&&label.textContent===name)return;
  if(Number(index.dataset.ordinal)&&motion!=='off'&&activeAcceptedMotion)return activeAcceptedMotion.calibrateWorkspace(button,ordinal,name);
  cancelWorkspaceHeader();paintDigits(index,formatWorkspaceIndex(ordinal));index.dataset.ordinal=String(ordinal);label.textContent=name;
  button.setAttribute('aria-label',`切换工作区：${formatWorkspaceIndex(ordinal)} ${name}`);
}

    // The host owns state and text. These effects own only disposable visual layers.
let activeAcceptedMotion;
const ACCEPTED_MOTION = Object.freeze({hover:300,press:380,page:600,workspace:560,menu:500,dialog:600,composer:360,trace:500,signal:1200});
function acceptedDuration(kind, motion) { return motion === 'off' ? 0 : Math.round(ACCEPTED_MOTION[kind] * (motion === 'quiet' ? .3 : 1)); }
function nativeRightTrack(columns) { return Number(/minmax\(0px,\s*([\d.]+)px\)\s*$/.exec(columns)?.[1]??0); }
function compactRailColumns(columns) {
  const right=nativeRightTrack(columns);
  return `56px minmax(0px, 1fr) minmax(0px, min(${right}px, max(0px, calc(100% - 456px))))`;
}
function surfaceUnion(before,after,top=0) {
  const left=Math.min(before.left,after.left),right=Math.max(before.left+before.width,after.left+after.width);
  const y=Math.max(top,Math.min(before.top,after.top)),bottom=Math.max(before.top+before.height,after.top+after.height);
  return {left,top:y,width:Math.max(0,right-left),height:Math.max(0,bottom-y)};
}
function nativePaneKey(pane,panel) {
  const kind=pane.hasAttribute('data-dockkit-pane')?'pane':'float';
  return `${panel?.getAttribute('data-sidebar-right-session')??''}:${kind}:${pane.getAttribute('data-dockkit-'+kind)}`;
}

function createAcceptedMotionController(getMotion) {
  const runs = new Set(), surfaces = new WeakMap(), buttonRuns = new WeakMap();
  const buttons = new Set(), composers = new Set(), statuses = new Map(), panels = new Map();
  const shellSurfaces=new Map(),dockBodies=new Map(),railFrames=new Map();
  const controller = new AbortController(), ease = 'cubic-bezier(.2,.78,.25,1)';
  const panelSelector = '.acid-model-popover,.acid-dialog[open],.wCInkW_panel,[data-trigger-menu],.haSm5q_details,[role="dialog"]:not(.acid-dialog)';
  let disposed = false, pendingStage, routeRun, workspaceRun, navigationFrame, observedFrame;
  const geometryObserver=new MutationObserver(()=>scanShellSurfaces());
  const localRouteSelector='.Dc7zOa_tab,[data-row-key^="session:"][role="treeitem"]';

  function run(owner, duration, done = () => {}) {
    const current = { owner, animations:[], nodes:[], timers:[], ended:false, done,
      finish(commit=true) {
        if(current.ended)return;current.ended=true;
        for(const timer of current.timers)clearTimeout(timer);
        for(const animation of current.animations)animation.cancel();
        for(const node of current.nodes)node.remove();
        runs.delete(current);if(commit)done();
      },
      animate(node, frames, time, delay=0, easing=ease) {
        if(!node?.animate)return;
        const animation=node.animate(frames,{duration:Math.max(1,time),delay,easing,fill:'both'});
        animation.finished.catch(()=>{});current.animations.push(animation);return animation;
      },
      at(delay, callback) { current.timers.push(setTimeout(()=>{if(!current.ended)callback();},delay)); },
      temp(className, parent=owner) {
        const node=document.createElement('span');node.className=className;node.dataset.acidMotionOwned='';node.setAttribute('aria-hidden','true');
        parent.append(node);current.nodes.push(node);return node;
      }
    };
    runs.add(current);current.at(duration,()=>current.finish());return current;
  }
  function excluded(node) { return node?.closest?.('[data-acid-motion-owned],.acid-fx'); }
  function mask(node, {mode='open',kind='menu',direction='down-up',done=()=>{}}={}) {
    const previous=surfaces.get(node);previous?.finish(false);
    const duration=acceptedDuration(kind,getMotion());
    if(!node||!duration||disposed){done();return;}
    const original={clip:node.style.clipPath,positioned:node.classList.contains('acid-mask-positioned')};
    if(getComputedStyle(node).position==='static')node.classList.add('acid-mask-positioned');
    const current=run(node,duration,()=>{
      node.style.clipPath=original.clip;if(!original.positioned)node.classList.remove('acid-mask-positioned');
      node.dataset.acidMaskPhase='complete';delete node.dataset.acidClosing;surfaces.delete(node);done();
    });
    current.restore=()=>{node.style.clipPath=original.clip;if(!original.positioned)node.classList.remove('acid-mask-positioned');delete node.dataset.acidClosing;};
    const end=current.finish;current.finish=(commit=true)=>{if(current.ended)return;if(!commit)current.restore();end(commit);};
    current.mustCommit=mode==='close';
    if(mode==='close'&&panels.has(node))panels.get(node).suppressClose=true;
    surfaces.set(node,current);node.dataset.acidMaskDirection=direction;node.dataset.acidMaskPhase='cover';
    if(mode==='close')node.dataset.acidClosing='true';
    const sheet=current.temp('acid-approved-mask');
    sheet.innerHTML='<i></i><i></i><i></i><i></i>';
    // Cover from the sidebar's outer edge, then retreat along the same axis.
    const hidden=direction==='left-right'?'inset(0 100% 0 0)':direction==='right-left'?'inset(0 0 0 100%)':'inset(0 0 100% 0)';
    const cover=[{clipPath:hidden},{clipPath:'inset(0)'}];
    current.animate(sheet,cover,duration*.44);
    if(mode==='open')current.animate(node,cover,duration*.44);
    current.at(duration*.49,()=>{node.dataset.acidMaskPhase='covered';});
    current.at(duration*.54,()=>{
      node.dataset.acidMaskPhase='reveal';
      const reveal=[{clipPath:'inset(0)'},{clipPath:hidden}];
      current.animate(sheet,reveal,duration*.46);
      if(mode==='close')current.animate(node,reveal,duration*.46);
    });
    return current;
  }
  function snapshot(node) {
    if(!node?.cloneNode)return;
    const rect=node.getBoundingClientRect();if(!rect.width||!rect.height)return;
    const clone=node.cloneNode(true);clone.setAttribute('aria-hidden','true');clone.inert=true;
    const originals=[node,...node.querySelectorAll('*')],copies=[clone,...clone.querySelectorAll('*')];
    const scrolls=originals.flatMap((element,i)=>element.scrollTop||element.scrollLeft?[{node:copies[i],top:element.scrollTop,left:element.scrollLeft}]:[]);
    // A snapshot must not start another browser/terminal session in an iframe.
    for(const iframe of clone.querySelectorAll('iframe')){iframe.removeAttribute('src');iframe.removeAttribute('srcdoc');}
    const originalCanvases=node.querySelectorAll('canvas'),copyCanvases=clone.querySelectorAll('canvas');
    originalCanvases.forEach((canvas,i)=>{try{copyCanvases[i]?.getContext('2d')?.drawImage(canvas,0,0);}catch{/* Keep the other snapshot layers if a canvas cannot be read. */}});
    for(const element of [clone,...clone.querySelectorAll('[id],[data-slot],.acid-fx,[data-acid-motion-owned]')]) {
      element.removeAttribute('id');element.removeAttribute('data-slot');
      if(element!==clone&&element.matches('.acid-fx,[data-acid-motion-owned]'))element.remove();
    }
    return {clone,rect,display:getComputedStyle(node).display,time:performance.now(),scrolls};
  }
  function proxy(captured,kind,mode='close',bounds=captured?.rect,direction='down-up') {
    if(!captured||getMotion()==='off'||disposed)return;
    const holder=document.createElement('div');holder.className='acid-transition-proxy';holder.dataset.acidMotionOwned='';
    holder.setAttribute('aria-hidden','true');holder.inert=true;
    Object.assign(holder.style,{left:bounds.left+'px',top:bounds.top+'px',width:bounds.width+'px',height:bounds.height+'px'});
    const clone=captured.clone;clone.removeAttribute('open');
    Object.assign(clone.style,{position:'absolute',inset:'auto',left:captured.rect.left-bounds.left+'px',top:captured.rect.top-bounds.top+'px',width:captured.rect.width+'px',height:captured.rect.height+'px',margin:'0',maxHeight:'none',display:captured.display,clipPath:'none',visibility:'visible'});
    holder.append(clone);document.body.append(holder);
    for(const scroll of captured.scrolls??[]){scroll.node.scrollTop=scroll.top;scroll.node.scrollLeft=scroll.left;}
    const current=mask(holder,{mode,kind,direction,done:()=>holder.remove()});
    if(current)current.nodes.push(holder);else holder.remove();return current;
  }
  function swapSurface(record,node,label,direction='down-up') {
    record.run?.finish(false);
    const captured=record.captured;
    if(captured&&performance.now()-captured.time<2000){
      const next=node?.getBoundingClientRect()??captured.rect;
      const top=document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom??0;
      record.run=proxy(captured,'page','swap',surfaceUnion(captured.rect,next,top),direction);
      record.run?.at(acceptedDuration('page',getMotion())*.49,()=>captured.clone.remove());
    }else if(node)record.run=mask(node,{mode:'swap',kind:'page',direction});
    if(record.run)record.run.owner.dataset.transition=label;
    record.captured=undefined;
  }
  function syncCompactRail(frame) {
    if(!document.documentElement?.hasAttribute('data-windows-titlebar'))return;
    const properties={'--acid-rail-columns':compactRailColumns(frame.style.gridTemplateColumns),'--acid-rail-right-width':nativeRightTrack(frame.style.gridTemplateColumns)+'px'};
    if(!railFrames.has(frame))railFrames.set(frame,Object.keys(properties).map(name=>({name,value:frame.style.getPropertyValue(name),priority:frame.style.getPropertyPriority(name)})));
    for(const[name,value]of Object.entries(properties))if(frame.style.getPropertyValue(name)!==value)frame.style.setProperty(name,value);
  }
  function scanShellSurfaces() {
    const frame=document.querySelector('.BynINW_frame');if(!frame)return;
    if(observedFrame!==frame){geometryObserver.disconnect();geometryObserver.observe(frame,{attributes:true,attributeFilter:['style']});observedFrame=frame;}
    syncCompactRail(frame);
    let geometryDirection;
    const sidebar=frame.querySelector('.BynINW_sidebarCol');
    if(sidebar){
      const state=frame.hasAttribute('data-sidebar-collapsed')?'rail':'wide',previous=shellSurfaces.get(sidebar);
      if(previous&&previous.state!==state){previous.state=state;swapSurface(previous,sidebar,'sidebar-'+state,'left-right');geometryDirection='left-right';}
      else if(!previous)shellSurfaces.set(sidebar,{state});
    }
    const changedPanels=new Set(),visiblePanels=new Set();
    for(const panel of document.querySelectorAll('[data-sidebar-right-panel]')){
      if(excluded(panel))continue;
      const open=panel.hasAttribute('data-sidebar-right-open')&&!panel.closest('[hidden]');
      const state=open?panel.dataset.sidebarRightPanel:'closed',previous=shellSurfaces.get(panel);
      if(open)visiblePanels.add(panel);
      if(!previous){shellSurfaces.set(panel,{state});if(open){mask(panel,{kind:'page',direction:'right-left'});changedPanels.add(panel);}}
      else if(previous.state!==state){
        previous.state=state;swapSurface(previous,open?panel:null,'rightbar-'+state,'right-left');changedPanels.add(panel);geometryDirection='right-left';
      }
    }
    for(const pane of document.querySelectorAll('[data-dockkit-pane],[data-dockkit-float]')){
      if(excluded(pane))continue;const panel=pane.closest('[data-sidebar-right-panel]');
      if(panel&&!visiblePanels.has(panel)||pane.closest('[hidden],[aria-hidden="true"]'))continue;
      const body=[...pane.querySelectorAll('.OUqwTW_tabBody')].find(node=>!node.closest('[hidden],[aria-hidden="true"]')&&node.getBoundingClientRect().height>0);
      if(!body)continue;
      // DockKit remounts the pane element when its active content changes.
      // The native pane id remains stable; retain its pre-click snapshot.
      const key=nativePaneKey(pane,panel),tab=body.dataset.sidebarRightTab,previous=dockBodies.get(key),direction=panel?'right-left':'down-up';
      if(previous){previous.pane=pane;previous.body=body;}
      if(previous&&previous.tab!==tab){previous.tab=tab;previous.body=body;if(!changedPanels.has(panel))swapSurface(previous,body,'preview-tab',direction);}
      else if(!previous){dockBodies.set(key,{pane,tab,body});if(!changedPanels.has(panel))mask(body,{kind:'page',direction});}
    }
    for(const[node,record]of shellSurfaces)if(!node.isConnected){record.run?.finish(false);shellSurfaces.delete(node);}
    for(const[key,record]of dockBodies)if(!record.pane.isConnected){record.run?.finish(false);dockBodies.delete(key);}
    if(geometryDirection&&pendingStage&&!frame.hasAttribute('data-dragging'))revealStage('columns',geometryDirection);
  }
  function captureShellSurfaces() {
    for(const[node,record]of shellSurfaces)if(record.state!=='closed')record.captured=snapshot(node);
    for(const record of dockBodies.values())record.captured=snapshot(record.body);
  }
  function shellGeometryTarget(target) {
    return target.closest?.('.acid-sidebar-toggle,[data-sidebar-right-expand],[data-sidebar-right-toggle],[data-sidebar-right-mode],button[aria-label^="在侧边栏"]');
  }
  function captureStage(shell=false) {
    pendingStage=snapshot(document.querySelector(shell?'.BynINW_frame':'.BynINW_centerCol'));
    if(pendingStage)pendingStage.shell=shell;
  }
  function revealStage(kind='page',direction='down-up') {
    routeRun?.finish(false);
    const stage=document.querySelector('.BynINW_centerCol');if(!stage||getMotion()==='off'||disposed)return;
    if(pendingStage&&performance.now()-pendingStage.time<2000) {
      const captured=pendingStage;pendingStage=null;
      // The old surface remains visible until the cover is complete; the host
      // switches underneath it immediately, without intercepting its action.
      const top=document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom??0;
      const bounds=captured.shell?surfaceUnion(captured.rect,stage.getBoundingClientRect(),top):captured.rect;
      routeRun=proxy(captured,'page','swap',bounds,direction);
      routeRun?.at(acceptedDuration('page',getMotion())*.49,()=>captured.clone.remove());
    } else routeRun=mask(stage,{mode:'swap',kind:'page',direction});
    if(routeRun)routeRun.owner.dataset.transition=kind;
  }
  function decorateButton(button) {
    if(excluded(button)||button.querySelector(':scope > .acid-fx'))return;
    if(getComputedStyle(button).position==='static')button.classList.add('acid-layer-positioned');
    button.classList.add('acid-layered');buttons.add(button);
    const layer=document.createElement('span');layer.className='acid-fx';layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<i class="acid-hover-corner tl"></i><i class="acid-hover-corner tr"></i><i class="acid-hover-corner bl"></i><i class="acid-hover-corner br"></i><i class="acid-hover-line"></i><i class="acid-press-fill"></i><i class="acid-press-outline"></i>';
    button.prepend(layer);
  }
  function feedback(button, kind='press') {
    if(button.disabled||getMotion()==='off'||disposed)return;
    decorateButton(button);buttonRuns.get(button)?.finish(false);
    const current=run(button,acceptedDuration(kind,getMotion()));buttonRuns.set(button,current);
    button.dataset.acidFeedback=kind;
    if(kind==='hover') {
      button.querySelectorAll(':scope > .acid-fx .acid-hover-corner').forEach((corner,i)=>current.animate(corner,[
        {opacity:0,transform:`translate(${i%2?6:-6}px,${i>1?6:-6}px)`},{opacity:1,transform:'none',offset:.65},{opacity:0,transform:'none'}],acceptedDuration(kind,getMotion())));
      current.animate(button.querySelector('.acid-hover-line'),[{opacity:0,transform:'scaleX(0)'},{opacity:1,transform:'scaleX(1)',offset:.75},{opacity:0}],acceptedDuration(kind,getMotion()));
    } else {
      current.animate(button.querySelector('.acid-press-fill'),[{clipPath:'inset(0 50%)',opacity:.7},{clipPath:'inset(0)',opacity:.65,offset:.6},{opacity:0}],acceptedDuration(kind,getMotion()));
      current.animate(button.querySelector('.acid-press-outline'),[{opacity:0,transform:'scale(.98)'},{opacity:1,transform:'scale(1.08)',offset:.6},{opacity:0,transform:'scale(1.12)'}],acceptedDuration(kind,getMotion()));
    }
  }
  function decorateComposer(node) {
    if(excluded(node)||composers.has(node))return;composers.add(node);node.classList.add('acid-accepted-composer');
    const layer=document.createElement('span');layer.className='acid-composer-fx';layer.dataset.acidMotionOwned='';layer.setAttribute('aria-hidden','true');
    layer.innerHTML='<i class="acid-hover-corner tl"></i><i class="acid-hover-corner tr"></i><i class="acid-hover-corner bl"></i><i class="acid-hover-corner br"></i><i class="acid-composer-line top"></i><i class="acid-composer-line bottom"></i><i class="acid-composer-lamp"></i>';
    node.append(layer);
  }
  function focusComposer(node) {
    decorateComposer(node);node.classList.add('acid-composer-focused');
    surfaces.get(node)?.finish(false);if(getMotion()==='off')return;
    const duration=acceptedDuration('composer',getMotion()),current=run(node,duration);surfaces.set(node,current);
    node.querySelectorAll(':scope > .acid-composer-fx .acid-hover-corner').forEach((corner,i)=>current.animate(corner,[
      {opacity:0,transform:`translate(${i%2?6:-6}px,${i>1?6:-6}px)`},{opacity:1,transform:'none'}],duration));
    node.querySelectorAll(':scope > .acid-composer-fx .acid-composer-line').forEach(line=>current.animate(line,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],duration));
    current.animate(node.querySelector('.acid-composer-lamp'),[{opacity:.15,transform:'scale(.65)'},{opacity:1,transform:'scale(1)'}],duration*.65,duration*.2);
  }
  function signal(node) {
    if(excluded(node)||!node.textContent.trim())return;
    const text=[...node.childNodes].filter(child=>!child.classList?.contains('acid-signal-queue')).map(child=>child.textContent).join('');
    const previous=statuses.get(node);if(previous?.text===text)return;previous?.run?.finish(false);
    const duration=acceptedDuration('signal',getMotion());if(!duration){statuses.set(node,{text});return;}
    const current=run(node,duration),queue=current.temp('acid-signal-queue');queue.innerHTML='<i></i><i></i><i></i><i></i>';
    [...queue.children].forEach((dot,i)=>current.animate(dot,[{opacity:.15},{opacity:1,offset:.4},{opacity:.3,offset:.75},{opacity:1}],getMotion()==='quiet'?90:300,i*(getMotion()==='quiet'?50:170),'linear'));
    statuses.set(node,{text,run:current});
  }
  function panelKind(node) { return node.matches('.haSm5q_details')?'trace':node.matches('.acid-dialog,.wCInkW_panel,dialog')?'dialog':'menu'; }
  function prepare(root) {
    if(excluded(root))return;
    if(root instanceof Element&&root.matches('button'))decorateButton(root);
    for(const button of root.querySelectorAll?.('button')||[])decorateButton(button);
    if(root instanceof Element&&root.matches('.RlGAzG_card'))decorateComposer(root);
    for(const composer of root.querySelectorAll?.('.RlGAzG_card')||[])decorateComposer(composer);
  }
  function scanPanels() {
    scanShellSurfaces();
    const present=new Set();
    for(const node of document.querySelectorAll(panelSelector)) {
      if(excluded(node))continue;const rect=node.getBoundingClientRect();
      if(!rect.width||!rect.height||getComputedStyle(node).visibility==='hidden')continue;present.add(node);
      if(!panels.has(node)){panels.set(node,{kind:panelKind(node),captured:snapshot(node)});mask(node,{kind:panelKind(node)});}
    }
    for(const[node,record]of panels)if(!present.has(node)) {
      panels.delete(node);const current=surfaces.get(node),closing=current&&node.dataset.acidClosing;
      current?.finish(false);
      if(!closing&&!record.suppressClose&&record.captured&&performance.now()-record.captured.time<2000)proxy(record.captured,record.kind);
    }
    for(const node of document.querySelectorAll('[role="status"],[role="alert"]'))signal(node);
    for(const node of statuses.keys())if(!node.isConnected)statuses.delete(node);
    for(const node of buttons)if(!node.isConnected)buttons.delete(node);
    for(const node of composers)if(!node.isConnected)composers.delete(node);
  }
  function capturePanels(event) {
    if(event.type==='pointerdown'||event.key==='Escape'||event.key==='Enter'||event.key===' ')captureShellSurfaces();
    for(const[node,record]of panels) {
      if(event.type==='keydown'&&event.key!=='Escape')continue;
      if(event.type==='pointerdown'&&!event.target.closest?.('button')&&node.contains(event.target))continue;
      record.captured=snapshot(node);
    }
  }
  function cancel() {
    if(navigationFrame!==undefined){cancelAnimationFrame(navigationFrame);navigationFrame=undefined;}
    cancelWorkspaceHeader();for(const current of [...runs])current.finish(!disposed&&current.mustCommit);
    routeRun=undefined;pendingStage=undefined;
    for(const record of [...shellSurfaces.values(),...dockBodies.values()])record.captured=undefined;
  }
  function cancelWorkspace() { workspaceRun?.finish();workspaceRun=undefined; }
  function calibrateWorkspace(button,ordinal,name) {
    cancelWorkspace();const index=button.querySelector('#workspace-index'),label=button.querySelector('#workspace-name');
    const previous=index.textContent,value=formatWorkspaceIndex(ordinal);paintDigits(index,value);index.dataset.ordinal=String(ordinal);label.textContent=name;
    button.setAttribute('aria-label',`切换工作区：${value} ${name}`);index.dataset.calibration='scan-digits-only';
    const duration=acceptedDuration('workspace',getMotion());if(!duration)return;
    const current=run(index,duration);workspaceRun=current;
    const scanner=current.temp('acid-workspace-scan',index);
    current.animate(scanner,[{left:'-5%',opacity:0},{opacity:1,offset:.1},{left:'102%',opacity:1,offset:.9},{left:'102%',opacity:0}],duration*.31,0,'linear');
    index.querySelectorAll('.workspace-digit').forEach((cell,i)=>{
      const glyph=cell.querySelector('.workspace-glyph'),old=current.temp('acid-digit-old',cell);old.textContent=previous[i]||'0';
      const calibration=current.temp('acid-digit-calibration',cell);calibration.textContent=String((Number(value[i])+7)%10);
      const delay=duration*(.28+i*.035);
      current.animate(calibration,[{opacity:0},{opacity:1,offset:.02},{opacity:1,offset:.72},{opacity:0}],duration*.28,delay);
      current.at(delay+duration*.15,()=>{calibration.textContent=String((Number(value[i])+3)%10);});
      current.animate(old,[{transform:'none'},{transform:'translateY(-110%)'}],duration*.48,delay);
      current.animate(glyph,[{transform:'translateY(110%)'},{transform:'none'}],duration*.53,delay);
    });return current;
  }
  prepare(document);scanPanels();
  const observer=new MutationObserver(records=>{
    for(const record of records)for(const node of record.addedNodes||[])if(node.nodeType===1)prepare(node);
    scanPanels();
  });
  observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['open','hidden','aria-expanded','aria-selected','aria-hidden','class','data-state','data-sidebar-collapsed','data-sidebar-right-open','data-sidebar-right-panel']});
  document.addEventListener('pointerover',event=>{const button=event.target.closest('button');if(button&&!excluded(button)&&!button.contains(event.relatedTarget))feedback(button,'hover');},{signal:controller.signal});
  document.addEventListener('pointerdown',event=>{
    capturePanels(event);const button=event.target.closest('button');
    if(button&&!excluded(button)&&event.button===0)feedback(button);
    if(button?.matches('._2H3hWW_panelRow,._2H3hWW_newSession,.acid-brand-home,.acid-workspace-option,.Dc7zOa_tab,[data-row-key]')||button?.closest('[data-slot="sidebar.workspaces"],._2H3hWW_settingsArea'))captureStage();
    const route=event.target.closest(localRouteSelector);
    if(route&&route.getAttribute('aria-selected')!=='true'&&event.button===0)captureStage();
    if(shellGeometryTarget(event.target)&&event.button===0)captureStage(true);
  },{capture:true,signal:controller.signal});
  document.addEventListener('keydown',event=>{
    capturePanels(event);if(['Enter',' '].includes(event.key)&&(event.target.closest?.('button')||event.target.closest?.(localRouteSelector)))captureStage(!!shellGeometryTarget(event.target));
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='b'){captureShellSurfaces();captureStage(true);}
    if((event.ctrlKey||event.metaKey)&&event.target.closest?.('[data-sidebar-right-panel]')){captureShellSurfaces();captureStage(true);}
  },{capture:true,signal:controller.signal});
  document.addEventListener('click',event=>{
    const button=event.target.closest('button');if(button&&!excluded(button)&&event.detail===0)feedback(button);
    if(pendingStage&&event.target.closest(localRouteSelector)){
      if(navigationFrame!==undefined)cancelAnimationFrame(navigationFrame);
      // Native React navigation commits first. Workspace/panel transitions may
      // already have consumed this snapshot; only cover a remaining local route.
      navigationFrame=requestAnimationFrame(()=>{navigationFrame=undefined;if(pendingStage)revealStage('page');});
    }
  },{signal:controller.signal});
  document.addEventListener('focusin',event=>{const card=event.target.closest('.RlGAzG_card');if(card&&event.target.matches('textarea,[contenteditable=true],[contenteditable=""]'))focusComposer(card);},{signal:controller.signal});
  document.addEventListener('focusout',event=>{const card=event.target.closest('.RlGAzG_card');if(card&&!card.contains(event.relatedTarget))card.classList.remove('acid-composer-focused');},{signal:controller.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();},{signal:controller.signal});
  const api={revealStage,captureStage,cancel,cancelWorkspace,calibrateWorkspace,mask,
    closeSurface(node,done,kind='menu'){if(node?.dataset.acidClosing)return;return mask(node,{mode:'close',kind,done});},
    reopenSurface(node){surfaces.get(node)?.finish(false);mask(node,{kind:panelKind(node)});},
    dispose(){disposed=true;controller.abort();observer.disconnect();geometryObserver.disconnect();cancel();
      for(const button of buttons){button.querySelector(':scope > .acid-fx')?.remove();button.classList.remove('acid-layered','acid-layer-positioned');delete button.dataset.acidFeedback;}
      for(const composer of composers){composer.querySelector(':scope > .acid-composer-fx')?.remove();composer.classList.remove('acid-accepted-composer','acid-composer-focused');}
      for(const[frame,properties]of railFrames)for(const previous of properties){if(previous.value)frame.style.setProperty(previous.name,previous.value,previous.priority);else frame.style.removeProperty(previous.name);}
      railFrames.clear();shellSurfaces.clear();dockBodies.clear();
      buttons.clear();composers.clear();panels.clear();statuses.clear();if(activeAcceptedMotion===api)activeAcceptedMotion=undefined;
    }};
  activeAcceptedMotion=api;return api;
}

// The native command menu is bottom-anchored; reserve both headers above it.
function installComposerMenuClearance(){
  const key='--acid-composer-menu-height',owned=new Map();let frame=0;
  const release=(node,previous)=>{if(previous.value)node.style.setProperty(key,previous.value,previous.priority);else node.style.removeProperty(key);};
  function sync(){
    const menus=new Set(document.querySelectorAll('.RlGAzG_card [data-trigger-menu]'));
    for(const[node,previous]of owned)if(!menus.has(node)){release(node,previous);owned.delete(node);}
    for(const menu of menus){
      if(!owned.has(menu))owned.set(menu,{value:menu.style.getPropertyValue(key),priority:menu.style.getPropertyPriority(key)});
      const masthead=document.querySelector('.acid-masthead')?.getBoundingClientRect();
      const header=menu.closest('.Dc7zOa_root')?.querySelector('.Dc7zOa_header')?.getBoundingClientRect();
      const top=Math.max(12,masthead?.bottom??0,header?.height?header.bottom:0);
      const height=Math.max(0,Math.min(400,menu.getBoundingClientRect().bottom-top-8));
      menu.style.setProperty(key,`${height}px`);
    }
  }
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;sync();});};
  const observer=new MutationObserver(schedule);observer.observe(document.body,{subtree:true,childList:true});
  window.addEventListener('resize',schedule);window.addEventListener('scroll',schedule,true);sync();
  return()=>{observer.disconnect();window.removeEventListener('resize',schedule);window.removeEventListener('scroll',schedule,true);if(frame)cancelAnimationFrame(frame);for(const[node,previous]of owned)release(node,previous);owned.clear();};
}

function installSkinMotion(getMotion){return createAcceptedMotionController(getMotion);}

function syncWorkspaceOrdinals(items){
  const ordinals=new Map(items.map((workspace,i)=>[String(workspace.workspaceId),formatWorkspaceIndex(i+1)]));
  for(const row of document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')){
    const index=ordinals.get(row.dataset.rowKey.slice(10));
    if(index)row.setAttribute('data-acid-ordinal',index);else row.removeAttribute('data-acid-ordinal');
  }
}

    function SkinSymbol({className=''}){return h('svg',{className,viewBox:'0 0 96 96','aria-hidden':true,dangerouslySetInnerHTML:{__html:SYMBOL}});}
function HeroMark(){return h(SkinSymbol,{className:'acid-hero-mark'});}
function Footer({wide}){return wide?h('div',{className:'acid-sidebar-cut','aria-hidden':true},...[0,1,2,3,4].map(i=>h('span',{key:i}))):null;}
function SettingsHeader({t}){return h('strong',{className:'acid-settings-title'},t('settings'));}

function NativeDialog({title,children,onClose,className=''}){
  const ref=React.useRef(null),alive=React.useRef(true);
  const close=()=>{const finish=()=>{if(alive.current)onClose();};if(ref.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(ref.current,finish,'dialog');else finish();};
  React.useEffect(()=>{alive.current=true;const dialog=ref.current;dialog.showModal();return()=>{alive.current=false;if(dialog.open)dialog.close();};},[]);
  return h('dialog',{ref,className:'acid-dialog '+className,onCancel:event=>{event.preventDefault();close();},onClose:()=>{if(alive.current)onClose();},onClick:event=>{if(event.target===ref.current){const rect=ref.current.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close();}},'aria-label':title},
    h('div',{className:'acid-dialog-heading'},h('h2',null,title),h('button',{type:'button','aria-label':'关闭',onClick:close},'×')),children);
}

function WorkspaceRailButtons({items,workspaceId,onPick,t}){
  if(!items.length)return null;
  return h('nav',{className:'acid-workspace-rail','aria-label':t('workspace')},...items.map((item,i)=>{
    const number=formatWorkspaceIndex(i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||t('none');
    return h('button',{key:item.workspaceId,type:'button',className:'acid-rail-workspace','data-acid-workspace':item.workspaceId,
      title:`${number} ${name}`,'aria-label':`${t('workspace')} ${number} ${name}`,'aria-pressed':workspaceId===item.workspaceId,
      onClick:()=>onPick(item.workspaceId)},number);
  }));
}

function WorkspaceRail(props){
  const [target,setTarget]=React.useState(null);
  React.useLayoutEffect(()=>{
    let observedFrame=null,observedSidebar=null;
    const observer=new MutationObserver(()=>sync());
    const sync=()=>{
      const frame=[...document.querySelectorAll('.BynINW_frame')].find(node=>!node.closest('[data-acid-motion-owned]'));
      const sidebar=frame?.querySelector('.BynINW_sidebarCol');
      if(frame!==observedFrame||sidebar!==observedSidebar){
        observer.disconnect();observedFrame=frame;observedSidebar=sidebar;
        if(frame){observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});observer.observe(sidebar??frame,{childList:true,subtree:true});}
        else observer.observe(document.body,{childList:true,subtree:true});
      }
      // The collapsed native browser keeps this list area empty. Leave its
      // add/search controls, wide list and React-owned children in place.
      const next=frame?.hasAttribute('data-sidebar-collapsed')?sidebar?.querySelector('[data-slot="sidebar.workspaces"] ._9lTDKa_listArea'):null;
      setTarget(previous=>previous===next?previous:next??null);
    };
    sync();return()=>observer.disconnect();
  },[]);
  return target?createPortal(h(WorkspaceRailButtons,props),target):null;
}

function Masthead(props){
  const items=props.useWorkspaces(state=>state.items);
  const current=props.useSessions(state=>Object.values(state.byId).find(session=>(session.retainedBy?.mainView??0)>0)?.id);
  const panel=props.usePanelInfo(state=>state.activePanelId),workspace=workspaceContext(items,current);
  const context=React.useRef(null),previous=React.useRef(null);
  const [picker,setPicker]=React.useState(false),[nativeState,setNativeState]=React.useState(null);
  const appearance=props.useAppearance(),native=window.dshDesktop?.windowControls;
  React.useEffect(()=>{if(!native)return;let alive=true;const refresh=()=>native.invoke('state').then(state=>{if(alive)setNativeState(state);}).catch(()=>{});refresh();window.addEventListener('resize',refresh);return()=>{alive=false;window.removeEventListener('resize',refresh);};},[native]);
  React.useLayoutEffect(()=>{
    const last=previous.current;
    if(workspace)updateWorkspaceHeader(context.current,workspace.index,workspace.title,props.getMotion());
    else{cancelWorkspaceHeader();context.current.querySelector('#workspace-index').textContent='—';delete context.current.querySelector('#workspace-index').dataset.ordinal;context.current.querySelector('#workspace-name').textContent=props.t('none');context.current.setAttribute('aria-label',props.t('workspace'));}
    if(last&&workspace&&last.workspaceId!==workspace.workspaceId)props.motion()?.revealStage('workspace',workspace.index>(last.index??0)?1:-1);
    else if(last&&last.panel!==panel)props.motion()?.revealStage('page');
    previous.current={...workspace,panel};syncWorkspaceOrdinals(items);
  },[workspace?.index,workspace?.workspaceId,workspace?.title,panel,items,appearance]);
  React.useEffect(()=>{const observer=new MutationObserver(()=>syncWorkspaceOrdinals(items));observer.observe(document.querySelector('[data-slot="sidebar.workspaces"]')||document.body,{childList:true,subtree:true});return()=>observer.disconnect();},[items]);
  React.useEffect(()=>()=>cancelWorkspaceHeader(),[]);
  const windowAction=action=>native.invoke(action).then(state=>setNativeState(state)).catch(()=>{});
  const openMenu=(name,event)=>{const rect=event.currentTarget.getBoundingClientRect();native.menu(name,rect.left,rect.bottom).catch(()=>{});};
  return h(React.Fragment,null,h('header',{className:'acid-masthead','data-native-controls':native?'true':'false','aria-label':'DeepSeek Harness'},
    h('div',{className:'acid-wordmark'},h('button',{type:'button',className:'acid-sidebar-toggle','aria-label':'展开／收起左侧栏',onClick:props.toggleSidebar},h('svg',{viewBox:'0 0 20 20','aria-hidden':true},h('path',{d:'M3 3h14v14H3ZM8 3v14'}))),
      h('button',{type:'button',className:'acid-brand-home','aria-label':'DeepSeek Harness',onClick:props.goHome},h(SkinSymbol,{className:'acid-brand-symbol'}),h('span',{className:'acid-wordmark-svg',dangerouslySetInnerHTML:{__html:MASTHEAD}}))),
    native?h('div',{className:'acid-menus'},h('button',{type:'button',onClick:event=>openMenu('application',event)},h('span',{'aria-hidden':true},'01'),document.documentElement.lang.startsWith('zh')?'应用':'Application'),h('button',{type:'button',onClick:event=>openMenu('edit',event)},h('span',{'aria-hidden':true},'02'),document.documentElement.lang.startsWith('zh')?'编辑':'Edit')):null,
    h('button',{ref:context,type:'button',className:'acid-context workspace-display',onClick:()=>setPicker(true),disabled:items.length===0,'aria-label':props.t('workspace')},
      h('span',{className:'workspace-counter'},h('strong',{className:'acid-context-number workspace-index',id:'workspace-index'},'—')),
      h('span',{className:'workspace-detail'},h('span',{className:'acid-meta'},'ACTIVE WORKSPACE'),h('span',{className:'workspace-name-slot'},h('span',{className:'acid-context-title',id:'workspace-name',title:workspace?.title},props.t('none')))),h('span',{className:'acid-workspace-arrow','aria-hidden':true},'↗')),
    native?h('div',{className:'acid-window-controls'},h('button',{type:'button','aria-label':'最小化',title:'最小化',onClick:()=>windowAction('minimize')},'−'),h('button',{type:'button','aria-label':nativeState?.maximized?'还原':'最大化',title:nativeState?.maximized?'还原':'最大化',onClick:()=>windowAction('maximize')},nativeState?.maximized?'▣':'□'),h('button',{type:'button','aria-label':'关闭',title:'关闭',onClick:()=>windowAction('close')},'×')):null),
    h(WorkspaceRail,{items,workspaceId:workspace?.workspaceId,t:props.t,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}),
    picker?h(NativeDialog,{title:props.t('workspace'),className:'acid-workspace-dialog',onClose:()=>setPicker(false)},...items.map((item,i)=>h('button',{key:item.workspaceId,type:'button',className:'acid-workspace-option','data-acid-workspace':item.workspaceId,'aria-pressed':workspace?.workspaceId===item.workspaceId,onClick:()=>{setPicker(false);props.pickWorkspace(item.workspaceId);}},h('span',null,formatWorkspaceIndex(i+1)),h('strong',null,item.title||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||props.t('none')),h('span',{'aria-hidden':true},workspace?.workspaceId===item.workspaceId?'↗':'+')))):null);
}

    // Visual positions are continuous; provider selections remain advertised enum IDs.
const maxKinds = ['tremor', 'afterimage', 'rupture'];

function createMaxEpisode(random = Math.random) {
  let selected = null, previousMode;
  return {
    update(amount, mode = 'random') {
      if (!(amount > 0)) { selected = null; previousMode = mode; return null; }
      if (selected === null || mode !== previousMode) {
        selected = mode === 'random'
          ? maxKinds[Math.min(2, Math.max(0, Math.floor(random() * 3)))]
          : maxKinds.includes(mode) ? mode : 'tremor';
      }
      previousMode = mode;
      return selected;
    }
  };
}

function effortVisual(levels, value) {
  const end = Math.max(0, levels.length - 1), number = Number(value);
  const index = Number.isFinite(number) ? Math.max(0, Math.min(end, number)) : 0;
  const nearest = Math.round(index), lower = Math.floor(index), upper = Math.ceil(index);
  const label = lower === upper ? levels[lower]?.name : `${levels[lower]?.name} → ${levels[upper]?.name}`;
  const max = levels.findIndex(level => String(level.id ?? '').toLowerCase() === 'max');
  const high = levels.findIndex(level => String(level.id ?? '').toLowerCase() === 'high');
  const start = high >= 0 && high < max ? high : Math.max(0, max - 1);
  const progress = max < 0 ? 0 : max === start ? (index === max ? 1 : 0)
    : Math.max(0, Math.min(1, (index - start) / (max - start)));
  return { index, nearest, position: end ? index / end : 1, label,
    amount: progress * progress * (3 - 2 * progress) };
}

function selectionIdentity(current) {
  return JSON.stringify([current?.provider, current?.model, current?.reasoningEffort]);
}

function createMaxBerserkRuntime() {
const highPosition = .667;
const thirdRoundStorageKey = 'harness-motion-gallery:feedback:r3:v1';
const berserkCandidates = [
  { id: '11-H', kind: 'tremor', name: '同频震颤', code: 'SYNCHRONIZED / TREMBLE',
    note: '轨道和滑块一起震颤，错开的双层重影逐渐变浓。', detail: '整体抖动 / 短距离重影 / 紧绷蓄力' },
  { id: '11-I', kind: 'afterimage', name: '残像追赶', code: 'AFTERIMAGE / RUSH',
    note: '滑块拉出多层延迟残像，速度线随着充能逐渐展开。', detail: '长距离拖影 / 多层残像 / 高速失控' },
  { id: '11-J', kind: 'rupture', name: '错帧暴走', code: 'FRAME OFFSET / BERSERK',
    note: '轨道和滑块分片错位，叠出漫画式的震动重影。', detail: '分片震动 / 错位重影 / 撕裂爆发' },
];

function clampPosition(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(0, Math.min(1, number)) : 0;
}

function motionAmount(position) {
  const progress = Math.max(0, (clampPosition(position) - highPosition) / (1 - highPosition));
  return progress * progress * (3 - 2 * progress);
}

function positionLabel(position) {
  const p = clampPosition(position);
  if (p < .0005) return 'LOW';
  if (p < 1 / 3 - .0005) return 'LOW → MED';
  if (p <= 1 / 3 + .0005) return 'MED';
  if (p < highPosition - .0005) return 'MED → HIGH';
  if (p <= highPosition + .0005) return 'HIGH';
  return p < .9995 ? 'HIGH → MAX' : 'MAX';
}

function normalizeThirdRound(raw) {
  const result = { schema: 3, scores: {}, notes: {}, max: '', overall: '' };
  if (!raw || typeof raw !== 'object') return result;
  for (const candidate of berserkCandidates) {
    const score = raw.scores?.[candidate.id];
    if (Number.isInteger(score) && score >= 1 && score <= 5) result.scores[candidate.id] = score;
    if (typeof raw.notes?.[candidate.id] === 'string') result.notes[candidate.id] = raw.notes[candidate.id].slice(0, 2000);
  }
  if (berserkCandidates.some(candidate => candidate.id === raw.max)) result.max = raw.max;
  if (typeof raw.overall === 'string') result.overall = raw.overall.slice(0, 4000);
  return result;
}

function thirdRoundText(raw, preferences = { speed: 1, intensity: 1.4 }) {
  const result = normalizeThirdRound(raw);
  const intensity = { 1: '标准', 1.4: '增强', 1.8: '极强' }[preferences.intensity] || '增强';
  return ['Harness 第三轮 Max 动效打分表', '版本：3.1 / 连续滑块 / High → Max 渐变 / 震动重影',
    '已确认：第二轮 10 项动效均为 5/5，继续保留；01 开屏保持当前版本。',
    '本轮只比较 Max。第二轮 11-D/E/F/G 全部为 1/5，无首选。',
    '评分：1 不想使用 / 2 不喜欢 / 3 可接受 / 4 喜欢 / 5 非常喜欢',
    `播放速度：${preferences.speed}×（最终节奏：1×）`, `抖动幅度：${intensity}`, `Max 首选：${result.max || '____'}`, '',
    '第三轮定稿：H/I/J 均获 5 分；去掉暴走强度仪表，重影跟随项目调色盘。',
    `菜单默认随机三选一；单次蓄力保持同一方案，允许连续重复。当前调色盘：${preferences.palette || 'acid'}`, '',
    ...berserkCandidates.flatMap(candidate => [`${candidate.id} ${candidate.name}　评分：${result.scores[candidate.id] || '__'}/5`,
      `  方案：${candidate.note}`, `  备注：${result.notes[candidate.id] || '________________'}`, '']),
    `整体建议：${result.overall || '________________'}`, '',
    '可直接回复方案编号、幅度，或发送这份填好的文件。'].join('\r\n');
}


const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const controllers = new Set(), owners = new WeakMap();
let paused = false;
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const owner = owners.get(entry.target);
    if (owner) { owner.visible = entry.isIntersecting; owner.sync(); }
  }
}, { threshold: 0 });
const noise = (t, seed = 0) => Math.sin(t * 2.13 + seed * 17.37) * .58 + Math.sin(t * 3.71 + seed * 5.19) * .42;
const fract = value => value - Math.floor(value);
const blend = (a, b, p) => '#' + [1, 3, 5].map(i => Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - p) + parseInt(b.slice(i, i + 2), 16) * p).toString(16).padStart(2, '0')).join('');
const rgba = (hex, alpha) => `rgba(${[1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(',')},${alpha})`;

function berserkMarkup(label, position = 1) {
  return `<div class="berserk-surface"><div class="berserk-heading"><span>REASONING / CONTINUOUS</span><b class="berserk-value">MAX</b></div>
    <div class="berserk-rail"><input type="range" min="0" max="100" step="0.1" value="${clampPosition(position) * 100}" aria-label="${label}" aria-describedby="continuous-guide"></div>
    <div class="berserk-labels" aria-hidden="true"><span>LOW</span><span>MED</span><span>HIGH</span><span>MAX</span></div>
    <div class="berserk-stage"><span class="berserk-status">MAX / 持续暴走</span><output class="berserk-position" aria-live="off">位置 100.0%</output></div></div>`;
}

function attachBerserk(host, kind, preferences = {}) {
  const surface = host.matches('.berserk-surface') ? host : host.querySelector('.berserk-surface');
  const input = surface.querySelector('input[type=range]'), canvas = document.createElement('canvas');
  canvas.className = 'berserk-canvas'; canvas.setAttribute('aria-hidden', 'true');
  (preferences.canvasHost || surface).prepend(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) { canvas.remove(); surface.dataset.motionState = 'unavailable'; return { setPosition() {}, sweep() {}, configure() {}, dispose() {} }; }
  const minimum = Number(input.min) || 0, maximum = Number(input.max), span = maximum - minimum;
  let options = { ...preferences }, mode = kind, activeKind = 'tremor', announced = null;
  let width = 0, height = 0, rail = {}, frame = 0, last = 0, time = 0, count = 0;
  let alive = true, position = span ? clampPosition((input.value - minimum) / span) : 1, sweepElapsed = null;
  let speed = preferences.speed || 1, intensity = preferences.intensity || 1.4;
  let motion = preferences.motion || 'full', colors = {};
  const episode = createMaxEpisode(preferences.random);
  const controller = { visible: false, sync, setPosition, sweep, configure, dispose };
  const readout = preferences.readout || surface.querySelector('.berserk-value');
  controllers.add(controller); owners.set(host, controller); observer.observe(host);
  const amountAt = () => clampPosition(options.amountAt ? options.amountAt(position) : motionAmount(position));
  const minimal = () => reduced.matches || motion !== 'full';
  const mainTint = amount => blend(colors.accent, colors.ink, amount * .35);

  function readPalette() {
    const style = getComputedStyle(surface);
    const fallback = { accent: '#D5FF00', signal: '#7957FF', surface: '#0C100F', ink: '#EDEFE7', muted: '#ABB0A9', rail: '#6E746D' };
    for (const role of Object.keys(fallback)) {
      const value = style.getPropertyValue(`--max-${role}`).trim();
      colors[role] = /^#[0-9a-f]{6}$/i.test(value) ? value : fallback[role];
      canvas.dataset[role] = colors[role];
    }
  }
  function fit() {
    if (!alive) return;
    const bounds = surface.getBoundingClientRect(), range = input.getBoundingClientRect();
    width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
    const ratio = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    rail = { left: range.left - bounds.left + 9, right: range.right - bounds.left - 9,
      y: range.top - bounds.top + range.height / 2 };
    draw();
  }
  const resize = new ResizeObserver(fit); resize.observe(surface);
  function path(points, tint, alpha = 1, thickness = 1) {
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha)); ctx.strokeStyle = tint; ctx.lineWidth = thickness;
    ctx.beginPath(); points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  }
  function rect(x, y, w, h, tint, alpha = 1, solid = false) {
    ctx.globalAlpha = Math.max(0, Math.min(1, alpha)); ctx.fillStyle = tint; ctx.strokeStyle = tint; ctx.lineWidth = 1.4;
    if (solid) ctx.fillRect(x, y, w, h); else ctx.strokeRect(x, y, w, h);
  }
  function track(dx, dy, tint, alpha, ghost = false) {
    const { left, right, y } = rail, x = left + (right - left) * position;
    path([[left + dx, y + dy], [x + dx, y + dy]], tint, alpha, ghost ? 1.2 : 2.5);
    rect(x - 8 + dx, y - 9 + dy, 16, 18, tint, alpha, !ghost);
    if (!ghost) rect(x - 3 + dx, y - 4 + dy, 6, 8, colors.surface, 1, true);
  }
  function tremor(amount) {
    const gain = amount * intensity;
    for (let i = 3; i > 0; i--) {
      const dx = noise(time * 17 - i * .6, i) * (5 + i * 3) * gain;
      const dy = noise(time * 19 - i * .6, i + 4) * (2 + i * 2) * gain;
      track(dx, dy, i % 2 ? colors.accent : colors.signal, amount * (.12 + i * .07), true);
    }
    track(noise(time * 19, 2) * 3.8 * gain, noise(time * 21, 1) * 2.8 * gain, mainTint(amount), 1);
    const x = rail.left + (rail.right - rail.left) * position;
    for (const side of [-1, 1]) {
      const length = (10 + noise(time * 9, side) * 3) * gain;
      path([[x + side * (14 + gain * 3), rail.y - 15], [x + side * (14 + gain * 3 + length), rail.y - 21]], colors.accent, amount * .7, 2);
      path([[x + side * (15 + gain * 2), rail.y + 15], [x + side * (15 + gain * 2 + length), rail.y + 21]], colors.signal, amount * .45);
    }
  }
  function afterimage(amount) {
    const gain = amount * intensity, x = rail.left + (rail.right - rail.left) * position;
    for (let i = 6; i >= 1; i--) {
      const dx = -i * 7.2 * gain + noise(time * 15 - i * .65, i) * 7 * gain;
      const dy = noise(time * 16 - i * .65, i + 5) * (3 + i * 1.5) * gain;
      rect(x - 8 + dx, rail.y - 9 + dy, 16, 18, i % 2 ? colors.accent : colors.signal, amount * (.32 - i * .035));
      path([[Math.max(rail.left, x - 92 * gain) + dx, rail.y + dy], [x - 11 + dx, rail.y + dy]], colors.accent, amount * (.28 - i * .025));
    }
    for (let i = 0; i < 8; i++) {
      const p = fract(time * .8 + i * .157), y = rail.y + (i - 3.5) * 6 * gain;
      const start = Math.max(rail.left, x - (35 + p * 110) * gain);
      path([[start, y], [Math.min(x - 15, start + (10 + p * 33) * gain), y]], i % 3 ? colors.accent : colors.signal, amount * (.16 + p * .22), i % 3 ? 1 : 2);
    }
    track(noise(time * 18, 4) * 6 * gain, noise(time * 18, 3) * 3.5 * gain, mainTint(amount), 1);
  }
  function rupture(amount) {
    const gain = amount * intensity;
    for (const i of [-1, 1]) track(i * 11 * gain + noise(time * 16, i) * 5 * gain,
      i * 8 * gain, i < 0 ? colors.accent : colors.signal, .3 * amount, true);
    for (let band = 0; band < 5; band++) {
      const dy = (band - 2) * 5;
      ctx.save(); ctx.beginPath(); ctx.rect(0, rail.y + dy - 2.5, width, 5); ctx.clip();
      track(noise(time * 19, band + 10) * (7 + Math.abs(band - 2) * 5) * gain,
        noise(time * 11, band) * gain, band % 2 ? colors.signal : mainTint(amount), 1);
      ctx.restore();
    }
    const x = rail.left + (rail.right - rail.left) * position;
    for (let i = 0; i < 6; i++) {
      const p = fract(time * .55 + i * .173), sign = i % 2 ? -1 : 1;
      const px = x - (18 + p * 110) * gain, y = rail.y + sign * (16 + i * 3) * gain;
      path([[px, y], [px + (10 + i * 3) * gain, y - sign * 6 * gain]], i % 2 ? colors.signal : colors.accent, amount * (.22 + .3 * (1 - p)), 1.5);
    }
  }
  function draw() {
    if (!width || !alive) return;
    ctx.clearRect(0, 0, width, height);
    const { left, right, y } = rail, amount = amountAt();
    path([[left, y], [right, y]], colors.rail, 1, 2);
    for (const p of options.ticks || [0, 1 / 3, highPosition, 1]) {
      const x = left + (right - left) * p;
      path([[x, y - 4], [x, y + 4]], colors.muted, .9);
    }
    if (!amount || minimal()) track(0, 0, colors.accent, 1);
    else {
      ctx.save(); ctx.beginPath(); ctx.rect(2, y - 48, width - 4, 96); ctx.clip();
      ({ tremor, afterimage, rupture }[activeKind] || tremor)(amount); ctx.restore();
    }
    const gain = minimal() ? 0 : amount * intensity, shake = noise(time * 18, 8) * gain;
    const offsets = activeKind === 'afterimage' ? [[-7, 3], [-14, -3], [-22, 2]] : activeKind === 'rupture' ? [[-9, -4], [11, 4], [-5, 5]] : [[-6, -2], [7, 2], [-2, 4]];
    if (readout) {
      readout.style.textShadow = gain ? offsets.map(([x, y], i) => `${(x * gain + shake * 2).toFixed(2)}px ${(y * gain).toFixed(2)}px 0 ${rgba(i % 2 ? colors.signal : colors.accent, (amount * (i === 2 ? .18 : .34)).toFixed(3))}`).join(',') : 'none';
      readout.style.transform = gain ? `translate(${shake.toFixed(2)}px,${(noise(time * 17, 9) * gain).toFixed(2)}px)` : 'none';
    }
    canvas.dataset.frame = String(++count); canvas.dataset.phase = time.toFixed(3);
    canvas.dataset.amount = amount.toFixed(5);
  }
  function updateUI() {
    const amount = amountAt(), label = options.labelAt ? options.labelAt(position) : positionLabel(position);
    const chosen = episode.update(amount, mode); activeKind = chosen || 'tremor';
    surface.dataset.variant = chosen || 'none';
    if (chosen !== announced) {
      announced = chosen;
      host.dispatchEvent(new CustomEvent('berserk-variant', { bubbles: true, detail: chosen }));
    }
    if (options.manageInput !== false) {
      input.value = (minimum + position * span).toFixed(3);
      input.setAttribute('aria-valuetext', `位置 ${(position * 100).toFixed(1)}%，${label.replaceAll('→', '到')}`);
    }
    if (readout && options.manageReadout !== false) { readout.textContent = label; readout.style.fontSize = `${12 + amount * 5}px`; }
    const output = surface.querySelector('.berserk-position'), status = surface.querySelector('.berserk-status');
    if (output) output.textContent = `位置 ${(position * 100).toFixed(1)}%`;
    if (status) status.textContent = amount === 0 ? '稳定 / 尚未蓄力' : amount > .9995 ? 'MAX / 持续暴走' : 'HIGH → MAX / 逐渐蓄力';
    surface.dataset.position = position.toFixed(5); surface.dataset.charge = amount.toFixed(5);
  }
  function stop() { if (frame) cancelAnimationFrame(frame); frame = 0; last = 0; }
  function isRunning() { return alive && !paused && !minimal() && !document.hidden && controller.visible && (amountAt() > 0 || sweepElapsed !== null); }
  function tick(now) {
    frame = 0;
    if (!isRunning()) return;
    if (last && now - last < 1000 / 40) { frame = requestAnimationFrame(tick); return; }
    const delta = last ? Math.min(.08, (now - last) / 1000) * speed : 0;
    last = now; time += delta;
    if (sweepElapsed !== null) {
      sweepElapsed += delta;
      const p = Math.min(1, sweepElapsed / 3.6);
      position = highPosition + (1 - highPosition) * p; updateUI();
      if (p >= 1) sweepElapsed = null;
      host.dispatchEvent(new CustomEvent('berserk-progress', { bubbles: true, detail: { position, complete: p >= 1 } }));
    }
    draw(); frame = requestAnimationFrame(tick);
  }
  function sync() {
    stop();
    surface.dataset.motionState = minimal() ? 'reduced' : paused ? 'paused' : document.hidden || !controller.visible ? 'suspended' : amountAt() > 0 || sweepElapsed !== null ? 'active' : 'idle';
    if (isRunning()) frame = requestAnimationFrame(tick);
    if (minimal()) draw();
  }
  function setPosition(value, notify = true) {
    position = clampPosition(value); sweepElapsed = null; updateUI(); draw();
    if (!frame || !isRunning()) sync();
    if (notify) host.dispatchEvent(new CustomEvent('berserk-position', { bubbles: true, detail: position }));
  }
  function sweep() {
    if (minimal()) { setPosition(1); return; }
    position = highPosition; sweepElapsed = 0; updateUI(); draw(); sync();
  }
  function onInput() { setPosition(span ? (Number(input.value) - minimum) / span : 1); }
  input.addEventListener('input', onInput);
  function configure(next) {
    options = { ...options, ...next };
    if ([.5, 1, 1.5].includes(Number(next.speed))) speed = Number(next.speed);
    if ([1, 1.4, 1.8].includes(Number(next.intensity))) intensity = Number(next.intensity);
    if (next.motion) motion = next.motion;
    if (next.kind) mode = next.kind;
    readPalette(); updateUI(); fit(); sync();
  }
  function dispose() {
    if (!alive) return;
    alive = false; stop(); resize.disconnect(); observer.unobserve(host); owners.delete(host); controllers.delete(controller);
    input.removeEventListener('input', onInput); canvas.remove(); surface.dataset.motionState = 'disposed';
    if (readout) { readout.style.textShadow = 'none'; readout.style.transform = 'none'; }
  }
  readPalette(); updateUI(); fit(); sync();
  return controller;
}

function pauseBerserk(value) { paused = !!value; for (const controller of controllers) controller.sync(); }
function configureBerserk(preferences) { for (const controller of controllers) controller.configure(preferences); }
function disposeBerserk() { for (const controller of [...controllers]) controller.dispose(); }
function syncControllers() { for (const controller of controllers) controller.sync(); }
function disposeBerserkRuntime() {
  disposeBerserk(); observer.disconnect();
  document.removeEventListener('visibilitychange', syncControllers); reduced.removeEventListener('change', syncControllers);
  window.removeEventListener('pagehide', disposeBerserkRuntime);
}
document.addEventListener('visibilitychange', syncControllers);
reduced.addEventListener('change', syncControllers);
window.addEventListener('pagehide', disposeBerserkRuntime);

return { attachBerserk, dispose: disposeBerserkRuntime };
}

// The native per-session directory owns the catalog and durable selection.
const MODEL_DICTIONARIES = {
  zh: { 'models.title':'模型与思考', 'models.model':'模型选择', 'models.effort':'思考强度', 'models.search':'搜索已配置模型',
    'models.default':'Default', 'models.choose':'选择模型', 'models.loading':'正在加载模型…', 'models.empty':'没有匹配的模型',
    'models.none':'当前模型未提供推理等级。', 'models.unavailable':'当前保存的等级已不可用，请选择一个支持的等级。',
    'models.partial':'部分提供方加载失败，已加载的模型仍可选择。', 'models.close':'关闭模型选择', 'models.retry':'重试',
    'models.saving':'正在保存选择…', 'models.next':'应用于下一条消息', 'models.inUse':'会话正由其他连接使用，请稍后重试。' },
  en: { 'models.title':'Model & reasoning', 'models.model':'Model', 'models.effort':'Reasoning effort', 'models.search':'Search configured models',
    'models.default':'Default', 'models.choose':'Select model', 'models.loading':'Loading models…', 'models.empty':'No matching models',
    'models.none':'This model provides no reasoning levels.', 'models.unavailable':'The saved level is unavailable. Choose a supported level.',
    'models.partial':'Some providers failed to load. Loaded models remain available.', 'models.close':'Close model selection', 'models.retry':'Retry',
    'models.saving':'Saving selection…', 'models.next':'Applies to the next message', 'models.inUse':'This session is in use by another connection. Try again later.' }
};

function modelControlSnapshot(state, defaultLabel = 'Default') {
  const current = state.current;
  const group = state.groups.find(item => item.id === current?.provider);
  const model = group?.models.find(item => item.id === current?.model);
  const reasoning = model?.reasoning;
  const effort = current?.reasoningEffort ?? reasoning?.defaultEffort;
  const levels = reasoning ? [
    ...(reasoning.defaultEffort === undefined ? [{ id: undefined, name: defaultLabel }] : []),
    ...reasoning.efforts
  ] : [];
  return { group, model, effort, levels, index: levels.findIndex(level => level.id === effort),
    modelLabel: model?.name ?? (current ? `${current.provider}/${current.model}` : ''),
    effortLabel: levels.find(level => level.id === effort)?.name ?? state.retainedEffort ?? effort,
    max: typeof effort === 'string' && effort.toLowerCase() === 'max' };
}

function effortSelection(current, level) {
  if (!current || !level) return;
  return { provider: current.provider, model: current.model,
    ...(level.id === undefined ? {} : { reasoningEffort: level.id }) };
}

function modelPopoverPlacement(anchor, panel, viewport, inset = 12) {
  const margin = 12, gap = 8;
  const width = Math.min(520, viewport.width - margin * 2);
  const above = Math.max(0, anchor.top - inset - gap);
  const below = Math.max(0, viewport.height - anchor.bottom - margin - gap);
  const useAbove = above >= Math.min(panel.height, 320) || above >= below;
  const maxHeight = Math.max(80, useAbove ? above : below);
  const height = Math.min(panel.height, maxHeight);
  return { width, maxHeight, left: Math.max(margin, Math.min(anchor.right - width, viewport.width - width - margin)),
    top: useAbove ? Math.max(inset, anchor.top - gap - height) : anchor.bottom + gap };
}

function ModelGlyph({ kind = 'model' }) {
  if (kind === 'effort') return h('span', { className: 'acid-reason-bars', 'aria-hidden': true }, ...[0,1,2].map(i => h('i', { key: i })));
  return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, 'aria-hidden': true },
    h('path', { d: kind === 'chevron' ? 'M4 6l4 4 4-4' : 'M8 1l6 3.5v7L8 15l-6-3.5v-7L8 1Zm0 7L2 4.5M8 8l6-3.5M8 8v7' }));
}

function ReasonEnergy({ motion, appearance, levels, position, readout, compact = false }) {
  const owner = React.useRef(null), instance = React.useRef(null);
  const signature = JSON.stringify(levels?.map(level => [level.id, level.name]) ?? []);
  const scheme = makeScheme(appearance.mode, appearance.palettes[appearance.mode]);
  const paletteVariables = {
    '--max-accent': scheme.variables['--acid-accent-display'], '--max-signal': scheme.tokens['--dsw-alias-link'],
    '--max-surface': scheme.palette.surface, '--max-ink': scheme.text,
    '--max-muted': scheme.tokens['--dsw-alias-label-tertiary'], '--max-rail': scheme.tokens['--dsw-alias-border-l3']
  };
  function options() { return { motion, speed: 1, intensity: 1.4, canvasHost: owner.current,
    readout: readout.current, manageInput: false, manageReadout: false,
    ticks: levels.map((_, i) => levels.length > 1 ? i / (levels.length - 1) : 1),
    amountAt: p => effortVisual(levels, p * Math.max(0, levels.length - 1)).amount,
    labelAt: p => effortVisual(levels, p * Math.max(0, levels.length - 1)).label }; }
  React.useLayoutEffect(() => {
    if (compact || !owner.current) return;
    const runtime = createMaxBerserkRuntime();
    const controller = runtime.attachBerserk(owner.current.parentElement, 'random', options());
    instance.current = controller;
    return () => { runtime.dispose(); instance.current = null; };
  }, [compact, signature]);
  React.useLayoutEffect(() => {
    if (compact || !owner.current || !instance.current) return;
    const surface = owner.current.parentElement;
    for (const [key, value] of Object.entries(paletteVariables)) surface.style.setProperty(key, value);
    instance.current.configure(options()); instance.current.setPosition(position, false);
  }, [compact, signature, position, motion, ...Object.values(paletteVariables)]);
  return compact ? null : h('span', { ref: owner, className: 'acid-max-canvas-owner', 'aria-hidden': true });
}

function IndustrialModelControls({ locked, available, directory, load, select, t, useAppearance }) {
  const state = React.useSyncExternalStore(fn => directory.subscribe(fn), () => directory.getSnapshot());
  const appearance = useAppearance(), motion = appearance.effectiveMotion;
  const accent = appearance.palettes[appearance.mode].accent;
  const snapshot = modelControlSnapshot(state, t('models.default'));
  const busy = state.pending !== null, disabled = locked || !available || busy;
  const [open, setOpen] = React.useState(false), [query, setQuery] = React.useState('');
  const [position, setPosition] = React.useState(null), [error, setError] = React.useState('');
  const [draft, setDraft] = React.useState(null), [impact, setImpact] = React.useState(false);
  const anchor = React.useRef(null), panel = React.useRef(null), search = React.useRef(null), range = React.useRef(null), readout = React.useRef(null);
  const trigger = React.useRef(null), modelButton = React.useRef(null), effortButton = React.useRef(null);
  const dragging = React.useRef(false), pending = React.useRef(false), mounted = React.useRef(true), impactTimer = React.useRef(null);
  const intent = React.useRef('model'), id = React.useId();
  const visual = effortVisual(snapshot.levels, draft ?? Math.max(0, snapshot.index));
  const shownIndex = visual.index, shownLevel = snapshot.levels[visual.nearest];
  const max = visual.amount > .9995;
  const label = snapshot.index < 0 && draft === null ? snapshot.effortLabel : visual.label;
  const expectedSelection = React.useRef(null), previousSelection = React.useRef(selectionIdentity(state.current));
  const levelsSignature = JSON.stringify(snapshot.levels.map(level => [level.id, level.name]));
  const previousLevels = React.useRef(levelsSignature);
  React.useEffect(() => {
    const identity = selectionIdentity(state.current);
    if (identity !== previousSelection.current || levelsSignature !== previousLevels.current) {
      if (identity !== expectedSelection.current || levelsSignature !== previousLevels.current) setDraft(null);
      previousSelection.current = identity; previousLevels.current = levelsSignature;
      if (identity === expectedSelection.current) expectedSelection.current = null;
    }
  }, [state.current?.provider, state.current?.model, state.current?.reasoningEffort, levelsSignature]);
  React.useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(impactTimer.current); }; }, []);
  React.useEffect(() => { setDraft(null); setOpen(false); setQuery(''); setError(''); }, [directory]);
  React.useEffect(() => { if (disabled) { setOpen(false); dragging.current = false; } }, [locked, available]);
  function close(restore = false) {
    const finish=()=>{if(!mounted.current)return;setOpen(false);setDraft(null);setQuery('');dragging.current=false;if(restore)trigger.current?.focus({preventScroll:true});};
    if(panel.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(panel.current,finish,'menu');else finish();
  }
  function flash() { clearTimeout(impactTimer.current); setImpact(true); impactTimer.current = setTimeout(() => { if (mounted.current) setImpact(false); }, 750); }
  React.useEffect(() => {
    if (!open) return;
    const outside = event => { if (!anchor.current?.contains(event.target) && !panel.current?.contains(event.target)) close(); };
    document.addEventListener('pointerdown', outside); document.addEventListener('focusin', outside);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('focusin', outside); };
  }, [open]);
  React.useLayoutEffect(() => {
    if (!open || !panel.current || !anchor.current) return;
    function place() {
      const inset = Math.max(12, (document.querySelector('.acid-masthead')?.getBoundingClientRect().bottom ?? 0) + 8);
      const placement = modelPopoverPlacement(anchor.current.getBoundingClientRect(), { height: panel.current.scrollHeight }, { width: innerWidth, height: innerHeight }, inset);
      const list = panel.current.querySelector('.acid-model-list');
      const rest = panel.current.scrollHeight - (list?.offsetHeight ?? 0);
      setPosition({ ...placement, '--acid-model-list-height': `${Math.max(58, Math.min(176, placement.maxHeight - rest - 2))}px` });
    }
    place(); const observer = new ResizeObserver(place); observer.observe(panel.current); observer.observe(anchor.current);
    window.addEventListener('resize', place); window.addEventListener('scroll', place, true);
    const focus = requestAnimationFrame(() => (intent.current === 'effort' ? range.current : search.current)?.focus());
    return () => { observer.disconnect(); window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true); cancelAnimationFrame(focus); };
  }, [open]);
  React.useLayoutEffect(() => {
    if (!open || !position || intent.current !== 'effort') return;
    const frame = requestAnimationFrame(() => range.current?.closest('.acid-reason-slider')?.scrollIntoView({ block: 'nearest' }));
    return () => cancelAnimationFrame(frame);
  }, [open, position?.maxHeight]);
  function toggle(which, element) {
    trigger.current = element; intent.current = which;
    if(panel.current?.dataset.acidClosing){activeAcceptedMotion?.reopenSurface(panel.current);return;}
    if (open && element === document.activeElement && panel.current) { close(); return; }
    if (disabled) return;
    setPosition(null); setOpen(true); setError(''); load();
  }
  async function submit(selection, closeModel = false, keepPosition = false) {
    if (!selection || disabled || pending.current) return;
    pending.current = true; setError('');
    expectedSelection.current = selectionIdentity(selection);
    let accepted = false;
    try {
      const result = await select(selection);
      if (!mounted.current) return;
      if (result && !result.ok) setError(result.error.code === 'session/writer-held' ? t('models.inUse') : result.error.code + ': ' + result.error.message);
      else { accepted = true; if (closeModel) close(true); }
    } catch (failure) { if (mounted.current) setError(String(failure.message ?? failure)); }
    finally {
      pending.current = false;
      if (!accepted) expectedSelection.current = null;
      if (mounted.current && (!accepted || !keepPosition)) setDraft(null);
    }
  }
  function commitEffort(value) {
    const visual = effortVisual(snapshot.levels, value), level = snapshot.levels[visual.nearest];
    if (pending.current) return;
    if (!level || disabled) { setDraft(null); return; }
    setDraft(visual.index);
    if (visual.nearest === snapshot.index) return;
    if (String(level.id ?? '').toLowerCase() === 'max') flash();
    submit(effortSelection(state.current, level), false, true);
  }
  const modelLabel = snapshot.modelLabel || t(state.status === 'loading' ? 'models.loading' : 'models.choose');
  const modelRows = state.groups.flatMap(group => group.models.map(model => ({ group, model })))
    .filter(({ group, model }) => `${group.name} ${model.name} ${model.id}`.toLowerCase().includes(query.trim().toLowerCase()));
  function onKey(event) {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); }
    else if (event.key === 'ArrowDown' && event.target === search.current) { event.preventDefault(); panel.current.querySelector('[role=option]')?.focus(); }
    else if (event.target.getAttribute('role') === 'option' && ['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault(); const options = [...panel.current.querySelectorAll('[role=option]')], at = options.indexOf(event.target);
      options[event.key === 'Home' ? 0 : event.key === 'End' ? options.length-1 : (at + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length]?.focus();
    } else if (event.key === 'Tab') {
      const controls = [...panel.current.querySelectorAll('button:not(:disabled),input:not(:disabled)')];
      if (event.shiftKey && event.target === controls[0] || !event.shiftKey && event.target === controls.at(-1)) { event.preventDefault(); close(true); }
    }
  }
  const modal = open ? h('section', { ref: panel, id, role: 'dialog', 'aria-label': t('models.title'), 'aria-modal': false,
    className: 'acid-model-popover', onKeyDown: onKey,
    style: position ? { ...position, visibility: 'visible' } : { visibility: 'hidden', top: 0, left: 0 } },
    h('header', { className: 'acid-model-popover-head' }, h('span', null, 'MODEL / REASONING'), h('h2', null, t('models.title')),
      h('button', { type:'button', className:'acid-model-close', onClick:()=>close(true), 'aria-label': t('models.close') }, '×')),
    h('label', { className: 'acid-model-section', htmlFor: `${id}-search` }, h('span', null, '01'), t('models.model')),
    h('input', { ref: search, id: `${id}-search`, type: 'search', className: 'acid-model-search', value: query,
      placeholder: t('models.search'), autoComplete: 'off', onChange: event => setQuery(event.target.value) }),
    h('div', { role: 'listbox', 'aria-label': t('models.model'), className: 'acid-model-list' },
      ...modelRows.map(({group,model}) => {
        const selected = group.id === state.current?.provider && model.id === state.current?.model;
        return h('button', { key: JSON.stringify([group.id,model.id]), type: 'button', role: 'option', 'aria-selected': selected,
          disabled: busy || locked, className: 'acid-model-option', onClick: () => selected ? close(true) : submit({ provider: group.id, model: model.id,
            ...(model.reasoning?.defaultEffort === undefined ? {} : { reasoningEffort: model.reasoning.defaultEffort }) }, true) },
          h('span', {className:'acid-model-option-copy'}, h('strong', null, model.name), h('small', null, group.name ?? group.id)), selected ? h('span', {className:'acid-model-check','aria-hidden':true}, '✓') : null);
      }), modelRows.length === 0 ? h('p', null, t(state.status === 'loading' ? 'models.loading' : 'models.empty')) : null),
    state.failures.length ? h('p', { className:'acid-model-notice', role:'status' }, t('models.partial')) : null,
    h('div', { className: 'acid-model-section' }, h('span', null, '02'), t('models.effort'), h('output', { ref:readout, className:'acid-max-value', htmlFor:`${id}-range`, 'aria-live':'polite' }, label ?? t('models.none'))),
    snapshot.levels.length ? h('div', { className: 'acid-reason-slider berserk-surface', 'data-max': max ? '' : undefined, 'data-impact': impact ? '' : undefined,
      style: { '--reason-fill': `${Math.max(0,shownIndex) / Math.max(1,snapshot.levels.length-1) * 100}%` } },
      h(ReasonEnergy, { motion, appearance, levels:snapshot.levels, position:visual.position, readout }), h('div', { className:'acid-reason-slices', 'aria-hidden':true }),
      h('div', { className:'acid-reason-rail' }, h('div', { className:'acid-reason-track','aria-hidden':true }), h('div', { className:'acid-reason-flow','aria-hidden':true }),
        h('div', { className:'acid-reason-ghost','aria-hidden':true }),
        h('input', { ref: range, id:`${id}-range`, type:'range', min:0, max:Math.max(0,snapshot.levels.length-1), step:0.01,
          value:Math.max(0,shownIndex), disabled:disabled || snapshot.levels.length < 2,
          'aria-label':t('models.effort'), 'aria-valuetext':label ?? '',
          onPointerDown:event=>{dragging.current=true;event.currentTarget.setPointerCapture(event.pointerId);},
          onChange:event=>{const value=Number(event.target.value);setDraft(value);if(!dragging.current)commitEffort(value);},
          onPointerUp:event=>{dragging.current=false;commitEffort(event.currentTarget.value);},
          onKeyUp:event=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key))commitEffort(event.currentTarget.value);},
          onPointerCancel:()=>{dragging.current=false;setDraft(null);},
          onBlur:event=>{if(dragging.current){dragging.current=false;commitEffort(event.currentTarget.value);}} })),
      h('div', { className:'acid-reason-levels', 'aria-hidden':true }, ...snapshot.levels.map((level,i)=>h('span',{key:level.id??'default','data-current':i===visual.nearest?'':undefined},level.name))))
      : h('p', { className:'acid-model-notice' }, t('models.none')),
    snapshot.index < 0 && snapshot.levels.length ? h('p',{className:'acid-model-notice'},t('models.unavailable')) : null,
    (error || state.error) ? h('div', { className:'acid-model-error', role:'alert' }, error || state.error,
      h('button',{type:'button',disabled:busy,onClick:()=>{setError('');load();}},t('models.retry'))) : null,
    h('footer', { className:'acid-model-note', role:'status' }, busy ? t('models.saving') : t('models.next'))) : null;
  return h('div', { ref: anchor, className:'acid-model-controls', 'data-model-provider':state.current?.provider,
    'data-model-id':state.current?.model, 'data-model-effort':snapshot.effort, 'data-model-status':state.status, 'data-energy-motion':motion },
    h('button', { ref:modelButton, type:'button', className:'acid-model-trigger', disabled,
      'aria-label':`${t('models.model')}：${modelLabel}`, title:modelLabel, 'aria-expanded':open, 'aria-controls':open?id:undefined,
      onClick:event=>toggle('model',event.currentTarget) }, h(ModelGlyph), h('span',{className:'acid-model-name'},modelLabel), h(ModelGlyph,{kind:'chevron'})),
    snapshot.effortLabel !== undefined ? h('button', { ref:effortButton, type:'button', className:'acid-effort-trigger', disabled,
      'data-max':snapshot.max?'':undefined, 'aria-label':`${t('models.effort')}：${snapshot.effortLabel}`, 'aria-expanded':open, 'aria-controls':open?id:undefined,
      onClick:event=>toggle('effort',event.currentTarget) }, null,
      h(ModelGlyph,{kind:'effort'}),h('span',null,snapshot.effortLabel),h(ModelGlyph,{kind:'chevron'})) : null,
    modal ? createPortal(modal, document.body) : null);
}

function installModelControls(ctx, useAppearance) {
  if (typeof ctx.inject !== 'function') return;
  ctx.inject(['modelDirectories','sessions','remote','remote.session'], scope => {
    scope.slots.inject('conversation.input.model', () => scope.slots.register({
      name:'conversation.input.model', id:'industrial.model-controls', locale:'industrial.acid', priority:-100,
      inject:sessionId => {
        const directory = scope.modelDirectories.directoryFor(sessionId);
        const available = scope.sessions.subagentAddress(sessionId) === undefined;
        return { available, directory:directory.store, useAppearance,
          load:()=>{if(available)directory.load().catch(()=>{});},
          select:selection=>available?directory.select(selection):Promise.resolve(undefined) };
      }
    }, IndustrialModelControls));
  });
}

    const PREF = `${ID}:canvas`;
    const PALETTE_PREF = `${ID}:palettes`;
    const MOTION_PREF = `${ID}:motion`;
    const NS = 'industrial.acid';
    const DEFAULT_PALETTES = {
  day: { accent: '#D5FF00', signal: '#5234EC', surface: '#F0F1E8', text: '#111511' },
  night: { accent: '#D5FF00', signal: '#7957FF', surface: '#0C100F', text: '#EDEFE7' }
};
const PALETTE_PRESETS = {
  acid: DEFAULT_PALETTES,
  orange: {
    day: { accent: '#FF953D', signal: '#075BC7', surface: '#F4F0E7', text: '#211A14' },
    night: { accent: '#FF953D', signal: '#326CFF', surface: '#191613', text: '#F1EBE1' }
  },
  polar: {
    day: { accent: '#72E8ED', signal: '#6734DB', surface: '#EDF3F2', text: '#142024' },
    night: { accent: '#72E8ED', signal: '#8058EB', surface: '#10191F', text: '#E7EFF2' }
  }
};
function normalizeHex(value, fallback) {
  return typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value.toUpperCase() : fallback;
}
function normalizePalettes(value) {
  return Object.fromEntries(['day', 'night'].map(mode => [mode, Object.fromEntries(
    Object.entries(DEFAULT_PALETTES[mode]).map(([key, fallback]) => [key, normalizeHex(value?.[mode]?.[key], fallback)])
  )]));
}
function normalizeCanvas(value) { return ['paper', 'night', 'adaptive'].includes(value) ? value : 'paper'; }
function resolveMode(canvas, nativeScheme = 'light') {
  return canvas === 'night' || (canvas === 'adaptive' && nativeScheme === 'dark') ? 'night' : 'day';
}
function rgb(hex) { return [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16)); }
function mix(left, right, amount) {
  const a = rgb(left), b = rgb(right);
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * amount).toString(16).padStart(2, '0')).join('').toUpperCase();
}
function luminance(hex) {
  const c = rgb(hex).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  return c[0] * .2126 + c[1] * .7152 + c[2] * .0722;
}
function contrast(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
function foreground(background) {
  const choices = ['#121711', '#F7F7F0'];
  choices.sort((a, b) => contrast(b, background) - contrast(a, background));
  if (contrast(choices[0], background) >= 4.5) return choices[0];
  return contrast('#000000', background) >= contrast('#FFFFFF', background) ? '#000000' : '#FFFFFF';
}
function safeSurface(base, target, amount) {
  const ink = contrast('#000000', base) >= contrast('#FFFFFF', base) ? '#000000' : '#FFFFFF';
  const minimum = Math.min(4.6, contrast(ink, base));
  // Midtone user colors can have little spare contrast. Limit the surface tint
  // so one readable foreground remains available across cards and hover states.
  for (let step = 100; step >= 0; step--) {
    const candidate = mix(base, target, amount * step / 100);
    if (contrast(ink, candidate) >= minimum) return candidate;
  }
  return base;
}
function readable(color, backgrounds, minimum = 4.6) {
  const score = value => Math.min(...backgrounds.map(bg => contrast(value, bg)));
  if (score(color) >= minimum) return color;
  const target = score('#000000') >= score('#FFFFFF') ? '#000000' : '#FFFFFF';
  // Choose the closest safe tone of the requested color, retaining its hue.
  for (let step = 1; step <= 100; step++) {
    const candidate = mix(color, target, step / 100);
    if (score(candidate) >= minimum) return candidate;
  }
  return target;
}
function makeScheme(mode, palette) {
  const night = mode === 'night', base = palette.surface;
  const panel = safeSurface(base, '#FFFFFF', night ? .045 : .5);
  const tone = foreground(base);
  const chip = safeSurface(base, tone, night ? .105 : .075);
  const hover = safeSurface(base, tone, .10), solidHover = safeSurface(base, tone, .14);
  const surfaces = [base, panel, chip, hover, solidHover];
  const text = readable(palette.text, surfaces);
  const secondary = readable(mix(text, base, .24), surfaces);
  const tertiary = readable(mix(text, base, .36), surfaces);
  const signalForeground = foreground(palette.signal), accentForeground = foreground(palette.accent);
  const link = readable(palette.signal, surfaces);
  const sidebar = night ? safeSurface(base, '#FFFFFF', .025) : palette.accent;
  const sidebarHover = safeSurface(sidebar, foreground(sidebar), .08);
  const sidebarText = readable(night ? text : accentForeground, [sidebar, sidebarHover]);
  const sidebarSecondary = readable(mix(sidebarText, sidebar, .2), [sidebar, sidebarHover]);
  const sidebarTertiary = readable(mix(sidebarText, sidebar, .32), [sidebar, sidebarHover]);
  const sidebarActive = night ? mix(sidebar, palette.signal, .24) : palette.signal;
  const sidebarActiveText = night ? readable(palette.accent, [sidebarActive]) : signalForeground;
  const masthead = night ? mix(base, '#000000', .2) : palette.accent;
  const mastheadText = night ? readable(palette.accent, [masthead]) : accentForeground;
  const context = night ? mix(base, palette.signal, .14) : palette.signal;
  const contextText = night ? readable(text, [context]) : signalForeground;
  const border = mix(text, base, night ? .5 : .65);
  const tokens = {
    '--dsw-alias-bg-base': base,
    '--dsw-alias-bg-layer-1': panel, '--dsw-alias-bg-layer-2': base, '--dsw-alias-bg-layer-3': chip,
    '--dsw-alias-bg-overlay': panel, '--dsw-alias-bg-module-platform': chip,
    '--dsw-specific-input-major': panel, '--dsw-specific-menu': panel, '--dsw-menu-surface-fill': panel,
    '--dsw-alias-menu-group-header-fill': panel, '--dsw-specific-selector': chip,
    '--dsw-alias-markdown-inline-code': chip, '--dsw-alias-link': link,
    '--dsw-alias-label-primary': text, '--dsw-alias-label-primary-dimmed': text,
    '--dsw-alias-label-primary-foreground': signalForeground,
    '--dsw-alias-label-secondary': secondary, '--dsw-alias-label-tertiary': tertiary,
    '--dsw-alias-label-caption': tertiary, '--dsw-alias-label-quaternary': tertiary,
    '--dsw-alias-label-dimmed': tertiary, '--dsw-alias-menu-icon': secondary,
    '--dsw-alias-border-l1': border, '--dsw-alias-border-l2': border,
    '--dsw-alias-border-l3': readable(mix(text, base, .45), [base, panel], 3.1),
    '--dsw-alias-border-l4': night ? mix(text, base, .34) : text,
    '--dsw-alias-interactive-bg-hover': hover, '--dsw-alias-interactive-bg-hover-solid': solidHover,
    '--dsw-alias-button-floating-fill': panel, '--dsw-alias-button-floating-hover': hover,
    '--dsw-alias-button-elevated-fill': chip,
    '--dsw-alias-button-primary-fill': palette.signal, '--dsw-alias-button-info-fill': palette.signal,
    '--dsw-alias-button-info-hover': safeSurface(palette.signal, signalForeground, .08),
    '--dsw-alias-brand-primary': palette.signal,
    '--dsw-alias-brand-primary-new-colorprimary-new-color': palette.signal,
    '--dsw-alias-state-business-primary': link,
    '--dsw-alias-state-business-tertiary': mix(base, palette.signal, .16),
    '--dsw-focus-ring-color': readable(palette.signal, surfaces, 3.1),
    '--dsw-specific-sidebar-fill': sidebar,
    '--dsw-alias-scrollbar-bg-l1': border, '--dsw-alias-scrollbar-bg-l2': border,
    '--dsw-alias-scrollbar-hover-l1': secondary, '--dsw-alias-scrollbar-hover-l2': secondary
  };
  const variables = {
    '--acid-lime': palette.accent, '--acid-blue': palette.signal,
    '--acid-palette-surface': palette.surface, '--acid-palette-text': palette.text,
    '--acid-accent-fore': accentForeground, '--acid-blue-fore': signalForeground,
    '--acid-accent-display': readable(palette.accent, surfaces, 3.1),
    '--acid-masthead-bg': masthead, '--acid-masthead-fore': mastheadText,
    '--acid-context-bg': context, '--acid-context-fore': contextText,
    '--acid-context-number': night ? readable(palette.accent, [context]) : contextText,
    '--acid-sidebar-bg': sidebar, '--acid-sidebar-fore': sidebarText,
    '--acid-sidebar-secondary': sidebarSecondary, '--acid-sidebar-tertiary': sidebarTertiary,
    '--acid-sidebar-hover': sidebarHover, '--acid-sidebar-active': sidebarActive,
    '--acid-sidebar-active-fore': sidebarActiveText,
    '--acid-sidebar-rule': readable(mix(sidebarText, sidebar, .45), [sidebar], 3.1),
    '--acid-sidebar-new-bg': night ? palette.accent : '#121711',
    '--acid-sidebar-new-fore': night ? accentForeground : readable(palette.accent, ['#121711']),
    '--acid-sidebar-signature': night ? readable(palette.accent, [sidebar]) : sidebarText,
    '--acid-settings-nav-bg': night ? sidebar : palette.signal,
    '--acid-settings-nav-fore': night ? sidebarText : readable(signalForeground, [palette.signal, safeSurface(palette.signal, signalForeground, .1)]),
    '--acid-settings-nav-hover': night ? sidebarHover : safeSurface(palette.signal, signalForeground, .1)
  };
  return { mode, palette, text, tokens, variables, contrast: contrast(text, base), adjusted: text !== palette.text };
}

    const dictionaries = {
      zh: { 'workspace': '工作区', 'none': '未选择工作区', 'plugins': '插件', 'settings': '设置', 'canvas': '皮肤外观', 'canvas.description': '白天与黑天切换整套皮肤；跟随应用使用原有外观设置。', 'paper': '白天', 'night': '黑天', 'adaptive': '跟随应用', 'local': '本地工作区', 'palette': '调色盘', 'palette.description': '调整即生效，白天与黑天分别保存。', 'accent': '酸性色', 'signal': '交互色', 'surface': '阅读背景', 'text': '正文色', 'acid': '经典酸性', 'orange': '工业橙', 'polar': '极地信号', 'reset': '恢复默认', 'contrast': '正文对比度', 'adjusted': '已增强正文对比度，实际颜色', 'hex': 'HEX 色值', 'motion': '动效', 'full': '完整', 'quiet': '克制', 'off': '停止' },
      en: { 'workspace': 'WORKSPACE', 'none': 'No workspace selected', 'plugins': 'Plugins', 'settings': 'Settings', 'canvas': 'Skin appearance', 'canvas.description': 'Day and night switch the entire skin. Follow app uses the existing appearance setting.', 'paper': 'Day', 'night': 'Night', 'adaptive': 'Follow app', 'local': 'LOCAL WORKSPACE', 'palette': 'Palette', 'palette.description': 'Updates immediately. Day and night palettes are saved separately.', 'accent': 'Acid accent', 'signal': 'Interaction', 'surface': 'Reading canvas', 'text': 'Text', 'acid': 'Classic acid', 'orange': 'Industrial orange', 'polar': 'Polar signal', 'reset': 'Reset palette', 'contrast': 'Text contrast', 'adjusted': 'Text contrast enhanced; effective color', 'hex': 'HEX color', 'motion': 'Motion', 'full': 'Full', 'quiet': 'Quiet', 'off': 'Off' }
    };

    // Semantic statuses are intentionally owned by the original application.
    function tokenOverrides(canvas, inputPalettes) {
      const palettes = normalizePalettes(inputPalettes);
      const day = makeScheme('day', palettes.day), night = makeScheme('night', palettes.night);
      const pair = (light, dark = light) => canvas === 'night' ? { light: dark, dark } : { light, dark: canvas === 'adaptive' ? dark : light };
      const result = {};
      for (const [name, light] of Object.entries(day.tokens)) result[name] = pair(light, night.tokens[name]);
      result['--dsw-radius-xs'] = pair('1px');
      for (const key of ['sm', 'md', 'lg', 'xl', 'panel']) result[`--dsw-radius-${key}`] = pair('2px');
      result['--dsw-elevation-prominent'] = pair('4px 4px 0 #121711');
      result['--dsw-specific-input-major-shadow'] = pair('none');
      return result;
    }

    function workspaceContext(items, current) {
      const index = items.findIndex(item => item.sessionIds?.includes(current));
      return index < 0 ? null : { index: index + 1, workspaceId: items[index].workspaceId, title: items[index].title || items[index].name || items[index].path?.split(/[\\/]/).filter(Boolean).at(-1) || '' };
    }

    function apply(ctx, config = {}) {
      let preferences = { canvas: normalizeCanvas(config.canvas), palettes: normalizePalettes(), motion: 'full' };
      try {
        const stored = localStorage.getItem(PREF);
        if (['paper', 'night', 'adaptive'].includes(stored)) preferences.canvas = stored;
      } catch { /* Storage can be unavailable in a private browser context. */ }
      try { preferences.palettes = normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))); } catch { /* Recover a malformed palette with safe defaults. */ }
      try { const storedMotion=localStorage.getItem(MOTION_PREF);if(['full','quiet','off'].includes(storedMotion))preferences.motion=storedMotion; } catch {}
      const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)');
      const getMotion=()=>reduce?.matches?'off':preferences.motion;
      let motionController;
      const height = Number.isFinite(config.mastheadHeight) ? Math.max(96, Math.min(260, config.mastheadHeight)) : 128;
      let refreshTokens, ownedStyle;
      const listeners = new Set();
      const themeSnapshot = () => ctx.theme.getTheme();
      let view = { ...preferences, effectiveMotion: getMotion(), mode: resolveMode(preferences.canvas, themeSnapshot().active.colorScheme) };
      const subscribe = listener => { listeners.add(listener); return () => listeners.delete(listener); };
      const getSnapshot = () => view;
      const useAppearance = () => React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

      function syncAppearance(snapshot = themeSnapshot()) {
        const mode = resolveMode(preferences.canvas, snapshot.active.colorScheme);
        const scheme = makeScheme(mode, preferences.palettes[mode]);
        if (ownedStyle) {
          ownedStyle.textContent = CSS + '\nhtml[data-industrial-acid]{' + Object.entries(scheme.variables).map(([key, value]) => `${key}:${value}`).join(';') + '}';
          document.documentElement.setAttribute('data-industrial-canvas', preferences.canvas);
          document.documentElement.setAttribute('data-industrial-mode', mode);
          document.documentElement.setAttribute('data-industrial-motion',getMotion());
          if(getMotion()==='off')motionController?.cancel();
        }
        if (view.canvas !== preferences.canvas || view.palettes !== preferences.palettes || view.mode !== mode || view.motion !== preferences.motion || view.effectiveMotion !== getMotion()) {
          view = { ...preferences, mode, effectiveMotion: getMotion() };
          for (const listener of listeners) listener();
        }
      }
      function updateAppearance(next) {
        const updated = { canvas: normalizeCanvas(next.canvas ?? preferences.canvas), palettes: normalizePalettes(next.palettes ?? preferences.palettes), motion: ['full','quiet','off'].includes(next.motion)?next.motion:preferences.motion };
        if (JSON.stringify(updated) === JSON.stringify(preferences)) return;
        preferences = updated;
        try {
          localStorage.setItem(PREF, preferences.canvas);
          localStorage.setItem(PALETTE_PREF, JSON.stringify(preferences.palettes));
          localStorage.setItem(MOTION_PREF, preferences.motion);
        } catch { /* Changes remain usable in this session if storage is blocked. */ }
        refreshTokens?.();
      }

      ctx.effect(() => ctx.locale.register(NS, { zh:{...dictionaries.zh,...MODEL_DICTIONARIES.zh}, en:{...dictionaries.en,...MODEL_DICTIONARIES.en} }), `${ID}: locale`);
      ctx.effect(() => {
        const root = document.documentElement;
        const previous = { enabled: root.getAttribute('data-industrial-acid'), canvas: root.getAttribute('data-industrial-canvas'), mode: root.getAttribute('data-industrial-mode'), shell: root.getAttribute('data-industrial-shell'), motion: root.getAttribute('data-industrial-motion'), motionSet: root.getAttribute('data-industrial-motion-set'), height: root.style.getPropertyValue('--acid-header-max'), priority: root.style.getPropertyPriority('--acid-header-max') };
        const style = document.createElement('style');
        style.dataset.pluginCss = `${ID}/skin.css`;
        style.dataset.plugin = ID;
        ownedStyle = style;
        root.setAttribute('data-industrial-acid', '');root.setAttribute('data-industrial-shell','planar-v2');root.setAttribute('data-industrial-motion-set','accepted-r3');
        syncAppearance();
        root.style.setProperty('--acid-header-max', `${height}px`);
        document.head.appendChild(style);
        return () => {
          style.remove();
          ownedStyle = undefined;
          for (const [key, value] of [['data-industrial-acid', previous.enabled], ['data-industrial-canvas', previous.canvas], ['data-industrial-mode', previous.mode], ['data-industrial-shell', previous.shell], ['data-industrial-motion', previous.motion], ['data-industrial-motion-set', previous.motionSet]]) {
            if (value === null) root.removeAttribute(key); else root.setAttribute(key, value);
          }
          if (previous.height) root.style.setProperty('--acid-header-max', previous.height, previous.priority); else root.style.removeProperty('--acid-header-max');
        };
      }, `${ID}: owned stylesheet and root attributes`);
      ctx.on('theme/change', syncAppearance);
      ctx.effect(() => {
        const onStorage = event => {
          if (event.key !== PREF && event.key !== PALETTE_PREF && event.key !== MOTION_PREF && event.key !== null) return;
          try {
            preferences = { canvas: normalizeCanvas(localStorage.getItem(PREF) ?? config.canvas), palettes: normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))), motion: ['full','quiet','off'].includes(localStorage.getItem(MOTION_PREF))?localStorage.getItem(MOTION_PREF):'full' };
            refreshTokens?.();
          } catch { /* Keep the last usable colors after malformed external data. */ }
        };
        window.addEventListener('storage', onStorage);
        return () => { window.removeEventListener('storage', onStorage); listeners.clear(); };
      }, `${ID}: palette storage subscription`);
      ctx.effect(() => {
        let dispose = ctx.theme.overrideTokens(ID, tokenOverrides(preferences.canvas, preferences.palettes));
        refreshTokens = () => {
          const next = ctx.theme.overrideTokens(ID, tokenOverrides(preferences.canvas, preferences.palettes));
          dispose();
          dispose = next;
          syncAppearance();
        };
        return () => { refreshTokens = undefined; dispose(); };
      }, `${ID}: theme layer`);

      function ModeIcon({ value }) {
        const paths = { paper: 'M8 1v2m0 10v2M1 8h2m10 0h2M3 3l1.4 1.4m7.2 7.2L13 13M3 13l1.4-1.4M11.6 4.4 13 3', night: 'M12.8 10.5A5.7 5.7 0 0 1 5.5 3.2 5.7 5.7 0 1 0 12.8 10.5Z', adaptive: 'M2 2h12v9H2ZM5 14h6m-3-3v3' };
        return h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.3, 'aria-hidden': true }, value === 'paper' ? h('circle', { cx: 8, cy: 8, r: 3 }) : null, h('path', { d: paths[value] }));
      }
      function AppearanceFooter({ wide, t }) {
        const state = useAppearance();const [paletteOpen,setPaletteOpen]=React.useState(false);
        return h('div', { className: 'acid-footer' }, h(Footer, { wide, t }),
          h('div', { className: `acid-mode-switch${wide ? '' : ' acid-mode-switch-rail'}`, role: 'group', 'aria-label': t('canvas') },
            ...['paper', 'night', 'adaptive'].map(value => h('button', { key: value, type: 'button', 'data-appearance-option': value, title: t(value), 'aria-label': t(value), 'aria-pressed': state.canvas === value, onClick: () => updateAppearance({ canvas: value }) }, h(ModeIcon, { value }), wide ? h('span', null, t(value)) : null))),
          h('button',{type:'button',className:'acid-palette-shortcut',onClick:()=>setPaletteOpen(true),'aria-label':t('palette')},h('span',{className:'acid-palette-swatch','aria-hidden':true}),wide?t('palette'):null,wide?h('span',{'aria-hidden':true},'↗'):null),
          paletteOpen?h(NativeDialog,{title:t('palette'),onClose:()=>setPaletteOpen(false)},h(CanvasRow,{t,prefix:'acid-dialog'})):null); 
      }
      function ColorField({ field, value, t, onColor, prefix='acid' }) {
        const [draft, setDraft] = React.useState(value);
        React.useEffect(() => setDraft(value), [value]);
        const valid = /^#[0-9a-f]{6}$/i.test(draft);
        const commit = () => { if (valid) onColor(draft.toUpperCase()); else setDraft(value); };
        return h('div', { className: 'acid-color-field' },
          h('label', { htmlFor: `${prefix}-color-${field}` }, t(field)),
          h('div', { className: 'acid-color-inputs' },
            h('input', { type: 'color', id: `${prefix}-color-${field}`, value, onInput: event => onColor(event.target.value) }),
            h('input', { type: 'text', id: `${prefix}-hex-${field}`, 'aria-label': `${t(field)} ${t('hex')}`, value: draft, maxLength: 7, spellCheck: false, autoComplete: 'off', 'aria-invalid': !valid, onChange: event => {
              setDraft(event.target.value);
              if (/^#[0-9a-f]{6}$/i.test(event.target.value)) onColor(event.target.value.toUpperCase());
            }, onBlur: commit, onKeyDown: event => { if (event.key === 'Enter') { commit(); event.currentTarget.blur(); } else if (event.key === 'Escape') setDraft(value); } })));
      }
      function CanvasRow({ t, prefix='acid' }) {
        const state = useAppearance(), palette = state.palettes[state.mode], scheme = makeScheme(state.mode, palette);
        const setPalette = colors => updateAppearance({ palettes: { ...state.palettes, [state.mode]: colors } });
        return h('section', { className: 'acid-appearance-settings', 'aria-label': t('palette') },
          h('div', { className: 'acid-setting-row' },
            h('div', null, h('label', { htmlFor: `${prefix}-canvas` }, t('canvas')), h('p', null, t('canvas.description'))),
            h('select', { id: `${prefix}-canvas`, value: state.canvas, onChange: event => updateAppearance({ canvas: event.target.value }) }, ...['paper', 'night', 'adaptive'].map(value => h('option', { key: value, value }, t(value))))),
          h('div', { className: 'acid-setting-row' },h('label',{htmlFor:`${prefix}-motion`},t('motion')),h('select',{id:`${prefix}-motion`,value:state.motion,onChange:event=>updateAppearance({motion:event.target.value})},...['full','quiet','off'].map(value=>h('option',{key:value,value},t(value))))),
          h('div', { className: 'acid-palette-head' }, h('div', null, h('strong', null, `${t(state.mode === 'day' ? 'paper' : 'night')} / ${t('palette')}`), h('p', null, t('palette.description'))), h('button', { type: 'button', 'data-palette-reset': true, onClick: () => setPalette(DEFAULT_PALETTES[state.mode]) }, t('reset'))),
          h('div', { className: 'acid-palette-presets', role: 'group', 'aria-label': t('palette') }, ...Object.entries(PALETTE_PRESETS).map(([key, colors]) => h('button', { key, type: 'button', 'data-palette-preset': key, 'aria-pressed': JSON.stringify(palette) === JSON.stringify(colors[state.mode]), onClick: () => setPalette(colors[state.mode]) }, h('span', { className: 'acid-preset-dot', style: { background: colors[state.mode].accent }, 'aria-hidden': true }), t(key)))),
          h('div', { className: 'acid-palette-fields' }, ...['accent', 'signal', 'surface', 'text'].map(field => h(ColorField, { key: field, field, prefix, value: palette[field], t, onColor: color => setPalette({ ...palette, [field]: color }) }))),
          h('div', { className: 'acid-palette-preview', style: { background: palette.surface, color: scheme.text }, 'aria-hidden': true }, h('strong', null, 'Aa / 0123'), h('span', { style: { background: palette.accent, color: scheme.variables['--acid-accent-fore'] } }, 'DS'), h('span', { style: { background: palette.signal, color: scheme.variables['--acid-blue-fore'] } }, '01')),
          h('p', { className: 'acid-contrast-note', role: 'status', 'aria-live': 'polite' }, `${t('contrast')} ${scheme.contrast.toFixed(1)}:1`, scheme.adjusted ? ` · ${t('adjusted')} ${scheme.text}` : ''));
      }

      ctx.effect(installComposerMenuClearance,`${ID}: native composer menu clearance`);
      ctx.effect(()=>{motionController=installSkinMotion(getMotion);const onReduce=()=>syncAppearance();reduce?.addEventListener('change',onReduce);return()=>{reduce?.removeEventListener('change',onReduce);motionController.dispose();motionController=undefined;for(const row of document.querySelectorAll('[data-acid-ordinal]'))row.removeAttribute('data-acid-ordinal');};},`${ID}: retractable motion`);
      ctx.effect(()=>{if(getMotion()==='off')return;const intro=document.createElement('div');intro.className='acid-intro';intro.setAttribute('aria-hidden','true');intro.innerHTML='<div class=acid-intro-name>DEEPSEEK<span>HARNESS</span></div><div class=acid-intro-bar></div>';document.body.append(intro);const timer=setTimeout(()=>intro.remove(),1250);return()=>{clearTimeout(timer);intro.remove();};},`${ID}: opening sequence`);
      const register = (name, id, Component, extra = {}) => ctx.slots.inject(name, () => ctx.slots.register({ name, id, locale: NS, ...extra }, Component));
      register('shell.overlay', 'industrial.masthead', props=>h(Masthead,{...props,useAppearance,getMotion,motion:()=>motionController,toggleSidebar:()=>ctx.layout.toggleSidebar(),goHome:()=>ctx.layout.selectPanel(null),pickWorkspace:id=>ctx.uiWorkspace.openWorkspace(id).catch(()=>{})}), { order: -1000 });
      register('conversation.hero.brand.mark', 'industrial.hero', HeroMark, { priority: -50 });
      register('sidebar.footer.action', 'industrial.signature', AppearanceFooter, { order: 1000 });
      register('settings.header', 'industrial.settings-header', SettingsHeader, { priority: -50 });
      register('settings.general.item', 'industrial.canvas', CanvasRow, { order: 12 });
      installModelControls(ctx, useAppearance);
    }

    return { inject: ['slots', 'locale', 'theme', 'layout', 'uiWorkspace'], apply, tokenOverrides, workspaceContext, formatWorkspaceIndex, normalizePalettes, normalizeCanvas, resolveMode, makeScheme, contrast, DEFAULT_PALETTES, PALETTE_PRESETS, modelControlSnapshot, effortSelection, modelPopoverPlacement, effortVisual, selectionIdentity, createMaxEpisode, acceptedDuration, ACCEPTED_MOTION };
  }
});
