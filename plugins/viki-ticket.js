/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!user) throw 'You are not registered in the database'
  
    let ticketCoins = user.tiketcoin || 0
    m.reply(`🎟️ Your Coin Ticket: *${ticketCoins}*`)
  }
  
  handler.help = ['ticket']
  handler.tags = ['game']
  handler.command = /^ticket$/i
  
  module.exports = handler  