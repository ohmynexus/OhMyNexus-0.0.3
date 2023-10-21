/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const axios = require('axios');

let handler = async (m, { conn, text, command }) => {
  if (!text) {
    throw `*Example*: ${command} https://www.instagram.com/p/ABC123/`;
  }

  let url = encodeURIComponent(text);
  let apiKey = `${global.rose}`;
  let apiUrl = `https://api.itsrose.life/downloader/ig?url=${url}&apikey=${apiKey}`;

  try {
    conn.chatRead(m.chat);
    let startTime = new Date();

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data.status === true) {
      let result = data.result[0];
      let caption = `🐱 *Fetching:* ${(new Date() - startTime) / 1000} seconds`;
      conn.sendFile(m.chat, result.url, '', caption, m);
    } else {
      throw '🐱 Failed to download content from Instagram.';
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while downloading content from Instagram.');
    m.reply(`Detail Error:\n\n${error.message}`);
  }
};

handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

module.exports = handler;