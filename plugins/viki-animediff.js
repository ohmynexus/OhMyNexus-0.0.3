/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');
const { fnctions } = require('../lib/fnctions');

const handler = async (m, { conn, text }) => {
  if (!await fnctions()) return;

  if (!text) throw '*Example*: .animediff luffy, (one piece)';
  m.reply('Preparing anime diffusion...')

  const payload = {
    prompt: text,
    negative_prompt: "(worst quality, low quality, extra digits:1.4), artist name, nsfw, monochrome, fused face, poorly drawn face, cloned face, false body, false face, bad hands, poorly drawn hands, extra fingers, fused eyes, poorly drawn eyes, liquid eyes, false eyes, scary, ugly, out of frame, head out of frame, bad anatomy",
    sampler: "DPM++ SDE Karras",
    seed: -1,
    ratio: "1:1",
    style: "ACG",
    url: false,
    cfg: 7.5,
    controlNet: "none",
    image_num: 1,
    steps: 25
  };

  try {
    const { data } = await axios.post("https://api.itsrose.life/image/diffusion", payload, {
      params: {
        apikey: global.rose,
      },
    });

    const { status, message, result } = data;

    if (!status) {
      console.log(message);
      throw 'Upps Erorr';
    } else {
      const { images, metadata } = result;
      let sampler = metadata.sampler;
      let imgn = metadata.image_num
      let ratio = metadata.ratio
      let style = metadata.style;
      let cfg = metadata.cfg;
      let step = metadata.steps;
      let seed = metadata.seed;
      let net = metadata.controlNet
      let negative = metadata.negative_prompt

      let medata = `*◦ Prompt:* ${text}
*◦ Sampler:* ${sampler}
*◦ Image_num:* ${imgn}
*◦ Steps:* ${step}
*◦ Style:* ${style}
*◦ Ratio:* ${ratio}
*◦ ControlNet:* ${net}
*◦ Cfg:* ${cfg}
*◦ Negative_prompt:* ${negative}
`;
      m.reply(medata);

      for (const image of images) {
        await conn.sendMessage(m.chat, { image: { url: image } });
      }
    }
  } catch (error) {
    console.error(error);
    m.reply('Upps Erorr');
  }
};

handler.help = ['animediff'];
handler.tags = ['maker', 'internet', 'tools', 'premium'];
handler.premium = true;
handler.command = /^(animedif|animediff|wibudiff|wibudif)$/i;
handler.limit = true;

module.exports = handler;
