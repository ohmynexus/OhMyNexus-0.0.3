/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, text }) => {
  let premiumList = [
    {
      duration: "1 DAY",
      price: 100000000,
      command: "1D",
    },
    {
      duration: "3 DAY",
      price: 300000000,
      command: "3D",
    },
    {
      duration: "7 DAY",
      price: 700000000,
      command: "7D",
    },
    {
      duration: "30 DAY",
      price: 1000000000,
      command: "30D",
    },
  ];

  if (!text) {
    let listText = "*PREMIUM LIST:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `${index + 1}. PREMIUM ${premium.duration}\n`;
      listText += `◦  Price : *${premium.price.toLocaleString()}* Balance\n`;
      listText += `◦  *Command :* .buyprem ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "Hello, please choose your premium plan.",
          thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230602_095645.jpg",
          sourceUrl: "https://www.instagram.com/addykece_/",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Please enter the number of days you want to buy.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Premium not found.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "You are not registered.", m);

  let balance = user.balance || 0;
  let price = selectedPremium.price * days;
  if (balance < price) return conn.reply(m.chat, "Insufficient balance.", m);

  user.premium = true;
  user.premiumDate = Date.now() + days * 24 * 60 * 60 * 1000;
  user.limit += days;
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  user.balance -= price;

  conn.reply(m.chat, `You have successfully purchased *${selectedPremium.duration}* Premium.`, m);
};

handler.command = /^buyprem$/i;
handler.help = ["buyprem [duration]"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;
