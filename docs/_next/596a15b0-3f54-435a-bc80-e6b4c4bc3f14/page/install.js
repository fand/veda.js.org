module.exports=__NEXT_REGISTER_PAGE("/install",function(){var a=webpackJsonp([4],{342:function(a,b,c){a.exports=c(343)},343:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(0),e=c.n(d),f=c(3),g=c(2),h=c(4);b["default"]=Object(h.a)(function(){return e.a.createElement(f.a,{path:"/install",article:{en:Object(g["default"])("---\ntitle: Install VEDA\n---\n# Install VEDA\n\nLet your editor blink!\n\n![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)\n\n<div align=\"center\" style=\"line-height: 40px;\">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)\n![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)\n</div>\n\n\n\n## 1. Install Prerequisites\n\nVEDA depends on following softwares to be installed:\n\n- Python 2.x\n- glslangValidator\n\n\n### Python 2.x\n\nPython 2.x is required to build native add-ons in VEDA's dependency.\nCheck the version of your python with `python -V`.\n\nIf you've already installed both Python 2 and 3, you have to tell npm to use python 2.\nRun `npm config set python python2`.\n\n\n### glslangValidator\n\n`glslangValidator` is used to check GLSL code in VEDA.\nPlease Install it by following the steps below.\n\n\n#### macOS\n\nIf you are uning macOS, glslangValidator can be installed by homebrew.\n\n`brew install glslang`\n\nThe path of glslangValidator can also be specified in the settings of VEDA.\nAdd the path of glslangValidator (e.g.: `/usr/local/bin/glslangValidator`) to `glslangValidator path` property.\n\n#### Windows or Linux\n\nIf you are uning Windows or Linux, the best way to install glslangValidator is to install Vulkan SDK.\nGet the SDK from here:\n\nhttps://www.lunarg.com/vulkan-sdk/\n\nAfter that, add installed glslangValidator to your PATH environment variable.\nIn Windows, glslangValidator will be installed in `C:\\VulkanSDK\\( version )\\Bin`.\n\nThe path of glslangValidator can also be specified in the settings of VEDA.\nAdd the path of glslangValidator (e.g.: `C:\\VulkanSDK( version )\\Bin\\glslangValidator.exe`) to `glslangValidator path` property.\n\n\n## 2. Install VEDA\n\nThen install VEDA from Atom's `Settings` view or by `apm` like this:\n\n```bash\napm install vedajs\n```\n\n---\n\nNow VEDA is ready for you!\nRead [USAGE](/usage) to learn how to use it.\n"),ja:Object(g["default"])("---\ntitle: VEDA\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n---\n# VEDA\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\nAtom\u3092\u5149\u3089\u305B\u3088\u3046\u3002\n\n![](https://user-images.githubusercontent.com/1403842/28673275-1d42b062-731d-11e7-92b0-bde5ca1f1cae.gif)\n\n<div align=\"center\" style=\"line-height: 40px;\">![GitHub stars](https://img.shields.io/github/stars/fand/veda.svg?style=social)\n![TravisCI](https://img.shields.io/travis/fand/veda.svg) ![license MIT](https://img.shields.io/apm/dm/veda.svg) ![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)\n</div>\n\n\n## 1. \u4E8B\u524D\u6E96\u5099\n\nVEDA\u306F\u4EE5\u4E0B\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u306B\u4F9D\u5B58\u3057\u3066\u3044\u307E\u3059\u3002\n\u307E\u305A\u306F\u3053\u308C\u3089\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3057\u3087\u3046\u3002\n\n- Python 2.x\n- glslangValidator\n\n\n### Python 2.x\n\nVEDA\u306FNode.js\u306E\u30CD\u30A4\u30C6\u30A3\u30D6\u30A2\u30C9\u30AA\u30F3\u3092\u5229\u7528\u3059\u308B\u305F\u3081\u3001Python 2\u7CFB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n`python -V` \u3092\u5B9F\u884C\u3057\u3066\u3001Python\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n\u65E2\u306BPython2\u30683\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u6E08\u307F\u306E\u5834\u5408\u3001npm\u304Cpython2\u3092\u53C2\u7167\u3059\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002\n\u30BF\u30FC\u30DF\u30CA\u30EB\u304B\u3089 `npm config set python python2` \u3092\u5B9F\u884C\u3057\u3066\u4E0B\u3055\u3044\u3002\n\n\n### glslangValidator\n\n`glslangValidator` \u306FGLSL\u30B3\u30FC\u30C9\u3092\u691C\u8A3C\u3059\u308B\u305F\u3081\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3067\u3059\u3002\n\u4EE5\u4E0B\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n\n#### macOS\n\nhomebrew\u3067\u7C21\u5358\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002\n\n`brew install glslang`\n\n\n#### Windows or Linux\n\nWindows\u3068Linux\u306E\u5834\u5408\u3001Vulkan SDK\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3068glslangValidator\u3082\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u307E\u3059\u3002\n\u4EE5\u4E0B\u306E\u30B5\u30A4\u30C8\u304B\u3089Vulkan SDK\u3092\u5165\u624B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\nhttps://www.lunarg.com/vulkan-sdk/\n\n\u7D9A\u3044\u3066\u3001glslangValidator\u304C\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u305F\u5834\u6240\u3092\u74B0\u5883\u5909\u6570 `PATH` \u306B\u52A0\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\nWindows\u306E\u5834\u5408\u3001glslangValidator\u306F `C:\\VulkanSDK\\( version )\\Bin` \u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3055\u308C\u3066\u3044\u308B\u306F\u305A\u3067\u3059\u3002\n\nglslangValidator \u306E\u5834\u6240\u306F\u3001VEDA\u306E\u8A2D\u5B9A\u3067\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\n\n\n## 2. VEDA\u672C\u4F53\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\n\nVEDA\u3092Atom\u306E `Settings` \u30BF\u30D6\u304B\u3001`apm` \u304B\u3089\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002\n\n```bash\napm install vedajs\n```\n\n---\n\n\u3053\u308C\u3067VEDA\u306E\u6E96\u5099\u304C\u3067\u304D\u307E\u3057\u305F\uFF01\n\u6B21\u306F [\u64CD\u4F5C\u65B9\u6CD5](/usage?lang=ja) \u306E\u30DA\u30FC\u30B8\u3067VEDA\u306E\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u3092\u899A\u3048\u307E\u3057\u3087\u3046\u3002\n")},shader:{attach:function(a){a.loadFragmentShader("// Author: @amagitakayosi\n// 2017-10-23\nprecision mediump float;\nuniform float time;\nuniform vec2 mouse;\nuniform vec2 resolution;\nuniform sampler2D backbuffer;\n\n// Util functions copied from http://glslsandbox.com/e#43153.1\nmat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,s,-s,c);}\nmat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);\nfloat tri(in float x){return clamp(abs(fract(x)-.5),0.01,0.49);}\nvec2 tri2(in vec2 p){return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));}\n\nfloat triNoise2d(in vec2 p, float spd)\n{\n  float z=1.8;\n  float z2=2.5;\n  float rz = 0.;\n  p *= mm2(p.x*0.06);\n  vec2 bp = p;\n  for (float i=0.; i<5.; i++ )\n  {\n    vec2 dg = tri2(bp*1.85)*.75;\n    dg *= mm2(time*spd);\n    p -= dg/z2;\n\n    bp *= 1.3;\n    z2 *= .45;\n    z *= .42;\n    p *= 1.21 + (rz-1.0)*.02;\n\n    rz += tri(p.x+tri(p.y))*z;\n    p*= -m2;\n  }\n  return clamp(1./pow(rz*29., 1.3),0.,.55);\n}\n\nvoid main() {\n  vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);\n  float t = time * .3 + 100.;\n\n  p = p * .5 + 1.;\n  p.x += 2.;  // Noises are too weak around origin\n\n  p /= vec2(\n    triNoise2d(p, p.x*.002+t*.002),\n    triNoise2d(p, p.y*.002+t*.002)\n  ) * 20.;  // zoom factor\n\n  gl_FragColor = vec4(\n    0.8 * sin(p.x * 2.3 + 2.7),\n    0.8 * sin(p.y * 2.2 + 3.7),\n    .8,\n    1.0\n  ) * .6;\n}\n")}}})})}},[342]);return{page:a.default}});