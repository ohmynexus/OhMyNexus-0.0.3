/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const { createWriteStream } = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const pipeline = promisify(require('stream').pipeline);

let handler = async (m, { conn, text }) => {
  if (!text) {
    m.reply('*Example*: .nulis i use ohmynexus - Bot');
    return;
  }

  try {
    const apiURL = `https://api.lolhuman.xyz/api/nulis?apikey=${global.lolkey}&text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiURL, { responseType: 'stream' });

    if (!response.headers['content-type'].startsWith('image/')) {
      m.reply('🐱 Failed to write, please try again.');
      return;
    }

    const filePath = join(__dirname, '../tmp', 'nulis.jpg');
    await pipeline(response.data, createWriteStream(filePath));

    conn.sendFile(m.chat, filePath, 'tulisan.jpg', `${global.footer}`, m);
  } catch (e) {
    console.log(e);
    m.reply('🐱 An error occurred while typing.');
  }
};

handler.help = ['nulis /query'];
handler.tags = ['tools'];
handler.command = /^nulis$/i;

module.exports = handler;
