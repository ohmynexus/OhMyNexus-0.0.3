/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let fetch = require('node-fetch')

let handler = async (m, { text }) => {

    if (!text) {
        return m.reply('*Example*: .kbbi sabar')
      }

  let res = await fetch(`https://api.lolhuman.xyz/api/kbbi?apikey=${global.lolkey}&query=${encodeURIComponent(text)}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.result) {
    let { nama, makna } = json.result[0]
    let text = `Kata: ${nama}\n\n`
    for (let i = 0; i < makna.length; i++) {
      let { submakna, contoh } = makna[i]
      text += `Makna ${i + 1}: ${submakna.join(', ')}\n`
      if (contoh && contoh.length) {
        text += `Contoh: ${contoh.join(', ')}\n\n`
      } else {
        text += '\n'
      }
    }
    let img = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg'
    await conn.sendFile(m.chat, img, 'kbbi.jpg', text, m, false, { thumbnail: Buffer.alloc(0) })
  } else throw json.message
}

handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
handler.register = true
handler.limit = true

module.exports = handler
