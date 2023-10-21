/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .roboguru 1+1', m)
  }
  let apikey = `${global.lolkey}`
  let query = encodeURIComponent(args.join(' '))
  let grade = 'sma'
  let subject = 'sejarah'
  let url = `https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${query}&grade=${grade}&subject=${subject}`
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
    return conn.reply(m.chat, 'Sorry, there was an error fetching data from the server', m)
  }
  let result = json.result
  if (result.length === 0) {
    return conn.reply(m.chat, 'Sorry, couldn t find an answer to that question', m)
  }
  let answer = result[0].answer
  let message = `*Pertanyaan:* ${result[0].question}\n\n*Jawaban:* ${answer}`
  conn.reply(m.chat, message, m)
}

handler.help = ['roboguru <teks>']
handler.tags = ['tools']
handler.command = /^(roboguru)$/i
handler.register = true
handler.limit = true

module.exports = handler