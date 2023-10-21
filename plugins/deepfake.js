/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, text }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime.startsWith('image/')) {
    throw '🐱 Reply to an image with a caption .deepfake */styles*';
  }

  const startFetchTime = Date.now();

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  const media = await q.download();
  const imageUrl = await uploadImage(media);
  const styleId = `${text}`;

  // Jangan hapus bagian ini
  function _0x5b3e(_0x5ad4aa,_0x4ecc20){const _0x1fbe75=_0x494b();return _0x5b3e=function(_0x214c14,_0x2f4942){_0x214c14=_0x214c14-(0x1c82*-0x1+0xd0*0xa+0x15a3*0x1);let _0x44bb8a=_0x1fbe75[_0x214c14];return _0x44bb8a;},_0x5b3e(_0x5ad4aa,_0x4ecc20);}function _0x494b(){const _0xf90502=['11moSzES','11980476EBYmZa','180XlqlTs','1020FnbvKe','1JoBqaY','21371GLSKvy','2998640XZlLRd','4996768sZocsX','482354NYxgde','3YvfWuq','1763340PsTjQD','33138ccpGVz'];_0x494b=function(){return _0xf90502;};return _0x494b();}(function(_0x39c2ef,_0x231398){const _0x2d3cc7=_0x5b3e,_0x26ac70=_0x39c2ef();while(!![]){try{const _0x214910=-parseInt(_0x2d3cc7(0x143))/(0x9*-0x44d+0x491+-0x2225*-0x1)*(parseInt(_0x2d3cc7(0x147))/(0x1*0x198b+0x1162*-0x2+0x93b))+parseInt(_0x2d3cc7(0x148))/(0x6ef+-0xcfe+0x612*0x1)*(-parseInt(_0x2d3cc7(0x145))/(0xb*0x61+0x1*-0x152e+0x1107))+parseInt(_0x2d3cc7(0x149))/(-0x8a7+0x1f1a+0x1d*-0xc6)+-parseInt(_0x2d3cc7(0x142))/(-0x8*-0x2ab+-0xbdf+-0x973)*(parseInt(_0x2d3cc7(0x144))/(0x18d+-0xe26+0xca0))+parseInt(_0x2d3cc7(0x146))/(0xa3a+-0x2099+-0x25*-0x9b)+parseInt(_0x2d3cc7(0x14a))/(-0x1ff2+-0xc0+0x4ad*0x7)*(-parseInt(_0x2d3cc7(0x141))/(0xfcc*-0x1+-0x1393*-0x1+0x21*-0x1d))+-parseInt(_0x2d3cc7(0x14b))/(-0x1f*-0x3b+0x7*-0x2c7+0xc57)*(-parseInt(_0x2d3cc7(0x14c))/(-0x1b*-0x71+0x17ae+-0x238d*0x1));if(_0x214910===_0x231398)break;else _0x26ac70['push'](_0x26ac70['shift']());}catch(_0x557ef1){_0x26ac70['push'](_0x26ac70['shift']());}}}(_0x494b,0x1*0x9acf9+0x6d389*0x1+0x2c66*-0x3c));const apiData={'init_image':imageUrl,'style':styleId};

  try {
    const { data } = await axios.post(
      `https://api.itsrose.life/deep_fake/video?apikey=${global.rose}`,
      apiData
    );

    if (data.status && data.result.video.length > 0) {
      const videoUrl = data.result.video;
      const metadata = data.result.metadata;

      const fetchTime = Date.now() - startFetchTime;

      conn.sendFile(
        m.chat,
        videoUrl,
        'deepfake.mp4',
        `*🐱 Fetching:* ${fetchTime} ms`,
        m
      );
    } else {
      throw '🐱 Failed to generate Deep Fake video.';
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message === 'Style not found') {
      conn.reply(m.chat, 'Upps Style Not Found', m);
    } else {
      throw '🐱 Upps erorr, or the style was not found';
    }
  }
};

handler.help = ['deepfake'];
handler.tags = ['tools'];
handler.command = /^(deepfake)$/i;

module.exports = handler;
