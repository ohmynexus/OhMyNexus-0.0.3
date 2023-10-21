/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');

let handler = async (m, { text }) => {
  if (!text) {
    const voiceOptions = [
      "elon_musk",
      "steve_jobs",
      "joe_rogan",
      "taylor_swift",
      "selena_gomez",
      "meryl_streep",
      "jennifer_lawrence",
      "morgan_freeman",
      "jordan_peterson",
      "snoop_dogg",
      "rachel",
      "joe_biden",
      "donald_trump",
      "barack_obama",
      "domi",
      "bella",
      "antoni"
    ];

    const voiceList = voiceOptions.map((voice) => `◦ ${voice}`).join('\n');

    await m.reply(`*List of Available Voice IDs:*\n\n${voiceList}\n\n🐱 Enter the Voice ID\n*Example:* .voice bella im use addy ganteng`);
    return;
  }

  const [voiceId, ...message] = text.split(' ');

  if (!voiceId || !message.length) throw 'Enter the correct format. *Example:* .voice bella i use sazumi bot';

  const voiceOptions = [
    "elon_musk",
    "steve_jobs",
    "joe_rogan",
    "taylor_swift",
    "selena_gomez",
    "meryl_streep",
    "jennifer_lawrence",
    "morgan_freeman",
    "jordan_peterson",
    "snoop_dogg",
    "rachel",
    "joe_biden",
    "donald_trump",
    "barack_obama",
    "domi",
    "bella",
    "antoni"
  ];

// Jangan hapus bagian ini
function _0x19fb(_0x4fef4a,_0x18b59d){var _0x1d1bf7=_0x26f7();return _0x19fb=function(_0x551fea,_0x5d1d57){_0x551fea=_0x551fea-(0x11cd+0x1253+-0x2395);var _0x2dfc63=_0x1d1bf7[_0x551fea];return _0x2dfc63;},_0x19fb(_0x4fef4a,_0x18b59d);}var _0x5c605e=_0x19fb;(function(_0x1bcfba,_0x1995f4){var _0x588575=_0x19fb,_0x20477b=_0x1bcfba();while(!![]){try{var _0x204000=-parseInt(_0x588575(0x96))/(-0x11ca+-0x127d+0x2448)+parseInt(_0x588575(0x98))/(0x4*-0x2b+0x799+-0x7*0xfd)*(-parseInt(_0x588575(0x8b))/(0x4b8+-0x7*0xb1+0x22))+-parseInt(_0x588575(0x8e))/(0x127f+-0x68f*-0x5+0x2*-0x19a3)+-parseInt(_0x588575(0x95))/(0x104c+-0x3a3+-0xca4)+parseInt(_0x588575(0x8f))/(0x5*0x593+-0x1124+-0x1*0xab5)*(-parseInt(_0x588575(0x97))/(-0x1ab+-0x1e0d+-0x12d*-0x1b))+-parseInt(_0x588575(0x93))/(-0x1*-0x7cf+-0x1f5*-0x13+0x2cf6*-0x1)+-parseInt(_0x588575(0x90))/(0x22a5+-0x277*-0x9+0x81d*-0x7)*(-parseInt(_0x588575(0x8c))/(-0x178+-0x2410+-0x3*-0xc86));if(_0x204000===_0x1995f4)break;else _0x20477b['push'](_0x20477b['shift']());}catch(_0xe48f8){_0x20477b['push'](_0x20477b['shift']());}}}(_0x26f7,0x8bf4a+-0x39a3d+-0xa1ca));function _0x26f7(){var _0x516078=['294174dPAjXw','7LjpiXn','15956owzOKs','Invalid\x20Vo','180tPfigO','1600hjHpHQ','ice\x20ID.\x20Ch','907676tixqGS','774234jJCceZ','125802SfrAgV','oose\x20from:','join','2656024JYTEYz','includes','2399590voGxbP'];_0x26f7=function(){return _0x516078;};return _0x26f7();}if(!voiceOptions[_0x5c605e(0x94)](voiceId))throw _0x5c605e(0x99)+_0x5c605e(0x8d)+_0x5c605e(0x91)+'\x20'+voiceOptions[_0x5c605e(0x92)](',\x20');

  const apiKey = `${global.rose}`;
  const apiUrl = `https://api.itsrose.life/tools/tts?text=${encodeURIComponent(message.join(' '))}&voice_id=${voiceId}&apikey=${apiKey}`;

  try {
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

    const { data } = await axios.get(apiUrl, {
      responseType: 'arraybuffer'
    });

    await conn.sendFile(m.chat, Buffer.from(data), 'audio.mp3', '', m);
  } catch (error) {
    const errorMessage = `🐱 Upps Erorr: ${error.message}`;
    throw errorMessage;
  }
};

handler.help = ['voice [voice_id] <teks>'];
handler.tags = ['tools'];
handler.command = /^voice$/i;

module.exports = handler;
