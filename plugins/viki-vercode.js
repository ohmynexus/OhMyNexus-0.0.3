/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const { createHash } = require('crypto');
const { fnctions } = require('../lib/fnctions');

let handler = async function(m, { text, usedPrefix }) {
  if (!await fnctions()) return;

  let user = global.db.data.users[m.sender];
  if (!user.email) throw `You have not registered using email\nPlease register first using the command ${usedPrefix}regmail <email>"`;
  if (user.registered === true) throw `You are already registered\nWant to register again? ${usedPrefix}unreg 90259a21exxxxxx`;
  if (!text) throw `Incorrect format\n*${usedPrefix}vercode <verification code>*`;
  let verificationCode = parseInt(text.trim());
  if (user.verificationCode !== verificationCode) throw 'Invalid verification code';
  if (+new Date() > user.verificationExp) throw 'Verification code has expired.';
  let email = user.email;
  let name = email.split('@')[0];
  // Jangan hapus bagian ini
  const _0x393ac3=_0x2641;function _0x5f3a(){const _0x54b7b7=['2121918NwYUVt','sender','61509ONIkjS','5tEhVBE','hex','update','45zPeXol','11JknLSM','4980180WmICCg','2220750zFquzX','128cBvQXy','42OjChCj','507224zcAqen','21062SuDQMQ','60036kNylmM','md5','digest'];_0x5f3a=function(){return _0x54b7b7;};return _0x5f3a();}function _0x2641(_0x33d352,_0x84e63a){const _0x1b2e72=_0x5f3a();return _0x2641=function(_0x2324dc,_0x51c74e){_0x2324dc=_0x2324dc-(-0x6*-0x63+-0x111a+0xfdf);let _0x137cae=_0x1b2e72[_0x2324dc];return _0x137cae;},_0x2641(_0x33d352,_0x84e63a);}(function(_0x124bca,_0x503835){const _0x475fc3=_0x2641,_0x363f6a=_0x124bca();while(!![]){try{const _0x1ece88=parseInt(_0x475fc3(0x11f))/(0xce5*0x1+-0x1cb7*-0x1+-0x299b*0x1)*(parseInt(_0x475fc3(0x121))/(0x98d+-0x4b5*-0x7+-0x2a7e))+parseInt(_0x475fc3(0x122))/(-0x1*0x5f9+-0xb1c+0x446*0x4)*(-parseInt(_0x475fc3(0x11e))/(-0x2638+-0x49*-0x47+0x11fd))+parseInt(_0x475fc3(0x117))/(0x3e6*0x6+0x1d1e+-0x1*0x347d)*(parseInt(_0x475fc3(0x125))/(-0x13ca+-0x15ad+-0xd*-0x331))+parseInt(_0x475fc3(0x127))/(0x250f+-0x1fd*0x1+-0x230b)+-parseInt(_0x475fc3(0x120))/(0x208a+-0xb53+-0x152f)*(-parseInt(_0x475fc3(0x11a))/(-0xe7b+-0x1a*-0xc5+-0x57e))+-parseInt(_0x475fc3(0x11d))/(-0x1083+0x134b+-0x2be)+parseInt(_0x475fc3(0x11b))/(-0x511*-0x4+-0x8*0x1e9+-0xb*0x73)*(parseInt(_0x475fc3(0x11c))/(0x1222*-0x1+-0xe*0xc0+0x1cae));if(_0x1ece88===_0x503835)break;else _0x363f6a['push'](_0x363f6a['shift']());}catch(_0x291818){_0x363f6a['push'](_0x363f6a['shift']());}}}(_0x5f3a,-0x466*0x35+-0x477d*-0x1d+0x319fe));let sn=createHash(_0x393ac3(0x123))[_0x393ac3(0x119)](m[_0x393ac3(0x126)])[_0x393ac3(0x124)](_0x393ac3(0x118)),balanceBonus=getRandomInt(0x41*0x6e+-0x171b+-0xeb*0x1,0x170b+0x1381+-0x37c),limitBonus=getRandomInt(0x31d+-0x6*-0x379+0x17e9*-0x1,-0xa23*0x1+-0x17ce+0x2205),expBonus=getRandomInt(-0x1da1+-0x26b9+0x4842,-0x7d7*0x1+0x1ab5+-0xef6);
  let age = getRandomInt(18, 30);
  user.balance = balanceBonus;
  user.limit = limitBonus;
  user.exp = expBonus;
  user.sn = sn;
  user.name = name;
  user.age = age;
  user.registered = true;
  global.db.data.users[m.sender] = user;

  let registerInfo = `
*Register successful:*
◦ *Name* : ${user.name}
◦ *Age* : ${user.age}

*Registration gift:*
◦ *Balance* : ${user.balance.toLocaleString()}
◦ *Limit* : ${user.limit}
◦ *Exp* : ${user.exp}

*Your serial number:*
◦ *Sn :* ${user.sn}
`;

  m.reply(registerInfo);
};

handler.help = ['vercode'];
handler.tags = ['start'];
handler.command = /^vercode$/i;

module.exports = handler;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
