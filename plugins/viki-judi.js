/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let buatall = 1
let {
	MessageType
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	DevMode
}) => {
	conn.judi = conn.judi ? conn.judi : {}
	if (m.chat in conn.judi) return m.reply('Masih ada yang melakukan judi disini, tunggu sampai selesai!!')
	else conn.judi[m.chat] = true
	try {
		let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
		let randomkamu = `${Math.floor(Math.random() * 81)}`.trim()
		let Aku = (randomaku * 1)
		let Kamu = (randomkamu * 1)
		let count = args[0]
		count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
		count = Math.max(1, count)
		if (args.length < 1) return m.reply(usedPrefix + '*Example*: .judi 1000')
		if (global.db.data.users[m.sender].balance >= count * 1) {
			global.db.data.users[m.sender].balance -= count * 1
			conn.chatRead(m.chat)
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			})
			if (Aku > Kamu) {
				m.reply(`aku roll:${Aku}\nKamu roll: ${Kamu}\n\nkamu *Kalah*, kamu kehilangan ${count} balance`.trim())
			} else if (Aku < Kamu) {
				global.db.data.users[m.sender].balance += count * 2
				m.reply(`aku roll:${Aku}\nKamu roll: ${Kamu}\n\nkamu *Menang*, kamu Mendapatkan ${count * 2} balance`.trim())
			} else {
				global.db.data.users[m.sender].balance += count * 1
				m.reply(`aku roll:${Aku}\nKamu roll: ${Kamu}\n\nkamu *Seri*, kamu Mendapatkan ${count * 1} balance`.trim())
			}
		} else m.reply(`uang kamu tidak cukup untuk melakukan judi sebesar ${count} balance`.trim())
	} catch (e) {
		console.log(e)
		m.reply('Error!!')
		if (DevMode) {
			for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
				conn.sendMessage(jid, 'Judi.js error\nNo: *' + m.sender.split`@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
			}
		}
	} finally {
		delete conn.judi[m.chat]
	}
}

handler.help = ['judi <jumlah>']
handler.tags = ['rpg']
handler.command = /^(judi)$/i

handler.register = true
handler.limit = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}