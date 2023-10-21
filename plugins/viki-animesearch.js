/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let axios = require('axios')

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, '*Example*: .anime naruto', m)
    return
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/anime?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
    let result = response.data.result
    let message = `
*Judul*: ${result.title.romaji}
*Judul Alternatif*: ${result.title.english || '-'}
*Durasi*: ${result.duration} menit
*Episode*: ${result.episodes}
*Status*: ${result.status}
*Tanggal Rilis*: ${result.startDate.year}-${result.startDate.month}-${result.startDate.day}
*Genre*: ${result.genres.join(', ')}
*Skor*: ${result.averageScore}
*Sinopsis*: ${result.description.replace(/<br><br>/g, '\n')}`.trim()
    conn.sendFile(m.chat, result.coverImage.large, 'anime.jpg', message, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['anime']
handler.tags = ['info']
handler.command = /^anime$/i

module.exports = handler