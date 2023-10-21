/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const { ttStalk } = require('api-dylux');
const { fnctions } = require("../lib/fnctions");
const handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  if (!text) {
    throw '*Example*: .ttstalk ohmynexus_';
  }
// Jangan hapus bagian ini
function _0x7e2c(_0x31ce27,_0x328dad){const _0x43707f=_0x4e05();return _0x7e2c=function(_0x13386c,_0x3eaf28){_0x13386c=_0x13386c-(-0x865*0x2+-0x1273+0x2474);let _0x121d27=_0x43707f[_0x13386c];return _0x121d27;},_0x7e2c(_0x31ce27,_0x328dad);}function _0x4e05(){const _0x5c22f5=['2cpgCIL','18400085txNcab','244028nKqFmr','104CxDewv','65AUnLNO','chat','347137gKNbyN','2984967IHdvsR','36yJyIaP','key','sendMessag','3689229fMvzNz','30BqdOVB','6573822wfjGDC','857896shGjuX','chatRead','trim'];_0x4e05=function(){return _0x5c22f5;};return _0x4e05();}const _0x2ebfe0=_0x7e2c;(function(_0x515a1d,_0x10e239){const _0x3ea528=_0x7e2c,_0x22aaab=_0x515a1d();while(!![]){try{const _0x135c6a=parseInt(_0x3ea528(0x141))/(0x6*-0x2b7+0x168a+-0x63f)*(-parseInt(_0x3ea528(0x13e))/(0x2109+0x158*-0x19+0x91))+-parseInt(_0x3ea528(0x13b))/(-0x8af+-0x1780+0x2032)+-parseInt(_0x3ea528(0x143))/(-0x52*0xc+0x6cd+0x3*-0xfb)*(parseInt(_0x3ea528(0x145))/(0x1d39+-0x1b9b+-0x199))+-parseInt(_0x3ea528(0x13d))/(0x12*-0x106+0x1a6f*0x1+-0x7fd*0x1)+-parseInt(_0x3ea528(0x147))/(0x190+0x7f*-0x1d+0xa*0x149)*(-parseInt(_0x3ea528(0x144))/(-0x2*-0xe9+0xb79+-0x2a7*0x5))+parseInt(_0x3ea528(0x137))/(0xc7*0x22+0x807+-0x226c)*(-parseInt(_0x3ea528(0x13c))/(0x91*-0x44+-0x1f77+0x4605))+parseInt(_0x3ea528(0x142))/(0xb31+-0x1fd*-0x13+0xf*-0x343)*(parseInt(_0x3ea528(0x138))/(0xaa2+-0x1*0x8c9+-0x1cd));if(_0x135c6a===_0x10e239)break;else _0x22aaab['push'](_0x22aaab['shift']());}catch(_0x1bfc59){_0x22aaab['push'](_0x22aaab['shift']());}}}(_0x4e05,0x35*-0x5334+-0x127058+0x2e3768*0x1),conn[_0x2ebfe0(0x13f)](m[_0x2ebfe0(0x146)]),conn[_0x2ebfe0(0x13a)+'e'](m[_0x2ebfe0(0x146)],{'react':{'text':'🕒','key':m[_0x2ebfe0(0x139)]}}));const username=text[_0x2ebfe0(0x140)](),result=await ttStalk(username);

  if (!result || !result.profile) {
    throw '🐱 User not found.';
  }

  const caption = `*🐱 Your tiktok-stalk results*\n\n\*◦ Username:* ${result.username}\n*◦ Name:* ${result.name}\n*◦ Followers:* ${result.followers}\n*◦ Following:* ${result.following}\n*◦ Description:* ${result.desc}`;

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
        title: `${global.namebot}`,
        body: "T I K T O K - S T A L K",
        thumbnailUrl: result.profile,
        sourceUrl: `${global.sourceUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  });
};

handler.help = ['ttstalk', 'tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['tools']
handler.command = /^(ttstalk|tiktokstalk)$/i
handler.premium = false
handler.register = true
handler.limit = true

module.exports = handler;