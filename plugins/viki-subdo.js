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
  if (args.length !== 2) {
    throw '*Example:* .csubdo momo 192.168.1.100';
  }

  const subdomainName = args[0].trim();
  const ipAddress = args[1].trim();
  const domain = `${config.cfdomain}`;
  const cloudflareAPIUrl = `https://api.cloudflare.com/client/v4/zones/${config.cfzoneid}/dns_records`;

  try {
    const response = await axios.post(cloudflareAPIUrl, {
      type: 'A',
      name: `${subdomainName}.${domain}`,
      content: ipAddress,
      ttl: 1,
      priority: 10,
      proxied: false,
    }, {
      headers: {
        'Authorization': `Bearer ${config.cftoken}`,
        'Content-Type': 'application/json',
      },
    });

// Jangan hapus bagian ini
var _0xcf675c=_0x42c8;function _0x42c8(_0x47d28e,_0x595a71){var _0x9edecc=_0x197a();return _0x42c8=function(_0x5b1200,_0x47c13c){_0x5b1200=_0x5b1200-(0x162f+-0x3*0x1e6+0x34*-0x4f);var _0x18fca8=_0x9edecc[_0x5b1200];return _0x18fca8;},_0x42c8(_0x47d28e,_0x595a71);}function _0x197a(){var _0x4dde85=['39pTyetC','Subdomain\x20','16426eKzFcu','success','15265420PRtgCD','42492kAokmb','220RKkkrh','8NtTQTx','428923yMrjRc','1961477SOQuBd','address\x20*','reply','5298561CeYqUY','data','Upps\x20Erorr','*\x20with\x20IP\x20','2101752trewIK','\x20created.','*\x20has\x20been'];_0x197a=function(){return _0x4dde85;};return _0x197a();}(function(_0x404cbf,_0x136815){var _0x2cab99=_0x42c8,_0x403c30=_0x404cbf();while(!![]){try{var _0x170a76=-parseInt(_0x2cab99(0x74))/(-0x1e07+-0x3*0x785+0x3497)+parseInt(_0x2cab99(0x81))/(0x2505+0x6*-0x30d+-0x12b5)*(-parseInt(_0x2cab99(0x7f))/(-0x1281+-0xfb6+-0xd*-0x2a2))+parseInt(_0x2cab99(0x7c))/(0x11f7+-0x17db+-0x6*-0xfc)+-parseInt(_0x2cab99(0x72))/(0x3cc+-0x1*-0xad5+-0xe9c)*(parseInt(_0x2cab99(0x71))/(0x1272+-0x339+-0x3*0x511))+-parseInt(_0x2cab99(0x75))/(-0x3e8+0x9a7*-0x3+0x20e4)+-parseInt(_0x2cab99(0x73))/(-0xeff+-0x21a6+-0x30ad*-0x1)*(parseInt(_0x2cab99(0x78))/(-0x9a*0x28+-0x33*-0xa4+0x5*-0x1b7))+parseInt(_0x2cab99(0x83))/(-0x2a*0x2d+-0x1db9+0x1*0x2525);if(_0x170a76===_0x136815)break;else _0x403c30['push'](_0x403c30['shift']());}catch(_0x13dd5d){_0x403c30['push'](_0x403c30['shift']());}}}(_0x197a,-0x28cad+0x34e*0x19e+0x25405*0x1));if(response[_0xcf675c(0x79)][_0xcf675c(0x82)])m[_0xcf675c(0x77)](_0xcf675c(0x80)+'*'+subdomainName+'.'+domain+(_0xcf675c(0x7b)+_0xcf675c(0x76))+ipAddress+(_0xcf675c(0x7e)+_0xcf675c(0x7d)));else throw _0xcf675c(0x7a);
  } catch (error) {
    console.error(error);
    throw '🐱 Upps Erorr';
  }
};

handler.help = ['csubdo'];
handler.tags = ['tools'];
handler.owner = true;
handler.command = /^(csubdo)$/i;

module.exports = handler;
