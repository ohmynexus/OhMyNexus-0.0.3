/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
	let aboutEN = `Sazumi is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by Sazumi Viki, this bot uses the original source of Botcahx that is constantly updated by Sazumi Viki to provide an easier and more enjoyable interactive experience.
  
With its broad ability to answer questions and provide solutions, Bot Sazumi can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. Bot Sazumi can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.
  
As a product developed and updated by Sazumi Viki, Bot Sazumi always receives the latest feature updates to provide better and more advanced services. With Bot Sazumi, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use Bot Sazumi now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
	  react: {
		text: '🕒',
		key: m.key,
	  }
	})
  
	let about = `${aboutEN}`
  
	m.reply(about);
}

handler.help = ['about']
handler.tags = ['info']
handler.command = /^(about|detile|aboutbot|tentang|detail)$/i
handler.register = true

module.exports = handler;
