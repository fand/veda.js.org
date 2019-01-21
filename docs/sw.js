/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/_app.js",
    "revision": "e47f3da2d2ae99fcbc24d8589eacae2a"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/_error.js",
    "revision": "950dbe9964a693001c39ae71d64715c2"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/commands.js",
    "revision": "a9a8f891524d58b516c0e61720dae82e"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/contributing.js",
    "revision": "4b324718ed39847a1c2524b3743c37ca"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/faq.js",
    "revision": "098534d13202e59daf0e352d9249a37f"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features.js",
    "revision": "804eda111d1484db9457b9c0e07ecdb3"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/audio.js",
    "revision": "8ce8069d907ee7d4905d4a14b5d0a0f8"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/fragment.js",
    "revision": "1e835b7d22d569a8fd79b9f5460653fb"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/gamepad.js",
    "revision": "4c5be40dc627c407dd620e80536a5519"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/image.js",
    "revision": "7c0dac3963e25a8dc4852349b4769bf7"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/keyboard.js",
    "revision": "0cb1f18e8fb9d51cbbc8a272bc20412a"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/midi.js",
    "revision": "79ed5b2562c5bdd3ebb55b99a8e1a6c2"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/osc.js",
    "revision": "9113861fd4e02cd486b32f596048f618"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/recording.js",
    "revision": "483add3b4827acc186ce337957f56826"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/server.js",
    "revision": "786f7279347027880d4553718832bd9a"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/vertex.js",
    "revision": "280a846860bbd417c767d637ebf19040"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/video.js",
    "revision": "65cb5ec9a5bfb7545899c884389d340a"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/features/webcam.js",
    "revision": "aef0ac5e42f345ed615ab936ffcd14cf"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/index.js",
    "revision": "c30525060612659f09fcde7a08f5d5fd"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/install.js",
    "revision": "b8b4e87fe519f6ed0287a51f11ef67db"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/parse.js",
    "revision": "1f6bc1e113288512abb83e12cbfb8a78"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/settings.js",
    "revision": "eeb78c637e62bd308dd351e27423bc21"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/usage.js",
    "revision": "893d808f2f75ebf1a6ad04ed127adf17"
  },
  {
    "url": "_next/static/aRd2AAz4PBV4KOfV6FahJ/pages/vedajs.js",
    "revision": "ddbfed385e2ca91e3e73aa1ea1b48ea4"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "a72c707134870212974b68a7372c06f4"
  },
  {
    "url": "_next/static/chunks/commons.5609f1e594e56d4b34b2.js",
    "revision": "e496b29ef996c7155ae20a4b71337ef3"
  },
  {
    "url": "_next/static/chunks/commons.cb425ba20cfacd3992b2.js",
    "revision": "e496b29ef996c7155ae20a4b71337ef3"
  },
  {
    "url": "_next/static/chunks/commons.e83cad62f142341c8d57.js",
    "revision": "02bb1bf494f61b90ddaf3f48fd6f82d6"
  },
  {
    "url": "_next/static/development/dll/dll_0a5735af42686c2a38b2.js",
    "revision": "50fe8806913bd1ccab2460550b746f07"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "29904d2978fcd9293e6c3f0bdc77331c"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "74d1c5e41cf0fea527ad8d7327cbc2f5"
  },
  {
    "url": "_next/static/development/pages/commands.js",
    "revision": "242333ad3cdf5417da355e8910ca0ddb"
  },
  {
    "url": "_next/static/development/pages/features/recording.js",
    "revision": "b334625d2b7daa3c99ad513b0a61c507"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/_app.js",
    "revision": "e47f3da2d2ae99fcbc24d8589eacae2a"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/_error.js",
    "revision": "950dbe9964a693001c39ae71d64715c2"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/commands.js",
    "revision": "a9a8f891524d58b516c0e61720dae82e"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/contributing.js",
    "revision": "4b324718ed39847a1c2524b3743c37ca"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/faq.js",
    "revision": "098534d13202e59daf0e352d9249a37f"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features.js",
    "revision": "804eda111d1484db9457b9c0e07ecdb3"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/audio.js",
    "revision": "8ce8069d907ee7d4905d4a14b5d0a0f8"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/fragment.js",
    "revision": "1e835b7d22d569a8fd79b9f5460653fb"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/gamepad.js",
    "revision": "4c5be40dc627c407dd620e80536a5519"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/image.js",
    "revision": "7c0dac3963e25a8dc4852349b4769bf7"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/keyboard.js",
    "revision": "0cb1f18e8fb9d51cbbc8a272bc20412a"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/midi.js",
    "revision": "79ed5b2562c5bdd3ebb55b99a8e1a6c2"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/osc.js",
    "revision": "9113861fd4e02cd486b32f596048f618"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/recording.js",
    "revision": "483add3b4827acc186ce337957f56826"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/server.js",
    "revision": "786f7279347027880d4553718832bd9a"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/vertex.js",
    "revision": "280a846860bbd417c767d637ebf19040"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/video.js",
    "revision": "65cb5ec9a5bfb7545899c884389d340a"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/features/webcam.js",
    "revision": "aef0ac5e42f345ed615ab936ffcd14cf"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/index.js",
    "revision": "c30525060612659f09fcde7a08f5d5fd"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/install.js",
    "revision": "b8b4e87fe519f6ed0287a51f11ef67db"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/parse.js",
    "revision": "1f6bc1e113288512abb83e12cbfb8a78"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/settings.js",
    "revision": "eeb78c637e62bd308dd351e27423bc21"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/usage.js",
    "revision": "893d808f2f75ebf1a6ad04ed127adf17"
  },
  {
    "url": "_next/static/mzJ3QnNz2Kc5MmjJYI8Li/pages/vedajs.js",
    "revision": "ddbfed385e2ca91e3e73aa1ea1b48ea4"
  },
  {
    "url": "_next/static/runtime/main-3517a3deedd0b9836efd.js",
    "revision": "7d8798c2142e9e183efa99753e1bae7f"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "dc3424c01c4c93ea372d3488e221f21b"
  },
  {
    "url": "_next/static/runtime/webpack-42652fa8b82c329c0559.js",
    "revision": "3e44118e4b15620065eb34bd349f2c62"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "0557892a9605737a124fc8b4a08765a1"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/_app.js",
    "revision": "9f3be961e8c68309ac8254606e52b775"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/_error.js",
    "revision": "378a20533e128a85261a1933a0525d03"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/commands.js",
    "revision": "589ca0dc8253a6cf00d61469ba891751"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/contributing.js",
    "revision": "27b638c189da4724b0c9b6ac8b042d2e"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/faq.js",
    "revision": "bd0dc84f3f799b46750537e21cef7d3a"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features.js",
    "revision": "45385901b7c1a8325048439a1851211e"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/audio.js",
    "revision": "f0ee6fdfa8188b647090813d816bfd99"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/fragment.js",
    "revision": "4161dfefc247b4ca1b4c324d72ead4f0"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/gamepad.js",
    "revision": "04be4bc3cc0d3f19555dcbff33fe7cdf"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/image.js",
    "revision": "e6d9fee61d2353d4cceb6dd3e4e26bba"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/keyboard.js",
    "revision": "320bc71e8b9b46b44d994c5109ec3d51"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/midi.js",
    "revision": "dd0e538a7bc0a43585a50e03c9409177"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/osc.js",
    "revision": "8839b6c08b55ec3c2804dbd78604acab"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/recording.js",
    "revision": "154dd548783a2cbf2cd8f69190aa35dd"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/server.js",
    "revision": "6b7c1bd0ce184a585e9c3623d8358dc0"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/vertex.js",
    "revision": "acb36ae7cb111be03c945e662027acbe"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/video.js",
    "revision": "d65a895559ee575cc1bea14e5637e2f0"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/features/webcam.js",
    "revision": "e82eee19f4855c1ae312ebcf1cd15244"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/index.js",
    "revision": "f015dbffb571143ce4c02c3cc9281965"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/install.js",
    "revision": "9bb31b707c95d02b8a7b4bb4319ff09d"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/parse.js",
    "revision": "b8c442e5cd865414281e1b635c808794"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/settings.js",
    "revision": "7ac618df9e31c545e27fe2e835bf9264"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/usage.js",
    "revision": "fc4c964380c72def24d84140b3f72ee4"
  },
  {
    "url": "_next/static/vOqyVEqTgMPvPkGRSxu6j/pages/vedajs.js",
    "revision": "0d9e387b0cc95e094bedf8f688482cc7"
  },
  {
    "url": "_next/static/webpack/20aa8919214896133d97.hot-update.json",
    "revision": "b35c6fbf040ebd6de128210646808bcc"
  },
  {
    "url": "_next/static/webpack/33ad7a51940fbb020d5d.hot-update.json",
    "revision": "bde5797ab91393762d80149293dfe055"
  },
  {
    "url": "_next/static/webpack/61c9a9c0513958731c3e.hot-update.json",
    "revision": "5275d6fbf36092c272eb59d4ad4b5f82"
  },
  {
    "url": "_next/static/webpack/717a9cd5eaaf1edd5992.hot-update.json",
    "revision": "7a2573ba51ed585f72a74a4dcee13f4d"
  },
  {
    "url": "_next/static/webpack/8de9dadfb3f18a8f7ef4.hot-update.json",
    "revision": "1539d16a479f0cf3b7cd30c5947bf35d"
  },
  {
    "url": "_next/static/webpack/c1dd6d8e3d6f93880e84.hot-update.json",
    "revision": "f3cf219c2b4a596292c9d61576281047"
  },
  {
    "url": "_next/static/webpack/e48c9c7421c92a5ea38d.hot-update.json",
    "revision": "fc477cad0ca052ee712ed338df014be6"
  },
  {
    "url": "_next/static/webpack/e5dfb5d3b8b2743443a1.hot-update.json",
    "revision": "611433ecae3ef3b8bc66fdd941c9e436"
  },
  {
    "url": "_next/static/webpack/f521ae51473ecf360bb2.hot-update.json",
    "revision": "c536ba7f5dde705481aed2ac5534c8b2"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.20aa8919214896133d97.hot-update.js",
    "revision": "26ec5c141a18e981e20e1f779d6c72ce"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.33ad7a51940fbb020d5d.hot-update.js",
    "revision": "18f53260ded432cdf5ec4034b69b85c6"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.61c9a9c0513958731c3e.hot-update.js",
    "revision": "e7875597287b77b08e17657bf4f0b9ed"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.8de9dadfb3f18a8f7ef4.hot-update.js",
    "revision": "f3cf69e8e802c4a767864d98ba806dde"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.c1dd6d8e3d6f93880e84.hot-update.js",
    "revision": "fe78842f481185a6853f4fbcf66c4d3c"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.e48c9c7421c92a5ea38d.hot-update.js",
    "revision": "ce36ad02736f0cbbf5127315c35ac954"
  },
  {
    "url": "_next/static/webpack/static/development/pages/features/recording.js.e5dfb5d3b8b2743443a1.hot-update.js",
    "revision": "75f6d20b4cdd6d6a008b9a0df18299d0"
  },
  {
    "url": "commands/index.html",
    "revision": "f364a568c799c133dab55841c741c1d4"
  },
  {
    "url": "contributing/index.html",
    "revision": "8641ffc374834830a9c29dda368455df"
  },
  {
    "url": "faq/index.html",
    "revision": "45cc40f715101e16a6919220bd2054bb"
  },
  {
    "url": "features/audio/index.html",
    "revision": "8fbf77f031a4171e3358d2edbf974277"
  },
  {
    "url": "features/fragment/index.html",
    "revision": "75ecb07951bf974a6b747cc9f88af02b"
  },
  {
    "url": "features/gamepad/index.html",
    "revision": "41926d06691d33ba7818d6209ca8f488"
  },
  {
    "url": "features/image/index.html",
    "revision": "87406fe714233736bf794e25793b89f9"
  },
  {
    "url": "features/index.html",
    "revision": "d87be3221f719025eb5f1aa0d5d76336"
  },
  {
    "url": "features/keyboard/index.html",
    "revision": "c5063f9e76ed2d65b61152107aea41ed"
  },
  {
    "url": "features/midi/index.html",
    "revision": "32e051072c83556eeeda84bab508936e"
  },
  {
    "url": "features/osc/index.html",
    "revision": "697e52f291c01b311cc8f2022cbf7f2d"
  },
  {
    "url": "features/recording/index.html",
    "revision": "969c97c54e0484cef6d8d35a3b2fd321"
  },
  {
    "url": "features/server/index.html",
    "revision": "6f195f0fa7843de29b9daa9dc34f9ad1"
  },
  {
    "url": "features/vertex/index.html",
    "revision": "dd2a40671397d23cf2359b6893f8f41c"
  },
  {
    "url": "features/webcam/index.html",
    "revision": "b8c4609c14c359f548ee99fe6e22acc7"
  },
  {
    "url": "index.html",
    "revision": "5c66c3cb0231b768bf468ee17cf9fd62"
  },
  {
    "url": "install/index.html",
    "revision": "50ea467c03e36dd80c775622f076ea19"
  },
  {
    "url": "settings/index.html",
    "revision": "dabc37820a30868be5ac15731354d0e8"
  },
  {
    "url": "static/favicons/android-chrome-192x192.png",
    "revision": "5ee1aac3454871ebce909c149f7be7d1"
  },
  {
    "url": "static/favicons/android-chrome-256x256.png",
    "revision": "d7a126be0ffa982e6a064541b547b060"
  },
  {
    "url": "static/favicons/android-chrome-512x512.png",
    "revision": "d6cfc206fe4f4775ccb3b5dd65e41723"
  },
  {
    "url": "static/favicons/apple-touch-icon.png",
    "revision": "f938e747fa56516d7d3422af9536744a"
  },
  {
    "url": "static/favicons/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "static/favicons/favicon-16x16.png",
    "revision": "68d9c01519f8319e840a6f8e5f0d158a"
  },
  {
    "url": "static/favicons/favicon-32x32.png",
    "revision": "b8f4952242649173d62e338a15871621"
  },
  {
    "url": "static/favicons/favicon.ico",
    "revision": "a92456a94469947c73b90e29f783c240"
  },
  {
    "url": "static/favicons/manifest.json",
    "revision": "03113edc72b1e85e2b3205c0f3a4c905"
  },
  {
    "url": "static/favicons/mstile-150x150.png",
    "revision": "5d41fe5fb3103e98fd75f97aa6a00749"
  },
  {
    "url": "static/favicons/safari-pinned-tab.svg",
    "revision": "1b4482c6839f05f15ae3cb03fd0f1573"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.eot",
    "revision": "76b56857ebbae3a5a689f213feb11af0"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.svg",
    "revision": "27ef0b062b2e221df16f3bbd97c2dca8"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.ttf",
    "revision": "177cc92d2e8027712a8c1724abd272cd"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.woff",
    "revision": "521d17bc9f3526c690e8ada6eee55bec"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300.woff2",
    "revision": "60c866748ff15f5b347fdba64596b1b1"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.eot",
    "revision": "687596afb6f25cbf28e2ab036f2228cd"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.svg",
    "revision": "c0a3320c5a9694ba4e43a880e3de5cf2"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.ttf",
    "revision": "c03f38daf03bc9e1329c1d9215406a13"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.woff",
    "revision": "8a648ff38ded89ea15916e84529d62d3"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-300italic.woff2",
    "revision": "06bbd3188b34820cd83a0e0b3d0a6f57"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.eot",
    "revision": "7728dd9fbbce1c14cfbf8579d7a867a1"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.svg",
    "revision": "e16f375be3c2a73b58255a02f6d3a9ce"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.ttf",
    "revision": "c062d7d188586db3c4cf61e1ae43b331"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.woff",
    "revision": "1cd5320f8937d337b61d5117cf9d7b28"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-600.woff2",
    "revision": "223a277bd88d8a90c8cdf24cda0ad5f5"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.eot",
    "revision": "9dce7f01715340861bdb57318e2f3fdc"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.svg",
    "revision": "7aab4c13671282c90669eb6a10357e41"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.ttf",
    "revision": "c045b73d86803686f4cd1cc3f9ceba59"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.woff",
    "revision": "bf2d0783515b7d75c35bde69e01b3135"
  },
  {
    "url": "static/fonts/open-sans-v15-latin-regular.woff2",
    "revision": "cffb686d7d2f4682df8342bd4d276e09"
  },
  {
    "url": "static/images/1.jpg",
    "revision": "c1373099a0c82e47ce87bd7035c7cea5"
  },
  {
    "url": "static/images/1.jpg.org.jpg",
    "revision": "3268ad51b5d219803dc72793c198de27"
  },
  {
    "url": "static/images/2.jpg",
    "revision": "5dc7db372e3b4c1d733eed7efc1e09b4"
  },
  {
    "url": "static/images/3.jpg",
    "revision": "109c8d633a08a115f6dad7726d5c2fd7"
  },
  {
    "url": "static/images/font.png",
    "revision": "b0625a60927ded509fa13336c69482e2"
  },
  {
    "url": "static/images/hashtag.png",
    "revision": "adf75bfd9337f19d348a67a8d2e85085"
  },
  {
    "url": "static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "static/images/i_share.png",
    "revision": "c4047a5a8cb5178ec092916c211e864a"
  },
  {
    "url": "static/images/lgtm.gif",
    "revision": "0846c564649ce34b42857459e16e3644"
  },
  {
    "url": "static/images/logo_120h.png",
    "revision": "ebaa74d3948b7efbe74c638f45611bef"
  },
  {
    "url": "static/images/logo_3600h.png",
    "revision": "01bad4bc382fb8000dc48401adc947c5"
  },
  {
    "url": "static/images/logo_360h.png",
    "revision": "a8a721165e86ca95fd91d9475f68a23b"
  },
  {
    "url": "static/images/logo_720h.png",
    "revision": "f55a8c18a711d6d1c5fb171fd38ceb08"
  },
  {
    "url": "static/images/logo_header.png",
    "revision": "e0a0277218b700f57f12cc396d0dc3fa"
  },
  {
    "url": "static/images/osc.gif",
    "revision": "1f834656b94fe77352a7b8ef42df982c"
  },
  {
    "url": "static/images/rebuild.png",
    "revision": "82d11cb0740a592fca013c0c6117b7c4"
  },
  {
    "url": "static/images/recording_format.png",
    "revision": "4334142349b8854d936f79aa36d4af81"
  },
  {
    "url": "static/images/shield_dummy.png",
    "revision": "eb8270fbf11a4e10ecea90fc717a4f84"
  },
  {
    "url": "static/images/tweet.png",
    "revision": "6404fe6c4c6577074a88c26d0e3732bf"
  },
  {
    "url": "static/images/usage1.gif",
    "revision": "e3d50377df54e558a83ea943dada2e0c"
  },
  {
    "url": "static/images/usage2.gif",
    "revision": "d7f5c700bcc7c1fa293dcc2f9406392e"
  },
  {
    "url": "static/videos/1.mp4",
    "revision": "244b0479338bed339650526f156d5957"
  },
  {
    "url": "static/videos/1.mp4.org.mp4",
    "revision": "cf8821bd9c2c78fd7c3be3be6a8b2844"
  },
  {
    "url": "static/videos/veda.gif",
    "revision": "606ae455bf6a149ee68e3dd7b1e9020b"
  },
  {
    "url": "static/videos/veda.mp4",
    "revision": "040b0697759a55767d972612f9bf94c5"
  },
  {
    "url": "usage/index.html",
    "revision": "720ff97a4003157bbef864b49ff63b98"
  },
  {
    "url": "vedajs/index.html",
    "revision": "894f59b345c46c3b7fb28dfaae50e882"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.(jpg|png|gif|svg)/, workbox.strategies.cacheFirst(), 'GET');
