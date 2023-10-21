const axios = require("axios");
const cheerio = require("cheerio");
const handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `Masukkan Domain!\n\n*Contoh:* sazumiviki.me`;
if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan tanpa domain *https/http!*. Contoh: sazumiviki.me`;
  try {
    const waiting = `_Sedang mencari informasi WHOIS untuk ${text}..._`;
    m.reply(waiting);
    const response = await axios.get(`https://whois.botcahx.live/whois/${text}`);
    const $ = cheerio.load(response.data);
    const data = $("pre").text();
    m.reply(data);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi error saat mencari informasi WHOIS, silakan coba lagi nanti');
  }
};
handler.command = ['whois', 'whoislookup'];
handler.help = ['whois', 'whoislookup'];
handler.tags = ['tools'];
handler.premium = false;
handler.register = true;
handler.limit = true;
module.exports = handler;