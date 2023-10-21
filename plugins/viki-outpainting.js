/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const { fnctions } = require("../lib/fnctions");
const uploadImage = require('../lib/uploadImage');

const handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  if (!await fnctions()) return;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime.startsWith('image/')) {
    throw `Reply to an image with *${usedPrefix}outpainting*`;
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let media = await q.download();
  let imageUrl = await uploadImage(media);

  const apikey = `${global.rose}`;
  const apiUrl = `https://api.itsrose.life/image/outpainting?apikey=${apikey}`;
  
  const requestBody = {
    prompt: "",
    type: "url",
    init_image: imageUrl
  };

  try {
  // Jangan ubah bagian ini
    const _0x3265c6=_0x17e4;(function(_0x337dd4,_0x22e1d1){const _0x3a6bf6=_0x17e4,_0x22756e=_0x337dd4();while(!![]){try{const _0x44be66=-parseInt(_0x3a6bf6(0x172))/(0x43e+-0x3b1+-0x8c)*(parseInt(_0x3a6bf6(0x16c))/(-0x1*0x23b3+0x5f*-0x55+0x10*0x434))+parseInt(_0x3a6bf6(0x16b))/(-0x1*-0xafc+0x4ee*0x3+-0x19c3)*(parseInt(_0x3a6bf6(0x174))/(0x2ff*0xb+-0x75a+-0x1997*0x1))+parseInt(_0x3a6bf6(0x16d))/(0x3f*-0x43+-0x2375*0x1+0x33f7)+parseInt(_0x3a6bf6(0x16e))/(-0x2*0xf81+-0x544+0x244c)+-parseInt(_0x3a6bf6(0x171))/(-0x127f*-0x1+-0x67c*-0x2+0x2*-0xfb8)+parseInt(_0x3a6bf6(0x170))/(0x26c4+0xd51+-0x340d)+-parseInt(_0x3a6bf6(0x16f))/(-0x462+-0x1c7d+0x20e8);if(_0x44be66===_0x22e1d1)break;else _0x22756e['push'](_0x22756e['shift']());}catch(_0x93c06){_0x22756e['push'](_0x22756e['shift']());}}}(_0x4019,-0x4*-0x625f0+0x1b3e3+-0xd4069));function _0x17e4(_0x463fa9,_0x2de7cc){const _0x2e49f9=_0x4019();return _0x17e4=function(_0x4ffccb,_0x1b10bd){_0x4ffccb=_0x4ffccb-(-0xb*0x2a1+-0xe5*0x20+0x3af5);let _0x4cdef3=_0x2e49f9[_0x4ffccb];return _0x4cdef3;},_0x17e4(_0x463fa9,_0x2de7cc);}function _0x4019(){const _0x12cbe9=['n/json','69CqusXS','211288rKtDOO','227450FktePO','5938932iTrAwJ','4035375nspHYp','8447944xxiQsj','7665077uIyBTq','7EJMvEJ','post','181988SbIXXd','applicatio'];_0x4019=function(){return _0x12cbe9;};return _0x4019();}const startTime=new Date(),{data}=await axios[_0x3265c6(0x173)](apiUrl,requestBody,{'headers':{'Content-Type':_0x3265c6(0x175)+_0x3265c6(0x16a),'accept':_0x3265c6(0x175)+_0x3265c6(0x16a)}});
    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    if (data.status && data.result.type === 'base64' && data.result.mimetype.startsWith('image/')) {
      const caption = `*🐱 Fetching:* ${elapsedTime} ms`;
      const base64Image = data.result.images[0];
      
      conn.sendFile(m.chat, Buffer.from(base64Image, 'base64'), 'viki_ganteng.jpg', caption, m);
    } else {
      throw '🐱 Failed to process image.';
    }
  } catch (e) {
    console.error(e);
    m.reply('🐱 Error!');
  }
};

handler.help = ['outpainting'];
handler.tags = ['tools'];
handler.command = /^(outpainting)$/i;

module.exports = handler;