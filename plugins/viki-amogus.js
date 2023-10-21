/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Example*: .amongus addykece'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/amongus?apikey=${global.lolkey}&text=${response[0]}`
  conn.sendFile(m.chat, res, 'amongus.jpg', `Nih kak`, m, false)
}
handler.help = ['amongus'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(amongus)$/i
handler.register = true
handler.limit = true

module.exports = handler