/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, args }) => {
  const text = args.join(' ');
  if (!text) {
    throw '*Example:* .addlimit @user 100 / .addlimit 628xxx 100';
  }

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let mentionedJid = '';
  let pointsToAdd = 0;
  if (m.mentionedJid.length > 0) {
    mentionedJid = m.mentionedJid[0];
    pointsToAdd = parseInt(text.split(' ')[1]);
  } else {
    mentionedJid = `${text.split(' ')[0]}@s.whatsapp.net`;
    pointsToAdd = parseInt(text.split(' ')[1]);
  }

  if (isNaN(pointsToAdd)) {
    throw '🐱 Erorr, use *Example:* .addlimit @user 100';
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit += pointsToAdd;

  conn.reply(m.chat, `🐱 Successfully added *${pointsToAdd}* limit for *@${mentionedJid.split('@')[0]}*`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['addlimit'];
handler.tags = ['xp'];
handler.command = /^addlimit$/i;
handler.owner = true;

module.exports = handler;