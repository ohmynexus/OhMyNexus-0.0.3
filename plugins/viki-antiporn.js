/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");
const uploadImage = require("../lib/uploadImage");

let handler = m => m
handler.before = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat];
  let mime = (m.msg || m).mimetype || "";
  if (chat.antiPorn) {
    if (/image|webp/.test(mime)) {
      conn.chatRead(m.chat);
      let img = await m.download();
      let imageUrl = await uploadImage(img);
      try {
        let api = `https://api.itsrose.life/image/nsfwCheck?url=${encodeURIComponent(imageUrl)}&apikey=${global.rose}`;
        let { data } = await axios.get(api);
        let status = data.status;
        if (status === true) {
          let result = data.result;
          if (result.is_nsfw === true) {
            let user = m.sender;
            let mention = `@${user.replace(/@.+/, "")}`;
            await conn.reply(m.chat, `🐱 *${mention}* Detected sending NSFW`, m);
            await conn.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: m.key.participant,
              },
            });
          }
        }
      } catch (e) {
        console.log(e);
        conn.reply(m.chat, "Error!", m);
      }
    }
  }
};

module.exports = handler;
