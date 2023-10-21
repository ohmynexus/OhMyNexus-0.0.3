let handler = async(m, { conn, text }) => {
  if (!text) throw `No Prefix detected...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`Prefix telah ditukar ke *${text}*`)
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

module.exports = handler
