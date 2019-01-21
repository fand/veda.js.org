(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{360:function(n,e,o){__NEXT_REGISTER_PAGE("/usage",function(){return n.exports=o(361),{page:n.exports.default}})},361:function(n,e,o){"use strict";o.r(e);var t=o(0),i=o.n(t),s=o(2),a=o(3),r=o(1);e.default=Object(s.b)()(function(){return i.a.createElement(a.a,{path:"/usage",article:{en:Object(r.default)("---\ntitle: Usage\n---\n# Usage\n\nIn this page we'll explain the basic usage of VEDA.\n\n\n## Basic workflow\n\nThe workflow of livecoding with VEDA is like this:\n\n1. Launch VEDA with `Veda: Toggle`\n2. Run shaders with `Veda: Load Shader` (key: `ctrl-enter`)\n\nSo let's start coding!\n\nFirst、 hit `ctrl-shift-p` (mac: `cmd-shift-p`) to open command palette.\nWhen you type `veda` Atom will suggest `Veda: Toggle`.\nHit `enter` then VEDA will show the result of default shader:\n\n![](/static/images/usage1.gif)\n\nNext, let's create a new GLSL file.\nCreate new file with `ctrl-n` (mac: `cmd-n`) and save as `myshader.frag`.\n\nPaste this code to the file:\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(As you may notice, this is the default code of [GLSL Sandbox](http://glslsandbox.com/)!)\n\n...then hit `ctrl-enter`.\nVEDA will evaluate `myshader.frag` and show the result:\n\n![](/static/images/usage2.gif)\n\nCongratulations!!\nNow you can edit the code and see the result with `ctrl-enter`.\n\n---\n\nYou've started the first step as a live coder!!\nSee Features for more advanced features.\n"),ja:Object(r.default)("---\ntitle: 操作方法\n---\n# 操作方法\n\nこのページでは、VEDAの基本的な使い方を紹介します。\n\n\n## 基本的な流れ\n\nVEDAを使ったライブコーディングのフローは次のようになります。\n\n1. `Veda: Toggle` でVEDAを起動\n2. `Veda: Load Shader` (キー: `ctrl-enter`) でシェーダーを実行\n\nそれでは、順を追って解説していきます。\n\nまず、 `ctrl-shift-p` (macの場合は `cmd-shift-p`) でコマンドパレットを開きます。\n`veda` と入力すると `Veda: Toggle` がサジェストされるので、 `enter` で実行してください。\nすると、VEDAはデフォルトのシェーダーを実行し、画面に表示します。\n\n![](/static/images/usage1.gif)\n\n続いて、新しいシェーダーを作って実行しましょう。\n`ctrl-n` (macの場合は `cmd-n`) で新規ファイルを作成し、 `myshader.frag` という名前で保存します。\n\n作成したファイルに以下のGLSLコードをコピーして下さい。\n\n```glsl\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\n\nvoid main(void) {\n  vec2 position = (gl_FragCoord.xy / resolution.xy) + mouse / 4.0;\n\n  float color = 0.0;\n  color += sin(position.x * cos(time / 15.0) * 80.0) + cos(position.y * cos(time / 15.0) * 10.0);\n  color += sin(position.y * sin( time / 10.0) * 40.0) + cos(position.x * sin(time / 25.0) * 40.0);\n  color += sin(position.x * sin( time / 5.0) * 10.0) + sin(position.y * sin(time / 35.0) * 80.0);\n  color *= sin(time / 10.0) * 0.5;\n\n  gl_FragColor = vec4(vec3(color, color * 0.5, sin(color + time / 3.0) * 0.75), 1.0);\n}\n```\n\n(お気づきかもしれませんが、これは[GLSL Sandbox](http://glslsandbox.com/)のデフォルトのコードです！)\n\nそして `ctrl-enter` を押すと、VEDAは `myshader.frag` を実行します。\n\n![](/static/images/usage2.gif)\n\nおめでとうございます！\nあとは、コードを編集して `ctrl-enter` で実行、を繰り返して、次々にGLSLを実行していってください。\n\n---\n\nこれであなたはVEDAでライブコーディングできるようになりました！\n機能一覧を見て、VEDAのいろいろな機能を使いこなせるようになりましょう！\n")}})})}},[[360,1,0]]]);