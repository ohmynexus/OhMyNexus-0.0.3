const JavaScriptObfuscator = require('javascript-obfuscator')

let handler = async (m, { conn, text }) => {
if (!text) throw `*Example*: .encrypt console.log`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
let res = JavaScriptObfuscator.obfuscate(text)
conn.reply(m.chat, res.getObfuscatedCode(), m)
}
handler.help = ['encrypt']
handler.tags = ['tools']
handler.command = /^enc(rypt)?$/i
handler.register = true
handler.limit = true

module.exports = handler