/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

function repairTemplateString(expression) {
  let openBraces = expression.split('{').length - 1;
  let closeBraces = expression.split('}').length - 1;
  let diff = openBraces - closeBraces;
  if (diff > 0) {
    expression += '}'.repeat(diff);
  } else if (diff < 0) {
    expression = expression.slice(0, diff);
  }
  return expression;
}

module.exports = {
  repairTemplateString
};