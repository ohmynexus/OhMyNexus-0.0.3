let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw '*Example*: .addmod @user'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.mods.includes(who.split`@`[0])) throw 'Already moderator'
    global.mods.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. You are already a Moderator`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addmod']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)mod$/i
handler.rowner = true
module.exports = handler