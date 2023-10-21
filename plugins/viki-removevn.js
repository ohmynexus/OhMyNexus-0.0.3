/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs')

let handler = async (m, { conn, args }) => {
  let name = args[0]
  if (!name) throw '*Example*: .removevn tes'
  let filename = name.endsWith('.opus') ? name : name + '.opus'
  let path = './viki-audio/' + filename
  if (!fs.existsSync(path)) throw `🐱 Audio/Voice note with name *${filename}* not found!`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  fs.unlinkSync(path)

  m.reply(`🐱 Audio/Voice note with name *${filename}* has been successfully deleted`)
}

handler.help = ['removevn']
handler.tags = ['premium']
handler.premium = true

handler.command = /^(removevn|rvn)$/i;
handler.limit = true

module.exports = handler