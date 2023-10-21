/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Fixed erorr by: Sazumi Viki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const free = 5000
const prem = 10000
const balancefree = 5000
const balanceprem = 10000
const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 86400000
    if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `You have claimed, today's daily claim\nwait *${msToTime(time - new Date())}* again`
    global.db.data.users[m.sender].exp += isPrems ? prem : free
    global.db.data.users[m.sender].balance += isPrems ? balanceprem : balancefree
    m.reply(`*🐱 Congratulations*\n\n*◦ Bonus Exp:* +${isPrems ? prem : free} Exp\n*◦ Bonus Balance:* +${isPrems ? balanceprem : balancefree} Balance`)
    global.db.data.users[m.sender].lastclaim = new Date * 1
    setTimeout(() => {
        m.reply(`🐱 Daily can be retrieved`)
    }, timeout)
} 

handler.help = ['daily']
handler.tags = ['rpg']
handler.command = /^(daily)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.balance = 0
handler.exp = 0
handler.limit = true

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " jam " + minutes + " menit " + seconds + " detik"
}