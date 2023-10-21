const axios = require('axios')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned ) {
        const commands = ['ai', 'menu', 'allmenu'] 
        const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase())
        if(isCommand) return
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
  let url = `https://api.itsrose.life/others/simi?message=${encodeURIComponent(m.text)}&level=8&lc=id&call_name=frieren&apikey=${global.rose}`
  try {
    let res = await axios.get(url)
    let simiText = res.data.result.simi.original
    m.reply(simiText)
  } catch (err) {
    console.log(err)
  }
        return !0
    }
    return true
}
module.exports = handler