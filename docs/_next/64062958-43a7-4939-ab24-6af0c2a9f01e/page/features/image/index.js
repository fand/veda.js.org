
          window.__NEXT_REGISTER_PAGE('/features/image', function() {
            var comp = module.exports=webpackJsonp([16],{341:function(a,b,c){a.exports=c(342)},342:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(8),j=d(i),k=c(7);b.default=(0,k.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/features/image",article:{en:(0,j.default)("---\ntitle: Loading images - VEDA.js\ndescription: How to use images as textures in GLSL with VEDA.js\n---\n# Loading images & videos\n\nVEDA supports loading arbitrary images & video files.\nWhen you add `IMPORTED` to your settings, VEDA load the files and passes them to GLSL as textures.\n\n```js\n{\n  \"IMPORTED\": {\n    \"image1\": {\n      \"PATH\": \"./image1.png\",\n    },\n    \"image2\": {\n      \"PATH\": \"https://veda.gl/static/images/2.jpg\",\n    },    \n    \"video1\": {\n      \"PATH\": \"./video1.mov\",\n      \"SPEED\": \"2\",  // 2\u500D\u901F\u3067\u518D\u751F\u3055\u308C\u308B\n    },    \n    \"video2\": {\n      \"PATH\": \"./video2.mp4\",\n      \"SPEED\": \"2\",  // 2\u500D\u901F\u3067\u518D\u751F\u3055\u308C\u308B\n    },    \n  }    \n}\n```\n\nThe structure of `IMPORTED` is based on [Iteractive Shader Format](https://www.interactiveshaderformat.com/).\n\n\n## Example\n\nThis is the code running on this page (PC only).\nIt's executable on VEDA.\n\n```glsl\n/*{\n  \"IMPORTED\": {\n    \"image1\": {\n      \"PATH\": \"https://veda.gl/static/images/1.jpg\",\n    },\n    \"image2\": {\n      \"PATH\": \"https://veda.gl/static/images/2.jpg\",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n```\n\n\n---\n\nPhoto by [Dick Thomas Johnson - Akihabara](https://www.flickr.com/photos/31029865@N06/23850480454)\n"),ja:(0,j.default)("---\ntitle: Loading images - VEDA.js\ndescription: How to use images as textures in GLSL with VEDA.js\n---\n# \u753B\u50CF/\u52D5\u753B\u3092\u30ED\u30FC\u30C9\u3059\u308B\n\nVEDA\u3067\u306F\u3001\u4EFB\u610F\u306E\u753B\u50CF\u3084\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u3092\u30C6\u30AF\u30B9\u30C1\u30E3\u3068\u3057\u3066\u5229\u7528\u3067\u304D\u307E\u3059\u3002\nSetting\u306E `IMPORTED` \u306B\u4EE5\u4E0B\u306E\u5F62\u5F0F\u3067\u30D5\u30A1\u30A4\u30EB\u540D\u3084URL\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u6307\u5B9A\u3057\u305F\u540D\u524D\u306E\u30C6\u30AF\u30B9\u30C1\u30E3\u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\n\n```js\n{\n  \"IMPORTED\": {\n    \"image1\": {\n      \"PATH\": \"./image1.png\",\n    },\n    \"image2\": {\n      \"PATH\": \"https://veda.gl/static/images/2.jpg\",\n    },    \n    \"video1\": {\n      \"PATH\": \"./video1.mov\",\n      \"SPEED\": \"2\",  // 2\u500D\u901F\u3067\u518D\u751F\u3055\u308C\u308B\n    },    \n    \"video2\": {\n      \"PATH\": \"./video2.mp4\",\n      \"SPEED\": \"2\",  // 2\u500D\u901F\u3067\u518D\u751F\u3055\u308C\u308B\n    },    \n  }    \n}\n```\n\n`IMPORTED` \u306E\u5F62\u5F0F\u306F\u3001VDMX\u7B49\u306EVJ\u30BD\u30D5\u30C8\u3067\u7528\u3044\u3089\u308C\u308B[ISF](https://www.interactiveshaderformat.com/)\u5F62\u5F0F\u3092\u5143\u306B\u3057\u3066\u3044\u307E\u3059\u3002\n\n\n## \u4F8B\n\n\u4EE5\u4E0B\u306F\u3053\u306E\u30DA\u30FC\u30B8\u3092PC\u3067\u958B\u3044\u305F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308BGLSL\u30B3\u30FC\u30C9\u3067\u3059\u3002\n\u3053\u306E\u30B3\u30FC\u30C9\u306FVEDA\u4E0A\u3067\u5B9F\u884C\u53EF\u80FD\u3067\u3059\u3002\n\n```glsl\n/*{\n  \"IMPORTED\": {\n    \"image1\": {\n      \"PATH\": \"https://veda.gl/static/images/1.jpg\",\n    },\n    \"image2\": {\n      \"PATH\": \"https://veda.gl/static/images/2.jpg\",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n```\n\n\n---\n\nPhoto by [Dick Thomas Johnson - Akihabara](https://www.flickr.com/photos/31029865@N06/23850480454)\n")},shader:{attach:function(a){a.loadTexture("image1","/static/images/1.jpg"),a.loadTexture("image2","/static/images/2.jpg"),a.loadFragmentShader("/*{\n  \"IMPORTED\": {\n    \"image1\": {\n      \"PATH\": \"https://veda.gl/static/images/1.jpg\",\n    },\n    \"image2\": {\n      \"PATH\": \"https://veda.gl/static/images/2.jpg\",\n    },\n  }\n}*/\nprecision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform sampler2D backbuffer;\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p, vec2(5395.3242, 38249.2348))) * 248.24);\n}\n\nfloat noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n\n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    vec2 u = f*f*(3.0-2.0*f);\n\n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution;\n    vec2 uv0 = (uv - .5) * .9 + .5;\n\n    float z = 19.01;\n    float t = time * .2;\n    vec2 uv1 = uv0 + vec2(noise(uv0 * z - t), noise(uv0 * z + t)) * .03;\n    vec2 uv2 = uv1 + vec2(noise(uv1 * z + t), noise(uv1 * z - t)) * .02;\n\n    gl_FragColor = (texture2D(image1, uv1) + texture2D(image1, uv2)) * vec4(.2, .4, .5, 1);\n}\n")},detach:function(a){a.unloadTexture("image1","/static/images/1.jpg"),a.unloadTexture("image2","/static/images/2.jpg")}}})})}},[341]);
            return { page: comp.default }
          })
        