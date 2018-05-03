module.exports=__NEXT_REGISTER_PAGE("/usage",function(){var a=webpackJsonp([2],{341:function(a,b,c){a.exports=c(342)},342:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(4),g=c(2),h=c(5);b["default"]=Object(h.a)(function(){return e.a.createElement(f.a,{path:"/usage",article:{en:Object(g["default"])("---\ntitle: Usage\n---\n# Usage\n\nIn this page we'll explain the basic usage of VEDA.\n\n\n## Basic workflow\n\nThe workflow of livecoding with VEDA is like this:\n\n1. Launch VEDA with `Veda: Toggle`\n2. Run shaders with `Veda: Load Shader` (key: `ctrl-enter`)\n\nSo let's start coding!\n\nFirst\u3001 hit `ctrl-shift-p` (mac: `cmd-shift-p`) to open command palette.\nWhen you type `veda` Atom will suggest `Veda: Toggle`.\nHit `enter` then VEDA will show the result of default shader:\n\n![](/static/images/usage1.gif)\n\nNext, let's create a new GLSL file.\nCreate new file with `ctrl-n` (mac: `cmd-n`) and save as `myshader.frag`.\n\nPaste this code to the file:\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(As you may notice, this is the default code of [GLSL Sandbox](http://glslsandbox.com/)!)\n\n...then hit `ctrl-enter`.\nVEDA will evaluate `myshader.frag` and show the result:\n\n![](/static/images/usage2.gif)\n\nCongratulations!!\nNow you can edit the code and see the result with `ctrl-enter`.\n\n---\n\nYou've started the first step as a live coder!!\nSee Features for more advanced features.\n"),ja:Object(g["default"])("---\ntitle: \u64CD\u4F5C\u65B9\u6CD5\n---\n# \u64CD\u4F5C\u65B9\u6CD5\n\n\u3053\u306E\u30DA\u30FC\u30B8\u3067\u306F\u3001VEDA\u306E\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002\n\n\n## \u57FA\u672C\u7684\u306A\u6D41\u308C\n\nVEDA\u3092\u4F7F\u3063\u305F\u30E9\u30A4\u30D6\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u306E\u30D5\u30ED\u30FC\u306F\u6B21\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\n\n1. `Veda: Toggle` \u3067VEDA\u3092\u8D77\u52D5\n2. `Veda: Load Shader` (\u30AD\u30FC: `ctrl-enter`) \u3067\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\n\n\u305D\u308C\u3067\u306F\u3001\u9806\u3092\u8FFD\u3063\u3066\u89E3\u8AAC\u3057\u3066\u3044\u304D\u307E\u3059\u3002\n\n\u307E\u305A\u3001 `ctrl-shift-p` (mac\u306E\u5834\u5408\u306F `cmd-shift-p`) \u3067\u30B3\u30DE\u30F3\u30C9\u30D1\u30EC\u30C3\u30C8\u3092\u958B\u304D\u307E\u3059\u3002\n`veda` \u3068\u5165\u529B\u3059\u308B\u3068 `Veda: Toggle` \u304C\u30B5\u30B8\u30A7\u30B9\u30C8\u3055\u308C\u308B\u306E\u3067\u3001 `enter` \u3067\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u3059\u308B\u3068\u3001VEDA\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3057\u3001\u753B\u9762\u306B\u8868\u793A\u3057\u307E\u3059\u3002\n\n![](/static/images/usage1.gif)\n\n\u7D9A\u3044\u3066\u3001\u65B0\u3057\u3044\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u4F5C\u3063\u3066\u5B9F\u884C\u3057\u307E\u3057\u3087\u3046\u3002\n`ctrl-n` (mac\u306E\u5834\u5408\u306F `cmd-n`) \u3067\u65B0\u898F\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u3001 `myshader.frag` \u3068\u3044\u3046\u540D\u524D\u3067\u4FDD\u5B58\u3057\u307E\u3059\u3002\n\n\u4F5C\u6210\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306B\u4EE5\u4E0B\u306EGLSL\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u3066\u4E0B\u3055\u3044\u3002\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(\u304A\u6C17\u3065\u304D\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u304C\u3001\u3053\u308C\u306F[GLSL Sandbox](http://glslsandbox.com/)\u306E\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30B3\u30FC\u30C9\u3067\u3059\uFF01)\n\n\u305D\u3057\u3066 `ctrl-enter` \u3092\u62BC\u3059\u3068\u3001VEDA\u306F `myshader.frag` \u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\n\n![](/static/images/usage2.gif)\n\n\u304A\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\n\u3042\u3068\u306F\u3001\u30B3\u30FC\u30C9\u3092\u7DE8\u96C6\u3057\u3066 `ctrl-enter` \u3067\u5B9F\u884C\u3001\u3092\u7E70\u308A\u8FD4\u3057\u3066\u3001\u6B21\u3005\u306BGLSL\u3092\u5B9F\u884C\u3057\u3066\u3044\u3063\u3066\u304F\u3060\u3055\u3044\u3002\n\n---\n\n\u3053\u308C\u3067\u3042\u306A\u305F\u306FVEDA\u3067\u30E9\u30A4\u30D6\u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\uFF01\n\u6A5F\u80FD\u4E00\u89A7\u3092\u898B\u3066\u3001VEDA\u306E\u3044\u308D\u3044\u308D\u306A\u6A5F\u80FD\u3092\u4F7F\u3044\u3053\u306A\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u3087\u3046\uFF01\n")}})})}},[341]);return{page:a.default}});