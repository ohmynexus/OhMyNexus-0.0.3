/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .wiki anime', m)
  }
  let apikey = `${global.lolkey}`
  let query = encodeURIComponent(args.join(' '))
  let url = `https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`
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
  let message = `*${result}*`
  let response = await fetch('https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg')
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'wikipedia.jpg', message.trim(), m)
}

handler.help = ['wiki <teks>', 'wikipedia <teks>']
handler.tags = ['tools']
handler.command = /^(wiki|wikipedia)$/i
handler.register = true
handler.limit = true

module.exports = handler