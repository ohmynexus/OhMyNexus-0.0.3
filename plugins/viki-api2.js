/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

let handler = async (m, { conn, command }) => {
    let apiLinks = {
      'katabucin-api': 'https://link.sazumi.moe/KATABUCIN',
      'pantun-api': 'https://link.sazumi.moe/PANTUN',
      'chatgpt-api': 'https://link.sazumi.moe/CHATGPT',
      'bard-api': 'https://link.sazumi.moe/BARD',
      'tempmail-api': 'https://link.sazumi.moe/TEMPMAIL',
      'tempmail-msg-api': 'https://link.sazumi.moe/TEMPMAIL-MSG',
      'uploader-api': 'https://link.sazumi.moe/UPLOADER',
      'ssweb-api': 'https://link.sazumi.moe/SSWEB',
      'gpt4-api': 'https://link.sazumi.moe/GPT4',
      'youtube-api': 'https://link.sazumi.moe/YOUTUBE',
      'blackbox-api': 'https://link.sazumi.moe/BLACKBOX',
    };
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    let apiName = command.toLowerCase();
    let apiLink = apiLinks[apiName];
  
    if (!apiLink) {
      m.reply('🐱 API link not found.');
      return;
    }
  
    m.reply(apiLink + ` *[ ${apiName.toUpperCase()} ]*`);
  };
  
  handler.help = ['api'];
  handler.tags = ['info'];
  handler.command = /^(katabucin-api|youtube-api|blackbox-api|pantun-api|gpt4-api|chatgpt-api|bard-api|tempmail-api|tempmail-msg-api|uploader-api|ssweb-api)$/i;
  
  module.exports = handler;