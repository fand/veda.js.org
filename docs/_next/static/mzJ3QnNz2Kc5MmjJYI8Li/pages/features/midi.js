(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{339:function(e,n,t){__NEXT_REGISTER_PAGE("/features/midi",function(){return e.exports=t(340),{page:e.exports.default}})},340:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),s=t(2),a=t(3),r=t(1);n.default=Object(s.b)()(function(){return o.a.createElement(a.a,{path:"/features/midi",article:{en:Object(r.default)('---\ntitle: MIDI Input\n---\n# MIDI input\n\nVEDA supports MIDI input.\nWhen you set `"midi": true` in [Settings](/settings), VEDA enables following uniform variables:\n\n- `sampler2D midi`\n- `sampler2D note`\n\n## `sampler2D midi`\n\n`sampler2D midi` stores MIDI events obtained by Web MIDI API. The size of `midi` is `256x128`. Each pixel stores the last event of the corresponding MIDI Events.\n\nFor example, `texture2D(midi, vec2(176. / 256., 8. / 128.)).x` yields the value of CC message of CC#8 sent to Channel 1.\n\n- `176.` (0xB0): Control Change of Channel \\#1\n- `8.` (0x08): Control Number\n- `.x` (3nd byte): Value\n\nSee [MIDI Event Table](http://www.onicos.com/staff/iz/formats/midi-event.html) to lookup the coordinate.\n\n## `sampler2D note`\n\n`sampler2D note` stores the volumes for each note number. The size of `note` is `128x1`. Each pixel stores the volume of the last event for corresponding MIDI note.\n\nFor example, `texture2D(note, vec2(60. / 128., 0)).x` yields the velocity of note `C4` (Middle C).\n\nSee [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) for actual usage.\n'),ja:Object(r.default)('---\ntitle: MIDI入力\n---\n# MIDI入力\n\nVEDAでは、MIDI入力からのイベントをGLSL上で利用できます。\n[Settings](/settings?lang=ja)で `"midi": true` すると、以下のuniform変数が利用できるようになります。\n\n- `sampler2D midi`\n- `sampler2D note`\n\n## `sampler2D midi`\n\n`sampler2D midi` には、Web MIDI APIによって取得したMIDIイベントの値が保存されています。\n`midi` のサイズは `256x128` となっています。\n各ピクセルは、対応するチャンネルの直近のMIDIイベントの値を表しています。\n\n例えば、 `texture2D(midi, vec2(176. / 256., 8. / 128)).x` は、チャンネル \\#1のCCメッセージの値になります。\n\n- `176.` (0xB0): チャンネル \\#1 のMIDI CCイベント\n- `8.` (0x08): コントロールナンバー\n- `.x` (3nd byte): 値\n\n各種MIDIイベントの番号は、 [MIDI Event Table](http://www.onicos.com/staff/iz/formats/midi-event.html) を参考にして下さい。\n\n## `sampler2D note`\n\n`sampler2D note` には、各MIDIノートの値が保存されています。.\n`note` のサイズは `128x1` となっています。\n各ピクセルの値は、対応するノートナンバーの現在のベロシティを表しています。\n\n例えば、 `texture2D(note, vec2(60. / 128., 0)).x` には `C4` (中央のド) のベロシティが保存されています。\n\n詳しくは [examples](https://github.com/fand/veda/blob/master/examples/midi.frag) をご覧ください。\n')}})})}},[[339,1,0]]]);