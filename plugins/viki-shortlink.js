/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const fetch = require('node-fetch');

const API_KEY = 'sk_eObmRx7NRZx3uqRC';
const SHORT_DOMAIN = 'link.sazumi.moe';

let handler = async (m, { text }) => {
  let link = text.trim();

  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    throw '*Example*: https://sazumi.moe (use http:// or https://)';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let api = 'https://api.short.io/links';
  let data = {
    domain: SHORT_DOMAIN,
    originalURL: link,
    redirectType: 302
  };
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    },
    body: JSON.stringify(data)
  };

  try {
    let response = await fetch(api, options);
    let result = await response.json();

    if (result.secureShortURL) {
      let shortLink = result.secureShortURL;
      await m.reply(`*🐱 Result:* ${shortLink}`);
    } else {
      throw '🐱 Upps Failed';
    }
  } catch (error) {
    console.error(error);
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['shortlink'];
handler.tags = ['tools'];
handler.register = true;
handler.command = /^(shortlink|short)$/i;

module.exports = handler;