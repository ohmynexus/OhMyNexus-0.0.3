/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let result = json.result
  let caption = `*Asmaul Husna*\n`
  caption += `Index : ${result.index}\n`
  caption += `Latin : ${result.latin}\n`
  caption += `Arab  : ${result.ar}\n`
  caption += `ID    : ${result.id}\n`
  caption += `EN    : ${result.en}`
  let response = await fetch('https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg')
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'asmaulhusna.jpg', caption.trim(), m)
}

handler.help = ['asmaulhusna']
handler.tags = ['islam']
handler.command = /^asmaulhusna$/i
handler.register = true
handler.limit = true

module.exports = handler