/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const { tmpdir } = require('os');
const path = require('path');
const {
  readdirSync,
  statSync,
  unlinkSync,
  rmdirSync
} = require('fs');

let handler = async (m, { conn }) => {
  m.reply('🐱 Successfully cleared the TMP folder');

  const tmp = [tmpdir(), path.join(process.cwd(), 'tmp')];
  const filename = [];
  tmp.forEach((dirname) => {
    readdirSync(dirname).forEach((file) => {
      filename.push(path.join(dirname, file));
    });
  });
  
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isDirectory()) {
      readdirSync(file).forEach((subfile) => {
        const subfilePath = path.join(file, subfile);
        const subfileStats = statSync(subfilePath);
        if (subfileStats.isFile()) {
          unlinkSync(subfilePath);
        } else if (subfileStats.isDirectory()) {
          rmdirSync(subfilePath, { recursive: true });
        }
      });
      rmdirSync(file, { recursive: true });
    } else if (stats.isFile()) {
      unlinkSync(file);
    }
  });
};

handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^cleartmp$/i;
handler.owner = true;

module.exports = handler;