
          window.__NEXT_REGISTER_PAGE('/features/video', function() {
            var comp = module.exports=webpackJsonp([11],{351:function(a,b,c){a.exports=c(352)},352:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(8),j=d(i),k=c(7);b.default=(0,k.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/features/video",article:{en:(0,j.default)("---\ntitle: Loading videos - VEDA.js\ndescription: How to use video files in GLSL with VEDA.js\n---\n# Loading videos\n\n## Usage\n\n```js\nveda.loadTexture('texture_name', textureUrlOrPath);\n```\n\nYou can also unload the texture to reduce memory usage.\n\n```js\nveda.loadTexture('texture_name', textureUrlOrPath);\n```\n\n---\n\nVideo by [beeple - ANGULAR](https://vimeo.com/174504082)\n")},shader:{attach:function(a){a.loadTexture("video1","/static/videos/1.mp4"),a.loadTexture("video2","/static/videos/2.mp4"),a.loadTexture("video3","/static/videos/3.mp4"),a.loadFragmentShader("precision mediump float;\nuniform float time;\nuniform vec2 resolution;\nuniform sampler2D video1;\nuniform sampler2D backbuffer;\n\nvoid main() {\n    vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n    p = abs(p);\n\n    if (mod(time, 10.) < 5.) {\n        p *= p;\n    }\n\n    gl_FragColor = texture2D(video1, p) * .2;\n\n    vec2 uv = gl_FragCoord.xy / resolution;\n    gl_FragColor += texture2D(backbuffer, uv) * .8;\n}\n")},detach:function(a){a.unloadTexture("video1","/static/videos/1.mp4"),a.unloadTexture("video2","/static/videos/2.mp4"),a.unloadTexture("video3","/static/videos/3.mp4")}}})})}},[351]);
            return { page: comp.default }
          })
        