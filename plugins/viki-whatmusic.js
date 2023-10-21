/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const FormData = require('form-data');
const { fnctions } = require("../lib/fnctions");
const uploadAudio = require("../lib/uploadImage");

const cooldown = new Set();

let handler = async (m, { conn }) => {
  try {
    if (!await fnctions()) return;
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (/audio/.test(mime)) {
      if (cooldown.has(m.sender)) {
        m.reply('Please wait *10 seconds* before using this command again.');
        return;
      }

      let audioBuffer = await q.download();

      let audioUrl = await uploadAudio(audioBuffer, 'audio', 'mp3');

      const form = new FormData();
      form.append('url', audioUrl);
      form.append('api_token', 'e391be1bb2488d727d3d7eb934ae7924');

      conn.chatRead(m.chat);
      conn.sendMessage(m.chat, {
        react: {
          text: '🕒',
          key: m.key,
        }
      });

      const { data } = await axios.post('https://api.audd.io/', form, {
        headers: form.getHeaders(),
      });

      if (data.status === 'success') {
        let title = data.result.title;
        let artist = data.result.artist;
        let album = data.result.album;

        let replyText = `*🐱 Audio Result*\n\n◦ *Title :* ${title}\n◦ *Artist :* ${artist}\n◦ *Album :* ${album}`;

        m.reply(replyText); 

      } else {
        m.reply('❌ Song detection failed.');
      }

      cooldown.add(m.sender);
      setTimeout(() => {
        cooldown.delete(m.sender);
      }, 10000);

    } else {
      m.reply('🐱 Please reply to an audio file');
    }
  } catch (e) {
    m.reply(`Error: ${e}`);
  }
};

handler.help = ['whatmusic'];
handler.tags = ['tools'];
handler.command = /^whatmusic$/i;

module.exports = handler;