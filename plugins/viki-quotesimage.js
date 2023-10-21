/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  if (m.text.toLowerCase() === '.quotesimage') {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let url = `https://api.lolhuman.xyz/api/random/quotesimage?apikey=${global.lolkey}`
    let response = await fetch(url)
    let imageBuffer = await response.buffer()
    conn.sendFile(m.chat, imageBuffer, 'quotesimage.jpg', '', m)
  }
}

handler.command = /^(quotesimage)$/i
handler.help = ['quotesimage']
handler.tags = ['internet']
handler.limit = true
handler.premium = false
handler.register = true

module.exports = handler