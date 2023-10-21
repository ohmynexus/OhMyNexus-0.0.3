let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) {
            conn.sendMessage(m.chat, {
                text: stdout,
                contextInfo: {
                    externalAdReply: {
                        title: `${global.sazumiviki_title}`,
                        body: "Your Speedtest results",
                        thumbnailUrl: "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230605_203448.jpg",
                        sourceUrl: "https://instagram.com/moe.sazumiviki",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            })
        }
        if (stderr.trim()) {
            m.reply(stderr)
        }
    }
}

handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest|ookla)$/i
handler.register = true
handler.limit = true
handler.premium = false

module.exports = handler