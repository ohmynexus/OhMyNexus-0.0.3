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
    throw '*Example:* .lyric daylight';
  }

  const apiUrl = `https://api.lolhuman.xyz/api/lirik?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`;
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    const { data } = await axios.get(apiUrl);
    const { status, message, result } = data;
    
    if (status !== 200) {
      throw message;
    }
    
    m.reply(result);
  } catch (error) {
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['lirik', 'lyric'];
handler.tags = ['tools'];
handler.command = /^(lirik|lyric)$/i;

module.exports = handler;