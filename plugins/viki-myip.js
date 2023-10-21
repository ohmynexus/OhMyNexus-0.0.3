/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


const axios = require('axios')

let handler = async (m, { conn }) => {
  try {
    const { data } = await axios.get('https://api.ipify.org')
    conn.reply(m.chat, `IP kamu adalah ${data}`, m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['myip']
handler.tags = ['internet']
handler.command = /^myip$/i
handler.owner = true;
handler.register = true
handler.limit = true

module.exports = handler