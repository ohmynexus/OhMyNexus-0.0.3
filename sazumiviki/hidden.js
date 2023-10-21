/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

function hideErrors(fn) {
  return function () {
    try {
      return fn.apply(this, arguments);
    } catch (e) {
      return;
    }
  };
}

function hideLogs(fn) {
  return function () {
    let originalLog = console.log;
    console.log = function () { };
    let result = fn.apply(this, arguments);
    console.log = originalLog;
    return result;
  };
}

module.exports = {
  hideErrors,
  hideLogs
};