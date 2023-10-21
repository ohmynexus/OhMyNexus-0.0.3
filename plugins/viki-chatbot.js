/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');

let handler = m => m;

handler.before = async (m) => {
  let chat = global.db.data.chats[m.chat];
  if (chat.chatbot && !chat.isBanned) {
    const commands = ['ai', 'menu', 'allmenu'];
    const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase());
    if (isCommand) return;
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
    if (!m.text) return;
    
    let url = `http://api.brainshop.ai/get?bid=175987&key=rJrQEQIbx7kJFkL8&uid=${encodeURIComponent(m.sender)}&msg=${encodeURIComponent(m.text)}`;
    
    try {
      let res = await axios.get(url);
      let chatbotText = res.data.cnt;
      m.reply(chatbotText);
    } catch (err) {
      console.log(err);
    }
    
    return true;
  }
  
  return true;
};

module.exports = handler;
