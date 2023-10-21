/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, text, command, usedPrefix, isOwner }) => {
  let image = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/20230805_114236.jpg'
  let caption = ''
  let changelogs = global.db.data.changelog || []

  switch (command) {
    case 'changelog':
    case 'log':
      if (!changelogs.length) return conn.reply(m.chat, 'There are no changelogs yet', m)
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `• ${date}\n${items.map(item => `  ◦ ${item}`).join('\n')}`
      }).join('\n\n')
      conn.reply(m.chat, caption, m, {
        contextInfo: {
          externalAdReply: {
            title: `${global.namebot}`,
            body: "C H A N G E L O G",
            thumbnailUrl: image,
            sourceUrl: `${global.sourceUrl}`,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      })
      break;

    case 'addchangelog':
      if (!isOwner) return m.reply('🐱 Sorry, only the owner can use this command')
      if (!text) return m.reply(`Usage: ${usedPrefix}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      m.reply('🐱 Changelog has been added successfully')
      break;

    case 'rchangelog':
      if (!isOwner) return m.reply('🐱 Sorry, only the owner can use this command')
      // Jangan hapus bagian ini
      function _0x46d9(){const _0x33c9df=['485MGOvUl','5HHuOtH','includes','113442CUkAHi','\x20<text>','3411IvTouP','707530cwFnxE','474670LVFqsC','3875832tkpSli','608smuZsy','13914GxPPQS','findIndex','3371912GeDZzh','reply','rchangelog','11FvDQiV','Usage:\x20'];_0x46d9=function(){return _0x33c9df;};return _0x46d9();}const _0xd5f8e7=_0x2226;function _0x2226(_0x56358c,_0x39b15d){const _0xc38db3=_0x46d9();return _0x2226=function(_0x29e7d3,_0xe99797){_0x29e7d3=_0x29e7d3-(-0x3*0x8eb+0x1c3f+0x1*-0x2e);let _0x4c21b3=_0xc38db3[_0x29e7d3];return _0x4c21b3;},_0x2226(_0x56358c,_0x39b15d);}(function(_0x24d6ff,_0x2dbf6e){const _0xc53a59=_0x2226,_0x3b7dcb=_0x24d6ff();while(!![]){try{const _0x401ea8=-parseInt(_0xc53a59(0x15a))/(0x19a1+0x3*0xadd+0x851*-0x7)*(-parseInt(_0xc53a59(0x15c))/(0x1*0x1d53+0x73*0x3+-0x1eaa))+-parseInt(_0xc53a59(0x15e))/(0x1*-0x1fe3+-0x235e+0x4344)*(-parseInt(_0xc53a59(0x151))/(-0x3b9*0x1+0x129a*0x1+-0xedd))+parseInt(_0xc53a59(0x159))/(-0x1e81+-0x18c7+0x9*0x625)*(-parseInt(_0xc53a59(0x152))/(0x24f2+-0x3*0x5b9+-0x13c1))+parseInt(_0xc53a59(0x160))/(-0x11ce*0x1+-0x711*0x2+0x7*0x491)+-parseInt(_0xc53a59(0x154))/(0x1ff0+0x1d85+0x39d*-0x11)+parseInt(_0xc53a59(0x150))/(0x1*0x5b4+-0x4b5*-0x5+0x10b*-0x1c)+-parseInt(_0xc53a59(0x15f))/(-0xe8c+0x1c5a*-0x1+0xe50*0x3)*(parseInt(_0xc53a59(0x157))/(0x1b8b+-0x2f*0x57+-0xb87));if(_0x401ea8===_0x2dbf6e)break;else _0x3b7dcb['push'](_0x3b7dcb['shift']());}catch(_0x27a5fb){_0x3b7dcb['push'](_0x3b7dcb['shift']());}}}(_0x46d9,0x3fb54+0x21e63*0x3+-0x6b5f7));if(!text)return m[_0xd5f8e7(0x155)](_0xd5f8e7(0x158)+usedPrefix+(_0xd5f8e7(0x156)+_0xd5f8e7(0x15d)));let index=changelogs[_0xd5f8e7(0x153)](_0x29e7d3=>_0x29e7d3[_0xd5f8e7(0x15b)](text));
      if (index === -1) return m.reply('🐱 Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      m.reply('🐱 Changelog has been removed successfully')
      break;

    default:
      m.reply('Unknown command. Use !help to see available commands.')
      break;
  }
}

handler.help = ['changelog', 'log', 'addchangelog', 'rchangelog']
handler.tags = ['info']
handler.premium = false

handler.command = /^(changelog|log|addchangelog|rchangelog)$/i
handler.owner = false

module.exports = handler
