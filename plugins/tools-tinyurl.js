let axios = require('axios')

let fetch = require('node-fetch')

let handler = async (m, { text, conn:fur, args }) => {
  if (!text) throw '*Example*: tinyurl https://sazumiviki.me'
    
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

fur.reply(m.chat, await shortlink(text), m)
 
}

handler.help = ['tinyurl'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^tinyurl$/i
handler.register = true
handler.limit = true

module.exports = handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}
