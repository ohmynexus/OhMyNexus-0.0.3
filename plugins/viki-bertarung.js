/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let opponent = m.mentionedJid[0]
  
  if (!user || !global.db.data.users[opponent]) {
    return m.reply('*Example*: .bertarung @user')
  }
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  
  let betAmount = Math.floor(Math.random() * (10000000 - 10000 + 1)) + 10000 
  
  if (user.balance < betAmount) {
    return m.reply('Balance Anda tidak mencukupi')
  }
  
  if (user.lastWar && (new Date - user.lastWar) < 10000) {
    let remainingTime = Math.ceil((10000 - (new Date() - user.lastWar)) / 1000)
    return m.reply(`Anda harus menunggu ${remainingTime} detik sebelum dapat bertarung lagi`)
  }
  
  m.reply('Mempersiapkan arena...') 
  
  setTimeout(() => {
    m.reply('Mendapatkan arena...') 
    
    setTimeout(() => {
      m.reply('Bertarung...')
      
      setTimeout(() => {
        let result = Math.random() >= 0.5 
        let wonAmount = result ? betAmount : -betAmount 
        
        user.balance += wonAmount
        global.db.data.users[opponent].balance -= wonAmount
        
        let opponentName = conn.getName(opponent) 
        
        let caption = `*Hasil pertempuran:*\n\n`
        caption += `Anda Vs ${opponentName}\n\n`
        
        if (result) {
          caption += `Anda menang! +${betAmount}\n`
          caption += `Balance Anda saat ini: ${user.balance}\n`
          conn.sendFile(m.chat, 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/You_Win.jpg', 'You_Win.jpg', caption, m)
        } else {
          caption += `Anda kalah! -${betAmount}\n`
          caption += `Balance Anda saat ini: ${user.balance}\n`
          conn.sendFile(m.chat, 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/You_Lose.jpg', 'You_Lose.jpg', caption, m)
        }

        user.lastWar = new Date() 
        
        setTimeout(() => {
          m.reply(`Anda dapat bertarung lagi setelah 5 detik`) 
        }, 5000) // https://github.com/SazumiVicky/MakeMeow-Games
      }, 2000)
    }, 2000) 
  }, 2000) 
}

handler.help = ['bertarung @user']
handler.tags = ['rpg']
handler.command = /^bertarung$/i

module.exports = handler
