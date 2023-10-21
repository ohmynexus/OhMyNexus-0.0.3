const free = 200000
const prem = 400000
const limitfree = 200
const limitprem = 400
const balancefree = 200000
const balanceprem = 400000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastmonthly + 31536000000
  if (new Date - global.db.data.users[m.sender].lastmonthly < 31536000000) throw `You've already claimed, this annual claim\nwait a while ${msToTime(time - new Date())} again`
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].balance += isPrems ? balanceprem : balancefree
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
        conn.reply(m.chat, `🐱 *Congratulations*\n\n◦ *Bonus Exp*: +${isPrems ? prem : free} Exp\n◦ *Bonus Balance*: +${isPrems ? balanceprem : balancefree} balance\n◦ *Bonus Limit*: +${isPrems ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
handler.help = ['yearly']
handler.tags = ['rpg']
handler.command = /^(yearly)$/i
handler.limit = true

handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " hari " +  hours + " jam " + minutes + " menit"
}