/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const uploadMedia = require('../lib/uploadImage');
const { fnctions } = require('../lib/fnctions');

const API_KEY = 'sk_eObmRx7NRZx3uqRC';

let handler = async (m) => {
  if (!await fnctions()) return;

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'No media found';

  let media = await q.download();
  let isTele = /image\/(png|jpe?g|gif)/.test(mime);

  let waitMessage = await m.reply('Wait a moment...');

  let link = await uploadMedia(media);

  let api = 'https://api.short.io/links';
  let data = {
    domain: 'link.sazumi.moe',
    originalURL: link,
    redirectType: 302
  };
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    },
    body: JSON.stringify(data)
  };
// Jangan hapus bagian ini
function _0x32fd(){const _0x2e408e=['3296316CUzmjj','12048okRcyI','4ZdkbEZ','597860ywIvEy','json','32InJOJB','1188582REKkix','9xeCKCD','54kIIaIQ','5729670vcvyXL','11077DNfqNb','1442455QJvfqw','472865YCNAsm','log'];_0x32fd=function(){return _0x2e408e;};return _0x32fd();}const _0x508bb6=_0x27c7;function _0x27c7(_0xb71eb2,_0x1894e0){const _0x5dce55=_0x32fd();return _0x27c7=function(_0x3d7734,_0x44a5b7){_0x3d7734=_0x3d7734-(-0x1*0x10b2+-0x1185+-0xd*-0x2b5);let _0x4485ae=_0x5dce55[_0x3d7734];return _0x4485ae;},_0x27c7(_0xb71eb2,_0x1894e0);}(function(_0xf43afb,_0x276f23){const _0x11166f=_0x27c7,_0x346d9a=_0xf43afb();while(!![]){try{const _0x4779ff=parseInt(_0x11166f(0xfe))/(-0x217d+0xba+0x20c4)+parseInt(_0x11166f(0x101))/(0xdbc+-0x1829+-0x1*-0xa6f)+parseInt(_0x11166f(0xfb))/(0x1933+0x130+0x34c*-0x8)*(parseInt(_0x11166f(0xfd))/(0x151c+-0xede*0x2+-0x229*-0x4))+parseInt(_0x11166f(0x107))/(0x1*0x295+0x13*0xfb+-0x43d*0x5)*(-parseInt(_0x11166f(0x103))/(-0x101*0x1d+-0x1*-0x22d+0x1af6))+-parseInt(_0x11166f(0x106))/(0x2219+-0x1a9a+-0xef*0x8)*(-parseInt(_0x11166f(0x100))/(-0x712+-0x1ba3+0x22bd*0x1))+-parseInt(_0x11166f(0x102))/(-0x3*-0xcbb+0x5e7+-0x2c0f)*(parseInt(_0x11166f(0x104))/(-0x174e+-0x3bc*0x4+-0x992*-0x4))+parseInt(_0x11166f(0x105))/(-0x33*0xc0+0x857+0x27f*0xc)*(-parseInt(_0x11166f(0xfc))/(-0x1db0+-0x96c+0x2728));if(_0x4779ff===_0x276f23)break;else _0x346d9a['push'](_0x346d9a['shift']());}catch(_0xd108e1){_0x346d9a['push'](_0x346d9a['shift']());}}}(_0x32fd,0x1*-0x40339+-0x1*0x6a16e+-0x47*-0x4bca));let response=await fetch(api,options),result=await response[_0x508bb6(0xff)]();console[_0x508bb6(0xfa)](result);

  if (result.secureShortURL) {
    let shortLink = result.secureShortURL;
    await m.reply(`${shortLink}
*${media.length}* Byte(s)
${isTele ? '(🐱 7 Days Left)' : '(Not known)'}`);
  } else {
    throw `Failed to shorten URL. Response: ${JSON.stringify(result)}`;
  }

  if (waitMessage) {
    await waitMessage.delete();
  }
};

handler.help = ['tourl'];
handler.tags = ['tools'];
handler.command = /^(upload|tourl)$/i;

module.exports = handler;