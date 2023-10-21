/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");
const { fnctions } = require('../lib/fnctions');

let handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;
  if (!text) return m.reply('*Example*: .getmodel rose/frieren');
  if (!(text === 'rose' || text === 'frieren')) return m.reply('🐱 Invalid server name!');

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
        text: '🕒',
        key: m.key,
    }
  });

  try {
    let api = `https://api.itsrose.life/image/diffusion/get_all_models?server_name=${text}&apikey=${global.rose}`;
    let { data } = await axios.get(api);

    if (!data.status) {
      m.reply(data.message);
      return;
    }

    let result = data.result;

    let response = `*- ControlNET Models:*\n${result.controlnet_models.map(model => '◦ ' + model).join('\n')}\n\n*- Models:*\n${result.models.map(model => '◦ ' + model).join('\n')}\n\n*- Lora Models:*\n${result.lora_models.map(model => '◦ ' + model).join('\n')}\n\n*- Samplers:*\n${result.samplers.map(model => '◦ ' + model).join('\n')}`;

    m.reply(response);
  } catch (e) {
    console.log(e);
    m.reply("🐱 Error");
  }
};

handler.help = ['getmodel'];
handler.tags = ['info'];
handler.command = /^getmodel$/i;

handler.register = true;
handler.limit = false;

module.exports = handler;
