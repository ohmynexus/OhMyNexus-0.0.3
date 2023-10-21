/*
* Whatsapp: +6285236226786
* Developer: Sazumi Viki
* Instagram: @moe.sazumiviki
* Source: https://github.com/SazumiVicky/sazumi-bot
*/

const {
	createHash
} = require('crypto');
const fetch = require('node-fetch');

let Reg = /([^\d]+) *\. *(\d+)/;
let handler = async function(m, {
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	if (user.registered === true) throw `You are already registered\nWant to register again? ${usedPrefix}unreg 90259a21exxxxxx`;
	if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}register name.age*`;
	let [_, name, age] = text.match(Reg);
	if (!name) throw 'Name cannot be empty (Alphanumeric)';
	if (!age) throw 'Age cannot be empty (Numeric)';
	age = parseInt(age);
	if (age > 120) throw 'Too old.';
	if (age < 5) throw 'Too young.';
	user.name = name.trim();
	user.age = age;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');

	let balanceBonus = getRandomInt(1000, 10000);
	let limitBonus = getRandomInt(10, 20);
	let expBonus = getRandomInt(1000, 1000);

	m.reply(
		`
*Register successful:*
◦ *Name :* ${name}
◦ *Age :* ${age}

*Registration gift:*
◦ *Balance :* +${balanceBonus}
◦ *Limit :* +${limitBonus}
◦ *Exp :* +${expBonus}

*Your serial number:*
◦ *Sn :* ${sn}
    `
	);
};

handler.help = ['register', 'daftar'].map((v) => v + ' <name>.<age>');
handler.tags = ['start'];
handler.command = /^(register|daftar)$/i;

module.exports = handler;

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}