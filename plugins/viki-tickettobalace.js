/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, args }) => {
    let user = global.db.data.users[m.sender]
    if (!user) throw 'You are not registered in the database'
  
    if (!args[0] || !/^\d+$/.test(args[0])) {
      throw '*Example*: .ticketswap 1'
    }
  
    let ticketAmount = parseInt(args[0])
    let ticketCoins = user.tiketcoin || 0
    let exchangeRate = 1000
  
    if (ticketCoins < ticketAmount) {
      throw 'Your coin tickets are insufficient'
    }
  
    let balanceToAdd = ticketAmount * exchangeRate
    user.balance += balanceToAdd
    user.tiketcoin -= ticketAmount
  
    m.reply(`✅ You have swapped *${ticketAmount}* coin tickets become *${balanceToAdd}* balance`)
  }
  
  handler.help = ['ticketswap']
  handler.tags = ['game']
  handler.command = /^ticketswap/i
  
  module.exports = handler
  