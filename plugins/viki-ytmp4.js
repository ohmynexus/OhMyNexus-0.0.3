/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const ytdl = require("ytdl-core");
const yts = require("yt-search");
const { fnctions } = require("../lib/fnctions");

let handler = async (m, { conn, text }) => {
  try {
    if (!await fnctions()) return;

    if (!text) {
      throw "*Example:* .ytmp4 https://youtube.com/xxxxx [--doc]";
    }

    const isDoc = text.includes("--doc");
    if (isDoc) {
      text = text.replace("--doc", "").trim();
    }

    let videoUrl = text.trim();
    let validUrl = ytdl.validateURL(videoUrl);

    if (!validUrl) {
      let searchResults = await yts(videoUrl);
      if (searchResults.videos.length === 0) {
        throw "No video found.";
      }
      videoUrl = searchResults.videos[0].url;
    }

    try {
      conn.chatRead(m.chat);
      conn.sendMessage(m.chat, {
        react: {
          text: "🕒",
          key: m.key,
        },
      });

      let info = await ytdl.getInfo(videoUrl);
      let videoFormat = ytdl.chooseFormat(info.formats, { quality: "highest" });

      if (!videoFormat) {
        throw "🐱 Unable to find video format.";
      }

      let buffer = await require("node-fetch")(videoFormat.url).then((res) =>
        res.buffer()
      );
      if (isDoc) {
        conn.sendMessage(m.chat, {
          document: buffer,
          mimetype: "video/mp4",
          fileName: `${info.videoDetails.title}.mp4`,
          caption: `*◦ Title:* ${info.videoDetails.title}\n*◦ Duration:* ${info.videoDetails.lengthSeconds} seconds\n\n${global.footer}`,
        }, { quoted: m });
      } else {
        conn.sendFile(
          m.chat,
          buffer,
          `${info.videoDetails.title}.mp4`,
          `◦ Title: ${info.videoDetails.title}\n◦ Duration: ${info.videoDetails.lengthSeconds} seconds\n\n${global.footer}`,
          m
        );
      }
    } catch (e) {
      console.log(e);
      throw "🐱 Error occurred while processing the request.";
    }

  } catch (e) {
    conn.reply(m.chat, `Error: ${e}`, m);
  }
};

handler.command = /^ytmp4$/i;
handler.help = ["ytmp4 /link [--doc]"];
handler.tags = ["downloader"];
handler.limit = true;

module.exports = handler;