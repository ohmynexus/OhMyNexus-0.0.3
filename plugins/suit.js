let handler = async (m, {
	text,
	usedPrefix
}) => {
	let salah = `• *Pilihan Yang Tersedia*

◦ Gunting
◦ Kertas
◦ Bantu

• *Example:* .suit batu`
	if (!text) throw salah
	var astro = Math.random()

	if (astro < 0.34) {
		astro = 'batu'
	} else if (astro > 0.34 && astro < 0.67) {
		astro = 'gunting'
	} else {
		astro = 'kertas'
	}

	if (text == astro) {
		m.reply(`• Hasilnya Seri

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*`)
	} else if (text == 'batu') {
		if (astro == 'gunting') {
			global.db.data.users[m.sender].balance += 1000
			m.reply(`• Kamu Menang

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*
◦ Bonus : *+1000 Balance*`)
		} else {
			m.reply(`• Kamu Kalah

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*`)
		}
	} else if (text == 'gunting') {
		if (astro == 'kertas') {
			global.db.data.users[m.sender].balance += 1000
			m.reply(`• Kamu Menang

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*
◦ Bonus : *+1000 Balance*`)
		} else {
			m.reply(`• Kamu Kalah

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*`)
		}
	} else if (text == 'kertas') {
		if (astro == 'batu') {
			global.db.data.users[m.sender].balance += 1000
			m.reply(`• Kamu Menang

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*
◦ Bonus : *+1000 Balance*`)
		} else {
			m.reply(`• Kamu Kalah

◦ Kamu : *${text}*
◦ Sazumi : *${astro}*`)
		}
	} else {
		throw salah
	}
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i

module.exports = handler