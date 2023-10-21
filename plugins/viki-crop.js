/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { createCanvas, loadImage } = require('canvas');

let handler = async (m, { conn, args }) => {
  let [width, height] = args.map(Number);

  if (isNaN(width) || isNaN(height)) {
    throw '*Example*: .crop 512 512';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let q = m.quoted ? m.quoted : m;
  if (!/image/.test((q.msg || q).mimetype)) {
    throw 'Please reply pictures with captions: .crop <height> <width>';
  }

  conn.chatRead(m.chat);
  conn.sendFile(m.chat, await cropImage(q, width, height), 'cropped.jpg', `*🐱 Convert results:* ${width}x${height}`, m);
};

handler.help = ['crop'];
handler.tags = ['tools'];
handler.command = /^(crop)$/i;

const cropImage = async (message, width, height) => {
  let img = await message.download();
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const image = await loadImage(img);
  ctx.drawImage(image, 0, 0, width, height, 0, 0, width, height);

  return canvas.toBuffer('image/jpeg');
};

module.exports = handler;
