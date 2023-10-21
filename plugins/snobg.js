/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const { fromBuffer } = require('file-type');
const FormData = require('form-data');
const { MessageType } = require('@adiwajshing/baileys');

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

    const { ext } = await fromBuffer(img);
    let form = new FormData();
    form.append('image', img, { filename: 'sticker.' + ext });

    let imgurResponse = await fetch('https://api.imgur.com/3/upload', {
      method: 'POST',
      body: form,
      headers: {
        Authorization: `Bearer 5f98ee8de4fa3c5`,
      },
    });
    
    let imgurResult = await imgurResponse.json();
    if (imgurResult.success) {
      let imageUrl = imgurResult.data.link;

      let removeBgResponse = await fetch(`https://api.lolhuman.xyz/api/removebg?apikey=${global.lolkey}&img=${encodeURIComponent(imageUrl)}`);
      let stickerBuffer = await removeBgResponse.buffer();
      
      conn.sendImageAsSticker(m.chat, stickerBuffer, m, { packname: '@moe.sazumiviki', author: 'sazumi-bot' });
    } else {
      m.reply('🐱 Upps Erorr');
    }
  } else {
    m.reply('🐱 Please reply pictures with captions *.snobg*');
  }
};

handler.help = ['snobg'];
handler.tags = ['sticker'];
handler.command = /^snobg$/i;

module.exports = handler;
