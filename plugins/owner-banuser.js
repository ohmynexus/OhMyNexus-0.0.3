let handler = async (m, { conn, text }) => {
    if (!text) throw '*Example*: .ban +6285236226786'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'The tag that Bot wants to ban'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `🐱 Successfully Banned User`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler