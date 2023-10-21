/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, 'Masukan kode kak, contoh: .carbon print("ADDY")', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${encodeURIComponent(text)}&language=python`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'carbon.jpg', '', m)
}

handler.help = ['carbon <kode>']
handler.tags = ['maker']
handler.command = /^carbon$/i
handler.limit = true

module.exports = handler