/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, args, usedPrefix }) => {
  let amount = args[0];
  if (!amount || isNaN(amount)) {
    throw `*Example*: ${usedPrefix}atm 10000`;
  }

  amount = parseInt(amount);
  if (amount <= 0) {
    throw '🐱 The balance number must be greater than 0';
  }

  let user = global.db.data.users[m.sender];
  if (amount > user.balance) {
    throw '🐱 Sorry, your balance is insufficient';
  }

  user.balance -= amount;
  user.atm += amount;
  m.reply(`🐱 Successfully saved *${amount}* balance to your ATM.`);
};

handler.help = ['atm'];
handler.tags = ['rpg'];
handler.command = /^(atm|atmplus)$/i

module.exports = handler;
