/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key,
        }
    })
    try {
        let res = await fetch(`https://api.lolhuman.xyz/api/random/puisi?apikey=${global.lolkey}`)
        let json = await res.json()
        if (json.status !== 200) {
            throw json
        }
        let { result } = json
        m.reply(result)
    } catch (e) {
        m.reply('🐱 Erorr')
        console.log(e)
    }
}

handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.register = true
handler.limit = true

module.exports = handler