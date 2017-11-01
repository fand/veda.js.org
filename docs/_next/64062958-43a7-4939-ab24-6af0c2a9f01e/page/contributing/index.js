
          window.__NEXT_REGISTER_PAGE('/contributing', function() {
            var comp = module.exports=webpackJsonp([20],{267:function(a,b,c){a.exports=c(268)},268:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(0),f=d(e),g=c(6),h=d(g),i=c(7),j=c(8),k=d(j);b.default=(0,i.withReduxSaga)(function(){return f.default.createElement(h.default,{path:"/contributing",article:{en:(0,k.default)("# CONTRIBUTING\n\n## Feature Requests & Bug Reports\n\nIf you find bugs, or wanna request new features, open an issue on GitHub:\n\nhttps://github.com/fand/atom-veda/issues\n\nOr you can ask us on [hashtag \\#VEDAJS](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd) and [TOPLAP Slack](https://toplap.org/toplap-on-slack/).\n\nAsk us anything anytime!\uD83D\uDE38\n\n\n## Development\n\nWe're always waiting for your Pull Request!\n\n- https://github.com/fand/atom-veda\n- https://github.com/fand/vedajs\n\nFor VEDA development, you have to clone [fand/veda](https://github.com/fand/veda) and [fand/vedajs](https://github.com/fand/vedajs).\nPrepare these repository by following instruction.\n\n\n### 1. Fork & clone [fand/vedajs](https://github.com/fand/vedajs)\n\nVEDA.js is the GLSL engine of VEDA.\nPrepare it first to refer from Atom package.\n\nFirst, fork fand/vedajs on GitHub.\n\nhttps://github.com/fand/vedajs\n\nNext\u3001run following command on the terminal:\n\n```bash\ngit clone https://github.com/(YOUR_GITHUB_USERNAME)/vedajs\ncd vedajs\nyarn\nyarn link\n```\n\n### 2. Fork & clone [fand/veda](https://github.com/fand/veda)\n\n`fand/veda` is the core of VEDA Atom package.\nWe have to make Atom see fand/veda on your local PC.\n\nFork fand/veda on GitHub.\n\nhttps://github.com/fand/veda\n\nThen run following commands:\n\n```bash\ngit clone https://github.com/(YOUR_GITHUB_USERNAME)/veda\ncd veda\nyarn\nyarn link vedajs  # link vedajs on your PC\napm link  # Make Atom see fand/veda on your PC\n```\n\n\n### 3. Edit the code\n\nNow your Atom runs the code on your local PC.\nCreate a new branch, fix the code, and `git commit`.\n\n\n### 4. Test\n\nRun tests and make sure the code isn't broken.\nIf your fix is testable, add test cases.\n\n```bash\nnpm run test\n```\n\n\n### 5. Create Pull Request\n\nPush your code to GitHub and create Pull Request.\n\nhttps://github.com/fand/veda/pulls\n\nThat's all!\nThank you for your contribution!!\uD83D\uDE4C\n\n\n## Documentation\n\nThis website is hosted on GitHub Pages.\nIf you find something wrong, open an issue on fand/veda.gl.\n\nhttps://github.com/fand/veda.gl\n"),ja:(0,k.default)("# CONTRIBUTING\n\n## \u65B0\u6A5F\u80FD\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u30FB\u30D0\u30B0\u30EC\u30DD\u30FC\u30C8\n\n\u30D0\u30B0\u3092\u898B\u3064\u3051\u305F\u308A\u3001\u6B32\u3057\u3044\u6A5F\u80FD\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u305F\u3044\u5834\u5408\u306F\u3001GitHub\u3067issue\u3092\u7ACB\u3066\u3066\u304F\u3060\u3055\u3044\uD83D\uDC47\n\nhttps://github.com/fand/atom-veda/issues\n\n\u3042\u308B\u3044\u306F\u3001[Twitter\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0 \\#VEDAJS](https://twitter.com/search?f=tweets&q=%23vedajs&src=typd)\u3084\u3001[TOPLAP Slack](https://toplap.org/toplap-on-slack/)\u3067\u3082OK\u3067\u3059\u3002\n\u3044\u3064\u3067\u3082\u6C17\u8EFD\u306B\u30B3\u30E1\u30F3\u30C8\u3057\u3066\u304F\u3060\u3055\u3044\uFF01\uD83D\uDE38\n\n\n## \u958B\u767A\u65B9\u6CD5\n\n\u79C1\u9054\u306F\u3001\u3044\u3064\u3067\u3082\u3042\u306A\u305F\u306EPull Request\u3092\u5F85\u3063\u3066\u3044\u307E\u3059\uFF01\n\nVEDA\u306E\u958B\u767A\u306B\u306F\u3001[fand/veda](https://github.com/fand/veda)\u304A\u3088\u3073[fand/vedajs](https://github.com/fand/vedajs)\u306E\u30EC\u30DD\u30B8\u30C8\u30EA\u304C\u5FC5\u8981\u3067\u3059\u3002\n\u4E0B\u8A18\u306E\u624B\u9806\u3067\u3001\u624B\u5143\u306EPC\u306B\u958B\u767A\u74B0\u5883\u3092\u7528\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n\n### 1. [fand/vedajs](https://github.com/fand/vedajs) \u3092fork\u3057\u3066\u30AF\u30ED\u30FC\u30F3\n\nVEDA.js\u306FVEDA\u306EGLSL\u30A8\u30F3\u30B8\u30F3\u3067\u3059\u3002\nAtom\u30D1\u30C3\u30B1\u30FC\u30B8\u304B\u3089VEDA.js\u3092\u53C2\u7167\u3059\u308B\u305F\u3081\u3001\u5148\u306B\u7528\u610F\u3057\u3066\u304A\u304D\u307E\u3059\u3002\n\n\u307E\u305A\u306F\u3001GitHub\u4E0A\u3067fand/vedajs\u3092fork\u3057\u307E\u3059\u3002\n\nhttps://github.com/fand/vedajs\n\n\u6B21\u306B\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u9806\u756A\u306B\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n```bash\ngit clone https://github.com/(\u3042\u306A\u305F\u306EGitHub\u30E6\u30FC\u30B6\u30FC\u540D)/vedajs\ncd vedajs\nyarn\nyarn link\n```\n\n### 2. [fand/veda](https://github.com/fand/veda)\u3092fork\u3057\u3066\u30AF\u30ED\u30FC\u30F3\n\nfand/veda \u306FVEDA\u306EAtom\u30D1\u30C3\u30B1\u30FC\u30B8\u672C\u4F53\u3067\u3059\u3002\nAtom\u304B\u3089\u624B\u5143\u306E fand/veda \u304C\u53C2\u7167\u3055\u308C\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\n\n\u5148\u307B\u3069\u3068\u540C\u3058\u304F\u3001GitHub\u4E0A\u3067fand/veda\u3092fork\u3057\u307E\u3059\u3002\n\nhttps://github.com/fand/veda\n\n\u7D9A\u3044\u3066\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u9806\u756A\u306B\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n```bash\ngit clone https://github.com/(\u3042\u306A\u305F\u306EGitHub\u30E6\u30FC\u30B6\u30FC\u540D)/veda\ncd veda\nyarn\nyarn link vedajs  # \u624B\u5143\u306Evedajs\u3092\u53C2\u7167\u3059\u308B\u3088\u3046\u306B\u306A\u308B\napm link  # Atom\u304C\u624B\u5143\u306Efand/veda\u3092\u53C2\u7167\u3059\u308B\u3088\u3046\u306B\u306A\u308B\n```\n\n\n### 3. \u30B3\u30FC\u30C9\u3092\u7DE8\u96C6\u3059\u308B\n\n\u3053\u308C\u307E\u3067\u306E\u624B\u9806\u3067\u3001Atom\u306F\u624B\u5143\u306E\u30B3\u30FC\u30C9\u3092\u5B9F\u884C\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\n\u65B0\u3057\u3044branch\u3092\u4F5C\u308A\u3001\u5FC5\u8981\u306A\u7B87\u6240\u3092\u4FEE\u6B63\u3057\u3066\u3001 `git commit` \u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n\n### 4. \u30C6\u30B9\u30C8\n\n\u30C6\u30B9\u30C8\u3092\u5B9F\u884C\u3057\u3066\u3001\u30B3\u30FC\u30C9\u304C\u58CA\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u3092\u78BA\u8A8D\u3057\u307E\u3059\u3002\n\u5909\u66F4\u7B87\u6240\u304C\u30C6\u30B9\u30C8\u53EF\u80FD\u306A\u5834\u6240\u3067\u3042\u308C\u3070\u3001\u30C6\u30B9\u30C8\u3092\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\n```bash\nnpm run test\n```\n\n\n### 5. Pull Request\u306E\u4F5C\u6210\n\nGitHub\u306Bpush\u3057\u3066\u3001Pull Request\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\n\nhttps://github.com/fand/veda/pulls\n\n\u4EE5\u4E0A\u3067Pull Request\u306E\u4F5C\u6210\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002\n\u304A\u75B2\u308C\u69D8\u3067\u3057\u305F\uFF01\uFF01\uFF01\uD83D\uDE4C\n\n\n## \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u6539\u5584\n\n\u3053\u306EWeb\u30B5\u30A4\u30C8\u306F\u3001GitHub Pages\u3067\u30DB\u30B9\u30C8\u3055\u308C\u3066\u3044\u307E\u3059\u3002\n\u4F55\u304B\u9593\u9055\u3044\u3092\u898B\u3064\u3051\u305F\u3089\u3001 fand/veda.gl \u306Bissue\u3092\u7ACB\u3066\u3066\u304F\u3060\u3055\u3044\u3002\n\nhttps://github.com/fand/veda.gl\n")}})})}},[267]);
            return { page: comp.default }
          })
        