/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let axios = require('axios')

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Example*: .twitterstalk username', m)

 			conn.chatRead(m.chat)
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			})

    axios.get(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${global.lolkey}`)
        .then((res) => {
            let { name, screen_name, description, profile_picture, followers, following, tweet, joined } = res.data.result

            let caption = `
Username: @${screen_name}
Nama: ${name}
Deskripsi: ${description}
Followers: ${followers}
Following: ${following}
Jumlah tweet: ${tweet}
Bergabung sejak: ${joined}
            `

            conn.sendFile(m.chat, profile_picture, 'profile.jpg', caption, m)
        })
        .catch((err) => {
            console.log(err)
            conn.reply(m.chat, 'There was an error fetching Twitter data', m)
        })
}
handler.help = ['twitterstalk']
handler.tags = ['internet']
handler.command = /^twitterstalk$/i
handler.register = true
handler.limit = true

module.exports = handler