const { fnctions } = require("../lib/fnctions");

function formatBalance(balance) {
  const suffixes = ['', 'k', 'm', 'b', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd', 'U', 'D', 'Td', 'qd', 'Qd', 'sd', 'Sd', 'od', 'nd', 'V', 'Uv', 'Dv', 'Tv', 'qv', 'Qv', 'sv', 'Sv', 'ov', 'nv', 'T', 'UT', 'DT', 'TT', 'qt', 'QT', 'st', 'ST', 'ot', 'nt'];
  const suffixIndex = Math.floor(Math.log10(balance) / 3);
  const suffix = suffixes[suffixIndex];
  const scaledBalance = balance / Math.pow(10, suffixIndex * 3);
  return scaledBalance.toFixed(2) + suffix;
}

let handler = async (m, { conn, participants }) => {
  if (!await fnctions()) return;

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  let balance = Object.entries(global.db.data.users).sort((a, b) => b[1].balance - a[1].balance);
  // Jangan hapus bagian ini
  function _0x1200(_0x392ee2,_0x46139d){const _0x280391=_0x5b1a();return _0x1200=function(_0x353870,_0x32c05c){_0x353870=_0x353870-(-0x295*0xe+-0x3e1*0x1+-0x5d2*-0x7);let _0x51323a=_0x280391[_0x353870];return _0x51323a;},_0x1200(_0x392ee2,_0x46139d);}const _0x290992=_0x1200;(function(_0x133eb9,_0x5863f7){const _0x2e604e=_0x1200,_0xe610f5=_0x133eb9();while(!![]){try{const _0x5d9630=-parseInt(_0x2e604e(0xbf))/(-0x2257+0x1b12+0x85*0xe)+parseInt(_0x2e604e(0xc3))/(-0x2b1*0x7+0x129d+0x3c)*(-parseInt(_0x2e604e(0xc5))/(-0x34e+0x1ca3+0x39e*-0x7))+-parseInt(_0x2e604e(0xc2))/(0x2482+0x2*-0x12db+0x138)*(parseInt(_0x2e604e(0xb8))/(0xe0+-0x29*-0x1+-0x104))+-parseInt(_0x2e604e(0xc0))/(0x1991+-0x516+0x1475*-0x1)+-parseInt(_0x2e604e(0xc1))/(0x750+0x4*0x518+0x1*-0x1ba9)*(parseInt(_0x2e604e(0xb9))/(-0x267b+-0x140b*-0x1+0x1278))+parseInt(_0x2e604e(0xbd))/(0x18e0+-0x482+-0x1455)*(parseInt(_0x2e604e(0xb7))/(0x6c3*-0x2+-0xbc5+0x1*0x1955))+parseInt(_0x2e604e(0xbc))/(-0x2*-0xe55+-0xdd+-0x1bc2)*(parseInt(_0x2e604e(0xbe))/(0x8*0x7d+-0x16bd+0x12e1));if(_0x5d9630===_0x5863f7)break;else _0xe610f5['push'](_0xe610f5['shift']());}catch(_0x46c548){_0xe610f5['push'](_0xe610f5['shift']());}}}(_0x5b1a,-0x8325c+0x8560b+0xecd5f));let getUser=balance[_0x290992(0xc4)](_0x156ffc=>_0x156ffc[0xa1*-0xa+0x488+0x1c2]),show=Math[_0x290992(0xbb)](-0x1cc0+0x56*-0x4d+0x36a8,balance[_0x290992(0xba)]),rankbalance=balance[_0x290992(0xc4)](([_0x5a59d4,_0x2c418f])=>_0x5a59d4);function _0x5b1a(){const _0x4323a7=['min','2959UEdUkT','353538eGvKlW','215196XnEpgy','585097QOIluH','2559582GimnJM','35TqmkeK','1277548GcedWX','10dILuFN','map','914994YVoOsj','90NTqKXe','5xkuvNN','2147568qEGdsr','length'];_0x5b1a=function(){return _0x4323a7;};return _0x5b1a();}
  let teks = `[ 🌐 ] *T O P - G L O B A L*\n`;
  teks += `[ 🏆 ] *You:* *${rankbalance.indexOf(m.sender) + 1}* of *${getUser.length}*\n\n`;
  teks += balance
    .slice(0, show)
    .map(([user, data], i) => 
      (i + 1) + '. @' + user.split`@`[0] + '\n' +
      '   ◦ *Balance* : *' + formatBalance(data.balance) + '*\n' +
      '   ◦ *Level* : *' + data.level + '*'
    )
    .join('\n');
  teks += `\n\n${global.footer}`;
  m.reply(teks);
};

handler.command = ["topglobal"];
handler.tags = ["xp", "main"];
handler.help = ["topglobal"];
handler.register = true;

module.exports = handler;
