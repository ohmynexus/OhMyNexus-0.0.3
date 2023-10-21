/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const { version } = require('../package.json');

let handler = async (m, { conn }) => {
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  m.reply(`*addykece version:* ${version}`);
};

handler.help = ['version'];
handler.tags = ['info'];
handler.command = /^(version)$/i;

module.exports = handler;

