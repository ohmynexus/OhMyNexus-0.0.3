/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/


let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    m.reply(`🐱 Successfully cheat your database.`)
    global.db.data.users[m.sender].balance = 9999999999999999999
    global.db.data.users[m.sender].limit = 9999999999999999999
    global.db.data.users[m.sender].level = 9999999999999999999
    global.db.data.users[m.sender].exp = 9999999999999999999
    global.db.data.users[m.sender].sampah = 9999999999999999999
    global.db.data.users[m.sender].potion = 9999999999999999999
    global.db.data.users[m.sender].common = 9999999999999999999
    global.db.data.users[m.sender].uncommon = 9999999999999999999
    global.db.data.users[m.sender].mythic = 9999999999999999999
    global.db.data.users[m.sender].legendary = 9999999999999999999
    global.db.data.users[m.sender].potion =  999999999999999999
}
handler.command = /^(cheat)$/i
handler.owner = true

module.exports = handler