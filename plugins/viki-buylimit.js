/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, args }) => {
  if (!args[0] || isNaN(args[0])) {
    throw '*Example*:.buylimit 10';
  }

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let count = parseInt(args[0]);
  let price = count * 30000;
  let users = global.db.data.users;
  let user = users[m.sender];
  if (price > user.balance) {
    throw `Your balance is not enough to buy ${count} limits. The price for 1 limit is 30000 balances.`;
  }
  user.balance -= price;
  user.limit += count;
  m.reply(`Successful purchase ${count} price limits ${price} balance.`);
};

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = false;

module.exports = handler;
