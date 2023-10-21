let handler = async (m, { conn, usedPrefix, command, text }) => { 
    let memek = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/IMG_20230430_192107_543.jpg'
    let anu =`
🐱 *${command}* ${command.replace('cek', '').toUpperCase()} LEVEL *${Math.floor(Math.random() * 101)}%*`
    m.reply(anu)
    }

    handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => v + 'cek')
    handler.tags = ['kerang']
    handler.command = /^(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)cek/i
    handler.owner = false
    handler.mods = false
    handler.premium = false
    handler.group = false
    handler.private = false
    
    handler.admin = false
    handler.botAdmin = false
    
    handler.register = true
    handler.limit = true
    
    handler.fail = null
    
    module.exports = handler