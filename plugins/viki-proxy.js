/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let fetch = require('node-fetch')

let handler = async (m, { text }) => {
  let msg = text.trim()
  if (!msg) return m.reply('*Example*: .proxy ohmynesux.github.io')

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(`https://api.lolhuman.xyz/api/proxysite?apikey=${global.lolkey}&url=${encodeURIComponent(msg)}`)
  let json = await res.json()

  if (json.status == 200 && json.result) {
    m.reply(json.result)
  } else {
    m.reply('🐱 Failed to proxy on the given link.')
  }
}

handler.help = ['proxy <link>']
handler.tags = ['internet']
handler.command = /^proxy$/i

module.exports = handler