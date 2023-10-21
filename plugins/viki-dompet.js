/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, args }) => {
  let target = m.mentionedJid[0] || m.sender
  let user = global.db.data.users[target]
  let name = user.name

  let limit = user.limit
  let balance = user.balance
  let premium = user.premium ? 'Yes' : 'No'
  let atm = user.atm

  let username = target === m.sender ? `@${m.sender.split`@`[0]}` : `@${target.split`@`[0]}`

  let caption = `*🐱 W A L L E T - I N F O*

◦ *User :* ${username}
◦ *Limit :* ${limit}
◦ *Balance :* ${balance}
◦ *Premium :* ${premium}
◦ *Atm Balance :* ${atm}`

  m.reply(caption, null, {
    contextInfo: {
      mentionedJid: [target]
    }
  })
}

handler.help = ['balance', 'balance @user']
handler.tags = ['info']
handler.owner = false
handler.command = /^(balance|dompet)$/i

module.exports = handler
