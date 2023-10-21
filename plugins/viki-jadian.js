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
    return m.reply("*Example*: .jadian 20/12/2020");
  }

  let date = args[0];
  let apiurl = `https://api.lolhuman.xyz/api/jadian/${date}?apikey=${global.lolkey}`;
    
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
    let karakteristik = result.karakteristik;
    let deskripsi = result.deskripsi;
    let replyMsg = `Karakteristik hubungan jadian pada tanggal ${date}: ${karakteristik}\n\nDeskripsi: ${deskripsi}`;
    m.reply(replyMsg);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['jadian dd/mm/yyyy'];
handler.tags = ['primbon'];
handler.command = /^jadian$/i;

module.exports = handler;
