/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let fs = require('fs');

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('*Example*: .df plugins/viki.js');
  let path = require('path');
  let filePath = path.join(process.cwd(), text);
  if (!fs.existsSync(filePath)) {
    return m.reply('Sorry, the file or folder in question was not found.');
  }
  
  m.reply('*executing..*');
  
  if (fs.statSync(filePath).isDirectory()) {
    fs.rmdirSync(filePath, { recursive: true });
  } else {
    fs.unlinkSync(filePath);
  }
  
  m.reply(`🐱 Successful delete ${text}`);
};

handler.help = ['df'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(df|deletefile)$/i;

module.exports = handler;
