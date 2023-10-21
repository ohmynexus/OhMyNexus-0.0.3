const { fnctions } = require("../lib/fnctions");

let handler = async (m, { conn, participants }) => {
  if (!await fnctions()) return;

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let member = participants.map(u => u.id);
  let kontol = {};
  for (let i = 0; i < member.length; i++) {
    if (typeof global.db.data.users[member[i]] != 'undefined' && member[i] != conn.user.jid && member[i] != conn.user.jid.split('@')[0] + '@s.whatsapp.net') {
      kontol[member[i]] = {
        balance: global.db.data.users[member[i]].balance,
        level: global.db.data.users[member[i]].level,
        limit: global.db.data.users[member[i]].limit
      };
    }
  }
  let balance = Object.entries(kontol).sort((a, b) => b[1].balance - a[1].balance);
  let limit = Object.entries(kontol).sort((a, b) => b[1].limit - a[1].limit);
  // Jangan hapus bagian ini
  function _0xceaa(){const _0x45ba34=['1933ZhxXwx','11432950chWenv','length','3321963ECkWoP','8uAshwf','2315499EcZuix','3580766zmLbrv','196VPmxLR','map','min','5710866CTrazL','4OMiRYb','4033595lVhNHI'];_0xceaa=function(){return _0x45ba34;};return _0xceaa();}const _0x3cffdf=_0x369f;(function(_0x493773,_0x36a52b){const _0x4e6e4a=_0x369f,_0x25eeac=_0x493773();while(!![]){try{const _0x589576=parseInt(_0x4e6e4a(0xac))/(0xfe2+0x87a+-0x5*0x4df)*(parseInt(_0x4e6e4a(0xa6))/(-0x23a2*0x1+-0x2bf+0x2663))+parseInt(_0x4e6e4a(0xa4))/(-0x1161*0x1+-0x15f3*0x1+0x2757*0x1)+parseInt(_0x4e6e4a(0xaa))/(0x44a+0xa8d+0x21*-0x73)*(parseInt(_0x4e6e4a(0xab))/(0x269a+0x6*-0x56+-0x2491))+-parseInt(_0x4e6e4a(0xa9))/(0x1369+-0x82*-0x47+-0x53*0xab)+-parseInt(_0x4e6e4a(0xa5))/(-0x5a*0x47+-0x3e*0x1+0x193b)*(-parseInt(_0x4e6e4a(0xb0))/(0x122d+0x1fbe+-0x31e3))+parseInt(_0x4e6e4a(0xaf))/(0x208e+-0x14fe+0x1*-0xb87)+-parseInt(_0x4e6e4a(0xad))/(0xe9d+0x474+-0x1307);if(_0x589576===_0x36a52b)break;else _0x25eeac['push'](_0x25eeac['shift']());}catch(_0x5f31b2){_0x25eeac['push'](_0x25eeac['shift']());}}}(_0xceaa,0xdf*-0xdd9+0x1bb82+0x12c6ba));function _0x369f(_0x6f5fc4,_0x5ebd28){const _0x2fcf53=_0xceaa();return _0x369f=function(_0x30575f,_0x4bdba9){_0x30575f=_0x30575f-(-0x78+0x1*-0x18ae+0x19ca);let _0x14e3c0=_0x2fcf53[_0x30575f];return _0x14e3c0;},_0x369f(_0x6f5fc4,_0x5ebd28);}let rankbalance=balance[_0x3cffdf(0xa7)](_0x189fda=>_0x189fda[0x1714+-0x1*0x15f5+-0x7*0x29]),rankLimit=limit[_0x3cffdf(0xa7)](_0xffb80a=>_0xffb80a[0x7*0xce+-0x2*0x373+0x24*0x9]),isbalance=Math[_0x3cffdf(0xa8)](-0x1*-0x49+0x23df*-0x1+-0x3*-0xbe0,balance[_0x3cffdf(0xae)]);
  let isLimit = Math.min(10, limit.length);
  let teks = `*[ 🚩 ] T O P - L O C A L*\n`;
  teks += `*[ 🏆 ] You : ${rankbalance.indexOf(m.sender) + 1}* of *${member.length}*\n`;
  teks += `*[ 🔥 ] Group : ${await conn.getName(m.chat)}*\n\n`;
  teks += balance.slice(0, isbalance).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + '\n   ◦  *Balance : ' + formatNumber(data.balance) + '*\n   ◦  *Level️ : ' + data.level + '*').join('\n');
  teks += `\n\n${global.footer}`;
  m.reply(teks);
};

handler.command = /^toplokal|toplocal$/i;
handler.tags = ["xp", "main"];
handler.help = ["toplocal"];
handler.register = true;
handler.group = true;

module.exports = handler;

function formatNumber(num) {
  let formatted = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return formatted;
}
