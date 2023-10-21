let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
• *@${m.sender.split`@`[0]}* is now *AFK*
◦ *Reason*: ${text ? text : 'None'}
  `)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler