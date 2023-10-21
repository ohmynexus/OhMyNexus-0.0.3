/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Code by: Skyline
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');
const { fnctions } = require("../lib/fnctions");

const handler = async (m, { conn, text, command }) => {
    if (!await fnctions()) return;
    if (!text) throw `┌  • *S T Y L E - C H O I C E*
│  ◦ cowboy
│  ◦ sportsman
│  ◦ fireman
│  ◦ id-photo
│  ◦ doctor
│  ◦ suit
│  ◦ graduation
└  ◦ policeman

note: reply/send ur image with caption *.${command} style*`
  let [style, ...message] = text.split(' ');
  message = message.join(' ');
  let pushname = m.pushName || "No Name";
  let setStyle;

  switch(style) {
      case 'cowboy':
      setStyle = 'cowboy';
      break;
      case 'sportsman':
      setStyle = 'sportsman';
      break;
      case 'fireman':
      setStyle = 'fireman';
      break;
       case 'id-photo':
      setStyle = 'id-photo';
      break;
      case 'doctor':
      setStyle = 'doctor';
      break;
       case 'suit':
      setStyle = 'suit';
      break;
       case 'graduation':
      setStyle = 'graduation';
      break;
       case 'policeman':
      setStyle = 'policeman';
      break;
      default:
      throw 'The selected style is not available.';
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  
  if (!mime.startsWith('image/')) {
    throw 'Reply to an image with a caption *.avatarme*';
  }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const media = await q.download();
  const imageUrl = await uploadImage(media);
  const styleId = `${text}`

  const apiData = {
  "init_image": imageUrl,
  "style": setStyle,
  "skin": "cowboy",
  "gender": "male"
};

  const { data } = await axios.post(`https://api.itsrose.life/image/avatarMe?apikey=${global.rose}`, apiData);

  if (data.status && data.result.images.length > 0) {
    const imageUrl = data.result.images;
    const metadata = data.result.metadata;


    conn.sendFile(m.chat, imageUrl, 'avatarme.jpg3', 'Here', m);
  } else {
    throw 'Failed to generate AvatarMe Image.';
  }
};

handler.help = ['avatarmeboy'];
handler.tags = ['tools'];
handler.command = /^(avatarmeboy)$/i;

module.exports = handler;