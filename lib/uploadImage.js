/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/


/*
const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

module.exports = async (buffer, filename = 'media') => {
  const { ext } = await fromBuffer(buffer);
  let form = new FormData();
  form.append('image', buffer, { filename: filename + '.' + ext });

  let res = await fetch('https://file.sazumiviki.me/upload', {
    method: 'POST',
    body: form,
    headers: {
      ...form.getHeaders(),
    },
  });

  let data = await res.text();

  if (res.status !== 200) {
    throw `Error uploading image: ${data}`;
  }

  return data;
};



const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

module.exports = async (buffer, filename = 'media', mediaType = 'photo') => {
  const { ext } = await fromBuffer(buffer);
  let form = new FormData();
  form.append('image', buffer, { filename: filename + '.' + ext });
  form.append('type', mediaType);

  let res = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    body: form,
    headers: {
      Authorization: `${global.sazumiviki_imgur}`,
    },
  });

  let data = await res.json();

  if (!data.success) {
    throw data.data.error;
  }

  return data.data.link;
};

*/

const fetch = require('node-fetch');
const FormData = require('form-data');

module.exports = async (buffer, filename = 'media', mediaType = 'photo') => {
  let form = new FormData();
  form.append('file', buffer, { filename: filename + '.jpg', contentType: 'image/jpeg' });

  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form,
  });

  let data = await res.json();

  if (!data[0].src) {
    throw `Failed to upload image to Telegra.ph\nError details: ${JSON.stringify(data)}`;
  }

  return 'https://telegra.ph' + data[0].src;
};
