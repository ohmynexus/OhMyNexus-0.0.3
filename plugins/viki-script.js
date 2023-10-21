/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, usedPrefix }) => {
  let user = m.mentionedJid[0] || m.sender
  let name = conn.getName(user)
  let rulesUrl = 'https://github.com/SazumiVicky/sazumi-bot'

  let reply = `Hello @${user.split('@')[0]}!\nAre you looking for a *sazumi-bot* script?\nYou first need to read the rules here:\n*${rulesUrl}*`

  m.reply(reply, false, {
    contextInfo: {
      mentionedJid: [user]
    }
  })
}

handler.help = ['sc', 'script', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|script|sourcecode)$/i

module.exports = handler

