/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply("*Example*: .image alice");
    return;
  }

  try {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let api = `https://api.itsrose.life/searching/pinterest?query=${encodeURIComponent(
      text
    )}&apikey=${global.rose}`;
    let { data } = await axios.get(api);
    let status = data.status;

    if (status) {
      let images = data.result;
      let randomImage = images[Math.floor(Math.random() * images.length)];
      await conn.sendFile(m.chat, randomImage, "", text, m);
    } else {
      m.reply("🐱 No image results found.");
    }
  } catch (e) {
    console.log(e);
    m.reply("🐱 Error");
  }
};

handler.command = ["image"];
handler.tags = ["tools"];
handler.help = ["image"];

module.exports = handler;
