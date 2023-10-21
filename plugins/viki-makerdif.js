const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');
const { fnctions } = require('../lib/fnctions.js');

const handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let style = (args[0] || '').toLowerCase();
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  let listStyle = `┌ ◦ Use Format: *.${command} <style>*
└ ◦ Example: *.${command} anime*

*— L I S T - S T Y L E*

┌ ◦ anime
│ ◦ manhwa
│ ◦ manhwa_female
│ ◦ manhwa_male
│ ◦ idol
│ ◦ cg
│ ◦ makima
│ ◦ princess
│ ◦ gracefull
│ ◦ azure_sky
│ ◦ summer
│ ◦ cold
│ ◦ manga
│ ◦ angel
│ ◦ fresh
│ ◦ comic
└ ◦ cat_ears

*Note:* Reply/Send Image with caption .${command} <style>`;

  try {
    if (/makerdiff|jadi|makerdif/i.test(command)) {
      if (!(await fnctions())) return;

      switch (style) {
        case 'anime':
        case 'cg':
        case 'manhwa_female':
        case 'manhwa_male':
        case 'princess':
        case 'idol':
        case 'fresh':
        case 'makima':
        case 'manhwa':
        case 'gracefull':
        case 'cold':
        case 'manga':
        case 'azure_sky':
        case 'cat_ears':
        case 'summer':
        case 'comic':
        case 'angel':
          if (!mime) throw `Send/Reply Images with captions .${command} ${style ? style : 'anime'}`;
          conn.chatRead(m.chat);
          conn.sendMessage(m.chat, {
            react: {
              text: '🕒',
              key: m.key,
            }
          });
          let media = await q.download();
          let url = await uploadImage(media);

          const queryParams = {
            style: style,
            json: false, 
          };

          // Jangan hapus bagian ini
          function _0x3ef7(){const _0x5755c5=['5732272PuZprY','27hPkkoV','10796CzNZAa','901561gSRHii','911890Hwevoo','1058898SpsJPb','960YHuSor','buffer','435856TmOLqV','1044620fxpWPo'];_0x3ef7=function(){return _0x5755c5;};return _0x3ef7();}const _0x5a11f0=_0x2bd3;(function(_0x1115e4,_0x158243){const _0x58d720=_0x2bd3,_0x42bef5=_0x1115e4();while(!![]){try{const _0x242a83=parseInt(_0x58d720(0x1d3))/(0x2661+0x171+-0x27d1)+-parseInt(_0x58d720(0x1d2))/(-0x1c20+0x3*-0x56+0x5*0x5d4)*(parseInt(_0x58d720(0x1d6))/(-0x1bdf+-0x121b+0x2dfd))+parseInt(_0x58d720(0x1d0))/(0x158f+0x20*0x67+-0x226b)+-parseInt(_0x58d720(0x1cf))/(0x5*0x33+-0x1e85+0x1d8b)+parseInt(_0x58d720(0x1d5))/(0x7f*0x3+0x18d5+-0x1a4c)+parseInt(_0x58d720(0x1d4))/(0xe*-0x65+0x9d6+-0x449)+parseInt(_0x58d720(0x1ce))/(-0x1*-0x210d+-0x1f1*0x2+-0x1d23)*(parseInt(_0x58d720(0x1d1))/(-0x2596+0x2*0xf09+-0x1*-0x78d));if(_0x242a83===_0x158243)break;else _0x42bef5['push'](_0x42bef5['shift']());}catch(_0x1d2392){_0x42bef5['push'](_0x42bef5['shift']());}}}(_0x3ef7,0x9d40b*0x2+0x4559a+-0x2af3c*0x4));function _0x2bd3(_0xe4103b,_0x2719d2){const _0x2451f9=_0x3ef7();return _0x2bd3=function(_0x5513d0,_0x4c8e47){_0x5513d0=_0x5513d0-(-0x12b3+-0x141c+0x289d);let _0x51706d=_0x2451f9[_0x5513d0];return _0x51706d;},_0x2bd3(_0xe4103b,_0x2719d2);}const response=await fetch(url),buffer=await response[_0x5a11f0(0x1d7)]();

          const form = new FormData();
          form.append('file', buffer, {
            filename: 'image.jpg',
            contentType: 'image/jpeg',
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
              },
              data: form,
              responseType: 'arraybuffer',
            })
            .catch((e) => e.response.data);

          if (!data) {
            throw 'Failed to process image.';
          }

          const resultBuffer = Buffer.from(data, 'binary');
          return conn.sendFile(m.chat, resultBuffer, 'ppk.jpg', `STYLE: ${style.toUpperCase()}`, m);
        default:
          return conn.sendMessage(m.chat, {
            text: listStyle,
            contextInfo: {
              externalAdReply: {
                title: "M A K E R D I F F",
                body: 'The following styles are available',
                thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230619_095103.jpg",
                sourceUrl: `${global.sourceUrl}`,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          });
      }
    } else {
      m.reply('Invalid command');
    }
  } catch (e) {
    m.reply('error');
    console.log(e);
  }
};

handler.tags = ['tools', 'premium'];
handler.premium = true;
handler.command = /^(makerdif|jadi|makerdiff)$/i;
handler.help = ['makerdiff'];
handler.limit = true;

module.exports = handler;