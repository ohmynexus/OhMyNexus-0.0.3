/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require("node-fetch");
const { fnctions } = require('../lib/fnctions.js');

let handler = async (m, { conn, command }) => {
  try {
    if (!(await fnctions())) return;

    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;

    let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[who];
    let username = user.name;
    let tag = '' + m.sender.split('@')[0];
    let api = `wa.me/${who.split('@')[0]}`;

    let limit = user.limit;
    let balance = user.balance || 0;
    let level = user.level;
    let exp = user.exp;
    let age = user.age;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not a premium";
    let role = user.role;

    let caption = `┌  ◦  *Name* : ${username}
│  ◦  *Tag* : ${tag}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *Balance* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
│  ◦  *Age* : ${age}
└  ◦  *Role* : ${role}

${global.footer}`.trim();

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "Y O U R - P R O F I L E",
          thumbnailUrl: ppUrl,
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();

    let user = global.db.data.users[sender];
    let username = user.name;
    let tag = '' + m.sender.split('@')[0];
    let api = `wa.me/${sender.split('@')[0]}`;

    let limit = user.limit;
    let balance = user.balance || 0;
    let level = user.level;
    let exp = user.exp;
    let age = user.age;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not a premium";
    let role = user.role;

    let caption = `┌  ◦  *Name* : ${username}
│  ◦  *Tag* : ${tag}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *Balance* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
│  ◦  *Age* : ${age}
└  ◦  *Role* : ${role}

${global.footer}`.trim();

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: "P R O F I L E ㋡",
          thumbnailUrl: ppUrl,
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  }
};

handler.command = /^(profile|me)$/i
handler.help = ['profile *@user*'];
handler.tags = ['start'];
handler.register = true;

module.exports = handler;
