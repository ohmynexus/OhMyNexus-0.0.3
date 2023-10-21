const fs = require('fs')

let handler = async (m, { conn, command, usedPrefix }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/image/.test(mime)) {
  let media = await q.download()
  m.reply(stiker_wait)
  let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((q.msg || q).seconds > 11) return m.reply('Maximum 10 seconds.')
  let media = await q.download()
  m.reply(stiker_wait)
  let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Send Images/Videos With Captions ${usedPrefix + command}\nVideo Duration 1-9 Seconds`
  }
    }
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(stiker|sgif|s|sticker)$/i
handler.register = true;
handler.limit = 10
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}