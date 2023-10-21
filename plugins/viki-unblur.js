/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let name = await conn.getName(who);
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw '🐱 Send/Reply Images with *.remini* captions';
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download();
  let url = await uploadImage(media);
  let hasil = await (await fetch(`https://api.itsrose.life/image/unblur?url=${url}&apikey=${global.rose}`)).buffer();
  await conn.sendFile(m.chat, hasil, '', '🐱 Here Your Image HD', m);
};

handler.help = ["remini", "hd"];
handler.tags = ["tools"];
handler.limit = true;
handler.command = /^(hd|remini)$/i;

module.exports = handler;