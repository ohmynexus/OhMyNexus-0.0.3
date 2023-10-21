let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Example*: .say i use sazumi bot`
    conn.reply(m.chat, text, null)
}
handler.help = ['say <teks>']
handler.tags = ['tools']
handler.command = /^(say)$/i
handler.register = true
handler.limit = true

module.exports = handler