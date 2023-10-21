const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let fetch = require("node-fetch")
const { fnctions } = require('../lib/fnctions');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!await fnctions()) return;
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('🐱 10 seconds max')
  try {
    let img = await q.download()

    if (!img) throw `Reply image, *Example*: .wm`
    conn.sendImageAsSticker(m.chat, img, m, { packname: text, author: '' })
  } catch { throw '🐱 Failed!, Reply Image/video with caption *.wm*' }
}

handler.help = ['wm', 'watermark']
handler.tags = ['sticker']
handler.command = /^wm|watermark?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
