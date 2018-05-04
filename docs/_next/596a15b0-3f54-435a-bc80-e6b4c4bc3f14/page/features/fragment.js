module.exports=__NEXT_REGISTER_PAGE("/features/fragment",function(){var a=webpackJsonp([16],{318:function(a,b,c){a.exports=c(319)},319:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(3),g=c(2),h=c(4);b["default"]=Object(h.a)(function(){return e.a.createElement(f.a,{path:"/features/fragment",article:{en:Object(g["default"])("---\ntitle: Fragment Shaders\ndescription: How to run fragment shaders on VEDA\n---\n# Fragment Shaders\n\nYou can run fragment shaders like [GLSL Sandbox](http://glslsandbox.com) on VEDA.\n\nFragment shaders must be named like `*.frag`.\nCreate a file `foo.frag` like this:\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);\n}\n```\n\nThen save it and hit `ctrl-enter` to run it.\nVEDA will show the result on the background.\n"),ja:Object(g["default"])("---\ntitle: \u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30B7\u30A7\u30FC\u30C0\u30FC\ndescription: VEDA\u3067\u57FA\u672C\u7684\u306A\u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3059\u308B\u65B9\u6CD5\n---\n# \u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30B7\u30A7\u30FC\u30C0\u30FC\n\nVEDA\u3067\u306F\u3001[GLSL Sandbox](http://glslsandbox.com) \u306E\u3088\u3046\u306A\u5F62\u5F0F\u306E\u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002\n\n\u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30B7\u30A7\u30FC\u30C0\u30FC\u306E\u30D5\u30A1\u30A4\u30EB\u540D\u306F `*.frag` \u3068\u3044\u3046\u5F62\u5F0F\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u4F8B\u3048\u3070\u3001 `foo.frag` \u3068\u3044\u3046\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210\u3057\u3001\u4EE5\u4E0B\u306E\u5185\u5BB9\u3092\u30B3\u30D4\u30DA\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);\n}\n```\n\n\u30D5\u30A1\u30A4\u30EB\u3092\u4FDD\u5B58\u3057\u3066 `ctrl-enter` \u3092\u62BC\u3059\u3068\u3001VEDA\u306F\u30B7\u30A7\u30FC\u30C0\u30FC\u3092\u5B9F\u884C\u3057\u3001Atom\u306E\u80CC\u666F\u306B\u8868\u793A\u3057\u307E\u3059\u3002\n")}})})}},[318]);return{page:a.default}});