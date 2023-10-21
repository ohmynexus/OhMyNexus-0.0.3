/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');
const { fnctions } = require('../lib/fnctions');

const handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;

  if (text && !m.quoted) {
    throw 'Please reply image';
  } else if (!text) {
    const stylesList = [
      "┌ ◦ anime",
      "│ ◦ pixar",
      "│ ◦ jojo",
      "│ ◦ retro",
      "│ ◦ spirited",
      "│ ◦ cyberpunk",
      "│ ◦ synthwave",
      "│ ◦ horror",
      "│ ◦ zombie",
      "│ ◦ rdr",
      "│ ◦ pixel",
      "│ ◦ thunderstruck",
      "│ ◦ onepiece",
      "│ ◦ onfire",
      "│ ◦ gtav",
      "│ ◦ aether",
      "│ ◦ impasto",
      "│ ◦ barbie",
      "│ ◦ airbender",
      "│ ◦ block",
      "└ ◦ heroes"
    ].join('\n');
    
    throw `*🐱 L I S T - S T Y L E S*\n\n${stylesList}\n\n*Example:* .turnme anime`;
  }

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const apikey = `${global.rose}`;
  const apiUrl = `https://api.itsrose.life/image/turnMe?apikey=${apikey}`;

  const styles = [
    "anime",
    "pixar",
    "jojo",
    "retro",
    "spirited",
    "cyberpunk",
    "synthwave",
    "horror",
    "zombie",
    "rdr",
    "pixel",
    "thunderstruck",
    "onepiece",
    "onfire",
    "gtav",
    "aether",
    "impasto",
    "barbie",
    "airbender",
    "block",
    "heroes"
  ];

  const style = text.toLowerCase();

// Jangan hapus bagian ini
function _0x5f0a(_0x3b46d2,_0x2dff0c){var _0x3e6a82=_0x16ef();return _0x5f0a=function(_0x644c79,_0x432af3){_0x644c79=_0x644c79-(-0x114d+-0x57*0x67+0x361b);var _0x333469=_0x3e6a82[_0x644c79];return _0x333469;},_0x5f0a(_0x3b46d2,_0x2dff0c);}var _0xabb5be=_0x5f0a;(function(_0x5128b3,_0x4128d0){var _0x2b4376=_0x5f0a,_0x4b9dd8=_0x5128b3();while(!![]){try{var _0x5da252=parseInt(_0x2b4376(0x1d1))/(-0x264+-0xf3+0x358)+parseInt(_0x2b4376(0x1d4))/(0x1fbc+0x1*-0x22cb+-0x9d*-0x5)+parseInt(_0x2b4376(0x1cf))/(-0x1ac9+-0x20af*0x1+-0x3b7b*-0x1)*(parseInt(_0x2b4376(0x1da))/(-0x1488+-0x3d*-0x7c+-0x900))+-parseInt(_0x2b4376(0x1d7))/(0x2639+0x17*0x15a+0xb5*-0x62)+parseInt(_0x2b4376(0x1db))/(-0x5*-0x53d+-0xff2+-0xa39)*(-parseInt(_0x2b4376(0x1ce))/(0x19*0x14e+-0x437+-0x1c60))+-parseInt(_0x2b4376(0x1d6))/(-0x14f+0x2699+-0x2542)+-parseInt(_0x2b4376(0x1d8))/(-0xd*-0x25+-0x22b2+-0x5*-0x692)*(-parseInt(_0x2b4376(0x1d0))/(0xa*-0xe5+0xba0+-0x2a4));if(_0x5da252===_0x4128d0)break;else _0x4b9dd8['push'](_0x4b9dd8['shift']());}catch(_0x3c26fd){_0x4b9dd8['push'](_0x4b9dd8['shift']());}}}(_0x16ef,-0x98d4a+0x75*0x1f96+-0x403cf*-0x1));function _0x16ef(){var _0x4fedc2=['exist.\x20Ava','Style\x20not\x20','42umPjXT','3yRSwEe','10RamIiy','833327ONUfpo','les:\x0a','ilable\x20sty','673216bCfIHN','join','2391472AhiKfR','4036790bOAexw','12237822dLNHtn','includes','1000232ETYnLq','1090272zbSwtQ'];_0x16ef=function(){return _0x4fedc2;};return _0x16ef();}if(!styles[_0xabb5be(0x1d9)](style))throw _0xabb5be(0x1cd)+_0xabb5be(0x1dc)+_0xabb5be(0x1d3)+_0xabb5be(0x1d2)+styles[_0xabb5be(0x1d5)](',\x20');

  const imageUrl = await uploadImage((m.quoted ? await m.quoted.download() : await conn.downloadAndSaveMedia(m)), 'turnme', 'image');

  const body = {
    "init_image": imageUrl,
    "style": style,
    "image_num": 1,
    "width": 648,
    "height": 864
  };

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  const start = Date.now();
  try {
    const { data } = await axios.post(apiUrl, body, { headers });
    const totalMs = Date.now() - start;

    const { status, result, message } = data;

    if (!status) {
      throw `🐱 Failed to process image. ${message}`;
    } else {
      const { images } = result;
      for (const image of images) {
        await conn.sendFile(m.chat, image, 'turnme.jpg', `*🐱 Fetching:* ${totalMs}ms`, m);
      }
    }
  } catch (error) {
    throw `🐱 Failed to process image. ${error.response.data.message}`;
  }
};

handler.help = ['turnme /styles'];
handler.tags = ['tools'];
handler.command = /^turnme$/i;

module.exports = handler;
