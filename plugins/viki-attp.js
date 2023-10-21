let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '*Example*: .attp addykece'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let query = encodeURIComponent(args.join(' '))
  let res = await fetch(`https://api.lolhuman.xyz/api/attp?apikey=${global.lolkey}&text=${query}`)
  let buffer = await res.buffer()

  conn.sendFile(m.chat, buffer, 'sticker.webp', '', m)
}

handler.help = ['attp <teks>']
handler.tags = ['tools']
handler.command = /^attp$/i
handler.register = true
handler.limit = true

module.exports = handler