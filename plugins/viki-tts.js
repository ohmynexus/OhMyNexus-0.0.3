/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
const { fnctions } = require('../lib/fnctions')

const defaultLang = 'id'
let handler = async (m, { conn, args }) => {
  if (!await fnctions()) return
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  if (!args[0]) {
    m.reply('*Example:* .tts hello, I\'m using addykece')
    return
  }

  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text

  let res
  try {
    res = await tts(text, lang)
  } catch (e) {
    m.reply(e + '')
    res = await tts(text)
  } finally {
    conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
}

handler.help = ['tts <teks>']
handler.tags = ['tools']
handler.command = /^tts$/i
handler.register = true
handler.limit = true
module.exports = handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) {
      reject(e)
    }
  })
}