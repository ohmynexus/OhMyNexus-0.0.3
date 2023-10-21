/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw 'You are not registered in the database'

  let successImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/korupsi.jpeg'
  let failureImage = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/menolak_korupsi.jpg'
  let successMessage = 'Congratulations you have invited your friends to corruption and you get *{randomBalance}* Balance'
  let failureMessage = 'Sorry, your friend refuses to be corrupted, your friend complains and you are fined for *{randomBalance}* Balance'
  let waitMessage = 'You have corrupted today, wait another hour and then commit corruption again.'

  let target = m.mentionedJid[0]
  if (!target) throw `*Example*: ${usedPrefix}bansos @friend`

  let currentBalance = user.balance || 0

  let randomBalance = Math.floor(Math.random() * (100000000 - 100000 + 1) + 100000)

  if (user.bansosCooldown && user.bansosCooldown > Date.now()) { 
    throw waitMessage
  } else {
    if (Math.random() < 0.5) { 
      user.balance += randomBalance
      successMessage = successMessage.replace('{randomBalance}', randomBalance.toLocaleString())
      conn.sendFile(m.chat, successImage, 'korupsi.jpg', successMessage, m)

      user.bansosCooldown = Date.now() + 3600000
    } else { 
      user.balance -= randomBalance
      failureMessage = failureMessage.replace('{randomBalance}', randomBalance.toLocaleString())
      conn.sendFile(m.chat, failureImage, 'menolak_korupsi.jpg', failureMessage, m)

      user.bansosCooldown = Date.now() + 3600000
    }

    global.db.data.users[m.sender] = user
  }
}

handler.help = ['bansos *@friend*']
handler.tags = ['rpg']
handler.command = /^bansos$/i

module.exports = handler
