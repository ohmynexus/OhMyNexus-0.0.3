/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/



const api = require('api-dylux');

let handler = async (m, {
	conn,
	text
}) => {
	if (!text) {
		throw '*Example*: .ssweb https://ohmynexus.github.io';
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	try {
		let response = await api.ssweb(text);
		if (response.includes('Error: ')) {
			throw response;
		}
		conn.sendFile(m.chat, response, 'screenshot.jpg', '', m);
	} catch (error) {
		console.log(error);
		m.reply(`🐱 An error occurred while taking the screenshot: ${error}`);
	}
};

handler.help = ['ssweb'];
handler.tags = ['tools'];
handler.command = /^ssweb$/i;

module.exports = handler;