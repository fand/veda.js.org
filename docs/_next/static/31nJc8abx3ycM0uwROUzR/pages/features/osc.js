(window.webpackJsonp=window.webpackJsonp||[]).push([["1077"],{"9SPc":function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),a=o.n(t),s=o("/MKj"),r=o("SQ8s"),c=o("o2GN");n.default=Object(s.b)()(function(){return a.a.createElement(r.a,{path:"/features/osc",article:{en:Object(c.default)('---\ntitle: OSC Input\n---\n# OSC Input\n\nVEDA supports OSC inputs.\nYou can use VEDA in sync with SuperCollider, TouchDesigner, openFrameworks, etc!\n\n![OSC example](/static/images/osc.gif)\n\nTo enable OSC, specify the port number in the settings.\nWhen you add `"osc": 4000` to the settings, messages will be stored and passed as textures:\n\n- Texture name will be automatically generated from addresses.\n  - `/foo`: `sampler2D osc_foo`\n  - `/foo/bar`: `sampler2D osc_foo_bar`\n- Arguments are translated to float. Strings are ignored.\n  - `/foo 0.1 hello 100` yields a texture that contains `[0.1 0 100]`\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.\n'),ja:Object(c.default)('---\ntitle: OSC Input\n---\n# OSC Input\n\nVEDAはOSC形式の入力に対応しています。\nこれにより、SuperColliderやTouchDesigner、openFrameworksといったソフトウェアと同期することができます！\n\n![OSC example](/static/images/osc.gif)\n\nVEDAでOSC入力を利用するには、Settingsでポート番号を指定して下さい。\n`"osc": 4000` と指定した場合、4000番のポートに送られたOSCメッセージがGLSL上で利用できるようになります。\n\n- テクスチャの名前は、OSCアドレスから自動的に決定します\n  - `/foo` へのOSCメッセージは `sampler2D osc_foo` に保存されます\n  - `/foo/bar` へのOSCメッセージは `sampler2D osc_foo_bar` に保存されます\n- OSC引数は全てfloatに変換されます\n  - 文字列は無視されます\n\n例えば、 `/foo 0.1 hello 100` というOSCメッセージが送られた場合、VEDAは `3x1` のテクスチャ `sampler2D osc_foo` を自動的に作成します。\n`osc_foo` の各ピクセルに保存されるデータは、 `0.1` `0` `100` となります。\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/osc.frag) for actual usage.\n')}})})},xibK:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features/osc",function(){var e=o("9SPc");return{page:e.default||e}}])}},[["xibK","5d41","9da1"]]]);