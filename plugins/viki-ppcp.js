/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');

let handler = async (m, { conn }) => {
  conn.chatRead(m.chat);
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let url = `https://api.lolhuman.xyz/api/random/ppcouple?apikey=${global.lolkey}`;
  
  try {
    let { data } = await axios.get(url);
    let maleUrl = data.result.male;
    let femaleUrl = data.result.female;
    
    await conn.sendFile(m.chat, maleUrl, '', '*🐱 Male*', m);
    await conn.sendFile(m.chat, femaleUrl, '', '*🐱 Female*', m);
  } catch (error) {
    console.log(error);
    conn.reply(m.chat, '🐱 Failed to fetch the images', m);
  }
};

handler.command = /^\ppcp$/i;
handler.help = ['ppcp'];
handler.tags = ['internet'];

module.exports = handler;
