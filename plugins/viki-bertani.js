/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let lastbertani = user.lastbertani || 0
  let cd = 3600000 - (Date.now() - lastbertani)
  let timers = clockString(cd)

  if (cd > 0) {
    m.reply(`Wait another *${timers}* before you can farm again`)
  } else {
    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    })
    m.reply('You are preparing a field for planting rice.')
    setTimeout(() => {
      m.reply('Now you are plowing the field.')
      setTimeout(() => {
        m.reply('Now you have planted rice.')
        setTimeout(() => {
          let balance = Math.floor(Math.random() * 26000) + 24000
          let exp = Math.floor(Math.random() * 1700) + 300
          let limit = Math.floor(Math.random() * 15) + 5
          let result = `
• *P A Y D A Y*

◦ Balance *${balance}*
◦ Exp *${exp}*
◦ Limit *${limit}*
`
          m.reply(result)
          user.balance += balance
          user.exp += exp
          user.limit += limit
          user.lastbertani = new Date() * 1
        }, 3000)
      }, 3000)
    }, 3000)
  }
}

handler.command = /^(bertani)$/i
handler.help = ['bertani']
handler.tags = ['rpg']
handler.register = true
handler.limit = true

module.exports = handler


function clockString(ms) {
  let h = isNaN(ms) ? '00' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '00' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '00' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}