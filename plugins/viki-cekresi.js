/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .cekresi xxxxxx', m)
  }
  let apikey = `${global.lolkey}`
  let resi = encodeURIComponent(args[0])
  let url = `https://api.lolhuman.xyz/api/checkresi?apikey=${apikey}&resi=${resi}`
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
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  let message = `• *No. Resi:* ${result.resi}\n`
  message += `• *Kurir:* ${result.courier.toUpperCase()}\n\n`
  if (result.origin.name || result.origin.address) {
    message += `• *Pengirim*\n`
    if (result.origin.name) message += `Nama: ${result.origin.name}\n`
    if (result.origin.address) message += `Alamat: ${result.origin.address}\n`
    message += '\n'
  }
  if (result.destination.name || result.destination.address) {
    message += `• *Penerima*\n`
    if (result.destination.name) message += `Nama: ${result.destination.name}\n`
    if (result.destination.address) message += `Alamat: ${result.destination.address}\n`
    message += '\n'
  }
  if (result.history.length === 0) {
    message += `• Tidak ditemukan riwayat pengiriman untuk nomor resi ini`
  } else {
    message += `• *Riwayat Pengiriman*\n`
    for (let history of result.history) {
      message += ` ${history.time} - ${history.note}\n`
    }
  }
  let response = await fetch('https://telegra.ph/file/f02511798bc638a249e5a.png')
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'cekresi.jpg', message.trim(), m)
}

handler.help = ['cekresi <teks>', 'resi <teks>']
handler.tags = ['tools']
handler.command = /^(cekresi|resi)$/i
handler.register = true
handler.limit = true

module.exports = handler

