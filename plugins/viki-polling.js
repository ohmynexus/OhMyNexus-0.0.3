/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, text }) => {
  let args = text.split(',').map(arg => arg.trim())
  let name = args[0]
  let values = args.slice(1)

  if (!name) {
    return m.reply('*Example*: .polling name, value')
  }

  if (values.length < 2) {
    return m.reply('🐱 Please provide at least two values for the poll')
  }

  let poll = {
    name: name,
    values: values,
    selectableCount: true
  }

  conn.sendMessage(m.chat, {
    poll: poll
  })

  m.reply(`🐱 Poll *${name}* created with options: *${values.join(', ')}*`)
}

handler.command = /^(poll|polling)$/i
handler.help = ['poll name, value,', 'polling name, value1']
handler.tags = ['tools']
handler.register = true
handler.limit = false

module.exports = handler