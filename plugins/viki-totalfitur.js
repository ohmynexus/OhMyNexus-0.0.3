let handler = async (m, { conn, args, command }) => {
  let totalFeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  m.reply(`Total Features available: *${totalFeatures}*`);
};

handler.help = ['totalfitur'];
handler.tags = ['info'];
handler.command = ['totalfitur'];
module.exports = handler;