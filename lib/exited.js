const fs = require('fs');

module.exports = function handleExitedError(error) {
  const currentDate = new Date().toISOString().replace(/:/g, '-');
  const logFileName = `error-log-${currentDate}.txt`;

  const errorTraceback = error.stack || error.toString();
  fs.writeFile(logFileName, errorTraceback, (err) => {
    if (err) {
      console.error('Gagal menyimpan log error:', err);
    } else {
      console.log(`Log error telah disimpan pada: ${logFileName}`);
    }
  });

  console.error('Error:', error);
};
