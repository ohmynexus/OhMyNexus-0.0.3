/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn }) => {
  let regex = /^(assalamualaikum|salam|ass|salo?m|p)$/i;
  if (regex.test(m.text)) {
    let user = global.db.data.users[m.sender];
    let name = user.name;
    let caption = `Waalaikumsalam *@${m.sender.split('@')[0]}* ❤️`;
    m.reply(caption, null, {
      sendEphemeral: true,
      quoted: m,
      contextInfo: {
        mentionedJid: [m.sender]
      }
    });
  }
};

handler.command = /.*/;
handler.customPrefix = /^(assalamualaikum|salam|ass|salo?m)$/i;
handler.exp = 0;

module.exports = handler;
