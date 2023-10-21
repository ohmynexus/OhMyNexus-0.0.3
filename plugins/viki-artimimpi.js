/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");

let handler = async (m, { args }) => {
  if (!args[0]) {
    return m.reply("*Example*: .artimimpi dikejar kucing");
  }
    
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let query = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=${global.lolkey}&query=${encodeURIComponent(query)}`;

  try {
    let response = await axios.get(apiurl);
    let results = response.data.result;
    if (results.length === 0) {
      return m.reply("🐱 Upss Not Found.");
    }
    let resultText = results.join("\n");
    m.reply(resultText);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['artimimpi /query'];
handler.tags = ['primbon'];
handler.command = /^artimimpi$/i;

module.exports = handler;
