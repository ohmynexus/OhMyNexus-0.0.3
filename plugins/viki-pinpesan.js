/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const handler = async (m, { conn, command }) => {
	try {
		await conn.chatModify({ pin: command.includes('un') ? false : true }, m.chat)
		m.reply(`🐱 Chat successfully *${command.includes('un') ? 'unpin' : 'pin'}.*`)
	} catch (e) {
		console.log(e)
		m.reply()🐱 Erorr'
	}
}

handler.help = ['pinchat','unpinchat']
handler.tags = ['owner']
handler.command = /^((un)?pin(chats?))$/i
handler.rowner = true

module.exports = handler