/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn }) => {
  let uptime = process.uptime();
  let hari = Math.floor(uptime / 86400);
  uptime %= 86400;
  let jam = Math.floor(uptime / 3600);
  uptime %= 3600;
  let menit = Math.floor(uptime / 60);
  let detik = Math.floor(uptime % 60);
  let caption = `🐱 Sazumi has been active for a long time *${hari} day, ${jam} hours, ${menit} minutes, ${detik} second*`;

  m.reply(caption);
};

handler.help = ['runtime'];
handler.tags = ['info'];
handler.command = /^runtime$/i;
handler.limit = false;
handler.group = false;
module.exports = handler;
