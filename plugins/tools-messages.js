/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const fs = require('fs');
const path = require('path');

const messagesFilePath = path.join(__dirname, '..', 'sazumiviki', 'sazumi-messages.json');

function updateMessageCount(type) {
  try {
    let messagesData = {};
    if (fs.existsSync(messagesFilePath)) {
      messagesData = JSON.parse(fs.readFileSync(messagesFilePath, 'utf-8'));
    }

    if (!messagesData[type]) {
      messagesData[type] = 1;
    } else {
      messagesData[type]++;
    }

    fs.writeFileSync(messagesFilePath, JSON.stringify(messagesData, null, 2));
  } catch (error) {
    console.error('Error updating message count:', error);
  }
}

const handler = async (m, { text, fromMe }) => {
  if (!fromMe) {
    updateMessageCount('incoming messages');
  }
};

const onSendMessage = (m) => {
  updateMessageCount('outgoing message');
};

const getMessageCounts = () => {
  try {
    return fs.existsSync(messagesFilePath) ? JSON.parse(fs.readFileSync(messagesFilePath, 'utf-8')) : {};
  } catch (error) {
    console.error('Error loading message counts:', error);
    return {};
  }
};

handler.all = async (m) => {
  onSendMessage(m);
};

handler.getMessageCounts = getMessageCounts;

module.exports = handler;
