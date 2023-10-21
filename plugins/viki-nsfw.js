/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fetch = require('node-fetch');
const { fnctions } = require('../lib/fnctions');

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!await fnctions()) return;
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });


  // Jangan hapus bagian ini
  function _0x58ac(_0x8b4153,_0x561b72){const _0x5374a7=_0x4093();return _0x58ac=function(_0x570288,_0x47011c){_0x570288=_0x570288-(0x1d23*0x1+-0x526+-0x170b);let _0x49667e=_0x5374a7[_0x570288];return _0x49667e;},_0x58ac(_0x8b4153,_0x561b72);}const _0x597660=_0x58ac;function _0x4093(){const _0x563eb3=['sender','32060iwLpZI','9wkEQgo','22900hzmtIi','data','2760741wkxEOG','1048zXLtrK','1585JIhjAK','685ORaaPG','63858xZrNXL','age','9535088YcUkvP','users','7944307vdmjzZ'];_0x4093=function(){return _0x563eb3;};return _0x4093();}(function(_0x1a97a9,_0x4de659){const _0x492fb9=_0x58ac,_0x2dd7c8=_0x1a97a9();while(!![]){try{const _0x2b45fa=parseInt(_0x492fb9(0xfb))/(-0x1367*-0x1+-0x1c82+0x91c)*(parseInt(_0x492fb9(0xfa))/(0x153b+0xde4+-0x231d))+-parseInt(_0x492fb9(0xf9))/(0x100e+-0x295*0xa+-0x9c7*-0x1)+-parseInt(_0x492fb9(0xf7))/(0x44d*0x1+-0x9f5*0x1+0x5ac)+parseInt(_0x492fb9(0xfc))/(-0x9ab+-0x1*0x1b22+0x24d2)*(-parseInt(_0x492fb9(0xfd))/(-0x13*-0x13d+0xb*0x347+-0x3b8e))+parseInt(_0x492fb9(0xf3))/(-0x1*-0x22a3+0x7*0x3f4+0xf92*-0x4)+parseInt(_0x492fb9(0xff))/(-0x9ad*-0x2+0x45*-0x5b+-0x1f*-0x2b)+-parseInt(_0x492fb9(0xf6))/(0x83*-0x1a+0x23e*-0xa+-0x23c3*-0x1)*(parseInt(_0x492fb9(0xf5))/(0x206+0x1879+-0x1a75*0x1));if(_0x2b45fa===_0x4de659)break;else _0x2dd7c8['push'](_0x2dd7c8['shift']());}catch(_0x10c3a3){_0x2dd7c8['push'](_0x2dd7c8['shift']());}}}(_0x4093,-0x867d0+0xec77f+0x5605b));let user=global['db'][_0x597660(0xf8)][_0x597660(0xf2)][m[_0x597660(0xf4)]],age=user[_0x597660(0xfe)];

  if (age < 18) {
    return m.reply('Access is locked, you are under 18 years old');
  } 

  let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error';
  conn.sendFile(m.chat, json.url, 'img.jpg', `Here your image ${command}`, m);
};

handler.help = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
handler.command = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
handler.tags = ['nsfw'];
handler.group = false;
handler.premium = true;
handler.level = 3;
handler.register = true;

module.exports = handler;
