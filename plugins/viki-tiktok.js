/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { tiktokdlv2 } = require('@bochilteam/scraper');
const { fnctions } = require("../lib/fnctions");
const handler = async (m, { text, conn }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example* .tiktok https://vm.tiktok.com/xxxxxx';
  }

  const startTime = new Date();
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    const result = await tiktokdlv2(text);

    if (result) {
      const { video } = result;
      const { no_watermark_hd } = video;

      const endTime = new Date();
      const elapsedTime = endTime - startTime;

      conn.sendFile(m.chat, no_watermark_hd, 'viki_ganteng.mp4', `*🐱 Fetching:* ${elapsedTime} ms`, m);
    } else {
      throw '🐱 Upps Erorr';
    }
  } catch (error) {
    console.error(error);
    m.reply('🐱 Upps Erorr');
  }
};

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;

module.exports = handler;
