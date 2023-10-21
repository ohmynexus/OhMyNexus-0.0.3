/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'Masukan username nya kak.'
if (!args[1]) throw 'Repo nya mana kak ?'
if (!args[2]) throw 'Masukan nama branch nya kak.'
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
conn.sendFile( m.chat, url, `${args[1]} ${args[2]}.zip`, null, m)

}
handler.help = ['githubdl']
handler.tags = ['tools']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler