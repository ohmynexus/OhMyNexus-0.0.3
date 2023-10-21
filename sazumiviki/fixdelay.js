/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/628873133561
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const delay = 500;

module.exports = {
  fixDelay: (conn, message) => {
    setTimeout(() => {
      conn.sendMessage(message.chat, message.content, message);
    }, delay);
  }
};
