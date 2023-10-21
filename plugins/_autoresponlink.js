let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (
    (m.mtype === 'groupInviteMessage' ||
      m.text.startsWith('Undangan untuk bergabung') ||
      m.text.startsWith('Invitation to join') ||
      m.text.startsWith('Buka tautan ini')) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    let teks = `• Hello, it looks like you want to invite bots to your group.
    
◦ 10 Day - Rp 10k
◦ 20 Day - Rp 20k
◦ 30 Day - Rp 30k`

    this.reply(m.chat, teks, m)
  }
}

module.exports = handler