/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/


const axios = require('axios');
const { fnctions } = require("../lib/fnctions");

let handler = async (m, { text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .bard how to make a bot with nodejs';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const apiUrl = `https://api.sazumiviki.dev/api/bard?chat=${encodeURIComponent(text)}`;
  
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.status === 200) {
      const result = data.result;
      m.reply(result);
    } else {
      m.reply('🐱 Upps Erorr');
    }
  } catch (error) {
    console.error(error);
    m.reply('🐱 Upps Erorr');
  }
};

handler.help = ['bard'];
handler.tags = ['tools'];
handler.command = /^(bard)$/i;

module.exports = handler;