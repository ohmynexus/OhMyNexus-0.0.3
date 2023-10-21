const axios = require("axios");
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.Ai && !chat.isBanned ) {
        const commands = ['ai', 'menu', '.'] // tambah sendiri
        const isCommand = commands.some((v) => v.toLowerCase() == m.text.toLowerCase() || '.' + v.toLowerCase() == m.text.toLowerCase())
        if(isCommand) return
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
const payloads = {
	model: "gpt-4",

	// more higher more smart/uncute conversation
	max_tokens: 8000,

	// example of setting the system role;
	// then you can add user role;
	messages: [
		{
			role: "system",
			content:
				"You are AI Assistant name nexus. You can understand different languages, but you prefer to speak Indonesian language. Your personality: Fun, like making jokes, casual. You help people with any questions they ask. you were created by your owner addykece.",
		},
	],
};

// Push the user question to { messages };
const question = m.text;
payloads["messages"].push({
	role: "user",
	content: question,

	// also you can set object { name } if using gpt-4
	name: "Nexus",
});

// make a question to our api
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/chatGPT/turbo",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		headers: {
			"Content-Type": "application/json",
		},
		data: payloads,
	})
	.catch((e) => e?.response);

const { status, message, result } = data;

if (!status) {
	// error
	return m.reply(message);
}
let ai = result.messages.content
await m.reply(ai);
        return !0
    }
    return true
}
module.exports = handler