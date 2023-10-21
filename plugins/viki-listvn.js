/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs')

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let files = fs.readdirSync('./viki-audio')
  if (!files.length) {
    m.reply('🐱 There are no audio/voice notes stored')
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = '🐱 *Audio/Voice List Note:*\n\n' + vnList
  m.reply(caption)
}

handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^listvn$/i

module.exports = handler