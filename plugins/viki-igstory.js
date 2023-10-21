/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const { igstory } = require('api-dylux');
const axios = require('axios');
const FormData = require('form-data');
const { MessageType } = require('@adiwajshing/baileys');
const { fnctions } = require("../lib/fnctions");

const handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .igstory addykece_';
  }
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
// Jangan hapus bagian ini
function _0x28ea(){const _0x472b90=['25960TDRTjI','length','57fYTkaw','37754OCcZUu','16902820RplxKF','🐱\x20Story\x20no','972BqYVXy','6573KzZwZe','3695070YjRBfY','t\x20found','trim','results','845739oRpOkh','520rCHbae','16130Uyvsci','1072VBlTrX'];_0x28ea=function(){return _0x472b90;};return _0x28ea();}const _0x32dc2f=_0x23c8;function _0x23c8(_0xfb4fc5,_0x173c75){const _0x11cbd3=_0x28ea();return _0x23c8=function(_0xba90c0,_0x236c60){_0xba90c0=_0xba90c0-(0x2578+0x1be6+-0x40e3);let _0x3c3304=_0x11cbd3[_0xba90c0];return _0x3c3304;},_0x23c8(_0xfb4fc5,_0x173c75);}(function(_0xc435a0,_0x5aa67d){const _0x445ae3=_0x23c8,_0x4a259c=_0xc435a0();while(!![]){try{const _0x42f711=-parseInt(_0x445ae3(0x84))/(-0x26*0xf+-0x15c7+0x7*0x36e)+-parseInt(_0x445ae3(0x7b))/(0x1031+-0x2*0x1138+-0x1241*-0x1)*(parseInt(_0x445ae3(0x8a))/(-0x12a7*0x1+-0x5d1*-0x1+0xd*0xfd))+-parseInt(_0x445ae3(0x85))/(0x590+-0x1479*-0x1+-0x1*0x1a05)*(-parseInt(_0x445ae3(0x88))/(0x14b1*0x1+0x20*-0xb3+-0x2*-0xda))+-parseInt(_0x445ae3(0x80))/(-0x17c2+-0x16ec+0x2eb4)+-parseInt(_0x445ae3(0x7f))/(0x20d6+0x100a+0x29*-0x131)*(parseInt(_0x445ae3(0x87))/(-0xafa+0x13b0+-0x65*0x16))+parseInt(_0x445ae3(0x7e))/(0x7ff+0x5*-0x7c2+0x1ed4)*(parseInt(_0x445ae3(0x86))/(0x1775*0x1+-0x2192+0xa27))+parseInt(_0x445ae3(0x7c))/(-0x1d0e+-0x2237+0x3f50*0x1);if(_0x42f711===_0x5aa67d)break;else _0x4a259c['push'](_0x4a259c['shift']());}catch(_0x2f364c){_0x4a259c['push'](_0x4a259c['shift']());}}}(_0x28ea,0x83902+0xa7603*0x1+-0x2*0x5fcb3));const username=text[_0x32dc2f(0x82)](),result=await igstory(username);if(!result||!result[_0x32dc2f(0x83)]||result[_0x32dc2f(0x83)][_0x32dc2f(0x89)]===-0x2101+-0x1360+0x3461)throw _0x32dc2f(0x7d)+_0x32dc2f(0x81);

  const story = result.results[0];
  const caption = `*◦ From:* ${result.username}\n*◦ Via CDN:* [Link CDN]`;

  if (story.type === 'image' || story.type === 'video') {
    const response = await axios.get(story.url, { responseType: 'arraybuffer' });
    const mediaBuffer = Buffer.from(response.data, 'binary');

    const form = new FormData();
    form.append('file', mediaBuffer, {
      filename: `igstory.${story.type === 'image' ? 'jpg' : 'mp4'}`,
      contentType: `image/${story.type === 'image' ? 'jpeg' : 'mp4'}`,
    });

    const uploadResponse = await axios.post('https://cdn.sazumi.moe/upload', form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    const uploadedURL = uploadResponse.data;

    conn.sendFile(m.chat, mediaBuffer, `igstory.${story.type === 'image' ? 'jpg' : 'mp4'}`, caption.replace('[Link CDN]', uploadedURL), m);
  } else {
    throw 'The media on the account is not recognized';
  }
};

handler.help = ['igstory'];
handler.tags = ['downloader'];
handler.register = true;
handler.command = /^(igstory)$/i;

module.exports = handler;