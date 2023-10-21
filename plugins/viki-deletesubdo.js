/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/


const axios = require('axios');
const config = require('../config.json');

const handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw '*Example:* .dsubdo momo';
  }

  const subdomainName = args[0].trim();
  const domain = `${config.cfdomain}`;
  const cloudflareAPIUrl = `https://api.cloudflare.com/client/v4/zones/${config.cfzoneid}/dns_records`;

  try {
    const response = await axios.get(cloudflareAPIUrl, {
      params: {
        type: 'A',
        name: `${subdomainName}.${domain}`
      },
      headers: {
        'Authorization': `Bearer ${config.cftoken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.result.length === 0) {
      throw `Subdomain ${subdomainName}.${domain} not found.`;
    }

    const recordId = response.data.result[0].id;
    const deleteUrl = `${cloudflareAPIUrl}/${recordId}`;

    // Jangan hapus bagian ini
    const _0x502860=_0x2810;function _0x2810(_0x291480,_0x5d06ee){const _0x52e348=_0x3232();return _0x2810=function(_0x2fe48b,_0x4bfe83){_0x2fe48b=_0x2fe48b-(-0x1*0x105b+-0x14b*-0x5+0xbce);let _0x244452=_0x52e348[_0x2fe48b];return _0x244452;},_0x2810(_0x291480,_0x5d06ee);}(function(_0x7a5a82,_0x4ad3fa){const _0xe63536=_0x2810,_0x455984=_0x7a5a82();while(!![]){try{const _0x4f5ae9=parseInt(_0xe63536(0x1f1))/(0xafd+0xf+-0xb0b)+-parseInt(_0xe63536(0x1f2))/(0x8ad+-0x2510+0x1c65*0x1)+-parseInt(_0xe63536(0x1f6))/(0x247d+-0x1*0x22eb+0x18f*-0x1)*(-parseInt(_0xe63536(0x1f7))/(0x1b04+-0xf*0xf3+-0xcc3*0x1))+parseInt(_0xe63536(0x1f3))/(-0x142d+0x1ce3+-0x8b1)+-parseInt(_0xe63536(0x1ee))/(-0x1*0x236a+0xac0+-0x9e*-0x28)*(parseInt(_0xe63536(0x1f5))/(0x2104+-0x33b*0x1+-0x1dc2))+parseInt(_0xe63536(0x1ef))/(0x23a9+0x207f+-0x1108*0x4)*(-parseInt(_0xe63536(0x1ed))/(-0xdf8+-0x1031+0x1e32))+parseInt(_0xe63536(0x1eb))/(0x97c*0x4+0x5f1*0x6+-0x498c);if(_0x4f5ae9===_0x4ad3fa)break;else _0x455984['push'](_0x455984['shift']());}catch(_0x180bf7){_0x455984['push'](_0x455984['shift']());}}}(_0x3232,-0x2b9*-0x381+-0x2c85c+0x3*0x8e09));function _0x3232(){const _0x2e3edc=['855408UNGHsJ','applicatio','655330oRaMHJ','528862NTWNvJ','1002180YovXaH','cftoken','7oSrgSq','197511OzFiNB','28lrZSOS','n/json','Bearer\x20','5755990qqELhr','delete','18oWVdxs','5172078ylpUJD'];_0x3232=function(){return _0x2e3edc;};return _0x3232();}const deleteResponse=await axios[_0x502860(0x1ec)](deleteUrl,{'headers':{'Authorization':_0x502860(0x1ea)+config[_0x502860(0x1f4)],'Content-Type':_0x502860(0x1f0)+_0x502860(0x1f8)}});

    if (deleteResponse.data.success) {
      m.reply(`Subdomain *${subdomainName}.${domain}* has been deleted.`);
    } else {
      throw '🐱 Upps Erorr';
    }
  } catch (error) {
    console.error(error);
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['dsubdo'];
handler.tags = ['tools'];
handler.owner = true;
handler.command = /^(dsubdo)$/i;

module.exports = handler;
