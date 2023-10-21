/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/


const fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
    if (!args[0]) {
        return m.reply('*Example*: .pindl https://pin.it/xxxxx')
    }
    let apikey = `${global.lolkey}`
    let url = `https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${args[0]}`
    conn.chatRead(m.chat)
    conn.sendMessage(m.chat, {
        react: {
            text: '🕒',
            key: m.key,
        }
    })
    let res = await fetch(url)
    let json = await res.json()
    if (json.status !== 200) {
        return m.reply('🐱 Erorr')
    }
    let result = json.result
    let response = await fetch(result)
    let buffer = await response.buffer()
    conn.sendFile(m.chat, buffer, 'pin.jpg', '', m)
}

handler.help = ['pindl <link>', 'pinteresetdl <link>']
handler.tags = ['downloader']
handler.command = /^(pindl|pinteresetdl)$/i
handler.register = true
handler.limit = true

module.exports = handler