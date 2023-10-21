/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const axios = require('axios');

const handler = async (m, { text }) => {
  try {
    if (!text) {
      throw `Example: .diffusion 1 girl`;
    }

    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });
    
    const apiUrl = `https://api.itsrose.life/image/stable/diffusion`;
    const apikey = `${global.rose}`;
    
    const params = {
      apikey: apikey,
      negative_prompt: "nsfw, 3d, bad anatomy",
      ratio: "1:1",
      cfg: 7.5,
      model_id: "anythingv3",
      seed: "-1",
      prompt: text,
      json: true,
    };
    
    const { data } = await axios.get(apiUrl, { params });
    
    const { status, result } = data;
    
    if (!status) {
      throw 'Upps Erorr';
    } else {
    // Jangan hapus bagian ini
    const _0x2964e5=_0x4ca1;function _0x4ca1(_0x598a6c,_0x34aa61){const _0x450cff=_0x3856();return _0x4ca1=function(_0x3658ca,_0x2b75be){_0x3658ca=_0x3658ca-(0x38f*-0x6+-0x2635*-0x1+-0x1062);let _0x25495b=_0x450cff[_0x3658ca];return _0x25495b;},_0x4ca1(_0x598a6c,_0x34aa61);}function _0x3856(){const _0x581b9f=['9949086AxuAcw','3741504EOXoFb','534806yWPsIq','108703AOJHYj','6586685xVcoDL','from','7729120cvvYxe','145ClaJrD','base64','3xslNVo','66468hncTfu'];_0x3856=function(){return _0x581b9f;};return _0x3856();}(function(_0x3c0ab4,_0x598a8a){const _0x227e19=_0x4ca1,_0x3bb554=_0x3c0ab4();while(!![]){try{const _0x1b023d=-parseInt(_0x227e19(0x83))/(0x15+-0x5c9*-0x1+-0x5dd)+parseInt(_0x227e19(0x82))/(-0x12f7+0x665+0xc94)*(-parseInt(_0x227e19(0x7e))/(0x1*-0x541+0x3e1+0x1*0x163))+parseInt(_0x227e19(0x7f))/(-0x2156+0x1903+0x857)*(parseInt(_0x227e19(0x7c))/(-0x2388+0x1cef+0xe*0x79))+-parseInt(_0x227e19(0x81))/(-0x39*0x6b+0x745+-0x4*-0x425)+-parseInt(_0x227e19(0x79))/(0x2453+-0x49*0x20+-0x1b2c)+parseInt(_0x227e19(0x7b))/(0x1dd8+-0x4f9+-0x18d7*0x1)+parseInt(_0x227e19(0x80))/(0x6c*0xa+-0x8b6+0x487);if(_0x1b023d===_0x598a8a)break;else _0x3bb554['push'](_0x3bb554['shift']());}catch(_0x3db150){_0x3bb554['push'](_0x3bb554['shift']());}}}(_0x3856,0x9f518+0x3e1*0x41e+-0x10938c));const {base64Image,is_nsfw,mimetype}=result,image_buffer=Buffer[_0x2964e5(0x7a)](base64Image,_0x2964e5(0x7d));
      
      if (is_nsfw) {
        m.reply('The result contains NSFW');
      } else {
        await conn.sendFile(m.chat, image_buffer, 'diffusion.jpg', `*🐱 Result for:* ${text}`, m);
      }
    }
  } catch (e) {
    m.reply('Upps erorr, enter a prompt, for *Example:* .diffusion 1 girl');
  }
};

handler.help = ['diffusion /prompt'];
handler.tags = ['tools'];
handler.command = /^diffusion$/i;

module.exports = handler;
