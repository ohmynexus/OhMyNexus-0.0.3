/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender];
  let atmBalance = user.atm;
  let balance = user.balance;

  if (!text || isNaN(text)) {
    throw `*Example*: .atmmin 1000`;
  }

  let amount = parseInt(text);
  if (amount <= 0 || amount > atmBalance) {
    throw `🐱 The balance amount entered is invalid or exceeds your ATM balance.`;
  }

  user.atm -= amount;
  user.balance += amount;

  m.reply(`🐱 Managed to pull the balance

◦ Amount withdrawn: *${amount}*
◦ Fill Balance Now: *${user.balance}*`);
};

handler.help = ['atmmin'];
handler.tags = ['rpg'];
handler.command = /^(atmmin)$/i

module.exports = handler;