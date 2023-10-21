/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { igStalk } = require('api-dylux');
const { fnctions } = require("../lib/fnctions");

const handler = async (m, { text, conn }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .igstalk addykece_';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    const result = await igStalk(text);
    
    const {
      name,
      username,
      description,
      postsH,
      followersH,
      followingH,
      profilePic,
    } = result;

    const caption = `*🐱 Instagram Stalk*\n\n`
      + `*◦ Name:* ${name}\n`
      + `*◦ Username:* ${username}\n`
      + `*◦ Description:* ${description || '-'}\n`
      + `*◦ Total Posts:* ${postsH} (${result.posts} posts)\n`
      + `*◦ Followers:* ${followersH} (${result.followers} followers)\n`
      + `*◦ Following:* ${followingH} (${result.following} following)\n`;

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: `${global.namebot}`,
          body: " I N S T A G R A M - S T A L K",
          thumbnailUrl: profilePic,
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (error) {
    throw `*🐱 Upps Erorr:* ${error}`;
  }
};

handler.help = ['igstalk'];
handler.register = true;
handler.tags = ['tools'];
handler.command = /^igstalk$/i;

module.exports = handler;