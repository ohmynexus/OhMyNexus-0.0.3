/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn }) => {
  const fs = require('fs')
  const path = require('path')
  const databaseFile = path.join(__dirname, '../database.json')

  if (!fs.existsSync(databaseFile)) {
    throw 'Maaf, file database tidak ditemukan'
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  conn.sendFile(m.chat, databaseFile, 'database.json', '', m).then((message) => {
    let size = fs.statSync(databaseFile).size
    let owner = conn.user.name
    let name = message.file_name
    let from = m.sender.name

    conn.reply(m.chat, ` Berikut adalah detail file database yang telah dikirim:

◦ Name  : database.json
◦ From  : sazumi-bot
◦ Size  : ${size} bytes
◦ Owner : Sazumi Viki`, message)
  })
}

handler.command = /^(getdb|getdatabase)$/i
handler.help = ['getdb', 'getdatabase']
handler.tags = ['owner']
handler.limit = true
handler.owner = true
handler.register = true

module.exports = handler