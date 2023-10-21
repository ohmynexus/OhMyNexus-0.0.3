/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn }) => {
  let errorNumber = '6282177779477';
  let errorMessage = 'Terjadi error di bot:\n\n' + m.text;

  conn.sendMessage(errorNumber + '@s.whatsapp.net', errorMessage, MessageType.text);
};

handler.all = async (m, { isBlocked }) => {
  if (isBlocked) return;

  process.on('uncaughtException', async (err) => {
    let errorNumber = '6282177779477'; 
    let errorMessage = 'Terjadi error di bot:\n\n' + err.stack; 

    conn.sendMessage(errorNumber + '@s.whatsapp.net', errorMessage, MessageType.text);
  });
};

module.exports = handler;
