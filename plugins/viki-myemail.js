/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');

const handler = async (m, { text }) => {
  if (!text) {
    throw '*Example*: .myemail addykece@xxxx.com';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const apiKey = `${global.rose}`;
  const apiUrl = `https://api.itsrose.life/tools/tempMail/messages?email=${encodeURIComponent(text)}&apikey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const { status, message, mails } = response.data;

    if (status) {
      if (mails.length === 0) {
        m.reply('🐱 There are no messages in the Email');
        return;
      }

      let messageText = '🐱 *MESSAGE IN EMAIL:*\n\n';

// Jangan hapus bagian ini
const _0x2393f0=_0x2802;(function(_0x5be237,_0x2ebbd2){const _0x47819c=_0x2802,_0x33fb12=_0x5be237();while(!![]){try{const _0x166fd8=-parseInt(_0x47819c(0x189))/(-0x1214+-0xc7*0x11+-0x4*-0x7d3)+-parseInt(_0x47819c(0x190))/(-0xea3+0x1*0xf9e+-0xf9)*(-parseInt(_0x47819c(0x18b))/(0x1243+0x1e0f+0x53*-0x95))+-parseInt(_0x47819c(0x197))/(0x2d9*-0xa+0xafa+0x8c2*0x2)+parseInt(_0x47819c(0x192))/(0x33*-0x1b+-0x429*-0x6+0x272*-0x8)+parseInt(_0x47819c(0x18f))/(0x1*-0x1949+0x3*0xa0b+-0x4d2)+parseInt(_0x47819c(0x191))/(0xa0e+0x305*0xa+-0x2839)*(parseInt(_0x47819c(0x188))/(0x179d+-0x5*0x667+-0x437*-0x2))+-parseInt(_0x47819c(0x194))/(0x23d9+-0x10e2+-0x12ee);if(_0x166fd8===_0x2ebbd2)break;else _0x33fb12['push'](_0x33fb12['shift']());}catch(_0x3b3c6b){_0x33fb12['push'](_0x33fb12['shift']());}}}(_0x527a,0xe59*0x18+0x1dfbb+-0x1693a));function _0x2802(_0x33eaed,_0x1a4b25){const _0x4b4ceb=_0x527a();return _0x2802=function(_0xb11c0e,_0x496e25){_0xb11c0e=_0xb11c0e-(-0x3*-0x1dd+0xd86+-0x1195);let _0x1f7f2a=_0x4b4ceb[_0xb11c0e];return _0x1f7f2a;},_0x2802(_0x33eaed,_0x1a4b25);}for(const email of mails){messageText+=_0x2393f0(0x18d)+email['id']+'\x0a',messageText+=_0x2393f0(0x196)+email[_0x2393f0(0x195)]+'\x0a',messageText+=_0x2393f0(0x18a)+email[_0x2393f0(0x18c)]+'\x0a',messageText+=_0x2393f0(0x193)+'*\x20'+email[_0x2393f0(0x18e)]+'\x0a\x0a';}function _0x527a(){const _0x390d81=['subject','*ID:*\x20','body_text','824010vdAsAg','2LIIGcC','35OsVyzp','1075900wnwojD','*MESSAGES:','2138715CVHvft','from','*FROM:*\x20','702512TArTXU','362344XpxJZi','139331gcWYNe','*SUBJEK:*\x20','276309DsoJVs'];_0x527a=function(){return _0x390d81;};return _0x527a();}

      m.reply(messageText);
    } else {
      throw `🐱 It looks like something went wrong`;
    }
  } catch (error) {
    throw `🐱 It looks like something went wrong`;
  }
};

handler.help = ['myemail /email'];
handler.tags = ['tools'];
handler.command = /^myemail$/i;

module.exports = handler;
