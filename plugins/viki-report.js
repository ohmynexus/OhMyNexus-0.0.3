/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/


let handler = async (m, { conn, text, command }) => {
  let report = text || "";
  let ownerNumber = "6282177779477";

  if (report === "") {
    conn.reply(m.chat, `*Example*: .report plugins what anime erorr, please fix`, m);
    return;
  }

  let message = `◦ From: ${m.sender}\n◦ Report teks: ${report}`;
  conn.sendMessage(ownerNumber + "@s.whatsapp.net", message, "conversation");
  conn.reply(m.chat, "🐱 Thanks for the report! Bugs will be fixed soon.", m);
};
handler.help = ["report <teks>", "reportbug <teks>"];
handler.tags = ["owner"];
handler.command = /^(report|reportbug)$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;