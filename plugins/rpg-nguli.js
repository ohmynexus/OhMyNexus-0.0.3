let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastnguli > 86400000) {
    global.db.data.users[m.sender].limit += 10
    m.reply('Congratulations you got the +10 limit')
    global.db.data.users[m.sender].lastnguli = new Date * 1
  } else m.reply('You ve claimed your paycheck today')
}
handler.help = ['nguli']
handler.tags = ['rpg']
handler.command = /^(nguli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 0

module.exports = handler
