/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const { sticker } = require('../lib/sticker');
const { fnctions } = require('../lib/fnctions');

let handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  
  if (!text) {
    throw 'Enter the emoji in the format *.emojimix 😭 + 🥳*';
  }
  
  let emojis = text.split('+').map(e => e.trim());
  if (emojis.length !== 2) {
    throw '*Example:* .emojimix 😭 + 🥳';
  }
  
  let emoji1 = encodeURIComponent(emojis[0]);
  let emoji2 = encodeURIComponent(emojis[1]);
  
  let apiURL = `https://api.lolhuman.xyz/api/emojimix/${emoji1}+${emoji2}?apikey=${global.lolkey}`;
  
  try {
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    
    let response = await fetch(apiURL);
    if (!response.ok) {
      throw '🐱 Upps Erorr';
    }
    
    let imageBuffer = await response.buffer();
    
    conn.sendImageAsSticker(m.chat, imageBuffer, m, { packname: '@moe.sazumiviki', author: 'sazumi-bot' });
  } catch (error) {
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['emojimix 😭 + 🥳'];
handler.tags = ['sticker'];
handler.command = /^emojimix$/i;

module.exports = handler;