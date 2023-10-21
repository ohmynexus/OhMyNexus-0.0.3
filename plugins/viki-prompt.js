/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    let img = await q.download();
    let imageUrl = await uploadImage(img);

    try {
      let api = `https://api.itsrose.life/image/stable/prompter?url=${encodeURIComponent(imageUrl)}&apikey=${global.rose}`;
      let { data } = await axios.get(api);
      let prompt = data.result.prompt;

      m.reply(`*🐱 Prompt:* ${prompt}`);
    } catch (e) {
      console.log(e);
      m.reply('🐱 An error occurred while fetching the prompt');
    }
  } else {
    m.reply('🐱 Reply image with caption *.prompt*');
  }
};

handler.help = ['prompt'];
handler.tags = ['tools'];
handler.command = /^prompt$/i;

module.exports = handler;
