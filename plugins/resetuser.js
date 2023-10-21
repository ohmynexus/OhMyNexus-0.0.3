let handler = async (m, { conn, text }) => {
  function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  text = no(text);

  if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return m.reply(`Tag the member you want to reset in the database.`);
  if (isNaN(number)) return m.reply(`Invalid number.`);
  if (number.length > 15) return m.reply(`Invalid number.`);
  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    let participants = m.isGroup ? groupMetadata.participants : [];
    let users = m.isGroup ? participants.find(u => u.jid == user) : {};
    let number = user.split('@')[0];

    delete global.db.data.users[user];

    m.reply(`Successfully deleted @${number} from the database.`, null, { contextInfo: { mentionedJid: [user] } });
  }
};

handler.help = ['resetuser'];
handler.tags = ['owner'];
handler.command = /^resetuser$/i;
handler.admin = false;
handler.owner = true;
handler.group = false;
handler.botAdmin = false;
module.exports = handler;
