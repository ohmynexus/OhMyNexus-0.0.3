/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");

let handler = async (m, { text }) => {
  if (!text) {
    return m.reply("*Example*: .jodoh nama1 nama2");
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let names = text.split(" ");
  if (names.length !== 2) {
    return m.reply("Upps, Erorr. Example: .jodoh nama1 nama2");
  }

  let nama1 = names[0];
  let nama2 = names[1];
  let apiurl = `https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${global.lolkey}`;

  try {
    let response = await axios.get(apiurl);
    let result = response.data.result;
    let image = result.image;
    let positif = result.positif;
    let negatif = result.negatif;
    let deskripsi = result.deskripsi;
    let replyMsg = `Kecocokan jodoh antara ${nama1} dan ${nama2}:\n\nPositif: ${positif}\n\nNegatif: ${negatif}\n\nDeskripsi: ${deskripsi}`;
    m.reply(replyMsg);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['jodoh /nama1 nama2'];
handler.tags = ['primbon'];
handler.command = /^jodoh$/i;

module.exports = handler;