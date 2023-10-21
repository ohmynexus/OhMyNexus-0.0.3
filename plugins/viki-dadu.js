/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const da = [
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/1.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/2.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/3.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/4.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/5.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/6.webp'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'viki.webp', '', m)
}
handler.help = ['dadu']
handler.tags = ['sticker']
handler.command = ['dadu'] 
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}