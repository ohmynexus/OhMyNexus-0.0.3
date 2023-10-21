/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const axios = require("axios");
const fetch = require('node-fetch');
const payloads = {
  server_name: "frieren",
  prompt: "",
  width: 512,
  height: 768,
  steps: 20,
  model_id: "realisian",
  sampler: "DPM++ SDE",
  seed: "",
  cfg: 7.5,
  image_num: 1,
  negative_prompt: "(worst quality, low quality:1.3), extra hands, extra limbs, bad anatomy",
  safety_checker: "no",
  enhance_prompt: "no",
  multi_lingual: "no",
  clip_skip: 2,
  panorama: "no",
  lora_model: "more_details",
  lora_strength: 0.5,
  embeddings_model: "",
  webhook: null,
};

const handler = async (m, { text, command, isOwner, args, usedPrefix }) => {
  if (!text) {
    return m.reply(
      `Example: *${usedPrefix + command}* 1girl, seductive smile, close-up.`
    );
  }
  if (isOwner) {
  if (args[0] === 'set') {
    if (args.length % 2 !== 1) {
      return m.reply('Invalid arguments.');
    }

    for (let i = 1; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      if (key && value) {
        payloads[key] = value;
        m.reply(`🌸 *${key}* has been set to *${value}*.`);
      }
    }
    return;
  }

  if (args[0] === 'showall') {
    let payloadInfo = '*Payloads*:';
    for (const [key, value] of Object.entries(payloads)) {
      payloadInfo += `\n${key}: ${value}`;
    }
    return m.reply(payloadInfo);
  }
}
  Func.delay(2000)
  const updatedPayloads = { ...payloads, prompt: text };
  
  const res = await conn.sendMessage(m.chat, { text: '_Preparing Stable diffusion..._' }, { quoted: m });

  const { data } = await axios.request({
    baseURL: "https://api.itsrose.life",
    url: "/image/diffusion/txt2img",
    method: "POST",
    params: {
      apikey: `${global.rose}`,
    },
    data: updatedPayloads,
  }).catch((e) => e?.response);

  const { status, message, result } = data;

  if (!status) {

    return m.reply(message);
  }

  const { metadata, images, generation_time } = result;
  const { model_id, scheduler, W, H, guidance_scale, steps, seed, clip_skip, lora, negative_prompt } = metadata;

  const medata = `*Generating Time*: ${generation_time.toFixed()} second
*prompt*: ${text}
*model_id*: ${model_id}
*lora*: ${lora}
*negative_prompt*: ${negative_prompt}
*scheduler*: ${scheduler}
*W*: ${W}
*H*: ${H}
*guidance_scale*: ${guidance_scale}
*steps*: ${steps}
*seed*: ${seed}
*clip_skip*: ${clip_skip}`;

  await conn.relayMessage(m.chat, {
    protocolMessage: {
      key: res,
      type: 14,
      editedMessage: {
        conversation: medata
      }
    }
  }, {});

  await new Promise((resolve) => {
    setTimeout(async () => {
      await conn.sendMessage(m.chat, { image: { url: images[0] } });
      resolve();
    }, generation_time * 1000);
  });

};

handler.command = handler.help = ['txt2img', 'aiimg', 'showall'];
handler.tags = ['internet'];
handler.register = true;
handler.limit = true;

module.exports = handler;