/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const getFile = async (file) => {
  const fileInfo = await client.downloadAndSaveMediaMessage(file);
  return {
    file: fileInfo,
    mimetype: fileInfo.mimetype,
  };
};

const jsonFormat = (json) => {
  return JSON.stringify(json, null, 2);
};

module.exports = {
  getFile,
  jsonFormat,
};
