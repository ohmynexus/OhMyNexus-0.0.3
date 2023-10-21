let { mediafiredl } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/xxxxxxxxxx`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
• Name: ${filename}
• Size: ${filesizeH}
• Extension: ${ext}
• Uploaded: ${aploud}
`
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
  } catch (error) {
    console.log(error)
    m.reply('🐱 Sorry, I couldn\'t process your request.')
  }
}

handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

module.exports = handler