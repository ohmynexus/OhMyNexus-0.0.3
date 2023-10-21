/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .brainly indonesia', m)
  }
  let apikey = `${global.lolkey}`
  let query = encodeURIComponent(args.join(' '))
  let url = `https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  if (result.length === 0) {
    return conn.reply(m.chat, 'Maaf, tidak dapat menemukan jawaban untuk pertanyaan tersebut', m)
  }
  let answer = result[0].answer.content
  let message = `*Pertanyaan:* ${result[0].question.content}\n\n*Jawaban:* ${answer}`
  let response = await fetch('https://telegra.ph/file/f02511798bc638a249e5a.png')
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'brainly.jpg', message.trim(), m)
}

handler.help = ['brainly <teks>']
handler.tags = ['tools']
handler.command = /^(brainly)$/i
handler.register = true
handler.limit = true

module.exports = handler