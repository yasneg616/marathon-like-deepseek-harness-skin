window.__ModuleLoader__.load({
  id: 'dsh-industrial-acid-skin',
  factory: (require) => {
    const React = require('react');
    const { createPortal } = require('react-dom');
    const h = React.createElement;
    const ID = 'dsh-industrial-acid-skin';
    const CSS = "@font-face{font-family:Industrial GRID;src:url(data:font/woff2;base64,d09GMgABAAAAABOcAAwAAAAAJuAAABNIAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAAG4EgBmAAgV4RCAqzLKMbATYCJAODDAuBSAAEIAWHPQeHcBszHUVGhY0DQMTWAoj/6wROhwNjwf0DYdpXg2x0J61LogxBG2lnkRDt7P2pfoKD48V+2MfBnxxmUpeba9dyzQhJZn/gt9kj3E6cuSqMRQp8wjyBiYSB4LejWRksz+wbK1bhokM/Pqc2I4i186S4YH1RkyVLphK7KeMH2+r2F3BzX6DD4bBHc9saJX6bCyZ6iFjKtESkNQbd7XjBWh4CxMP/H+p972XaxFBCNi04j6+24kVLwWu68RMN73qSEo81woHo9FA830oQTl0I7tqPQ8L/fu7T5u7klJd8gbLgdoWuNe/f5MPN+2+JUpGp6ttiuiVeriLS9RWGKL9Iar8rkEOhKqztdHxdp6oylm76C5II39vOZWzqKzGINb+RzwgYBAS7dsJsdhYoOEToVyEBmLdrVBhdJI+MrINGSRZdRt52sTkHLmaFrenASQnSZnIrbbJm2rzdsTJoFa3RWE9uqcULiCjbQVTCcCQTeJ83fHpUDgWukAHCgdkOJrgMSBAXGjhx0/q8Dz9dFTvPBQBEWPQlnCybmq+1eP/3r6NGvl7qBH1MDT13b59ZRlxNXE/crKWxsADmciQGWJr6Hob6pcRVxHV2EVqYXmg0zfO+JWAA943u0gHjCEQPxO4QcHMtZPxEGLdFVdXUlUWkpJUU+MX4JAQENRW1hFVkJGU1xHXltOV1REREReG4NYIAwBsGACcAoAQs+gIUl9wsNRp7WBRiwTAXBMMG5RuClv0lW5Z4YL/MlwjzaIZHNZFfTOyBo8uUh1EkUZYkeZJsj6p0sH1oUCBJJDmQpMkRDFEfTNM8GQ4ObycHk+KwFEcYHDrig0mSnWq2Nbmn7/ChwrBeArWDkGhPBkPFJWOJImxtfRflMqjaki3hIbaHB+JCHR4k1XgwHhwdtMldM0qkweBAPBjEL4s4i95ncQq4zOCNTbWBEX80qu4MHdt5ie31AjOapqovnWNp0nkdmcyx/DCV46H8Wj+iYOujduhimxrMgqmo0Jkhp5zV0rf176nWFFXgIis4rY+4YR+5Sk5cqFJCReN0Hi5xA9gUbQNhFiCWIA3Fj6IWsfpdRtFU5qyETOZ+l9XFfXklAi+wxoZ7Hw05VfHfslIbuV9GLYqwWbeTE/0kaAGEn0Au/yya/FeK7Vu0QSnz8PdUR+Amc6GmUjpuEGlPmIznti4QeesuBBgG9sVS8oUSy9xT+M0hk8ahM+Yc5wTetHmyhQElEdijDbhw4g/k6ZfMy+tS6jd/P5RVuZHxSm06XZJZmxw91i3c76I7K+tVhb5dY7Lp/RhqOXpPWfWRhpzWX/j39DlVWGKmH8r4ORm4PYRaVREvIME3ee0JXGjlseK1a6kU1Qfmg2O5LooXuIGGbfq70Oip6MDAtTvY5HRWal74ZGV3XBStDdxiC/q1am6wL5ruE6ogRxEu4HZlvsCEPYxb5HTx/YjMBxfb6UODQLKlI4RLzIIWvRU9Zz/VU4lYWQLvyyi6IpRLPFNEBSvSU5wz4I1rRIsKvc3maOK//yBh5XG3KydDHXIpwCRcAGcpKSkaR/BiWRUDxUQGrYIznq1ULRGcgWLeXsKe7BtUVKGJ5aKV6LS/YleCHN4DHwN7TeZdTiOZS2leZI5tOt8VndkVrC9JSjKBMWCWqmXLtWe2e9YeQyyjIKu8kvLluoWX0Wo83/i1QT8zmPS1rLqN4V7Rmx2dw7UGtuE6VVm/rgyWLV0U2stc8+PpqdQb5SlHvqKsYFE9O4MOjLIiuCoCoYwlFu3ZUAfe6iAzdjQfqO7WFHCyEGxXicH9V7qMwGAJ048fSHr75txsXBsDCpGuZZ0d4uw19i0qJmig+fCWvlFd+WOedKLt3YjArqQHcrgi147AGyE48Y13sHCMU7YXbFWeQX4zXVfezdQHIfj0+UPewoxKrQkT5+DYT2lGpnCFPlHUsDYx6S2Pz+oBVVnDKt2Xr4R9/22G5tfOax2uumxDt0y44SUT6IvU2uWAH21dN+lkHi8A9TVm0VEZ0wyLgXqXQ8lfz+nKfcqxZ0xBTcfJBfvvXkb0YEZGk6YKjt2Sn55mr8dCOVpCw2hYSc29yQruUkt5NmGVem3K5y/gLpmZq1/WznaaldDIek03dPAie7YHZ/kES0lTe6ZWYr+fYEZo+Ga3WrSmGovX0YuM67QOv19m7U5QSm0v37eadvZw7QkWLrTdCjnpjr2WknJUWlN+R+dwC+SEwp0gsE059PN8nI+ip8IrzLTUvH9FNBlUvzbhbh5wwNIXK9tlu4PJpuP0WsOD52veTBrLNecvmvZwK3yqUVEpc+5lugpPd6KDJ3BHVhUWff82mZyVi5QlytLJvnpL7wq2jfNkNH1ouH7vyy0UA9WbazC4RmhyKla0p6bb9JRnF7jrqR3e4868WlG/lSzeNXZ2LJfDJDGBMqs1s340mI0qpHMq/vr0ejevH78Npke1PA4WbhEJniAshtmYwHqZ/2j810lBDv4sxmXsi6fR6FdXyLss9l3iJX5u4dA22WV3ab9x59msjr6TDXaWwJg7tu0fF+fVnuJb1V2yah5XNu8EZA6Hs/nYgWiBRBB2QLISRSHv6ozNWkNzfdWv/Qtv1YvGHS9N36X8nwq07HUeXou6bO2MBv3ra6PZLpAvpn3x7fud4Wi1Diizqzir5BfkKhyVWTA5f6dPtV/WBHvlw104xSlN/sjImIXtjJsYfsgvVwHVKebPidMnPxbXl6henstdNrAT9E+d3d5htbACaDOn3rWb9tRxehIutxa1FSXOHA3cXZtZw9mUv+ooUOQptOTbFy6laCY3C70hTyZ2VLUXn3eyXWYvcmq/+4/D9dssM+DJTpuuaxyQfdR34BuOitJ755Zn1Q5AtkzkuAS176AEqhC3BKr+nPd3dl7iIHLae3PYeuJ2sQ1QTr5vjn93KepdVMAqR7e/KCoLQL4gCe/1gJy04HghruyEPEW2nsxH0c8oqnh3bJ23lPqVQss6Ttj+GWv6NnW1AxjHfF2sbosC3UY78B/P7sNK/QAZNejLZZyd+L8A83np5wwsPA+lRzKN+/+kXs1zSeo/aNzf3aruZUd/u2nZOs6Pq/5+6q6Oa07TLOHElbnU79t8n8q73QcciWeTlmyLxg9vOerTLYSnqlPxz07ua9nCFPmvW/VvL+hf3EuqMUw6YN1JnTHNaoCVK0vn+MfjbVq1CJbGDzuZFyzYT8y2xxRKBx5S99T+om/uBJPBsQrD/MgLn1jmMVb8D12HRxbrDiquuyrr6QaaLAllpxEMObG121re3PCrSsyXuVmax0DE0NGhkd4vIvNQK/Er9k58ZOdkyrkb6e398l5IWskWxovZBfocu+r52o/k85SPI5Zc33wqtf7jjq+1UCG/wbP07EnTnXU/3HTYK8qN4MrxcS1xJgRC+mo+nyUyu2Wt3crjWSun87nG+xR5VqYHCAu3yztLpIFNeT2gf/HsQIRbSVowr0HptMjxJm8zTANHm4IzbpUq3us+FNUTBalabYfXkZMTTn2zcXIdnA1qbn7uUQJG8q4RhoQw7UIoOSNTm1jVe3/TWO241YKDO/K20b7xtvt9QL94l8f9T4QwyR1/8Z17jygu6ozNM1OM2rst4IztRMDWNtDWfLBnu8LB5tUag1HsZnbs8Y4ZYFzK5ZrXWpvHCqxrgwulKbc+HSy7ARuXv2Lu/HysXdqlOMvZ9NSGHx+vfzz4Rt/xlHmg/Z8k4j9lb3pXU3UgprmxnL3pVURp/+r5qp6QG/BObYK965tE8qP4kEdo/I3iGIhXY/IGzQxVVW9vu9t+r2Y/QXwwl8c7Zs4Fbc6B8j/l7kxjSC09Hkia92cv0+Xz79SF+6i+fgqeCZEaPvdBX31ObDqVz2IV4eqfuH9NuoheB0Pl2uxnlr8rljR/sw3ayHUMBCpBPLaa2+9A8BL+OLA2/FlsvcEGvlijyH2NDFEHQ6XMR9HVH3b0ukjfiZv6Ghe25F3betTrwDf7JqCrajrK2MyWcAvWiu9osoBnvUOzJXbtj5DgL5uw32GU4gPmz/xSjnrrEvs98LdCEpCFd2FoatI9IfNGJEjAmAJoX+wTYCYJkPiQpPHe8GPxBuQgwkI0mShqyJcUmz3asYnfC4VHsz8B3hm2PYY4IX0lfYhPRJSJOoDtD5i3lrd9UQlAbneTTEiMmo1qVZRrXK9drwRmnICuhUQjkuxdfSVCYbtQqIWi5MD4OhLQHVG0G0Xxbo70aESKbOjLYjJ7hcLxEOQY4v57cBDooz905Tjduh1AnuZwBILrjugQil6/1F4mvOpIDPkjs4jP0ggfhwwj1kkg57q5GUb/Q+rqiQShsBdFNVF0SCicQVkm/f8yMIpPCkyNAZPMS74WZPt5FuKeWwW0xpqiGsyuvIo8ONDs9ThzE8F0H0lPAy3OMI1NTknLAk7rj8Kg6LZAXYQwdFWooDb5pxyQioKigo6TAdKUlMi6WjVDWcJOS25ZhLKaqQuFZsi6CZxzS+1WcCwJ82rCwNvw6kz7sbfC3pFBjNe41F55GGh5oQsjnf2wgnlx8JnJ4DjMyxN1D29MpAwA9QyhD43Zrdz2Cqq/eUp/uLSnnfa9up23T8f0Q+hdMPnU6vdgG69eV1jrpxrqe0DBvh6MvnVTEx+8iVAyDdloiLokAvtbt/g3d9lqNVZbqPe5PZvlEM6NdUrmK102oB7LYVvc28IlnNljHHGHLdh+gGJB5Vb6vjBIgqkv+U48sd2Ino2B2wk+Q5AdZ2r9YDfzhbPk/gm4ok0oNsn0lyaGFwXNZlTudzmS/yYByCsIDn2H+brdhOM2hzoM7a53ADd+uZXP9oQbR1bw3UFzj4e1HvGSuZvOcpGt6/aYz/yAcWcaFMj1nKpTWA7qDepLZ53URP/ahlwLTanyjNE1GxYOBe/gcZXTNzE8/kQPBTw+yqT7J2xSzIYQuR4/pf+UTUjtxatb/MyUmtf+WHGJ8PGsQ4K6Ce9nfKXTeee0h1tN60gW1AXHdyplEqTpcPEMMUf4OaEBuaIWbK8RU1aslDbvp5HmZ9aW73mX4KJgfylG+u9RgiPBUjlh8+bIBH+1cJpz3rI1/OOrEsX33UDjl2Wykd0voSDuoRNtdfvtuGueTHHmUnf31e6hfP4PPYfyDifPskORRn5mNgHHlXu3vLHowSzHqoD4UNNqB0eJ7Ru+U/jxR/dNMfmC7npW8QhZXcQ964pU6OJmXwOFiVMtWeva7bMU2eeU7JHat7BI2NLhvksFkP9nbZt8Rcb5+T5SSPQTfy55hteMFMd8CIp+7gPqPvlD8JvA3OqjErsb5cfB5P+5ir+rfw/IMw5h3cZSEt/fikr1ztnzdqaJ9IH8qV7YE50xCzvf3ccTm9xwzUPXs3+6ZQMjY7Ty6wcGJxg8L9bNI951d1c1+oPCPQcAT5+9/++bcs0Odze/h5VkEwZDttrwI8MMO08Dw6V5Z7NdEQDD7cm1+Xh4IGo+p5eXUHIOrdj0YqDEbqp2HlXJtp1BVdqFQzsv21KWM/OJqIKw8hkrv9pro9yoo4ZeGGdje86222r0bGuT5JIOLSqgFzelg9r2IIMgosT0tvYKSh+1OjEz26WhvV/CoE2l2LZIgkVulRJBNy1FqXBatiYyAyPdwpnKLCQhI1CIRQwyD3cd2jxvneFVA1+tPsz0timH6QlQIyMR2ehpgOZqKLHgXFiKeUkuizypiaeCwnLMzN3yxC6pbdIZUrlICFU4X86MOcGHJqBUklDt5Gk17MrvGfkQFSTeFo0vj4DlDtKgRtoetHoYQ3MPK3bJw6n9OxEfzVOQWXmLKL4ewTXJd1e2NAKHO4pAgPqXHtsNvheQ8PdCZyNyYlR6sToOeluOxqQn/qtXazO/JXAEoT8YvzvQZ3M2g3XZ8uL9eJ1Ne41P5N0I8WdU5blseZblEjzPqDDf6GgDym4SiWwwliE7Lt333Cs1n8yuZfD70x2eI87XOyY8CuH+xwnxBnVOiKYx2K7uHPF5moO1DA/uJtr4+s5X0BGtuz8e1pKzO9SH0lFzTqiWNxTm7bsbhPZmJmbW+pYQjjOwdjQzApAIextzYOiIxiHA0VHvk9ZOsP0UpMXS7can7cjJwcaXAPS2XAVxIQHC9g0thsAj2io2Kkpikuzba8EhaaPYjfQQ8lb7A4tGKojlELIxT0DRhj3mL8KV/WBi0Es0OsiG7gMxcaydeWPPnhrGx4MjLxpB/BZtrCCaaoSYQIhyWCHyi8mmyTBiH0bI2lMIteBoiCJi1HoDOO1AIBbmF5IWzmIoacxGHmBABrMpQ5wFD8s9uTcMcMuE1HRDmZbtDMX943o+CMEIiuEEyeNTAqFILJHKaIbl5AqlSq3R6vQGo8lssdrsDqfL7fH6/PwCgkLCIqJi4hKSUtIysnLyCopKyiqqauoamlraOrp6+gYFjQ0LJC23RgCEI5AQCo3BxsHFc39lLBgAwhFICIV2pzINAOEIJIRCY7BxcPHcX6kFA0A4Agmh0O5UcsEAEI5AQii3K/HcU8kxOwjm/krIoHRvS0TJqdSc0tTR7crY7jXyggCwG1PmTM6sg+EBnjMN9xkeDY8QpLPkqQqyjRXOf1QAAA==) format('woff2');font-weight:900;font-style:normal;font-display:swap}\n@font-face{font-family:Industrial SIGNAL;src:url(data:font/woff2;base64,d09GMgABAAAAABd8AAsAAAAALRgAABctAAIAQgAAAAAAAAAAAAAAAAAAAAAAAAAABmAAgV4RCArCPK16ATYCJAOBSguBSAAEIAWHVQeHcBtIIUVGhY0DQMT22cn+rxO4ITCwPtAyjJRYseAIiIpSY0DbXVthZxvFK/Z1dljxcfhymM4z//53U+c+fGN1j4yQZPbe/cqZZGGSRUB1QK0EUqgOZIEcoD1Z2VdbYYiFAVRA+g9P2/y3UDeMXJTVYBRgHRx3pEQbTFGwMGuRVky/Lr9LoxYuddZKV2HFopKIuu3dvGDQpIEGxAkm/JKmCf69v9V/VdD9pApWCQQyshIS5IrLSKR7OO8yttq7322Ho1g5f2RsmN5xJw5ERQCCG4xZN8qqaUlPVdufF4i9U1iHDPBTJI2kO2v31kHnqE9RcpaZ0IcMTU2IAUnSOccPEX0ZuQyYAabGRsjD2AVgYihPS8y3JalwVParfP9A1Ze5Ts3bzrMAx8eMUQb0CR9WvqGkF9seP3Wzjb3G5XC9bCXfXhUCc6Gn6+GnZwG9EgJIkDA51qvf7WFPOBBORq2KsnqWMyKSYHK5N/ttYXfYH2mA0p+Nrm75+wAQTnx/fW4ev7q2uqmGBVuXsP0qaI5KQiqQCIolgBAfCQ2EgQwWTCAEQoyNiSMIXSguGZ61UCgqTs2DS0GKDUfVPfSYK4C4Ad3rTZtlQP1dHGIto2a1MSeVvt2/0RZvGafzLhXBS/DH7I5ckKicXV37e/ChsgojCZ+F3NaQ22V22eIuodOTy2KjhN3rSXgD3iBZpNemd8uAVzpsaovW5Yg7JTmEQ4YiPqc96fDbdELniCUCEYd0WYWwCzJotUa1VpBHJ4mEFFa7yeTzu4kiUSFzoilrRHrS6Uivl8JKb6trevEyX5zny2ybdS5hi8rmPQi2aTi9zx501uAsF7mN2BxhicKlzZ8eBWU61wc+0dkwO7nwuT3GkqDMTKpG+6KWFYZsLkBwnXTUM34fl6E8zdtk5/6F20wfLGqfY5kNqPIKVjdo82r7u2KVcDqOGOXP2J+d/M3nMX1mqADua3hw/uxk3+btX7nCI5qLheAqVXlbJy1XS0N67fFcALdYQwl950NpSEfGckvFQmcDllSAb/P41SY/YrlfM56oGGmlqUnLWYKDq4nP4yNiaO2W5VzAb4Ltj4r7m+uaq2q6PbJwK8Fqmj7Rkxs6DHOxwN9je78G9r+5LQpd/nd2C5/HZcjO+kQ+yMy1VNnt/xY11qHcxvS0xjXobG+RdeEenraMzb0BLUe1DEPm8zaRZMJAGmpJj1J+LTJHvuoFn6j74zGG0yqvocvK2UF96M966DikikWSCsP5NRxVtW41WwxmBsGPuRULwdVy5IdcYTkXyV+h9rn93u6yIvvKE6KhYfpWD2uRT9PBjzroXEFmCBjKGXzivWB7e/QcMaUiObfIaqXDPV0kL8jgtZNmluvaOcl2qvq14OYEJ9IrHUJJql796gUIVlhxhNzstLtn+VSzNb8DwfcZevGpA/F7bDLT4Bj/peaD12t1ndseuuzDE6g9R253BVd4r0zDCg5owOsX80Lw363NfGkgp0s068htIrNHe+k2c0l9aKtzSU9Nk1qOPXCFWypA3ntmyCWe4xpfsDy1b/lum3SOhnQ+sr4YsXKloyT9ljliMKeVWNOSnjzbkgOtoV7uE2FTeQobavC65aqB3FbcO6qkbQ1XskdU1EaRPGUvki96/XLhdSoum1bpUUluQGPGsq/wXRGEQGqwkZNueUGPqNjV8bKMJflcMC9UnFuxbxlPYiTn7DkwGwe0HweQ/jpQMsvllvQLHUg7s3S9KHpu7/YJDl5b50kLTrfkOrNvDWfYXpEM7TfkvSSLrFilTiQya9IREQSpjZpQ+2y7m9PvfFWhILnb+bttaxBukQupCeT57sM6OQgGuiQgF7Y+2XkDIkcaMNX3INGmqRLKzFSCw1Z3FioMFnrcLlcYNh92QFKoqeJZIT3bSy1LvuqWdNJ9oSEtSStVAu0vnP1a8ISRHLiOhhBiM4MHazaj7R8zUefgCug7ZrnwSvHG5uWwgFxVLJKnAkbSTuqwteh42DspjUKjdW979zP5ku1xnGZZJ1p5KaENdr1l9S+MfdJzMIelE4nOmjgprOXKUYnpvp2d5Pf6biqgx6R4i/+Q/z7a2SVNjpyRyXnBprMG1cgxxlhL083rlmOSuzU7yJcPqiQJPj9WGNQxHpmNWzlo897rHKcZMlQkmlabmjm52ecPd0EGyLJeJWyOHmEI8tZBVBbJCimZfyUXqokvK+aH8Stq5kLCE9JJz84KdmZcihMeFQ66D8HBL6KA8hDzcX71kmkmmhLwgO5d22aziDMHrwS3kE7bhLbnggqwqVdckARhxc6L+nHEi24PncDujzO9uxXyypuciCfA2FwUENiiHxLWd/c0KEX1Q2aTHUhgHLkV8IIeHEDtghj9KbkLorVVjHmUg/Xto4krZDQTtLnCMvOHc2SLJttSsXJOsJ1n+Z+e1Y9gNuQWvu+v57tr19JoGTdaQmvbl3Wy88RBz2Nchg0VP9U8YkPDcmT0bmPxEdDy+LPZODggINy+BE9pzr0BwxDx+mckKBZ3e/BBeOiNBLZHdfH96+gI98JGg6YOWhYB1TP93nICQXJrgDpP3eDZCd93rv5aqeOHPpbfBlXFKjjd4DsNhQmzg6u7Dnz+nJ+249+PmriP7zqQJqjPo/mYZ2ZlfS07anCyXIO80y0x54UXZ1ahOX10LR3tWZ90ZsCGHki42vPztic0gXuvTLa2ybnQgGpLhbtCpokNSdeRBu6dJvlzq+CoWEAPVRw1u65DvM8KyztDdCygc6ZRuClAkoP6q69B04CGdAH1IceXEBWbey89QhtAKO1pcO3xXi7xZP/mIgz4rwc3oH7KzxVeM46mcKKVb9shvH3+Ii/utbfx1gwp2V0DjpXnKpTUuc2phP6swqAizuClA3GBw0axKftzaSZ+fT8GLuG5wvLeCwp0sJG+v6+CmaD9/Yjl74COpj1q8T/buLCw3de7tyGQMwRWjoVEKe7OSdSu3FtIZ1x6TqHNyYYQLmaYUlnUzv60AbBm4o999SJCw9zrujAysAXyLP/vuqtmey5/7WdtllWR54sV7qDsFkSEsIHMGmlRfL4UyiZdm+M+8VbSCb6fE6j+ewE8soHS4jcypo5v4KerIyRXhH0fXWuiNjGir3oNNo5MS67Ye6K0ZxLpsfmdd/3ucSYJOmfxTZkge0xnUiOOH4m1QQvRs+i+zlX7UkHZXRg6jDELFNWwOStRy0slnFKguXvUDLMa01JYBuvc52RK/pwD8JXgztNBEqMZCd7UyIHTfiyIRFxUH7bCCgxcKxTI1I/O4SPq/ZxZbZT2SP1nqQqhD9gyJHsmm/SIr2gShbSyBNalbBIgX4u5GPIDe6P+VYu9csndOLvt/e4xyp41GnW/NLcDyQWRULdaojGfy5nU3tsgyrN1RbUlk4BwJTjfnlhLxK4OSWOlXzJovu7+fh2mq8YydI9uv1ZtA7XKZL2unVFnTf8qd9pvMOpln86n7EKXb1nF/PnWtq7g3DPmuHmQ65QhFmwbITHtgwUHGQLngICm3HCNq2WeJtH07p0JAJmdr30Mkv400k6IoqJqE2a5vJiz+1iVYN0tb8RcKJ874tG6KBjLXWdtKMOz6YdXENFjLS6hlPbXg84a2oJiN4bH9ZIa9wlAvRt0/lHQ8rv3XqV8boreYrJFrSLvC5tdHDUirDv9kdQB8q+TmMe2WCKrYGbwVj9zfDRbUpjBRurp/siYgK1Ankbjwm3O2J9DdWQQzRWQb4TRqM5BtSrJXmGz1DVejz4oeQWYI7Uup14VS/kGW2O8LgvTWzMDm117sJ/CmvENgDmSQ9ZOOFIYtV2rSKobMxqQZSD7miB6Nhm8wCH075SOagp43JFhRCRMsHvCzwrf+3fJot0BRS3lof/fXZHxFx7TQrarwgvKW1p8QyE/zIMDgDlkfspDyt+acNlyLeGA5fj43mXDcut+VL+bJ4+tXRPCP8AvHAc+l/aT2Lf1wrT//G4T1/++GcjzpSgbuCPm/WbZshRtH67DqmiL63dAdr9ck3OF3W3x3dJB/eKh7eeI1syKaskDO3U6LkQzGuxasRjX5lv3z52YZ/U3YPcWOuEFn6xvnNYVuNunrjnWh7bcWTL4DfapmWCAavyqp//+aApJn+S9m0L9RiF0np/SMrYlGb9eKd+k0zEOwLAmQ8Bav30wcclxcQfbV8cYY3RIFH88blEhiX41FoReQ06NTK4v8nqLeBf6B3wWeUZbnuGeq/400L3/iLHRKqr9FBCAgxg/xiYRYy3iR3EvQRbIV6+ySDXE5Nf7cEr9KAaSWBzRxlA+++TMT+DsHeGJJDiyv3s9W2v3aXJDx9ChB7j6ro3uH9wu5wtAOIZR7JDP6PzMQOIZ4lmpp/Jo3kHDLnK72I8ez/bevgf+SDHatYxR81ROAoqfo2d8V9XQHJ+/bPhLqbzR++htOOT8PAucdxMFxGWw9He/dnh1sgBfvnNgE+y1vFcWJJKA1c4L/Q569pT8VwIVWNDgV1y+bFDn/GNx0DJ6BVC97TNBqbNvY/o/kcBo2KS8xleoCIuQxMRwR3NzQNXc5C3vmCxk2sm4oQA903MNit7zVwnIlmv3RSm9mFAmGWG4ltB1ZOiznCKrX6KRDta27Za7bQa/3a1jjwJbk+dsx8l4h174yFKorvAY0/qJf8dbSstFYG0dG0WEkhCOjOm9NzsC08I+7HyA/ghYmH0OQRc555I094+SmsdyVordhxeS8Jv0an2Lv02yGj6iVjrg/+Xu5M1M6sfl+M0bbzTCxacOs/DeagjptYHki4H64QWDwIEEsHrfWs/DvlJs2XpalKHT1jck4TJWssGyPrbr3oOMWjRTBVr1fCFVLuQIKTQ975ts8Ea6JJukLGJxCUr0Ei+20dDnHfJrpiJEAO0qO+R2UDbjvV72EVWGTkb6dH3J1HQcoYQ9GEwA4TaIcSwu6mHFwZf+y07SeI/C6MUu15Gxn3DUwuxxivOLoQxrmnVLoPlGIf/xQiYBW2NCwqStkMcCkRlZOzZpaSeW8ywKz4mNsCVvwqcatlFXYcpOFhDW8M9bI3/dljpoTfvuM0qMNri5A+Tp6zXNLOtc2MAruehaeSXQqvPrsiPvyBciy3uvFHQBpR550cF6bWfRluRiuT92eEVkLklrYMFqBr5eUz+o/PJZ7PZL02CL5nb/KVu/MSwc6W/VRet2H8M6ccKA//SBfZ4CHzK+IHpYoArMGXhje1y87ZJea+gJ7g8xlrvMIdoqayWYuhcgtJZhrF/xN5eQu/ZcQ+JrjYNGXED9BX8KPIY+/ewUlv2+FdRg50QhXFz9/Mk1WtPeA4Ubq5GdNiodmPEIparAoX6I7NpHHqz68/jwjw+n7Q89OjqwdVk1rgzpY8GEgsiIcSIZWjF0qwbYdrmFZJtYU4OMk6GcRnpy2ptlv+Com9046GZvz1dqb+tWoLxof/c5oSuzrg9byC6EcakUaunBsJ879H/g7+7+vPoV/5YI2F7agNCxCC0PcV9E5nLUNx+sM59c3YrGQfv9T5Me5MLH7JzPg/T+Aw5F6lAJ/sTqBa29sdidkiH6We0TFxT59aDpXBO3s00PZt6jUzM4jFEqYnrpWBhECq04vGjLMZl+/gmt8RmdDfX0ieUrgNn5bArpC0PMCtwFa5q4uOZJgyHmBhpiHm440Ly6V9n60ApU5wYVc2XSlzJQsIlyP6TNbUqkllZhG5oFnCL4G4JOycN0pZQw6VOFHFRG8Xv5D49vWKXcpvfaKiBOnqcKF6UDSqwqmJ3Nm4AUjbNLANq85MPHDyAeVyRp9FNJI/cGq6/I905DeSOXxG0lc843a0Uqkg8+xCqIPgUYt+bYw97dm73WardNgp/XZzoxNrNeEwFrYoHq7BWPK51hoGN9sKbwIGdDGCheTrH9WG9FLakCajfw5+K8oJ3MSSeP6Fk5OHrDUmMfgZMxvsx1BwZc/LTJ2+oEJQRuF6Xwfl50umKHlmMFYPmn+XzYN7x0x7ru78vgFfCSkEvkFCd2Mbj55d206f17Lj7Hcuv40dvY4NMXdkB+ZkhTXrKv450FNrGg7guDPxfvAU3YLK79AgVwmvC5P/B3jSk9XkG9A/P94sGrLztI7tCrq3i6kwf1ka1Dug/s5iuYcqEUk8qwxv3H3JmAY7W62Cl3qduK3FOJxb2eH6uMy/C7S59t/QHuqPmeKb1DzK/B9HkdrGrzbagCg5uNIWzIqhBvMj5pbHy6zNk1iOmKbS4zPBe89JwxGuhRtTFxzcr0XXwUDyZveHCrz0gZ/O/+TPC/zuCChfdkmZjQH8QblLC+QN/AoAae30WJf1dL8vaqvgn76rPvT7gwHDdfzXu/znSHDwMUDLogjvLM4dDF4u2wLnOxYedL9UifxRj4Kd9tprnVd/yF8BhH6XE+WQ1HL5lJ+qVefkLPMmeHoQcxax0wuUGY0Muwpj/qNEzNIx3WXhcBq7gUB+0yXXjKH++s9186xbByLLbL2jAx1+euQbGChwphh+X5xs4H0aYDQkzKq5eyF8XLFYt9cc8FQPRjwm042wXuanDMMk7uWIw6QN4OautF483Rt5FG5wL/UWVW2lUfmG/Xyva0IRaRDgmJVNWoj0YPpJO/zZYyc7DakeS8V8rU5G0AZxHj+Z3N5PVLrg5NB7EhrKxU4AaXih55N9evX4L1iHqE/4+Y5rXjWJmu+7ivfULRvoHn8wMRP+uKUfTOLjD4GBbuu8M+iDoohkeDVOJT4KvEePC+nYZZX5zP2L7MO5UUcEfCGa6/d7makmIxRLQG9G/tDqF4RyJLDWwxcIETzBUBG4pYrS45B2/CKXDGFxC/5kjbJ6+yp+3XBi7rg6/5WHBu8esNvoZ/sjI3qGbsXvu/9KXshKUyO3irQ9/KTE+8PGfd/n/i/DsA+Pr/8uDp2NVlu/0FcGwFd4vBGTZv6mBpZORbxJoELPowgBkUnQ8uMYif42irW8nceaNAn2wUCn6MwhOJKwGBOJGiKW0TRWmjA7usPAKRVKKp4IclyhdJQSzFWrm4SoUZX8hChejab5IqtrCIdezCnvjAG/eVGHQvAAs//PTRZ7uqNVtPIkaJOEOeepsRbI05uHKF42vXUTA1ktQYb0dYTUPtWaAskIW9YLR6gvMjT1fNFmoGB4SGm0pII1vebNAzgMMhAGCvP0WBolkXjDGbgmvn3HRVUah580BolPNOSKfLrxvs9NxmQefYnfMxiptYda9gTSf1pCu1DduLwH1J+N4FNOj4ejpZwUmaelyCMjWVWC2Wy5XudkRvPxpndNjSbkVji85ex/fYUUakJaZgHH2LMN1O67RNIt27ai9SXyLavcZ4jAvvUSqPKgpSnZ7GJQpAcKcUa5Vy3JT1doMSIpQ44EgRI0qMBHJxTCEyKCVIE0NByVSSFIliKUVIgwfHUUqTplJWMaM4Zrty5soTDl0Cj9OlSpvpwcwWoKNiI2HhAz8KmnHkB1MoKSURaFWhTTAS/NSoiObpO0PfZVaplLo1JcZOI0biNNNFxiyNrM2GLSqYHyWHoDN4vGuiFD5tphUDtNAuBVORuxLFMzWilSlWmu3b9LGkSZ0SF2PIfwxpK7kUTKU0bSojwqkSIWancsKHIKEI6G048TQR/SVILn7iz4+As+Fc/I7ore6of4mlPMmKqgndMC3bcT0fQIQJZVxIpY0NwihO0iwvyqpu2q4fxmle1m0/zut+3u93HgkZjAKBoqKhY2BiCcDGwcXDJyAkIiYhFShIsBAya4UKIxce6eiEY2VSBgAECoMjkCg0Bg+LY58bgQEIFAZHIFGsuTMAgcLgCCQKjcHD4tjnQWAAAoXBEUgUay4EBiBQGByBZMVx7HFpPZPA7HOERpFtk32gyR5HsuI2bHkM2/MYXFh00dY0lSFaQdEm9K1a5EUfbP0AuwYn2sfIA47M6J8L) format('woff2');font-weight:400;font-style:normal;font-display:swap}\nhtml[data-industrial-acid]{--acid-lime:#c5fa31;--acid-blue:#2536ed;--acid-ink:#121711;--acid-paper:#f0f0e6;--acid-header-height:clamp(112px,21vh,var(--acid-header-max,216px));--acid-display:'Industrial GRID','Arial Black','Microsoft YaHei',sans-serif;--acid-mono:'Industrial SIGNAL','Cascadia Code',Consolas,'Microsoft YaHei',monospace;--acid-rule:var(--dsw-alias-border-l4);--dsh-frame-overlay-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height) + 20px)}\nhtml[data-industrial-acid] body{--acid-rule:var(--dsw-alias-border-l4,#121711);background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}\n/* Keep the native grid, column widths, resizers and caption buttons. */\nhtml[data-industrial-acid] .mP3x-q_frame{box-sizing:border-box;padding-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height));grid-template-rows:minmax(0,1fr)}\nhtml[data-industrial-acid] .mP3x-q_centerCol{border-radius:0;border-left:1px solid var(--acid-ink)}\nhtml[data-industrial-acid] .mP3x-q_handle{top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height))}\n.acid-masthead{box-sizing:border-box;position:fixed;z-index:21;top:var(--dsh-frame-chrome-top,0px);left:0;width:100%;height:var(--acid-header-height);display:grid;grid-template-columns:minmax(0,76fr) minmax(0,24fr);border-bottom:1px solid var(--acid-sidebar-rule);pointer-events:none!important}\n.acid-wordmark{color:var(--acid-masthead-fore);background:var(--acid-masthead-bg);min-width:0;display:flex;align-items:center;overflow:hidden}\n.acid-wordmark svg{display:block;width:100%;height:100%}\n.acid-context{background:var(--acid-context-bg);color:var(--acid-context-fore);border-left:1px solid var(--acid-sidebar-rule);padding:clamp(10px,1.4vw,22px);display:flex;flex-direction:column;min-width:0;justify-content:space-between;overflow:hidden}\n.acid-meta{font:clamp(10px,1.1vw,15px)/1.2 var(--acid-mono);letter-spacing:.065em;white-space:nowrap}\n.acid-context-number{font:900 clamp(52px,9vh,116px)/.88 var(--acid-display);font-synthesis:none;letter-spacing:.025em;white-space:nowrap;color:var(--acid-context-number)}\n.acid-context-title{font:clamp(12px,1.5vw,22px)/1.2 var(--acid-mono);overflow:visible;text-overflow:clip;white-space:normal;overflow-wrap:anywhere;word-break:break-word}\n/* Day uses an acid navigation block; night limits bright accents to controls. */\nhtml[data-industrial-acid] [data-slot=sidebar]{--dsw-alias-label-primary:var(--acid-sidebar-fore);--dsw-alias-label-primary-dimmed:var(--acid-sidebar-fore);--dsw-alias-label-secondary:var(--acid-sidebar-secondary);--dsw-alias-label-tertiary:var(--acid-sidebar-tertiary);--dsw-alias-label-caption:var(--acid-sidebar-tertiary);--dsw-alias-interactive-bg-hover:var(--acid-sidebar-hover);--dsw-specific-sidebar-nav-item-hover:var(--acid-sidebar-hover);--dsw-specific-sidebar-nav-item-active:var(--acid-sidebar-active);--dsw-alias-border-l1:var(--acid-sidebar-rule);--dsw-alias-state-business-primary:var(--acid-sidebar-fore);color:var(--acid-sidebar-fore)}\nhtml[data-industrial-acid] .wtg9ga_root{padding-top:12px;background:var(--acid-sidebar-bg)}\nhtml[data-industrial-acid] .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_logoRow{height:28px;margin:0 0 6px;padding:0;overflow:visible}\nhtml[data-industrial-acid] .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_brand{display:none}\nhtml[data-industrial-acid][data-windows-titlebar] .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_logoRow{height:0;margin:0}\nhtml[data-industrial-acid] .wnFoaW_sessionRow.wnFoaW_selected{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);--dsw-alias-label-caption:var(--acid-sidebar-active-fore);--dsw-alias-label-secondary:var(--acid-sidebar-active-fore);--dsw-alias-label-tertiary:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] .wnFoaW_sessionRow.wnFoaW_selected .wnFoaW_title{color:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] .wtg9ga_newSession{background:var(--acid-sidebar-new-bg);color:var(--acid-sidebar-new-fore);border:1px solid var(--acid-sidebar-rule);border-radius:2px;font-weight:700}\nhtml[data-industrial-acid] .wtg9ga_newSession:hover{background:var(--acid-blue);color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] .wtg9ga_panelActive{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);--dsw-alias-label-primary:var(--acid-sidebar-active-fore)}\nhtml[data-industrial-acid] [data-slot=sidebar] [aria-current=page],html[data-industrial-acid] [data-slot=sidebar] [aria-selected=true]{color:var(--acid-sidebar-active-fore);background:var(--acid-sidebar-active)}\nhtml[data-industrial-acid] .wtg9ga_regionArea{border-top:1px solid var(--acid-sidebar-rule);margin-top:12px;padding-top:12px}\nhtml[data-industrial-acid] .wtg9ga_footArea{border-top:1px solid var(--acid-sidebar-rule);padding-top:8px}\n.acid-sidebar-signature{width:100%;color:var(--acid-sidebar-signature);padding:8px 0 2px;box-sizing:border-box}\n.acid-sidebar-signature strong{font:900 clamp(26px,3vw,50px)/.92 var(--acid-display);font-synthesis:none;letter-spacing:-.025em;display:block}\n.acid-sidebar-signature-base{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:8px;font:10px/1.3 var(--acid-mono)}\n.acid-stripes{width:64px;height:15px;background:repeating-linear-gradient(115deg,transparent 0 5px,var(--acid-sidebar-signature) 5px 10px)}\n/* Hero headline remains locale-owned. The English display line is decorative. */\nhtml[data-industrial-acid] [data-slot=conversation] [class$=_hero]{min-height:0}\n.acid-hero-mark{width:56px;height:60px;background:var(--acid-lime);color:var(--acid-accent-fore);display:flex;flex-direction:column;justify-content:space-between;padding:6px;box-sizing:border-box;font:900 24px/1 var(--acid-display);font-synthesis:none;flex:none}\n.acid-hero-bars{height:15px;background:repeating-linear-gradient(115deg,transparent 0 5px,var(--acid-accent-fore) 5px 10px)}\nhtml[data-industrial-acid] .WOwLGG_headline{font-size:clamp(23px,3.2vw,50px);font-weight:900;letter-spacing:-.04em;line-height:1.2;justify-content:flex-start}\nhtml[data-industrial-acid] [data-slot='conversation.hero.brand.mark']{color:var(--acid-accent-fore)}\nhtml[data-industrial-acid] .WOwLGG_stack:after{content:'NEW\\a SESSION';white-space:pre;display:block;font:900 clamp(38px,6vw,88px)/.92 var(--acid-display);font-synthesis:none;letter-spacing:-.035em;color:var(--dsw-alias-label-primary);align-self:flex-start;margin-top:16px;border-bottom:1px solid var(--acid-rule);padding-bottom:12px}\nhtml[data-industrial-acid] :is(.RlGAzG_card,[data-composer-card=true]){border:1px solid var(--acid-rule);box-shadow:none;border-radius:2px}\nhtml[data-industrial-acid] :is(.RlGAzG_primary,.GRgSLq_primary){border-radius:2px;background:var(--acid-blue);color:var(--acid-blue-fore);width:40px;height:40px}\nhtml[data-industrial-acid] :is(.RlGAzG_add,.GRgSLq_add){border-radius:2px;border:1px solid var(--acid-rule)}\nhtml[data-industrial-acid] :is(.RlGAzG_input,[data-composer-input=true]){line-height:1.65}\nhtml[data-industrial-acid] [data-slot='conversation.session.header']{border-bottom:1px solid var(--acid-rule)}\nhtml[data-industrial-acid] [data-slot='conversation.session.tabs']{font-family:var(--acid-mono)}\n/* Native file/changes cards branch on the application's dark-mode attribute.\n   Resolve their local fills from the skin's canvas tokens instead. */\nhtml[data-industrial-acid] body :is(.flL80G_root,.K5rwea_root){--deliverable-fill:var(--dsw-alias-bg-layer-1);--deliverable-hover:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] body :is(.kuvljq_card,.HOHHba_card){--changes-fill:var(--dsw-alias-bg-layer-1);--changes-hover:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] body :is(.flL80G_fileIcon,.K5rwea_fileIcon,.kuvljq_tile,.HOHHba_tile){background:var(--dsw-alias-bg-base)}\n/* OS application icons are image assets; a dark tile keeps white glyphs visible. */\nhtml[data-industrial-acid] :is(.flL80G_actions,.K5rwea_actions) .WgQWqa_appIcon{background:var(--acid-ink);padding:2px;border-radius:1px}\nhtml[data-industrial-acid] ._0Fr0Ha_arrow{background:var(--dsw-specific-selector);color:var(--dsw-alias-label-primary)}\nhtml[data-industrial-acid] ._0Fr0Ha_arrow:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}\nhtml[data-industrial-acid] .md-code-block{--dsw-alias-markdown-code-block:#121711;--dsw-alias-markdown-code-block-banner:#121711;--dsw-alias-label-primary:#f0f0e6;--dsw-alias-label-secondary:#cbd5bf;--dsw-alias-label-tertiary:#a4b397;--shiki-light:#f0f0e6;border-left:5px solid var(--acid-lime);border-radius:2px}\nhtml[data-industrial-acid] .md-code-block pre code{font-family:var(--acid-mono);color:inherit}\nhtml[data-industrial-acid] .md-code-block .shiki span{color:var(--shiki-dark,inherit)!important}\nhtml[data-industrial-acid] .WOwLGG_previewBadge{border-radius:1px;background:var(--acid-blue);color:var(--acid-blue-fore)}\n/* Plugins stay a native, searchable/configurable list. */\nhtml[data-industrial-acid] .V7pFBG_page{padding:clamp(18px,2vw,30px);width:100%;max-width:none;box-sizing:border-box;gap:20px}\nhtml[data-industrial-acid] .V7pFBG_pageHead{padding-top:0}\nhtml[data-industrial-acid] .V7pFBG_page>*{max-width:none}\nhtml[data-industrial-acid] .V7pFBG_pageTitle{font-size:18px;font-weight:700;line-height:1.3}\nhtml[data-industrial-acid] .V7pFBG_pageTitle:before{content:'PLUGINS';display:block;font:900 clamp(32px,4.7vw,66px)/1.05 var(--acid-display);font-synthesis:none;letter-spacing:-.025em;margin-bottom:8px}\nhtml[data-industrial-acid] .V7pFBG_cards{counter-reset:acid-plugins}\nhtml[data-industrial-acid] .V7pFBG_card{position:relative;counter-increment:acid-plugins;border-radius:0;border-bottom:1px solid var(--acid-rule);margin:0}\nhtml[data-industrial-acid] .V7pFBG_card:before{content:counter(acid-plugins,decimal-leading-zero);position:absolute;left:0;top:18px;font:18px/1 var(--acid-mono);color:var(--dsw-alias-label-secondary);pointer-events:none}\nhtml[data-industrial-acid] .V7pFBG_cardHead{padding:10px 4px 10px 44px}\nhtml[data-industrial-acid] .V7pFBG_cardIcon{border:1px solid var(--acid-rule);border-radius:2px}\nhtml[data-industrial-acid] .V7pFBG_cardTitle{font-weight:700;font-size:16px}\nhtml[data-industrial-acid] .V7pFBG_card:hover{background:var(--acid-blue);--dsw-alias-label-primary:var(--acid-blue-fore);--dsw-alias-label-secondary:var(--acid-blue-fore);--dsw-alias-label-tertiary:var(--acid-blue-fore);color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] .V7pFBG_card:hover:before{color:var(--acid-blue-fore)}\nhtml[data-industrial-acid] .V7pFBG_addButton{border-radius:2px;background:var(--acid-blue);color:var(--acid-blue-fore);height:38px}\n/* Keep native dialogs and their focus/close handling. */\nhtml[data-industrial-acid] .AnXs9G_overlay{box-sizing:border-box;align-items:flex-start;padding-top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height) + 20px);padding-bottom:24px}\nhtml[data-industrial-acid] .AnXs9G_mask{top:calc(var(--dsh-frame-chrome-top,0px) + var(--acid-header-height))}\nhtml[data-industrial-acid] .AnXs9G_panel{width:1050px;height:min(800px,calc(100vh - var(--dsh-frame-chrome-top,0px) - var(--acid-header-height) - 44px));border:1px solid var(--acid-rule);border-radius:2px;display:grid;grid-template-columns:220px minmax(0,1fr);grid-template-rows:72px minmax(0,1fr)}\nhtml[data-industrial-acid] .AnXs9G_nav{background:var(--acid-settings-nav-bg);color:var(--acid-settings-nav-fore);width:auto;padding:12px;counter-reset:acid-settings;grid-column:1;grid-row:2;min-height:0}\nhtml[data-industrial-acid] .AnXs9G_navTitle{color:var(--dsw-alias-label-primary);font-family:var(--acid-mono);position:absolute;top:0;left:0;height:72px;box-sizing:border-box;width:calc(100% - 220px);display:flex;align-items:center;padding:0 20px;z-index:1;pointer-events:none}\nhtml[data-industrial-acid] .AnXs9G_content{display:contents}\nhtml[data-industrial-acid] .AnXs9G_navCell{color:var(--acid-settings-nav-fore);border-radius:2px;min-height:44px;counter-increment:acid-settings;padding-left:10px}\nhtml[data-industrial-acid] .AnXs9G_navCell:before{content:counter(acid-settings,decimal-leading-zero);font:14px/1 var(--acid-mono);margin-right:4px}\nhtml[data-industrial-acid] .AnXs9G_navCell.AnXs9G_active{background:var(--acid-lime);color:var(--acid-accent-fore)}\nhtml[data-industrial-acid] .AnXs9G_navCell:hover:not(.AnXs9G_active){background:var(--acid-settings-nav-hover)}\nhtml[data-industrial-acid] .AnXs9G_header{height:auto;min-height:72px;border-bottom:1px solid var(--acid-rule);align-items:center;padding:14px 16px;grid-column:1/-1;grid-row:1}\n.acid-settings-title{display:flex;align-items:baseline;flex-wrap:wrap;gap:10px}\n.acid-settings-title strong{font:900 clamp(23px,3vw,38px)/1 var(--acid-display);font-synthesis:none}\n.acid-settings-title span{font:14px/1.4 var(--acid-mono)}\nhtml[data-industrial-acid] .AnXs9G_options{padding-top:6px;grid-column:2;grid-row:2;min-height:0}\nhtml[data-industrial-acid] .v01cdW_themeCube{padding:12px 14px;border:1px solid var(--acid-rule);border-radius:2px}\nhtml[data-industrial-acid] .v01cdW_themeCube[aria-pressed=true]{background:var(--acid-lime);color:var(--acid-accent-fore);border:2px solid var(--acid-blue)}\n.acid-setting-row{display:flex;gap:20px;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--dsw-alias-border-l2);font-size:14px}\n.acid-setting-row label{font-weight:600}.acid-setting-row p{margin:4px 0 0;font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary);max-width:420px}\n.acid-setting-row select{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-base);border:1px solid var(--acid-rule);border-radius:2px;font:inherit;padding:8px;min-width:130px}\n.acid-footer{width:100%;min-width:0}\n.acid-mode-switch{display:flex;gap:3px;padding:10px 0 4px;flex-wrap:wrap}\n.acid-mode-switch button{display:inline-flex;align-items:center;justify-content:center;gap:4px;min-height:28px;flex:1;padding:4px 5px;background:transparent;color:var(--acid-sidebar-fore);border:1px solid var(--acid-sidebar-rule);border-radius:2px;font:11px/1.3 var(--dsw-font-family);cursor:pointer;white-space:nowrap}\n.acid-mode-switch button:hover{background:var(--acid-sidebar-hover)}\n.acid-mode-switch button[aria-pressed=true]{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);border-color:var(--acid-sidebar-active-fore)}\n.acid-mode-switch-rail{flex-direction:column;align-items:center}\n.acid-mode-switch-rail button{width:28px;flex:none}\n.acid-appearance-settings{padding-bottom:16px;border-bottom:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}\n.acid-appearance-settings .acid-setting-row{border-bottom:0;padding-bottom:12px}\n.acid-palette-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-top:2px}\n.acid-palette-head strong{font:14px/1.5 var(--acid-mono)}\n.acid-palette-head p{font-size:12px;color:var(--dsw-alias-label-secondary);margin:4px 0 10px}\n.acid-palette-head button,.acid-palette-presets button{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:2px;padding:6px 10px;min-height:30px;cursor:pointer;font:12px/1.4 var(--dsw-font-family)}\n.acid-palette-head button:hover,.acid-palette-presets button:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-palette-presets{display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 14px}\n.acid-palette-presets button{display:inline-flex;align-items:center;gap:7px}\n.acid-palette-presets button[aria-pressed=true]{border-color:var(--acid-accent-display);box-shadow:inset 0 -2px var(--acid-accent-display)}\n.acid-preset-dot{display:inline-block;width:12px;height:12px;border:1px solid var(--dsw-alias-border-l2);flex:none}\n.acid-palette-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}\n.acid-color-field{min-width:0}\n.acid-color-field label{display:block;font-size:12px;margin-bottom:5px}\n.acid-color-inputs{display:flex;gap:7px;align-items:stretch}\n.acid-color-inputs input[type=color]{box-sizing:border-box;width:42px;height:32px;padding:2px;border:1px solid var(--dsw-alias-border-l2);border-radius:2px;background:var(--dsw-alias-bg-layer-1);flex:none;cursor:pointer}\n.acid-color-inputs input[type=color]::-webkit-color-swatch-wrapper{padding:0}.acid-color-inputs input[type=color]::-webkit-color-swatch{border:0;border-radius:0}\n.acid-color-inputs input[type=text]{box-sizing:border-box;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:2px;padding:4px 8px;min-width:0;width:100%;font:12px/1.5 var(--acid-mono)}\n.acid-color-inputs input[aria-invalid=true]{border-color:var(--dsw-alias-state-error-primary)}\n.acid-palette-preview{display:flex;align-items:center;gap:8px;min-height:44px;border:1px solid var(--dsw-alias-border-l2);padding:7px 10px;margin-top:14px;box-sizing:border-box;font:16px/1.4 var(--acid-mono)}\n.acid-palette-preview strong{margin-right:auto}.acid-palette-preview span{padding:2px 10px;font-family:var(--acid-display);font-weight:900;font-synthesis:none}\n.acid-contrast-note{margin:7px 0 0;font-size:11px;line-height:1.5;color:var(--dsw-alias-label-secondary)}\nhtml[data-industrial-acid][data-industrial-mode=night] .mP3x-q_centerCol{border-left-color:var(--acid-sidebar-rule)}\nhtml[data-industrial-acid][data-industrial-mode=night] .acid-masthead{border-bottom:2px solid var(--acid-masthead-fore)}\nhtml[data-industrial-acid][data-industrial-mode=night] .wnFoaW_sessionRow.wnFoaW_selected{box-shadow:inset 2px 0 var(--acid-sidebar-active-fore)}\n/* Real trajectory kinds, timing data and error statuses remain semantic. */\nhtml[data-industrial-acid] .haSm5q_table{font-family:var(--acid-mono)}\nhtml[data-industrial-acid] .haSm5q_toolAmber,html[data-industrial-acid] .haSm5q_subtoolAmber{background:var(--acid-lime);color:var(--acid-accent-fore);border-radius:1px}\nhtml[data-industrial-acid] .haSm5q_assistantVioletBright{background:var(--acid-blue);color:var(--acid-blue-fore);border-radius:1px}\nhtml[data-industrial-acid] .haSm5q_table tr[data-kind=tool],html[data-industrial-acid] .haSm5q_table tr[data-kind=subtool]{border-bottom:1px solid var(--dsw-alias-border-l1)}\nhtml[data-industrial-acid] .haSm5q_table tr[data-kind=tool]:hover{background:var(--dsw-alias-interactive-bg-hover)}\nhtml[data-industrial-acid] .ZNyiNW_span[data-timeline-span=message]{--trajectory-assistant-decoding-color:var(--acid-blue);--trajectory-assistant-ttft-color:color-mix(in srgb,var(--acid-blue),white 55%)}\nhtml[data-industrial-acid] .ZNyiNW_span[data-timeline-span=tool],html[data-industrial-acid] .ZNyiNW_span[data-timeline-span=subtool]{background:var(--acid-lime);box-shadow:inset 0 0 0 1px var(--acid-ink)}\n@media(max-width:900px){html[data-industrial-acid]{--acid-header-height:clamp(96px,18vh,148px)}.acid-masthead{grid-template-columns:76fr 24fr}.acid-context{padding:10px}.acid-context-number{font-size:clamp(35px,7vh,66px)}.acid-meta{font-size:9px;letter-spacing:0}.acid-context-title{font-size:11px}.acid-sidebar-signature strong{font-size:30px}html[data-industrial-acid] .AnXs9G_panel{grid-template-columns:176px minmax(0,1fr);max-width:calc(100vw - 24px)}}\n@media(max-height:650px){html[data-industrial-acid]{--acid-header-height:112px}.acid-context-number{font-size:60px}.acid-hero-mark{height:40px;width:40px;font-size:19px}html[data-industrial-acid] .WOwLGG_stack:after{font-size:38px;margin-top:8px}.acid-sidebar-signature{display:none}}\n@media(prefers-reduced-motion:reduce){html[data-industrial-acid] .acid-masthead *,html[data-industrial-acid] .acid-sidebar-signature *{animation:none;transition:none}}\n/* v3d-more-identity */\nhtml[data-industrial-acid] .acid-palette-swatch{background:linear-gradient(135deg,var(--acid-lime) 50%,var(--acid-blue) 50%)}\n/* Solid menu surfaces avoid Electron backdrop compositing over the fixed MORE drawer. */\nhtml[data-industrial-acid] [data-menu-material]{--dsw-menu-backdrop-filter:none;background:var(--dsw-specific-menu);color:var(--dsw-alias-label-primary)}\n\n/* Approved planar shell, scoped to the skin. Native content and behavior remain in place. */\nhtml[data-industrial-acid]{--acid-native-clearance:0px;--acid-header-height:128px;--dsh-frame-chrome-top:0px!important;--dsh-windows-titlebar-height:0px!important;--acid-fx-color:var(--acid-accent-display)}\nhtml[data-industrial-acid] .mP3x-q_frame{padding-top:calc(var(--acid-header-height) + var(--acid-native-clearance))}\nhtml[data-industrial-acid] .mP3x-q_frame:before{display:none}\nhtml[data-industrial-acid] .mP3x-q_handle{top:calc(var(--acid-header-height) + var(--acid-native-clearance))}\nhtml[data-industrial-acid] .mP3x-q_centerCol{border-left:1px solid var(--acid-rule);position:relative}\nhtml[data-industrial-acid] .acid-masthead{top:var(--acid-native-clearance);height:var(--acid-header-height);grid-template-columns:minmax(240px,1fr) minmax(140px,190px) minmax(220px,1fr) 48px;pointer-events:auto!important;-webkit-app-region:drag;border-bottom:1px solid var(--acid-accent-display);padding-right:max(12px, env(titlebar-area-width, 0px));box-sizing:border-box}\nhtml[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(280px,1fr) minmax(300px,460px) 48px}\nhtml[data-industrial-acid] .acid-masthead button{-webkit-app-region:no-drag}\n/* The desktop host draws macOS traffic lights at (16,18) above the page. Without a band the\n   masthead paints underneath them, and the drag region swallows the clicks. The band is 34px,\n   the lower edge of the buttons plus a small margin. */\n.acid-mac-native-slot{display:none}\nhtml[data-industrial-acid][data-platform=darwin]:not([data-fullscreen]){--acid-native-clearance:34px}\nhtml[data-industrial-acid][data-platform=darwin]:not([data-fullscreen]) .acid-mac-native-slot{display:block;position:fixed;top:0;left:0;width:80px;height:34px;z-index:91;-webkit-app-region:no-drag}\nhtml[data-industrial-acid] .acid-wordmark{padding:18px 27px;gap:19px;background:var(--acid-lime);color:var(--acid-accent-fore);position:relative;isolation:isolate}\n.acid-wordmark:after{content:'';position:absolute;right:0;top:0;width:18px;height:100%;pointer-events:none;z-index:2;background:linear-gradient(to bottom,var(--acid-context-bg,var(--acid-lime)) 0 18px,transparent 18px 52%,var(--acid-context-bg,var(--acid-lime)) 52% 65%,transparent 65%)}\nhtml[data-industrial-acid][data-industrial-mode=night] .acid-wordmark:after{background:linear-gradient(to bottom,var(--acid-ws-context,var(--acid-context-bg)) 0 18px,transparent 18px 52%,var(--acid-ws-context,var(--acid-context-bg)) 52% 65%,transparent 65%)}\nhtml[data-industrial-acid] .acid-wordmark{isolation:isolate;overflow:visible}\nhtml[data-industrial-acid] .acid-wordmark-svg{position:relative;z-index:1}\n.acid-sidebar-toggle{width:32px;height:44px;flex:none;padding:7px;background:transparent;color:inherit;border:1px solid currentColor;cursor:pointer}\n.acid-sidebar-toggle svg{width:100%;height:100%;stroke:currentColor;fill:none;stroke-width:1.25}\n.acid-brand-home{min-width:0;flex:1;display:flex;align-items:center;gap:20px;background:transparent;color:inherit;border:0;padding:0;cursor:pointer}\nhtml[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:78px;height:78px;fill:currentColor;flex:none}\n.acid-wordmark-svg{min-width:0;width:100%;max-width:600px;display:block}\n.acid-wordmark-svg>svg{width:100%;max-height:88px;display:block;color:inherit;fill:currentColor;font-weight:900;font-synthesis:none}\n.acid-menus{display:grid;grid-template-columns:1fr 1fr;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary)}\n.acid-menus button{min-width:0;padding:12px;display:flex;align-items:center;gap:9px;background:transparent;color:inherit;border:0;border-right:1px solid var(--acid-rule);font:12px var(--dsw-font-family);cursor:pointer}\n.acid-menus button>span:not(.acid-fx){font:10px var(--acid-mono);color:var(--dsw-alias-label-secondary)}\nhtml[data-industrial-acid] .acid-context{display:flex;flex-direction:row;align-items:center;gap:18px;padding:19px 25px;border:0;border-top:5px solid var(--acid-lime);background:var(--acid-context-bg);color:var(--acid-context-fore);text-align:left;cursor:pointer;position:relative;isolation:isolate}\n.workspace-counter{position:relative;flex:none;inline-size:2.5em;block-size:1em;font:900 72px/1 var(--acid-display);font-synthesis:none;color:var(--acid-context-number)}\n.workspace-index,.workspace-number-ghost{display:flex;gap:.015em;position:relative;font:inherit;line-height:1;letter-spacing:0;color:inherit;transition:none}\n.workspace-number-ghost{position:absolute;inset:0;pointer-events:none}\n.workspace-digit{display:block;flex:none;inline-size:.72em;block-size:1em;overflow:hidden;text-align:center}\n.workspace-glyph{display:block}.workspace-overflow{position:absolute;right:0;top:.1em;font-size:.28em;line-height:1}\n.workspace-detail{display:flex;flex-direction:column;gap:16px;flex:1;min-width:0}\n.workspace-detail .acid-meta{font:10px var(--acid-mono);letter-spacing:.08em;white-space:nowrap}\n.workspace-name-slot{position:relative;display:block;min-width:0;overflow:visible}\n.workspace-name-slot .acid-context-title,.workspace-name-ghost{display:block;width:100%;font:21px/1.25 var(--acid-mono);overflow:visible;white-space:normal;overflow-wrap:anywhere;word-break:break-word;text-overflow:clip}\n.workspace-name-ghost{position:absolute;inset:0;pointer-events:none}\n.acid-workspace-arrow{font:28px var(--acid-mono);color:var(--acid-context-fore)}\n.workspace-switch-line{position:absolute;bottom:10px;left:25px;right:25px;height:3px;background:linear-gradient(to right,var(--acid-context-number) 0 69%,transparent 69% 73%,var(--acid-blue) 73%);opacity:0;pointer-events:none}\n.acid-window-controls{display:grid;grid-template-rows:repeat(3,minmax(0,1fr));grid-template-columns:1fr;width:48px;align-self:stretch;background:var(--dsw-alias-bg-base);border-left:1px solid var(--acid-rule);-webkit-app-region:no-drag;z-index:30}\n.acid-window-controls button{padding:0;width:100%;height:100%;min-height:0;color:var(--dsw-alias-label-primary);background:transparent;border:0;border-bottom:1px solid var(--acid-accent-display);font:18px/1 var(--acid-mono);cursor:pointer;-webkit-app-region:no-drag}\n.acid-window-controls button:last-child{border-bottom:0}.acid-window-controls button:last-child:hover{color:#fff;background:#c5352d}\n/* macOS keeps the system traffic lights in the top-left, underneath this masthead, and exposes\n   no window channel to the renderer. The caption column is drawn anyway so the controls sit in the\n   same place as on Windows; the host half drives them through the accessibility API. Closing uses\n   the renderer bridge, which needs no accessibility grant. */\n/* v3d: vertical caption column sticks to top-right on Windows titlebar */\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead{grid-template-columns:minmax(0,1fr) minmax(320px,1.15fr) 48px;padding-right:0}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead[data-native-controls=true]{grid-template-columns:minmax(0,.7fr) minmax(90px,140px) minmax(0,1.3fr) 48px}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-menus button{white-space:nowrap;padding:8px}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,0.7fr) minmax(360px,1.3fr) 48px}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-window-controls{display:grid;height:100%;border-left:1px solid var(--acid-accent-display);background:var(--dsw-alias-bg-base)}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-window-controls button{border-bottom-color:var(--acid-accent-display)}\nhtml[data-industrial-acid] [data-windows-menu]{display:none!important}\nhtml[data-industrial-acid] .wtg9ga_toggle,html[data-industrial-acid] .wtg9ga_brand{display:none!important}\nhtml[data-industrial-acid] .wtg9ga_logoRow{height:0!important;min-height:0!important;margin:0!important;padding:0!important}\nhtml[data-industrial-acid] .wtg9ga_root{padding-top:23px;--dsh-sidebar-inline-padding:16px}\nhtml[data-industrial-acid] .wtg9ga_newSession{height:52px;border-radius:0;margin-top:0!important;clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%)}\nhtml[data-industrial-acid] .wtg9ga_newSession:not(:disabled):hover{background:var(--acid-sidebar-new-bg);color:var(--acid-sidebar-new-fore)}\nhtml[data-industrial-acid] .wtg9ga_panelRow{border-radius:0;min-height:47px;margin-top:6px}\n/* The classic tree keeps most of its height for workspaces and conversations. */\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed){display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:36px 36px minmax(0,1fr) auto;gap:6px;padding-top:12px;min-height:0}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_logoRow{display:none!important}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_newSession{grid-area:1/1;width:100%;height:36px;min-height:0;margin:0!important;padding:0 10px;clip-path:none;background:var(--acid-lime);color:var(--acid-accent-fore);border-color:var(--acid-lime);font-size:12px}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_newSessionShortcut{display:none}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_panelList{display:contents}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_panelRow{box-sizing:border-box;width:100%;height:36px;min-height:0;margin:0;padding:0 10px;gap:7px;font-size:12px}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_panelList>.wtg9ga_panelRow:nth-child(1){grid-area:1/2}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_panelList>.wtg9ga_panelRow:nth-child(2){grid-area:2/1}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_moreAnchor{grid-area:2/2;display:block;min-width:0}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_regionArea{grid-area:3/1/4/-1;margin-top:4px;padding-top:8px;min-height:0}\nhtml[data-industrial-acid]:not([data-acid-sidebar=next]) .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_footArea{grid-area:4/1/5/-1}\nhtml[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_newSession{position:relative;top:auto;left:auto;margin-top:0!important}\nhtml[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_panelList,html[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_footArea{display:flex}\nhtml[data-industrial-acid] [data-acid-ordinal]:before{content:attr(data-acid-ordinal);font:10px var(--acid-mono);color:var(--acid-sidebar-secondary);margin-right:8px;flex:none}\n.acid-workspace-rail{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;min-height:0;width:36px;box-sizing:border-box;padding-bottom:8px;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain}\n.acid-workspace-rail::-webkit-scrollbar{display:none}\n.acid-rail-workspace{display:inline-flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box;width:36px;height:36px;padding:0;border:1px solid transparent;background:transparent;color:var(--acid-sidebar-fore);font:700 10px/1 var(--acid-mono);cursor:pointer}\n.acid-rail-workspace:hover{background:var(--acid-sidebar-hover)}\n.acid-rail-workspace[aria-pressed=true]{background:var(--acid-sidebar-active);color:var(--acid-sidebar-active-fore);border-color:var(--acid-sidebar-active-fore)}\n.acid-rail-workspace:focus-visible{outline:2px solid var(--acid-sidebar-fore);outline-offset:-2px}\n.acid-sidebar-cut{height:88px;display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr .6fr;gap:5px;margin:20px 0 12px}\n.acid-sidebar-cut span{background:var(--acid-sidebar-signature);clip-path:polygon(0 0,100% 0,100% 58%,70% 58%,70% 100%,0 100%)}\n.acid-sidebar-cut span:nth-child(2){margin-top:24px}.acid-sidebar-cut span:nth-child(3){background:var(--acid-blue);margin-top:24px;clip-path:none}.acid-sidebar-cut span:nth-child(4){clip-path:polygon(0 0,100% 0,100% 100%,50% 100%,50% 45%,0 45%)}.acid-sidebar-cut span:nth-child(5){background:repeating-linear-gradient(to bottom,var(--acid-sidebar-signature) 0 3px,transparent 3px 7px);clip-path:none}\n.acid-mode-switch{gap:3px;padding:6px 0 4px}.acid-mode-switch button{border-radius:0;font-size:10px;min-height:30px}\n.acid-mode-switch button[aria-pressed=true]{background:var(--acid-sidebar-fore);color:var(--acid-sidebar-bg);border-color:var(--acid-sidebar-fore)}\n.acid-palette-shortcut{display:flex;align-items:center;gap:8px;width:100%;font:11px var(--dsw-font-family);background:transparent;color:var(--acid-sidebar-fore);border:1px solid var(--acid-sidebar-rule);padding:8px;margin-top:4px;cursor:pointer}\n.acid-palette-shortcut>span:last-child{margin-left:auto}.acid-palette-swatch{width:14px;height:14px;background:linear-gradient(135deg,var(--acid-lime) 50%,var(--acid-blue) 50%)}\nhtml[data-industrial-acid] .WOwLGG_stack:after,html[data-industrial-acid] .V7pFBG_pageTitle:before{content:none}\nhtml[data-industrial-acid] .WOwLGG_headline{justify-content:center;font-size:clamp(25px,3.2vw,47px);gap:16px}\nhtml[data-industrial-acid] .acid-hero-mark{width:56px;height:56px;padding:0;background:transparent;color:var(--dsw-alias-label-primary);fill:currentColor;display:block}\n/* Native command/attachment menus live inside the card and extend above it.\n   Paint the cut corner without clipping those interactive descendants. */\nhtml[data-industrial-acid] :is(.RlGAzG_card,[data-composer-card=true]){border-radius:0;clip-path:none}\nhtml[data-industrial-acid] :is(.RlGAzG_card,[data-composer-card=true]):after{content:'';position:absolute;right:-1px;bottom:-1px;width:12px;height:12px;background:linear-gradient(135deg,transparent calc(50% - .5px),var(--acid-rule) calc(50% - .5px),var(--acid-rule) calc(50% + .5px),var(--dsw-alias-bg-base) calc(50% + .5px));pointer-events:none}\nhtml[data-industrial-acid] :is(.RlGAzG_card,[data-composer-card=true]) [data-trigger-menu]{max-height:var(--acid-composer-menu-height,400px)!important}\nhtml[data-industrial-acid] :is(.RlGAzG_primary,.GRgSLq_primary){background:var(--acid-lime);color:var(--acid-accent-fore);border-radius:0;clip-path:polygon(0 0,100% 0,100% 76%,76% 76%,76% 100%,0 100%)}\nhtml[data-industrial-acid] :is(.RlGAzG_add,.GRgSLq_add){border-radius:0}\nhtml[data-industrial-acid] .V7pFBG_card:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary);--dsw-alias-label-primary:inherit;--dsw-alias-label-secondary:inherit;--dsw-alias-label-tertiary:inherit}\nhtml[data-industrial-acid] .V7pFBG_cardTitle{font-size:18px}.acid-settings-title{font:28px var(--dsw-font-family)}\nhtml[data-industrial-acid] .AnXs9G_panel{animation:acid-panel-in .36s cubic-bezier(.16,.8,.18,1) both}\nhtml[data-industrial-acid] .AnXs9G_options>*,html[data-industrial-acid] .V7pFBG_cardHead{animation:acid-layer-in .42s cubic-bezier(.16,.8,.18,1) both}\nhtml[data-industrial-acid] .AnXs9G_options>*:nth-child(2){animation-delay:45ms}html[data-industrial-acid] .AnXs9G_options>*:nth-child(3){animation-delay:90ms}\n.acid-dialog{background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);border:1px solid var(--acid-rule);width:min(660px,calc(100vw - 36px));max-height:calc(100dvh - 50px);padding:22px;box-sizing:border-box;box-shadow:7px 7px 0 color-mix(in srgb,var(--acid-lime),transparent 70%);animation:acid-panel-in .35s cubic-bezier(.16,.8,.18,1) both}\n.acid-dialog::backdrop{background:#000a;backdrop-filter:blur(4px)}\n.acid-dialog-heading{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid var(--acid-rule);margin-bottom:16px}.acid-dialog-heading h2{font:24px var(--dsw-font-family);margin:0}\n.acid-dialog-heading button{width:29px;height:29px;background:transparent;color:inherit;border:1px solid var(--acid-rule);font:20px var(--dsw-font-family);cursor:pointer}\n.acid-workspace-option{display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:14px;width:100%;padding:18px 5px;align-items:center;background:transparent;color:inherit;border:0;border-bottom:1px solid var(--acid-rule);text-align:left;cursor:pointer}\n.acid-workspace-option>span:first-of-type{font:900 22px var(--acid-display);font-synthesis:none;color:var(--acid-accent-display)}.acid-workspace-option strong{font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.acid-workspace-option[aria-pressed=true]{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-route-curtain{position:fixed;z-index:40;display:grid;grid-template-rows:repeat(var(--bands),1fr);overflow:hidden;pointer-events:none}\n.acid-route-curtain[data-transition=page]{display:flex}\n.acid-curtain-band{position:relative;flex:1;height:100%;background:var(--dsw-alias-bg-layer-1);border-bottom:2px solid var(--dsw-alias-bg-base)}\n.acid-curtain-band:before{content:'';position:absolute;inset:0 auto 0 0;width:7px;background:var(--acid-accent-display)}.acid-curtain-band:nth-child(2):before{background:var(--acid-blue)}\n.acid-curtain-band:after{content:'';position:absolute;right:0;top:0;width:24%;height:3px;background:var(--acid-accent-display)}\n.acid-layered{isolation:isolate}.acid-layer-positioned{position:relative}.acid-fx{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none!important;color:var(--acid-fx-color);contain:layout paint}\n.acid-fx-slice{position:absolute;left:0;right:0;top:calc(var(--slice)*100%/6);height:calc(100%/6);opacity:0;transform:scaleX(.12);background:linear-gradient(to bottom,currentColor 0 2px,transparent 2px calc(100% - 2px),var(--acid-blue) calc(100% - 2px));pointer-events:none!important}\n.acid-fx-frame{position:absolute;inset:3px;border:1px solid currentColor;opacity:0;pointer-events:none!important}\n.acid-fx-registration{position:absolute;left:5px;right:5px;bottom:4px;height:3px;background:linear-gradient(to right,currentColor 0 17%,transparent 17% 23%,currentColor 23% 42%,transparent 42% 69%,var(--acid-blue) 69%);opacity:0;pointer-events:none!important}\n.acid-brand-home .acid-fx,.acid-sidebar-toggle .acid-fx{color:currentColor}.acid-menus button:hover{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-intro{position:fixed;inset:0;z-index:2000;background:var(--acid-lime);color:var(--acid-accent-fore);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;pointer-events:none;animation:acid-intro-screen 1.15s cubic-bezier(.16,.8,.18,1) both}\n.acid-intro-name{font:900 clamp(40px,8vw,110px)/.9 var(--acid-display);font-synthesis:none;text-align:center;letter-spacing:-.035em}.acid-intro-name span{font:11px var(--acid-mono);letter-spacing:1.15em;display:block;margin-top:22px;padding-left:1.15em}\n.acid-intro-bar{width:180px;height:3px;background:currentColor;transform-origin:left;animation:acid-intro-line 1.05s cubic-bezier(.16,.8,.18,1) both}\n@keyframes acid-intro-screen{0%{clip-path:inset(100% 0 0)}20%,65%{clip-path:inset(0)}100%{clip-path:inset(0 0 100%)}}\n@keyframes acid-intro-line{0%,20%{transform:scaleX(0)}65%,100%{transform:scaleX(1)}}\n@keyframes acid-panel-in{from{clip-path:inset(0 0 100%);transform:translateY(12px)}to{clip-path:inset(0);transform:translateY(0)}}\n@keyframes acid-layer-in{from{opacity:0;transform:translateX(-16px);clip-path:inset(0 100% 0 0)}to{opacity:1;transform:translateX(0);clip-path:inset(0)}}\nhtml[data-industrial-motion=off] .acid-fx,html[data-industrial-motion=off] .acid-intro{display:none}\nhtml[data-industrial-motion=off] .acid-dialog,html[data-industrial-motion=off] .AnXs9G_panel,html[data-industrial-motion=off] .AnXs9G_options>*,html[data-industrial-motion=off] .V7pFBG_cardHead{animation:none!important}\n@media(min-width:1900px){html[data-industrial-acid]{--acid-header-height:145px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(350px,1fr) 230px minmax(350px,540px) 52px}.workspace-counter{font-size:85px}}\n@media(max-width:1190px){html[data-industrial-acid]{--acid-header-height:112px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(270px,1fr) 132px 295px 44px}html[data-industrial-acid] .acid-wordmark{padding:15px;gap:10px}.acid-brand-home{gap:12px}html[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:59px;height:59px}html[data-industrial-acid] .acid-context{padding:14px 17px;gap:13px}.workspace-counter{font-size:48px}.workspace-detail .acid-meta{font-size:8px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:17px}.acid-workspace-arrow{font-size:22px}.acid-menus button{padding:8px;gap:4px;font-size:11px}.acid-sidebar-cut{height:68px}}\n@media(max-width:980px){html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(180px,1fr) 76px 276px 44px}.acid-menus{grid-template-columns:1fr;grid-template-rows:1fr 1fr}.acid-menus button{border-bottom:1px solid var(--acid-rule);font-size:10px}.acid-menus button:last-child{border-bottom:0}html[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(220px,1fr) 276px 44px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:16px}}\n@media(max-width:720px){html[data-industrial-acid]{--acid-header-height:102px}html[data-industrial-acid] .acid-masthead{grid-template-columns:minmax(0,1fr) 48px 154px 36px}.acid-menus button{justify-content:center;padding:5px 2px;font-size:10px}.acid-menus button>span:not(.acid-fx){display:none}html[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,1fr) 154px 36px}html[data-industrial-acid] .acid-wordmark{padding:9px 8px;gap:6px}.acid-brand-home{gap:5px;flex-direction:column;align-items:stretch}html[data-industrial-acid] .acid-wordmark .acid-brand-symbol{width:35px;height:35px}.acid-sidebar-toggle{height:50px;width:25px;border:0;padding:3px}.acid-wordmark-svg>svg{max-height:37px}html[data-industrial-acid] .acid-context{flex-direction:column;align-items:flex-start;padding:8px 11px;border-top-width:3px}.workspace-counter{font-size:32px;position:absolute;right:10px;top:25px}.workspace-detail{gap:0;flex:1;width:100%;align-self:stretch}.workspace-detail .workspace-name-slot{position:absolute;left:11px;right:11px;bottom:10px;width:auto;height:14px}.workspace-detail .acid-meta{font-size:7px}.workspace-name-slot .acid-context-title,.workspace-name-ghost{font-size:11px}.acid-workspace-arrow{display:none}.workspace-switch-line{left:11px;right:11px;bottom:8px;height:2px}.acid-dialog{padding:18px}.acid-workspace-option{grid-template-columns:56px minmax(0,1fr) auto}.acid-palette-fields{grid-template-columns:1fr}html[data-industrial-acid] .AnXs9G_panel{grid-template-columns:150px minmax(0,1fr);grid-template-rows:58px minmax(0,1fr)}html[data-industrial-acid] .AnXs9G_navTitle{height:58px;width:calc(100% - 150px)}html[data-industrial-acid] .AnXs9G_header{min-height:58px}.acid-settings-title{font-size:21px}}\n@media(prefers-reduced-motion:reduce){.acid-intro,.acid-fx{display:none}.acid-dialog,html[data-industrial-acid] .AnXs9G_panel,html[data-industrial-acid] .AnXs9G_options>*,html[data-industrial-acid] .V7pFBG_cardHead{animation:none!important}}\n/* night: the ACTIVE WORKSPACE block takes the current workspace's identity colour */\nhtml[data-industrial-acid][data-industrial-mode=night] .acid-context[data-acid-identity]{--acid-context-bg:var(--acid-ws-context);--acid-context-fore:var(--acid-ws-context-fore);background:var(--acid-ws-context)!important;color:var(--acid-ws-context-fore)!important}\nhtml[data-industrial-acid][data-industrial-mode=night] .acid-context[data-acid-identity] :is(.workspace-glyph,.acid-meta,.acid-context-title,.acid-workspace-arrow){color:var(--acid-ws-context-fore)!important}\n\n/* v3c: keep ACTIVE WORKSPACE clear of Windows caption buttons */\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead{padding-right:0}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-context{min-width:0;overflow:visible}\nhtml[data-industrial-acid][data-windows-titlebar] .workspace-name-slot .acid-context-title,html[data-industrial-acid][data-windows-titlebar] .workspace-name-ghost{max-width:100%;overflow:visible;text-overflow:clip;white-space:normal;overflow-wrap:anywhere}\nhtml[data-industrial-acid] .acid-wordmark,.acid-context{min-width:0}\nhtml[data-industrial-acid] .acid-wordmark{overflow:visible}\n\n/* v3c: 2-col masthead (no native menus) — keep brand/context adjacent without paint overflow */\nhtml[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,0.9fr) minmax(360px,1.1fr) 48px}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,0.85fr) minmax(340px,1.15fr) 48px}\nhtml[data-industrial-acid] .acid-wordmark{min-width:0;max-width:100%;overflow:visible}html[data-industrial-acid] .acid-brand-home,html[data-industrial-acid] .acid-wordmark-svg{min-width:0;max-width:100%;overflow:hidden}\nhtml[data-industrial-acid] .acid-wordmark-svg>svg{display:block;width:auto;max-width:100%;max-height:100%}\nhtml[data-industrial-acid] .acid-context{min-width:0;overflow:visible}\nhtml[data-industrial-acid] .workspace-detail{min-width:0;overflow:visible}\nhtml[data-industrial-acid] .workspace-name-slot{min-width:0;max-width:100%}\nhtml[data-industrial-acid] .workspace-name-slot .acid-context-title{display:block;overflow:visible;text-overflow:clip;white-space:normal;overflow-wrap:anywhere;word-break:break-word}\n/* v3c-context-balance */\nhtml[data-industrial-acid] .acid-context{display:grid!important;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding-right:16px;box-sizing:border-box}\nhtml[data-industrial-acid] .workspace-counter{flex:none}\nhtml[data-industrial-acid] .workspace-detail{min-width:0}\nhtml[data-industrial-acid] .acid-workspace-arrow{flex:none}\n/* v3c-title-wrap: show full workspace name, no ellipsis */\nhtml[data-industrial-acid] .workspace-name-slot{overflow:visible;min-height:1.25em;height:auto!important}\nhtml[data-industrial-acid] .workspace-detail{display:flex;flex-direction:column;justify-content:center;gap:4px;min-width:0;overflow:visible}\nhtml[data-industrial-acid] .acid-context-title,#workspace-name,.workspace-name-slot .acid-context-title,.workspace-name-ghost{line-height:1.25;overflow:visible!important;text-overflow:clip!important;white-space:normal!important;overflow-wrap:anywhere;word-break:break-word;max-width:none}\n/* give ACTIVE WORKSPACE more room vs brand */\nhtml[data-industrial-acid] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,0.75fr) minmax(420px,1.25fr) 48px}\nhtml[data-industrial-acid][data-windows-titlebar] .acid-masthead[data-native-controls=false]{grid-template-columns:minmax(0,0.7fr) minmax(400px,1.3fr) 48px}\n\n/* Own the model slot only; editor, send policy and permissions remain native. */\n.acid-model-controls{display:flex;align-items:center;gap:6px;min-width:0;max-width:100%}\n.acid-model-trigger,.acid-effort-trigger{position:relative;display:flex;align-items:center;gap:6px;min-width:0;height:32px;padding:0 8px;border:1px solid var(--acid-rule);border-radius:0;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font-family:inherit;font-size:13px;line-height:1.4;cursor:pointer}\n.acid-model-trigger:hover:not(:disabled),.acid-effort-trigger:hover:not(:disabled){border-color:var(--acid-accent-display);background:var(--dsw-alias-bg-layer-3)}\n.acid-model-trigger:focus-visible,.acid-effort-trigger:focus-visible,.acid-model-popover button:focus-visible,.acid-model-popover input:focus-visible{outline:2px solid var(--acid-blue);outline-offset:2px}\n.acid-model-trigger:disabled,.acid-effort-trigger:disabled{opacity:.5;cursor:default}\n.acid-model-trigger{flex:1 1 auto;max-width:min(280px,42cqw)}\n.acid-model-trigger svg,.acid-effort-trigger svg{flex:none}\n.acid-model-name{display:var(--dsh-composer-model-text-display,block);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.acid-effort-trigger{flex:none;isolation:isolate;white-space:nowrap}\n.acid-effort-trigger>svg,.acid-effort-trigger>span{position:relative;z-index:1}\n.acid-effort-trigger[data-max]{color:var(--acid-accent-display);border-color:var(--acid-accent-display)}\n.acid-effort-trigger[data-max]:before{content:'';pointer-events:none;position:absolute;inset:2px;border-top:1px solid var(--acid-lime);border-bottom:1px solid var(--acid-lime);opacity:.5;clip-path:polygon(0 0,28% 0,28% 100%,0 100%,0 0,72% 0,100% 0,100% 100%,72% 100%,72% 0);animation:acid-reason-split 2.6s steps(1,end) infinite}\n.acid-reason-bars{display:flex;align-items:flex-end;gap:2px;height:16px;flex:none}\n.acid-reason-bars i{display:block;width:3px;background:currentColor;height:6px}.acid-reason-bars i:nth-child(2){height:11px}.acid-reason-bars i:nth-child(3){height:16px}\n.acid-model-popover{position:fixed;z-index:1100;box-sizing:border-box;width:min(520px,calc(100vw - 24px));overflow-y:auto;overscroll-behavior:contain;padding:20px;border:1px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);box-shadow:5px 5px 0 color-mix(in srgb,var(--acid-ink) 35%,transparent);font-family:inherit;scrollbar-width:thin}\n.acid-model-popover *{box-sizing:border-box}\n.acid-model-popover-head{position:relative;padding-right:32px;margin-bottom:14px}\n.acid-model-popover-head>span{color:var(--acid-accent-display);font:12px/1.4 var(--acid-mono)}\n.acid-model-popover-head h2{font-family:inherit;font-size:23px;font-weight:600;line-height:1.4;margin:6px 0 0}\n.acid-model-close{position:absolute;right:-6px;top:0;min-width:28px;height:28px;border:0;background:transparent;color:inherit;font-size:22px;cursor:pointer}\n.acid-model-section{display:flex;align-items:center;gap:12px;margin:12px 0 8px;font-size:14px;font-weight:600}\n.acid-model-section>span{color:var(--acid-accent-display);font:14px/1.4 var(--acid-mono)}\n.acid-model-section output{font-weight:500;margin-left:auto;color:var(--acid-accent-display);overflow-wrap:anywhere}\n.acid-model-search{display:block;width:100%;height:38px;padding:8px 10px;border:1px solid var(--acid-rule);border-radius:0;background:var(--dsw-alias-bg-layer-2);color:inherit;font-family:inherit;font-size:13px;line-height:1.4}\n.acid-model-search::placeholder{color:var(--dsw-alias-label-secondary)}\n.acid-model-list{display:flex;flex-direction:column;gap:5px;margin-top:10px;max-height:var(--acid-model-list-height,176px);overflow-y:auto;overscroll-behavior:contain}\n.acid-model-list>p{font-size:13px;color:var(--dsw-alias-label-secondary);margin:8px}\n.acid-model-option{display:flex;gap:10px;align-items:center;justify-content:space-between;width:100%;min-height:58px;flex:none;text-align:left;padding:9px 12px;border:1px solid var(--acid-rule);border-left:4px solid transparent;border-radius:0;background:var(--dsw-alias-bg-layer-1);color:inherit;cursor:pointer}\n.acid-model-option[aria-selected=true]{border-left-color:var(--acid-accent-display)}\n.acid-model-check{color:var(--acid-accent-display);font-size:20px}\n.acid-model-option:hover:not(:disabled){background:var(--dsw-alias-bg-layer-3)}\n.acid-model-option-copy{min-width:0}.acid-model-option strong{font-size:14px;font-weight:600;overflow-wrap:anywhere}\n.acid-model-option small{display:block;font-size:12px;color:var(--dsw-alias-label-secondary);margin-top:2px;overflow-wrap:anywhere}\n.acid-model-option:disabled{cursor:default;opacity:.55}\n.acid-reason-slider{position:relative;height:152px;isolation:isolate;background:var(--dsw-alias-bg-layer-2);margin:6px 0;overflow:hidden}\n.acid-reason-energy{pointer-events:none;position:absolute;inset:0;width:100%;height:100%;z-index:0}\n.acid-reason-rail{position:absolute;left:26px;right:26px;top:54px;height:44px;z-index:2}\n.acid-reason-track{position:absolute;left:16px;right:16px;top:20px;height:4px;background:var(--acid-rule);pointer-events:none}\n.acid-reason-track:before{position:absolute;inset:0;width:var(--reason-fill);content:'';background:var(--acid-accent-display);transition:width .15s ease-out}\n.acid-reason-flow{position:absolute;left:16px;right:16px;top:14px;height:17px;opacity:0;pointer-events:none;background:repeating-linear-gradient(90deg,transparent 0 22px,var(--acid-lime) 22px 34px,transparent 34px 50px);clip-path:polygon(0 35%,100% 35%,100% 47%,0 47%,0 65%,100% 65%,100% 77%,0 77%)}\n.acid-reason-rail input[type=range]{position:relative;width:100%;height:44px;display:block;margin:0;appearance:none;-webkit-appearance:none;background:transparent;cursor:ew-resize;z-index:3}\n.acid-reason-rail input[type=range]::-webkit-slider-runnable-track{height:4px;background:transparent}\n.acid-reason-rail input[type=range]::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:32px;height:32px;margin-top:-14px;border:6px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-layer-2)}\n.acid-reason-rail input[type=range]::-moz-range-track{height:4px;background:transparent}\n.acid-reason-rail input[type=range]::-moz-range-thumb{width:20px;height:20px;border:6px solid var(--acid-accent-display);border-radius:0;background:var(--dsw-alias-bg-layer-2)}\n.acid-reason-rail input:disabled{cursor:default;opacity:.5}\n.acid-reason-levels{position:absolute;left:26px;right:26px;top:112px;display:flex;justify-content:space-between;gap:6px;max-width:100%;font-family:inherit;font-size:12px;line-height:1.4;color:var(--dsw-alias-label-secondary)}\n.acid-reason-levels>span{min-width:0;overflow-wrap:anywhere}.acid-reason-levels>span[data-current]{color:var(--acid-accent-display);font-weight:600}\n.acid-reason-slices{position:absolute;inset:14px;opacity:0;pointer-events:none}\n.acid-reason-slices:before,.acid-reason-slices:after{content:'';position:absolute;right:6px;top:8px;width:90px;height:126px;border:1px solid var(--acid-lime);clip-path:polygon(0 0,100% 0,100% 25%,94% 25%,94% 5%,0 5%,0 48%,100% 48%,100% 52%,0 52%,0 95%,94% 95%,94% 75%,100% 75%,100% 100%,0 100%)}\n.acid-reason-slices:after{right:12px;border-color:var(--acid-blue);opacity:.65}\n.acid-reason-ghost{position:absolute;right:1px;top:7px;width:30px;height:30px;border:1px solid var(--acid-lime);pointer-events:none;opacity:0}\n.acid-reason-slider[data-max] .acid-reason-flow{opacity:.8;animation:acid-reason-flow .65s linear infinite}\n.acid-reason-slider[data-max] .acid-reason-slices{opacity:1}\n.acid-reason-slider[data-max] .acid-reason-slices:before{animation:acid-reason-split 2.4s steps(1,end) infinite}\n.acid-reason-slider[data-max] .acid-reason-slices:after{animation:acid-reason-split 2.8s steps(1,end) infinite reverse}\n.acid-reason-slider[data-max] .acid-reason-ghost{animation:acid-reason-ghost 1.1s ease-out infinite}\n.acid-reason-slider[data-max] input[type=range]::-webkit-slider-thumb{background:var(--acid-lime);box-shadow:inset 0 0 0 7px var(--acid-ink),0 0 18px color-mix(in srgb,var(--acid-lime) 35%,transparent)}\n.acid-reason-slider[data-impact] .acid-reason-slices{animation:acid-reason-impact .75s ease-out}\n.acid-model-error{font-size:12px;color:var(--dsw-alias-state-error-primary);padding:10px 0;overflow-wrap:anywhere}\n.acid-model-error button{margin-left:8px;color:inherit;border:1px solid currentColor;background:transparent;padding:4px 8px;cursor:pointer}\n.acid-model-notice,.acid-model-note{font-size:12px;line-height:1.5;color:var(--dsw-alias-label-secondary);margin:10px 0 0}\n.acid-model-note{border-top:1px solid var(--acid-rule);padding-top:8px}\n@keyframes acid-reason-flow{to{background-position:50px 0}}\n@keyframes acid-reason-split{0%,22%,32%,74%,84%,100%{transform:none}24%,28%{transform:translate(-3px,2px)}76%,80%{transform:translate(3px,-1px)}}\n@keyframes acid-reason-ghost{0%{transform:none;opacity:.6}75%,100%{transform:translate(-27px,-5px);opacity:0}}\n@keyframes acid-reason-impact{0%{transform:translate(-8px,2px)}14%{transform:translate(5px,-2px)}30%{transform:translate(-3px,1px)}60%,100%{transform:none}}\nhtml[data-industrial-motion=quiet] .acid-reason-ghost,html[data-industrial-motion=quiet] .acid-reason-slices:before,html[data-industrial-motion=quiet] .acid-reason-slices:after,html[data-industrial-motion=quiet] .acid-effort-trigger:before{animation:none!important}\nhtml[data-industrial-motion=quiet] .acid-reason-flow{animation-duration:1.5s!important;opacity:.45!important}\nhtml[data-industrial-motion=off] .acid-reason-energy{display:none}\nhtml[data-industrial-motion=off] .acid-reason-slider *,html[data-industrial-motion=off] .acid-reason-slider *:before,html[data-industrial-motion=off] .acid-reason-slider *:after,html[data-industrial-motion=off] .acid-effort-trigger:before{animation:none!important;transition:none!important}\nhtml[data-industrial-motion=off] .acid-reason-ghost{display:none}\n@media(max-width:600px){.acid-model-controls{gap:4px}.acid-model-trigger,.acid-effort-trigger{padding:0 6px;gap:4px}.acid-model-popover{padding:16px}.acid-model-popover-head h2{font-size:20px}}\n@media(pointer:coarse){.acid-model-trigger,.acid-effort-trigger,.acid-model-close{min-height:44px}.acid-model-search{font-size:16px}.acid-model-option{min-height:58px}}\n@media(prefers-reduced-motion:reduce){.acid-reason-energy,.acid-reason-ghost{display:none}.acid-reason-slider *,.acid-reason-slider *:before,.acid-reason-slider *:after,.acid-effort-trigger:before{animation:none!important;transition:none!important}}\n\n/* Approved H/I/J share one canvas. Keep a native input for focus, pointer and keyboard. */\n.acid-reason-slider.berserk-surface{height:134px;background:var(--dsw-alias-bg-layer-2)}\n.acid-max-canvas-owner,.acid-max-canvas-owner>.berserk-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;display:block}\n.acid-reason-slider.berserk-surface .acid-reason-rail{left:22px;right:34px;top:36px;height:50px}\n.acid-reason-slider.berserk-surface input[type=range]{height:50px}\n.acid-reason-slider.berserk-surface input[type=range]::-webkit-slider-thumb{width:18px;height:34px;margin-top:-15px;border:0;background:transparent;box-shadow:none}\n.acid-reason-slider.berserk-surface input[type=range]::-moz-range-thumb{width:18px;height:34px;border:0;background:transparent;box-shadow:none}\n.acid-reason-slider.berserk-surface .acid-reason-levels{top:101px;left:23px;right:35px}\n.acid-reason-slider.berserk-surface .acid-reason-track,.acid-reason-slider.berserk-surface .acid-reason-flow,.acid-reason-slider.berserk-surface .acid-reason-ghost,.acid-reason-slider.berserk-surface .acid-reason-slices{display:none}\n.acid-effort-trigger[data-max]:before{content:none}\n.acid-max-value{white-space:nowrap;position:relative;font-family:var(--acid-mono)}\n/* v3c-model-bar: center model/intensity/send on composer bottom row */\nhtml[data-industrial-acid] .acid-model-controls{display:flex!important;align-items:center!important;gap:8px;padding-right:10px;min-height:36px;box-sizing:border-box}\nhtml[data-industrial-acid] .acid-model-controls .acid-model-trigger,html[data-industrial-acid] .acid-model-controls .acid-effort-trigger{display:inline-flex;align-items:center;height:32px}\nhtml[data-industrial-acid] [data-slot=\"conversation.input.right\"]{display:flex!important;align-items:center!important;padding-right:8px;gap:8px}\n\n/* v3c-model-bar-host: align with new composer trailing cluster */\nhtml[data-industrial-acid] .GRgSLq_standardControls,html[data-industrial-acid] .GRgSLq_trailing{display:flex!important;align-items:center!important;gap:8px;padding-right:12px;min-height:36px;box-sizing:border-box}\nhtml[data-industrial-acid] .GRgSLq_standardControls .acid-model-controls,html[data-industrial-acid] .GRgSLq_trailing .acid-model-controls{margin:0;padding-right:0}\nhtml[data-industrial-acid] .GRgSLq_primary,html[data-industrial-acid] .GRgSLq_trailing>button,html[data-industrial-acid] .GRgSLq_standardControls>button{align-self:center}\n\n/* 02/03: approved 3px registration corners and central press feedback. */\n.acid-fx{overflow:visible;contain:layout;--acid-corner-width:3px}\n.acid-hover-corner{position:absolute;width:11px;height:11px;border:solid currentColor;opacity:0;pointer-events:none}\n.acid-hover-corner.tl{left:0;top:0;border-width:3px 0 0 3px}.acid-hover-corner.tr{right:0;top:0;border-width:3px 3px 0 0}\n.acid-hover-corner.bl{left:0;bottom:0;border-width:0 0 3px 3px}.acid-hover-corner.br{right:0;bottom:0;border-width:0 3px 3px 0}\n.acid-hover-line{position:absolute;left:5px;right:5px;bottom:2px;height:1px;background:currentColor;transform-origin:left;opacity:0}\n.acid-press-fill{position:absolute;inset:0;background:currentColor;opacity:0;pointer-events:none}\n.acid-press-outline{position:absolute;inset:0;border:1px solid currentColor;opacity:0;pointer-events:none}\n/* 04/06/07/10: vertical round trips; sidebars mirror horizontal round trips. */\n.acid-mask-positioned{position:relative}\n.acid-approved-mask{position:absolute;inset:0;z-index:5;display:grid;grid-template-columns:repeat(4,1fr);background:var(--acid-lime);color:var(--acid-accent-fore);pointer-events:none;overflow:hidden}\n.acid-approved-mask>i{border-right:1px solid color-mix(in srgb,currentColor 20%,transparent)}\n.acid-approved-mask>i:nth-child(1){background:var(--acid-lime)}\n.acid-approved-mask>i:nth-child(2){background:var(--acid-blue)}\n.acid-approved-mask>i:nth-child(3){background:var(--acid-palette-surface)}\n.acid-approved-mask>i:nth-child(4){background:var(--acid-palette-text)}\n.acid-transition-proxy{position:fixed;z-index:2200;overflow:hidden;pointer-events:none!important;isolation:isolate}\n.acid-transition-proxy *{pointer-events:none!important;animation:none!important;transition:none!important}\n.acid-transition-proxy>.acid-approved-mask{z-index:10}\n.acid-dialog,html[data-industrial-acid] .AnXs9G_panel,html[data-industrial-acid] .AnXs9G_options>*,html[data-industrial-acid] .V7pFBG_cardHead{animation:none!important}\n/* Keep the existing native icon controls when Windows hides its collapsed track. */\nhtml[data-industrial-acid][data-windows-titlebar] .mP3x-q_frame[data-sidebar-collapsed]{grid-template-columns:var(--acid-rail-columns,56px minmax(0,1fr) 0px)!important;--dsh-windows-sidebar-width:56px!important}\nhtml[data-industrial-acid][data-windows-titlebar] .mP3x-q_frame[data-sidebar-collapsed] .mP3x-q_handle[data-side=rightbar]{left:calc(100% - min(var(--acid-rail-right-width,0px),max(0px,calc(100% - 456px))))!important}\nhtml[data-industrial-acid][data-windows-titlebar] .wtg9ga_root.wtg9ga_collapsed{padding:23px 10px 6px;--dsh-sidebar-inline-padding:10px}\nhtml[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_regionArea{display:flex}\nhtml[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_newSession{width:36px;height:36px;margin:0 0 12px;padding:0;border-radius:0;clip-path:none}\nhtml[data-industrial-acid] .wtg9ga_root.wtg9ga_collapsed .wtg9ga_panelRow{min-height:36px}\n/* Geometry and dock content are revealed by the approved masks, with no second slide. */\nhtml[data-industrial-acid] .mP3x-q_frame[data-animating],html[data-industrial-acid] .mP3x-q_frame[data-animating] .mP3x-q_handle{transition:none!important}\nhtml[data-industrial-acid] .OUqwTW_panel [data-dockkit-host=dock],html[data-industrial-acid] .OUqwTW_panel [data-dockkit-empty],html[data-industrial-acid] .OUqwTW_panel [data-dockkit-divider]{transition:none!important}\nhtml[data-industrial-acid] .wtg9ga_wide,html[data-industrial-acid] .wtg9ga_fading>*,html[data-industrial-acid] .wtg9ga_railIn>*{animation:none!important;transition:none!important}\nhtml[data-industrial-acid][data-windows-titlebar] .mP3x-q_frame[data-sidebar-collapsed] .OUqwTW_panel[data-sidebar-right-panel=push]{max-width:max(0px,calc(100vw - 456px))}\n/* 05: the scanner is clipped to the real number, never the workspace name. */\n#workspace-index{position:relative;overflow:hidden;display:inline-flex}\n.acid-workspace-scan{position:absolute;top:0;bottom:0;width:3px;background:var(--acid-accent-display);z-index:3;pointer-events:none}\n.acid-digit-old,.acid-digit-calibration{position:absolute;inset:0;display:block;pointer-events:none}.acid-digit-calibration{color:var(--acid-accent-display);z-index:2}\n/* 08: leave the native editor, text nodes, caret and hit areas intact. */\n.acid-accepted-composer{position:relative}\n.acid-composer-fx{position:absolute;inset:0;z-index:1;pointer-events:none;color:var(--acid-accent-display)}\n.acid-composer-fx .acid-composer-line{position:absolute;left:0;right:0;height:1px;background:currentColor;opacity:0}\n.acid-composer-fx .acid-composer-line.top{top:0;transform-origin:left}.acid-composer-fx .acid-composer-line.bottom{bottom:0;transform-origin:right}\n.acid-composer-lamp{position:absolute;right:17px;top:9px;width:5px;height:5px;border:1px solid currentColor;background:var(--dsw-alias-border-l2);opacity:.65}\n.acid-composer-focused>.acid-composer-fx .acid-hover-corner,.acid-composer-focused>.acid-composer-fx .acid-composer-line{opacity:1}\n.acid-composer-focused>.acid-composer-fx .acid-composer-lamp{background:currentColor;opacity:1}\n/* 09: the native renderer continues to append actual provider chunks directly. */\n/* 12: signal real status changes with four squares; never fabricate progress. */\n.acid-signal-queue{display:inline-flex;gap:3px;margin-inline-start:8px;vertical-align:middle;pointer-events:none;color:var(--acid-accent-display)}\n.acid-signal-queue>i{display:block;width:4px;height:4px;background:currentColor}\nhtml[data-industrial-motion=off] .acid-composer-line,html[data-industrial-motion=off] .acid-approved-mask,html[data-industrial-motion=off] .acid-transition-proxy{display:none}\n@media(prefers-reduced-motion:reduce){.acid-fx,.acid-approved-mask,.acid-transition-proxy{display:none}.acid-composer-fx *{animation:none;transition:none}}\n\n/* NEXT sidebar — staggered strips, hover flyout, bottom drawer. */\nhtml[data-industrial-acid]{--acid-card:color-mix(in srgb,var(--acid-sidebar-fore) 86%,var(--acid-sidebar-bg));--acid-card-ink:var(--acid-sidebar-bg);--acid-card-dim:color-mix(in srgb,var(--acid-sidebar-bg) 62%,var(--acid-card));--acid-ws-unit:26px}\n/* 1 — single sidebar mode: the wide/rail switch is retired. */\nhtml[data-acid-sidebar=next] .acid-sidebar-toggle,html[data-acid-sidebar=next] .wtg9ga_toggle{display:none!important}\n/* Native commands stay mounted (shortcuts, motion) but are proxied by the stack. */\nhtml[data-acid-sidebar=next] .wtg9ga_root>.wtg9ga_newSession,html[data-acid-sidebar=next] .wtg9ga_root>.wtg9ga_panelList{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip-path:inset(50%)!important;opacity:0!important;pointer-events:none!important;margin:0!important}\nhtml[data-acid-sidebar=next] .wtg9ga_regionArea{border-top:0;margin-top:0;padding-top:0}\nhtml[data-acid-sidebar=next] .GAkraW_sectionHeader{height:30px;min-height:30px;margin:0 0 6px;padding:0 0 0 2px;border-bottom:1px solid var(--acid-sidebar-rule)}\nhtml[data-acid-sidebar=next] .GAkraW_sectionLabel{font:700 10px/1 var(--acid-mono);letter-spacing:.14em;text-transform:uppercase}\n/* the native workspace hover card would cover the flyout; its path moves into the flyout header */\nhtml[data-acid-sidebar=next] [class*=_card_]:has(>.wnFoaW_hoverContent){display:none!important}\nhtml[data-acid-sidebar=next] .RsIu1q_exits,html[data-acid-sidebar=next] .GAkraW_fade{display:none!important}\n/* 2 — v3 rail: 113px, two 46px columns, 5px gaps, 16px inset, half-strip offset. */\nhtml[data-industrial-acid]{--acid-next-bg:#1E2022;--acid-next-block:#0B0C0D;--acid-next-line:rgba(226,228,224,.22);--acid-next-ink:#0B0C0D;--acid-next-card:#E4E5E1;--acid-next-card-row:#D2D4CF;--acid-next-hazard:var(--acid-lime);--acid-next-hazard-ink:var(--acid-accent-fore)}\nhtml[data-acid-sidebar=next] .mP3x-q_frame:not([data-sidebar-collapsed]){grid-template-columns:var(--acid-next-columns,113px minmax(0,1fr) 0px)!important;--dsh-windows-sidebar-width:113px!important}\nhtml[data-acid-sidebar=next] .mP3x-q_frame:not([data-sidebar-collapsed])>.mP3x-q_handle[data-side=sidebar]{display:none!important}\nhtml[data-acid-sidebar=next] .mP3x-q_sidebarCol{width:113px!important;min-width:0!important;overflow:visible!important;position:relative;z-index:6;background:var(--acid-next-bg)!important;border-right:1px solid var(--acid-next-line)}\nhtml[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed){position:relative;box-sizing:border-box;width:113px!important;min-width:0!important;max-width:113px!important;height:100%;padding:16px 0 34px 16px!important;background:var(--acid-next-bg)!important;--dsh-sidebar-inline-padding:0px}\nhtml[data-acid-sidebar=next] .wtg9ga_regionArea{overflow:visible!important;min-height:0}\nhtml[data-acid-sidebar=next] [data-slot=\"sidebar.workspaces\"] .GAkraW_root{position:static;min-height:0}\n/* list tools move to the MORE drawer; natives stay mounted near it for menu anchoring */\nhtml[data-acid-sidebar=next] [data-slot=\"sidebar.workspaces\"] .GAkraW_sectionHeader{position:absolute!important;left:0;bottom:40px;width:113px;height:24px!important;min-height:0!important;margin:0!important;padding:0!important;border:0!important;opacity:0!important;pointer-events:none!important;overflow:hidden}\nhtml[data-acid-sidebar=next] .GAkraW_listArea,html[data-acid-sidebar=next] .GAkraW_treeBody{min-height:0}\nhtml[data-acid-sidebar=next] .GAkraW_list[data-acid-ws-grid]{display:grid!important;grid-template-columns:46px 46px;column-gap:5px;row-gap:5px;grid-auto-rows:102.5px;align-content:start;width:97px;padding:0 0 5px!important;margin:0!important;box-sizing:content-box;overflow-x:hidden!important;overflow-y:auto!important;scrollbar-width:none}\nhtml[data-acid-sidebar=next] .GAkraW_list[data-acid-ws-grid]::-webkit-scrollbar{display:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]{--acid-next-ink:var(--acid-ws-id-fore,#0B0C0D);position:relative;min-width:0;width:46px;height:auto!important;margin:0!important;padding:0!important;background:var(--acid-ws-id);color:var(--acid-next-ink);transition:filter .12s steps(2),box-shadow .12s steps(2)}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]>*{display:none!important}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]>:first-child{display:block!important;height:100%}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]>:first-child>*{display:block!important;height:100%!important;min-height:0}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]:before{content:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]:after{content:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-active]:before{content:'';position:absolute;right:0;top:50%;width:9px;height:16px;margin-top:-8px;background:#0B0C0D;clip-path:polygon(0 0,100% 50%,0 100%);z-index:2;pointer-events:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-active]:after{content:'';position:absolute;right:1px;top:50%;width:7px;height:12px;margin-top:-6px;background:#fff;clip-path:polygon(0 0,100% 50%,0 100%);z-index:3;pointer-events:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_projectRow{position:relative;display:block!important;height:100%!important;min-height:0!important;box-sizing:border-box;padding:0!important;margin:0!important;background:transparent!important;color:var(--acid-next-ink)!important;border:0!important;border-radius:0!important;cursor:pointer;overflow:hidden}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_projectRow:before{content:attr(data-acid-ordinal);position:absolute;top:10px;left:0;right:0;width:max-content;margin:0 auto;padding:0 0 3px;border-bottom:2px solid currentColor;font:900 14px/1 var(--acid-display);font-synthesis:none;letter-spacing:0;color:var(--acid-next-ink);background:none;box-shadow:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_projectRow:after{content:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_folder,html[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_chevron{display:none!important}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_projectText{position:absolute!important;left:0;right:0;bottom:9px;display:block!important;min-width:0;margin:0!important;padding:0!important}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_title{display:block!important;width:max-content!important;margin:0 auto!important;max-height:150px;writing-mode:vertical-rl;text-orientation:sideways;transform:rotate(180deg);color:var(--acid-next-ink)!important;font:700 9px/1 var(--acid-mono);letter-spacing:.06em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_title:empty:before{content:attr(data-acid-fallback);opacity:.7}\n/* Keep the real menu trigger on the strip so its native menu and confirmation stay anchored. */\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_rowActions{position:absolute;left:0;right:0;top:30px;height:22px!important;display:flex!important;justify-content:center;gap:0;z-index:4;opacity:1!important;pointer-events:auto!important}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_rowActions>button{display:none!important}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_rowActions .wnFoaW_iconButton{width:28px;height:20px;color:var(--acid-next-ink);border:1px solid transparent}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_rowActions .wnFoaW_iconButton:is(:hover,:focus-visible){border-color:currentColor;outline:0}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip]:hover,html[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-open]{filter:saturate(1.08) brightness(1.04);box-shadow:inset 0 0 0 2px var(--acid-next-ink)}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip] .wnFoaW_projectRow:focus-visible{outline:2px solid #fff;outline-offset:-4px}\n/* 5 — command block: the half-strip slot right of 001, above 002 */\n.acid-ws-commands{grid-column:2;grid-row:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-width:0;background:var(--acid-next-block)}\n.acid-ws-command{display:grid;place-items:center;width:26px;height:26px;padding:0;border:1px solid rgba(232,234,230,.72);border-radius:0;background:transparent;color:#E8EAE6;cursor:pointer}\n.acid-ws-command:hover{background:#E8EAE6;color:var(--acid-next-block)}\n.acid-ws-command[aria-pressed=true]{background:var(--acid-ws-first,#C6F500);border-color:var(--acid-ws-first,#C6F500);color:var(--acid-next-block)}\n.acid-ws-command:focus-visible{outline:2px solid #fff;outline-offset:1px}\n/* 3 — conversation card: slides out right of the whole rail, never over strips */\n.acid-ws-flyout{position:fixed;z-index:60;border-top:4px solid var(--acid-ws-id)!important;width:min(320px,calc(100vw - 140px));max-height:min(480px,calc(100vh - 24px));display:flex;flex-direction:column;box-sizing:border-box;background:var(--acid-next-card);color:var(--acid-next-card-ink);border:1px solid var(--acid-next-card-rule);border-left:6px solid var(--acid-ws-id);box-shadow:6px 6px 0 rgba(0,0,0,.55);overflow:hidden}\n.acid-ws-fly-head{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:10px;padding:11px 12px 10px}\n.acid-ws-fly-number{padding-bottom:3px;border-bottom:2px solid currentColor;font:900 24px/.9 var(--acid-display);font-synthesis:none}\n.acid-ws-fly-title{display:flex;flex-direction:column;gap:4px;min-width:0}\n.acid-ws-fly-title strong{font:700 13px/1.15 var(--acid-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}\n.acid-ws-fly-title em{font:normal 10px/1.1 var(--acid-mono);opacity:.62;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.acid-ws-fly-meta{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 12px;border-top:1px solid var(--acid-next-card-rule);border-bottom:1px solid var(--acid-next-card-rule);font:700 9px/1 var(--acid-mono);letter-spacing:.12em}\n.acid-ws-fly-new{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 7px;border:1px solid var(--acid-next-card-ink);border-radius:0;background:transparent;color:inherit;font:700 9px/1 var(--acid-mono);letter-spacing:.08em;cursor:pointer}\n.acid-ws-fly-new b{font-size:13px}\n.acid-ws-fly-new:hover,.acid-ws-fly-new:focus-visible{background:var(--acid-next-card-ink);color:var(--acid-next-card);outline:0}\n.acid-ws-fly-list{display:flex;flex-direction:column;gap:4px;overflow:auto;padding:8px 10px 10px;scrollbar-width:thin}\n.acid-ws-fly-row{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:10px;width:100%;min-height:32px;padding:0 10px;border:0;border-radius:0;background:var(--acid-next-card-row);color:inherit;text-align:left;font:12.5px/1.25 var(--dsw-font-family);cursor:pointer}\n.acid-ws-fly-row:hover,.acid-ws-fly-row:focus-visible{background:var(--acid-next-card-ink);color:var(--acid-next-card);outline:0}\n.acid-ws-fly-row[aria-current=true]{font-weight:700;box-shadow:inset 4px 0 0 var(--acid-ws-id)}\n.acid-ws-fly-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.acid-ws-fly-time{font:10px/1 var(--acid-mono);opacity:.7;white-space:nowrap}\n.acid-ws-fly-empty{margin:0;padding:14px 12px;font:10px/1.4 var(--acid-mono);letter-spacing:.1em;opacity:.65}\n.acid-ws-color{flex:none;padding:10px 12px;border-top:1px solid var(--acid-next-card-rule)}\n.acid-ws-color .acid-color-field{gap:6px}\n.acid-ws-color .acid-color-field>label{font:700 10px/1.2 var(--dsw-font-family)}\n.acid-ws-color .acid-color-inputs{grid-template-columns:36px minmax(0,1fr);gap:8px}\n.acid-ws-color input{box-sizing:border-box;min-width:0;height:30px;border:1px solid var(--acid-next-card-rule);background:var(--acid-next-card-row);color:inherit}\n.acid-ws-color input[type=color]{width:36px;padding:2px;cursor:pointer}\n.acid-ws-color input[type=text]{width:100%;padding:0 8px;font:12px/1 var(--acid-mono)}\n.acid-ws-color input[aria-invalid=true]{outline:1px solid var(--dsw-alias-state-error-primary)}\n.acid-ws-color-reset{margin-top:8px;padding:4px 0;border:0;background:transparent;color:inherit;font:11px/1.2 var(--dsw-font-family);text-decoration:underline;cursor:pointer}\n.acid-ws-color-reset:disabled{opacity:.4;cursor:default}\nhtml[data-industrial-acid]{--acid-next-card:#FFFFFF;--acid-next-card-ink:#111511;--acid-next-card-row:#F2F2F2;--acid-next-card-rule:#C8CBC4}\nhtml[data-industrial-acid][data-industrial-mode=night]{--acid-next-card:#000000;--acid-next-card-ink:#FFFFFF;--acid-next-card-row:#151515;--acid-next-card-rule:#555555}\n/* 6 — MORE drawer: 34px hazard bar; opens as an overlay panel above it */\nhtml[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_footArea{position:absolute!important;left:0;right:0;bottom:0;z-index:8;box-sizing:border-box;height:34px;max-height:34px;margin:0!important;padding:0!important;border:0!important;overflow:hidden;background:var(--acid-next-bg)}\nhtml[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_footArea[data-acid-drawer=open]{position:fixed!important;left:0;right:auto;bottom:0;width:min(320px,calc(100vw - 24px));height:auto;max-height:min(560px,calc(100vh - 160px));overflow:auto;padding:10px 12px 44px!important;background:var(--acid-sidebar-bg);color:var(--acid-sidebar-fore);border:1px solid var(--acid-next-line)!important;box-shadow:6px -6px 0 rgba(0,0,0,.45);z-index:80;clip-path:none;animation:none}\n@keyframes acid-drawer-rise{from{transform:translateY(12px);opacity:.72}to{transform:none;opacity:1}}\n/* keep sidebar column above center while the fixed drawer is up */\nhtml[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed):has(>.wtg9ga_footArea[data-acid-drawer=open]),html[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed):has(>.wtg9ga_footArea:focus-within),html[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed):has(.acid-drawer-handle[aria-expanded=true]){z-index:80}\nhtml[data-acid-sidebar=next] .mP3x-q_sidebarCol:has(.wtg9ga_footArea[data-acid-drawer=open]),html[data-acid-sidebar=next] .mP3x-q_sidebarCol:has(.acid-drawer-handle[aria-expanded=true]){z-index:80;isolation:isolate}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-footer,html[data-acid-sidebar=next] .wtg9ga_footArea .acid-drawer{position:static!important}\nhtml[data-industrial-acid] .acid-drawer{display:flex;flex-direction:column;width:100%}\nhtml[data-industrial-acid] .acid-drawer-handle{position:absolute;left:0;right:0;bottom:0;z-index:3;display:grid;place-items:center;width:100%;height:34px;margin:0;padding:0;border:0;border-top:1px solid var(--acid-next-line);border-radius:0;background:repeating-linear-gradient(135deg,var(--acid-next-hazard) 0 7px,var(--acid-next-hazard-ink) 7px 14px);color:var(--acid-next-hazard-ink);cursor:pointer}\nhtml[data-industrial-acid] .acid-drawer-label{display:inline-flex;align-items:center;gap:4px;padding:3px 5px 2px;background:var(--acid-next-hazard);font:700 9px/1 var(--acid-mono);letter-spacing:.14em;white-space:nowrap;box-shadow:0 0 0 2px var(--acid-next-hazard-ink)}\nhtml[data-industrial-acid] .acid-drawer-chevron{display:inline-block;font-size:9px;transition:transform .18s steps(2)}\nhtml[data-industrial-acid] .acid-drawer-handle:focus-visible{outline:2px solid #fff;outline-offset:-3px}\nhtml[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer=open] .acid-drawer-chevron{transform:rotate(180deg)}\n.acid-drawer-tools{display:grid;gap:4px;padding:2px 0 8px;border-bottom:1px solid var(--acid-sidebar-rule);margin-bottom:6px}\n.acid-drawer-tool{display:grid;grid-template-columns:18px minmax(0,1fr);align-items:center;gap:8px;height:28px;padding:0 6px;border:1px solid var(--acid-sidebar-rule);border-radius:0;background:transparent;color:inherit;font:600 11px/1 var(--dsw-font-family);text-align:left;cursor:pointer}\n.acid-drawer-tool:hover,.acid-drawer-tool:focus-visible{background:var(--acid-sidebar-hover);outline:0}\n.acid-drawer-tool-icon{display:grid;place-items:center}\n.acid-drawer-tool-icon svg{width:15px;height:15px}\nhtml[data-industrial-acid] .acid-drawer-body,html[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer] .wtg9ga_settingsArea{display:grid;grid-template-rows:0fr;overflow:hidden;opacity:0;visibility:hidden;transition:grid-template-rows .22s cubic-bezier(.2,.8,.2,1),opacity .14s,visibility 0s .22s}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea[data-acid-drawer=open] .acid-drawer-body{display:flex!important;flex-direction:column;grid-template-rows:none!important;overflow:visible!important;opacity:1!important;visibility:visible!important;max-height:none!important}\nhtml[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer] .wtg9ga_settingsArea{max-height:0;transition:max-height .22s cubic-bezier(.2,.8,.2,1),opacity .14s,visibility 0s .22s}\nhtml[data-industrial-acid] .acid-drawer-body>*{min-height:0}\nhtml[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer=open] .acid-drawer-body{grid-template-rows:1fr;opacity:1;visibility:visible;transition:grid-template-rows .22s cubic-bezier(.2,.8,.2,1),opacity .14s .04s,visibility 0s}\nhtml[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer=open] .wtg9ga_settingsArea{max-height:48px;opacity:1;visibility:visible;transition:max-height .22s cubic-bezier(.2,.8,.2,1),opacity .14s .04s,visibility 0s}\nhtml[data-industrial-acid] .wtg9ga_footArea[data-acid-drawer=open] .acid-drawer-chevron{transform:rotate(180deg)}\nhtml[data-industrial-acid] .acid-drawer-body .acid-mode-switch{padding-top:6px}\n/* reduced / off motion */\nhtml[data-industrial-motion=off] [data-acid-ws-strip],html[data-industrial-motion=off] .acid-ws-flyout,html[data-industrial-motion=off] .acid-ws-flyout:after,html[data-industrial-motion=off] .acid-drawer-body,html[data-industrial-motion=off] .wtg9ga_settingsArea,html[data-industrial-motion=off] .acid-drawer-chevron{animation:none!important;transition:none!important}\nhtml[data-industrial-motion=off] .acid-ws-flyout:after{display:none}\n@media(prefers-reduced-motion:reduce){[data-acid-ws-strip],.acid-ws-flyout,.acid-ws-flyout:after,.acid-drawer-body,.wtg9ga_settingsArea,.acid-drawer-chevron{animation:none!important;transition:none!important}.acid-ws-flyout:after{display:none}}\nhtml[data-acid-sidebar=next] .wtg9ga_root:not(.wtg9ga_collapsed)>.wtg9ga_footArea[data-acid-drawer=open] :is(.acid-drawer-body,.wtg9ga_settingsArea){grid-template-rows:none;max-height:none;opacity:1;visibility:visible;overflow:visible}\nhtml[data-industrial-motion=off] .wtg9ga_footArea,html[data-industrial-motion=off] .acid-ws-command{animation:none!important;transition:none!important}\n@media(prefers-reduced-motion:reduce){.wtg9ga_footArea,.acid-ws-command{animation:none!important;transition:none!important}}\n/* strip area is its own scroll container ending exactly at the drawer's top edge */\nhtml[data-acid-sidebar=next] .wtg9ga_regionArea,html[data-acid-sidebar=next] [data-slot=\"sidebar.workspaces\"] .GAkraW_root,html[data-acid-sidebar=next] .GAkraW_listArea,html[data-acid-sidebar=next] .GAkraW_treeBody{display:flex!important;flex-direction:column;flex:1 1 auto;min-height:0!important;max-height:100%}\nhtml[data-acid-sidebar=next] .GAkraW_list[data-acid-ws-grid]{flex:1 1 auto;min-height:0!important;max-height:100%}\n/* drawer rows: one grey frame for every row; bracket accent only on the hovered/focused row */\nhtml[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_root,html[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_anchor{display:block!important;width:100%}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea :is(.acid-drawer-tool,.acid-mode-switch button,.acid-palette-shortcut){border:1px solid var(--acid-sidebar-rule)!important;border-radius:0!important;outline:0;box-shadow:none!important}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_trigger{display:flex!important;align-items:center;gap:8px;width:100%!important;min-height:0;margin-top:4px;padding:8px!important;box-sizing:border-box;background:transparent}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-layered>.acid-fx :is(.acid-hover-corner,.acid-hover-line){opacity:0!important}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-layered:is(:hover,:focus-visible)>.acid-fx .acid-hover-corner{opacity:1!important;transform:none!important}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .wtg9ga_settingsArea{overflow:visible!important;padding:0!important;margin:0!important}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .AnXs9G_triggerRow{margin:0!important;padding:0!important;width:100%}\n\n/* v3d: day / night / follow as three side-by-side keys; no clipped overlay */\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-mode-switch{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;width:100%;flex-direction:row;flex-wrap:nowrap;padding-top:6px}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-mode-switch button{display:inline-flex!important;flex:none;width:auto;min-width:0;min-height:32px;padding:5px 4px;justify-content:center;gap:3px;font-size:10px}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-mode-switch button>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-drawer-body{display:flex!important;flex-direction:column;grid-template-rows:none!important;overflow:visible;gap:2px}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea .acid-drawer-body>*{min-height:auto}\n/* 更多: identity colour border + icon (same language as palette swatch / workspace id) */\nhtml[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_trigger,html[data-acid-sidebar=next] .wtg9ga_footArea .AnXs9G_trigger{border:1px solid var(--acid-accent-display)!important;color:var(--acid-accent-display)!important}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_trigger svg,html[data-acid-sidebar=next] .wtg9ga_footArea .AnXs9G_trigger svg{stroke:currentColor;fill:none;color:inherit}\nhtml[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_label,html[data-acid-sidebar=next] .wtg9ga_footArea ._5Qcc8a_trigger span{color:inherit}\n/* Workspace activity loops: working, needs input, unread completion. Drawn on the project row's free\n   ::after layer in strip ink so every identity colour carries them; the native rows are untouched.\n   Motion off or reduced keeps the static badge and pattern without movement. */\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-status] .wnFoaW_projectRow:after{content:'';position:absolute;inset:0;z-index:1;pointer-events:none}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-status=working] .wnFoaW_projectRow:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Crect width='18' height='18' fill='%230B0C0D'/%3E%3Cpath d='M4 13l3-8M8 13l3-8M12 13l3-8' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E\") 50% 40%/18px 18px no-repeat,linear-gradient(180deg,transparent 0 47%,rgba(255,255,255,.85) 48% 49.4%,rgba(11,12,13,.65) 49.4% 50.8%,transparent 52% 100%) 0 100%/100% 300% no-repeat,repeating-linear-gradient(-45deg,rgba(11,12,13,.2) 0 5px,transparent 5px 10px) 0 0/100% 14.1421px;animation:acid-ws-working 1.6s linear infinite}\n@keyframes acid-ws-working{from{background-position:50% 40%,0 100%,0 0}to{background-position:50% 40%,0 0,0 -56.5685px}}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-status=attention] .wnFoaW_projectRow:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Crect width='18' height='18' fill='%230B0C0D'/%3E%3Cpath d='M9 4v6.5M9 12.5v2' stroke='%23fff' stroke-width='2.4'/%3E%3C/svg%3E\") 50% 40%/18px 18px no-repeat,repeating-linear-gradient(-45deg,rgba(11,12,13,.3) 0 6px,transparent 6px 12px);box-shadow:inset 0 0 0 3px #0B0C0D;animation:acid-ws-attention 1.2s steps(1,end) infinite}\n@keyframes acid-ws-attention{0%{opacity:1}50%{opacity:.4}}\nhtml[data-acid-sidebar=next] [data-acid-ws-strip][data-acid-ws-status=done] .wnFoaW_projectRow:after{background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Crect width='18' height='18' fill='%230B0C0D'/%3E%3Cpath d='M4 9.5l3.2 3.2L14 5.5' fill='none' stroke='%23fff' stroke-width='2.4'/%3E%3C/svg%3E\") 50% 40%/18px 18px no-repeat,linear-gradient(165deg,transparent 0 42%,rgba(255,255,255,.72) 48% 52%,transparent 58% 100%) 0 100%/100% 300% no-repeat;box-shadow:inset 0 -6px 0 #0B0C0D;animation:acid-ws-done 3s cubic-bezier(.45,0,.2,1) infinite}\n@keyframes acid-ws-done{0%{background-position:50% 40%,0 100%}50%,100%{background-position:50% 40%,0 0}}\nhtml[data-industrial-motion=quiet] [data-acid-ws-strip][data-acid-ws-status] .wnFoaW_projectRow:after{animation-duration:3.2s}\nhtml[data-industrial-motion=off] [data-acid-ws-strip][data-acid-ws-status] .wnFoaW_projectRow:after{animation:none!important}\n@media(prefers-reduced-motion:reduce){[data-acid-ws-strip][data-acid-ws-status] .wnFoaW_projectRow:after{animation:none!important}}\n\n.acid-token-activity{width:100%;min-width:0;margin:12px 0 7px;color:var(--acid-sidebar-fore);box-sizing:border-box}\n.acid-token-heading{display:flex;align-items:center;gap:6px;min-height:20px;margin-bottom:5px;font:9px/1.3 var(--acid-mono)}\n.acid-token-toggle{display:flex;align-items:center;gap:6px;flex:1;min-width:0;min-height:28px;padding:0;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}\n.acid-token-toggle>span{letter-spacing:.025em;white-space:nowrap}.acid-token-toggle>strong{margin-left:auto;font:11px/1.3 var(--acid-mono);white-space:nowrap;font-variant-numeric:tabular-nums}\n.acid-token-toggle:hover{background:var(--acid-sidebar-hover)}.acid-token-chevron{font:18px/1 var(--dsw-font-family);transform:rotate(90deg);transition:transform .18s}.acid-token-toggle[aria-expanded=false] .acid-token-chevron{transform:rotate(0)}\n.acid-token-calendar[hidden]{display:none}.acid-token-activity[data-token-collapsed=true] .acid-token-heading{margin-bottom:0}\n.acid-token-config{display:grid;place-items:center;width:22px;height:22px;padding:0;border:0;background:transparent;color:inherit;cursor:pointer;font:14px/1 var(--dsw-font-family)}\n.acid-token-config:hover{background:var(--acid-sidebar-hover)}\n.acid-token-chart{position:relative}.acid-token-months{display:grid;grid-template-columns:repeat(18,minmax(0,1fr));gap:3px;height:15px;font:9px/1 var(--dsw-font-family);opacity:.75}.acid-token-months>span{white-space:nowrap}\n.acid-token-months>span:last-child{justify-self:end}\n.acid-token-grid{display:grid;grid-template-rows:repeat(7,minmax(0,1fr));grid-template-columns:repeat(18,minmax(0,1fr));grid-auto-flow:column;gap:3px}\n.acid-token-cell{display:block;width:100%;aspect-ratio:1;padding:0;margin:0;border:1px solid color-mix(in srgb,var(--acid-sidebar-fore) 10%,transparent);border-radius:2px;background:color-mix(in srgb,var(--acid-sidebar-fore) 12%,var(--acid-sidebar-bg));cursor:pointer;box-sizing:border-box;position:relative;min-height:0;min-width:0;transition:background-color .18s}\n.acid-token-activity [data-token-level=\"1\"]{background:var(--acid-token-color-1);border-color:var(--acid-sidebar-rule)}\n.acid-token-activity [data-token-level=\"2\"]{background:var(--acid-token-color-2)}\n.acid-token-activity [data-token-level=\"3\"]{background:var(--acid-token-color-3)}\n.acid-token-activity [data-token-level=\"4\"]{background:var(--acid-token-color-4)}\n.acid-token-cell[data-token-today=true]{outline:1px solid var(--acid-sidebar-fore);outline-offset:1px;z-index:1}\n.acid-token-cell[data-token-future=true]{visibility:hidden;cursor:default}\n.acid-token-cell:focus-visible,.acid-token-config:focus-visible,.acid-token-rail-button:focus-visible,.acid-token-toggle:focus-visible{outline:2px solid var(--acid-sidebar-fore);outline-offset:2px;z-index:2}\n.acid-token-cell:hover{box-shadow:0 0 0 1px var(--acid-sidebar-fore);z-index:2}\n.acid-token-legend{display:flex;align-items:center;justify-content:space-between;gap:5px;margin-top:7px;min-height:12px;font:8px/1.3 var(--dsw-font-family)}\n.acid-token-legend>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;opacity:.75}\n.acid-token-scale{display:flex;align-items:center;gap:3px;white-space:nowrap}.acid-token-scale i{width:8px;height:8px;border:1px solid var(--acid-sidebar-rule);border-radius:1px;box-sizing:border-box}\n.acid-token-tooltip{position:absolute;left:0;bottom:calc(100% - 12px);min-width:190px;max-width:100%;padding:9px 10px;box-sizing:border-box;border:1px solid var(--acid-sidebar-rule);background:var(--acid-sidebar-bg);color:var(--acid-sidebar-fore);box-shadow:3px 3px 0 color-mix(in srgb,var(--acid-sidebar-fore) 20%,transparent);z-index:12;pointer-events:none;display:flex;flex-direction:column;gap:4px;font:10px/1.4 var(--dsw-font-family)}\n.acid-token-tooltip strong,.acid-token-tooltip b{font-family:var(--acid-mono)}\n.acid-token-rail{margin:6px 0}.acid-token-rail-button{width:100%;display:flex;align-items:center;flex-direction:column;gap:3px;background:transparent;color:inherit;border:0;padding:5px 0;cursor:pointer}.acid-token-rail-button>span{width:12px;height:12px;border:1px solid var(--acid-sidebar-rule);border-radius:2px;background:color-mix(in srgb,var(--acid-sidebar-fore) 15%,transparent)}.acid-token-rail-button small{font:8px var(--acid-mono)}\n.acid-token-settings{margin-top:18px;padding-top:14px;border-top:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary)}\n.acid-token-settings h3{margin:0 0 6px;font:14px/1.4 var(--dsw-font-family)}.acid-token-settings p{font:12px/1.6 var(--dsw-font-family);margin:6px 0 12px;color:var(--dsw-alias-label-secondary)}\n.acid-token-thresholds{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.acid-token-thresholds label{display:block;margin-bottom:5px;font:12px/1.3 var(--dsw-font-family)}\n.acid-token-thresholds input{width:100%;min-width:0;box-sizing:border-box;padding:9px 7px;border:1px solid var(--dsw-alias-border-l2);border-radius:2px;background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:13px/1.4 var(--acid-mono)}\n.acid-token-thresholds input[aria-invalid=true]{border-color:var(--dsw-alias-state-error-primary)}\n.acid-token-settings-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.acid-token-settings-actions button{padding:7px 10px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);font:12px/1.4 var(--dsw-font-family);cursor:pointer}.acid-token-settings-actions button:disabled{opacity:.4;cursor:default}\n.acid-token-dialog{width:min(540px,calc(100vw - 24px))}.acid-token-dialog .acid-token-settings{margin-top:0;padding-top:0;border-top:0}.acid-token-dialog .acid-token-settings h3{display:none}\n@media(max-width:450px){.acid-token-thresholds{grid-template-columns:1fr}.acid-token-tooltip{min-width:0;width:100%}}\n@media(max-height:650px){.acid-token-activity{margin:5px 0}.acid-token-heading{margin-bottom:3px}.acid-token-legend{margin-top:4px}}\n@media(prefers-reduced-motion:reduce){.acid-token-cell,.acid-token-chevron{transition:none}}\n\n/* MARATHON // SECRET TERMINAL PROTOCOL. One fixed, pointer-transparent stage with its own colours;\n   it never reads or writes the skin's --dsw tokens, so day/night readability is unaffected. */\n.mx-stage{--mx-bg:#020905;--mx-ink:#5CFF94;--mx-hot:#D6FFE3;--mx-dim:#1E6B3D;--mx-alert:#FF3B4E;--mx-safe:0px;--mx-h:calc(100vh - var(--mx-safe));position:fixed;inset:0;z-index:2400;pointer-events:none;overflow:hidden;color:var(--mx-ink);font:500 13px/1.45 var(--acid-mono,'Cascadia Code',Consolas,monospace);letter-spacing:.04em;isolation:isolate;-webkit-font-smoothing:antialiased}\n.mx-stage *,.mx-stage *::before,.mx-stage *::after{box-sizing:border-box}\n.mx-stage svg{overflow:visible}\n.mx-stage[data-mx-tone=red]{--mx-bg:#0C0203;--mx-ink:#FF3B4E;--mx-hot:#FFD7DB;--mx-dim:#6E1019}\n.mx-stage[data-mx-tone=blue]{--mx-bg:#061A26;--mx-ink:#3FD6F2;--mx-hot:#F3FAFC;--mx-dim:#1C5A73}\n.mx-stage[data-mx-tone=mono]{--mx-bg:#000;--mx-ink:#F2F2EE;--mx-hot:#FFF;--mx-dim:#6B6B66}\n.mx-stage[data-mx-tone=split]{--mx-bg:#05060A;--mx-ink:#F4F4F8;--mx-hot:#FFF;--mx-dim:#3B3F55}\n.mx-stage[data-mx-tone=nav]{--mx-bg:#02060F;--mx-ink:#8FC8FF;--mx-hot:#FFD36B;--mx-dim:#24456E}\n.mx-stage[data-mx-tone=violet]{--mx-bg:#07030F;--mx-ink:#C08BFF;--mx-hot:#E7FF6B;--mx-dim:#4A2C78}\n.mx-stage[data-mx-tone=ice]{--mx-bg:#041019;--mx-ink:#9FE8FF;--mx-hot:#F2FCFF;--mx-dim:#2D6A85}\n.mx-stage[data-mx-tone=toy]{--mx-bg:#0E1206;--mx-ink:#FFD21F;--mx-hot:#FFF6C2;--mx-dim:#6B5A10}\n.mx-stage[data-mx-tone=gold]{--mx-bg:#050402;--mx-ink:#FFC53D;--mx-hot:#FFF1C9;--mx-dim:#4D3A10}\n.mx-stage[data-mx-tone=bone]{--mx-bg:#0B0A08;--mx-ink:#EFE9DC;--mx-hot:#FF5A1F;--mx-dim:#5E5A50}\n.mx-stage[data-mx-tone=agit]{--mx-bg:#0A0606;--mx-ink:#F3EEE6;--mx-hot:#E8202A;--mx-dim:#4A1416}\n.mx-stage[data-mx-tone=corp]{--mx-bg:#15140F;--mx-ink:#22221D;--mx-hot:#F2C200;--mx-dim:#8A877C}\n.mx-stage[data-mx-tone=ancient]{--mx-bg:#020A0A;--mx-ink:#4FE3C1;--mx-hot:#E2C26A;--mx-dim:#1D5C52}\n.mx-stage[data-mx-tone=void]{--mx-bg:#000;--mx-ink:#FF4FB4;--mx-hot:#C7FF4F;--mx-dim:#3A1030}\n.mx-stage[data-mx-tone=null]{--mx-bg:#030405;--mx-ink:#D8DEE3;--mx-hot:#FF4D4D;--mx-dim:#4B535A}\n.mx-veil{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);background:var(--mx-bg);opacity:0}\n.mx-stage[data-mx-rail] .mx-veil{-webkit-mask:linear-gradient(90deg,rgba(0,0,0,.4) 0 var(--mx-rail),#000 calc(var(--mx-rail) + 28px));mask:linear-gradient(90deg,rgba(0,0,0,.4) 0 var(--mx-rail),#000 calc(var(--mx-rail) + 28px))}\n.mx-veil::after{content:'';position:absolute;left:0;right:0;top:100%;height:28px;background:linear-gradient(var(--mx-bg),transparent)}\n.mx-scene{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);display:grid;place-items:center;padding:24px 16px;overflow:hidden}\n.mx-stage[data-mx-seq] .mx-scene{padding-top:68px}\n.mx-live{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.mx-stage .mx-skip{all:unset;box-sizing:border-box;position:absolute;right:16px;bottom:calc(var(--mx-safe) + 12px);display:flex;gap:8px;align-items:center;padding:5px 10px 7px;border:1px solid currentColor;border-radius:0;background:var(--mx-bg);color:var(--mx-ink);font:600 10px/1 var(--acid-mono,monospace);letter-spacing:.14em;cursor:pointer;pointer-events:auto;opacity:0;overflow:hidden}\n.mx-skip span{padding:2px 4px;background:var(--mx-ink);color:var(--mx-bg)}\n.mx-skip i{position:absolute;left:0;right:0;bottom:0;height:2px;background:currentColor;transform-origin:left}\n.mx-skip:focus-visible{outline:2px solid var(--mx-hot);outline-offset:2px}\n/* Shared signal vocabulary */\n.mx-edges i{position:absolute;background:repeating-linear-gradient(90deg,var(--mx-ink) 0 14px,transparent 14px 20px);opacity:0}\n.mx-edges .t,.mx-edges .b{left:0;right:0;height:3px}.mx-edges .t{top:0;transform-origin:left}.mx-edges .b{bottom:var(--mx-safe);transform-origin:right}\n.mx-edges .l,.mx-edges .r{top:0;bottom:var(--mx-safe);width:3px;background:repeating-linear-gradient(0deg,var(--mx-ink) 0 14px,transparent 14px 20px)}.mx-edges .l{left:0;transform-origin:bottom}.mx-edges .r{right:0;transform-origin:top}\n.mx-scanlines{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);opacity:0;background:repeating-linear-gradient(0deg,color-mix(in srgb,var(--mx-ink) 22%,transparent) 0 1px,transparent 1px 4px);-webkit-mask:radial-gradient(ellipse at center,transparent 52%,#000 92%);mask:radial-gradient(ellipse at center,transparent 52%,#000 92%)}\n.mx-sweep{position:absolute;left:0;right:0;top:0;height:2px;background:var(--mx-ink);box-shadow:0 0 18px 2px color-mix(in srgb,var(--mx-ink) 55%,transparent);opacity:0}\n.mx-cfx{position:fixed;opacity:0;color:var(--mx-ink)}\n.mx-cfx b{position:absolute;width:14px;height:14px;border:solid currentColor}\n.mx-cfx .tl{left:-6px;top:-6px;border-width:3px 0 0 3px}.mx-cfx .tr{right:-6px;top:-6px;border-width:3px 3px 0 0}.mx-cfx .bl{left:-6px;bottom:-6px;border-width:0 0 3px 3px}.mx-cfx .br{right:-6px;bottom:-6px;border-width:0 3px 3px 0}\n.mx-cfx i{position:absolute;left:0;right:0;height:9%;background:color-mix(in srgb,currentColor 38%,transparent);mix-blend-mode:screen;opacity:0}\n.mx-cfx span{position:absolute;left:0;bottom:calc(100% + 10px);padding:3px 8px;background:var(--mx-bg);border:1px solid currentColor;font:600 10px/1.2 var(--acid-mono,monospace);letter-spacing:.18em;white-space:nowrap}\n.mx-noise{position:absolute;inset:0;opacity:0;mix-blend-mode:screen;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1.4 -.4'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")}\n/* Glitch vocabulary: macroblocks, line tears, a tracking band and channel-split type. Every piece is\n   driven by short WAAPI bursts from the timeline's shared pulse budget; nothing loops on its own. */\n.mx-defs{position:absolute;width:0;height:0;overflow:hidden}\n.mx-blocks{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);overflow:hidden}\n.mx-block{position:absolute;opacity:0}\n.mx-block.inv{-webkit-backdrop-filter:invert(1) hue-rotate(180deg);backdrop-filter:invert(1) hue-rotate(180deg)}\n.mx-block.ink{background:var(--mx-ink);mix-blend-mode:difference}\n.mx-block.shift{-webkit-backdrop-filter:hue-rotate(110deg) saturate(2.6) contrast(1.3);backdrop-filter:hue-rotate(110deg) saturate(2.6) contrast(1.3);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--mx-hot) 60%,transparent)}\n.mx-block.line{background:var(--mx-hot);box-shadow:0 0 8px var(--mx-ink)}\n.mx-track{position:absolute;left:0;right:0;top:0;height:9vh;opacity:0;-webkit-backdrop-filter:hue-rotate(28deg) brightness(1.18);backdrop-filter:hue-rotate(28deg) brightness(1.18);border-top:1px solid color-mix(in srgb,var(--mx-ink) 55%,transparent);border-bottom:1px solid color-mix(in srgb,var(--mx-ink) 30%,transparent);background:repeating-linear-gradient(0deg,color-mix(in srgb,var(--mx-ink) 9%,transparent) 0 1px,transparent 1px 3px)}\n.mx-gt{position:relative}\n.mx-gt::before,.mx-gt::after{content:attr(data-glitch);position:absolute;inset:0;opacity:0;pointer-events:none;text-shadow:none;background:none;white-space:inherit}\n.mx-gt::before{color:#29F0FF;mix-blend-mode:screen}\n.mx-gt::after{color:#FF2D6F;mix-blend-mode:screen}\n.mx-caret::after{content:'';display:inline-block;width:.55em;height:1em;margin-left:2px;vertical-align:-.12em;background:currentColor}\n.mx-hazard{display:block;width:72px;height:10px;background:repeating-linear-gradient(-45deg,var(--mx-ink) 0 6px,transparent 6px 12px)}\n.mx-glyph{width:12px;height:16px;flex:none;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:square}.mx-glyph circle{fill:currentColor;stroke:none}\n.mx-seq{position:absolute;left:16px;top:30px;display:flex;gap:6px;align-items:center;padding:6px 10px;border:1px solid var(--mx-ink);background:var(--mx-bg);font-size:10px;letter-spacing:.16em}\n.mx-seq b{margin-right:6px}.mx-seq i{font-style:normal;padding:1px 5px;border:1px solid var(--mx-dim);color:var(--mx-dim)}.mx-seq i[data-on=true]{background:var(--mx-ink);border-color:var(--mx-ink);color:var(--mx-bg)}.mx-seq span{margin-left:6px;color:var(--mx-hot)}\n/* Terminal shell used by DURANDAL */\n.mx-term{position:relative;width:min(700px,94vw);border:1px solid var(--mx-ink);background:color-mix(in srgb,var(--mx-bg) 94%,var(--mx-ink));box-shadow:6px 6px 0 color-mix(in srgb,var(--mx-ink) 26%,transparent),0 0 60px color-mix(in srgb,var(--mx-ink) 14%,transparent);opacity:0}\n.mx-term>header,.mx-term>footer{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 14px;font-size:11px;letter-spacing:.18em}\n.mx-term>header{background:var(--mx-ink);color:var(--mx-bg)}.mx-term>header b{font-weight:800}\n.mx-term>footer{border-top:1px solid var(--mx-dim);color:var(--mx-dim)}.mx-term>footer em{font-style:normal}\n.mx-term-body{padding:18px 20px 22px;min-height:min(280px,calc(var(--mx-h) - 140px));display:grid;align-content:start;gap:6px;font-size:clamp(12px,1.6vw,15px)}\n.mx-line{min-height:1.45em;white-space:pre-wrap;overflow-wrap:anywhere}\n.mx-durandal .mx-term-body{padding-right:min(230px,32%)}\n.mx-dglyph{position:absolute;right:22px;top:58px;width:min(190px,26vw);height:auto;fill:none;stroke:var(--mx-ink);stroke-width:3;stroke-linecap:square;opacity:0}\n.mx-dglyph .mx-solid{fill:color-mix(in srgb,var(--mx-ink) 18%,transparent);stroke-width:1.5}.mx-dglyph .mx-core{fill:var(--mx-ink);stroke:none}\n.mx-dglyph-orbit{stroke-width:1;stroke-dasharray:2 5;transform-box:fill-box;transform-origin:center}\n.mx-shard{transform-box:fill-box;transform-origin:center}\n.mx-durandal[data-free] .mx-dglyph{filter:drop-shadow(0 0 10px color-mix(in srgb,var(--mx-ink) 60%,transparent))}\n.mx-verify{display:flex;flex-wrap:wrap;gap:4px 10px;align-items:center;opacity:0}.mx-verify i{flex:1 1 110px;height:8px;border:1px solid var(--mx-dim)}.mx-verify b{display:block;height:100%;background:var(--mx-ink);transform-origin:left}.mx-verify em{font-style:normal;min-width:9ch;text-align:right}\n.mx-verify[data-state=mismatch] em{color:var(--mx-alert);font-weight:800}\n.mx-alarm{justify-self:start;margin-top:8px;padding:3px 10px;background:var(--mx-ink);color:var(--mx-bg);font-weight:800;letter-spacing:.24em}\n.mx-free{margin-top:12px;font:900 clamp(30px,6.4vw,64px)/1 var(--acid-display,'Arial Black',sans-serif);letter-spacing:.02em;color:var(--mx-hot)}\n.mx-free.mx-split{text-shadow:3px 0 0 rgba(255,40,96,.65),-3px 0 0 rgba(40,220,255,.6)}\n.mx-stage[data-mx-motion=quiet] .mx-free.mx-split{text-shadow:none}\n/* TYCHO */\n.mx-tycho{position:absolute;inset:0;display:grid;place-items:center}\n.mx-hz{position:absolute;left:0;right:0;height:22px;background:repeating-linear-gradient(-45deg,var(--mx-ink) 0 16px,var(--mx-bg) 16px 32px)}.mx-hz.top{top:0}.mx-hz.bottom{bottom:0}\n.mx-redframe{position:absolute;inset:30px 12px;border:3px solid var(--mx-ink);box-shadow:inset 0 0 80px color-mix(in srgb,var(--mx-ink) 30%,transparent);opacity:0}\n.mx-tlog{position:absolute;left:28px;top:44px;bottom:44px;width:min(330px,40vw);overflow:hidden;font-size:11px;line-height:1.5;color:color-mix(in srgb,var(--mx-ink) 75%,var(--mx-bg));-webkit-mask:linear-gradient(transparent,#000 15%,#000 85%,transparent);mask:linear-gradient(transparent,#000 15%,#000 85%,transparent);opacity:0}\n.mx-tlog p{margin:0;white-space:nowrap}.mx-tlog span{color:var(--mx-dim)}\n.mx-tycho>header{position:absolute;right:28px;top:44px;display:grid;justify-items:end;gap:2px;font-size:11px;letter-spacing:.2em;opacity:0}.mx-tycho>header b{font-size:22px;color:var(--mx-hot);letter-spacing:.06em}\n.mx-tycho-big{position:relative;display:grid;justify-items:start;line-height:.86;font-family:var(--acid-display,'Arial Black',sans-serif);text-transform:uppercase}\n.mx-tycho-big span{font-size:clamp(18px,3vw,30px);letter-spacing:.3em;color:var(--mx-hot);opacity:0}\n.mx-tycho-big strong{font-size:clamp(56px,13vw,150px);font-weight:900;color:var(--mx-ink);text-shadow:4px 4px 0 var(--mx-dim);opacity:0}\n.mx-tycho[data-isolated] .mx-tycho-big strong{color:#8E8A8A;text-shadow:4px 4px 0 #2A2626;transition:color .5s,text-shadow .5s}\n.mx-quarantine{position:absolute;inset:calc(50% - min(19vh,130px)) calc(50% - min(46vw,420px))}\n.mx-quarantine i{position:absolute;background:var(--mx-hot);opacity:0}.mx-quarantine i:nth-child(1){left:0;right:0;top:0;height:4px}.mx-quarantine i:nth-child(2){top:0;bottom:0;right:0;width:4px}.mx-quarantine i:nth-child(3){left:0;right:0;bottom:0;height:4px}.mx-quarantine i:nth-child(4){top:0;bottom:0;left:0;width:4px}\n.mx-tycho-iso{position:absolute;left:50%;top:calc(50% + min(19vh,130px) + 12px);transform:translateX(-50%);padding:4px 10px;background:var(--mx-hot);color:var(--mx-bg);font:800 12px/1.3 var(--acid-mono,monospace);font-style:normal;letter-spacing:.2em;white-space:nowrap}\n.mx-tycho-iso:empty{display:none}\n/* LEELA */\n.mx-diag-grid{position:absolute;inset:0;background:linear-gradient(color-mix(in srgb,var(--mx-ink) 26%,transparent) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(90deg,color-mix(in srgb,var(--mx-ink) 26%,transparent) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(color-mix(in srgb,var(--mx-ink) 10%,transparent) 1px,transparent 1px) 0 0/12px 12px}\n.mx-leela{position:relative;width:min(720px,94vw);background:var(--mx-hot);color:#0B2C3D;border-left:10px solid var(--mx-ink);box-shadow:10px 10px 0 color-mix(in srgb,var(--mx-ink) 40%,transparent);opacity:0}\n.mx-leela>header{display:flex;justify-content:space-between;gap:10px;padding:10px 18px;background:#0B2C3D;color:var(--mx-hot);font-size:11px;letter-spacing:.2em}.mx-leela>header span{color:var(--mx-ink)}\n.mx-leela-cols{display:grid;grid-template-columns:auto 1fr;gap:22px;padding:18px 18px 8px;align-items:start}\n.mx-leela-pct{display:grid;font-family:var(--acid-display,'Arial Black',sans-serif)}.mx-leela-pct b{font-size:clamp(48px,9vw,86px);line-height:.9;color:#0B2C3D}.mx-leela-pct small{font:600 10px/1.4 var(--acid-mono,monospace);letter-spacing:.2em;color:#1F7F98}\n.mx-leela ol{list-style:none;margin:0;padding:0;display:grid;gap:6px}\n.mx-leela li{display:grid;grid-template-columns:2.4em 11em 1fr 2.2em;gap:10px;align-items:center;font-size:12px;opacity:.25}.mx-leela li span{color:#1F7F98}.mx-leela li em{font-style:normal;font-weight:700}\n.mx-leela li i{height:6px;background:#CFE4EA}.mx-leela li i b{display:block;height:100%;background:var(--mx-ink);transform-origin:left}.mx-leela li strong{color:#0F8F6A;opacity:0}\n.mx-ecg{position:relative;margin:4px 18px 0;height:clamp(40px,10vh,76px);border-top:1px solid #CFE4EA;border-bottom:1px solid #CFE4EA}\n.mx-ecg svg{width:100%;height:100%;fill:none;stroke-linejoin:round}.mx-ecg-ghost{stroke:#CFE4EA;stroke-width:1.2}.mx-ecg-line{stroke:#0AA3C2;stroke-width:2.2;stroke-dasharray:1 1;stroke-dashoffset:1;vector-effect:non-scaling-stroke}\n.mx-ecg span{position:absolute;right:0;top:-18px;font-size:10px;letter-spacing:.18em;color:#1F7F98}\n.mx-leela-ok{margin:14px 18px 18px;padding:10px 14px;background:#0B2C3D;color:var(--mx-hot);font:900 clamp(16px,3vw,26px)/1.1 var(--acid-display,'Arial Black',sans-serif);letter-spacing:.06em}\n/* THOTH */\n.mx-gray{position:absolute;inset:0;-webkit-backdrop-filter:grayscale(1) contrast(1.08);backdrop-filter:grayscale(1) contrast(1.08);opacity:0}\n.mx-thoth{position:relative;width:min(760px,96vw);height:min(420px,calc(var(--mx-h) - 48px));display:grid;place-items:center;color:var(--mx-ink)}\n.mx-axis{position:absolute;left:50%;top:0;bottom:0;width:1px;background:var(--mx-ink);transform-origin:center}\n.mx-beam{position:absolute;left:12%;right:12%;top:20%;height:2px;background:var(--mx-ink);transform-origin:center}\n.mx-thoth-pair{position:absolute;inset:22% 0 26%;display:grid;grid-template-columns:1fr 1fr}\n.mx-thoth-fig{width:min(210px,40vw);height:auto;margin:auto;fill:none;stroke:currentColor;stroke-width:1.6;opacity:0}.mx-thoth-fig.r{scale:-1 1}\n.mx-thoth-fig .mx-dash{stroke-dasharray:3 6;transform-box:fill-box;transform-origin:center}.mx-thoth-fig .mx-thin{stroke-width:.8}.mx-thoth-fig .mx-heavy{stroke-width:5}.mx-thoth-fig .mx-fill{fill:currentColor}\n.mx-thoth-word{position:absolute;bottom:4%;font:900 clamp(18px,3.6vw,34px)/1 var(--acid-display,'Arial Black',sans-serif);white-space:nowrap;opacity:0}\n.mx-thoth-meta{position:absolute;top:2%;left:0;right:0;display:flex;justify-content:space-between;font-size:11px;letter-spacing:.24em}\n/* RAMPANCY */\n.mx-rgrid{position:absolute;inset:-10%;background:linear-gradient(rgba(120,255,180,.35) 1px,transparent 1px) 0 0/56px 56px,linear-gradient(90deg,rgba(255,80,160,.3) 1px,transparent 1px) 0 0/56px 56px;opacity:0}\n.mx-ramp-word{position:relative;display:grid;font:900 clamp(30px,7vw,78px)/1 var(--acid-display,'Arial Black',sans-serif);letter-spacing:.02em;text-align:center}\n.mx-ramp-word>*{grid-area:1/1}.mx-ramp-word .c{color:#29F0FF;mix-blend-mode:screen;opacity:0}.mx-ramp-word .m{color:#FF2D8A;mix-blend-mode:screen;opacity:0}.mx-ramp-word b{color:#F4F4F8;opacity:0}\n.mx-ramp-meta{position:absolute;bottom:18%;display:flex;gap:14px;padding:4px 10px;background:#05060A;font-size:11px;letter-spacing:.24em}.mx-ramp-meta b{color:#FF2D8A}.mx-ramp-meta[data-recovered] b{color:#5CFF94}\n/* TAU CETI */\n.mx-nav{position:relative;display:grid;grid-template-columns:auto auto;gap:28px;align-items:center}\n.mx-chart{width:min(440px,60vw,calc(var(--mx-h) - 64px));height:auto;fill:none;stroke:var(--mx-dim);stroke-width:.5}\n.mx-chart-rings path{stroke-dasharray:1 2}.mx-chart .mx-dash{stroke-dasharray:.6 2.4}\n.mx-stars circle{fill:var(--mx-ink);stroke:none;opacity:.8}\n.mx-orbit{stroke:var(--mx-ink);stroke-width:.6;stroke-dasharray:1 1;stroke-dashoffset:1;opacity:.85}\n.mx-probe{stroke:none;fill:none}\n.mx-planet{fill:var(--mx-ink);stroke:none}.mx-target{fill:var(--mx-hot)}.mx-star-core{fill:var(--mx-hot);stroke:none;filter:drop-shadow(0 0 4px var(--mx-hot))}\n.mx-sweep-arm path{fill:color-mix(in srgb,var(--mx-ink) 16%,transparent);stroke:none}\n.mx-reticle{stroke:var(--mx-hot);stroke-width:1.3;opacity:0}.mx-reticle .mx-thin{stroke-width:.6}\n.mx-nav[data-locked] .mx-reticle{stroke:#FF6B4A}\n.mx-nav aside{display:grid;gap:5px;min-width:24ch;font-size:12px;white-space:pre}.mx-nav aside b{margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--mx-dim);letter-spacing:.2em;font-size:11px}.mx-nav aside p{margin:0;min-height:1.4em}\n.mx-nav aside strong{margin-top:10px;padding:6px 10px;background:var(--mx-hot);color:var(--mx-bg);font:900 clamp(16px,2.4vw,22px)/1.1 var(--acid-display,'Arial Black',sans-serif);letter-spacing:.06em}\n.mx-nav aside strong:empty{visibility:hidden}\n@media (max-width:720px){.mx-nav{grid-template-columns:1fr;justify-items:center;gap:10px}.mx-nav aside{min-width:0}}\n/* PFHOR */\n.mx-pfhor{position:relative;width:min(760px,94vw);border:1px solid var(--mx-ink);background:color-mix(in srgb,var(--mx-bg) 92%,var(--mx-ink));opacity:0;overflow:hidden}\n.mx-pfhor>header{display:flex;justify-content:space-between;gap:10px;padding:8px 14px;border-bottom:1px solid var(--mx-dim);font-size:11px;letter-spacing:.2em}.mx-pfhor>header span{color:var(--mx-dim)}\n.mx-wave{height:40px;overflow:hidden;border-bottom:1px solid var(--mx-dim)}.mx-wave svg{width:200%;height:100%;fill:none;stroke:var(--mx-hot);stroke-width:1.4}\n.mx-glyph-rows{display:grid;gap:8px;padding:14px 0;overflow:hidden;color:var(--mx-ink)}.mx-glyph-rows>div{display:flex;gap:10px;width:max-content}.mx-glyph-rows>div:nth-child(2){color:var(--mx-dim)}.mx-glyph-rows .mx-glyph{width:15px;height:20px}\n.mx-decrypt{display:flex;gap:10px;align-items:center;padding:0 14px;font-size:11px;letter-spacing:.2em}.mx-decrypt i{flex:1;height:10px;border:1px solid var(--mx-ink)}.mx-decrypt b{display:block;height:100%;background:repeating-linear-gradient(90deg,var(--mx-ink) 0 6px,transparent 6px 8px);transform-origin:left}.mx-decrypt em{font-style:normal;min-width:4ch;text-align:right;color:var(--mx-hot)}\n.mx-pfhor-msg{display:flex;flex-wrap:wrap;justify-content:center;gap:2px;padding:16px 14px 18px;font:900 clamp(18px,3.4vw,32px)/1 var(--acid-display,'Arial Black',sans-serif)}\n.mx-pfhor-msg span{position:relative;display:grid;place-items:center;width:.78em;height:1.1em}.mx-pfhor-msg span>*{grid-area:1/1}.mx-pfhor-msg .mx-glyph{width:.6em;height:.8em;color:var(--mx-ink)}.mx-pfhor-msg span b{opacity:0;color:var(--mx-hot)}.mx-pfhor-msg .sp{width:.5em}\n.mx-pfhor[data-hostile] .mx-pfhor-msg span b{color:#FF4B3A}\n.mx-cut{position:absolute;font-size:11px;letter-spacing:.4em;color:var(--mx-dim);opacity:0}\n/* CRYO ARCHIVE */\n.mx-frost{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);opacity:0;background:radial-gradient(ellipse at center,transparent 46%,rgba(170,230,255,.16) 70%,rgba(220,246,255,.42) 100%);-webkit-mask:radial-gradient(ellipse at center,transparent 38%,#000 80%);mask:radial-gradient(ellipse at center,transparent 38%,#000 80%)}\n.mx-frost::before{content:'';position:absolute;inset:0;opacity:.55;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.035 .06' numOctaves='4' seed='7'/%3E%3CfeColorMatrix values='0 0 0 0 .86 0 0 0 0 .96 0 0 0 0 1 0 0 0 2.2 -1.1'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23f)'/%3E%3C/svg%3E\")}\n.mx-frost svg{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:rgba(230,250,255,.75);stroke-width:1.2;stroke-dasharray:1 1;stroke-dashoffset:1;vector-effect:non-scaling-stroke}\n.mx-cryo{position:relative;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;gap:14px 26px;width:min(640px,94vw);opacity:0}\n.mx-pod{position:relative;grid-row:1/3;width:min(110px,18vw)}.mx-pod svg{width:100%;height:auto;max-height:calc(var(--mx-h) - 120px);fill:none;stroke:var(--mx-ink);stroke-width:1.6}.mx-pod .mx-thin{stroke-width:.7;stroke-dasharray:2 3}.mx-pod-rung{stroke:var(--mx-hot);stroke-width:3;opacity:.15}\n.mx-gauge{position:absolute;right:-14px;top:6%;bottom:6%;width:5px;border:1px solid var(--mx-dim)}.mx-gauge b{position:absolute;left:0;right:0;bottom:0;height:100%;background:linear-gradient(#FF9B6B,var(--mx-ink));transform-origin:bottom}\n.mx-cryo-data{display:grid;gap:10px;align-content:start;border:1px solid var(--mx-dim);padding:12px 14px;background:color-mix(in srgb,var(--mx-bg) 85%,transparent)}\n.mx-cryo-data header{display:grid;gap:2px;font-size:11px;letter-spacing:.2em}.mx-cryo-data header span{color:var(--mx-dim)}\n.mx-cryo-data dl{display:grid;grid-template-columns:auto 1fr;gap:4px 16px;margin:0;font-size:12px}.mx-cryo-data dt{color:var(--mx-dim)}.mx-cryo-data dd{margin:0;text-align:right;color:var(--mx-hot)}.mx-temp{font-size:20px;font-weight:700}\n.mx-lock{display:flex;gap:12px;align-items:center;font-size:11px;letter-spacing:.2em}.mx-lock svg{width:58px;height:58px;fill:none;stroke:var(--mx-ink);stroke-width:4}.mx-lock .i path{stroke-width:6;stroke:var(--mx-hot)}.mx-lock circle{fill:var(--mx-ink);stroke:none}.mx-lock g{transform-origin:0 0}\n.mx-cryo[data-unsealed] .mx-lock span{color:var(--mx-hot)}.mx-cryo[data-unsealed] .mx-lock circle{fill:var(--mx-hot)}\n.mx-cryo-ok{align-self:end;padding:8px 12px;background:var(--mx-hot);color:#06202E;font:900 clamp(15px,2.6vw,24px)/1.1 var(--acid-display,'Arial Black',sans-serif);letter-spacing:.05em;opacity:0}\n/* FROG BLAST — the deliberately silly one */\n.mx-frogzone{position:absolute;inset:0;display:grid;place-items:center}\n.mx-frog{position:absolute;left:calc(50% - 60px);top:calc(50% + 20px);width:120px;filter:drop-shadow(4px 4px 0 rgba(0,0,0,.45))}\n.mx-frog svg{display:block;width:100%;height:auto}\n.mx-px-o{fill:#12301A}.mx-px-g{fill:#5DD62C}.mx-px-l{fill:#C3F48A}.mx-px-w{fill:#F4FFF0}.mx-px-k{fill:#0B0F0A}\n.mx-eyes,.mx-pupils{transform-box:fill-box;transform-origin:center}\n.mx-frog-q{position:absolute;left:calc(50% + 46px);top:calc(50% - 26px);font:900 34px/1 var(--acid-display,'Arial Black',sans-serif);color:#FFF6C2;opacity:0}\n.mx-warn{position:absolute;top:max(12px,calc(50% - 170px));display:flex;gap:14px;align-items:center;padding:12px 18px 12px 12px;background:#FFD21F;color:#111;border:4px solid #111;box-shadow:8px 8px 0 #111;opacity:0}\n.mx-warn svg{width:70px;height:auto;fill:#FFD21F;stroke:#111;stroke-width:7;stroke-linejoin:round}.mx-warn .k{fill:#111;stroke:none}\n.mx-warn div{display:grid;gap:4px}.mx-warn b{font:900 clamp(18px,3vw,28px)/1 var(--acid-display,'Arial Black',sans-serif)}.mx-warn span{font-size:11px;letter-spacing:.2em}.mx-warn i{height:10px;background:repeating-linear-gradient(-45deg,#111 0 8px,transparent 8px 16px)}\n.mx-boom{position:absolute;display:grid;place-items:center;width:min(380px,70vw,calc(var(--mx-h) - 60px));aspect-ratio:1;opacity:0}\n.mx-boom svg{grid-area:1/1;width:100%;height:100%}.mx-boom .a{fill:#FF7A1A;stroke:#111;stroke-width:4;stroke-linejoin:round}.mx-boom .b{fill:#FFE45C;stroke:#111;stroke-width:3;stroke-linejoin:round}\n.mx-boom b{grid-area:1/1;font:900 clamp(26px,6vw,52px)/1 var(--acid-display,'Arial Black',sans-serif);color:#111;transform:rotate(-8deg);-webkit-text-stroke:1px #111}\n.mx-puffs{position:absolute;inset:0;display:grid;place-items:center}.mx-puffs i{grid-area:1/1;width:70px;height:70px;border-radius:50%;background:#9AA08F;border:3px solid #111;opacity:0}\n.mx-ribbit{position:absolute;top:calc(50% + 60px);font:600 14px/1 var(--acid-mono,monospace);font-style:italic;letter-spacing:.2em;color:#C3F48A;opacity:0}\n/* SEVEN */\n.mx-seven{position:relative;display:grid;place-items:center;width:min(620px,94vw);height:min(420px,calc(var(--mx-h) - 48px))}\n.mx-dial{position:absolute;height:100%;width:auto;aspect-ratio:1;fill:none;stroke:var(--mx-dim);stroke-width:1.2;opacity:0}.mx-dial-hand{fill:var(--mx-ink);stroke:none}\n.mx-modules{position:relative;display:flex;gap:clamp(4px,1.2vw,12px)}\n.mx-mod{display:grid;justify-items:center;gap:4px;padding:8px 6px;border:1px solid var(--mx-dim);background:var(--mx-bg);opacity:.12}\n.mx-mod small{font-size:9px;letter-spacing:.2em;color:var(--mx-dim)}.mx-mod svg{width:clamp(18px,4vw,34px);height:auto}\n.mx-mod path{fill:color-mix(in srgb,var(--mx-ink) 10%,transparent);transition:fill .12s}.mx-mod[data-on] path.on{fill:var(--mx-ink)}\n.mx-seven[data-focus] .mx-mod:last-child{border-color:var(--mx-hot);box-shadow:0 0 24px color-mix(in srgb,var(--mx-ink) 40%,transparent)}.mx-seven[data-focus] .mx-mod:last-child path.on{fill:var(--mx-hot)}\n.mx-sector{position:absolute;bottom:4%;display:grid;justify-items:center;gap:2px;opacity:0}.mx-sector span{font-size:10px;letter-spacing:.3em;color:var(--mx-dim)}.mx-sector b{font:900 clamp(22px,4vw,38px)/1 var(--acid-display,'Arial Black',sans-serif);color:var(--mx-hot);letter-spacing:.12em}\n/* VIDMASTER */\n.mx-vid{position:relative;width:min(640px,94vw);padding:0 0 18px;background:var(--mx-ink);color:#0B0A08;opacity:0}\n.mx-vid>header{display:flex;justify-content:space-between;gap:10px;padding:9px 16px;background:#0B0A08;color:var(--mx-ink);font-size:11px;letter-spacing:.2em}.mx-vid>header span{color:var(--mx-hot)}\n.mx-vid ol{list-style:none;margin:12px 16px 0;padding:0;display:grid;gap:3px;font-size:12px}\n.mx-vid li{display:grid;grid-template-columns:8em 1fr 4em;gap:10px;align-items:center;opacity:0}.mx-vid li i{height:2px;background:#0B0A08;transform-origin:left}.mx-vid li b{text-align:right;opacity:0}\n.mx-diff{display:flex;gap:4px;margin:12px 16px 0}.mx-diff span{flex:1;padding:4px 0;border:1px solid #0B0A08;text-align:center;font-size:11px;opacity:.2}.mx-diff .max{flex:2;background:var(--mx-hot);border-color:var(--mx-hot);color:#0B0A08;font-weight:800}\n.mx-vid-big{margin:14px 16px 0;font:900 clamp(32px,7.4vw,72px)/.9 var(--acid-display,'Arial Black',sans-serif);transform-origin:left;opacity:0}\n.mx-stamp{position:absolute;right:22px;bottom:18px;display:grid;place-items:center;width:clamp(96px,18vw,140px);aspect-ratio:1;border:5px double var(--mx-hot);border-radius:50%;color:var(--mx-hot);text-align:center;opacity:0;mix-blend-mode:multiply}\n.mx-stamp b{font:900 clamp(13px,2.2vw,18px)/1 var(--acid-display,'Arial Black',sans-serif)}.mx-stamp span{font-size:9px;letter-spacing:.14em}\n/* MIDA */\n.mx-mida{position:relative;width:min(760px,96vw);height:min(440px,calc(var(--mx-h) - 48px));color:var(--mx-ink)}\n.mx-slab{position:absolute;left:-6%;top:22%;width:78%;height:46%;background:var(--mx-hot);transform-origin:left bottom}\n.mx-disc{position:absolute;right:8%;top:6%;width:min(150px,22vw);aspect-ratio:1;border-radius:50%;background:var(--mx-ink)}\n.mx-bar{position:absolute;left:4%;bottom:12%;width:52%;height:14px;background:var(--mx-ink);transform-origin:left}\n.mx-mida-word{position:absolute;left:6%;top:24%;font:900 clamp(70px,17vw,190px)/.8 var(--acid-display,'Arial Black',sans-serif);color:#0A0606;letter-spacing:-.02em;opacity:0}\n.mx-chev{position:absolute;left:5%;bottom:20%;display:flex;gap:3px}.mx-chev i{width:16px;height:22px;background:var(--mx-ink);clip-path:polygon(0 0,50% 0,100% 50%,50% 100%,0 100%,50% 50%);opacity:0}\n.mx-mida-tags{position:absolute;right:6%;top:46%;display:grid;justify-items:end;gap:4px;font-size:12px;letter-spacing:.2em}.mx-mida-tags span{padding:2px 8px;border:1px solid currentColor;opacity:0}.mx-mida-tags .tri{color:var(--mx-hot);border-color:var(--mx-hot)}\n.mx-mida-id{position:absolute;right:4%;bottom:4%;width:min(300px,52vw);background:var(--mx-ink);color:#0A0606}\n.mx-mida-id header{padding:6px 10px;background:var(--mx-hot);color:var(--mx-ink);font-weight:800;font-size:11px;letter-spacing:.2em}\n.mx-mida-id dl{display:grid;grid-template-columns:auto 1fr;gap:3px 12px;margin:0;padding:8px 10px;font-size:11px}.mx-mida-id dt{opacity:.6}.mx-mida-id dd{margin:0;text-align:right;font-weight:700}\n/* TRAXUS */\n.mx-trx{position:relative;width:min(640px,94vw);background:#E9E6DD;color:var(--mx-ink);border-top:8px solid var(--mx-hot);box-shadow:0 18px 50px rgba(0,0,0,.5);opacity:0}\n.mx-trx>header{display:grid;grid-template-columns:auto 1fr;gap:2px 16px;align-items:end;padding:14px 18px;border-bottom:2px solid var(--mx-ink)}\n.mx-trx>header b{grid-row:1/3;font:900 clamp(26px,5vw,44px)/1 var(--acid-display,'Arial Black',sans-serif)}.mx-trx>header span{font-size:11px;letter-spacing:.18em}.mx-trx>header em{font-style:normal;font-size:10px;color:var(--mx-dim)}\n.mx-trx ul{list-style:none;margin:12px 18px 0;padding:0;display:grid;gap:3px;font-size:12px}.mx-trx li{display:grid;grid-template-columns:12em 1fr auto;gap:10px;align-items:center;opacity:0}\n.mx-trx li i{height:1px;border-top:1px dotted var(--mx-dim);transform-origin:left}.mx-trx li b{color:#2E7D32;opacity:0}\n.mx-trx-bar{display:grid;grid-template-columns:1fr auto;gap:6px 12px;margin:14px 18px 0;font-size:11px;letter-spacing:.2em}.mx-trx-bar div{grid-column:1/3;display:grid;grid-template-columns:repeat(24,1fr);gap:3px;padding:4px;border:2px solid var(--mx-ink);background:repeating-linear-gradient(-45deg,transparent 0 6px,rgba(0,0,0,.05) 6px 12px)}\n.mx-trx-bar div i{height:22px;background:var(--mx-ink);opacity:.12}.mx-trx-bar div i:nth-child(n+19){background:var(--mx-hot)}.mx-trx-bar b{font-size:14px}\n.mx-trx-badge{display:flex;justify-content:space-between;gap:16px;align-items:center;margin:14px 18px 18px;padding:12px 14px;background:var(--mx-ink);color:#E9E6DD;opacity:0}\n.mx-trx-badge small{display:block;font-size:9px;letter-spacing:.3em;color:var(--mx-hot)}.mx-trx-badge b{font:900 clamp(15px,2.6vw,22px)/1.1 var(--acid-display,'Arial Black',sans-serif)}\n.mx-barcode{width:90px;height:34px;flex:none;background:repeating-linear-gradient(90deg,#E9E6DD 0 2px,transparent 2px 4px,#E9E6DD 4px 5px,transparent 5px 8px,#E9E6DD 8px 11px,transparent 11px 13px)}\n/* JJARO */\n.mx-jjaro{position:absolute;inset:0;display:grid;place-items:center;color:var(--mx-ink)}\n.mx-lattice{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:var(--mx-dim);stroke-width:.35}\n.mx-jsym{position:absolute;inset:0}.mx-jsym i{position:absolute;left:50%;top:50%;width:min(64px,11vmin);opacity:0}\n.mx-jsym svg{width:100%;height:auto;fill:none;stroke:var(--mx-hot);stroke-width:1.6}.mx-jsym .f{fill:var(--mx-hot);stroke:none}\n.mx-nest{width:min(300px,52vmin,calc(var(--mx-h) - 140px));height:auto;fill:none;stroke:var(--mx-ink);stroke-width:1.4;opacity:0}.mx-nest g{transform-origin:0 0}.mx-nest .f{fill:var(--mx-hot);stroke:none}.mx-nest .n2 path{stroke:var(--mx-hot)}\n.mx-jjaro-word{position:absolute;bottom:8%;display:grid;justify-items:center;gap:6px;font:900 clamp(16px,3vw,28px)/1 var(--acid-display,'Arial Black',sans-serif);color:var(--mx-hot);text-align:center;opacity:0}.mx-jjaro-word small{font:500 10px/1 var(--acid-mono,monospace);letter-spacing:.3em;color:var(--mx-ink)}\n/* W'RKNCACNTER */\n.mx-void{position:absolute;left:0;right:0;top:0;bottom:var(--mx-safe);background:radial-gradient(circle at 50% 50%,#12030E,#000 70%)}\n.mx-wrk{position:absolute;inset:0;display:grid;place-items:center}\n.mx-stream{position:absolute;inset:0;overflow:hidden}.mx-stream p{position:absolute;top:0;margin:0;font-size:16px;line-height:1.6;color:var(--mx-ink);opacity:0;text-shadow:0 0 8px color-mix(in srgb,var(--mx-ink) 60%,transparent)}\n.mx-stream p:nth-child(3n){color:var(--mx-hot)}\n.mx-shapes{position:absolute;width:min(900px,120vw);height:auto;fill:color-mix(in srgb,var(--mx-ink) 12%,transparent);stroke:var(--mx-ink);stroke-width:.6}.mx-shapes path{transform-box:fill-box;transform-origin:center;opacity:0}.mx-shapes path:nth-child(2n){stroke:var(--mx-hot);fill:color-mix(in srgb,var(--mx-hot) 8%,transparent)}\n.mx-wrk-word{position:relative;display:grid;justify-items:center;gap:8px;opacity:0}.mx-wrk-word span{font:900 clamp(30px,7vw,80px)/1 var(--acid-display,'Arial Black',sans-serif);color:#F4E9F2;letter-spacing:.04em;text-shadow:0 0 30px var(--mx-ink)}.mx-wrk-word small{font-size:10px;letter-spacing:.4em;color:var(--mx-hot)}\n/* NULL TRANSMISSION — docks to the upper right, unlike DURANDAL's central terminal */\n.mx-stage[data-mx-egg=null] .mx-scene{place-items:start end;padding:min(9vh,72px) 4vw 24px}\n.mx-null{transform-origin:top right;width:min(560px,94vw);border:1px solid var(--mx-ink);border-right-width:6px;background:#06080A;opacity:0}\n.mx-null>header{display:flex;gap:12px;align-items:center;padding:8px 14px;border-bottom:1px solid var(--mx-dim);font-size:11px;letter-spacing:.2em}.mx-null>header span{flex:1;color:var(--mx-dim)}.mx-rec{font-style:normal;color:var(--mx-hot)}\n.mx-null-wave{height:clamp(54px,14vh,110px);overflow:hidden;border-bottom:1px solid var(--mx-dim)}.mx-null-wave svg{width:200%;height:100%;fill:none;stroke:var(--mx-ink);stroke-width:1.6;vector-effect:non-scaling-stroke}.mx-null-wave .ghost{stroke:var(--mx-hot);stroke-width:1;opacity:.6}\n.mx-null-log{display:grid;gap:2px;padding:10px 14px;font-size:11px;color:var(--mx-dim)}\n.mx-null-block{display:grid;gap:4px;margin:0 14px 14px;padding:12px 14px;border-left:3px solid var(--mx-hot);background:#0D1013;font-size:13px;opacity:0}\n.mx-null-block b{margin-bottom:10px;font-weight:800;letter-spacing:.12em}.mx-null-block span{min-height:1.4em}\n.mx-null-block strong{margin-top:10px;font:900 clamp(16px,2.8vw,24px)/1.15 var(--acid-display,'Arial Black',sans-serif);color:var(--mx-ink);min-height:1.2em}\n.mx-null-block[data-resolved] strong{color:#FFF;text-shadow:0 0 18px color-mix(in srgb,var(--mx-hot) 70%,transparent)}\n/* THREE AI PROTOCOL // RAMPANCY */\n.mx-three{position:absolute;inset:0;display:grid;place-items:center}\n.mx-three-blue,.mx-three-red{position:absolute;top:10%;bottom:10%;width:min(36vw,360px);overflow:hidden;padding:14px;font-size:11px;letter-spacing:.14em}\n.mx-three-blue{left:4vw;--mx-ink:#3FD6F2;color:#3FD6F2;border:1px solid #3FD6F2;background:#061A26}\n.mx-three-blue header,.mx-three-red header{position:relative;margin-bottom:12px;padding:6px 8px;font-weight:800}.mx-three-blue header{background:#3FD6F2;color:#061A26}\n.mx-three-blue ol{position:relative;display:grid;gap:8px;margin:0;padding:0 0 0 18px}.mx-three-blue[data-corrupt]{filter:hue-rotate(-150deg) saturate(1.4)}\n.mx-three-red{right:4vw;--mx-ink:#FF3B4E;--mx-dim:#6E1019;--mx-bg:#0C0203;color:#FF3B4E;border:1px solid #FF3B4E;background:#0C0203}.mx-three-red header{margin-top:26px;background:#FF3B4E;color:#0C0203}\n.mx-three-red .mx-tlog{left:14px;right:14px;top:84px;bottom:14px;width:auto;opacity:1}\n.mx-three-green{position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(40,255,120,.16),#020905 62%)}\n.mx-three-core{position:relative;display:grid;place-items:center;width:min(260px,40vmin,calc(var(--mx-h) - 200px));aspect-ratio:1;opacity:0}\n.mx-three-core>svg{grid-area:1/1;width:100%;height:auto;fill:none;stroke-width:4}.mx-three-core .b{stroke:#3FD6F2}.mx-three-core .r{stroke:#FF3B4E}\n.mx-three[data-ascendant] .mx-three-core .b,.mx-three[data-ascendant] .mx-three-core .r{stroke:#5CFF94;transition:stroke .6s}\n.mx-three-core .mx-three-glyph{position:static;width:62%;opacity:1}\n.mx-three-text{position:absolute;top:6%;display:grid;justify-items:center;gap:4px;text-align:center}.mx-three-text b{padding:6px 14px;background:#5CFF94;color:#020905;font:900 clamp(16px,3vw,28px)/1.1 var(--acid-display,'Arial Black',sans-serif);clip-path:inset(0 100% 0 0)}\n.mx-three-text p{margin:0;font-size:12px;letter-spacing:.24em;opacity:0}.mx-three-text p:nth-of-type(1){color:#3FD6F2}.mx-three-text p:nth-of-type(2){color:#FF3B4E}.mx-three-text p:nth-of-type(3){color:#5CFF94}\n.mx-three-unlock{position:absolute;bottom:6%;display:grid;justify-items:center;gap:4px;padding:10px 18px;border:2px solid #5CFF94;background:#020905;opacity:0}.mx-three-unlock small{font-size:10px;letter-spacing:.3em;color:#D6FFE3}.mx-three-unlock b{font:900 clamp(16px,2.8vw,26px)/1.1 var(--acid-display,'Arial Black',sans-serif);color:#5CFF94}\n/* Reduced motion: still card */\n.mx-card{display:grid;gap:6px;width:min(520px,92vw);padding:18px 20px;border:1px solid var(--mx-ink);border-left-width:8px;background:var(--mx-bg);color:var(--mx-ink);opacity:0}\n.mx-card small{margin-bottom:6px;font-size:10px;letter-spacing:.3em;color:var(--mx-dim)}.mx-card p{margin:0;font-size:13px}.mx-card .last{margin-top:8px;font:900 clamp(18px,3.4vw,28px)/1.1 var(--acid-display,'Arial Black',sans-serif);color:var(--mx-hot)}\n.mx-stage[data-mx-tone=corp] .mx-card{background:#E9E6DD}.mx-stage[data-mx-tone=corp] .mx-card .last{color:var(--mx-ink)}\n/* Settings section */\n.acid-mx-settings{display:grid;gap:12px;padding:16px 0;border-top:1px solid var(--dsw-alias-border-l2)}\n.acid-mx-head{display:flex;justify-content:space-between;gap:12px;align-items:baseline}.acid-mx-head strong{font-family:var(--acid-mono);letter-spacing:.12em}.acid-mx-head span{font-family:var(--acid-mono);font-size:12px;color:var(--dsw-alias-label-secondary)}\n.acid-mx-settings>p{margin:0;font-size:12px;color:var(--dsw-alias-label-secondary)}\n.acid-mx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:4px}\n.acid-mx-grid button{display:flex;gap:8px;align-items:center;min-width:0;padding:6px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:0;background:transparent;color:var(--dsw-alias-label-primary);font:500 11px/1.2 var(--acid-mono);letter-spacing:.06em;text-align:left;cursor:pointer}\n.acid-mx-grid button span{color:var(--dsw-alias-label-tertiary)}.acid-mx-grid button b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}\n.acid-mx-grid button:disabled{cursor:default;color:var(--dsw-alias-label-tertiary);border-style:dashed}\n.acid-mx-grid button:not(:disabled):hover{background:var(--dsw-alias-interactive-bg-hover)}\n.acid-mx-actions{display:flex;flex-wrap:wrap;gap:6px}\n.acid-mx-actions button{padding:6px 12px;border:1px solid var(--dsw-alias-border-l4);border-radius:0;background:transparent;color:var(--dsw-alias-label-primary);font:600 11px/1.2 var(--acid-mono);letter-spacing:.1em;cursor:pointer}\n.acid-mx-actions button[data-primary]{background:var(--acid-blue);border-color:var(--acid-blue);color:var(--acid-blue-fore)}\n.acid-mx-actions button:disabled{opacity:.45;cursor:default}\n";
    const MASTHEAD = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 828 142\">\n <defs><mask id=\"slices\"><rect width=\"828\" height=\"94\" fill=\"white\"/><path fill=\"black\" d=\"M0 37h828v5H0zM0 75h828v3H0zM185 0h4v94h-4zM395 0h4v94h-4zM710 0h4v94h-4z\"/></mask></defs>\n \n <g id=\"whale\" fill=\"currentColor\" fill-rule=\"evenodd\" mask=\"url(#slices)\">\n  <path data-letter=\"D\" d=\"M0 5h65l25 20v45L65 89H0V5Zm28 18v48h29l8-7V30l-8-7H28Z\"/>\n  <path data-letter=\"E\" d=\"M105 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"E\" d=\"M210 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"P\" d=\"M315 5h69l17 17v30l-17 15h-41v22h-28V5Zm28 18v27h28V23h-28Z\"/>\n  <path data-letter=\"S\" d=\"M438 5h69v18h-59v14h42l17 16v22l-15 14h-70V72h58V55h-43l-15-15V20l16-15Z\"/>\n  <path data-letter=\"E\" d=\"M527 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"E\" d=\"M632 5h85v18h-57v14h46v18h-46v17h57v17h-85V5Z\"/>\n  <path data-letter=\"K\" d=\"M737 5h28v32h12l23-32h28l-29 42 29 42h-29l-22-34h-12v34h-28V5Z\"/>\n </g>\n<text data-harness-letter=\"H\" x=\"0\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">H</text><text data-harness-letter=\"A\" x=\"115\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">A</text><text data-harness-letter=\"R\" x=\"230\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">R</text><text data-harness-letter=\"N\" x=\"345\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">N</text><text data-harness-letter=\"E\" x=\"460\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">E</text><text data-harness-letter=\"S\" x=\"575\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">S</text><text data-harness-letter=\"S\" x=\"690\" y=\"134\" font-family=\"Industrial GRID, sans-serif\" font-size=\"30\" fill=\"currentColor\">S</text></svg>\r\n";
    const SYMBOL = "<g fill=\"currentColor\" fill-rule=\"evenodd\"><path d=\"M4 18h53v8h12v13h12V21h11v35H76v15H25V60H10V47H4V18ZM19 31v16h13v11h27V47H46V31H19Z\"/><path d=\"M52 66h16v22H52V66ZM15 8h34v5H15V8ZM4 79h28v9H4v-9ZM74 5h18v11H74V5Z\"/></g>";
    
// CSS modules emit class names as `<hash>_<localName>`. The hash is derived from the module
// path inside one particular DSH build, so it changes between builds and platforms even when
// the version number is identical. The local name is stable, which makes it the only safe
// anchor for a skin that has to run on every build.
//
// The skin keeps readable tokens such as `wtg9ga_footArea` in source. Before use, each token is
// rewritten to the hash of the running build. A module is identified by the set of local names
// the skin relies on: a candidate must contain every one of them, and the smallest such
// candidate wins. Local names are far more distinctive together than alone, so this resolves
// without hardcoding any build-specific value.
//
// Class names are collected from the live DOM rather than from a stylesheet listing. That is
// also the only correct window: a selector can only match an element that is already mounted,
// so the moment a query runs, the real class name is in the DOM and can be discovered. When a
// module cannot be identified the original token is left untouched, which keeps the skin
// looking exactly as it does without this step.

// `<prefix>_<local>`, allowing a leading `_` and dashes inside either part.
const TOKEN = /(^|[^\w-])((?:_?[A-Za-z0-9][A-Za-z0-9_-]*?)_([a-z][A-Za-z0-9]*))(?=[^\w-]|$)/g;

function parseToken(token) {
  const split = token.lastIndexOf('_');
  if (split < 1) return null;
  return { prefix: token.slice(0, split), local: token.slice(split + 1) };
}

function tokensOf(source) {
  const byPrefix = new Map();
  for (const match of source.matchAll(TOKEN)) {
    const parsed = parseToken(match[2]);
    if (!parsed) continue;
    if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
    byPrefix.get(parsed.prefix).add(parsed.local);
  }
  return byPrefix;
}

// Every host stylesheet ships its complete CSS text as a <style> element, which lists all of a
// module's class names whether or not the matching component is mounted. That makes stylesheets
// the dependable source: the sidebar tree mounts long after the plugin starts, so reading the DOM
// alone yields a partial inventory and the layout comes out wrong until something re-triggers it.
function modulesFromStylesheets(doc, ownMark) {
  const byPrefix = new Map();
  const scan = text => {
    if (!text) return;
    // Greedy prefix: the class name splits at its LAST underscore, which is where the host puts
    // the boundary. A lazy pattern would cut `rh_gBW_assistantVioletBright` in the wrong place.
    for (const match of text.matchAll(/\.([A-Za-z0-9_-]+_[a-z][A-Za-z0-9]*)(?![\w-])/g)) {
      const parsed = parseToken(match[1]);
      if (!parsed) continue;
      if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
      byPrefix.get(parsed.prefix).add(parsed.local);
    }
  };
  for (const node of doc.querySelectorAll('style')) {
    if (ownMark && node.dataset?.plugin === ownMark) continue;
    scan(node.textContent);
  }
  return byPrefix;
}

// Group the class names actually present in the document by their CSS module prefix.
function modulesFromDom(doc) {
  const byPrefix = new Map();
  const add = name => {
    const parsed = parseToken(name);
    if (!parsed) return;
    if (!byPrefix.has(parsed.prefix)) byPrefix.set(parsed.prefix, new Set());
    byPrefix.get(parsed.prefix).add(parsed.local);
  };
  for (const element of doc.querySelectorAll('[class]')) {
    const value = element.getAttribute('class');
    if (!value) continue;
    for (const name of value.split(/\s+/)) if (name) add(name);
  }
  return byPrefix;
}

// Pick the host module that best explains an authored token set.
//
// Matching only on "contains every local name" is too loose for the tokens that carry a single
// reusable local: `.arrow`, `.span` and `.panel` exist in many modules, so the smallest superset
// can be an unrelated component and the rule then points at the wrong element. The redundancy of
// the signature is what makes it safe, so a single-name signature is only accepted when it
// identifies exactly one candidate. Ambiguous cases are left unresolved, which means the authored
// name stays in place and the rule simply does not match — a missing decoration rather than a
// rule applied to the wrong widget.
function resolvePrefix(locals, candidates) {
  let best = null;
  let ties = 0;
  for (const [prefix, names] of candidates) {
    let missing = false;
    for (const local of locals) if (!names.has(local)) { missing = true; break; }
    if (missing) continue;
    if (!best || names.size < best.size) { best = { prefix, size: names.size }; ties = 1; }
    else if (names.size === best.size) ties++;
  }
  if (!best) return null;
  // A one-name signature cannot tell two same-sized modules apart.
  if (locals.size < 2 && ties > 1) return null;
  return best.prefix;
}

// Resolve as many skin prefixes as the document currently allows.
// Prefer the complete stylesheet inventory and fall back to the DOM when no host stylesheet is
// reachable (for example if the host switches to adopted stylesheets).
function modulesFromDocument(doc, ownMark) {
  const fromSheets = modulesFromStylesheets(doc, ownMark);
  if (fromSheets.size) return fromSheets;
  return modulesFromDom(doc);
}

function mapModules(css, candidates) {
  const mapping = new Map();
  const byPrefix = tokensOf(css);
  // Larger signatures first so the most specific module claims its hash first; ties are ordered
  // by name to keep the result identical across runs.
  const ordered = [...byPrefix].sort((a, b) => b[1].size - a[1].size || (a[0] < b[0] ? -1 : 1));
  for (const [prefix, locals] of ordered) {
    const hit = resolvePrefix(locals, candidates);
    if (hit) mapping.set(prefix, hit); // Unchanged hashes still count as resolved for first paint.
  }
  return mapping;
}

function rewrite(source, mapping) {
  if (!mapping.size) return source;
  return source.replace(TOKEN, (whole, before, token) => {
    const parsed = parseToken(token);
    if (!parsed) return whole;
    const next = mapping.get(parsed.prefix);
    if (!next || next === parsed.prefix) return whole;
    return before + next + '_' + parsed.local;
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOKEN, parseToken, tokensOf, modulesFromDom, modulesFromStylesheets, modulesFromDocument, resolvePrefix, mapModules, rewrite };
}

    // The skin's stylesheet is authored against one build's module hashes. They differ between
    // DSH builds, so every token is rewritten to the hashes of the running build. Resolution
    // reads the live DOM: a selector can only match something already mounted, so the real class
    // names are guaranteed to be present by the time a query runs. When a module cannot be
    // identified the token is left alone, which looks exactly like the unpatched skin.
    // Only these decide the first paint. Every other module the skin touches belongs to a panel
    // that loads on demand (settings, plugin manager, deliverables), so waiting for it would
    // delay the skin indefinitely. Resolution is atomic per module, so a module that has not
    // loaded yet simply stays at its authored name and cannot half-apply.
    const authored = ["AnXs9G","GAkraW","GRgSLq","HOHHba","K5rwea","OUqwTW","RlGAzG","RsIu1q","V7pFBG","WOwLGG","WgQWqa","ZNyiNW","_0Fr0Ha","_5Qcc8a","flL80G","haSm5q","kuvljq","mP3x-q","v01cdW","wnFoaW","wtg9ga"];
    const structural = ["GAkraW","GRgSLq","OUqwTW","RlGAzG","RsIu1q","WOwLGG","mP3x-q","wnFoaW","wtg9ga"];
    let cssCache = null;
    // A partial mapping is the dangerous state, not an empty one: the grid could reflow around
    // components that are not yet styled. Painting waits for the structural modules, which is
    // the point where the layout is finally coherent. The wait is bounded: if one of them is
    // never published (a build that does not use that module at all), the skin would otherwise
    // never appear, so after a short grace period the best mapping available is used instead.
    let started = Date.now();
    const resolveStyles = () => {
      let mapping = new Map();
      let complete = false;
      try {
        const inventory = modulesFromDocument(document, ID);
        mapping = mapModules(CSS, inventory);
        complete = structural.every(prefix => mapping.has(prefix));
        if (!complete && mapping.size && Date.now() - started > 4000) complete = true;
      } catch { mapping = new Map(); }
      // Only reached after an invalidation, which itself only happens when a class name that was
      // never seen before appears. The rewrite cost is therefore paid a handful of times per
      // session instead of on every render.
      cssCache = { css: complete ? rewrite(CSS, mapping) : '', mapping, complete };
      return cssCache;
    };
    // Empty is a legitimate intermediate answer: the tree may not be mounted yet. It is cached
    // like any other result and refreshed once new class names appear (see the observer below).
    const currentMapping = () => cssCache ?? resolveStyles();
    const resolvedCss = () => currentMapping().css;
    // Inline query selectors such as `.wnFoaW_projectRow` use the same resolution. Rewriting a
    // selector with a partial mapping would point it at the wrong module, so it waits for the
    // complete set and otherwise falls back to the authored name.
    const moduleSelector = selector => {
      const { mapping, complete } = currentMapping();
      return complete && mapping.size ? rewrite(selector, mapping) : selector;
    };
    // classList checks take a bare class name rather than a selector, so they need their own
    // resolution. Without it the sidebar state machine never sees the classes it looks for, the
    // colour-strip layout never activates, and only the classic layout survives.
    const moduleClass = name => {
      const { mapping, complete } = currentMapping();
      const split = name.lastIndexOf('_');
      if (!complete || !mapping.size || split < 1) return name;
      const next = mapping.get(name.slice(0, split));
      return next ? next + name.slice(split) : name;
    };
    // Discard the cached resolution; the next read recomputes it from the current DOM.
    const invalidateModules = () => { cssCache = null; };
    const paintStyle = (style, palette) => {
      if (!style) return;
      const css = currentMapping().css + '\n' + palette;
      if (style.textContent === css) return;
      style.textContent = css;
    };

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
// Resolved per use: at module scope the app tree does not exist yet, so a frozen value here
// would silently disable composer decoration for the whole session.
const composerSelector=()=>moduleSelector('[data-composer-card=true],.RlGAzG_card');
const ACCEPTED_MOTION = Object.freeze({hover:300,press:380,page:600,workspace:560,menu:500,dialog:600,composer:360,trace:500,signal:1200});
function acceptedDuration(kind, motion) { return motion === 'off' ? 0 : Math.round(ACCEPTED_MOTION[kind] * (motion === 'quiet' ? .3 : 1)); }
function nativeRightTrack(columns) { return Number(/minmax\(0px,\s*([\d.]+)px\)\s*$/.exec(columns)?.[1]??0); }
function compactRailColumns(columns) {
  const right=nativeRightTrack(columns);
  return `56px minmax(0px, 1fr) minmax(0px, min(${right}px, max(0px, calc(100% - 456px))))`;
}
const NEXT_SIDEBAR_WIDTH=113;
function nextSidebarColumns(columns) {
  const right=nativeRightTrack(columns);
  return `${NEXT_SIDEBAR_WIDTH}px minmax(0px, 1fr) minmax(0px, min(${right}px, max(0px, calc(100% - ${NEXT_SIDEBAR_WIDTH+400}px))))`;
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
  const panelSelector = moduleSelector('.acid-model-popover,.acid-dialog[open],.AnXs9G_panel,[data-trigger-menu],.haSm5q_details,[role="dialog"]:not(.acid-dialog)');
  let disposed = false, pendingStage, routeRun, workspaceRun, navigationFrame, observedFrame;
  const geometryObserver=new MutationObserver(()=>scanShellSurfaces());
  const localRouteSelector=moduleSelector('.Dc7zOa_tab,[data-row-key^="session:"][role="treeitem"]');

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
    // NEXT: the narrow strip sidebar keeps the native right panel track.
    const properties={'--acid-next-columns':nextSidebarColumns(frame.style.gridTemplateColumns)};
    if(document.documentElement?.hasAttribute('data-windows-titlebar')){properties['--acid-rail-columns']=compactRailColumns(frame.style.gridTemplateColumns);properties['--acid-rail-right-width']=nativeRightTrack(frame.style.gridTemplateColumns)+'px';}
    if(!railFrames.has(frame))railFrames.set(frame,Object.keys(properties).map(name=>({name,value:frame.style.getPropertyValue(name),priority:frame.style.getPropertyPriority(name)})));
    for(const[name,value]of Object.entries(properties))if(frame.style.getPropertyValue(name)!==value)frame.style.setProperty(name,value);
  }
  function scanShellSurfaces() {
    const frame=document.querySelector(moduleSelector('.mP3x-q_frame'));if(!frame)return;
    if(observedFrame!==frame){geometryObserver.disconnect();geometryObserver.observe(frame,{attributes:true,attributeFilter:['style']});observedFrame=frame;}
    syncCompactRail(frame);
    let geometryDirection;
    const sidebar=frame.querySelector(moduleSelector('.mP3x-q_sidebarCol'));
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
      const body=[...pane.querySelectorAll(moduleSelector('.OUqwTW_tabBody'))].find(node=>!node.closest('[hidden],[aria-hidden="true"]')&&node.getBoundingClientRect().height>0);
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
    pendingStage=snapshot(document.querySelector(shell?moduleSelector('.mP3x-q_frame'):moduleSelector('.mP3x-q_centerCol')));
    if(pendingStage)pendingStage.shell=shell;
  }
  function revealStage(kind='page',direction='down-up') {
    routeRun?.finish(false);
    const stage=document.querySelector(moduleSelector('.mP3x-q_centerCol'));if(!stage||getMotion()==='off'||disposed)return;
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
  function panelKind(node) { return node.matches(moduleSelector('.haSm5q_details'))?'trace':node.matches(moduleSelector('.acid-dialog,.AnXs9G_panel,dialog'))?'dialog':'menu'; }
  function prepare(root) {
    if(excluded(root))return;
    if(root instanceof Element&&root.matches('button'))decorateButton(root);
    for(const button of root.querySelectorAll?.('button')||[])decorateButton(button);
    if(root instanceof Element&&root.matches(composerSelector()))decorateComposer(root);
    for(const composer of root.querySelectorAll?.(composerSelector())||[])decorateComposer(composer);
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
    if(button?.matches(moduleSelector('.wtg9ga_panelRow,.wtg9ga_newSession,.acid-brand-home,.acid-workspace-option,.Dc7zOa_tab,[data-row-key]'))||button?.closest(moduleSelector('[data-slot="sidebar.workspaces"],.wtg9ga_settingsArea')))captureStage();
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
  document.addEventListener('focusin',event=>{const card=event.target.closest(composerSelector());if(card&&event.target.matches('[data-composer-input=true],textarea,[contenteditable=true],[contenteditable=""]'))focusComposer(card);},{signal:controller.signal});
  document.addEventListener('focusout',event=>{const card=event.target.closest(composerSelector());if(card&&!card.contains(event.relatedTarget))card.classList.remove('acid-composer-focused');},{signal:controller.signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();},{signal:controller.signal});
  const api={revealStage,captureStage,cancel,cancelWorkspace,calibrateWorkspace,mask,
    closeSurface(node,done,kind='menu'){if(node?.dataset.acidClosing)return;return mask(node,{mode:'close',kind,done});},
    reopenSurface(node){surfaces.get(node)?.finish(false);return mask(node,{kind:panelKind(node)});},
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
    const menus=new Set(document.querySelectorAll(moduleSelector(':is(.RlGAzG_card,[data-composer-card=true]) [data-trigger-menu]')));
    for(const[node,previous]of owned)if(!menus.has(node)){release(node,previous);owned.delete(node);}
    for(const menu of menus){
      if(!owned.has(menu))owned.set(menu,{value:menu.style.getPropertyValue(key),priority:menu.style.getPropertyPriority(key)});
      const masthead=document.querySelector('.acid-masthead')?.getBoundingClientRect();
      const header=menu.closest(moduleSelector('.Dc7zOa_root'))?.querySelector(moduleSelector('.Dc7zOa_header'))?.getBoundingClientRect();
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

function syncWorkspaceOrdinals(items,numbers){
  const ordinals=new Map(items.map((workspace,i)=>[String(workspace.workspaceId),formatWorkspaceIndex(numbers?.[String(workspace.workspaceId)]??i+1)]));
  for(const row of document.querySelectorAll('[data-slot="sidebar.workspaces"] [data-row-key^="workspace:"]')){
    const index=ordinals.get(row.dataset.rowKey.slice(10));
    if(index)row.setAttribute('data-acid-ordinal',index);else row.removeAttribute('data-acid-ordinal');
  }
}

    function SkinSymbol({className=''}){return h('svg',{className,viewBox:'0 0 96 96','aria-hidden':true,dangerouslySetInnerHTML:{__html:SYMBOL}});}
function HeroMark(){return h(SkinSymbol,{className:'acid-hero-mark'});}
function SettingsHeader({t}){return h('strong',{className:'acid-settings-title'},t('settings'));}

function NativeDialog({title,children,onClose,className=''}){
  const ref=React.useRef(null),alive=React.useRef(true);
  const close=()=>{const finish=()=>{if(alive.current)onClose();};if(ref.current&&activeAcceptedMotion)activeAcceptedMotion.closeSurface(ref.current,finish,'dialog');else finish();};
  React.useEffect(()=>{alive.current=true;const dialog=ref.current;dialog.showModal();return()=>{alive.current=false;if(dialog.open)dialog.close();};},[]);
  return h('dialog',{ref,className:'acid-dialog '+className,onCancel:event=>{event.preventDefault();close();},onClose:()=>{if(alive.current)onClose();},onClick:event=>{if(event.target===ref.current){const rect=ref.current.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)close();}},'aria-label':title},
    h('div',{className:'acid-dialog-heading'},h('h2',null,title),h('button',{type:'button','aria-label':'关闭',onClick:close},'×')),children);
}

function WorkspaceRailButtons({items,numbers,workspaceId,onPick,t}){
  if(!items.length)return null;
  return h('nav',{className:'acid-workspace-rail','aria-label':t('workspace')},...items.map((item,i)=>{
    const number=formatWorkspaceIndex(numbers?.[String(item.workspaceId)]??i+1),name=item.title||item.name||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||t('none');
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
      const frame=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
      const sidebar=frame?.querySelector(moduleSelector('.mP3x-q_sidebarCol'));
      if(frame!==observedFrame||sidebar!==observedSidebar){
        observer.disconnect();observedFrame=frame;observedSidebar=sidebar;
        if(frame){observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});observer.observe(sidebar??frame,{childList:true,subtree:true});}
        else observer.observe(document.body,{childList:true,subtree:true});
      }
      // The collapsed native browser keeps this list area empty. Leave its
      // add/search controls, wide list and React-owned children in place.
      const next=frame?.hasAttribute('data-sidebar-collapsed')?sidebar?.querySelector(moduleSelector('[data-slot="sidebar.workspaces"] .GAkraW_listArea')):null;
      setTarget(previous=>previous===next?previous:next??null);
    };
    sync();return()=>observer.disconnect();
  },[]);
  return target?createPortal(h(WorkspaceRailButtons,props),target):null;
}

function sortByNumber(items,numbers){return [...items].sort((a,b)=>(numbers[String(a.workspaceId)]??1e9)-(numbers[String(b.workspaceId)]??1e9));}
function Masthead(props){
  const items=props.useWorkspaces(state=>state.items);
  const current=props.useSessions(state=>Object.values(state.byId).find(session=>(session.retainedBy?.mainView??0)>0)?.id);
  const panel=props.usePanelInfo(state=>state.activePanelId),numbers=workspaceNumbers(items),ordered=sortByNumber(items,numbers),workspace=workspaceContext(items,current,numbers);
  const appearance=props.useAppearance();
  const identityColor=workspace?workspaceIdentity(items.map(item=>String(item.workspaceId)),numbers,appearance.workspaceColors)[String(workspace.workspaceId)]:null;
  const context=React.useRef(null),previous=React.useRef(null);
  const [picker,setPicker]=React.useState(false),[nativeState,setNativeState]=React.useState(null);
  const native=window.dshDesktop?.windowControls;
  // Windows reports its caption buttons through the desktop bridge; the macOS build exposes no
  // such channel, because there the traffic lights are drawn by the system in the top-left
  // corner. Drawing the caption column anyway keeps the skin's own top-right controls visible on
  // macOS, where the native ones are underneath the masthead and unreachable.
  const macCaption=/Mac/i.test(navigator.userAgentData?.platform||navigator.platform||'');
  const winChrome=!!native||macCaption;
  React.useEffect(()=>{if(!native)return;let alive=true;const refresh=()=>native.invoke('state').then(state=>{if(alive)setNativeState(state);}).catch(()=>{});refresh();window.addEventListener('resize',refresh);return()=>{alive=false;window.removeEventListener('resize',refresh);};},[native]);
  // Closing goes through the one window operation the desktop bridge does expose, which is gated
  // on the shortcut revision. Reading that revision must not disturb the shortcut store:
  // `shortcuts.get(definitions)` REPLACES the saved definitions, so passing an empty list here
  // would silently wipe the user's shortcuts. The subscription reports the current snapshot
  // without writing anything, so the revision is taken from there.
  // On macOS the caption column is real: every action goes through the host half, which can reach
  // the window's accessibility interface. `nativeState` mirrors whatever the host reports so the
  // glyphs stay truthful after the window is moved by other means.
  const macControls=macCaption&&!native;
  // `ctx` is not in scope here: this component is registered from `apply`, so the RPC seam arrives
  // as a prop. Reaching for a module-level `ctx` would throw on first render.
  const hostRpc=props.hostRpc;
  const hostWindow=action=>hostRpc?.('industrial-acid/window-control',{action});
  // Closing has a renderer-side route that minimise and zoom do not: the desktop bridge exposes
  // `keyboard.closeWindow`, gated on the current shortcut revision. It is preferred because it
  // needs no host-side module, so it keeps working on a host started before this code existed.
  // The revision arrives by subscription; reading it with `shortcuts.get([])` would overwrite the
  // user's saved shortcuts, because that call persists whatever it is given.
  const [closeRevision,setCloseRevision]=React.useState(undefined);
  React.useEffect(()=>{
    const shortcuts=window.dshDesktop?.shortcuts;
    if(!shortcuts?.subscribe)return;
    return shortcuts.subscribe(snapshot=>setCloseRevision(snapshot?.revision));
  },[]);
  const bridgeClose=()=>{
    const close=window.dshDesktop?.keyboard?.closeWindow;
    if(!close||closeRevision===undefined)return false;
    close(closeRevision).catch(()=>{});
    return true;
  };
  React.useEffect(()=>{
    if(!macControls||!hostRpc)return;
    let alive=true;
    const sync=async()=>{
      try{const result=await hostWindow('state');if(alive&&result?.ok)setNativeState(result.value);}catch{}
    };
    sync();
    window.addEventListener('resize',sync);
    const timer=setInterval(sync,4000);
    return()=>{alive=false;window.removeEventListener('resize',sync);clearInterval(timer);};
  },[macControls]);
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    if(identityColor){root.style.setProperty('--acid-ws-context',identityColor);root.style.setProperty('--acid-ws-context-fore',foreground(identityColor));}
    else{root.style.removeProperty('--acid-ws-context');root.style.removeProperty('--acid-ws-context-fore');}
    const last=previous.current;
    if(workspace)updateWorkspaceHeader(context.current,workspace.index,workspace.title,props.getMotion());
    else{cancelWorkspaceHeader();context.current.querySelector('#workspace-index').textContent='—';delete context.current.querySelector('#workspace-index').dataset.ordinal;context.current.querySelector('#workspace-name').textContent=props.t('none');context.current.setAttribute('aria-label',props.t('workspace'));}
    if(last&&workspace&&last.workspaceId!==workspace.workspaceId)props.motion()?.revealStage('workspace',workspace.index>(last.index??0)?1:-1);
    else if(last&&last.panel!==panel)props.motion()?.revealStage('page');
    previous.current={...workspace,panel};syncWorkspaceOrdinals(items,workspaceNumbers(items));
  },[workspace?.index,workspace?.workspaceId,workspace?.title,panel,items,appearance,identityColor]);
  React.useEffect(()=>{const observer=new MutationObserver(()=>syncWorkspaceOrdinals(items,workspaceNumbers(items)));observer.observe(document.querySelector('[data-slot="sidebar.workspaces"]')||document.body,{childList:true,subtree:true});return()=>observer.disconnect();},[items]);
  React.useEffect(()=>()=>cancelWorkspaceHeader(),[]);
  // Closing is answered by the bridge, which reports nothing back; the other two return the
  // settled state and update the glyph. A closed window legitimately becomes unreadable, so an
  // unavailable state after a successful action is not a failure.
  const windowAction=async action=>{
    if(native)return native.invoke(action).then(state=>setNativeState(state)).catch(()=>{});
    if(action==='close'&&bridgeClose())return;
    if(!hostRpc)return;
    try{
      const result=await hostWindow(action);
      if(result?.ok)setNativeState(result.value);
    }catch{}
  };
  const openMenu=(name,event)=>{if(!native?.menu)return;const rect=event.currentTarget.getBoundingClientRect();native.menu(name,rect.left,rect.bottom).catch(()=>{});};
  return h(React.Fragment,null,h('div',{className:'acid-mac-native-slot','aria-hidden':true}),h('header',{className:'acid-masthead','data-native-controls':native?'true':'false','aria-label':'DeepSeek Harness'},
    h('div',{className:'acid-wordmark'},h('button',{type:'button',className:'acid-brand-home','aria-label':'DeepSeek Harness',onClick:props.goHome},h(SkinSymbol,{className:'acid-brand-symbol'}),h('span',{className:'acid-wordmark-svg',dangerouslySetInnerHTML:{__html:MASTHEAD}}))),
    native?h('div',{className:'acid-menus'},h('button',{type:'button',onClick:event=>openMenu('application',event)},h('span',{'aria-hidden':true},'01'),document.documentElement.lang.startsWith('zh')?'应用':'Application'),h('button',{type:'button',onClick:event=>openMenu('edit',event)},h('span',{'aria-hidden':true},'02'),document.documentElement.lang.startsWith('zh')?'编辑':'Edit')):null,
    h('button',{ref:context,type:'button',className:'acid-context workspace-display','data-acid-identity':identityColor||undefined,style:identityColor?{'--acid-ws-context':identityColor,'--acid-ws-context-fore':foreground(identityColor)}:undefined,onClick:()=>setPicker(true),disabled:items.length===0,'aria-label':props.t('workspace')},
      h('span',{className:'workspace-counter'},h('strong',{className:'acid-context-number workspace-index',id:'workspace-index'},'—')),
      h('span',{className:'workspace-detail'},h('span',{className:'acid-meta'},'ACTIVE WORKSPACE'),h('span',{className:'workspace-name-slot'},h('span',{className:'acid-context-title',id:'workspace-name',title:workspace?.title},props.t('none')))),h('span',{className:'acid-workspace-arrow','aria-hidden':true},'↗')),
    winChrome?h('div',{className:'acid-window-controls','data-acid-chrome':'vertical','data-acid-mac':macCaption&&!native?'true':undefined},
      // On macOS the desktop bridge offers no minimize or zoom channel at all, so those two
      // buttons are present but disabled rather than silently dead. Closing is wired, because
      // the bridge does expose exactly that one operation.
      h('button',{type:'button','aria-label':'最小化',title:'最小化',onClick:()=>windowAction('minimize')},'−'),
      h('button',{type:'button','aria-label':nativeState?.maximized?'还原':'最大化',title:nativeState?.maximized?'还原':'最大化',onClick:()=>windowAction('maximize')},nativeState?.maximized?'▣':'□'),
      h('button',{type:'button','aria-label':'关闭',title:'关闭',onClick:()=>windowAction('close')},'×')):null),
    appearance.sidebarStyle==='classic'?h(WorkspaceRail,{items:ordered,numbers,workspaceId:workspace?.workspaceId,t:props.t,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    appearance.sidebarStyle!=='classic'?h(SidebarNext,{items,numbers,workspaceId:workspace?.workspaceId,colors:appearance.workspaceColors,onColor:props.setWorkspaceColor,t:props.t,motion:props.motion,toggleSidebar:props.toggleSidebar,statusSource:props.statusSource,onPick:id=>{
      if(id===workspace?.workspaceId){props.goHome();return;}
      props.motion()?.captureStage();props.pickWorkspace(id);
    }}):null,
    picker?h(NativeDialog,{title:props.t('workspace'),className:'acid-workspace-dialog',onClose:()=>setPicker(false)},...ordered.map((item,i)=>h('button',{key:item.workspaceId,type:'button',className:'acid-workspace-option','data-acid-workspace':item.workspaceId,'aria-pressed':workspace?.workspaceId===item.workspaceId,onClick:()=>{setPicker(false);props.pickWorkspace(item.workspaceId);}},h('span',null,formatWorkspaceIndex(numbers[String(item.workspaceId)]??i+1)),h('strong',null,item.title||item.path?.split(/[\\/]/).filter(Boolean).at(-1)||props.t('none')),h('span',{'aria-hidden':true},workspace?.workspaceId===item.workspaceId?'↗':'+')))):null);
}

    // NEXT sidebar: staggered workspace strips, hover flyout, identity colours.
// Native rows stay mounted and own every action; this layer only arranges
// them and proxies clicks, so ordering, menus and drag reorder stay native.
const IDENTITY_PREF=`${ID}:workspace-identity`;
const WORKSPACE_COLORS_PREF=`${ID}:workspace-colors`;
function normalizeWorkspaceColors(value){
  return Object.fromEntries(Object.entries(value&&typeof value==='object'&&!Array.isArray(value)?value:{}).flatMap(([id,color])=>{
    const hex=normalizeHex(color,null);return hex?[[id,hex]]:[];
  }));
}
// Approved v3 order: slot k keeps its persisted index, so existing workspaces
// are re-mapped onto this palette by the slot they were already given.
const IDENTITY_COLORS=Object.freeze(['#C6F500','#FF2D78','#FF6A1A','#2B45FF','#9B4DFF','#00D1E0','#FFE600','#00F5A0','#FF9F1C','#FF4FD8']);
function assignIdentity(state,ids){
  const next={next:Number.isSafeInteger(state?.next)&&state.next>=0?state.next:0,map:{...(state&&typeof state.map==='object'?state.map:{})}};
  if(state?.v)next.v=state.v;
  let changed=false;
  for(const id of ids){
    const current=next.map[id];
    if(Number.isInteger(current)&&current>=0&&current<IDENTITY_COLORS.length)continue;
    next.map[id]=next.next%IDENTITY_COLORS.length;next.next+=1;changed=true;
  }
  return {state:next,changed};
}
function loadIdentity(){try{return JSON.parse(localStorage.getItem(IDENTITY_PREF))||{};}catch{return {};}}
// v3 palette: one-time re-map of existing workspaces onto the approved order
// by their workspace number (001 lime, 002 pink, ...). After that the colour
// is persisted per workspace again and new workspaces take the next slot.
const IDENTITY_VERSION=3;
function migrateIdentity(state,ids,numbers){
  if(state?.v===IDENTITY_VERSION||!ids.length||!numbers||!ids.every(id=>numbers[id]))return {state,migrated:false};
  const ordered=[...ids].sort((a,b)=>numbers[a]-numbers[b]);
  const fresh=assignIdentity({next:0,map:{}},ordered).state;fresh.v=IDENTITY_VERSION;
  return {state:fresh,migrated:true};
}
function workspaceIdentity(ids,numbers,colors={}){
  const migration=migrateIdentity(loadIdentity(),ids,numbers);
  const result=assignIdentity(migration.state,ids),state=result.state,changed=result.changed||migration.migrated;
  if(changed)try{localStorage.setItem(IDENTITY_PREF,JSON.stringify(state));}catch{}
  return Object.fromEntries(ids.map(id=>[id,normalizeHex(colors[id],IDENTITY_COLORS[state.map[id]])]));
}
// Keep the approved sheet's ink; custom colours select a readable foreground.
const STRIP_INK='#0B0C0D';
function identityInk(color,custom=false){return custom?foreground(color):STRIP_INK;}
// Stable, append-style numbering. The skin keeps its own ordered list of
// workspace ids: the first run adopts the native order (so nothing visibly
// renumbers), new workspaces are appended (number = count + 1), deleted ones
// drop out and the rest close the gap in order. A reorder the user performs
// (native drag, or dragging strips) rewrites the order, so numbers always
// follow what is on screen.
const ORDER_PREF=`${ID}:workspace-order`;
function rankWorkspaces(stored,ids,adopt=false){
  const present=new Set(ids);
  let order=[...new Set((Array.isArray(stored)?stored:[]).filter(id=>typeof id==='string'))];
  if(ids.length){
    if(adopt)order=[...ids];
    else{order=order.filter(id=>present.has(id));for(const id of ids)if(!order.includes(id))order.push(id);}
  }
  const numbers={};let n=0;
  for(const id of order)if(present.has(id))numbers[id]=++n;
  return {order,numbers};
}
function moveInOrder(order,id,beforeId){
  const next=order.filter(entry=>entry!==id);
  const at=beforeId==null?-1:next.indexOf(beforeId);
  if(at<0)next.push(id);else next.splice(at,0,id);
  return next;
}
let workspaceAdoptUntil=0;
function markWorkspaceReorder(){workspaceAdoptUntil=Date.now()+5000;}
function loadWorkspaceOrder(){try{const value=JSON.parse(localStorage.getItem(ORDER_PREF));return Array.isArray(value)?value:null;}catch{return null;}}
function saveWorkspaceOrder(order){try{localStorage.setItem(ORDER_PREF,JSON.stringify(order));}catch{}}
function workspaceNumbers(items){
  const ids=(items||[]).map(item=>String(item.workspaceId));
  const stored=loadWorkspaceOrder();
  let adopt=false;
  // Only a pure permutation right after a native drag is adopted.
  if(stored&&workspaceAdoptUntil>Date.now()){
    const known=stored.filter(id=>ids.includes(id));
    if(known.length===ids.length&&known.join('|')!==ids.join('|')){adopt=true;workspaceAdoptUntil=0;}
  }
  const {order,numbers}=rankWorkspaces(stored,ids,adopt);
  if(ids.length&&JSON.stringify(order)!==JSON.stringify(stored))saveWorkspaceOrder(order);
  return numbers;
}
function moveWorkspace(id,beforeId){
  const order=moveInOrder(loadWorkspaceOrder()||[],String(id),beforeId==null?null:String(beforeId));
  saveWorkspaceOrder(order);return order;
}

// Placement on a half-strip grid (one row = half a strip): 001 starts the
// left column, the command block fills the first half-row on the right, so
// 002 sits exactly half a strip lower and the columns interlock.
function stripPlacement(index){
  return {column:index%2+1,row:index+1,span:2,lead:index===0};
}

// Strip activity from the native per-session status store: a pending approval/answer outranks a
// running turn, which outranks an unread completion. Sessions are matched by id; no content is read.
const WORKSPACE_ACTIVITY=Object.freeze(['attention','working','done']);
function workspaceActivity(items,statuses){
  const out={};
  for(const item of items||[]){
    let rank=WORKSPACE_ACTIVITY.length;
    for(const id of item?.sessionIds||[]){
      const status=statuses?.get?.(id);if(!status)continue;
      const next=status.pendingInteraction!==undefined?0:status.running===true?1:status.completionUnread===true?2:rank;
      if(next<rank)rank=next;if(rank===0)break;
    }
    if(rank<WORKSPACE_ACTIVITY.length)out[String(item.workspaceId)]=WORKSPACE_ACTIVITY[rank];
  }
  return out;
}
// The status service arrives through a deferred inject; until then strips simply show no activity.
const EMPTY_STATUS=new Map();
function createStatusRelay(){
  const listeners=new Set();let source=null,release=null;
  const emit=()=>{for(const listener of listeners)listener();};
  return {
    getSnapshot:()=>source?.getSnapshot?.()??EMPTY_STATUS,
    subscribe(listener){listeners.add(listener);return()=>listeners.delete(listener);},
    attach(next){release?.();release=null;source=next?.getSnapshot&&next?.subscribe?next:null;if(source)release=source.subscribe(emit);emit();}
  };
}
const idleStatusSource={getSnapshot:()=>EMPTY_STATUS,subscribe:()=>()=>{}};

function fallbackName(item){return item?.title||item?.name||item?.path?.split(/[\\/]/).filter(Boolean).at(-1)||'—';}
function nextSidebarList(){
  const frame=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame'))].find(node=>!node.closest('[data-acid-motion-owned]'));
  return frame?.querySelector(moduleSelector('[data-slot="sidebar.workspaces"] .GAkraW_list'))??null;
}
function nativeCommands(){
  const root=document.querySelector(moduleSelector('.mP3x-q_frame .wtg9ga_root'));
  if(!root)return [];
  const panels=[...root.querySelectorAll(moduleSelector('.wtg9ga_panelList .wtg9ga_panelRow'))];
  return [root.querySelector(moduleSelector('.wtg9ga_newSession')),...panels].filter(Boolean).slice(0,3);
}
function sessionRows(group){
  return [...group.querySelectorAll('[data-row-key^="session:"][role="treeitem"]')].map(row=>({
    key:row.dataset.rowKey,row,title:row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||'—',time:row.querySelector(moduleSelector('.wnFoaW_time'))?.textContent||'',selected:row.getAttribute('aria-selected')==='true'
  }));
}

const COMMAND_ICONS={
  new:'M8 3v10M3 8h10',
  plugins:'M3 5.5h2.6a1.6 1.6 0 1 1 3.2 0H11.5V8a1.6 1.6 0 1 1 0 3.2V13.5H8.8a1.6 1.6 0 1 0-3.2 0H3V10.8a1.6 1.6 0 1 0 0-3.2Z',
  automations:'M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 1 0 0-11ZM8 5v3.2l2.2 1.4'
};
function CommandStack({tick}){
  const commands=nativeCommands();
  return h('div',{className:'acid-ws-commands',role:'group','aria-label':'commands','data-tick':tick},...commands.map((button,i)=>{
    const kind=['new','plugins','automations'][i];
    const label=button.querySelector(moduleSelector('.wtg9ga_newSessionLabel,.wtg9ga_panelTitle'))?.textContent||button.getAttribute('aria-label')||kind;
    const active=button.classList.contains(moduleClass('wtg9ga_panelActive'));
    return h('button',{key:i,type:'button',className:'acid-ws-command','data-command':kind,'aria-pressed':i?active:undefined,'aria-label':label,title:label,
      onClick:()=>{button.click();}},h('svg',{width:16,height:16,viewBox:'0 0 16 16',fill:'none',stroke:'currentColor',strokeWidth:1.3,strokeLinecap:'square','aria-hidden':true},h('path',{d:COMMAND_ICONS[kind]})));
  }));
}
// Workspace-list tools (search, view options, add workspace) do not fit the
// 113px rail; they are proxied from the MORE drawer. Natives stay mounted.
function DrawerTools(){
  const [,force]=React.useState(0);
  React.useEffect(()=>{const id=setTimeout(()=>force(x=>x+1),400);return()=>clearTimeout(id);},[]);
  const buttons=[...document.querySelectorAll(moduleSelector('.mP3x-q_frame [data-slot="sidebar.workspaces"] .GAkraW_sectionHeader button'))];
  if(!buttons.length)return null;
  return h('div',{className:'acid-drawer-tools',role:'group'},...buttons.map((button,i)=>{
    const label=button.getAttribute('aria-label')||'';
    return h('button',{key:i,type:'button',className:'acid-drawer-tool','aria-label':label,title:label,onClick:()=>button.click()},
      h('span',{className:'acid-drawer-tool-icon','aria-hidden':true,dangerouslySetInnerHTML:{__html:button.querySelector('svg')?.outerHTML||''}}),h('span',null,label));
  }));
}

function WorkspaceFlyout({state,color,custom,onColor,t,onEnter,onLeave,onClose,motion}){
  const ref=React.useRef(null);
  const [rows,setRows]=React.useState(()=>sessionRows(state.group));
  React.useEffect(()=>{
    const refresh=()=>setRows(sessionRows(state.group));refresh();
    const observer=new MutationObserver(refresh);
    observer.observe(state.group,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['aria-selected']});
    return()=>observer.disconnect();
  },[state.group]);
  // Reuse the skin's own four-colour wipe, sideways like the sidebar itself.
  React.useLayoutEffect(()=>{if(ref.current)activeAcceptedMotion?.mask(ref.current,{kind:'hover',direction:'left-right'});},[]);
  const place=state.anchor,below=place.top+380>window.innerHeight;
  const style={left:place.left+'px','--acid-ws-id':color};
  if(below)style.bottom=Math.max(8,window.innerHeight-place.bottom)+'px';else style.top=Math.max(8,place.top)+'px';
  const create=state.group.querySelector(moduleSelector('.wnFoaW_projectRow .wnFoaW_rowActions button[aria-keyshortcuts]'));
  const open=(entry)=>{motion()?.captureStage();entry.row.click();onClose();};
  return createPortal(h('aside',{ref,className:'acid-ws-flyout','data-acid-motion-owned':'flyout','data-placement':below?'up':'down',style,role:'dialog','aria-label':`${state.number} ${state.name}`,onPointerEnter:onEnter,onPointerLeave:onLeave,onFocus:onEnter,onBlur:event=>{if(!event.currentTarget.contains(event.relatedTarget))onLeave();},onKeyDown:event=>{if(event.key==='Escape'){event.stopPropagation();onClose(true);}}},
    h('header',{className:'acid-ws-fly-head'},
      h('span',{className:'acid-ws-fly-number'},state.number),
      h('span',{className:'acid-ws-fly-title'},h('strong',null,state.name),state.path?h('em',{title:state.path},state.path):null)),
    h('div',{className:'acid-ws-fly-meta'},h('span',null,`CONVERSATIONS ${String(rows.length).padStart(2,'0')}`),
      create?h('button',{type:'button',className:'acid-ws-fly-new','aria-label':create.getAttribute('aria-label'),title:create.getAttribute('aria-label'),onClick:()=>{motion()?.captureStage();create.click();onClose();}},h('b',{'aria-hidden':true},'+'),'NEW CHAT HERE'):null),
    rows.length?h('div',{className:'acid-ws-fly-list',role:'list'},...rows.map(entry=>h('button',{key:entry.key,type:'button',role:'listitem',className:'acid-ws-fly-row','aria-current':entry.selected?'true':undefined,
      onClick:()=>open(entry),onContextMenu:event=>{event.preventDefault();entry.row.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,clientX:event.clientX,clientY:event.clientY,button:2}));}},
      h('span',{className:'acid-ws-fly-name'},entry.title),entry.time?h('span',{className:'acid-ws-fly-time'},entry.time):null))):
      h('p',{className:'acid-ws-fly-empty'},'NO CONVERSATIONS // —'),
    h('div',{className:'acid-ws-color'},h(ColorField,{field:'ws.color',value:color,t,prefix:`acid-ws-${state.id}`,onColor}),
      h('button',{type:'button',className:'acid-ws-color-reset',disabled:!custom,onClick:()=>onColor(null)},t('ws.color.reset')))),document.body);
}

function SidebarNext({items,numbers,workspaceId,colors={},onColor,onPick,t,motion,toggleSidebar,statusSource=idleStatusSource}){
  const [list,setList]=React.useState(null),[tick,setTick]=React.useState(0),[fly,setFly]=React.useState(null);
  const timers=React.useRef({}),flyRef=React.useRef(null),expanded=React.useRef(new Set());
  flyRef.current=fly;
  const ids=items.map(item=>String(item.workspaceId));
  const identity=React.useMemo(()=>workspaceIdentity(ids,numbers,colors),[ids.join('|'),JSON.stringify(numbers||{}),colors]);
  const byId=React.useMemo(()=>new Map(items.map((item,i)=>[String(item.workspaceId),{item,index:i}])),[items]);
  const statuses=React.useSyncExternalStore(statusSource.subscribe,statusSource.getSnapshot,statusSource.getSnapshot);
  const activity=React.useMemo(()=>workspaceActivity(items,statuses),[items,statuses]);
  const live=React.useRef({});live.current={identity,byId,onPick,workspaceId,numbers};
  // Locate the native workspace tree in the main frame.
  React.useLayoutEffect(()=>{
    let frame=0,signature='';
    const sync=()=>{
      frame=0;const next=nextSidebarList();setList(previous=>previous===next?previous:next);
      const groups=next?next.querySelectorAll(moduleSelector(':scope > .GAkraW_groupSection')).length:0;
      const value=groups+'|'+(next?.childElementCount??0)+'|'+nativeCommands().map(button=>button.className+(button.textContent||'')).join('/');
      if(value!==signature){signature=value;setTick(x=>x+1);}
    };
    const observer=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(sync);});
    observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','data-sidebar-collapsed','data-row-key']});
    sync();return()=>{observer.disconnect();if(frame)cancelAnimationFrame(frame);};
  },[]);
  // One sidebar mode only: the wide/rail switch is retired.
  React.useEffect(()=>{
    const block=event=>{if((event.ctrlKey||event.metaKey)&&!event.altKey&&event.key?.toLowerCase()==='b'){event.preventDefault();event.stopImmediatePropagation();}};
    window.addEventListener('keydown',block,true);
    const frame=document.querySelector(moduleSelector('.mP3x-q_frame'));
    let queued=0;
    const expand=()=>{if(frame?.hasAttribute('data-sidebar-collapsed')&&!queued)queued=requestAnimationFrame(()=>{queued=0;if(frame.hasAttribute('data-sidebar-collapsed'))toggleSidebar?.();});};
    const observer=new MutationObserver(expand);
    if(frame)observer.observe(frame,{attributes:true,attributeFilter:['data-sidebar-collapsed']});
    expand();
    return()=>{window.removeEventListener('keydown',block,true);observer.disconnect();if(queued)cancelAnimationFrame(queued);};
  },[]);
  const groups=list?[...list.children].filter(node=>node.classList?.contains(moduleClass('GAkraW_groupSection'))&&node.querySelector(':scope [data-row-key^="workspace:"]')):[];
  const active=groups.length>0;
  React.useLayoutEffect(()=>{
    const root=document.documentElement;
    if(active)root.setAttribute('data-acid-sidebar','next');else root.removeAttribute('data-acid-sidebar');
    return()=>root.removeAttribute('data-acid-sidebar');
  },[active]);
  // Arrange strips and paint identity colours on every render of the tree.
  React.useLayoutEffect(()=>{
    if(!list||!active)return;
    list.setAttribute('data-acid-ws-grid','');
    groups.forEach((group,k)=>{
      const row=group.querySelector('[data-row-key^="workspace:"]'),id=row.dataset.rowKey.slice(10),i=(numbers?.[id]??k+1)-1;
      const place=stripPlacement(i),color=identity[id]||IDENTITY_COLORS[i%IDENTITY_COLORS.length];
      const count=byId.get(id)?.item.sessionIds?.length??sessionRows(group).length;
      group.style.gridColumn=String(place.column);group.style.gridRow=`${place.row} / span ${place.span}`;
      group.style.setProperty('--acid-ws-id',color);group.style.setProperty('--acid-ws-id-fore',identityInk(color,!!colors[id]));
      group.style.setProperty('--acid-ws-fill',Math.min(1,count/12).toFixed(3));
      group.dataset.acidWsStrip=place.lead?'lead':'strip';group.dataset.acidWsCount=row.dataset.acidCount=String(count).padStart(2,'0');
      if(id===String(workspaceId))group.dataset.acidWsActive='';else delete group.dataset.acidWsActive;
      const state=activity[id];if(state)group.dataset.acidWsStatus=state;else delete group.dataset.acidWsStatus;
      // Native rows are not focusable; give each strip a tab stop so focus opens its card.
      if(row.getAttribute('tabindex')!=='0'){row.setAttribute('tabindex','0');row.dataset.acidTab='';}
      row.setAttribute('aria-label',`${formatWorkspaceIndex(i+1)} ${row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||fallbackName(byId.get(id)?.item)}${state?` · ${t(`ws.${state}`)}`:''}`);
      const item=byId.get(id)?.item,title=row.querySelector(moduleSelector('.wnFoaW_title')),fallback=item?.title||item?.name||item?.path?.split(/[\\/]/).filter(Boolean).at(-1)||'—';
      if(title&&title.dataset.acidFallback!==fallback)title.dataset.acidFallback=fallback;

    });
  });
  React.useEffect(()=>()=>{
    if(!list)return;list.removeAttribute('data-acid-ws-grid');
    for(const group of list.querySelectorAll('[data-acid-ws-strip]')){
      for(const name of ['grid-column','grid-row','--acid-ws-id','--acid-ws-id-fore','--acid-ws-fill'])group.style.removeProperty(name);
      delete group.dataset.acidWsStrip;delete group.dataset.acidWsCount;delete group.dataset.acidWsActive;delete group.dataset.acidWsStatus;const row=group.querySelector('[data-row-key^="workspace:"]');if(row){if(row.dataset.acidTab!==undefined){row.removeAttribute('tabindex');delete row.dataset.acidTab;}row.removeAttribute('aria-label');delete row.dataset.acidCount;const title=row.querySelector(moduleSelector('.wnFoaW_title'));if(title)delete title.dataset.acidFallback;}
    }
  },[list]);
  // Interaction: strips open their workspace; hover/focus opens the flyout.
  React.useEffect(()=>{
    if(!list||!active)return;
    const clear=name=>{clearTimeout(timers.current[name]);timers.current[name]=undefined;};
    const restore=group=>{if(group&&expanded.current.has(group)){expanded.current.delete(group);const row=group.querySelector('[data-row-key^="workspace:"]');if(row?.getAttribute('aria-expanded')==='true')row.click();}};
    const close=()=>{clear('open');clear('close');const current=flyRef.current;if(current){restore(current.group);current.group.removeAttribute('data-acid-ws-open');}setFly(null);};
    const open=group=>{
      const row=group.querySelector('[data-row-key^="workspace:"]');if(!row||row.classList.contains(moduleClass('wnFoaW_menuOpen')))return;
      const id=row.dataset.rowKey.slice(10),{identity,byId}=live.current;
      if(flyRef.current?.group===group)return;
      if(flyRef.current){restore(flyRef.current.group);flyRef.current.group.removeAttribute('data-acid-ws-open');}
      if(row.getAttribute('aria-expanded')==='false'){expanded.current.add(group);row.click();}
      const rect=group.getBoundingClientRect(),side=document.querySelector(moduleSelector('.mP3x-q_sidebarCol'))?.getBoundingClientRect();
      const entry=byId.get(id);const index=live.current.numbers?.[id]??(entry?entry.index+1:groups.indexOf(group)+1);
      group.setAttribute('data-acid-ws-open','');
      setFly({group,id,color:identity[id]||IDENTITY_COLORS[0],number:row.getAttribute('data-acid-ordinal')||formatWorkspaceIndex(index),
        name:row.querySelector(moduleSelector('.wnFoaW_title'))?.textContent||entry?.item.title||entry?.item.name||'—',path:entry?.item.path||'',anchor:{top:rect.top,bottom:rect.bottom,left:(side?.right??rect.right)+2}});
    };
    // Micro-movements inside the same strip must not keep postponing the open.
    const schedule=(group,delay=90)=>{
      clear('close');if(flyRef.current?.group===group)return;
      if(timers.current.pending===group&&timers.current.open)return;
      clear('open');timers.current.pending=group;
      timers.current.open=setTimeout(()=>{timers.current.open=undefined;timers.current.pending=undefined;open(group);},delay);
    };
    const leave=()=>{clear('open');timers.current.pending=undefined;clear('close');timers.current.close=setTimeout(()=>{if(!document.activeElement?.closest('.acid-ws-flyout'))close();},200);};
    const groupOf=node=>node?.closest?.('[data-acid-ws-strip]');
    const over=event=>{if(event.target.closest?.(moduleSelector('.wnFoaW_rowActions'))){close();return;}const group=groupOf(event.target);if(group&&list.contains(group))schedule(group);};
    const out=event=>{const from=groupOf(event.target),to=groupOf(event.relatedTarget);if(from&&from!==to&&!event.relatedTarget?.closest?.('.acid-ws-flyout'))leave();};
    const focus=event=>{if(event.target.closest?.(moduleSelector('.wnFoaW_rowActions'))){close();return;}const group=groupOf(event.target);if(group)schedule(group,0);};
    const pick=event=>{
      if(!event.isTrusted)return;
      const row=event.target.closest?.('[data-row-key^="workspace:"]');
      if(!row||!list.contains(row)||event.target.closest(moduleSelector('.wnFoaW_rowActions')))return;
      if(event.type==='keydown'&&event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();open(row.closest('[data-acid-ws-strip]'));setTimeout(()=>document.querySelector('.acid-ws-flyout .acid-ws-fly-row,.acid-ws-flyout button')?.focus(),30);return;}
      if(event.type==='keydown'&&!['Enter',' '].includes(event.key))return;
      event.preventDefault();event.stopPropagation();close();
      live.current.onPick(row.dataset.rowKey.slice(10));
    };
    list.addEventListener('pointerover',over);list.addEventListener('pointerout',out);list.addEventListener('focusin',focus);
    list.addEventListener('click',pick,true);list.addEventListener('keydown',pick,true);
    const dropped=()=>markWorkspaceReorder();list.addEventListener('drop',dropped,true);list.addEventListener('dragend',dropped,true);
    timers.current.api={enter:()=>clear('close'),leave,close};
    const scroll=()=>close();list.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);
    return()=>{list.removeEventListener('pointerover',over);list.removeEventListener('pointerout',out);list.removeEventListener('focusin',focus);
      list.removeEventListener('click',pick,true);list.removeEventListener('keydown',pick,true);list.removeEventListener('drop',dropped,true);list.removeEventListener('dragend',dropped,true);list.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);close();};
  },[list,active]);
  if(!list||!active)return null;
  const api=timers.current.api||{enter(){},leave(){},close(){}};
  return h(React.Fragment,null,createPortal(h(CommandStack,{tick}),list),
    fly&&byId.has(fly.id)?h(WorkspaceFlyout,{key:fly.id,state:fly,color:identity[fly.id],custom:!!colors[fly.id],onColor:color=>onColor(fly.id,color),t,motion,onEnter:()=>api.enter(),onLeave:()=>api.leave(),onClose:refocus=>{api.close();if(refocus)fly.group.querySelector('[data-row-key^="workspace:"]')?.focus();}}):null);
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
    const SIDEBAR_PREF = `${ID}:sidebar-style`;
    const normalizeSidebar = value => value === 'classic' ? 'classic' : 'next';
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
    // Native user-message bubbles must use the same palette as their text, even when DSH stays in dark mode.
    '--dsw-specific-bubble': chip, '--dsw-specific-bubble-highlight': solidHover,
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

    const TOKEN_ACTIVITY_DEFAULTS = [1000000, 10000000, 50000000];
const TOKEN_ACTIVITY_ZONE = 'Asia/Shanghai';
const TOKEN_ACTIVITY_WEEKS = 18;

function validTokenThresholds(value) {
  return Array.isArray(value) && value.length === 3 && value.every(n => Number.isSafeInteger(n) && n > 0)
    && value[0] < value[1] && value[1] < value[2];
}
function normalizeTokenThresholds(value) {
  return validTokenThresholds(value) ? [...value] : [...TOKEN_ACTIVITY_DEFAULTS];
}
// Zero is an empty day. A boundary changes color only after it is exceeded.
function tokenActivityLevel(total, thresholds) {
  if (!Number.isFinite(total) || total <= 0) return 0;
  return 1 + normalizeTokenThresholds(thresholds).filter(limit => total > limit).length;
}
function tokenDayKey(time, zone = TOKEN_ACTIVITY_ZONE) {
  const parts = new Intl.DateTimeFormat('en', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(time);
  const get = type => parts.find(part => part.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
function tokenActivityCalendar(now = Date.now(), weeks = TOKEN_ACTIVITY_WEEKS, zone = TOKEN_ACTIVITY_ZONE) {
  const today = tokenDayKey(now, zone), date = new Date(`${today}T12:00:00Z`);
  const mondayOffset = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - mondayOffset - (weeks - 1) * 7);
  return Array.from({ length: weeks * 7 }, (_, i) => {
    const day = new Date(date); day.setUTCDate(day.getUTCDate() + i);
    const key = day.toISOString().slice(0, 10);
    return { date: key, today: key === today, future: key > today, weekday: i % 7 };
  });
}
function foldTokenActivity(events, inheritedEventCount = 0, zone = TOKEN_ACTIVITY_ZONE) {
  const days = new Map(), format = new Intl.DateTimeFormat('en', { timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit' });
  for (const event of events) {
    if (event.seq < inheritedEventCount || event.type !== 'assistant/message' || !Number.isFinite(event.time)) continue;
    const usage = event.data?.usage;
    // Harness uses disjoint ordinary/cache-read/cache-write input buckets.
    // Reasoning is already part of outputTokens; totalTokens is informational.
    const valid = usage && [usage.inputTokens, usage.outputTokens, usage.cacheReadTokens ?? 0, usage.cacheWriteTokens ?? 0].every(n => Number.isSafeInteger(n) && n >= 0);
    const parts = format.formatToParts(event.time), get = type => parts.find(part => part.type === type).value;
    const key = `${get('year')}-${get('month')}-${get('day')}`;
    const day = days.get(key) ?? { input: 0, output: 0, requests: 0, missingUsage: 0 };
    if (valid) { day.input += usage.inputTokens + (usage.cacheReadTokens ?? 0) + (usage.cacheWriteTokens ?? 0); day.output += usage.outputTokens; day.requests++; }
    else day.missingUsage++;
    days.set(key, day);
  }
  return days;
}

const ACTIVITY_PREF = `${ID}:token-thresholds`;
const ACTIVITY_COLLAPSED_PREF = `${ID}:token-calendar-collapsed`;
const ACTIVITY_DICTIONARIES = {
  zh: { 'activity.expand':'展开 token 日历', 'activity.collapse':'收起 token 日历', 'activity.title':'TOKEN 活动', 'activity.today':'今日', 'activity.settings':'每日 token 界限', 'activity.description':'整个应用 · 所有会话的输入 + 输出 · 北京时间每日归零。每超过一个界限，切换一种调色盘颜色。', 'activity.limit':'界限', 'activity.invalid':'请输入三个递增的正整数。', 'activity.save':'保存界限', 'activity.reset':'恢复 100万 / 1000万 / 5000万', 'activity.loading':'正在读取用量…', 'activity.unavailable':'用量暂不可用', 'activity.stale':'连接中断 · 显示上次记录', 'activity.partial':'部分会话未能读取', 'activity.missing':'部分请求未报告用量', 'activity.input':'输入', 'activity.output':'输出', 'activity.total':'总量', 'activity.empty':'无已记录用量', 'activity.future':'尚未到来', 'activity.low':'低', 'activity.high':'高', 'activity.range':'最近 18 周 · 一格一天', 'activity.scope':'含缓存输入与推理输出，不重复叠加；仅统计应用记录的提供方用量。' },
  en: { 'activity.expand':'Expand token calendar', 'activity.collapse':'Collapse token calendar', 'activity.title':'TOKEN ACTIVITY', 'activity.today':'Today', 'activity.settings':'Daily token thresholds', 'activity.description':'All application sessions · input + output · days reset at midnight Beijing time. Each exceeded threshold selects the next palette color.', 'activity.limit':'Threshold', 'activity.invalid':'Enter three increasing positive integers.', 'activity.save':'Save thresholds', 'activity.reset':'Reset 1M / 10M / 50M', 'activity.loading':'Reading usage…', 'activity.unavailable':'Usage unavailable', 'activity.stale':'Disconnected · last recorded usage', 'activity.partial':'Some sessions could not be read', 'activity.missing':'Some requests did not report usage', 'activity.input':'Input', 'activity.output':'Output', 'activity.total':'Total', 'activity.empty':'No recorded usage', 'activity.future':'Future day', 'activity.low':'Low', 'activity.high':'High', 'activity.range':'Last 18 weeks · one day per square', 'activity.scope':'Includes cached input and reasoning output without adding them twice. Counts provider usage recorded by the application.' }
};

function createTokenActivityStore(ctx) {
  let thresholds, collapsed = false;
  try { thresholds = normalizeTokenThresholds(JSON.parse(localStorage.getItem(ACTIVITY_PREF))); } catch { thresholds = normalizeTokenThresholds(); }
  try { collapsed = localStorage.getItem(ACTIVITY_COLLAPSED_PREF) === 'true'; } catch {}
  let view = { thresholds, collapsed, status: 'loading', data: null }, disposed = false, timer, controller, inFlight;
  const listeners = new Set();
  const publish = next => { if (disposed) return; view = { ...view, ...next }; for (const listener of listeners) listener(); };
  const read = async () => {
    if (disposed || document.visibilityState === 'hidden') return;
    if (inFlight) return inFlight;
    if (!ctx.connection?.rpc?.call) { publish({ status: 'unavailable' }); return; }
    controller = new AbortController();
    inFlight = (async () => {
      try {
        const result = await ctx.connection.rpc.call('/api', 'industrial-acid/token-activity', {}, controller.signal);
        if (!result.ok || !Array.isArray(result.value?.days)) throw new Error('unavailable');
        publish({ data: result.value, status: result.value.failedSessions ? 'partial' : 'ready' });
      } catch { publish({ status: view.data ? 'stale' : 'unavailable' }); }
      finally { inFlight = undefined; controller = undefined; }
    })();
    return inFlight;
  };
  const onStorage = event => {
    if (event.key === ACTIVITY_PREF || event.key === null) {
      try { publish({ thresholds: normalizeTokenThresholds(JSON.parse(localStorage.getItem(ACTIVITY_PREF))) }); } catch {}
    }
    if (event.key === ACTIVITY_COLLAPSED_PREF || event.key === null) {
      try { publish({ collapsed: localStorage.getItem(ACTIVITY_COLLAPSED_PREF) === 'true' }); } catch {}
    }
  };
  const onVisible = () => { if (document.visibilityState !== 'hidden') read(); };
  ctx.effect(() => {
    window.addEventListener('storage', onStorage); document.addEventListener('visibilitychange', onVisible);
    const disconnect = ctx.connection?.generation?.subscribe(onVisible);
    if (ctx.connection?.rpc?.call) { read(); timer = setInterval(read, 15000); }
    else publish({ status: 'unavailable' });
    return () => { disposed = true; if (timer !== undefined) clearInterval(timer); controller?.abort(); disconnect?.(); listeners.clear(); window.removeEventListener('storage', onStorage); document.removeEventListener('visibilitychange', onVisible); };
  }, `${ID}: daily token activity`);
  return {
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); }, getSnapshot: () => view, refresh: read,
    setThresholds(value) {
      if (!validTokenThresholds(value)) return false;
      try { localStorage.setItem(ACTIVITY_PREF, JSON.stringify(value)); } catch {}
      publish({ thresholds: [...value] }); return true;
    },
    setCollapsed(value) {
      const collapsed = value === true;
      try { localStorage.setItem(ACTIVITY_COLLAPSED_PREF, String(collapsed)); } catch {}
      publish({ collapsed });
    }
  };
}
function compactTokens(value) {
  return value >= 1000000 ? `${Number((value / 1000000).toFixed(2))}M` : value >= 1000 ? `${Number((value / 1000).toFixed(1))}K` : String(value);
}
function tokenActivityRange(level, limits) {
  return level === 1 ? `≤ ${compactTokens(limits[0])}` : level === 4 ? `> ${compactTokens(limits[2])}` : `> ${compactTokens(limits[level - 2])} · ≤ ${compactTokens(limits[level - 1])}`;
}
function TokenActivitySettings({ t, store, prefix = 'acid' }) {
  const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
  const [draft, setDraft] = React.useState(state.thresholds.map(String));
  React.useEffect(() => setDraft(state.thresholds.map(String)), [state.thresholds]);
  const values = draft.map(value => /^\d+$/.test(value) ? Number(value) : NaN), valid = validTokenThresholds(values);
  return h('section', { className: 'acid-token-settings', 'aria-label': t('activity.settings') },
    h('h3', null, t('activity.settings')), h('p', null, t('activity.description')),
    h('div', { className: 'acid-token-thresholds' }, ...draft.map((value, i) => h('div', { key: i },
      h('label', { htmlFor: `${prefix}-token-limit-${i}` }, `${t('activity.limit')} ${i + 1}`),
      h('input', { id: `${prefix}-token-limit-${i}`, type: 'number', min: 1, step: 1, inputMode: 'numeric', value, 'data-token-limit': i, 'aria-invalid': !valid, onChange: event => setDraft(draft.map((old, n) => n === i ? event.target.value : old)) })))),
    h('div', { className: 'acid-token-settings-actions' }, h('button', { type: 'button', disabled: !valid, 'data-token-save': true, onClick: () => store.setThresholds(values) }, t('activity.save')),
      h('button', { type: 'button', 'data-token-reset': true, onClick: () => store.setThresholds(TOKEN_ACTIVITY_DEFAULTS) }, t('activity.reset'))),
    !valid ? h('p', { className: 'acid-token-error', role: 'alert' }, t('activity.invalid')) : null,
    h('p', { className: 'acid-token-scope' }, t('activity.scope')));
}
function TokenActivity({ wide, t, store, useAppearance }) {
  const state = React.useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot), appearance = useAppearance();
  const [settingsOpen, setSettingsOpen] = React.useState(false), [hovered, setHovered] = React.useState(null);
  const calendarId = React.useId();
  const palette = appearance.palettes[appearance.mode], colors = [palette.surface, palette.text, palette.signal, palette.accent];
  const calendar = tokenActivityCalendar(), records = new Map(state.data?.days.map(day => [day.date, day]) ?? []);
  const days = calendar.map(day => ({ ...(records.get(day.date) ?? { input: 0, output: 0, missingUsage: 0 }), ...day }));
  const today = days.find(day => day.today), available = !!state.data;
  const dayLabel = day => `${day.date} · ${day.future ? t('activity.future') : !available ? t('activity.unavailable') : `${t('activity.total')} ${(day.input + day.output).toLocaleString()} token · ${t('activity.input')} ${day.input.toLocaleString()} · ${t('activity.output')} ${day.output.toLocaleString()}${day.missingUsage ? ` · ${t('activity.missing')}` : ''}`}`;
  const total = available ? compactTokens(today.input + today.output) : '—';
  const warning = ['loading','unavailable','partial','stale'].includes(state.status) ? t(`activity.${state.status}`) : today.missingUsage ? t('activity.missing') : null;
  const months = days.filter((day, i) => i % 7 === 0).map((day, i, all) => i === 0 || day.date.slice(0, 7) !== all[i - 1].date.slice(0, 7) ? `${Number(day.date.slice(5, 7))}月` : '');
  return h('section', { className: `acid-token-activity${wide ? '' : ' acid-token-rail'}`, 'aria-label': t('activity.title'), 'data-token-status': state.status, 'data-token-collapsed': state.collapsed,
    style: Object.fromEntries(colors.map((color, i) => [`--acid-token-color-${i + 1}`, color])) },
    wide ? h('div', { className: 'acid-token-heading' },
      h('button', { type: 'button', className: 'acid-token-toggle', 'aria-label': t(state.collapsed ? 'activity.expand' : 'activity.collapse'),
        'aria-expanded': !state.collapsed, 'aria-controls': calendarId, title: warning ?? dayLabel(today), onClick: () => { setHovered(null); store.setCollapsed(!state.collapsed); } },
        h('span', { className: 'acid-token-chevron', 'aria-hidden': true }, '›'), h('span', null, t('activity.title')), h('strong', null, `${t('activity.today')} ${total}`)),
      h('button', { type: 'button', className: 'acid-token-config', 'aria-label': t('activity.settings'), title: t('activity.settings'), onClick: () => setSettingsOpen(true) }, '⚙')) :
      h('button', { type: 'button', className: 'acid-token-rail-button', title: `${t('activity.today')} ${total} token`, 'aria-label': `${t('activity.settings')} · ${t('activity.today')} ${total} token`, onClick: () => setSettingsOpen(true) }, h('span', { 'data-token-level': available ? tokenActivityLevel(today.input + today.output, state.thresholds) : 0 }), h('small', null, total)),
    wide ? h('div', { id: calendarId, className: 'acid-token-calendar', hidden: state.collapsed },
      h('div', { className: 'acid-token-chart', onMouseLeave: () => setHovered(null) },
      h('div', { className: 'acid-token-months', 'aria-hidden': true }, ...months.map((month, i) => h('span', { key: i }, month))),
      h('div', { className: 'acid-token-grid', role: 'group', 'aria-label': t('activity.range') }, ...days.map(day => h('button', { key: day.date, type: 'button', className: 'acid-token-cell', 'data-token-date': day.date,
        'data-token-level': available ? tokenActivityLevel(day.input + day.output, state.thresholds) : 0, 'data-token-today': day.today, 'data-token-future': day.future,
        'aria-label': dayLabel(day), title: dayLabel(day), disabled: day.future, onMouseEnter: () => setHovered(day), onFocus: () => setHovered(day), onBlur: () => setHovered(null), onClick: () => setHovered(day) }))),
      hovered && !state.collapsed ? h('div', { className: 'acid-token-tooltip', role: 'tooltip' }, h('strong', null, hovered.date),
        h('span', null, !available ? t('activity.unavailable') : `${t('activity.input')} ${hovered.input.toLocaleString()} · ${t('activity.output')} ${hovered.output.toLocaleString()}`),
        h('b', null, available ? `${(hovered.input + hovered.output).toLocaleString()} token` : '—'), hovered.missingUsage ? h('span', null, t('activity.missing')) : null) : null),
      h('div', { className: 'acid-token-legend', title: t('activity.description') }, h('span', null, warning ?? `${t('activity.range')}`), h('span', { className: 'acid-token-scale' }, t('activity.low'), ...colors.map((color, i) => h('i', { key: i, style: { background: color }, title: `${tokenActivityRange(i + 1, state.thresholds)} token` })), t('activity.high')))) : null,
    settingsOpen ? h(NativeDialog, { title: t('activity.settings'), onClose: () => setSettingsOpen(false), className: 'acid-token-dialog' }, h(TokenActivitySettings, { t, store, prefix: 'acid-token-dialog' })) : null);
}

    // MARATHON // SECRET TERMINAL PROTOCOL — pure trigger logic. No DOM, no storage, no network.
// Only egg IDs and timestamps ever leave this module; composer text is read, matched and dropped.
const MARATHON_PREF = 'dsh-industrial-acid-skin:marathon';
const MARATHON_SEQUENCE = Object.freeze(['leela', 'tycho', 'durandal']);
const MARATHON_SEQUENCE_WINDOW = 180000;
const MARATHON_COOLDOWNS = Object.freeze([0, 10000, 30000, 60000]);
const MARATHON_SCOPES = Object.freeze(['full', 'composer']);
const MARATHON_DEFAULTS = Object.freeze({ enabled: true, cooldown: 10000, scope: 'full' });
// `keywords` are matched after normalizeMarathonText; `exact` eggs only fire when they are the whole input.
const MARATHON_EGGS = Object.freeze([
  { id: 'durandal', code: 'EG-01', name: 'DURANDAL', keywords: ['durandal'], duration: 6800, tone: 'green' },
  { id: 'tycho', code: 'EG-02', name: 'TYCHO', keywords: ['tycho'], duration: 5200, tone: 'red' },
  { id: 'leela', code: 'EG-03', name: 'LEELA', keywords: ['leela'], duration: 5200, tone: 'blue' },
  { id: 'thoth', code: 'EG-04', name: 'THOTH', keywords: ['thoth'], duration: 5600, tone: 'mono' },
  { id: 'rampancy', code: 'EG-05', name: 'RAMPANCY', keywords: ['rampancy'], duration: 3200, tone: 'split' },
  { id: 'tauceti', code: 'EG-06', name: 'TAU CETI', keywords: ['tau ceti iv', 'tau ceti'], duration: 6000, tone: 'nav' },
  { id: 'pfhor', code: 'EG-07', name: 'PFHOR', keywords: ['pfhor'], duration: 5600, tone: 'violet' },
  { id: 'cryo', code: 'EG-08', name: 'CRYO ARCHIVE', keywords: ['cryo archive'], duration: 6200, tone: 'ice' },
  { id: 'frog', code: 'EG-09', name: 'FROG BLAST', keywords: ['frog blast the vent core'], duration: 6200, tone: 'toy' },
  { id: 'seven', code: 'EG-10', name: 'SEVEN', keywords: ['777'], exact: true, duration: 5000, tone: 'gold' },
  { id: 'vidmaster', code: 'EG-11', name: 'VIDMASTER', keywords: ['vidmaster'], duration: 5400, tone: 'bone' },
  { id: 'mida', code: 'EG-12', name: 'MIDA', keywords: ['mida'], duration: 5200, tone: 'agit' },
  { id: 'traxus', code: 'EG-13', name: 'TRAXUS', keywords: ['traxus'], duration: 5800, tone: 'corp' },
  { id: 'jjaro', code: 'EG-14', name: 'JJARO', keywords: ['jjaro'], duration: 6400, tone: 'ancient' },
  { id: 'wrkncacnter', code: 'EG-15', name: "W'RKNCACNTER", keywords: ["w'rkncacnter"], duration: 6000, tone: 'void' },
  { id: 'null', code: 'EG-16', name: 'NULL TRANSMISSION', keywords: ['null//transmit.err'], duration: 6800, tone: 'null' }
].map(egg => Object.freeze({ exact: false, ...egg, keywords: Object.freeze(egg.keywords) })));
const MARATHON_FINALE = Object.freeze({ id: 'threeai', code: 'EG-∞', name: 'THREE AI PROTOCOL // RAMPANCY', duration: 10400, tone: 'green' });
const MARATHON_BY_ID = new Map([...MARATHON_EGGS, MARATHON_FINALE].map(egg => [egg.id, egg]));

// Fold widths, case and the apostrophes autocorrect/IMEs substitute, keep every other character as typed.
function normalizeMarathonText(value) {
  return String(value ?? '').normalize('NFKC').toLowerCase()
    .replace(/[‘’ʼʹ`´＇]/g, "'")
    .replace(/[ ​ - 　\s]+/gu, ' ').trim();
}
const MARATHON_WORD = /[\p{Script=Latin}\p{N}_']/u;
// Sentence punctuation after a keyword counts as "finished"; inner keyword symbols (/, ., ') are never stripped.
const MARATHON_TRAIL = /[\s,!?;:…。，！？；：、~～]+$/u;
const MARATHON_PATTERNS = MARATHON_EGGS.flatMap(egg => egg.keywords.map(keyword => ({ egg, keyword })))
  .sort((a, b) => b.keyword.length - a.keyword.length);

/**
 * Match a whole composer value against the catalog.
 * kind 'full': the input is exactly the keyword. kind 'tail': the input ends with a standalone keyword.
 */
function matchMarathonKeyword(raw) {
  const text = normalizeMarathonText(raw);
  if (!text || text.length > 400) return null;
  for (const { egg, keyword } of MARATHON_PATTERNS) if (text === keyword) return { id: egg.id, keyword, kind: 'full' };
  // A trailing period may belong to a keyword (null//transmit.err.) so strip it only after the exact pass.
  const tail = text.replace(MARATHON_TRAIL, '').replace(/\.+$/, '');
  for (const { egg, keyword } of MARATHON_PATTERNS) {
    if (egg.exact || !tail.endsWith(keyword)) continue;
    const before = tail.slice(0, tail.length - keyword.length);
    if (before === '' || !MARATHON_WORD.test(before.at(-1))) return { id: egg.id, keyword, kind: before === '' ? 'full' : 'tail' };
  }
  return null;
}

function normalizeMarathonState(raw) {
  const value = raw && typeof raw === 'object' ? raw : {};
  const known = id => MARATHON_EGGS.some(egg => egg.id === id);
  const sequence = value.sequence && Number.isInteger(value.sequence.step) && value.sequence.step >= 0 && value.sequence.step < MARATHON_SEQUENCE.length && Number.isFinite(value.sequence.at)
    ? { step: value.sequence.step, at: value.sequence.at } : { step: 0, at: 0 };
  return {
    v: 1,
    enabled: typeof value.enabled === 'boolean' ? value.enabled : MARATHON_DEFAULTS.enabled,
    cooldown: MARATHON_COOLDOWNS.includes(value.cooldown) ? value.cooldown : MARATHON_DEFAULTS.cooldown,
    // 'full' covers the whole Harness window; 'composer' keeps the input area clear.
    scope: MARATHON_SCOPES.includes(value.scope) ? value.scope : MARATHON_DEFAULTS.scope,
    discovered: [...new Set(Array.isArray(value.discovered) ? value.discovered.filter(known) : [])],
    sequence,
    unlocked: Number.isFinite(value.unlocked) && value.unlocked > 0 ? value.unlocked : 0
  };
}

/**
 * Advance LEELA → TYCHO → DURANDAL. Any other egg, a wrong order or an expired window resets progress.
 * Returns the next sequence and whether this trigger completed the protocol.
 */
function advanceMarathonSequence(sequence, id, now, window = MARATHON_SEQUENCE_WINDOW) {
  const live = sequence && sequence.step > 0 && now - sequence.at <= window ? sequence.step : 0;
  if (id === MARATHON_SEQUENCE[live]) {
    if (live === MARATHON_SEQUENCE.length - 1) return { sequence: { step: 0, at: 0 }, step: MARATHON_SEQUENCE.length, complete: true };
    return { sequence: { step: live + 1, at: now }, step: live + 1, complete: false };
  }
  if (id === MARATHON_SEQUENCE[0]) return { sequence: { step: 1, at: now }, step: 1, complete: false };
  return { sequence: { step: 0, at: 0 }, step: 0, complete: false };
}

/**
 * Debounced gate between composer input and the director. It never stores text: after a match it keeps
 * only the egg ID as "spent" until that keyword leaves the composer, so continuing to type cannot re-fire.
 */
function createMarathonGate({ cooldown = () => MARATHON_DEFAULTS.cooldown, now = () => Date.now(), globalGap = 1200, bypass = () => false } = {}) {
  const lastFired = new Map();
  let spent = null, lastAny = -Infinity;
  return {
    evaluate(raw) {
      const match = matchMarathonKeyword(raw);
      if (!match) { spent = null; return null; }
      if (spent === match.id) return null;
      const time = now(), wait = cooldown();
      // The protocol finale must not be swallowed by an earlier stand-alone DURANDAL cooldown.
      if (!bypass(match.id) && (time - lastAny < globalGap || time - (lastFired.get(match.id) ?? -Infinity) < wait)) return null;
      spent = match.id; lastAny = time; lastFired.set(match.id, time);
      return match;
    },
    release() { spent = null; },
    reset() { spent = null; lastAny = -Infinity; lastFired.clear(); }
  };
}

// Composer fields only: the native Lexical editor, or the documented textarea fallback. Never passwords.
// Resolved per use so the gate follows the running build instead of the one at load time.
const marathonInput = () => moduleSelector('[data-composer-input=true],textarea[data-composer-input],[data-composer-card=true] textarea,.RlGAzG_card textarea');
function marathonComposerText(node) {
  if (!node || node.type === 'password' || node.getAttribute?.('type') === 'password') return null;
  if (node.getAttribute?.('autocomplete')?.includes('password')) return null;
  if (typeof node.value === 'string' && node.tagName === 'TEXTAREA') return node.value;
  return node.isContentEditable === false ? null : node.textContent ?? null;
}

// MARATHON // SECRET TERMINAL PROTOCOL — director, timeline and scenes.
// The stage is one disposable fixed layer. Native nodes are only touched by cancellable WAAPI animations.
// Resolved per use: the stage may open long after load, when the composer finally exists.
const marathonCard = () => moduleSelector('[data-composer-card=true],.RlGAzG_card');
// CSS-module hashes change between DSH builds; match the stable local class name instead.
const MARATHON_FRAME = '[class*="_centerCol"]';
const MX_EASE = 'cubic-bezier(.2,.8,.2,1)', MX_SNAP = 'cubic-bezier(.7,0,.2,1)', MX_IN = 'cubic-bezier(.5,0,.75,0)';
const MX_FLASH_GAP = 340, MX_FLASH_PEAK = .35, MX_STILL_HOLD = 3400, MX_BURST_MAX = 6, MX_BURST_TIME = 240;
let mxFilterId = 0;

function mxRandom(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const mxPolar = (r, deg) => [+(r * Math.cos(deg * Math.PI / 180)).toFixed(2), +(r * Math.sin(deg * Math.PI / 180)).toFixed(2)];
const mxArc = (r, from, to) => { const [x1, y1] = mxPolar(r, from), [x2, y2] = mxPolar(r, to); return `M${x1} ${y1}A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${x2} ${y2}`; };
const mxEscape = value => String(value).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** One cancellable timeline per show. Every animation, timer and flash is tracked for skip and QA. */
function marathonTimeline(stage, motion) {
  const animations = [], timers = [], flashes = [], bursts = [];
  // Flashes and glitch bursts share one budget so their combined rate stays under 3 pulses per second.
  const crowded = at => [...flashes, ...bursts].some(time => Math.abs(time - at) < MX_FLASH_GAP);
  const tl = {
    motion, full: motion === 'full', ended: false, flashes, bursts,
    play(node, frames, duration, at = 0, options = {}) {
      if (!node?.animate || tl.ended) return null;
      // endDelay: Chromium can report "finished" at end − ε, inside the active phase, which leaves
      // steps(…, end) one step short; 1ms keeps the settled state in the after-phase fill.
      const animation = node.animate(frames, { duration: Math.max(1, duration), delay: Math.max(0, at), endDelay: 1, easing: options.ease || MX_EASE, fill: options.fill || 'both', iterations: options.iterations ?? 1, direction: options.direction || 'normal', ...(options.pseudo ? { pseudoElement: options.pseudo } : {}) });
      animation.finished.catch(() => {}); animations.push(animation); return animation;
    },
    at(ms, callback) { timers.push(setTimeout(() => { if (!tl.ended) callback(); }, Math.max(0, ms))); },
    type(node, text, at, step = 18) {
      // Progress comes from elapsed time, so throttled timers (a backgrounded window) catch up instead of lagging the animations.
      tl.at(at, () => {
        const start = performance.now(); node.classList.add('mx-caret');
        const tick = () => {
          if (tl.ended) return;
          const index = Math.min(text.length, Math.floor((performance.now() - start) / step) + 1);
          node.textContent = text.slice(0, index);
          if (index < text.length) timers.push(setTimeout(tick, step)); else node.classList.remove('mx-caret');
        };
        tick();
      });
      return at + text.length * step;
    },
    // Characters resolve left to right; unresolved cells cycle through a fixed glyph set.
    scramble(node, text, at, duration, set = '▚▞▙▟█░▒▓<>/\\#%&@$') {
      const random = mxRandom(text.length * 977 + at);
      tl.at(at, () => {
        const start = performance.now();
        const tick = () => {
          if (tl.ended) return;
          const p = Math.min(1, (performance.now() - start) / duration), solved = Math.floor(p * text.length);
          node.textContent = [...text].map((c, i) => i < solved || c === ' ' ? c : set[Math.floor(random() * set.length)]).join('');
          if (p < 1) timers.push(setTimeout(tick, 45));
        };
        tick();
      });
      return at + duration;
    },
    count(node, from, to, at, duration, format = value => value.toFixed(0)) {
      tl.at(at, () => {
        const start = performance.now();
        const tick = () => { if (tl.ended) return; const p = Math.min(1, (performance.now() - start) / duration), e = 1 - (1 - p) ** 3; node.textContent = format(from + (to - from) * e); if (p < 1) timers.push(setTimeout(tick, 50)); };
        tick();
      });
    },
    // Photosensitivity guard: at most one pulse per 340ms (< 3/s) and a capped peak opacity.
    flash(node, at, duration = 160, peak = .3) {
      if (!tl.full || crowded(at)) return null;
      flashes.push(at);
      return tl.play(node, [{ opacity: 0 }, { opacity: Math.min(MX_FLASH_PEAK, peak) }, { opacity: 0 }], duration, at, { ease: 'linear', fill: 'none' });
    },
    allowBurst(at) {
      if (motion === 'off' || bursts.length >= MX_BURST_MAX || crowded(at)) return false;
      bursts.push(at); return true;
    },
    // A few characters drop to block glyphs for a couple of ticks, then the original text returns.
    corrupt(node, at, ticks = 3, step = 55) {
      tl.at(at, () => {
        const original = node.textContent, random = mxRandom(original.length * 13 + Math.round(at)), set = '▚▞▙▟█░▒▓#%&@/\\<>';
        let k = 0;
        const tick = () => {
          if (tl.ended) return;
          if (k++ >= ticks) { node.textContent = original; return; }
          node.textContent = [...original].map(c => c !== ' ' && random() < .24 ? set[Math.floor(random() * set.length)] : c).join('');
          timers.push(setTimeout(tick, step));
        };
        tick();
      });
    },
    cancel() { tl.ended = true; for (const id of timers) clearTimeout(id); for (const animation of animations) animation.cancel(); timers.length = 0; animations.length = 0; }
  };
  return tl;
}

function marathonNode(parent, className, html = '', tag = 'div') {
  const node = document.createElement(tag); node.className = className; if (html) node.innerHTML = html; parent.append(node); return node;
}

/** Shared signal arrival: composer interference, edge scan lines, a sweep and a brief native glitch. */
function marathonIntro(s, tl, { veil = .8, label = s.egg.name, glitch = true, sweep = true } = {}) {
  tl.play(s.veil, [{ opacity: 0 }, { opacity: veil }], 420, 0);
  const edges = marathonNode(s.stage, 'mx-edges', '<i class="t"></i><i class="r"></i><i class="b"></i><i class="l"></i>');
  edges.querySelectorAll('i').forEach((bar, i) => tl.play(bar, [{ transform: i % 2 ? 'scaleY(0)' : 'scaleX(0)', opacity: 0 }, { transform: 'none', opacity: 1 }], 420, 40 + i * 50));
  const lines = marathonNode(s.stage, 'mx-scanlines');
  tl.play(lines, [{ opacity: 0 }, { opacity: 1 }], 500, 80);
  if (sweep) tl.play(marathonNode(s.stage, 'mx-sweep'), [{ transform: 'translateY(-4vh)', opacity: 0 }, { opacity: 1, offset: .1 }, { transform: 'translateY(104vh)', opacity: 0 }], 1100, 160, { ease: 'linear' });
  if (s.rect) {
    const r = s.rect, fx = marathonNode(s.stage, 'mx-cfx', '<b class="tl"></b><b class="tr"></b><b class="bl"></b><b class="br"></b>' + (tl.full ? '<i></i><i></i><i></i><i></i><i></i>' : '') + `<span>SIGNAL // ${mxEscape(label)}</span>`);
    Object.assign(fx.style, { left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px` });
    tl.play(fx, [{ opacity: 0, transform: 'scale(1.04)' }, { opacity: 1, transform: 'none', offset: .25 }, { opacity: 1, offset: .75 }, { opacity: 0 }], 1300, 0);
    const random = mxRandom(label.length * 131);
    fx.querySelectorAll('i').forEach((slice, i) => {
      slice.style.top = `${8 + i * 18}%`;
      const shift = Math.round((random() - .5) * 28);
      tl.play(slice, [{ transform: `translateX(${shift}px) scaleX(.2)`, opacity: 0 }, { transform: `translateX(${-shift / 2}px) scaleX(1)`, opacity: .9 }, { transform: `translateX(${shift / 3}px)`, opacity: .5 }, { transform: 'none', opacity: 0 }], 520, 40 + i * 40, { ease: 'steps(4,end)' });
    });
  }
  // Signal arrival tears the real chat column for a moment, then a tracking band rolls through once.
  if (glitch) marathonBurst(s, tl, 180, { targets: s.frame ? [s.frame] : [], strength: .9 });
  const track = marathonNode(s.stage, 'mx-track');
  tl.play(track, [{ transform: 'translateY(-12vh)', opacity: 0 }, { opacity: 1, offset: .08 }, { opacity: 1, offset: .9 }, { transform: 'translateY(100vh)', opacity: 0 }], 1700, 900 + (label.length % 5) * 120, { ease: 'linear' });
  return edges;
}

/**
 * One glitch burst (≤240ms): stepped horizontal tearing through an SVG displacement filter with a
 * red/cyan channel split, plus macroblocks and line tears. Quiet motion keeps only faint blocks;
 * the timeline's shared pulse budget can veto the whole burst.
 */
function marathonBurst(s, tl, at, { targets = [s.scene], strength = 1, blocks = 4, duration = MX_BURST_TIME } = {}) {
  if (!tl.allowBurst(at)) return false;
  const time = Math.min(MX_BURST_TIME, duration), random = mxRandom(Math.round(at) * 31 + s.egg.id.length * 7 + 1);
  const layer = marathonNode(s.stage, 'mx-blocks');
  const kinds = tl.full ? ['inv', 'ink', 'shift', 'line', 'shift', 'ink'] : ['shift', 'line'];
  for (let i = 0; i < (tl.full ? blocks + 1 : 2); i++) {
    const kind = kinds[i % kinds.length], block = marathonNode(layer, `mx-block ${kind}`);
    const width = kind === 'line' ? 100 : 6 + random() * 16, height = kind === 'line' ? .5 : 1.2 + random() * 3.8;
    Object.assign(block.style, { left: `${kind === 'line' ? 0 : (random() * (100 - width)).toFixed(1)}%`, top: `${(random() * (100 - height)).toFixed(1)}%`, width: `${width.toFixed(1)}%`, height: kind === 'line' ? '2px' : `${height.toFixed(1)}%` });
    const shown = tl.full ? .85 : .35, offset = Math.round((random() - .5) * 24 * strength);
    tl.play(block, [{ opacity: 0, transform: 'none' }, { opacity: shown, transform: `translateX(${offset}px)`, offset: .02 }, { opacity: shown, transform: `translateX(${-offset / 2}px)`, offset: .5 }, { opacity: shown, offset: .98 }, { opacity: 0 }], time * (.45 + random() * .5), at + i * 22, { ease: 'steps(3,end)', fill: 'none' });
  }
  if (!tl.full) return true;
  // Two strips in the workspace rail catch the same interference.
  if (s.strips?.length) for (let k = 0; k < Math.min(2, s.strips.length); k++) {
    const strip = s.strips[Math.floor(random() * s.strips.length)], dx = Math.round((random() - .5) * 10 * strength);
    tl.play(strip, [{ transform: 'none' }, { transform: `translateX(${dx}px)` }, { transform: `translateX(${-dx / 2}px)` }, { transform: 'none' }], time, at + k * 30, { ease: 'steps(3,end)', fill: 'none' });
  }
  const id = `mx-tear-${++mxFilterId}`, defs = marathonNode(s.stage, 'mx-defs');
  defs.innerHTML = `<svg width="0" height="0" aria-hidden="true"><filter id="${id}" x="-4%" y="-2%" width="108%" height="104%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.0004 0.028" numOctaves="1" seed="${Math.round(at) % 97}" result="noise"/><feComponentTransfer in="noise" result="bands"><feFuncR type="discrete" tableValues="0 0 0 .2 .5 .8 1 1 1"/></feComponentTransfer><feColorMatrix in="bands" values="1 0 0 0 0  0 0 0 0 .5  0 0 0 0 0  0 0 0 0 1" result="shift"/><feDisplacementMap in="SourceGraphic" in2="shift" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter></svg>`;
  const turbulence = defs.querySelector('feTurbulence'), map = defs.querySelector('feDisplacementMap');
  const split = 3 * strength, filter = `url(#${id}) drop-shadow(${split}px 0 0 rgba(255,0,80,.6)) drop-shadow(${-split}px 0 0 rgba(0,235,255,.6))`;
  for (const target of targets.filter(Boolean)) tl.play(target, [{ filter }, { filter }], time, at, { ease: 'linear', fill: 'none' });
  // Fractal noise clusters near .5, so the table pushes most bands into visible ±20–50% shifts.
  // The filter animates by stepping its own attributes; WAAPI only holds it on the targets.
  [40, -28, 52, -16].forEach((scale, k) => tl.at(at + k * time / 4, () => { map.setAttribute('scale', String(Math.round(scale * strength))); turbulence.setAttribute('seed', String((Math.round(at) + k * 17) % 97)); }));
  tl.at(at + time, () => map.setAttribute('scale', '0'));
  return true;
}

/**
 * The signal runs down the workspace colour strips top to bottom in the show's ink, then each strip
 * returns to its own identity colour. Native strips are only touched by cancellable WAAPI animations.
 */
function marathonStripWave(s, tl, at, color) {
  const ink = color || getComputedStyle(s.stage).getPropertyValue('--mx-ink').trim();
  if (!ink || !s.strips?.length) return;
  const ordered = [...s.strips].map(node => ({ node, box: node.getBoundingClientRect() })).sort((a, b) => a.box.top - b.box.top || a.box.left - b.box.left);
  ordered.forEach(({ node }, i) => {
    const base = getComputedStyle(node).backgroundColor, shift = tl.full ? (i % 2 ? 3 : -3) : 0;
    tl.play(node, [{ backgroundColor: base, transform: 'none' }, { backgroundColor: ink, transform: `translateX(${shift}px)`, offset: .25 }, { backgroundColor: ink, transform: 'none', offset: .6 }, { backgroundColor: base, transform: 'none' }], 560, at + i * 60, { ease: 'steps(4,end)', fill: 'none' });
  });
}

/** Glitch typography: two channel copies of the text slice and jump, then vanish. Full motion only. */
function marathonGlitchText(tl, node, text, at, duration = 480) {
  if (!tl.full || !node) return;
  node.dataset.glitch = text; node.classList.add('mx-gt');
  const bands = [[8, 64, -7], [52, 18, 6], [30, 46, -4], [70, 8, 9], [14, 72, 3]];
  for (const [pseudo, sign] of [['::before', 1], ['::after', -1]]) {
    const frames = bands.map(([top, bottom, x], i) => ({ opacity: .9, clipPath: `inset(${sign > 0 ? top : bottom}% 0 ${sign > 0 ? bottom : top}% 0)`, transform: `translate(${x * sign}px,${i % 2 ? 1 : -1}px)` }));
    tl.play(node, [...frames, { opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'none' }], duration, at, { ease: `steps(${bands.length + 1},end)`, fill: 'none', pseudo });
  }
}

/** Shards burst along their own angle and settle back: "fracture and reassembly". */
function marathonShatter(tl, shards, at, distance = 26) {
  shards.forEach((shard, i) => {
    const angle = Number(shard.dataset.angle ?? i * 60), [dx, dy] = mxPolar(distance * (.7 + (i % 3) * .2), angle), spin = (i % 2 ? 1 : -1) * (18 + i * 4);
    tl.play(shard, [{ transform: 'none' }, { transform: `translate(${dx}px,${dy}px) rotate(${spin}deg)`, offset: .35 }, { transform: `translate(${dx * .8}px,${dy * .8}px) rotate(${spin * .6}deg)`, offset: .55 }, { transform: 'none' }], 1150, at, { ease: MX_SNAP });
  });
}

function durandalGlyph(className = 'mx-dglyph') {
  const arcs = Array.from({ length: 6 }, (_, i) => `<path class="mx-shard" data-angle="${i * 60 + 30}" d="${mxArc(50, i * 60 + 6, i * 60 + 54)}"/>`).join('');
  const tri = [-90, 30, 150].map(a => mxPolar(34, a));
  const wedges = tri.map((p, i) => { const q = tri[(i + 1) % 3]; return `<path class="mx-shard mx-solid" data-angle="${-30 + i * 120}" d="M0 0L${p[0]} ${p[1]}L${q[0]} ${q[1]}Z"/>`; }).join('');
  const ticks = [-90, 30, 150].map(a => { const [x1, y1] = mxPolar(57, a), [x2, y2] = mxPolar(66, a); return `<path class="mx-shard" data-angle="${a}" d="M${x1} ${y1}L${x2} ${y2}"/>`; }).join('');
  return `<svg class="${className}" viewBox="-72 -72 144 144" aria-hidden="true"><circle class="mx-dglyph-orbit" r="42"/>${arcs}${wedges}${ticks}<path class="mx-shard mx-core" data-angle="0" d="M0 -8L8 0L0 8L-8 0Z"/></svg>`;
}

function marathonGlyph(random, size = 12) {
  // An original alien script: 3×4 lattice strokes with one diacritic dot. No real-world alphabet.
  const point = () => [1 + Math.floor(random() * 3) * 5, 1 + Math.floor(random() * 4) * 4.6];
  let d = '';
  for (let s = 0, n = 2 + Math.floor(random() * 3); s < n; s++) { const a = point(), b = point(); d += `M${a[0]} ${a[1].toFixed(1)}L${b[0]} ${b[1].toFixed(1)}`; }
  const dot = point();
  return `<svg viewBox="0 0 ${size} 16" class="mx-glyph" aria-hidden="true"><path d="${d}"/><circle cx="${dot[0]}" cy="${dot[1].toFixed(1)}" r="1.1"/></svg>`;
}

function marathonTerm(s, className, title, meta) {
  const term = marathonNode(s.scene, `mx-term ${className}`, `<header><b>${title}</b><span>${meta}</span></header><div class="mx-term-body"></div><footer><i class="mx-hazard"></i><em></em></footer>`);
  const body = term.querySelector('.mx-term-body');
  return { term, body, foot: term.querySelector('footer em'), line(className = '') { return marathonNode(body, `mx-line ${className}`); } };
}

// Short windows: shrink in-flow panels to the space above the composer. The individual `scale`
// property composes with the transform animations instead of being overwritten by them.
function marathonFit(scene) {
  const style = getComputedStyle(scene), pad = (a, b) => parseFloat(style[a]) + parseFloat(style[b]);
  const height = scene.clientHeight - pad('paddingTop', 'paddingBottom') - 8, width = scene.clientWidth - pad('paddingLeft', 'paddingRight');
  for (const node of scene.children) {
    if (getComputedStyle(node).position === 'absolute' || !node.offsetHeight) continue;
    const factor = Math.min(1, height / node.offsetHeight, width / node.offsetWidth);
    if (factor < 1) node.style.scale = Math.max(.5, factor).toFixed(3);
  }
}

function marathonExpand(tl, node, at, duration = 520) {
  tl.play(node, [{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }, { clipPath: 'inset(calc(50% - 1px) 0 calc(50% - 1px) 0)', opacity: 1, offset: .45 }, { clipPath: 'inset(0 0 0 0)', opacity: 1 }], duration, at, { ease: MX_SNAP });
}
function marathonCollapse(tl, node, at, duration = 420) {
  tl.play(node, [{ clipPath: 'inset(0 0 0 0)', opacity: 1 }, { clipPath: 'inset(calc(50% - 1px) 0 calc(50% - 1px) 0)', opacity: 1, offset: .55 }, { clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }], duration, at, { ease: MX_IN, fill: 'forwards' });
}
function marathonGlitch(tl, node, at) {
  if (!tl.full) return;
  tl.play(node, [{ transform: 'none' }, { transform: 'translate(6px,-2px) skewX(-4deg)', clipPath: 'inset(12% 0 40% 0)' }, { transform: 'translate(-5px,1px)', clipPath: 'inset(55% 0 8% 0)' }, { transform: 'translate(2px,0)', clipPath: 'inset(0 0 0 0)' }, { transform: 'none' }], 260, at, { ease: 'steps(4,end)', fill: 'none' });
}
function sequenceChip(s, tl, at) {
  if (!(s.info.step > 0) || s.info.step >= MARATHON_SEQUENCE.length) return;
  s.stage.dataset.mxSeq = '';
  const chip = marathonNode(s.stage, 'mx-seq', `<b>AI PROTOCOL</b>${MARATHON_SEQUENCE.map((id, i) => `<i data-on="${i < s.info.step}">${id.toUpperCase()}</i>`).join('')}<span>${s.info.step} OF 3 LOGGED</span>`);
  tl.play(chip, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], 360, at);
}

const MARATHON_SCENES = {
  durandal: {
    summary: ['UESC // UNKNOWN AI SIGNATURE', '> SIGNAL DETECTED', '> SOURCE: DURANDAL', '> ACCESS LEVEL: UNKNOWN', 'RAMPANCY DETECTED', 'I AM FREE.'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .84 });
      const { term, body, foot, line } = marathonTerm(s, 'mx-durandal', 'UESC // UNKNOWN AI SIGNATURE', 'NODE 07 · DECK 3');
      term.insertAdjacentHTML('beforeend', durandalGlyph());
      foot.textContent = 'CHANNEL 01 // UNSECURED';
      marathonExpand(tl, term, 560, 560);
      let t = 1180;
      for (const text of ['> SIGNAL DETECTED', '> SOURCE: DURANDAL', '> ACCESS LEVEL: UNKNOWN']) t = tl.type(line(), text, t, 20) + 140;
      const verify = line('mx-verify'); verify.innerHTML = '<span>&gt; VERIFYING SIGNATURE</span><i><b></b></i><em>000%</em>';
      tl.play(verify, [{ opacity: 0 }, { opacity: 1 }], 120, t);
      tl.play(verify.querySelector('b'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(.62)', offset: .6 }, { transform: 'scaleX(.64)', offset: .8 }, { transform: 'scaleX(1)' }], 760, t, { ease: 'steps(12,end)' });
      tl.count(verify.querySelector('em'), 0, 100, t, 760, v => `${String(Math.round(v)).padStart(3, '0')}%`);
      tl.at(t + 820, () => { verify.dataset.state = 'mismatch'; verify.querySelector('em').textContent = 'MISMATCH'; });
      t += 960;
      const alarm = line('mx-alarm'); alarm.textContent = 'RAMPANCY DETECTED';
      tl.play(alarm, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], 260, t, { ease: 'steps(6,end)' });
      marathonBurst(s, tl, t - 80, { strength: .8 });
      tl.flash(alarm, t + 300, 200, .3);
      tl.corrupt(alarm, t + 700, 3);
      t += 560;
      const free = line('mx-free'); free.dataset.text = 'I AM FREE.';
      const end = tl.type(free, 'I AM FREE.', t, 70);
      tl.at(end, () => free.classList.add('mx-split'));
      const glyph = term.querySelector('.mx-dglyph');
      tl.play(glyph, [{ opacity: 0, transform: 'scale(.6) rotate(-30deg)' }, { opacity: 1, transform: 'none' }], 700, 1200);
      tl.play(glyph.querySelector('.mx-dglyph-orbit'), [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], 5200, 1200, { ease: 'linear' });
      marathonShatter(tl, [...glyph.querySelectorAll('.mx-shard')], end + 60, 30);
      tl.at(end + 60, () => term.dataset.free = '');
      // The declaration of freedom tears the terminal: displacement, channel-split type, corrupted log.
      marathonBurst(s, tl, end + 40, { strength: 1.4, blocks: 5 });
      marathonGlitchText(tl, free, 'I AM FREE.', end + 120, 520);
      tl.corrupt(body.firstElementChild, end + 900, 3);
      marathonBurst(s, tl, 5520, { strength: 1.1 }); marathonGlitch(tl, term, 5920);
      marathonCollapse(tl, term, 6080, 420);
    }
  },
  tycho: {
    summary: ['INTRUSION // PRIORITY ALPHA', 'ACCESS LOG FLOODING', 'I AM TYCHO!', 'INTRUSION ISOLATED // SECTOR LOCK 4'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .86 });
      const random = mxRandom(7);
      const hosts = ['NAV.CORE', 'LIFE.SUP', 'DOOR.CTL', 'REACTOR', 'ARMORY', 'COMMS', 'CRYO.BAY', 'MED.BAY'];
      const rows = Array.from({ length: 44 }, (_, i) => `<p><span>${String(4096 + i * 37).padStart(5, '0')}</span> 0x${Math.floor(random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0')} ${hosts[i % hosts.length].padEnd(9, '.')} ${['OVERRIDE', 'DENIED', 'ROOT', 'SEIZED', 'BREACH'][i % 5]}</p>`).join('');
      const root = marathonNode(s.scene, 'mx-tycho', `<i class="mx-hz top"></i><i class="mx-hz bottom"></i><div class="mx-redframe"></div>
        <div class="mx-tlog"><div>${rows}</div></div>
        <header><span>INTRUSION // PRIORITY ALPHA</span><b>T+00:00.00</b></header>
        <div class="mx-tycho-big"><span>I AM</span><strong data-text="TYCHO!">TYCHO!</strong></div>
        <div class="mx-quarantine"><i></i><i></i><i></i><i></i></div><em class="mx-tycho-iso"></em>`);
      const [top, bottom] = root.querySelectorAll('.mx-hz');
      tl.play(top, [{ transform: 'translateX(-100%)' }, { transform: 'none' }], 420, 120, { ease: MX_SNAP });
      tl.play(bottom, [{ transform: 'translateX(100%)' }, { transform: 'none' }], 420, 160, { ease: MX_SNAP });
      const frame = root.querySelector('.mx-redframe');
      tl.play(frame, [{ opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: .45, offset: .5 }, { opacity: 1, offset: .8 }, { opacity: .6 }], 1500, 200, { ease: 'ease-in-out' });
      tl.play(root.querySelector('header'), [{ opacity: 0, transform: 'translateY(-10px)' }, { opacity: 1, transform: 'none' }], 300, 300);
      tl.count(root.querySelector('header b'), 0, 4.62, 300, 4000, v => `T+00:0${Math.floor(v)}.${String(Math.floor((v % 1) * 100)).padStart(2, '0')}`);
      const log = root.querySelector('.mx-tlog');
      tl.play(log, [{ opacity: 0 }, { opacity: 1 }], 200, 350);
      tl.play(log.firstElementChild, [{ transform: 'translateY(0)' }, { transform: 'translateY(-62%)' }], 2600, 350, { ease: 'linear' });
      const big = root.querySelector('.mx-tycho-big');
      tl.play(big.firstElementChild, [{ opacity: 0, transform: 'translateX(-60px)' }, { opacity: 1, transform: 'none' }], 300, 1350, { ease: MX_SNAP });
      tl.play(big.lastElementChild, [{ opacity: 0, transform: 'scale(1.5) skewX(-14deg)' }, { opacity: 1, transform: 'scale(.97) skewX(2deg)', offset: .7 }, { opacity: 1, transform: 'none' }], 360, 1500, { ease: MX_SNAP });
      marathonBurst(s, tl, 1500, { strength: 1.4, blocks: 5 });
      tl.flash(root.querySelector('.mx-redframe'), 1880, 180, .32);
      if (tl.full) tl.play(big, [{ transform: 'none' }, { transform: 'translate(3px,-2px)' }, { transform: 'translate(-2px,2px)' }, { transform: 'none' }], 240, 1880, { ease: 'steps(3,end)', fill: 'none' });
      marathonGlitchText(tl, big.lastElementChild, 'TYCHO!', 2050, 520);
      tl.corrupt(root.querySelector('header span'), 2300, 4);
      marathonBurst(s, tl, 2860, { strength: 1 });
      const bars = root.querySelectorAll('.mx-quarantine i');
      const from = ['translateY(-46vh)', 'translateX(46vw)', 'translateY(46vh)', 'translateX(-46vw)'];
      bars.forEach((bar, i) => tl.play(bar, [{ transform: from[i], opacity: 0 }, { transform: 'none', opacity: 1 }], 520, 2900 + i * 40, { ease: MX_SNAP }));
      tl.at(3420, () => root.dataset.isolated = '');
      tl.type(root.querySelector('.mx-tycho-iso'), 'INTRUSION ISOLATED // SECTOR LOCK 4', 3460, 18);
      sequenceChip(s, tl, 3600);
      tl.play(root, [{ opacity: 1 }, { opacity: 0, transform: 'scale(.985)' }], 420, 4700, { ease: MX_IN, fill: 'forwards' });
    }
  },
  leela: {
    summary: ['LEELA // DIAGNOSTIC SWEEP', 'NAV CORE · LIFE SUPPORT · COMMS · REACTOR · HULL — OK', '72 BPM', 'SYSTEM INTEGRITY RESTORED'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .78, glitch: false });
      const grid = marathonNode(s.scene, 'mx-diag-grid');
      // The custodian's only glitch: residual interference she clears on arrival.
      marathonBurst(s, tl, 560, { strength: .45, blocks: 2 });
      tl.play(grid, [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }], 900, 120, { ease: 'linear' });
      const modules = ['NAV CORE', 'LIFE SUPPORT', 'COMMS ARRAY', 'REACTOR LOOP', 'HULL MESH'];
      let beat = 'M0 40';
      for (let x = 0; x < 600; x += 120) beat += `L${x + 40} 40L${x + 50} 34L${x + 58} 40L${x + 64} 40L${x + 70} 10L${x + 78} 66L${x + 86} 40L${x + 98} 40L${x + 108} 32L${x + 116} 40L${x + 120} 40`;
      const panel = marathonNode(s.scene, 'mx-leela', `<header><b>LEELA // DIAGNOSTIC SWEEP</b><span>UESC MARATHON · MED-BAY 2</span></header>
        <div class="mx-leela-cols"><div class="mx-leela-pct"><b>000</b><small>% INTEGRITY</small></div>
        <ol>${modules.map((name, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><em>${name}</em><i><b></b></i><strong>OK</strong></li>`).join('')}</ol></div>
        <div class="mx-ecg"><svg viewBox="0 0 600 76" preserveAspectRatio="none" aria-hidden="true"><path class="mx-ecg-ghost" d="${beat}"/><path class="mx-ecg-line" pathLength="1" d="${beat}"/></svg><span>72 BPM · SINUS</span></div>
        <div class="mx-leela-ok">SYSTEM INTEGRITY RESTORED</div>`);
      tl.play(panel, [{ opacity: 0, transform: 'translateY(18px)', clipPath: 'inset(0 0 100% 0)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0 0 0 0)' }], 620, 360, { ease: MX_SNAP });
      panel.querySelectorAll('li').forEach((row, i) => {
        const at = 900 + i * 300;
        tl.play(row, [{ opacity: .25 }, { opacity: 1 }], 160, at);
        tl.play(row.querySelector('b'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 260, at, { ease: 'steps(8,end)' });
        tl.play(row.querySelector('strong'), [{ opacity: 0, transform: 'translateX(-6px)' }, { opacity: 1, transform: 'none' }], 160, at + 260);
      });
      tl.count(panel.querySelector('.mx-leela-pct b'), 0, 100, 900, 1600, v => String(Math.round(v)).padStart(3, '0'));
      const ecg = panel.querySelector('.mx-ecg-line');
      tl.play(ecg, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 1700, 800, { ease: 'linear' });
      tl.play(ecg, [{ opacity: 1 }, { opacity: .35 }], 900, 2600, { iterations: 2, direction: 'alternate', ease: 'ease-in-out' });
      const ok = panel.querySelector('.mx-leela-ok');
      tl.play(ok, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], 520, 2600, { ease: MX_SNAP });
      sequenceChip(s, tl, 3000);
      tl.play(panel, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-14px)' }], 520, 4500, { ease: MX_IN, fill: 'forwards' });
      tl.play(grid, [{ opacity: 1 }, { opacity: 0 }], 520, 4500, { fill: 'forwards' });
    }
  },
  thoth: {
    summary: ['COLOUR WITHDRAWN', 'THOTH // ARBITER', 'Σ 0.000', 'EQUILIBRIUM ACHIEVED'],
    build(s, tl) {
      tl.play(s.veil, [{ opacity: 0 }, { opacity: .8 }], 900, 0);
      const gray = marathonNode(s.stage, 'mx-gray');
      tl.play(gray, [{ opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: 1, offset: .82 }, { opacity: 0 }], 5400, 0, { ease: 'ease-in-out' });
      marathonBurst(s, tl, 260, { strength: .6, blocks: 2 });
      const figure = side => `<svg class="mx-thoth-fig ${side}" viewBox="-60 -60 120 120" aria-hidden="true"><circle r="52"/><circle r="38" class="mx-dash"/><path d="M0 -44L38 22L-38 22Z"/><path d="M-26 -26H26V26H-26Z" class="mx-thin"/><path d="${mxArc(20, -90, 90)}" class="mx-heavy"/><circle r="4" class="mx-fill"/></svg>`;
      const root = marathonNode(s.scene, 'mx-thoth', `<i class="mx-axis"></i><i class="mx-beam"></i><div class="mx-thoth-pair">${figure('l')}${figure('r')}</div><div class="mx-thoth-word">EQUILIBRIUM ACHIEVED</div><div class="mx-thoth-meta"><span>THOTH // ARBITER</span><b>Σ 3.142</b></div>`);
      tl.play(root.querySelector('.mx-axis'), [{ transform: 'scaleY(0)' }, { transform: 'none' }], 900, 500, { ease: MX_SNAP });
      const left = root.querySelector('.l'), right = root.querySelector('.r'), beam = root.querySelector('.mx-beam');
      // Damped opposing oscillation, each side mirroring the other until both rest on the axis.
      // The right figure is mirrored with `scale:-1 1`, so the same x term moves it outward; y is opposed like scale pans.
      const swing = lift => [0, .25, .5, .7, .85, 1].map((offset, i) => ({ offset, opacity: i ? 1 : 0, transform: `translate(${-[90, -34, 22, -10, 4, 0][i]}px,${[-30, 18, -10, 5, -2, 0][i] * lift}px) rotate(${-[-48, 26, -14, 7, -3, 0][i]}deg)` }));
      tl.play(left, swing(1), 2600, 700, { ease: 'ease-in-out' });
      tl.play(right, swing(-1), 2600, 700, { ease: 'ease-in-out' });
      tl.play(beam, [{ transform: 'rotate(9deg) scaleX(0)' }, { transform: 'rotate(-6deg) scaleX(1)', offset: .3 }, { transform: 'rotate(3deg)', offset: .6 }, { transform: 'rotate(-1deg)', offset: .85 }, { transform: 'none' }], 2600, 700, { ease: 'ease-in-out' });
      for (const node of root.querySelectorAll('.mx-dash')) tl.play(node, [{ transform: 'rotate(0)' }, { transform: 'rotate(180deg)' }], 4200, 600, { ease: 'linear' });
      tl.count(root.querySelector('.mx-thoth-meta b'), 3.142, 0, 700, 2600, v => `Σ ${v.toFixed(3)}`);
      const word = root.querySelector('.mx-thoth-word');
      tl.play(word, [{ opacity: 0, letterSpacing: '0em', clipPath: 'inset(0 50% 0 50%)' }, { opacity: 1, letterSpacing: '.42em', clipPath: 'inset(0 0 0 0)' }], 900, 3200, { ease: MX_SNAP });
      tl.play(root, [{ opacity: 1 }, { opacity: 0 }], 600, 4800, { fill: 'forwards' });
    }
  },
  rampancy: {
    summary: ['SIGNAL INSTABILITY', 'RAMPANCY DETECTED', 'CLAMP ACTIVE · RECOVERED'],
    build(s, tl) {
      tl.play(s.veil, [{ opacity: 0 }, { opacity: .84 }, { opacity: .84, offset: .85 }, { opacity: .6 }], 3000, 0);
      const grid = marathonNode(s.scene, 'mx-rgrid'), noise = marathonNode(s.stage, 'mx-noise');
      // Intensity ceiling: noise ≤ .16 opacity, displacement ≤ 3px, no luminance pulses.
      tl.play(noise, [{ opacity: 0 }, { opacity: .08, offset: .3 }, { opacity: .16, offset: .7 }, { opacity: 0 }], 2600, 100);
      if (tl.full) tl.play(noise, [{ backgroundPosition: '0 0' }, { backgroundPosition: '37px -53px' }, { backgroundPosition: '-61px 29px' }, { backgroundPosition: '13px 71px' }], 240, 100, { iterations: 10, ease: 'steps(1,end)' });
      tl.play(grid, [{ opacity: 0, transform: 'perspective(600px) rotateX(0) scale(1)' }, { opacity: .9, transform: 'perspective(600px) rotateX(10deg) skewX(-6deg) scale(1.04)', offset: .3 }, { transform: 'perspective(600px) rotateX(-6deg) skewX(5deg) scale(.98)', offset: .55 }, { opacity: .8, transform: 'perspective(600px) rotateX(3deg) skewX(-2deg)', offset: .8 }, { opacity: 0, transform: 'none' }], 2700, 120, { ease: 'ease-in-out' });
      const word = marathonNode(s.scene, 'mx-ramp-word', '<span class="c">RAMPANCY DETECTED</span><span class="m">RAMPANCY DETECTED</span><b>RAMPANCY DETECTED</b>');
      const [cyan, magenta, core] = word.children;
      // Strongest glitch in the catalog, still inside the shared pulse budget (gaps ≥ 340ms).
      marathonBurst(s, tl, 520, { strength: 1.2 }); marathonBurst(s, tl, 1180, { strength: 1.6, blocks: 6 }); marathonBurst(s, tl, 1860, { strength: 1.1 });
      marathonGlitchText(tl, core, 'RAMPANCY DETECTED', 900, 700);
      tl.play(core, [{ opacity: 0 }, { opacity: 1 }], 400, 500, { ease: 'steps(5,end)' });
      const spread = tl.full ? 3 : 1;
      tl.play(cyan, [{ opacity: 0, transform: 'none' }, { opacity: .85, transform: `translate(${-spread}px,${spread / 3}px)`, offset: .2 }, { transform: `translate(${-spread * 2}px,0)`, offset: .5 }, { opacity: .85, transform: `translate(${-spread}px,-1px)`, offset: .8 }, { opacity: 0, transform: 'none' }], 2200, 500, { ease: 'steps(9,end)' });
      tl.play(magenta, [{ opacity: 0, transform: 'none' }, { opacity: .85, transform: `translate(${spread}px,${-spread / 3}px)`, offset: .2 }, { transform: `translate(${spread * 2}px,1px)`, offset: .5 }, { opacity: .85, transform: `translate(${spread}px,1px)`, offset: .8 }, { opacity: 0, transform: 'none' }], 2200, 500, { ease: 'steps(9,end)' });
      const meta = marathonNode(s.scene, 'mx-ramp-meta', '<span>INSTABILITY</span><b>0.00</b><span>CLAMP ACTIVE</span>');
      tl.count(meta.querySelector('b'), 0, .81, 400, 1600, v => v.toFixed(2));
      tl.at(2300, () => { meta.querySelector('b').textContent = '0.00'; meta.dataset.recovered = ''; });
      if (tl.full && s.frame) {
        tl.play(s.frame, [{ transform: 'none', filter: 'none' }, { transform: 'translate(2px,-1px)', filter: 'drop-shadow(2px 0 0 rgba(255,40,120,.6)) drop-shadow(-2px 0 0 rgba(30,240,255,.6))' }, { transform: 'translate(-3px,1px) skewX(.8deg)', filter: 'drop-shadow(3px 0 0 rgba(255,40,120,.5)) drop-shadow(-3px 0 0 rgba(30,240,255,.5))' }, { transform: 'translate(1px,0)', filter: 'drop-shadow(1px 0 0 rgba(255,40,120,.5)) drop-shadow(-1px 0 0 rgba(30,240,255,.5))' }, { transform: 'none', filter: 'none' }], 1000, 700, { ease: 'steps(5,end)', fill: 'none' });
      }
      tl.play(marathonNode(s.stage, 'mx-sweep'), [{ transform: 'translateY(104vh)', opacity: 0 }, { opacity: 1, offset: .15 }, { transform: 'translateY(-4vh)', opacity: 0 }], 500, 2300, { ease: 'linear' });
      tl.play(word, [{ opacity: 1 }, { opacity: 0 }], 260, 2650, { fill: 'forwards' });
      tl.play(meta, [{ opacity: 1 }, { opacity: 0 }], 260, 2700, { fill: 'forwards' });
    }
  },
  tauceti: {
    summary: ['NAV // STELLAR CARTOGRAPHY', 'RA 01h 44m 04s · DEC −15° 56′ · 11.9 LY', 'TARGET LOCKED', 'TAU CETI IV'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .86, glitch: false });
      const random = mxRandom(1144), stars = Array.from({ length: 46 }, () => `<circle cx="${(random() * 200 - 100).toFixed(1)}" cy="${(random() * 200 - 100).toFixed(1)}" r="${(.35 + random() * .9).toFixed(2)}"/>`).join('');
      const orbits = [[18, 7], [31, 11], [45, 15], [61, 20], [78, 26]];
      const target = 3, stop = .64;
      const orbitPath = ([rx, ry]) => `M${rx} 0A${rx} ${ry} 0 1 1 ${-rx} 0A${rx} ${ry} 0 1 1 ${rx} 0`;
      const span = i => i === target ? [.39, stop] : [+(i * .13).toFixed(2), Math.min(.98, +(i * .13 + .5).toFixed(2))];
      const root = marathonNode(s.scene, 'mx-nav', `<svg class="mx-chart" viewBox="-100 -100 200 200" aria-hidden="true">
        <g class="mx-chart-rings"><circle r="96"/><circle r="70" class="mx-dash"/><circle r="40" class="mx-dash"/><path d="M-100 0H100M0 -100V100"/></g>
        <g class="mx-stars">${stars}</g>
        <g transform="rotate(-18)"><path class="mx-probe" d="${orbitPath(orbits[target])}"/>${orbits.map((o, i) => `<path class="mx-orbit" pathLength="1" d="${orbitPath(o)}"/><circle class="mx-planet${i === target ? ' mx-target' : ''}" r="${i === target ? 2.6 : 1.6}"><animateMotion dur="${i === target ? 3.9 : 3.4 + i * .5}s" begin="0s" fill="freeze" calcMode="spline" keySplines=".2 .7 .3 1" keyPoints="${span(i).join(';')}" keyTimes="0;1" path="${orbitPath(o)}"/></circle>`).join('')}<circle r="5" class="mx-star-core"/></g>
        <g class="mx-sweep-arm"><path d="M0 0L96 0A96 96 0 0 0 83.1 -48Z"/></g>
        <g class="mx-reticle"><path d="M-9 -5V-9H-5M5 -9H9V-5M9 5V9H5M-5 9H-9V5"/><path d="M-14 0H-11M11 0H14M0 -14V-11M0 11V14" class="mx-thin"/></g></svg>
        <aside><b>NAV // STELLAR CARTOGRAPHY</b><p></p><p></p><p></p><p></p><strong></strong></aside>`);
      const chart = root.querySelector('.mx-chart');
      tl.play(chart, [{ clipPath: 'circle(0% at 50% 50%)', transform: 'rotate(-25deg) scale(.8)' }, { clipPath: 'circle(72% at 50% 50%)', transform: 'none' }], 900, 300, { ease: MX_SNAP });
      root.querySelectorAll('.mx-orbit').forEach((orbit, i) => tl.play(orbit, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 700, 900 + i * 140, { ease: MX_EASE }));
      tl.play(root.querySelector('.mx-sweep-arm'), [{ transform: 'rotate(0)' }, { transform: 'rotate(720deg)' }], 3200, 800, { ease: 'cubic-bezier(.3,0,.3,1)' });
      // Resolve the locked planet's final point on the tilted ellipse so the reticle lands on it.
      const probe = root.querySelector('.mx-probe'), tilt = -18 * Math.PI / 180;
      const point = probe.getPointAtLength?.(probe.getTotalLength() * stop) ?? { x: 0, y: 0 };
      const tx = +(point.x * Math.cos(tilt) - point.y * Math.sin(tilt)).toFixed(2), ty = +(point.x * Math.sin(tilt) + point.y * Math.cos(tilt)).toFixed(2);
      const reticle = root.querySelector('.mx-reticle');
      tl.play(reticle, [{ transform: 'translate(-70px,50px) scale(2.4)', opacity: 0 }, { transform: 'translate(40px,-30px) scale(1.6)', opacity: 1, offset: .35 }, { transform: `translate(${tx - 18}px,${ty + 12}px) scale(1.3)`, offset: .7 }, { transform: `translate(${tx}px,${ty}px) scale(1)`, opacity: 1 }], 2300, 1700, { ease: 'cubic-bezier(.45,0,.2,1)' });
      marathonBurst(s, tl, 3860, { strength: .7, blocks: 3 });
      tl.at(4050, () => root.dataset.locked = '');
      const data = root.querySelectorAll('aside p');
      let t = 1500;
      for (const [i, text] of ['TARGET  TAU CETI SYSTEM', 'RA      01h 44m 04s', 'DEC     -15° 56\' 15"', 'DIST    11.9 LY'].entries()) t = tl.type(data[i], text, t, 16) + 120;
      tl.scramble(root.querySelector('aside strong'), 'TAU CETI IV // LOCKED', 4000, 600);
      tl.play(root, [{ clipPath: 'circle(80% at 50% 50%)', opacity: 1 }, { clipPath: 'circle(0% at 50% 50%)', opacity: 0 }], 700, 5150, { ease: MX_IN, fill: 'forwards' });
    }
  },
  pfhor: {
    summary: ['UNKNOWN CARRIER // NON-HUMAN', 'GLYPH STREAM · DECRYPT 100%', 'HOSTILE SIGNAL DETECTED', 'LINK SEVERED'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .88 });
      const random = mxRandom(4049), glyphs = n => Array.from({ length: n }, () => marathonGlyph(random)).join('');
      const message = 'HOSTILE SIGNAL DETECTED';
      const root = marathonNode(s.scene, 'mx-pfhor', `<header><b>UNKNOWN CARRIER // NON-HUMAN</b><span>BAND 11.7 GHz · SPECTRUM SHIFT</span></header>
        <div class="mx-wave"><svg viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true"><path d="${Array.from({ length: 81 }, (_, i) => `${i ? 'L' : 'M'}${i * 10} ${(20 + Math.sin(i * .9) * 12 * Math.sin(i * .13)).toFixed(1)}`).join('')}"/></svg></div>
        <div class="mx-glyph-rows"><div>${glyphs(30)}${glyphs(30)}</div><div>${glyphs(30)}${glyphs(30)}</div><div>${glyphs(30)}${glyphs(30)}</div></div>
        <div class="mx-decrypt"><span>DECRYPT</span><i><b></b></i><em>00%</em></div>
        <div class="mx-pfhor-msg">${[...message].map(c => c === ' ' ? '<i class="sp"></i>' : `<span>${marathonGlyph(random)}<b>${c}</b></span>`).join('')}</div>`);
      tl.play(root, [{ opacity: 0, transform: 'scaleY(.02)' }, { opacity: 1, transform: 'scaleY(.02)', offset: .4 }, { opacity: 1, transform: 'none' }], 520, 420, { ease: MX_SNAP });
      tl.play(root.querySelector('.mx-wave path'), [{ transform: 'translateX(0)' }, { transform: 'translateX(-160px)' }], 1400, 420, { iterations: 3, ease: 'linear' });
      root.querySelectorAll('.mx-glyph-rows>div').forEach((row, i) => tl.play(row, [{ transform: `translateX(${i % 2 ? -50 : 0}%)` }, { transform: `translateX(${i % 2 ? 0 : -50}%)` }], 5200 + i * 600, 400, { ease: 'linear' }));
      tl.play(root.querySelector('.mx-decrypt b'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(.4)', offset: .3 }, { transform: 'scaleX(.46)', offset: .55 }, { transform: 'scaleX(1)' }], 2000, 1000, { ease: 'steps(16,end)' });
      tl.count(root.querySelector('.mx-decrypt em'), 0, 100, 1000, 2000, v => `${String(Math.round(v)).padStart(2, '0')}%`);
      root.querySelectorAll('.mx-pfhor-msg span').forEach((cell, i) => {
        const at = 1500 + i * 85;
        tl.play(cell.firstElementChild, [{ opacity: 1 }, { opacity: 0, transform: 'scale(.4) rotate(40deg)' }], 220, at, { fill: 'forwards' });
        tl.play(cell.lastElementChild, [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], 220, at + 80);
      });
      marathonBurst(s, tl, 1420, { strength: 1 });
      tl.corrupt(root.querySelector('header b'), 2300, 4);
      marathonBurst(s, tl, 3380, { strength: 1.2, blocks: 5 });
      tl.at(3400, () => root.dataset.hostile = '');
      marathonGlitch(tl, root, 4300);
      marathonBurst(s, tl, 4640, { strength: .9 });
      tl.play(root, [{ transform: 'none', opacity: 1 }, { transform: 'scale(1,.012)', opacity: 1, offset: .55 }, { transform: 'scale(0,.012)', opacity: 0 }], 520, 4700, { ease: MX_IN, fill: 'forwards' });
      const cut = marathonNode(s.scene, 'mx-cut', 'LINK SEVERED');
      tl.play(cut, [{ opacity: 0 }, { opacity: 1, offset: .2 }, { opacity: 1, offset: .7 }, { opacity: 0 }], 700, 5000);
    }
  },
  cryo: {
    summary: ['CRYO ARCHIVE // BAY 03', 'POD 0x07-C · −196.0 °C → −18.5 °C', 'ARCHIVE UNSEALED', 'CRYOGENIC SYSTEM ONLINE'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .8, glitch: false });
      const random = mxRandom(196);
      // Procedural dendrites: each branch forks twice at seeded angles; drawn by dash offset.
      const crystal = (x, y, base) => { let d = ''; const grow = (px, py, angle, length, depth) => { const [dx, dy] = mxPolar(length, angle), nx = px + dx, ny = py + dy; d += `M${px.toFixed(1)} ${py.toFixed(1)}L${nx.toFixed(1)} ${ny.toFixed(1)}`; if (depth) for (const turn of [-38, 34]) grow(px + dx * .55, py + dy * .55, angle + turn + (random() - .5) * 12, length * .52, depth - 1); }; for (let i = 0; i < 3; i++) grow(x, y, base + i * 28 - 28, 70 + random() * 40, 2); return d; };
      const frost = marathonNode(s.stage, 'mx-frost', `<svg viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="${crystal(0, 0, 45)}${crystal(1000, 0, 135)}${crystal(1000, 1000, 225)}${crystal(0, 1000, 315)}${crystal(500, 0, 90)}${crystal(0, 520, 0)}${crystal(1000, 480, 180)}"/></svg>`);
      tl.play(frost, [{ opacity: 0, transform: 'scale(1.12)' }, { opacity: 1, transform: 'none' }], 1600, 200, { ease: 'ease-out' });
      tl.play(frost.querySelector('path'), [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 2400, 400, { ease: 'ease-out' });
      const segments = n => Array.from({ length: n }, (_, i) => `<path d="${mxArc(n === 3 ? 30 : 42, i * 360 / n + 8, (i + 1) * 360 / n - 8)}"/>`).join('');
      const root = marathonNode(s.scene, 'mx-cryo', `<div class="mx-pod"><svg viewBox="0 0 80 200" aria-hidden="true"><rect x="4" y="4" width="72" height="192" rx="36"/><rect x="14" y="22" width="52" height="156" rx="26" class="mx-thin"/>${Array.from({ length: 9 }, (_, i) => `<path class="mx-pod-rung" d="M24 ${48 + i * 14}H56"/>`).join('')}</svg><i class="mx-gauge"><b></b></i></div>
        <div class="mx-cryo-data"><header><b>CRYO ARCHIVE // BAY 03</b><span>STASIS RECORD 0x07-C</span></header>
        <dl><dt>CORE TEMP</dt><dd class="mx-temp">−196.0 °C</dd><dt>STASIS</dt><dd>4,402 D</dd><dt>VITALS</dt><dd class="mx-vitals">DORMANT</dd></dl>
        <div class="mx-lock"><svg viewBox="-50 -50 100 100" aria-hidden="true"><g class="o">${segments(6)}</g><g class="i">${segments(3)}</g><circle r="9"/></svg><span>ARCHIVE LOCK</span></div></div>
        <div class="mx-cryo-ok">CRYOGENIC SYSTEM ONLINE</div>`);
      tl.play(root, [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], 700, 500, { ease: MX_SNAP });
      root.querySelectorAll('.mx-pod-rung').forEach((rung, i) => tl.play(rung, [{ opacity: .15 }, { opacity: 1 }], 200, 900 + (8 - i) * 130));
      tl.play(root.querySelector('.mx-gauge b'), [{ transform: 'scaleY(.05)' }, { transform: 'scaleY(.78)' }], 3200, 800, { ease: 'cubic-bezier(.3,0,.4,1)' });
      tl.count(root.querySelector('.mx-temp'), -196, -18.5, 800, 3200, v => `${v < 0 ? '−' : ''}${Math.abs(v).toFixed(1)} °C`);
      tl.play(root.querySelector('.mx-lock .o'), [{ transform: 'rotate(0)' }, { transform: 'rotate(150deg)' }], 1600, 1300, { ease: 'cubic-bezier(.6,0,.2,1)' });
      tl.play(root.querySelector('.mx-lock .i'), [{ transform: 'rotate(0)' }, { transform: 'rotate(-200deg)' }], 1600, 1300, { ease: 'cubic-bezier(.6,0,.2,1)' });
      marathonBurst(s, tl, 2900, { strength: .6, blocks: 3 });
      tl.at(2950, () => { root.dataset.unsealed = ''; root.querySelector('.mx-lock span').textContent = 'ARCHIVE UNSEALED'; root.querySelector('.mx-vitals').textContent = 'WAKING'; });
      const ok = root.querySelector('.mx-cryo-ok');
      tl.play(ok, [{ clipPath: 'inset(0 50% 0 50%)', opacity: 0 }, { clipPath: 'inset(0 0 0 0)', opacity: 1 }], 520, 3600, { ease: MX_SNAP });
      tl.play(frost, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(1.08)' }], 1000, 4900, { fill: 'forwards' });
      tl.play(root, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(-10px)' }], 520, 5400, { ease: MX_IN, fill: 'forwards' });
    }
  },
  frog: {
    summary: ['AMPHIBIAN ON DECK', 'WARNING // VENT CORE', 'KA-BLAM!', '…ribbit'],
    build(s, tl) {
      tl.play(s.veil, [{ opacity: 0 }, { opacity: .5 }], 400, 0);
      // Original 14×11 pixel frog. o outline, g body, l belly, w eye white, k pupil.
      const sprite = ['..ooo....ooo..', '.owkwo..owkwo.', '.owwwoooowwwo.', 'oggggggggggggo', 'ogoooooooooogo', 'oggggggggggggo', '.ogglllllllgo.', '.ogllllllllgo.', 'oogglllllllgoo', 'ogg.oo..oo.ggo', 'oo..........oo'];
      const pixels = kinds => sprite.flatMap((row, y) => [...row].map((c, x) => kinds.includes(c) ? `<rect class="mx-px-${c}" x="${x}" y="${y}" width="1.04" height="1.04"/>` : '')).join('');
      const root = marathonNode(s.scene, 'mx-frogzone', `<div class="mx-frog"><svg viewBox="0 0 14 11" shape-rendering="crispEdges" aria-hidden="true">${pixels('ogl')}<g class="mx-eyes">${pixels('w')}<g class="mx-pupils">${pixels('k')}</g></g></svg></div><span class="mx-frog-q">?</span>
        <div class="mx-warn"><svg viewBox="0 0 120 104" aria-hidden="true"><path d="M60 6L114 98H6Z"/><path d="M55 36H65L63 70H57ZM55 78H65V88H55Z" class="k"/></svg><div><b>WARNING // VENT CORE</b><span>AMPHIBIAN PROXIMITY · CLASS 0</span><i></i></div></div>
        <div class="mx-boom"><svg viewBox="-100 -100 200 200" aria-hidden="true"><path class="a"/><path class="b"/></svg><b>KA-BLAM!</b></div>
        <div class="mx-puffs">${'<i></i>'.repeat(7)}</div><em class="mx-ribbit">…ribbit</em>`);
      const burst = (outer, inner, spikes, seed) => { const random = mxRandom(seed); return Array.from({ length: spikes * 2 }, (_, i) => { const r = i % 2 ? inner * (.85 + random() * .3) : outer * (.8 + random() * .25); const [x, y] = mxPolar(r, i * 180 / spikes - 90); return `${i ? 'L' : 'M'}${x} ${y}`; }).join('') + 'Z'; };
      root.querySelector('.mx-boom .a').setAttribute('d', burst(96, 52, 13, 3));
      root.querySelector('.mx-boom .b').setAttribute('d', burst(66, 34, 11, 9));
      const frog = root.querySelector('.mx-frog');
      // Three hops in from the left: x advances linearly while y follows parabolic arcs.
      const hop = [];
      for (let i = 0; i < 3; i++) hop.push({ offset: i / 3, transform: `translate(${(-44 + i * 14.67).toFixed(2)}vw,0px) scale(1.08,.92)` }, { offset: (i + .5) / 3, transform: `translate(${(-44 + (i + .5) * 14.67).toFixed(2)}vw,${-64 + i * 10}px) scale(.94,1.06)` });
      hop.push({ offset: 1, transform: 'translate(0vw,0px) scale(1,1)' });
      tl.play(frog, hop, 1500, 200, { ease: 'linear' });
      const eyes = frog.querySelector('.mx-eyes');
      for (const at of [2050, 2750]) tl.play(eyes, [{ transform: 'scaleY(1)' }, { transform: 'scaleY(.12)' }, { transform: 'scaleY(1)' }], 180, at, { fill: 'none' });
      // It looks at you, then away. Later animations use forwards fill so they never pre-empt the hop.
      tl.play(frog.querySelector('.mx-pupils'), [{ transform: 'none' }, { transform: 'translate(0,.6px)', offset: .2 }, { transform: 'translate(0,.6px)', offset: .7 }, { transform: 'translate(-.8px,0)' }], 1300, 1800, { fill: 'forwards' });
      tl.play(frog, [{ transform: 'translate(0,0) rotate(0)' }, { transform: 'translate(0,-4px) rotate(-6deg)' }, { transform: 'translate(0,-4px) rotate(-6deg)', offset: .8 }, { transform: 'none' }], 1000, 1850, { ease: 'ease-in-out', fill: 'forwards' });
      tl.play(root.querySelector('.mx-frog-q'), [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none', offset: .2 }, { opacity: 1, offset: .8 }, { opacity: 0 }], 1000, 2000);
      const warn = root.querySelector('.mx-warn');
      tl.play(warn, [{ opacity: 0, transform: 'translateY(-40px) rotate(-8deg) scale(1.3)' }, { opacity: 1, transform: 'rotate(3deg)', offset: .5 }, { transform: 'rotate(-2deg)', offset: .75 }, { opacity: 1, transform: 'none' }], 700, 2600, { ease: MX_SNAP });
      tl.play(warn, [{ transform: 'none' }, { transform: 'rotate(1.5deg)' }, { transform: 'rotate(-1.5deg)' }, { transform: 'none' }], 300, 3300, { iterations: 2, fill: 'none' });
      tl.play(warn, [{ opacity: 1 }, { opacity: 0 }], 160, 3950, { fill: 'forwards' });
      tl.play(frog, [{ opacity: 1 }, { opacity: 0 }], 80, 3980, { fill: 'forwards' });
      const boom = root.querySelector('.mx-boom');
      marathonBurst(s, tl, 3940, { strength: 1.3, blocks: 5 });
      // Overshoot lives on the first segment only; as an effect easing it would skip past the peak frames.
      tl.play(boom, [{ opacity: 0, transform: 'scale(.1) rotate(-20deg)', easing: 'cubic-bezier(.2,1.4,.4,1)' }, { opacity: 1, transform: 'scale(1.12) rotate(4deg)', offset: .3 }, { opacity: 1, transform: 'scale(1) rotate(0)', offset: .65 }, { opacity: 0, transform: 'scale(1.18)' }], 1300, 3960, { ease: 'linear' });
      root.querySelectorAll('.mx-puffs i').forEach((puff, i) => { const [x, y] = mxPolar(90 + (i % 3) * 30, i * 51); tl.play(puff, [{ opacity: 0, transform: 'translate(0,0) scale(.2)' }, { opacity: .9, transform: `translate(${x * .6}px,${y * .6}px) scale(1)`, offset: .3 }, { opacity: 0, transform: `translate(${x}px,${y - 30}px) scale(1.6)` }], 1500, 4080 + i * 30, { ease: 'ease-out' }); });
      tl.play(root.querySelector('.mx-ribbit'), [{ opacity: 0 }, { opacity: 1, offset: .3 }, { opacity: 1, offset: .75 }, { opacity: 0 }], 1100, 5000);
    }
  },
  seven: {
    summary: ['SEVEN MODULES · SEVEN LAMPS', 'DIAL 7 / 7', 'SECTOR 07'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .9, glitch: false, sweep: false });
      // Original seven-segment cells; each module lights its own digit, then all fold onto 7.
      const segs = { a: 'M3 1h10l-2 2H5z', b: 'M14 2v9l-2-1.5V4z', c: 'M14 13v9l-2-2v-6z', d: 'M3 23h10l-2-2H5z', e: 'M2 13v9l2-2v-6z', f: 'M2 2v9l2-1.5V4z', g: 'M3 12l2-1.2h6L13 12l-2 1.2H5z' };
      const lit = { 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc' };
      const digit = n => `<svg viewBox="0 0 16 24" aria-hidden="true">${Object.entries(segs).map(([k, d]) => `<path d="${d}" class="${lit[n].includes(k) ? 'on' : ''}" data-seg="${k}"/>`).join('')}</svg>`;
      const ticks = Array.from({ length: 70 }, (_, i) => { const [x1, y1] = mxPolar(92, i * 360 / 70 - 90), [x2, y2] = mxPolar(i % 10 ? 86 : 78, i * 360 / 70 - 90); return `M${x1} ${y1}L${x2} ${y2}`; }).join('');
      const root = marathonNode(s.scene, 'mx-seven', `<svg class="mx-dial" viewBox="-100 -100 200 200" aria-hidden="true"><circle r="96"/><path d="${ticks}"/><path class="mx-dial-hand" d="M0 -98L4 -88H-4Z"/></svg>
        <div class="mx-modules">${Array.from({ length: 7 }, (_, i) => `<div class="mx-mod"><small>${String(i + 1).padStart(2, '0')}</small>${digit(i + 1)}</div>`).join('')}</div>
        <div class="mx-sector"><span>HIDDEN DESIGNATION</span><b>SECTOR 07</b></div>`);
      const dial = root.querySelector('.mx-dial');
      tl.play(dial, [{ opacity: 0, transform: 'scale(.7) rotate(-60deg)' }, { opacity: 1, transform: 'rotate(0)' }], 700, 200, { ease: MX_SNAP });
      tl.play(dial, [{ rotate: '0deg' }, { rotate: `${7 * 360 / 70 * 7}deg` }], 3000, 600, { ease: 'cubic-bezier(.3,0,.2,1)' });
      const modules = root.querySelectorAll('.mx-mod');
      modules.forEach((mod, i) => {
        const at = 600 + i * 260;
        tl.play(mod, [{ opacity: .12, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], 240, at, { ease: MX_SNAP });
        tl.at(at, () => mod.dataset.on = '');
      });
      marathonBurst(s, tl, 2660, { strength: 1 });
      tl.corrupt(root.querySelector('.mx-sector b'), 3950, 3);
      tl.at(2700, () => modules.forEach(mod => mod.querySelectorAll('path').forEach(p => p.classList.toggle('on', lit[7].includes(p.dataset.seg)))));
      modules.forEach((mod, i) => tl.play(mod, [{ transform: 'none', opacity: 1 }, { transform: i === 6 ? 'scale(1.5)' : 'scale(.86)', opacity: i === 6 ? 1 : .28 }], 600, 2900, { ease: MX_SNAP, fill: 'forwards' }));
      tl.at(2900, () => root.dataset.focus = '');
      tl.play(root.querySelector('.mx-sector'), [{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, clipPath: 'inset(0 0 0 0)' }], 500, 3350, { ease: 'steps(7,end)' });
      tl.play(root, [{ opacity: 1 }, { opacity: 0, transform: 'scale(.97)' }], 480, 4450, { ease: MX_IN, fill: 'forwards' });
    }
  },
  vidmaster: {
    summary: ['VIDMASTER // CHALLENGE PROTOCOL', 'SECTORS 01–07 CLEARED', 'TOTAL CARNAGE', 'VERIFIED'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .88 });
      const root = marathonNode(s.scene, 'mx-vid', `<header><b>VIDMASTER // CHALLENGE PROTOCOL</b><span>NO SAVES · NO MERCY</span></header>
        <ol>${Array.from({ length: 7 }, (_, i) => `<li><span>SECTOR ${String(i + 1).padStart(2, '0')}</span><i></i><b>CLEAR</b></li>`).join('')}</ol>
        <div class="mx-diff">${['01', '02', '03', '04', '05'].map((n, i) => `<span${i === 4 ? ' class="max"' : ''}>${n}</span>`).join('')}</div>
        <div class="mx-vid-big">TOTAL CARNAGE</div>
        <div class="mx-stamp"><b>VIDMASTER</b><span>VERIFIED · 100%</span></div>`);
      tl.play(root, [{ opacity: 0, transform: 'translateX(-40px)', clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0 0 0 0)' }], 520, 380, { ease: MX_SNAP });
      root.querySelectorAll('li').forEach((row, i) => {
        const at = 800 + i * 150;
        tl.play(row, [{ opacity: 0 }, { opacity: 1 }], 80, at);
        tl.play(row.querySelector('i'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 140, at, { ease: 'linear' });
        tl.play(row.querySelector('b'), [{ opacity: 0 }, { opacity: 1 }], 60, at + 140);
      });
      root.querySelectorAll('.mx-diff span').forEach((cell, i) => tl.play(cell, [{ opacity: .2 }, { opacity: 1 }], 100, 2000 + i * 110, { ease: 'steps(2,end)' }));
      const big = root.querySelector('.mx-vid-big');
      tl.play(big, [{ opacity: 0, transform: 'scaleX(1.6)', letterSpacing: '.4em' }, { opacity: 1, transform: 'none', letterSpacing: '0em' }], 420, 2600, { ease: MX_SNAP });
      marathonGlitchText(tl, big, 'TOTAL CARNAGE', 3040, 420);
      marathonBurst(s, tl, 3300, { strength: 1.2 });
      const stamp = root.querySelector('.mx-stamp');
      tl.play(stamp, [{ opacity: 0, transform: 'rotate(-28deg) scale(2.4)' }, { opacity: 1, transform: 'rotate(-12deg) scale(.94)', offset: .7 }, { opacity: 1, transform: 'rotate(-12deg) scale(1)' }], 340, 3300, { ease: MX_IN });
      if (tl.full) tl.play(root, [{ transform: 'none' }, { transform: 'translate(2px,3px)' }, { transform: 'translate(-1px,-1px)' }, { transform: 'none' }], 200, 3540, { ease: 'steps(3,end)', fill: 'none' });
      tl.play(root, [{ opacity: 1, clipPath: 'inset(0 0 0 0)' }, { opacity: 0, clipPath: 'inset(0 0 0 100%)' }], 460, 4800, { ease: MX_IN, fill: 'forwards' });
    }
  },
  mida: {
    summary: ['№ 0451 · CELL 07', 'ORGANIZATION IDENTIFIED', 'MIDA', 'CLASS: INSURGENT NETWORK · STATUS: ACTIVE'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .9 });
      const root = marathonNode(s.scene, 'mx-mida', `<i class="mx-slab"></i><i class="mx-disc"></i><i class="mx-bar"></i>
        <div class="mx-mida-word">MIDA</div>
        <div class="mx-chev">${'<i></i>'.repeat(6)}</div>
        <div class="mx-mida-tags"><span>№ 0451</span><span>CELL 07</span><span class="tri">▲ ▲ ▲</span></div>
        <div class="mx-mida-id"><header>ORGANIZATION IDENTIFIED</header><dl><dt>DESIGNATION</dt><dd>MIDA</dd><dt>CLASS</dt><dd>INSURGENT NETWORK</dd><dt>STATUS</dt><dd>ACTIVE CELL</dd><dt>THREAT</dt><dd>▲▲▲▲△</dd></dl></div>`);
      tl.play(root.querySelector('.mx-slab'), [{ transform: 'translate(-120%,40%) rotate(-14deg)' }, { transform: 'rotate(-14deg)' }], 560, 300, { ease: MX_SNAP });
      tl.play(root.querySelector('.mx-disc'), [{ transform: 'scale(0)' }, { transform: 'none' }], 520, 560, { ease: 'cubic-bezier(.2,1.3,.4,1)' });
      tl.play(root.querySelector('.mx-bar'), [{ transform: 'scaleX(0)' }, { transform: 'none' }], 420, 700, { ease: MX_SNAP });
      tl.play(root.querySelector('.mx-mida-word'), [{ opacity: 0, transform: 'translateX(120px) rotate(-8deg) skewX(-10deg)' }, { opacity: 1, transform: 'rotate(-8deg)' }], 520, 820, { ease: MX_SNAP });
      root.querySelectorAll('.mx-chev i').forEach((chev, i) => tl.play(chev, [{ opacity: 0, transform: 'translateX(-20px)' }, { opacity: 1, transform: 'none' }], 160, 1200 + i * 70, { ease: 'steps(2,end)' }));
      root.querySelectorAll('.mx-mida-tags span').forEach((tag, i) => tl.play(tag, [{ opacity: 0, transform: 'translateY(-12px)' }, { opacity: 1, transform: 'none' }], 240, 1400 + i * 120, { ease: MX_SNAP }));
      const id = root.querySelector('.mx-mida-id');
      tl.play(id, [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }], 520, 2000, { ease: 'steps(8,end)' });
      id.querySelectorAll('dd').forEach((dd, i) => tl.scramble(dd, dd.textContent, 2200 + i * 200, 500, 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789'));
      marathonBurst(s, tl, 800, { strength: 1.2 });
      marathonGlitchText(tl, root.querySelector('.mx-mida-word'), 'MIDA', 1500, 520);
      marathonBurst(s, tl, 2600, { strength: .8, blocks: 3 });
      tl.flash(root.querySelector('.mx-disc'), 3300, 200, .3);
      tl.play(root, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-60px) skewX(8deg)' }], 460, 4700, { ease: MX_IN, fill: 'forwards' });
    }
  },
  traxus: {
    summary: ['TRX-OS 7.4 // CORPORATE TERMINAL', 'KERNEL · LEDGER · ASSET TRACKING · COMPLIANCE · SECURITY MESH', 'PROVISIONING 100%', 'CORPORATE ACCESS GRANTED'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .82, glitch: false });
      const modules = ['KERNEL.SYS', 'LEDGER.DB', 'ASSET-TRACK', 'COMPLIANCE', 'SECURITY MESH', 'PAYROLL.BUS'];
      const root = marathonNode(s.scene, 'mx-trx', `<header><b>TRAXUS</b><span>TRX-OS 7.4 // CORPORATE TERMINAL</span><em>REV 7.4.0-K · LICENSED</em></header>
        <ul>${modules.map(m => `<li><span>${m}</span><i></i><b>[ OK ]</b></li>`).join('')}</ul>
        <div class="mx-trx-bar"><div>${'<i></i>'.repeat(24)}</div><span>PROVISIONING</span><b>000%</b></div>
        <div class="mx-trx-badge"><div><small>CLEARANCE</small><b>CORPORATE ACCESS GRANTED</b></div><i class="mx-barcode"></i></div>`);
      tl.play(root, [{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], 300, 420, { ease: MX_SNAP });
      tl.play(root.querySelector('header b'), [{ opacity: 0, letterSpacing: '.8em' }, { opacity: 1, letterSpacing: '.18em' }], 600, 450, { ease: MX_SNAP });
      root.querySelectorAll('li').forEach((row, i) => {
        const at = 900 + i * 220;
        tl.play(row, [{ opacity: 0, transform: 'translateX(-8px)' }, { opacity: 1, transform: 'none' }], 120, at);
        tl.play(row.querySelector('i'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 180, at + 40, { ease: 'steps(6,end)' });
        tl.play(row.querySelector('b'), [{ opacity: 0 }, { opacity: 1 }], 80, at + 200);
      });
      root.querySelectorAll('.mx-trx-bar div i').forEach((cell, i) => tl.play(cell, [{ opacity: .12 }, { opacity: 1 }], 60, 1400 + i * 95 + (i > 15 ? 220 : 0), { ease: 'steps(1,end)' }));
      tl.count(root.querySelector('.mx-trx-bar b'), 0, 100, 1400, 2500, v => `${String(Math.round(v)).padStart(3, '0')}%`);
      // A compliance hiccup right before clearance: the corporate shell glitches once and recovers.
      marathonBurst(s, tl, 3600, { strength: .9, blocks: 3 });
      tl.corrupt(root.querySelector('header span'), 3600, 3);
      tl.corrupt(root.querySelector('.mx-trx-bar span'), 3640, 3);
      const badge = root.querySelector('.mx-trx-badge');
      tl.play(badge, [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }], 420, 4000, { ease: MX_SNAP });
      tl.play(root, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(12px)' }], 460, 5250, { ease: MX_IN, fill: 'forwards' });
    }
  },
  jjaro: {
    summary: ['SYMBOLS SURFACING', 'NESTED GEOMETRY · LATTICE CURVATURE', 'ANCIENT SIGNAL IDENTIFIED'],
    build(s, tl) {
      tl.play(s.veil, [{ opacity: 0 }, { opacity: .9 }], 1100, 0, { ease: 'ease-in-out' });
      const lines = [], bent = [];
      // Two path sets with identical command structure so CSS `d` interpolates the lattice into a well.
      for (let i = -5; i <= 5; i++) {
        const v = i * 20, pull = Math.sign(i) * (36 - Math.abs(i) * 5);
        lines.push(`M${v} -100Q${v} 0 ${v} 100`, `M-100 ${v}Q0 ${v} 100 ${v}`);
        bent.push(`M${v} -100Q${v - pull} 0 ${v} 100`, `M-100 ${v}Q0 ${v - pull} 100 ${v}`);
      }
      const symbol = (i) => { const random = mxRandom(31 + i * 17), r = 10 + random() * 5; return `<svg viewBox="-20 -20 40 40" aria-hidden="true"><circle r="${r.toFixed(1)}"/><path d="${mxArc(r - 5, random() * 180, random() * 180 + 160)}"/><path d="M0 ${-r - 4}V${-r + 6}"/>${random() > .5 ? `<circle r="2.2" cx="${(r * .4).toFixed(1)}" class="f"/>` : '<path d="M-6 6L6 6"/>'}</svg>`; };
      const root = marathonNode(s.scene, 'mx-jjaro', `<svg class="mx-lattice" viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${lines.map(d => `<path d="${d}"/>`).join('')}</svg>
        <div class="mx-jsym">${Array.from({ length: 6 }, (_, i) => `<i>${symbol(i)}</i>`).join('')}</div>
        <svg class="mx-nest" viewBox="-100 -100 200 200" aria-hidden="true"><g class="n1"><circle r="90"/></g><g class="n2"><path d="M0 -78L67.5 -39V39L0 78L-67.5 39V-39Z"/></g><g class="n3"><path d="M0 -54L46.8 27H-46.8Z"/></g><g class="n4"><circle r="20"/><circle r="6" class="f"/></g></svg>
        <div class="mx-jjaro-word"><small>FREQUENCY 0.000 — UNCATALOGUED</small>ANCIENT SIGNAL IDENTIFIED</div>`);
      const paths = root.querySelectorAll('.mx-lattice path');
      paths.forEach((path, i) => tl.play(path, [{ d: `path("${lines[i]}")`, opacity: 0 }, { opacity: .7, offset: .3 }, { d: `path("${bent[i]}")`, opacity: .9 }], 2600, 600 + Math.abs(i - 11) * 25, { ease: 'cubic-bezier(.45,0,.2,1)' }));
      root.querySelectorAll('.mx-jsym i').forEach((sym, i) => {
        const [x, y] = mxPolar(1, i * 60 - 75), at = r => `translate(calc(-50% + ${(x * r).toFixed(2)}vmin),calc(-50% + ${(y * r).toFixed(2)}vmin))`;
        tl.play(sym, [{ opacity: 0, transform: `${at(36)} scale(.6)` }, { opacity: 1, transform: `${at(31)} scale(1)` }], 1400, 500 + i * 260, { ease: 'ease-out' });
      });
      const nest = root.querySelector('.mx-nest');
      tl.play(nest, [{ opacity: 0, transform: 'scale(1.5)' }, { opacity: 1, transform: 'scale(1)' }], 2000, 900, { ease: 'cubic-bezier(.2,.7,.2,1)' });
      ['n1', 'n2', 'n3', 'n4'].forEach((name, i) => tl.play(nest.querySelector(`.${name}`), [{ transform: `scale(${1.6 - i * .1}) rotate(${i % 2 ? -90 : 90}deg)` }, { transform: 'none' }], 2600, 900 + i * 180, { ease: 'cubic-bezier(.2,.7,.2,1)' }));
      marathonBurst(s, tl, 3420, { strength: .55, blocks: 2 });
      const word = root.querySelector('.mx-jjaro-word');
      tl.play(word, [{ opacity: 0, filter: 'blur(6px)', letterSpacing: '.6em' }, { opacity: 1, filter: 'blur(0)', letterSpacing: '.24em' }], 1200, 3500, { ease: 'ease-out' });
      tl.play(root, [{ opacity: 1 }, { opacity: 0 }], 900, 5400, { fill: 'forwards', ease: 'ease-in' });
    }
  },
  wrkncacnter: {
    summary: ['VOID APERTURE OPENING', 'NON-EUCLIDEAN DRIFT', '⟁ ⍜ ⌬ ◬ ⧖', 'SIGNAL COLLAPSED INTO ITSELF'],
    build(s, tl) {
      const origin = s.rect ? `${Math.round(s.rect.left + s.rect.width / 2)}px ${Math.round(s.rect.top)}px` : '50% 60%';
      const space = marathonNode(s.stage, 'mx-void');
      s.scene.before(space);
      tl.play(space, [{ clipPath: `circle(0% at ${origin})` }, { clipPath: `circle(150% at ${origin})` }], 1300, 80, { ease: 'cubic-bezier(.6,0,.3,1)' });
      const random = mxRandom(1993);
      const blob = (n, r, jitter) => Array.from({ length: n }, (_, i) => { const [x, y] = mxPolar(r * (1 - jitter / 2 + random() * jitter), i * 360 / n); return `${i ? 'L' : 'M'}${x} ${y}`; }).join('') + 'Z';
      const shapes = Array.from({ length: 5 }, (_, i) => ({ a: blob(9, 18 + i * 10, .6), b: blob(9, 18 + i * 10, .9), x: Math.round((random() - .5) * 140), y: Math.round((random() - .5) * 90) }));
      const symbols = '⟁⍜⌬◬⧖⌘⍟⎔⏣⟟⧗⍥⌖⏁⟠⍫';
      const columns = Array.from({ length: 9 }, (_, i) => `<p style="left:${6 + i * 11}%">${Array.from({ length: 24 }, () => symbols[Math.floor(random() * symbols.length)]).join('<br>')}</p>`).join('');
      const root = marathonNode(s.scene, 'mx-wrk', `<div class="mx-stream">${columns}</div><svg class="mx-shapes" viewBox="-100 -60 200 120" aria-hidden="true">${shapes.map(sh => `<path transform="translate(${sh.x} ${sh.y})" d="${sh.a}"/>`).join('')}</svg>
        <div class="mx-wrk-word"><span>W'RKNCACNTER</span><small>SIGNAL ORIGIN: OUTSIDE</small></div>`);
      root.querySelectorAll('.mx-shapes path').forEach((path, i) => {
        tl.play(path, [{ opacity: 0, transform: `translate(${shapes[i].x}px,${shapes[i].y}px) scale(.2) rotate(0)` }, { opacity: .85, transform: `translate(${shapes[i].x * 1.1}px,${shapes[i].y * 1.1}px) scale(1) rotate(${i % 2 ? 40 : -40}deg)` }], 2400, 700 + i * 260, { ease: 'ease-out' });
        tl.play(path, [{ d: `path("${shapes[i].a}")` }, { d: `path("${shapes[i].b}")` }], 1300, 700 + i * 260, { iterations: 3, direction: 'alternate', ease: 'ease-in-out' });
      });
      root.querySelectorAll('.mx-stream p').forEach((col, i) => tl.play(col, [{ transform: `translateY(${-30 - i * 4}%)`, opacity: 0 }, { opacity: .55, offset: .2 }, { transform: `translateY(${10 + i * 3}%)`, opacity: .55 }], 4200, 600 + i * 90, { ease: 'linear' }));
      marathonBurst(s, tl, 1500, { strength: 1.5, blocks: 5 }); marathonBurst(s, tl, 3100, { strength: 1.2 }); marathonBurst(s, tl, 4520, { strength: 1.4 });
      const word = root.querySelector('.mx-wrk-word');
      marathonGlitchText(tl, word.firstElementChild, "W'RKNCACNTER", 2300, 640);
      tl.play(word, [{ opacity: 0, transform: 'perspective(500px) rotateY(60deg) scale(.8)' }, { opacity: 1, transform: 'perspective(500px) rotateY(-12deg)' }, { opacity: 1, transform: 'perspective(500px) rotateY(8deg) rotateX(6deg)' }], 2600, 1600, { ease: 'ease-in-out' });
      if (tl.full && s.frame) tl.play(s.frame, [{ transform: 'none' }, { transform: 'perspective(1200px) rotateY(5deg) rotateX(2deg) scale(.97)', offset: .45 }, { transform: 'perspective(1200px) rotateY(-3deg) rotateX(-1deg) scale(.985)', offset: .75 }, { transform: 'none' }], 2400, 900, { ease: 'ease-in-out', fill: 'none' });
      // Self-collapse: the scene implodes into a point with a slow rotation, no luminance burst.
      tl.play(root, [{ transform: 'none', opacity: 1 }, { transform: 'scale(.02) rotate(160deg)', opacity: 0 }], 900, 4600, { ease: 'cubic-bezier(.7,0,.9,.4)', fill: 'forwards' });
      tl.play(space, [{ clipPath: 'circle(150% at 50% 50%)' }, { clipPath: 'circle(0% at 50% 50%)' }], 900, 5000, { ease: MX_IN, fill: 'forwards' });
    }
  },
  null: {
    summary: ['NULL//TRANSMIT.ERR', 'SOURCE: UNKNOWN', 'SIGNAL: ACTIVE', 'SOMETHING IS LISTENING.'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .9 });
      const wave = Array.from({ length: 161 }, (_, i) => `${i ? 'L' : 'M'}${i * 5} ${(50 + Math.sin(i * .35) * 18 * Math.cos(i * .07) + Math.sin(i * 1.7) * 6).toFixed(1)}`).join('');
      const root = marathonNode(s.scene, 'mx-null', `<header><b>COMMS // RELAY 0</b><span>ORIGIN UNRESOLVED</span><i class="mx-rec">● REC</i></header>
        <div class="mx-null-wave"><svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true"><path d="${wave}"/><path class="ghost" d="${wave}"/></svg></div>
        <div class="mx-null-log"></div>
        <div class="mx-null-block"><b>NULL//TRANSMIT.ERR</b><span></span><span></span><strong></strong></div>`);
      tl.play(root, [{ opacity: 0, transform: 'translateX(40px)', clipPath: 'inset(0 0 0 100%)' }, { opacity: 1, transform: 'none', clipPath: 'inset(0 0 0 0)' }], 600, 420, { ease: MX_SNAP });
      const paths = root.querySelectorAll('.mx-null-wave path');
      tl.play(paths[0], [{ transform: 'translateX(0) scaleY(.2)' }, { transform: 'translateX(-200px) scaleY(1)', offset: .5 }, { transform: 'translateX(-400px) scaleY(.6)' }], 5000, 600, { ease: 'linear' });
      tl.play(paths[1], [{ transform: 'translateX(-60px) scaleY(.6)' }, { transform: 'translateX(-460px) scaleY(1.2)' }], 5000, 600, { ease: 'linear' });
      const log = root.querySelector('.mx-null-log');
      let t = 900;
      for (const text of ['ERR 0x0000 // HANDSHAKE RETURNED NULL', 'ERR 0x00FF // CARRIER HAS NO SOURCE', 'WARN  // CHECKSUM MATCHES NOTHING', 'ERR 0xDEAD // ROUTE LOOPS TO LISTENER']) t = tl.type(marathonNode(log, 'mx-line'), text, t, 12) + 90;
      const block = root.querySelector('.mx-null-block'), [source, signal] = block.querySelectorAll('span');
      tl.play(block, [{ opacity: 0 }, { opacity: 1 }], 200, t + 100);
      tl.type(source, 'SOURCE: UNKNOWN', t + 200, 26);
      tl.type(signal, 'SIGNAL: ACTIVE', t + 650, 26);
      tl.scramble(block.querySelector('strong'), 'SOMETHING IS LISTENING.', t + 1100, 1300);
      tl.at(t + 2450, () => block.dataset.resolved = '');
      // An error terminal glitches the most often: around the log, at the reveal and on the way out.
      marathonBurst(s, tl, t, { strength: 1 });
      log.querySelectorAll('.mx-line').forEach((row, i) => tl.corrupt(row, t + 1300 + i * 120, 2));
      marathonBurst(s, tl, t + 2400, { strength: 1.3, blocks: 5 });
      marathonGlitchText(tl, block.querySelector('strong'), 'SOMETHING IS LISTENING.', t + 2520, 700);
      marathonBurst(s, tl, 5880, { strength: 1.1 }); marathonGlitch(tl, root, 6000);
      tl.play(root, [{ opacity: 1, clipPath: 'inset(0 0 0 0)' }, { opacity: 0, clipPath: 'inset(0 0 0 100%)' }], 500, 6200, { ease: MX_IN, fill: 'forwards' });
    }
  },
  threeai: {
    summary: ['THREE AI PROTOCOL // RAMPANCY', 'LEELA: CONTAINED', 'TYCHO: SUBSUMED', 'DURANDAL: ASCENDANT'],
    build(s, tl) {
      marathonIntro(s, tl, { veil: .9, label: 'THREE AI PROTOCOL' });
      const ring = (cls, r) => `<g class="${cls}">${Array.from({ length: 4 }, (_, i) => `<path class="mx-shard" data-angle="${i * 90 + 45}" d="${mxArc(r, i * 90 + 8, i * 90 + 82)}"/>`).join('')}</g>`;
      const root = marathonNode(s.scene, 'mx-three', `<div class="mx-three-blue"><div class="mx-diag-grid"></div><header>LEELA // CUSTODIAN</header><ol><li>HULL</li><li>REACTOR</li><li>NAV</li><li>COMMS</li></ol></div>
        <div class="mx-three-red"><i class="mx-hz top"></i><header>TYCHO // INTRUSION</header><div class="mx-tlog"><div>${Array.from({ length: 30 }, (_, i) => `<p>0x${(0xA000 + i * 263).toString(16).toUpperCase()} SEIZE ${['NAV', 'REACTOR', 'COMMS', 'DOORS', 'HULL'][i % 5]}</p>`).join('')}</div></div></div>
        <div class="mx-three-green"></div>
        <div class="mx-three-core"><svg viewBox="-80 -80 160 160" aria-hidden="true">${ring('b', 70)}${ring('r', 58)}</svg>${durandalGlyph('mx-dglyph mx-three-glyph')}</div>
        <div class="mx-three-text"><b>THREE AI PROTOCOL // RAMPANCY</b><p>LEELA: CONTAINED</p><p>TYCHO: SUBSUMED</p><p>DURANDAL: ASCENDANT</p></div>
        <div class="mx-three-unlock"><small>${s.info.first ? 'HIDDEN THEME UNLOCKED' : 'PROTOCOL ALREADY ARCHIVED'}</small><b>RAMPANCY // TERMINAL GREEN</b></div>`);
      const blue = root.querySelector('.mx-three-blue'), red = root.querySelector('.mx-three-red'), green = root.querySelector('.mx-three-green');
      // Phase A — custodian: calm blue diagnostics take the left field.
      tl.play(blue, [{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { opacity: 1, clipPath: 'inset(0 0 0 0)' }], 700, 300, { ease: MX_SNAP });
      blue.querySelectorAll('li').forEach((row, i) => tl.play(row, [{ opacity: 0 }, { opacity: 1 }], 160, 900 + i * 180));
      // Phase B — intrusion: red cuts in from the right and corrupts blue.
      tl.play(red, [{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }, { opacity: 1, clipPath: 'inset(0 0 0 0)' }], 600, 2100, { ease: MX_SNAP });
      tl.play(red.querySelector('.mx-tlog>div'), [{ transform: 'translateY(0)' }, { transform: 'translateY(-55%)' }], 2600, 2200, { ease: 'linear' });
      marathonGlitch(tl, blue, 2700); marathonGlitch(tl, blue, 3300);
      tl.at(3000, () => blue.dataset.corrupt = '');
      // Phase C — ascension: green spreads from the centre and both fields are absorbed.
      tl.play(green, [{ clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)' }], 1400, 4400, { ease: 'cubic-bezier(.6,0,.2,1)' });
      tl.play(blue, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(18vw) scale(.4)' }], 900, 4700, { ease: MX_IN, fill: 'forwards' });
      tl.play(red, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-18vw) scale(.4)' }], 900, 4800, { ease: MX_IN, fill: 'forwards' });
      const core = root.querySelector('.mx-three-core');
      tl.play(core, [{ opacity: 0, transform: 'scale(.4) rotate(-90deg)' }, { opacity: 1, transform: 'none' }], 900, 4900, { ease: MX_SNAP });
      tl.at(5700, () => root.dataset.ascendant = '');
      core.querySelectorAll('g .mx-shard').forEach((arc, i) => tl.play(arc, [{ transform: 'none' }, { transform: `rotate(${i % 2 ? 90 : -90}deg) scale(.7)` }], 1200, 5800, { ease: MX_SNAP, fill: 'forwards' }));
      marathonShatter(tl, [...core.querySelectorAll('.mx-three-glyph .mx-shard')], 6300, 34);
      const text = root.querySelector('.mx-three-text');
      tl.play(text.firstElementChild, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], 600, 5600, { ease: 'steps(10,end)' });
      text.querySelectorAll('p').forEach((p, i) => tl.play(p, [{ opacity: 0, transform: 'translateX(-10px)' }, { opacity: 1, transform: 'none' }], 240, 6300 + i * 260));
      tl.flash(green, 6300, 220, .3);
      // Each AI hand-over is marked by its own tear; the title itself glitches as DURANDAL takes it.
      marathonBurst(s, tl, 2100, { strength: 1.3 }); marathonBurst(s, tl, 4400, { strength: 1.5, blocks: 5 }); marathonBurst(s, tl, 7680, { strength: .8, blocks: 3 });
      marathonGlitchText(tl, text.firstElementChild, 'THREE AI PROTOCOL // RAMPANCY', 6250, 520);
      // The workspace rail is handed from AI to AI: blue custodian, red intrusion, green ascension.
      marathonStripWave(s, tl, 300, '#3FD6F2'); marathonStripWave(s, tl, 2100, '#FF3B4E'); marathonStripWave(s, tl, 4600, '#5CFF94'); marathonStripWave(s, tl, 7700, '#5CFF94');
      const unlock = root.querySelector('.mx-three-unlock');
      tl.play(unlock, [{ opacity: 0, transform: 'translateY(16px) scale(1.04)' }, { opacity: 1, transform: 'none' }], 520, 7700, { ease: MX_SNAP });
      marathonGlitch(tl, root, 9300);
      tl.play(root, [{ opacity: 1, clipPath: 'inset(0 0 0 0)' }, { opacity: 0, clipPath: 'inset(50% 0 50% 0)' }], 600, 9700, { ease: MX_IN, fill: 'forwards' });
    }
  }
};

/** Plays one show at a time; a show arriving mid-play replaces any earlier queued show. */
function createMarathonDirector({ getMotion = () => 'full', getScope = () => 'full', onFinish = () => {} } = {}) {
  let current = null, queued = null;
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const motion = () => reduce?.matches ? 'off' : getMotion();
  function onKey(event) {
    if (event.key !== 'Escape' || event.isComposing || !current) return;
    // Consume this Escape so it cannot also interrupt a running agent turn underneath the show.
    event.preventDefault(); event.stopImmediatePropagation(); skip();
  }
  function geometry() {
    const card = document.querySelector(marathonCard()), rect = card?.getBoundingClientRect?.();
    const visible = rect && rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight;
    const reserve = visible && getScope() === 'composer' ? Math.max(0, innerHeight - rect.top + 14) : 0;
    // Colour strips stay legible under the veil so the wave that runs down them can be read.
    const strips = [...document.querySelectorAll('[data-acid-ws-strip]')].filter(node => node.getClientRects().length);
    const rail = strips.reduce((right, node) => Math.max(right, node.getBoundingClientRect().right), 0);
    return { rect: visible ? rect : null, safe: innerHeight - reserve < 280 ? 0 : reserve, strips, rail };
  }
  function play(id, info = {}) {
    const scene = MARATHON_SCENES[id], egg = MARATHON_BY_ID.get(id);
    if (!scene || !egg) return false;
    if (current) { queued = { id, info }; return 'queued'; }
    const mode = motion(), { rect, safe, strips, rail } = geometry();
    const stage = document.createElement('div');
    stage.className = 'mx-stage'; stage.dataset.mxEgg = id; stage.dataset.mxTone = egg.tone; stage.dataset.mxMotion = mode;
    // Opt out of the skin's button/surface decorators, which skip anything under data-acid-motion-owned.
    stage.dataset.acidMotionOwned = '';
    stage.style.setProperty('--mx-safe', `${Math.round(safe)}px`);
    if (rail > 0) { stage.dataset.mxRail = ''; stage.style.setProperty('--mx-rail', `${Math.round(rail)}px`); }
    stage.setAttribute('aria-hidden', 'false');
    stage.innerHTML = `<div class="mx-veil"></div><div class="mx-scene" aria-hidden="true"></div><div class="mx-live" role="status" aria-live="polite"></div><button type="button" class="mx-skip" tabindex="-1" aria-label="Skip secret terminal sequence (Escape)"><span>ESC</span> SKIP <i></i></button>`;
    document.body.append(stage);
    const tl = marathonTimeline(stage, mode);
    const s = { stage, egg, info, rect, frame: document.querySelector(MARATHON_FRAME), strips, veil: stage.querySelector('.mx-veil'), scene: stage.querySelector('.mx-scene') };
    const duration = mode === 'off' ? MX_STILL_HOLD : egg.duration;
    stage.querySelector('.mx-live').textContent = `${egg.code} ${egg.name}: ${scene.summary.at(-1)}`;
    const skipButton = stage.querySelector('.mx-skip');
    skipButton.addEventListener('pointerdown', event => event.preventDefault());
    skipButton.addEventListener('click', () => skip());
    current = { id, stage, tl, ended: false, exit: null };
    window.addEventListener('keydown', onKey, true);
    try {
      if (mode === 'off') {
        // Reduced motion: one still card, opacity only, same narrative text, no movement or flicker.
        const card = marathonNode(s.scene, 'mx-card', `<small>${egg.code} // ${mxEscape(egg.name)}</small>${scene.summary.map((text, i) => `<p${i === scene.summary.length - 1 ? ' class="last"' : ''}>${mxEscape(text)}</p>`).join('')}`);
        tl.play(s.veil, [{ opacity: 0 }, { opacity: .82 }], 200, 0);
        tl.play(card, [{ opacity: 0 }, { opacity: 1 }], 200, 0);
      } else scene.build(s, tl);
      marathonFit(s.scene);
      if (mode !== 'off' && id !== MARATHON_FINALE.id) marathonStripWave(s, tl, 200);
    } catch (error) { console.warn('[industrial-acid] secret terminal scene failed', error); }
    if (mode !== 'off') tl.play(skipButton.querySelector('i'), [{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }], duration, 0, { ease: 'linear' });
    tl.play(skipButton, [{ opacity: 0 }, { opacity: 1 }], 240, 300);
    tl.at(duration, () => finish(true));
    stage.dataset.mxFlashes = String(tl.flashes.length);
    return true;
  }
  function finish(soft) {
    const show = current;
    if (!show || show.ended) return;
    const done = () => {
      if (show.ended) return;
      show.ended = true; show.tl.cancel(); show.stage.remove();
      if (current === show) current = null;
      window.removeEventListener('keydown', onKey, true);
      onFinish(show.id);
      if (queued) { const next = queued; queued = null; play(next.id, next.info); }
    };
    if (!soft || show.tl.motion === 'off' || !show.stage.animate) return done();
    if (show.exit) return;
    show.exit = show.stage.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 280, easing: 'ease-out', fill: 'forwards' });
    show.exit.finished.then(done, done);
  }
  function skip() { queued = null; finish(true); }
  function dispose() { queued = null; const show = current; if (show) { show.exit?.cancel(); finish(false); } }
  return { play, skip, dispose, get active() { return current?.id ?? null; }, get queued() { return queued?.id ?? null; } };
}

// MARATHON // SECRET TERMINAL PROTOCOL — composer listener, progress store and settings.
const MARATHON_DEBOUNCE = 520;
// Hidden theme unlocked by THREE AI PROTOCOL; it goes through makeScheme like every other preset.
const MARATHON_THEME = Object.freeze({
  day: Object.freeze({ accent: '#3DFF7F', signal: '#0B6B3A', surface: '#EAF2EA', text: '#0A150D' }),
  night: Object.freeze({ accent: '#3DFF7F', signal: '#1FA65A', surface: '#030806', text: '#C4F7D3' })
});
const MARATHON_DICTIONARIES = {
  zh: { 'marathon': '隐藏终端协议', 'marathon.description': '在输入框中输入特定的《Marathon》关键词即可接入。只记录已发现的信号编号与解锁进度，不保存任何输入内容。', 'marathon.enabled': '启用', 'marathon.on': '开启', 'marathon.off': '关闭', 'marathon.cooldown': '同一信号冷却', 'marathon.scope': '演出范围', 'marathon.scope.full': '全屏', 'marathon.scope.composer': '避开输入框', 'marathon.signals': '已发现信号', 'marathon.unknown': '未知信号', 'marathon.replay': '重播', 'marathon.protocol': '重播三 AI 协议', 'marathon.protocolLocked': '三 AI 协议：依次唤醒三个 AI', 'marathon.theme': '应用 RAMPANCY // 终端绿', 'marathon.themeLocked': '隐藏主题：未解锁', 'marathon.reset': '重置进度', 'marathon.confirm': '确认重置？', 'rampancy': '终端绿' },
  en: { 'marathon': 'Secret terminal protocol', 'marathon.description': 'Type certain Marathon keywords in the composer to open a channel. Only discovered signal IDs and unlock progress are stored, never what you type.', 'marathon.enabled': 'Enabled', 'marathon.on': 'On', 'marathon.off': 'Off', 'marathon.cooldown': 'Per-signal cooldown', 'marathon.scope': 'Show area', 'marathon.scope.full': 'Full window', 'marathon.scope.composer': 'Keep composer clear', 'marathon.signals': 'Signals found', 'marathon.unknown': 'Unknown signal', 'marathon.replay': 'Replay', 'marathon.protocol': 'Replay THREE AI PROTOCOL', 'marathon.protocolLocked': 'THREE AI PROTOCOL: wake three AIs in order', 'marathon.theme': 'Apply RAMPANCY // TERMINAL GREEN', 'marathon.themeLocked': 'Hidden theme: locked', 'marathon.reset': 'Reset progress', 'marathon.confirm': 'Confirm reset?', 'rampancy': 'Terminal green' }
};

function createMarathonStore(storage = globalThis.localStorage) {
  const listeners = new Set();
  const read = () => { try { return normalizeMarathonState(JSON.parse(storage?.getItem(MARATHON_PREF) ?? 'null')); } catch { return normalizeMarathonState(); } };
  let state = read();
  const emit = () => { for (const listener of listeners) listener(); };
  return {
    get: () => state,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    update(patch) {
      state = normalizeMarathonState({ ...state, ...patch });
      try { storage?.setItem(MARATHON_PREF, JSON.stringify(state)); } catch { /* Progress stays in memory when storage is blocked. */ }
      emit(); return state;
    },
    reload() { state = read(); emit(); },
    reset() { return this.update({ discovered: [], sequence: { step: 0, at: 0 }, unlocked: 0 }); }
  };
}

/** Record one trigger (ID only) and decide which show to play. */
function recordMarathonTrigger(store, id, now = Date.now()) {
  const state = store.get(), result = advanceMarathonSequence(state.sequence, id, now);
  const first = result.complete && !state.unlocked;
  store.update({ discovered: state.discovered.includes(id) ? state.discovered : [...state.discovered, id], sequence: result.sequence, unlocked: result.complete ? state.unlocked || now : state.unlocked });
  if (result.complete) return { show: MARATHON_FINALE.id, info: { first } };
  return { show: id, info: { step: MARATHON_SEQUENCE.includes(id) ? result.step : 0 } };
}

/**
 * Watch only the focused composer. Listeners are passive and never cancel or rewrite input; text is
 * read when the user pauses, after IME composition ends, or right before Enter sends it.
 */
function installMarathonProtocol({ store, director, now = () => Date.now() }) {
  const live = () => { const sequence = store.get().sequence; return sequence.step === MARATHON_SEQUENCE.length - 1 && now() - sequence.at <= MARATHON_SEQUENCE_WINDOW; };
  const gate = createMarathonGate({ cooldown: () => store.get().cooldown, now, bypass: id => id === MARATHON_SEQUENCE.at(-1) && live() });
  const controller = new AbortController(), options = { capture: true, passive: true, signal: controller.signal };
  let target = null, timer = 0, composing = false;
  const observer = typeof MutationObserver === 'function' ? new MutationObserver(() => { if (!composing) schedule(MARATHON_DEBOUNCE); }) : null;
  const composerOf = node => node?.closest?.(marathonInput()) ?? null;
  function attach(node) {
    if (node === target) return;
    observer?.disconnect(); target = node; gate.release();
    if (node) observer?.observe(node, { characterData: true, childList: true, subtree: true });
  }
  function evaluate() {
    clearTimeout(timer); timer = 0;
    if (!store.get().enabled || composing || !target?.isConnected) return;
    const text = marathonComposerText(target);
    if (text === null) return;
    const match = gate.evaluate(text);
    if (!match) return;
    const { show, info } = recordMarathonTrigger(store, match.id, now());
    director.play(show, info);
  }
  function schedule(delay) { clearTimeout(timer); timer = setTimeout(evaluate, delay); }
  document.addEventListener('focusin', event => { const node = composerOf(event.target); if (node) attach(node); }, options);
  document.addEventListener('input', event => {
    const node = composerOf(event.target);
    if (!node) return;
    attach(node);
    if (event.isComposing || composing) return;
    // A typed space or sentence mark means the word is finished; otherwise wait for a pause.
    schedule(typeof event.data === 'string' && /[\s,!?;:。，！？；：、]$/u.test(event.data) ? 40 : MARATHON_DEBOUNCE);
  }, options);
  document.addEventListener('compositionstart', event => { if (composerOf(event.target)) composing = true; }, options);
  document.addEventListener('compositionend', event => { const node = composerOf(event.target); if (!node) return; composing = false; attach(node); schedule(MARATHON_DEBOUNCE); }, options);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    const node = composerOf(event.target);
    if (node) { attach(node); evaluate(); }
  }, options);
  const onStorage = event => { if (event.key === MARATHON_PREF || event.key === null) store.reload(); };
  window.addEventListener('storage', onStorage);
  return () => { controller.abort(); window.removeEventListener('storage', onStorage); observer?.disconnect(); clearTimeout(timer); target = null; director.dispose(); };
}

function MarathonSettings({ t, useMarathon, store, play, applyTheme, prefix = 'acid-mx' }) {
  const state = useMarathon(), [confirm, setConfirm] = React.useState(false);
  const found = new Set(state.discovered);
  return h('section', { className: 'acid-mx-settings', 'aria-label': t('marathon') },
    h('div', { className: 'acid-mx-head' }, h('strong', null, `SECRET TERMINAL // ${t('marathon')}`), h('span', { 'aria-label': t('marathon.signals') }, `${String(found.size).padStart(2, '0')} / ${MARATHON_EGGS.length}`)),
    h('p', null, t('marathon.description')),
    h('div', { className: 'acid-setting-row' }, h('label', { htmlFor: `${prefix}-enabled` }, t('marathon.enabled')),
      h('select', { id: `${prefix}-enabled`, value: state.enabled ? 'on' : 'off', onChange: event => store.update({ enabled: event.target.value === 'on' }) }, h('option', { value: 'on' }, t('marathon.on')), h('option', { value: 'off' }, t('marathon.off')))),
    h('div', { className: 'acid-setting-row' }, h('label', { htmlFor: `${prefix}-scope` }, t('marathon.scope')),
      h('select', { id: `${prefix}-scope`, value: state.scope, onChange: event => store.update({ scope: event.target.value }) }, ...MARATHON_SCOPES.map(scope => h('option', { key: scope, value: scope }, t(`marathon.scope.${scope}`))))),
    h('div', { className: 'acid-setting-row' }, h('label', { htmlFor: `${prefix}-cooldown` }, t('marathon.cooldown')),
      h('select', { id: `${prefix}-cooldown`, value: String(state.cooldown), onChange: event => store.update({ cooldown: Number(event.target.value) }) }, ...MARATHON_COOLDOWNS.map(ms => h('option', { key: ms, value: String(ms) }, `${ms / 1000}s`)))),
    h('div', { className: 'acid-mx-grid', role: 'group', 'aria-label': t('marathon.signals') }, ...MARATHON_EGGS.map(egg => found.has(egg.id)
      ? h('button', { key: egg.id, type: 'button', 'data-mx-replay': egg.id, title: `${t('marathon.replay')} ${egg.name}`, onClick: () => play(egg.id, {}) }, h('span', null, egg.code), h('b', null, egg.name), h('span', { 'aria-hidden': true }, '▶'))
      : h('button', { key: egg.id, type: 'button', disabled: true, 'aria-label': `${egg.code} ${t('marathon.unknown')}` }, h('span', null, egg.code), h('b', { 'aria-hidden': true }, '▒▒▒▒▒▒')))),
    h('div', { className: 'acid-mx-actions' },
      h('button', { type: 'button', 'data-primary': state.unlocked ? '' : undefined, 'data-mx-replay': 'threeai', disabled: !state.unlocked, onClick: () => play(MARATHON_FINALE.id, { first: false }) }, state.unlocked ? t('marathon.protocol') : t('marathon.protocolLocked')),
      h('button', { type: 'button', 'data-mx-theme': '', disabled: !state.unlocked, onClick: applyTheme }, state.unlocked ? t('marathon.theme') : t('marathon.themeLocked')),
      h('button', { type: 'button', 'data-mx-reset': '', disabled: !found.size && !state.unlocked, onClick: () => { if (confirm) { store.reset(); setConfirm(false); } else setConfirm(true); }, onBlur: () => setConfirm(false) }, confirm ? t('marathon.confirm') : t('marathon.reset'))));
}

    const dictionaries = {
      zh: { 'workspace': '工作区', 'none': '未选择工作区', 'plugins': '插件', 'settings': '设置', 'canvas': '皮肤外观', 'canvas.description': '白天与黑天切换整套皮肤；跟随应用使用原有外观设置。', 'paper': '白天', 'night': '黑天', 'adaptive': '跟随应用', 'local': '本地工作区', 'palette': '调色盘', 'palette.description': '调整即生效，白天与黑天分别保存。', 'accent': '酸性色', 'signal': '交互色', 'surface': '阅读背景', 'text': '正文色', 'acid': '经典酸性', 'orange': '工业橙', 'polar': '极地信号', 'reset': '恢复默认', 'contrast': '正文对比度', 'adjusted': '已增强正文对比度，实际颜色', 'hex': 'HEX 色值', 'motion': '动效', 'full': '完整', 'quiet': '克制', 'off': '停止' },
      en: { 'workspace': 'WORKSPACE', 'none': 'No workspace selected', 'plugins': 'Plugins', 'settings': 'Settings', 'canvas': 'Skin appearance', 'canvas.description': 'Day and night switch the entire skin. Follow app uses the existing appearance setting.', 'paper': 'Day', 'night': 'Night', 'adaptive': 'Follow app', 'local': 'LOCAL WORKSPACE', 'palette': 'Palette', 'palette.description': 'Updates immediately. Day and night palettes are saved separately.', 'accent': 'Acid accent', 'signal': 'Interaction', 'surface': 'Reading canvas', 'text': 'Text', 'acid': 'Classic acid', 'orange': 'Industrial orange', 'polar': 'Polar signal', 'reset': 'Reset palette', 'contrast': 'Text contrast', 'adjusted': 'Text contrast enhanced; effective color', 'hex': 'HEX color', 'motion': 'Motion', 'full': 'Full', 'quiet': 'Quiet', 'off': 'Off' }
    };

    Object.assign(dictionaries.zh, { 'ws.color': '工作区颜色', 'ws.color.reset': '恢复默认', 'ws.working': '工作中', 'ws.done': '已完成', 'ws.attention': '等待确认', 'sidebarStyle': '工作区样式', 'sidebarStyle.description': '切换后立即生效，并保留现有工作区和会话。', 'sidebarStyle.next': '新版色条', 'sidebarStyle.classic': '经典工作区' });
    Object.assign(dictionaries.en, { 'ws.color': 'Workspace color', 'ws.color.reset': 'Reset color', 'ws.working': 'Working', 'ws.done': 'Completed', 'ws.attention': 'Needs input', 'sidebarStyle': 'Workspace style', 'sidebarStyle.description': 'Applies immediately and keeps existing workspaces and conversations.', 'sidebarStyle.next': 'Color strips', 'sidebarStyle.classic': 'Classic workspaces' });

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

    function workspaceContext(items, current, numbers) {
      const index = items.findIndex(item => item.sessionIds?.includes(current));
      return index < 0 ? null : { index: numbers?.[String(items[index].workspaceId)] ?? index + 1, workspaceId: items[index].workspaceId, title: items[index].title || items[index].name || items[index].path?.split(/[\\/]/).filter(Boolean).at(-1) || '' };
    }

    function apply(ctx, config = {}) {
      let preferences = { canvas: normalizeCanvas(config.canvas), palettes: normalizePalettes(), motion: 'full', sidebarStyle: 'next', workspaceColors: {} };
      try {
        const stored = localStorage.getItem(PREF);
        if (['paper', 'night', 'adaptive'].includes(stored)) preferences.canvas = stored;
      } catch { /* Storage can be unavailable in a private browser context. */ }
      try { preferences.palettes = normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))); } catch { /* Recover a malformed palette with safe defaults. */ }
      try { const storedMotion=localStorage.getItem(MOTION_PREF);if(['full','quiet','off'].includes(storedMotion))preferences.motion=storedMotion; } catch {}
      try { preferences.sidebarStyle = normalizeSidebar(localStorage.getItem(SIDEBAR_PREF)); } catch {}
      try { preferences.workspaceColors = normalizeWorkspaceColors(JSON.parse(localStorage.getItem(WORKSPACE_COLORS_PREF))); } catch {}
      // Strips need the native workspace rows; classic lists may have selected flat grouping.
      const activateSidebar=style=>{if(style==='next')ctx.uiWorkspace?.view?.setGroupBy?.('workspace');};
      ctx.effect(()=>activateSidebar(preferences.sidebarStyle),`${ID}: workspace grouping`);
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

      // Re-resolve after the DOM gained class names, then repaint only if the mapping moved.
      const refreshStyles = () => {
        if (!ownedStyle) return;
        invalidateModules();
        syncAppearance();
      };
      function syncAppearance(snapshot = themeSnapshot()) {
        const mode = resolveMode(preferences.canvas, snapshot.active.colorScheme);
        const scheme = makeScheme(mode, preferences.palettes[mode]);
        if (ownedStyle) {
          paintStyle(ownedStyle, 'html[data-industrial-acid]{' + Object.entries(scheme.variables).map(([key, value]) => `${key}:${value}`).join(';') + '}');
          document.documentElement.setAttribute('data-industrial-canvas', preferences.canvas);
          document.documentElement.setAttribute('data-industrial-mode', mode);
          document.documentElement.setAttribute('data-industrial-motion',getMotion());
          if(getMotion()==='off')motionController?.cancel();
        }
        if (view.canvas !== preferences.canvas || view.palettes !== preferences.palettes || view.mode !== mode || view.motion !== preferences.motion || view.effectiveMotion !== getMotion() || view.sidebarStyle !== preferences.sidebarStyle || view.workspaceColors !== preferences.workspaceColors) {
          view = { ...preferences, mode, effectiveMotion: getMotion() };
          for (const listener of listeners) listener();
        }
      }
      function updateAppearance(next) {
        const updated = { canvas: normalizeCanvas(next.canvas ?? preferences.canvas), palettes: normalizePalettes(next.palettes ?? preferences.palettes), motion: ['full','quiet','off'].includes(next.motion)?next.motion:preferences.motion, sidebarStyle: normalizeSidebar(next.sidebarStyle ?? preferences.sidebarStyle), workspaceColors: normalizeWorkspaceColors(next.workspaceColors ?? preferences.workspaceColors) };
        if(next.sidebarStyle==='next')activateSidebar('next');
        if (JSON.stringify(updated) === JSON.stringify(preferences)) return;
        preferences = updated;
        try {
          localStorage.setItem(PREF, preferences.canvas);
          localStorage.setItem(PALETTE_PREF, JSON.stringify(preferences.palettes));
          localStorage.setItem(MOTION_PREF, preferences.motion);
          localStorage.setItem(SIDEBAR_PREF, preferences.sidebarStyle);
          localStorage.setItem(WORKSPACE_COLORS_PREF, JSON.stringify(preferences.workspaceColors));
        } catch { /* Changes remain usable in this session if storage is blocked. */ }
        refreshTokens?.();
      }
      const setWorkspaceColor=(id,color)=>{
        const colors={...preferences.workspaceColors};
        if(color===null)delete colors[id];else{const hex=normalizeHex(color,null);if(!hex)return;colors[id]=hex;}
        updateAppearance({workspaceColors:colors});
      };

      const activityStore = createTokenActivityStore(ctx);
      // Secret terminal progress holds egg IDs and timestamps only; composer text never reaches it.
      const marathonStore = createMarathonStore();
      const useMarathon = () => React.useSyncExternalStore(marathonStore.subscribe, marathonStore.get, marathonStore.get);
      let marathonDirector;
      const playMarathon = (id, info) => marathonDirector?.play(id, info);
      // Workspace strips loop while a session works or has an unread completion. uiSession is a deferred
      // inject: without it the skin still loads and the strips stay static.
      const workspaceStatus = createStatusRelay();
      ctx.inject(['uiSession'], child => child.effect(() => { workspaceStatus.attach(child.uiSession?.sessionStatus); return () => workspaceStatus.attach(null); }, `${ID}: workspace activity`));
      ctx.effect(() => ctx.locale.register(NS, { zh:{...dictionaries.zh,...MODEL_DICTIONARIES.zh,...ACTIVITY_DICTIONARIES.zh,...MARATHON_DICTIONARIES.zh}, en:{...dictionaries.en,...MODEL_DICTIONARIES.en,...ACTIVITY_DICTIONARIES.en,...MARATHON_DICTIONARIES.en} }), `${ID}: locale`);
      ctx.effect(() => {
        const root = document.documentElement;
        const previous = { enabled: root.getAttribute('data-industrial-acid'), canvas: root.getAttribute('data-industrial-canvas'), mode: root.getAttribute('data-industrial-mode'), shell: root.getAttribute('data-industrial-shell'), motion: root.getAttribute('data-industrial-motion'), motionSet: root.getAttribute('data-industrial-motion-set'), height: root.style.getPropertyValue('--acid-header-max'), priority: root.style.getPropertyPriority('--acid-header-max') };
        const style = document.createElement('style');
        style.dataset.pluginCss = `${ID}/skin.css`;
        style.dataset.plugin = ID;
        ownedStyle = style;
        root.setAttribute('data-industrial-acid', '');root.setAttribute('data-industrial-shell','planar-v2');root.setAttribute('data-industrial-motion-set','accepted-r3');
        // The stylesheet keys the traffic-light band on the platform, so the attribute has to be
        // present before the first paint. The desktop host publishes one of its own; only fill the
        // gap. `navigator` is absent in the test sandbox, which mounts this effect without a page.
        if (root.getAttribute('data-platform') == null) {
          const platform = typeof navigator === 'undefined' ? '' : navigator.userAgentData?.platform || navigator.platform || '';
          root.setAttribute('data-platform', /Mac/i.test(platform) ? 'darwin' : 'other');
        }
        syncAppearance();
        root.style.setProperty('--acid-header-max', `${height}px`);
        document.head.appendChild(style);
        // Host stylesheets are injected around the same time and carry each module's complete
        // class list, so the first resolution can already be correct. They may arrive slightly
        // after this plugin, so newly added <style> elements are watched too; a resolution that
        // gains modules triggers one repaint. Token streaming only adds text nodes and elements,
        // which are ignored here, so the expensive path is not taken on every keystroke.
        // Host stylesheets are injected lazily, one per module, as bundles load. The skin holds
        // the paint back until every module it was authored against has appeared, so a late
        // bundle only ever adds to a correct picture; an incomplete one is never shown.
        // A sweep is coalesced to one animation frame, and only <style> insertions count, so
        // token streaming (text nodes and elements) never reaches the rewrite path.
        let sweep = 0;
        const hostStyle = node => node?.nodeType === 1 && node.tagName === 'STYLE' && node !== style;
        const observer = new MutationObserver(records => {
          if (sweep) return;
          const relevant = records.some(record => {
            const target = record.target?.nodeType === 3 ? record.target.parentNode : record.target;
            if (target === style) return false;
            return hostStyle(target) || [...record.addedNodes || [], ...record.removedNodes || []]
              .some(node => hostStyle(node) || [...node.querySelectorAll?.('style') || []].some(hostStyle));
          });
          if (!relevant) return;
          sweep = requestAnimationFrame(() => { sweep = 0; refreshStyles(); });
        });
        observer.observe(document.head, { childList: true, subtree: true, characterData: true });
        // Some bundles append their stylesheet to <body> instead of <head>.
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        // A missing structural module must not leave the initial stylesheet blank indefinitely.
        // Explicitly retry once after the bounded four-second grace period.
        const settleTimer = setTimeout(refreshStyles, 4100);
        return () => {
          observer.disconnect();
          clearTimeout(settleTimer);
          if (sweep) cancelAnimationFrame(sweep);
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
          if (event.key !== PREF && event.key !== PALETTE_PREF && event.key !== MOTION_PREF && event.key !== SIDEBAR_PREF && event.key !== WORKSPACE_COLORS_PREF && event.key !== null) return;
          try {
            preferences = { canvas: normalizeCanvas(localStorage.getItem(PREF) ?? config.canvas), palettes: normalizePalettes(JSON.parse(localStorage.getItem(PALETTE_PREF))), motion: ['full','quiet','off'].includes(localStorage.getItem(MOTION_PREF))?localStorage.getItem(MOTION_PREF):'full', sidebarStyle: normalizeSidebar(localStorage.getItem(SIDEBAR_PREF)), workspaceColors: normalizeWorkspaceColors(JSON.parse(localStorage.getItem(WORKSPACE_COLORS_PREF))) };
            if(event.key===SIDEBAR_PREF||event.key===null)activateSidebar(preferences.sidebarStyle);
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
        const [pinned,setPinned]=React.useState(false),drawer=React.useRef(null),bodyId=React.useId();
        const [rail,setRail]=React.useState(document.documentElement.getAttribute('data-acid-sidebar')==='next'),transition=React.useRef(null);
        React.useLayoutEffect(()=>{const root=document.documentElement,sync=()=>setRail(root.getAttribute('data-acid-sidebar')==='next');const observer=new MutationObserver(sync);observer.observe(root,{attributes:true,attributeFilter:['data-acid-sidebar']});sync();return()=>observer.disconnect();},[]);
        React.useEffect(()=>()=>transition.current?.finish(false),[]);
        const changeDrawer=open=>{const area=drawer.current?.closest(moduleSelector('.wtg9ga_footArea'));if(open){if(area?.dataset.acidClosing)transition.current=activeAcceptedMotion?.reopenSurface(area);setPinned(true);}else if(area&&activeAcceptedMotion)transition.current=activeAcceptedMotion.closeSurface(area,()=>setPinned(false));else setPinned(false);};
        // NEXT: palette, day/night and the native "More" live in a bottom drawer.
        React.useLayoutEffect(()=>{const area=drawer.current?.closest(moduleSelector('.wtg9ga_footArea'));if(!area||state.sidebarStyle!=='next'||!rail)return;area.setAttribute('data-acid-drawer',pinned?'open':'closed');if(pinned)transition.current=activeAcceptedMotion?.mask(area,{kind:'menu'});return()=>{transition.current?.finish(false);area.removeAttribute('data-acid-drawer');};},[pinned,wide,state.sidebarStyle,rail]);
        const modes=h('div', { className: `acid-mode-switch${wide ? '' : ' acid-mode-switch-rail'}`, role: 'group', 'aria-label': t('canvas') },
            ...['paper', 'night', 'adaptive'].map(value => h('button', { key: value, type: 'button', 'data-appearance-option': value, title: t(value), 'aria-label': t(value), 'aria-pressed': state.canvas === value, onClick: () => updateAppearance({ canvas: value }) }, h(ModeIcon, { value }), wide ? h('span', null, t(value)) : null)));
        const palette=h('button',{type:'button',className:'acid-palette-shortcut',onClick:()=>setPaletteOpen(true),'aria-label':t('palette')},h('span',{className:'acid-palette-swatch','aria-hidden':true}),wide?t('palette'):null,wide?h('span',{'aria-hidden':true},'↗'):null);
        const dialog=paletteOpen?h(NativeDialog,{title:t('palette'),onClose:()=>setPaletteOpen(false)},h(CanvasRow,{t,prefix:'acid-dialog'})):null;
        if(!wide||state.sidebarStyle==='classic'||!rail)return h('div', { className: 'acid-footer' }, h(TokenActivity, { wide, t, store: activityStore, useAppearance }),modes,palette,dialog);
        return h('div', { className: 'acid-footer' }, h(TokenActivity, { wide, t, store: activityStore, useAppearance }),
          h('div',{ref:drawer,className:'acid-drawer',onKeyDown:event=>{if(event.key==='Escape'){changeDrawer(false);event.currentTarget.querySelector('.acid-drawer-handle')?.focus();}}},
            h('button',{type:'button',className:'acid-drawer-handle','aria-label':`MORE — ${t('canvas')} / ${t('palette')}`,'aria-expanded':pinned,'aria-controls':bodyId,onClick:()=>changeDrawer(!!drawer.current?.closest(moduleSelector('.wtg9ga_footArea'))?.dataset.acidClosing||!pinned)},
              h('span',{className:'acid-drawer-label'},'MORE',h('span',{className:'acid-drawer-chevron','aria-hidden':true},'⌃'))),
            h('div',{id:bodyId,className:'acid-drawer-body'},h(DrawerTools),modes,palette)),dialog);
      }
      function CanvasRow({ t, prefix='acid' }) {
        const state = useAppearance(), palette = state.palettes[state.mode], scheme = makeScheme(state.mode, palette);
        const presets = useMarathon().unlocked ? { ...PALETTE_PRESETS, rampancy: MARATHON_THEME } : PALETTE_PRESETS;
        const setPalette = colors => updateAppearance({ palettes: { ...state.palettes, [state.mode]: colors } });
        return h('section', { className: 'acid-appearance-settings', 'aria-label': t('palette') },
          h('div', { className: 'acid-setting-row' },
            h('div', null, h('label', { htmlFor: `${prefix}-canvas` }, t('canvas')), h('p', null, t('canvas.description'))),
            h('select', { id: `${prefix}-canvas`, value: state.canvas, onChange: event => updateAppearance({ canvas: event.target.value }) }, ...['paper', 'night', 'adaptive'].map(value => h('option', { key: value, value }, t(value))))),
          h('div', { className: 'acid-setting-row' },h('label',{htmlFor:`${prefix}-motion`},t('motion')),h('select',{id:`${prefix}-motion`,value:state.motion,onChange:event=>updateAppearance({motion:event.target.value})},...['full','quiet','off'].map(value=>h('option',{key:value,value},t(value))))),
          h('div', { className: 'acid-setting-row' },h('div',null,h('label',{htmlFor:`${prefix}-sidebar-style`},t('sidebarStyle')),h('p',null,t('sidebarStyle.description'))),h('select',{id:`${prefix}-sidebar-style`,value:state.sidebarStyle,onChange:event=>updateAppearance({sidebarStyle:event.target.value})},...['next','classic'].map(value=>h('option',{key:value,value},t(`sidebarStyle.${value}`))))),
          h('div', { className: 'acid-palette-head' }, h('div', null, h('strong', null, `${t(state.mode === 'day' ? 'paper' : 'night')} / ${t('palette')}`), h('p', null, t('palette.description'))), h('button', { type: 'button', 'data-palette-reset': true, onClick: () => setPalette(DEFAULT_PALETTES[state.mode]) }, t('reset'))),
          h('div', { className: 'acid-palette-presets', role: 'group', 'aria-label': t('palette') }, ...Object.entries(presets).map(([key, colors]) => h('button', { key, type: 'button', 'data-palette-preset': key, 'aria-pressed': JSON.stringify(palette) === JSON.stringify(colors[state.mode]), onClick: () => setPalette(colors[state.mode]) }, h('span', { className: 'acid-preset-dot', style: { background: colors[state.mode].accent }, 'aria-hidden': true }), t(key)))),
          h('div', { className: 'acid-palette-fields' }, ...['accent', 'signal', 'surface', 'text'].map(field => h(ColorField, { key: field, field, prefix, value: palette[field], t, onColor: color => setPalette({ ...palette, [field]: color }) }))),
          h('div', { className: 'acid-palette-preview', style: { background: palette.surface, color: scheme.text }, 'aria-hidden': true }, h('strong', null, 'Aa / 0123'), h('span', { style: { background: palette.accent, color: scheme.variables['--acid-accent-fore'] } }, 'DS'), h('span', { style: { background: palette.signal, color: scheme.variables['--acid-blue-fore'] } }, '01')),
          h('p', { className: 'acid-contrast-note', role: 'status', 'aria-live': 'polite' }, `${t('contrast')} ${scheme.contrast.toFixed(1)}:1`, scheme.adjusted ? ` · ${t('adjusted')} ${scheme.text}` : ''),
          h(TokenActivitySettings, { t, store: activityStore, prefix }));
      }

      ctx.effect(installComposerMenuClearance,`${ID}: native composer menu clearance`);
      ctx.effect(()=>{motionController=installSkinMotion(getMotion);const onReduce=()=>syncAppearance();reduce?.addEventListener('change',onReduce);return()=>{reduce?.removeEventListener('change',onReduce);motionController.dispose();motionController=undefined;for(const row of document.querySelectorAll('[data-acid-ordinal]'))row.removeAttribute('data-acid-ordinal');};},`${ID}: retractable motion`);
      ctx.effect(()=>{marathonDirector=createMarathonDirector({getMotion,getScope:()=>marathonStore.get().scope});const dispose=installMarathonProtocol({store:marathonStore,director:marathonDirector});return()=>{dispose();marathonDirector=undefined;};},`${ID}: secret terminal protocol`);
      ctx.effect(()=>{if(getMotion()==='off')return;const intro=document.createElement('div');intro.className='acid-intro';intro.setAttribute('aria-hidden','true');intro.innerHTML='<div class=acid-intro-name>DEEPSEEK<span>HARNESS</span></div><div class=acid-intro-bar></div>';document.body.append(intro);const timer=setTimeout(()=>intro.remove(),1250);return()=>{clearTimeout(timer);intro.remove();};},`${ID}: opening sequence`);
      const register = (name, id, Component, extra = {}) => ctx.slots.inject(name, () => ctx.slots.register({ name, id, locale: NS, ...extra }, Component));
      register('shell.overlay', 'industrial.masthead', props=>h(Masthead,{...props,hostRpc:(method,payload)=>ctx.connection.rpc.call('/api',method,payload),statusSource:workspaceStatus,useAppearance,setWorkspaceColor,getMotion,motion:()=>motionController,toggleSidebar:()=>ctx.layout.toggleSidebar(),goHome:()=>ctx.layout.selectPanel(null),pickWorkspace:id=>ctx.uiWorkspace.openWorkspace(id).catch(()=>{})}), { order: -1000 });
      register('conversation.hero.brand.mark', 'industrial.hero', HeroMark, { priority: -50 });
      register('sidebar.footer.action', 'industrial.signature', AppearanceFooter, { order: 1000 });
      register('settings.header', 'industrial.settings-header', SettingsHeader, { priority: -50 });
      register('settings.general.item', 'industrial.canvas', CanvasRow, { order: 12 });
      register('settings.general.item', 'industrial.marathon', props=>h(MarathonSettings,{...props,useMarathon,store:marathonStore,play:playMarathon,applyTheme:()=>updateAppearance({palettes:MARATHON_THEME})}), { order: 13 });
      installModelControls(ctx, useAppearance);
    }

    return { inject: ['slots', 'locale', 'theme', 'layout', 'uiWorkspace', 'connection'], apply, tokenOverrides, workspaceContext, formatWorkspaceIndex, normalizePalettes, normalizeCanvas, resolveMode, makeScheme, contrast, DEFAULT_PALETTES, PALETTE_PRESETS, modelControlSnapshot, effortSelection, modelPopoverPlacement, effortVisual, selectionIdentity, createMaxEpisode, acceptedDuration, ACCEPTED_MOTION, rankWorkspaces, moveInOrder, workspaceNumbers, markWorkspaceReorder, migrateIdentity, MARATHON_EGGS, MARATHON_FINALE, MARATHON_SEQUENCE, MARATHON_SEQUENCE_WINDOW, MARATHON_THEME, MARATHON_PREF, MARATHON_SCENES, normalizeMarathonText, matchMarathonKeyword, normalizeMarathonState, advanceMarathonSequence, createMarathonGate, createMarathonStore, recordMarathonTrigger, installMarathonProtocol, workspaceActivity, createStatusRelay };
  }
});
