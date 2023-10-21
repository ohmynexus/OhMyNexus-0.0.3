/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs');
const archiver = require('archiver');
const { exec } = require('child_process');

const handler = async (m, { conn }) => {
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const foldersToExclude = [
    'node_modules',
    'tmp',
    'viki-audio',
    '.npm',
    '.cache'
  ];

  const timestamp = new Date().toISOString();
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    timeZone: 'Asia/Jakarta',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  const backupFileName = `nexus-bot-backup_${formattedDate}.zip`;

  const output = fs.createWriteStream(backupFileName);
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.on('warning', err => {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', err => {
    throw err;
  });

  archive.pipe(output);

  const processDir = (dir, parentDir = '') => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = parentDir ? `${parentDir}/${file}` : file;
      const fullFilePath = `${dir}/${file}`;
      if (fs.lstatSync(fullFilePath).isDirectory()) {
        if (!foldersToExclude.some(folder => filePath.startsWith(folder))) {
          processDir(fullFilePath, filePath);
        }
      } else {
        archive.file(fullFilePath, { name: filePath });
      }
    }
  };

  processDir('.');

  archive.finalize();

  output.on('close', () => {
    const stats = fs.statSync(backupFileName);
    const fileSize = `${(stats.size / (1024 * 1024)).toFixed(2)} MB`;

    const description = `Successfully backed up bot files\n\n` +
      `• *File Size :* ${fileSize}\n` +
      `• *Backup Date :* ${formattedDate}`;

    conn.sendFile(m.chat, backupFileName, backupFileName, description);
    fs.unlinkSync(backupFileName); 
  });
};

handler.help = ['backupme'];
handler.tags = ['owner'];
handler.rowner = true;
handler.command = /^backupme$/i;

module.exports = handler;
