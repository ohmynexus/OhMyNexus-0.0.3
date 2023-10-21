/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Code by: Ages
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
const canvacord = require("canvacord")
let fetch = require("node-fetch");

module.exports = {
	async before(m) {
		let user = global.db.data.users[m.sender]
		let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
		let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/levelup.jpg");
        // Jangan hapus bagian ini
        const _0x5c503d=_0x2863;(function(_0x230374,_0x5e1cd6){const _0x588c42=_0x2863,_0x419e4b=_0x230374();while(!![]){try{const _0x24b047=parseInt(_0x588c42(0x161))/(-0x6*0x1bb+-0x1*-0xbf6+-0x193)+parseInt(_0x588c42(0x166))/(-0x17e7+0x144*-0xe+-0x1*-0x29a1)*(parseInt(_0x588c42(0x15f))/(0x9a*0x1c+0x931*-0x2+-0x18d*-0x1))+-parseInt(_0x588c42(0x167))/(0x2629+-0xb62+0x1*-0x1ac3)+parseInt(_0x588c42(0x168))/(0x20a5*0x1+0x2695+0x4735*-0x1)+parseInt(_0x588c42(0x162))/(-0xa4+-0x1266+0x2*0x988)+parseInt(_0x588c42(0x169))/(0x8ee+0x6d*-0x2b+-0x4*-0x25a)+-parseInt(_0x588c42(0x16a))/(0x2221+0x69b*0x1+-0x5*0x824)*(-parseInt(_0x588c42(0x165))/(-0x128*-0x4+-0x24ff+0x2068*0x1));if(_0x24b047===_0x5e1cd6)break;else _0x419e4b['push'](_0x419e4b['shift']());}catch(_0x2443e6){_0x419e4b['push'](_0x419e4b['shift']());}}}(_0xc7b9,-0x91f84+0x6ab72+0x76157*0x2));let pp=await(await fetch(ppUrl))[_0x5c503d(0x164)](),curr=user[_0x5c503d(0x163)]-min,minxp=max-user[_0x5c503d(0x163)];if(!user[_0x5c503d(0x160)+'p'])return!(-0x1e13+-0x3*-0x4b5+-0x4*-0x3fd);function _0x2863(_0x3b3bff,_0x273cdd){const _0x1c16a0=_0xc7b9();return _0x2863=function(_0x490b17,_0xafbcd3){_0x490b17=_0x490b17-(-0x16ff+0x1819+0x3*0x17);let _0x40ec4a=_0x1c16a0[_0x490b17];return _0x40ec4a;},_0x2863(_0x3b3bff,_0x273cdd);}function _0xc7b9(){const _0x4b07b3=['3145092IDcbVZ','exp','buffer','9FzMNeT','6iYTnYq','6169280MsxtSZ','8710VYxGmg','2598638tkhnAq','3204680cJoqgu','548208YfPTWV','autolevelu','502925sOGzHu'];_0xc7b9=function(){return _0x4b07b3;};return _0xc7b9();}
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
		if (before !== user.level) {
			let name = user.name
			let chating = `*❑ L E V E L - UP*

From: *[ ${before} ]* ➠ *[ ${user.level} ]*
Congrulations, you have leveled up!🎉🎉`.trim()
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
                conn.sendFile(m.chat, data, "RankCard.png", chating, m)
                console.log(color(chating, 'yellow'))
            })
		}
	}
}