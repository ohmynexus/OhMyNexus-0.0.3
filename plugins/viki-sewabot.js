/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  conn.chatRead(m.chat)
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
  let message = `🐱 *Rent OhMyNexus - Bot*\n\nTo rent OhMyNexus - Bot, you can see the price list for OhMyNexus - Bot rental period in your group.\n\n◦ 10 Day - *10k*\n◦ 20 Day - *20k*\n◦ 30 Day - *30k*\n◦ 50 Day - *45K*`;
  m.reply(message);
};

handler.help = ['sewa', 'sewabot'];
handler.tags = ['info'];
handler.command = /^(sewa|sewabot)$/i;

module.exports = handler;