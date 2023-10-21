/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Code by: Ages
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let levelling = require('../lib/levelling')
const canvafy = require("canvafy");
let fetch = require("node-fetch");
const canvacord = require("canvacord")

let handler = async (m, { conn, command }) => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/levelup.jpg");
    // Jangan hapus bagian ini
    function _0x1293(_0x5498eb,_0x32e1a0){const _0x2c2229=_0x138c();return _0x1293=function(_0x528590,_0x55c281){_0x528590=_0x528590-(-0x1dfa+0x1b34+0x3a1);let _0x2178ed=_0x2c2229[_0x528590];return _0x2178ed;},_0x1293(_0x5498eb,_0x32e1a0);}const _0x1c5fba=_0x1293;(function(_0xb35426,_0x5bed21){const _0x3ccc54=_0x1293,_0x170045=_0xb35426();while(!![]){try{const _0x1d0616=parseInt(_0x3ccc54(0xdc))/(0x661+0x1f71+-0x15*0x1cd)*(-parseInt(_0x3ccc54(0xdb))/(0x23a6+0x7df+-0x2b83))+-parseInt(_0x3ccc54(0xe1))/(0x1*0xbc3+0x1*-0xa86+-0x13a)*(-parseInt(_0x3ccc54(0xe0))/(0x1317+0x1cf*0x4+0x3*-0x8c5))+-parseInt(_0x3ccc54(0xde))/(0x102b*-0x1+0xf*0x4d+0xbad)*(-parseInt(_0x3ccc54(0xe4))/(0x1dcf+-0xc2+-0x1d07))+parseInt(_0x3ccc54(0xe5))/(-0x15b2+-0x1*0x113e+-0x1db*-0x15)*(-parseInt(_0x3ccc54(0xdf))/(-0x12ba*0x1+0xad1+0x1*0x7f1))+-parseInt(_0x3ccc54(0xe7))/(-0xb6c+0x5e*-0x9+-0x1*-0xec3)+-parseInt(_0x3ccc54(0xe6))/(-0x1*0x19df+-0x9b*0x34+0x7*0x833)+parseInt(_0x3ccc54(0xdd))/(0xe04+-0x2*0xaa6+0x753);if(_0x1d0616===_0x5bed21)break;else _0x170045['push'](_0x170045['shift']());}catch(_0x3ffb7c){_0x170045['push'](_0x170045['shift']());}}}(_0x138c,0xcac67+-0x5e043*-0x1+-0xc3458));let pp=await(await fetch(ppUrl))[_0x1c5fba(0xe2)](),curr=user[_0x1c5fba(0xe3)]-min,minxp=max-user[_0x1c5fba(0xe3)];function _0x138c(){const _0x7cc0ae=['496340BWjPIY','4987800fNOlMX','2kRNBvi','178721wsnoMp','13025155YDViCy','304425xhwMeV','1802384phLGhq','227676MXlldy','3PPiCVl','buffer','exp','18Jbivad','7jFNzaG'];_0x138c=function(){return _0x7cc0ae;};return _0x138c();}
    let textinfo = `*❑ L E V E L - U P*

Level *➠ ${user.level}*
Less than *➠ ${max - user.exp}(XP) more!*`.trim()
    const rank = new canvacord.Rank()
            .setAvatar(pp)
            .setCurrentXP(curr)
            .setLevel(user.level, "RANK", true)
            .setRank(user.level, "LEVEL", true)
            .setLevelColor("#2B2E35", "#2B2E35")
            .setRankColor("#FFFFFF", "#6636E5")
            .setRequiredXP(xp)
            .setStatus("streaming")
            .setProgressBar("#6636E5", "COLOR")
            .setProgressBarTrack("#FFFFFF")
            .setUsername(user.name)
            .setDiscriminator(`0001`)
            .setFontSize(1.5)
        
        rank.build()
            .then(data => {
                conn.sendFile(m.chat, data, "RankCard.png", textinfo, m)
            })
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
	const levelUp = await new canvafy.LevelUp()
    .setAvatar(pp)
    .setBackground("image", "https://telegra.ph/file/3f02ef79a183e515398c7.jpg")
    .setUsername(user.name)
    .setBorder("#000000")
    .setAvatarBorder("#ff0000")
    .setOverlayOpacity(0.7)
    .setLevels(before,user.level)
    .build();
   let ages = `*❑ L E V E L - UP*

From: *[ ${before} ]* ➠ *[ ${user.level} ]*
Congrulations, you have leveled up!🎉🎉`.trim()
                await conn.sendFile(m.chat, levelUp, 'lvlup.jpg', ages, m)
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)|lvl(|up)$/i

module.exports = handler