/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw 'You are not registered in the database'

  if (!text || !/^\d+$/.test(text)) {
    throw `*Example:* ${usedPrefix}spin 1000`
  }

  let betAmount = parseInt(text)
  if (user.balance < betAmount) throw '🐱 Your balance is insufficient'

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  user.balance += wonAmount

  let delay = 10000 // 10 seconds delay
  if (user.lastSpin && Number(new Date()) - user.lastSpin < delay) {
    let time = Math.ceil((user.lastSpin + delay - Number(new Date())) / 1000) 
    throw `🐱 Please wait ${time} seconds before executing the next spin`
  }
  user.lastSpin = Number(new Date())

  let caption = `*🧐 Let's See the Results*\n\n`
  caption += `*- ${betAmount.toLocaleString()}*\n`
  caption += result ? `*+ ${wonAmount.toLocaleString()}*\n\n` : `\n\n`
  caption += `• Total : *${user.balance.toLocaleString()}* Balance`

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
        title: `${global.namebot}`,
        body: "S P I N - R E S U L T",
        thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230531_122302.jpg",
        sourceUrl: `${global.sourceUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['spin']
handler.tags = ['game']
handler.command = /^(spin)$/i

module.exports = handler
