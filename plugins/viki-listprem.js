/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let {
	MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, {
	conn,
	text,
	usedPrefix
}) => {
	let response = "•  PREMIUM MEMBERSHIP\n\n";
	let totalPremium = 0;

	for (let user in global.db.data.users) {
		if (global.db.data.users[user].premium) {
			let number = user.split("@")[0];
			let name = global.db.data.users[user].name || "";
			let days = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (24 * 60 * 60 * 1000)));
			let hours = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 60 * 1000))) % 24;
			let minutes = Math.abs(Math.floor((global.db.data.users[user].premiumDate - new Date()) / (60 * 1000))) % 60;

			response += `◦  *${number}*\n•  ${name} | ${days} Hari ${hours} Jam ${minutes} Menit\n\n`;

			totalPremium++;
		}
	}

	response += `┌  ◦  Total Premium : *${totalPremium}*\n`;
	response += "└  ◦  Upgrade Premium: *.owner*";

	m.reply(response, m.from, {
		contextInfo: {
			mentionedJid: Object.keys(global.db.data.users).filter(jid => global.db.data.users[jid].premium)
		}
	});
}

handler.command = ['listprem']
handler.tags = ['owner']
handler.owner = true
module.exports = handler;