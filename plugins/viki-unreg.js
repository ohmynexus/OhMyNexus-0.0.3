/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const { createHash } = require('crypto')

let handler = async function(m, { args }) {
  if (!args[0]) throw '*Example*: .unreg 90259a21exxxxxx'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Incorrect serial number'

  user.registered = false
  m.reply(`🐱 Unreg worked! You have been unregistered.`)
}

handler.help = [''].map(v => 'unreg' + v + ' <SERIAL NUMBER>')
handler.tags = ['start']
handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler
