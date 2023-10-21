/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const cheerio = require('cheerio');
const { fnctions } = require("../lib/fnctions");

const headers = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
};

const moewallsSearch = async function (query) {
  const { data } = await axios.get('https://moewalls.com/?s=' + query);
  const $ = cheerio.load(data);
  let result = [];
  const all = $('#primary > div > div > ul').each(function (a, b) {
    $(b)
      .find('li > article .entry-featured-media > a')
      .each(function () {
        result.push({
          title: $(this).attr('title'),
          thumb: $(this).find('div > img').attr('src'),
          url: $(this).attr('href'),
        });
      });
  });
  return result;
};

// Jangan hapus bagian ini
(function(_0x5e0985,_0xf9bd08){const _0x207ff3=_0xd254,_0x1c3627=_0x5e0985();while(!![]){try{const _0xd6d360=-parseInt(_0x207ff3(0x1d6))/(-0x17a5+0xced+0xab9)*(parseInt(_0x207ff3(0x1ba))/(-0x145*-0x3+-0x9*-0x2cd+-0x2f*0x9e))+parseInt(_0x207ff3(0x1d2))/(0x1*-0xa63+0x1*-0x2bb+-0x1*-0xd21)+parseInt(_0x207ff3(0x1cd))/(0xafe*0x3+-0x19a9+0x1*-0x74d)+-parseInt(_0x207ff3(0x1c3))/(-0xb4e*-0x3+0x2446*-0x1+-0x1*-0x261)*(-parseInt(_0x207ff3(0x1b4))/(0x15f9*0x1+-0x221+-0x13d2))+-parseInt(_0x207ff3(0x1ca))/(0xde0+-0x16c7+0x12*0x7f)*(parseInt(_0x207ff3(0x1da))/(0x161b+0x476*0x3+-0x2375))+parseInt(_0x207ff3(0x1db))/(-0xa9d+0x5*0x4b3+-0xcd9)*(parseInt(_0x207ff3(0x1b6))/(0x1bec+0x481+-0x2063))+parseInt(_0x207ff3(0x1c5))/(0x1*0x1fc5+0xb93*-0x1+-0x1427)*(parseInt(_0x207ff3(0x1c0))/(0x1cc1+-0x3e1*-0x1+-0x2096));if(_0xd6d360===_0xf9bd08)break;else _0x1c3627['push'](_0x1c3627['shift']());}catch(_0x2edfff){_0x1c3627['push'](_0x1c3627['shift']());}}}(_0x2f53,0x23eaf*0x1+0x1*-0xf22+0xb*0x22a3));function _0xd254(_0x229d87,_0x633423){const _0x1440c9=_0x2f53();return _0xd254=function(_0x3548d8,_0x4c5441){_0x3548d8=_0x3548d8-(0x249e+0x24f6+0xa0*-0x73);let _0x16e474=_0x1440c9[_0x3548d8];return _0x16e474;},_0xd254(_0x229d87,_0x633423);}const moewallsUrl=async function(_0x23bf42){const _0x563965=_0xd254,_0x5e7afd={'pCyJJ':function(_0x13882f,_0x105c49){return _0x13882f(_0x105c49);},'KSgCV':function(_0x1ebd45,_0x2f4f2c){return _0x1ebd45(_0x2f4f2c);},'JRJWl':_0x563965(0x1d3)+_0x563965(0x1bd),'dxRbD':_0x563965(0x1c2)+_0x563965(0x1d8),'eNSpq':_0x563965(0x1bf)+_0x563965(0x1cf)+_0x563965(0x1d4)+_0x563965(0x1c9)+_0x563965(0x1b9)+_0x563965(0x1b8),'yXWvH':_0x563965(0x1d1)+_0x563965(0x1d5),'lRByz':_0x563965(0x1c1)},{data:_0x587d48}=await axios[_0x563965(0x1d0)](_0x23bf42,{'headers':headers}),_0x161535=cheerio[_0x563965(0x1d9)](_0x587d48),_0x3a2f35={};_0x5e7afd[_0x563965(0x1bb)](_0x161535,_0x5e7afd[_0x563965(0x1c8)])[_0x563965(0x1c7)](_0x5e7afd[_0x563965(0x1c4)])[_0x563965(0x1d7)](function(_0x419145,_0x5f38c8){const _0x29bbc2=_0x563965,_0x2ef4ac=_0x5e7afd[_0x29bbc2(0x1cc)](_0x161535,_0x5f38c8)[_0x29bbc2(0x1c7)]('i')[_0x29bbc2(0x1be)]();if(_0x2ef4ac)_0x3a2f35[_0x2ef4ac]=_0x5e7afd[_0x29bbc2(0x1bb)](_0x161535,_0x5f38c8)[_0x29bbc2(0x1be)]()[_0x29bbc2(0x1bc)](_0x2ef4ac,'')[_0x29bbc2(0x1b5)]();});const _0x239c23=_0x5e7afd[_0x563965(0x1cc)](_0x161535,_0x5e7afd[_0x563965(0x1ce)])[_0x563965(0x1c7)](_0x5e7afd[_0x563965(0x1c6)])[_0x563965(0x1b7)](_0x5e7afd[_0x563965(0x1cb)]);return{..._0x3a2f35,'preview':_0x239c23};};function _0x2f53(){const _0x16172b=['682104gZxRFj','#secondary','\x20div\x20>\x20div','o\x20>\x20source','73257tWjRBy','each','\x20li','load','48424Pjegkj','997929hcswSc','6hoomtK','trim','10fMoTAk','attr','sive','yer_respon','12iIMESV','KSgCV','replace','\x20>\x20div','text','#content\x20>','24VQpYag','src','div\x20>\x20ul\x20>','1075885GHXyRw','dxRbD','1098911yLJaUf','yXWvH','find','JRJWl','\x20>\x20div.pla','119MFZgzX','lRByz','pCyJJ','119988wXYlMh','eNSpq','\x20article\x20>','get','div\x20>\x20vide'];_0x2f53=function(){return _0x16172b;};return _0x2f53();}

const handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .meowalls cat';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
    const searchResults = await moewallsSearch(text);

    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      const urlInfo = await moewallsUrl(firstResult.url);

      if (urlInfo.preview) {
        const isImage = urlInfo.preview.endsWith('.jpg') || urlInfo.preview.endsWith('.jpeg') || urlInfo.preview.endsWith('.png');
        const isVideo = urlInfo.preview.endsWith('.mp4') || urlInfo.preview.endsWith('.webm');

        if (isImage) {
          conn.sendFile(m.chat, urlInfo.preview, 'meowalls.jpg', '', m);
        } else if (isVideo) {
          conn.sendFile(m.chat, urlInfo.preview, 'meowalls.mp4', '', m);
        } else {
          conn.reply(m.chat, 'Media not supported.', m);
        }
      } else {
        conn.reply(m.chat, 'Media not found.', m);
      }
    } else {
      throw 'No results for this';
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, `Upps Error ${error}`, m);
  }
};

handler.help = ['meowalls'];
handler.tags = ['tools'];
handler.register = true;
handler.limit = true;
handler.command = /^(meowalls)$/i;

module.exports = handler;