/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example*: .+balance @user, 100';

  let user = m.mentionedJid[0] || m.sender.split`@`[0]; 
  let amount = parseInt(text.split(' ')[1]);

  if (isNaN(amount) || amount < 1) throw 'Invalid amount. Please specify a positive number.';

  let targetUser = global.db.data.users[user];
  if (!targetUser) throw 'User not found in the database.';

  targetUser.balance = (targetUser.balance || 0) + amount;
  global.db.data.users[user] = targetUser;

  let targetDisplayName = m.mentionedJid.length > 0 ? '@' + m.mentionedJid[0].split('@')[0] : '@' + user;
  m.reply(`Successfully added ${amount} to the balance of ${targetDisplayName}`);
};
handler.help = ['+balance @user'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(\+|\.+)balance$/i;

module.exports = handler;