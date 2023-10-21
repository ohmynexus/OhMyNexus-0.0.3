/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs');
const path = require('path');
const { fnctions } = require('../lib/fnctions.js');

let handler = async (m, { conn }) => {
  try {
    if (!await fnctions()) return;

    let sessionsFolderPath = './makemeow';
    let files = fs.readdirSync(sessionsFolderPath);
    let filesToKeep = ['creds.json'];
    let filesToDelete = files.filter(file => !filesToKeep.includes(file));

    if (filesToDelete.length === 0) {
      return m.reply('🐱 No sessions to clear.');
    }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
    for (let file of filesToDelete) {
      fs.unlinkSync(path.join(sessionsFolderPath, file));
    }
    let remainingFiles = fs.readdirSync(sessionsFolderPath);
    let remainingFileCount = remainingFiles.length;

    m.reply(`🐱 Sessions cleared successfully. ${remainingFileCount} files are kept.`);

  } catch (e) {
    m.reply(`Error: ${e}`);
  }
};

handler.help = ['clearsessions'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(clearsessions)$/i;

module.exports = handler;
