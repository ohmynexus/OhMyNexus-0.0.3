/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6282177779477
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const { spawn } = require('child_process');
const { on } = require('events');

module.exports = (conn) => {
  if (conn.child && conn.child instanceof require('child_process').ChildProcess) {
    on(conn.child, 'exit', (code, signal) => {
      if (code === null) {
        console.log(`Exited with signal: ${signal}`);
        process.send('reset');
      }
    });
  }
}
