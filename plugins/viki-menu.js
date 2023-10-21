/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let axios = require('axios');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const { fnctions } = require("../lib/fnctions");

Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

let handler = async (m, { conn }) => {
  try {
    if (!await fnctions()) return;

    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let time = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    let version = require('../package.json').version;
    let author = 'addykece';
    let greeting = '';

    if (new Date().getHours() >= 0 && new Date().getHours() < 4) {
      greeting = '👋 Good night';
    } else if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
      greeting = '👋 Good morning';
    } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
      greeting = '👋 Good afternoon';
    } else if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
      greeting = '👋 Good evening';
    }

    const greetingText = Styles(greeting, 1);
    const userNameText = Styles(user.name, 1);
    const welcomeMessage = `*${greetingText} ${userNameText}*`;

    let mainmenu = `Nexus is a WhatsApp bot for creating stickers, listening to music, and playing real-time RPG games.\n\nNexus also maintains user privacy by destroying stored data every week, ensuring your data remains secure and private.

◦  *Version :* ${version}
◦  *Author :* ${author}
◦  *Show all menu :* .allmenu
◦  *Show about Nexus :* .about`;

    const fkontak = {
      "key": {
        "participants": "0@s.whatsapp.net",
        "remoteJid": "status@broadcast",
        "fromMe": false,
        "id": "Halo"
      },
      "message": {
        "contactMessage": {
          "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
      },
      "participant": "0@s.whatsapp.net"
    };

    let thumbnailUrl = "https://telegra.ph/file/f02511798bc638a249e5a.png";

    let sourceUrl = "https://www.instagram.com/addykece_/";
    let wait = '*ʟᴏᴀᴅɪɴɢ...*';

    const arr = [
      "*ɴᴏᴡ ʟᴏᴀᴅɪɴɢ*",
      "*ʟᴏᴀᴅ ᴘʟᴜɢɪɴꜱ*",
      "*ʀᴇʟɪᴇᴠᴇ ᴛʜᴇ ᴍᴇᴅɪᴀ*",
      "*ꜱᴜᴄᴄᴇꜱꜱ*",
      `${welcomeMessage}`
    ];

    const jam = ['🕑'];

    for (let i = 0; i < jam.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      await conn.sendMessage(m.chat, {
        react: {
          text: jam[i],
          key: m.key
        }
      });
    }

    const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });

    for (let i = 0; i < arr.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key: lll,
          type: 14,
          editedMessage: {
            conversation: arr[i]
          },
          contextInfo: { 
            mentionedJid: [m.sender]
          }
        }
      }, { quoted: fkontak });
    }

    await delay(1000);

    await conn.sendMessage(m.chat, {
      text: Styles(mainmenu, 1), 
      contextInfo: {
        externalAdReply: {
          title: `${global.sazumi_version}`,
        //  body: `${global.sazumi_version}`,
          thumbnailUrl: thumbnailUrl,
          sourceUrl: "https://www.instagram.com/addykece_/",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });

  } catch (e) {
    conn.reply(m.chat, `Error: ${e}`, m);
  }
};

handler.command = /^menu$/i;
handler.help = ['menu'];
handler.tags = ['main'];
handler.register = true;
handler.limit = true;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
