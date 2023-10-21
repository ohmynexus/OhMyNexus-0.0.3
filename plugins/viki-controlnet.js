/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, text }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  
  if (!mime.startsWith('image/')) {
    throw 'Reply to an image with a caption, *Example:* .controlnet without clothes';
  }
  conn.chatRead(m.chat);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  const media = await q.download();
  const imageUrl = await uploadImage(media);

  const apiData = {
    server_name: "frieren",
    prompt: "no shirt, naked, nsfw",
    width: 512,
    height: 512,
    steps: 25,
    model_id: "realisian",
    sampler: "DPMS++",
    init_image: imageUrl,
    control_image: "",
    mask_image: "",
    controlnet_model: "tile",
    controlnet_type: "tile",
    controlnet_conditioning_scale: 1,
    guess_mode: "no",
    auto_hint: "no",
    safety_checker: "no",
    cfg: 7.5,
    seed: "string",
    enhance_prompt: "no",
    image_num: 1,
    lora_model: "",
    lora_strength: 1,
    negative_prompt: "ugly, naled, no shirt, masterpiece",
    webhook: ""
  };

  const { data } = await axios.post(`https://api.itsrose.life/image/diffusion/controlNet?apikey=${global.rose}`, apiData);

  if (data.status && data.result.images.length > 0) {
    const imageUrl = data.result.images[0];
    const metadata = data.result.metadata;

    const responseCaption = `
◦ *Prompt:* ${metadata.prompt}
◦ *Model:* ${metadata.model_id}
◦ *ControlNet Model:* ${metadata.controlnet_model}
◦ *ControlNet Type:* ${metadata.controlnet_type}
◦ *Negative Prompt:* ${metadata.negative_prompt}
◦ *Steps:* ${metadata.steps}
◦ *Width:* ${metadata.W}
◦ *Height:* ${metadata.H}`;

    conn.sendFile(m.chat, imageUrl, 'controlnet.jpg', responseCaption, m);
  } else {
    throw '🐱 Upps Erorr.';
  }
};

handler.help = ['telanjangin','controlnet'];
handler.tags = ['tools'];
handler.command = /^(telanjangin|controlnet)$/i;

module.exports = handler;
