/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

const FormData = require("form-data");
const Jimp = require("jimp");

async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit({
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function(err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function(chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}

const handler = async (m, {
	conn,
	usedPrefix,
	command
}) => {
	switch (command) {
		case "enhancer":
		case "unblur":
		case "enhance": {
			conn.enhancer = conn.enhancer ? conn.enhancer : {};
			if (m.sender in conn.enhancer)
				throw "🐱 There are still unfinished processes";
			let q = m.quoted ? m.quoted : m;
			let mime = (q.msg || q).mimetype || q.mediaType || "";
			if (!mime)
				throw `🐱 Reply image with caption *.remini*`;
			if (!/image\/(jpe?g|png)/.test(mime))
				throw `🐱 Mime ${mime} is not supported`;
			else conn.enhancer[m.sender] = true;
			conn.chatRead(m.chat);
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			});
			let img = await q.download?.();
			let error;
			try {
				const This = await processing(img, "enhance");
				conn.sendFile(m.chat, This, "", "🐱 The process is finished", m);
			} catch (er) {
				error = true;
			} finally {
				if (error) {
					m.reply("🐱 Failed process");
				}
				delete conn.enhancer[m.sender];
			}
		}
		break;
		case "colorize":
		case "colorizer": {
			conn.recolor = conn.recolor ? conn.recolor : {};
			if (m.sender in conn.recolor)
				throw "🐱 There are still unfinished processes";
			let q = m.quoted ? m.quoted : m;
			let mime = (q.msg || q).mimetype || q.mediaType || "";
			if (!mime)
				throw `🐱 Reply image with caption *.remini*`;
			if (!/image\/(jpe?g|png)/.test(mime))
				throw `🐱 Mime ${mime} is not supported`;
			else conn.recolor[m.sender] = true;
			conn.chatRead(m.chat);
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			});
			let img = await q.download?.();
			let error;
			try {
				const This = await processing(img, "enhance");
				conn.sendFile(m.chat, This, "", "🐱 The process is finished", m);
			} catch (er) {
				error = true;
			} finally {
				if (error) {
					m.reply("🐱 Failed process");
				}
				delete conn.recolor[m.chat];
			}
		}
		break;
		case "hd":
		case "hdr":
		case "remini": {
			conn.hdr = conn.hdr ? conn.hdr : {};
			if (m.sender in conn.hdr)
				throw "🐱 There are still unfinished processes";
			let q = m.quoted ? m.quoted : m;
			let mime = (q.msg || q).mimetype || q.mediaType || "";
			if (!mime)
				throw `🐱 Reply image with caption *.remini*`;
			if (!/image\/(jpe?g|png)/.test(mime))
				throw `🐱 Mime ${mime} is not supported`;
			else conn.hdr[m.sender] = true;
			conn.chatRead(m.chat);
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			});
			let img = await q.download?.();
			let error;
			try {
				const This = await processing(img, "enhance");
				conn.sendFile(m.chat, This, "", "🐱 The process is finished", m);
			} catch (er) {
				error = true;
			} finally {
				if (error) {
					m.reply("🐱 Failed process");
				}
				delete conn.hdr[m.sender];
			}
		}
		break;
	}
};

handler.help = ["unblur"];
handler.tags = ["tools"];
handler.limit = true;
handler.command = /^(unblur)$/i;

module.exports = handler;