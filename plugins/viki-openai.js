/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require("axios");
const { fnctions } = require("../lib/fnctions");

let handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;

  if (!text) throw '*Example:* .ai how to get a girlfriend';

  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  // the body data is same like openai have.
  const payloads = {
    model: "gpt-4",
    max_tokens: 2000,
    messages: [
      {
        role: "system",
        content:
          "You are AI Assistant name OhMyNexus - Bot. You can understand different languages, but you prefer to speak Indonesian language. Your personality: Fun, like making jokes, casual. You help people with any questions they ask. you were created by your owner addykece.",
      },
    ],
  };

  // Push the user question to { messages };
  const question = text;
  payloads["messages"].push({
    role: "user",
    content: question,
    name: "meow",
  });

  // make a question to our api
  const { data } = await axios
    .request({
      baseURL: "https://api.itsrose.life",
      url: "/chatGPT/turbo",
      method: "POST",
      params: {
        apikey: global.rose,
      },
      headers: {
        "Content-Type": "application/json",
      },
      data: payloads,
    })
    .catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {
    // error
    return m.reply(message);
  }

  let ai = result.messages.content;
  m.reply(ai);
};

handler.command = /^ai$/i;
handler.help = ['ai <text>'];
handler.tags = ['tools'];
handler.register = true;
handler.limit = true;

module.exports = handler;