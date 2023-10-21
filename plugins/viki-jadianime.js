/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const { fnctions } = require('../lib/fnctions.js');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime.startsWith('image')) {
      throw 'Send/Reply to an image with the caption *.jadianime*';
    }
    if (!(await fnctions())) return;
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    const media = await q.download();
    const imageUrl = await uploadImage(media);

    const styles = ['anime', 'angel', 'princess', 'manhwa_female', 'manhwa_male'];
    const queryParams = {
      json: false,
    };

    const sendPromises = styles.map(async (style) => {
      const response = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
      });

      const buffer = Buffer.from(response.data, 'binary');
      const ext = (await fromBuffer(buffer)).ext;

      const form = new FormData();
      form.append('file', buffer, {
        filename: 'image.' + ext,
        contentType: mime,
        knownLength: buffer.length,
      });

      const { data } = await axios
        .request({
          baseURL: 'https://api.itsrose.life',
          url: '/image/differentMe',
          method: 'POST',
          params: {
            ...queryParams,
            apikey: global.rose,
            style: style,
          },
          data: form,
          responseType: 'arraybuffer',
        })
        .catch((e) => e?.response?.data);

      if (!data) {
        throw 'Failed to process image.';
      }

      const resultBuffer = Buffer.from(data, 'binary');
      let caption = `*🐱 STYLE:* ${style.replace(/_/g, ' ').toUpperCase()}`;

      return conn.sendFile(m.chat, resultBuffer, 'jadianime.jpg', caption, m);
    });

    await Promise.all(sendPromises);
  } catch (e) {
    conn.reply(m.chat, `Error: ${e}`, m);
  }
};

handler.help = ['jadianime'];
handler.tags = ['tools'];
handler.command = /^(jadianime)$/i;
handler.limit = true;

module.exports = handler;
