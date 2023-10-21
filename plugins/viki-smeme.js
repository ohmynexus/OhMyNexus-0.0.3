const uploadImage = require('../lib/uploadImage')
const { fnctions } = require('../lib/fnctions');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!await fnctions()) return;
  let [atas, bawah] = text.split`|`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply image, *Example:* Top Text|Bottom Text`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak didukung!`
  let img = await q.download()
  let url = await uploadImage(img)
  let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
  conn.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })
}

handler.help = ['stickermeme <teks>|<teks>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i
handler.limit = false

module.exports = handler
