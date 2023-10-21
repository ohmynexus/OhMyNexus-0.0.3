/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let res = await fetch(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${global.lolkey}`)
    let json = await res.json()
    if (json.status === 200) {
      let { positif, meninggal, sembuh, dirawat } = json.result
      let caption = `🇮🇩 Kasus COVID-19 di Indonesia\n\n😷 Terkonfirmasi: ${positif}\n😊 Sembuh: ${sembuh}\n💀 Meninggal: ${meninggal}\n🏥 Dirawat: ${dirawat}`
      conn.reply(m.chat, caption, m)
    } else {
      conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    }
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['coronalokal']
handler.tags = ['internet']
handler.command = /^coronalokal$/i
handler.register = true
handler.limit = true

module.exports = handler