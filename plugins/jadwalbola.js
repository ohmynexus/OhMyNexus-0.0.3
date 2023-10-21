/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const axios = require('axios');

let handler = async (m, { conn }) => {
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${global.lolkey}`);
    let data = response.data;
    let result = data.result;

    let caption = 'Jadwal Pertandingan Bola:\n\n';
    for (let i = 0; i < result.length; i++) {
      let match = result[i];
      caption += `•  *${match.time}*\n`;
      caption += `◦  Event: ${match.event}\n`;
      caption += `◦  Match: ${match.match}\n`;
      caption += `◦  TV: ${match.tv}\n\n`;
    }

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "Here are the results for the ball schedule you were looking for",
          thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230607_230227.jpg",
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.log(error);
    conn.reply(m.chat, '🐱 Sorry, there was an error loading the ball match schedule.', m);
  }
};

handler.help = ['jadwalbola'];
handler.tags = ['info'];
handler.command = /^jadwalbola$/i;

module.exports = handler;