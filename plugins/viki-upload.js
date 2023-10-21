/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const { fnctions } = require("../lib/fnctions");

const formatFileSize = (size) => {
  if (size < 1024) {
    return size + ' B';
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  } else if (size < 1024 * 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
};

const handler = async (m, { conn }) => {
  if (!await fnctions()) return;
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  
  if (!mime.startsWith('image') && !mime.startsWith('video') && !mime.startsWith('audio')) {
    m.reply('🐱 Please reply to an image, video, or audio');
    return;
  }
  
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  
  let media = await q.download();
  let mediaType;
  
  if (mime.startsWith('image')) {
    mediaType = 'photo';
  } else if (mime.startsWith('video')) {
    mediaType = 'video';
  } else if (mime.startsWith('audio')) {
    mediaType = 'audio';
  }
  
  let filename = `media.${mediaType === 'photo' ? 'jpg' : (mediaType === 'video' ? 'mp4' : 'mp3')}`;
  fs.writeFileSync(filename, media);
  
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filename));
  
  try {
    const response = await axios.post('https://cdn.sazumi.moe/upload', formData, {
      headers: {
        ...formData.getHeaders()
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    const mediaUrl = response.data;
    const mediaSize = formatFileSize(media.length);

    m.reply(`${mediaUrl}\n*${mediaSize}*\n(🐱 7 Days Left)`);

    fs.unlinkSync(filename);
  } catch (error) {
    m.reply(`🐱 Error! ${error.message}`);
    console.error(error);
    fs.unlinkSync(filename);
  }
};

handler.help = ['up'];
handler.tags = ['tools'];
handler.register = true;
handler.command = /^up$/i;

module.exports = handler;