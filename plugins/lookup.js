const fetch = require('node-fetch');
const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*Example*: .lookup sazumiviki.me`;

  if (text.includes('https://') || text.includes('http://')) throw `*Example*: .lookup addykece`;

  try {
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    })
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
      .then(response => response.text())
      .then(data => {
        m.reply(`🐱 These Are Dns Lookup Results For ${text}:\n${data}`);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        m.reply('Unable to process DNS Lookup request');
      });
    });
    m.reply(`🐱 These Are Dns Lookup Results For ${text}:\n${res1}`);
    console.log(res1);

  } catch (error) {
    console.log(error);
    m.reply('*Invalid data!*');
  }
};

handler.command = ['dnslookup', 'hackertarget', 'lookup','dns'];
handler.help = ['dnslookup', 'hackertarget', 'lookup','dns'];
handler.tags = ['internet'];
handler.premium = false;
handler.register = true
handler.limit = true

module.exports = handler;