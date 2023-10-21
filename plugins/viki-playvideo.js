/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const ytdl = require('ytdl-core');
const fs = require('fs');
const search = require('yt-search');
const { fnctions } = require("../lib/fnctions");

let sentVideos = [];

let handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  if (!text) return m.reply('*Example*: .playvideo rewrite the star');

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  const isDoc = text.includes("--doc");
  if (isDoc) {
    text = text.replace("--doc", "").trim();
  }

  try {
    let searchResults = await search(text);
    let videoId = searchResults.videos[0].videoId;
    let info = await ytdl.getInfo(videoId);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    if (sentVideos.includes(title)) {
      let newVideoId = '';
      for (let i = 0; i < searchResults.videos.length; i++) {
        if (!sentVideos.includes(searchResults.videos[i].title)) {
          newVideoId = searchResults.videos[i].videoId;
          break;
        }
      }
      if (!newVideoId) {
        return m.reply('🐱 No more videos available with the same title');
      }
      videoId = newVideoId;
      info = await ytdl.getInfo(videoId);
      title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    }

// Jangan hapus bagian ini
const _0xa5d02d=_0x4704;function _0x4704(_0xa4490c,_0x2a682d){const _0x5bd200=_0x3028();return _0x4704=function(_0x8d01d8,_0x1a6469){_0x8d01d8=_0x8d01d8-(0x2e*-0x3b+-0xea5+0x1b20);let _0x128bec=_0x5bd200[_0x8d01d8];return _0x128bec;},_0x4704(_0xa4490c,_0x2a682d);}function _0x3028(){const _0x27c393=['232604cxHSCC','videoandau','33jJssTI','826arxasl','173957KujTHl','dio','5AnhKCV','5397036aCPsey','4595432wtwYOz','9oEgFlL','chooseForm','1033KrKKvg','114bWIwVU','formats','highestvid','4594710UqptCH','210141uRrewr'];_0x3028=function(){return _0x27c393;};return _0x3028();}(function(_0x296da3,_0x5749e4){const _0x814190=_0x4704,_0xe01aab=_0x296da3();while(!![]){try{const _0x10da37=-parseInt(_0x814190(0x1ec))/(-0x1a*-0x75+0x818+-0x13f9)*(parseInt(_0x814190(0x1e4))/(0xc*0x162+-0x2650+0x15ba))+-parseInt(_0x814190(0x1f1))/(0x130*-0x10+-0x9*-0x9e+0xd*0x109)+parseInt(_0x814190(0x1e1))/(-0x22ff+-0xad*-0x1d+0xf6a)*(parseInt(_0x814190(0x1e7))/(-0x2065+-0x1*0xae+0x2118))+parseInt(_0x814190(0x1ed))/(0x1f57+0xf*-0x14b+-0xbec)*(parseInt(_0x814190(0x1e5))/(-0x13d*0x3+-0x1ebd+0x227b))+parseInt(_0x814190(0x1e9))/(-0x10fe+0x26cb+-0x15c5)*(-parseInt(_0x814190(0x1ea))/(-0x1*-0x209+-0x6*-0x8+0x1*-0x230))+-parseInt(_0x814190(0x1f0))/(0x8ad+0x3a*-0x83+0x150b)+-parseInt(_0x814190(0x1e3))/(0x2*-0x6d0+0x126e+-0x4c3)*(-parseInt(_0x814190(0x1e8))/(0x6a4+0x4*-0x403+-0x16*-0x6e));if(_0x10da37===_0x5749e4)break;else _0xe01aab['push'](_0xe01aab['shift']());}catch(_0x4f9ee8){_0xe01aab['push'](_0xe01aab['shift']());}}}(_0x3028,0x2f*0x1c99+0x3e45b+-0xb*0x58d5));let format=ytdl[_0xa5d02d(0x1eb)+'at'](info[_0xa5d02d(0x1ee)],{'quality':_0xa5d02d(0x1ef)+'eo','filter':_0xa5d02d(0x1e2)+_0xa5d02d(0x1e6)}),video=ytdl(videoId,{'format':format});

    let fileSize = 0;
    video.on('data', (chunk) => {
      fileSize += chunk.length;
      if (fileSize > 50 * 1024 * 1024) {
        video.destroy();
        fs.unlinkSync(`${title}.mp4`);
        m.reply('🐱 The video you requested is over 50MB');
      }
    });

    video.pipe(fs.createWriteStream(`${title}.mp4`)).on('finish', () => {
      let buffer = fs.readFileSync(`${title}.mp4`);
      if (isDoc) {
        conn.sendMessage(m.chat, {
          document: buffer,
          mimetype: "video/mp4",
          fileName: `${title}.mp4`,
          caption: '',
        }, { quoted: m });
      } else {
        conn.sendFile(m.chat, buffer, `${title}.mp4`, '', m);
      }
      fs.unlinkSync(`${title}.mp4`);

      sentVideos.push(title);
      if (sentVideos.length > 10) {
        sentVideos.shift();
      }
    });
  } catch (e) {
    console.log(e);
    m.reply(`🐱 An error occurred while downloading the video: ${e.message}`);
  }
};

handler.help = ['playvideo'];
handler.tags = ['downloader'];
handler.level = 3;
handler.command = /^playvideo$/i;

module.exports = handler;