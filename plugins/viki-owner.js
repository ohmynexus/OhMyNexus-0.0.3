/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


var name = global.nameowner;
var numberowner = global.numberowner;
var gmail = global.mail;

const {
	default: makeWASocket,
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	downloadContentFromMessage,
	downloadHistory,
	proto,
	getMessage,
	generateWAMessageContent,
	prepareWAMessageMedia
} = require("@adiwajshing/baileys");

var handler = async (m, {
	conn
}) => {
	const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: ${name}
item.ORG: Developer
item1.TEL;waid=${numberowner}:${numberowner}@s.whatsapp.net
item1.X-ABLabel:Developer 
item2.EMAIL;type=INTERNET:${gmail}
item2.X-ABLabel:Email Owner
item3.ADR:;;🇮🇩 Indonesia;;;;
item3.X-ABADR:ac
item4.EMAIL;type=INTERNET:hi@sazumiviki.me
item4.X-ABLabel:Email Developer 
item3.ADR:;;🇨🇳 China;;;;
item3.X-ABADR:ac 
item5.URL:${instagram}
item5.X-ABLabel:Website
END:VCARD`;

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	let sentMsg = await conn.sendMessage(m.chat, {
		contacts: {
			displayName: 'CN',
			contacts: [{
				vcard
			}]
		}
	});

	setTimeout(() => {
		conn.deleteMessage(m.chat, sentMsg.key);
	}, 5000);
};

handler.command = handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.register = true;
handler.limit = true;
module.exports = handler;