/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  let list = `🐱 Sazumi Bot Apis\n\n`;
  list += `• .katabucin-api *[ KATA BUCIN ]*\n`;
  list += `• .pantun-api *[ PANTUN ]*\n`;
  list += `• .chatgpt-api *[ CHATGPT ]*\n`;
  list += `• .bard-api *[ BARD ]*\n`;
  list += `• .tempmail-api *[ TEMPMAIL ]*\n`;
  list += `• .tempmail-msg-api *[ TEMPMAIL MSG ]*\n`;
  list += `• .uploader-api *[ UPLOADER ]*\n`;
  list += `• .ssweb-api *[ SSWEB ]*\n`;
  list += `• .gpt4-api *[ CHATGPT 4 ]*\n`;
  list += `• .youtube-api *[ YOUTUBE ]*\n`;
  list += `• .blackbox-api *[ BLACKBOX ]*`;
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  m.reply(list);
};

handler.help = ['api'];
handler.tags = ['info'];
handler.command = /^(api)$/i;

module.exports = handler;