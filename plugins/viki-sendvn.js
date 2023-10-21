/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  let audioFolder = './viki-audio'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return m.reply(`🐱 Audio by name ${text} not found.`)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let audioBuffer = fs.readFileSync(audioPath)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m)
}

handler.help = ['send']
handler.tags = ['fun']
handler.command = /^(send|sendvn)$/i;

module.exports = handler