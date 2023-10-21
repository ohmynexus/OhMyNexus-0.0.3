const axios = require("axios");
const cheerio = require("cheerio");
const PhoneNumber = require("awesome-phonenumber");

/**
 * @note @see @line 42
 */
let handler = async (m, { conn, text }) => {
	if (!text) {
		return m.reply("*Example*: .unbanwa +6285236xxxxxx");
	}
	// replace non-numeric characters
	text = text.replace(/[^0-9]/g, "");
	// Statement if number not INDONESIA number
	if (!(text.startsWith("08") || text.startsWith("62"))) {
		return m.reply("Only Indonesian numbers are allowed!");
	}

	text = text.startsWith("08") ? text.replace("08", "62") : text;
	if (text + "@s.whatsapp.net" === conn.user.jid) {
		return m.reply("Is that the bot number?");
	}
    
    	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	// check if the number is on WhatsApp
	const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
	if (isValid.length == 0) {
		return m.reply("Number is not on WhatsApp!");
	}

	// text = text.startsWith("62") ? text.replace("62", "") : text;
	text = text.trim();

	try {
		const data = await axios.get("https://www.whatsapp.com/contact/noclient/");
		const email = await axios.get(
			"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
		);
		const cookie = data.headers["set-cookie"] || ""//.join("; ");
		const $ = cheerio.load(data.data);
		const $form = $("form");
		const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
		let form = new URLSearchParams();
		form.append("jazoest", $form.find("input[name=jazoest]").val());
		form.append("lsd", $form.find("input[name=lsd]").val());
		form.append("step", "submit");
		form.append("country_selector", "INDONESIA");

		/** @warning
		 * + means it should starts with country code, eg. +62 Xx
		 * miss understanding ?
		 */
		text = PhoneNumber("+" + text).getNumber("international");
		form.append("phone_number", `${text}`);
		/** */

		form.append("email", email.data[0]);
		form.append("email_confirm", email.data[0]);
		form.append("platform", "ANDROID");
		form.append("your_message", "Lost/stolen: disable my account");
		form.append("__user", "0");
		form.append("__a", "1");
		form.append("__csr", "");
		form.append("__req", "8");
		form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
		form.append("dpr", "1");
		form.append("__ccg", "UNKNOWN");
		form.append("__rev", "1006630858");
		form.append("__comment_req", "0");

		const res = await axios({
			url,
			method: "POST",
			data: form,
			headers: {
				cookie,
			},
		});
		const payload = String(res.data);

		if (payload.includes(`"payload":true`)) {
			m.reply(
				`WhatsApp Support
Hello,
Thank you for your message.
We have reactivated your account.`.trim()
			);
		} else if (payload.includes(`"payload":false`)) {
			m.reply(
				`Hello,
We have received your message.
We know that you currently do not have access to WhatsApp and we are working
to fulfill your request.
We thank you for your patience and will contact you as soon as possible.
For more information, please read our rules.`.trim()
			);
		} else m.reply(await require("utils").format(res.data));
	} catch (err) {
		m.reply(`${err}`);
	}
};

handler.help = ['unbanwa']
handler.tags = ['owner']
handler.command = /^(unbanwa)$/i
handler.owner = true
module.exports = handler;