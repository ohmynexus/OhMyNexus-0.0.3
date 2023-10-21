/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '*Example*: .audiosurah 1', m)
  }
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/quran/audio/${encodeURIComponent(text)}?apikey=${apikey}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  conn.sendFile(m.chat, url, 'audio.mp3', '', m, true)
}

handler.help = ['audiosurah']
handler.tags = ['islam']
handler.command = /^audiosurah$/i
handler.register = true
handler.limit = true

module.exports = handler