/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  let image = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/20230516_195311.jpg'
  let store = global.db.data.store || {}
  
  switch (command) {
    case 'store':
      let caption = ''
      for (let category in store) {
        caption += `• *${category.toUpperCase()}*\n`
        for (let list of store[category]) {
          caption += `  ◦ ${list}\n`
        }
        caption += '\n'
      }
      conn.sendFile(m.chat, image, 'store.jpg', caption, m)
      break
      
    case 'addcategory':
      if (!isOwner) return conn.reply(m.chat, 'Sorry, only the owner can use this command', m)
// Jangan hapus bagian ini
var _0x3e4999=_0x2aa1;(function(_0x3df53b,_0x1d888e){var _0xad0022=_0x2aa1,_0xfe4196=_0x3df53b();while(!![]){try{var _0x3b4351=-parseInt(_0xad0022(0x8a))/(0x236*-0x9+0x74b+0xc9c)*(parseInt(_0xad0022(0x89))/(-0x143*0x1+0x3*0x45c+0xbcf*-0x1))+-parseInt(_0xad0022(0x86))/(0x1*0x2593+-0x1*0x13ff+0x1*-0x1191)+-parseInt(_0xad0022(0x93))/(0xe*0x158+-0x2122*-0x1+-0x33ee)*(-parseInt(_0xad0022(0x91))/(0x1*-0x2627+0x3*0x9af+-0x91f*-0x1))+-parseInt(_0xad0022(0x8c))/(-0x18a*-0x18+0xba8*0x2+-0x1a*0x251)+parseInt(_0xad0022(0x8d))/(0x1*0x5ed+0x295*-0x5+-0x703*-0x1)*(parseInt(_0xad0022(0x8b))/(-0x19ca+0x6*-0x1d8+0x1271*0x2))+-parseInt(_0xad0022(0x94))/(-0x142*0xa+0x15*-0x182+0x5*0x8db)+parseInt(_0xad0022(0x87))/(-0x12e3*-0x1+0x3*0x565+-0x2308);if(_0x3b4351===_0x1d888e)break;else _0xfe4196['push'](_0xfe4196['shift']());}catch(_0x7de882){_0xfe4196['push'](_0xfe4196['shift']());}}}(_0x2893,-0x3b03*0x5+-0x1*-0xc267+-0x2c*-0xc73));if(!text)return conn[_0x3e4999(0x8e)](m[_0x3e4999(0x8f)],_0x3e4999(0x96)+usedPrefix+(_0x3e4999(0x95)+_0x3e4999(0x88)+_0x3e4999(0x92)),m);function _0x2aa1(_0x49b172,_0x2ebebf){var _0x1d9765=_0x2893();return _0x2aa1=function(_0x5352b3,_0x3abdf8){_0x5352b3=_0x5352b3-(0x95e+0x148a+-0x1d62);var _0x18aab0=_0x1d9765[_0x5352b3];return _0x18aab0;},_0x2aa1(_0x49b172,_0x2ebebf);}function _0x2893(){var _0x3d33da=['y\x20<categor','48376dzehJZ','1BmmdpG','7360FOkben','1318110yvidLA','1043ybQpuv','reply','chat','toLowerCas','886685MGAnrc','y\x20name>','4kwmqMW','608337YWvCyb','addcategor','Usage:\x20','948vihHXi','1118250edfqpB'];_0x2893=function(){return _0x3d33da;};return _0x2893();}store[text[_0x3e4999(0x90)+'e']()]=[];
      global.db.data.store = store
      conn.reply(m.chat, 'Category has been added successfully', m)
      break
      
    case 'rcategory':
      if (!isOwner) return conn.reply(m.chat, 'Sorry, only the owner can use this command', m)
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}rcategory <category name>`, m)
      if (!store[text.toLowerCase()]) return conn.reply(m.chat, 'Category not found', m)
      delete store[text.toLowerCase()]
      global.db.data.store = store
      conn.reply(m.chat, 'Category has been removed successfully', m)
      break
      
    case 'addlist':
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}addlist <list name> | <category name>`, m)
      let [list, category] = text.split("|").map(v => v.trim())
      if (!(category && list)) return conn.reply(m.chat, `Usage: ${usedPrefix}addlist <list name> | <category name>`, m)
      if (!store[category.toLowerCase()]) store[category.toLowerCase()] = []
      store[category.toLowerCase()].push(list)
      global.db.data.store = store
      conn.reply(m.chat, 'List has been added successfully', m)
      break
      
    case 'rlist':
      if (!text) return conn.reply(m.chat, `Usage: ${usedPrefix}rlist <list name>`, m)
      for (let category in store) {
        let index = store[category].findIndex(list => list.toLowerCase() === text.toLowerCase())
        if (index !== -1) {
          store[category].splice(index, 1)
          global.db.data.store = store
          conn.reply(m.chat, 'List has been removed successfully', m)
          return
        }
      }
      conn.reply(m.chat, 'List not found', m)
      break
  }
}

handler.help = ['store', 'addcategory <category name>', 'rcategory <category name>', 'addlist <list name> | <category name>', 'rlist <list name>']
handler.tags = ['store']

handler.command = /^(store|addcategory|rcategory|addlist|rlist)$/i
handler.owner = true

handler.admin = false
handler.mods = false
handler.premium = false
handler.group = false

module.exports = handler