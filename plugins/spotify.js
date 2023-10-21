/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const { fnctions } = require('../lib/fnctions');

async function getSpotifySearch(query) {
  try {
    const apiKey = `${global.lolkey}`;
    const url = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${apiKey}&query=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return null;
  }
}

async function handler(m, { text, command }) {
  if (!await fnctions()) return;
  if (!text) {
    return m.reply(`*Example*: .${command} rewrite the star`);
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  try {
    const spotifyData = await getSpotifySearch(text);
    if (!spotifyData || spotifyData.status !== 200) {
      return m.reply('🐱 Erorr');
    }

    const { result } = spotifyData;
    if (result.length === 0) {
      return m.reply('🐱 No results found.');
    }

    const replyMessage = result.map((song, index) => {
      return `
${index + 1}. *${song.title}* - ${song.artists}
◦ *Link:* ${song.link}
◦ *Durasi:* ${song.duration} detik
◦ *Populeritas:* ${song.popularity}
◦ *Preview:* ${song.preview_url}
      `;
    }).join('\n');

    m.reply(`*THESE ARE YOUR SEARCH RESULTS*\n\n${replyMessage}\n\n${global.footer}`);
  } catch (error) {
    console.error('Error handling Spotify command:', error);
    m.reply('🐱 Erorr');
  }
}

handler.help = ['spotify /query'];
handler.tags = ['internet'];
handler.command = /^(spotify|spotifysearch)$/i;

handler.register = true;
handler.limit = false;

module.exports = handler;

