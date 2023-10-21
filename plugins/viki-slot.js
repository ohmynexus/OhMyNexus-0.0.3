/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, args, usedPrefix, command }) => {

  let betAmount = parseInt(args[0]);
  if (isNaN(betAmount) || betAmount <= 0) {
    conn.reply(m.chat, `*Example*: .slot 1000`, m);
    return;
  }

  let user = global.db.data.users[m.sender];
  if (user.balance < betAmount) {
    conn.reply(m.chat, `Sorry, your balance is not sufficient to make a big bet ${betAmount}.`, m);
    return;
  }

  let symbols = ['🍐', '🍊', '🍒', '🔔', '🍇'];

  let result = [];
  for (let i = 0; i < 3; i++) {
    let symbol = symbols[Math.floor(Math.random() * symbols.length)];
    result.push(symbol);
  }

  let win = result[1] === '🔔' && result[0] === '🍐' && result[2] === '🍇';

  let winAmount = win ? betAmount * 5 : 0;

  user.balance -= betAmount;
  user.balance += winAmount;

  conn.reply(
    m.chat,
    `[  🎰 | SLOTS ]
-------------------
${result.join(' : ')}
-------------------
[  🎰 | SLOTS ]
${win ? 'You win!' : 'You lose'}
${win ? `You won a big bet ${winAmount}` : ''}
Your remaining balance: ${user.balance}`,
    m,
    {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "",
          thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230531_123159.jpg",
          sourceUrl: "https://sazumiviki.me",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }
  );
};

handler.help = ['slot'];
handler.tags = ['game'];
handler.command = /^(slot)$/i;

module.exports = handler;
