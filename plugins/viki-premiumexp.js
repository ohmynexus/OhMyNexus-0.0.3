let handler = m => m;

handler.before = async function (m, { conn }) {
  let user = global.db.data.users[m.sender];
  if (user && user.premium && user.premiumDate && (new Date() >= user.premiumDate)) {
    user.premium = false;
    user.premiumDate = 0;
    user.limit = 100;
    await m.reply('🐱 Your premium package has expired.');
  }
};

module.exports = handler;