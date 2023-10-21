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
    return m.reply("*Example* .tebakgender addy");
  }

  let name = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/tebakgender?apikey=${global.lolkey}&name=${encodeURIComponent(name)}`;
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    let nameResult = result.name;
    let genderResult = result.gender;
    let replyMsg = `Nama ${nameResult}, gender: ${genderResult}`;
    m.reply(replyMsg);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['tebakgender'];
handler.tags = ['primbon'];
handler.command = /^tebakgender$/i;

module.exports = handler;
