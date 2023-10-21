/**
 * Fungsi untuk mengirim pesan chatRead
 * @param {Object} conn - Objek client WhatsApp
 * @param {Object} m - Objek pesan
 */
async function sendChatRead(conn, m) {
  try {
    if (conn.sendReadReceipt) {
      conn.chatRead(m.chat);
    } else {
      console.log("Error: conn.sendReadReceipt is not a function");
    }
  } catch (e) {
    console.log("Error sending chatRead:", e);
  }
}

module.exports = {
  sendChatRead
};
