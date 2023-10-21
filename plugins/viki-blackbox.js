/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Code by: Skyline
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const { fnctions } = require("../lib/fnctions");

const handler = async (m, { text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example:* .blackbox how to get a girlfriend';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  try {
    const apiUrl = `https://api.sazumi.moe/api/blackbox?text=${encodeURIComponent(text)}`;
    const { data } = await axios.get(apiUrl);

    if (data.status === 200 && data.result) {
      m.reply(data.result);
    } else {
      throw '🐱 Upps no response';
    }
  } catch (error) {
    console.error(error);
    m.reply(error);
  }
};

handler.help = ['blackbox'];
handler.tags = ['tools'];
handler.command = /^(blackbox|bx)$/i;

module.exports = handler;