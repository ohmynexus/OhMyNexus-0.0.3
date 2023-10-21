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
    return m.reply("*Example*: .artinama addy");
  }
    
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    
  let name = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/artinama?apikey=${global.lolkey}&nama=${encodeURIComponent(name)}`;

  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    m.reply(result);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['artinama /query'];
handler.tags = ['primbon'];
handler.command = /^artinama$/i;

module.exports = handler;
