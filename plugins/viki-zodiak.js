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
    return m.reply("*Example:* .zodiak leo");
  }

  let zodiak = args[0].toLowerCase();
  let apiurl = `https://api.lolhuman.xyz/api/zodiak/${zodiak}?apikey=${global.lolkey}`;
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
    let zodiakName = result.split('\n')[0];
    let tanggal = result.match(/\((.*?)\)/)[1];
    let ramalan = result.split('\n').slice(10).join('\n');
    let replyMsg = `Ramalan zodiak ${zodiakName} pada tanggal ${tanggal}:\n\n${ramalan}`;
    m.reply(replyMsg);
  } catch (error) {
    console.log(error);
    m.reply("🐱 Erorr");
  }
};

handler.help = ['zodiak'];
handler.tags = ['primbon'];
handler.command = /^zodiak$/i;

module.exports = handler;
