/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn }) => {
  let image = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/IMG_20230609_231723.jpg';
  let description = `Thank you for donating support to the sazumi-bot. Your contribution means a lot to us to continue to improve the quality of the services we provide. We really appreciate your help. Thank You!\n\n• *Dana* : 089678063142\n• *Pulsa* : 085236226786\n• *Pulsa* : 089678063142`;

  conn.sendFile(m.chat, image, 'donation.jpg', description, m);
};

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^(donasi|donate)$/i;

module.exports = handler;