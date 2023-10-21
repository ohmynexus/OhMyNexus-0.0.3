/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '*Example*: .growiki addy', m)
  }
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/growiki?apikey=${apikey}&query=${encodeURIComponent(text)}`
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  let message = `Name: ${result.name}\n\nDescription: ${result.desc}\n\nProperties: ${result.prop}\n\nRarity: ${result.rarity}\n\nRecipe: ${result.recipe}\n\nSplice: ${result.splice}\n\nInfo: ${result.info}`
  conn.sendFile(m.chat, result.img, 'image.png', message, m)
}

handler.help = ['growiki <nama_item>']
handler.tags = ['game']
handler.command = /^growiki$/i
handler.register = true
handler.limit = true

module.exports = handler