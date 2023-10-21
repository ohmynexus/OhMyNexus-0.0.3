let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'p' || m.text.toLowerCase() === 'tes' || m.text.toLowerCase() === 'test') {
    let today = new Date()
    let day = today.toLocaleDateString('en-US', { weekday: 'long' })
    let username = '@' + m.sender.split`@`[0]

    let teks = `👋 Happy ${day} *${username}*, can I help you with anything?`

    m.reply(teks)
  }
}

module.exports = handler