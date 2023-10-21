/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const search = require('yt-search');
const { fnctions } = require("../lib/fnctions");

let handler = async (m, { conn, text }) => {
  try {
    if (!await fnctions()) return;

    if (!text) return m.reply('*Example*: .play rewrite the stars');

    const isDoc = text.endsWith("--doc");
    if (isDoc) {
      text = text.replace("--doc", "").trim();
    }

    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    try {
      let results = await search(text);
      let videoId = results.videos[0].videoId;
      let info = await ytdl.getInfo(videoId);
      let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
      let thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
      let url = info.videoDetails.video_url;
      let duration = parseInt(info.videoDetails.lengthSeconds);
      let uploadDate = new Date(info.videoDetails.publishDate).toLocaleDateString();
      let views = info.videoDetails.viewCount;
      let minutes = Math.floor(duration / 60);
      let description = results.videos[0].description;
      let seconds = duration % 60;
      let durationText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
      function formatViews(views) {
        if (views >= 1000000) {
          return (views / 1000000).toFixed(1) + 'M';
        } else if (views >= 1000) {
          return (views / 1000).toFixed(1) + 'K';
        } else {
          return views.toString();
        }
      }

      let audio = ytdl(videoId, { quality: 'highestaudio' });
      let inputFilePath = 'tmp/' + title + '.webm';
      let outputFilePath = 'tmp/' + title + '.mp3';

      let fileSize = 0;
      audio.on('data', (chunk) => {
        fileSize += chunk.length;
        if (fileSize > 50 * 1024 * 1024) {
          audio.destroy();
          fs.unlinkSync(inputFilePath);
          return m.reply('🐱 Audio reaches 50MB limit');
        }
      });
    
      let viewsFormatted = formatViews(views);
      let infoText = `
*${title.toUpperCase()}*
    
╭─ •  「 *YOUTUBE PLAY* 」
│  ◦  *Duration*: ${durationText}
│  ◦  *Upload Date*: ${uploadDate}
│  ◦  *Views*: ${viewsFormatted}
╰──── •
${global.footer}`;

      conn.sendMessage(m.chat, {
        text: infoText,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: `${title}`,
            body: description,
            thumbnailUrl: thumbnailUrl,
            mediaUrl: url,
            sourceUrl: url,
            mediaType: 2,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });

      audio.pipe(fs.createWriteStream(inputFilePath)).on('finish', async () => {
        ffmpeg(inputFilePath)
          .toFormat('mp3')
          .on('end', async () => {
            let thumbnailData = await conn.getFile(thumbnailUrl);
            let buffer = fs.readFileSync(outputFilePath);
            if (isDoc) {
              conn.sendMessage(m.chat, {
                document: buffer,
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                caption: ''
              }, { quoted: m });
            } else {
              conn.sendFile(m.chat, buffer, `${title}.mp3`, '', m);
            }
            fs.unlinkSync(inputFilePath);
            fs.unlinkSync(outputFilePath);
          })
          .on('error', (err) => {
            console.log(err);
            m.reply(`🐱 There was an error converting the audio: ${err.message}`);
            fs.unlinkSync(inputFilePath);
            fs.unlinkSync(outputFilePath);
          })
          .save(outputFilePath);
      });

    } catch (e) {
      console.log(e);
      m.reply(`🐱 An error occurred while searching for the song: ${e.message}`);
    }

  } catch (e) {
    conn.reply(m.chat, `Error: ${e}`, m);
  }
};

handler.help = ['play'];
handler.tags = ['downloader'];
handler.command = /^play$/i;
handler.limit = true;

module.exports = handler;