/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example*: .updateinfo sedang sibuk';
  await conn.updateProfileStatus(text);
  m.reply('Successfully Changed Info');
};

handler.help = ['updateinfo /query'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^updateinfo/i;
handler.register = true;

module.exports = handler;
