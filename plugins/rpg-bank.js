/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  let atmBalance = user.atm;

  m.reply(`🐱 *ATM Balance*\n\n◦ Your balance in the ATM: *${atmBalance}*`);
};

handler.help = ['bank'];
handler.tags = ['rpg'];
handler.command = /^bank$/i;

module.exports = handler;
