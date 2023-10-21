/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const axios = require('axios');
const { fnctions } = require("../lib/fnctions");

const handler = async (m, { text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .simi what is your favorite food';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🐤',
      key: m.key,
    }
  });
  const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=${global.lolkey}&text=${encodeURIComponent(text)}&badword=false`;

  try {
    const response = await axios.get(apiUrl);
    const { status, message, result } = response.data;

    if (status === 200 && message === 'success' && result) {
      m.reply(result);
    } else {
      throw '🐱 Upps Erorr';
    }
  } catch (error) {
    console.error(error);
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['simi'];
handler.tags = ['internet'];
handler.command = /^simi$/i;

module.exports = handler;
