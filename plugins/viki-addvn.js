/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let ffmpeg = require('fluent-ffmpeg')
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let vn = m.quoted && m.quoted.mimetype.startsWith('audio') ? await m.quoted.download() : m.msg.audioData
  if (!vn) return m.reply('🐱 Reply audio with caption .addvn <name>')

  let name = text.trim()
  if (!name) return m.reply('🐱 Please enter a file name')

  let ext = path.extname(name)
  let namabaru = name.replace(ext, '') + '.opus'

  let filepath = path.join(__dirname, '../viki-audio/', namabaru)
  if (fs.existsSync(filepath)) {
    return m.reply(`🐱 The file name *${namabaru}* already exists. Please use another file name.`)
  }
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let bufs = []
  let cmd = spawn('ffmpeg', [
    '-i', '-',
    '-f', 'opus',
    '-ar', '48000',
    '-ac', '2',
    '-vbr', 'on',
    '-application', 'voip',
    '-compression_level', '10',
    '-frame_duration', '20',
    '-packet_loss', '5',
    'pipe:1'
  ])
  cmd.stderr.on('data', console.error)
  cmd.stdout.on('data', chunk => bufs.push(chunk))
  cmd.on('exit', async code => {
    if (code !== 0) return m.reply(`🐱 Failed to convert *${name}* to .opus`)

    let buffer = Buffer.concat(bufs)
    await fs.promises.writeFile(filepath, buffer)

    m.reply(`🐱 Successfully saved *${namabaru}*`)
  })
  cmd.stdin.write(vn)
  cmd.stdin.end()
}
handler.help = ['addvn']
handler.tags = ['tools']
handler.premium = false
handler.command = /^addvn$/i
handler.limit = true
handler.group = false
handler.register = true
handler.botAdmin = false

module.exports = handler