const axios = require('axios');

let handler = async (m, { conn }) => {
  let api = `https://api.lolhuman.xyz/api/quotes/dilan?apikey=${global.lolkey}`;

  conn.chatRead(m.chat);

  try {
    let response = await axios.get(api);
    let quote = response.data.result;

    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    m.reply(quote);
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan!');
  }
}

handler.help = ['dilan'];
handler.tags = ['internet'];
handler.command = /^dilan$/i;

module.exports = handler;
