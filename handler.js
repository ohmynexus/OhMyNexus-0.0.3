const simple = require('./lib/simple')
const util = require('util')
const { repairTemplateString } = require('./sazumiviki/repair.js');
const autobackup = require('./sazumiviki/autobackup')
const fixdelay = require('./sazumiviki/fixdelay');
const fixerror = require('./sazumiviki/fixerror');
const reportError = require('./sazumiviki/report-erorr');
const { hideErrors, hideLogs } = require('./sazumiviki/hidden');
const { Function } = require('./sazumiviki/function');
const handleExitedError = require('./lib/exited.js');

const isNumber = x => typeof x === 'number' && !isNaN(x);
const delay = ms => isNumber(ms) && Promise.resolve();



module.exports = {
	async handler(chatUpdate) {
		if (global.db.data == null) await loadDatabase()
		this.msgqueque = this.msgqueque || []
		if (!chatUpdate) return
		if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
		let m = chatUpdate.messages[chatUpdate.messages.length - 1]
		if (!m) return
		console.log(JSON.stringify(m, null, 4))
		try {
			m = simple.smsg(this, m) || m
			if (!m) return
			m.exp = 0
			m.limit = false
			try {
				let user = global.db.data.users[m.sender]
				if (typeof user !== 'object') global.db.data.users[m.sender] = {}
				if (user) {
					if (!isNumber(user.health)) user.health = 200
					if (!isNumber(user.title)) user.title = 100
					if (!isNumber(user.stamina)) user.stamina = 100
					if (!isNumber(user.haus)) user.haus = 100
					if (!isNumber(user.laper)) user.laper = 100
					if (!isNumber(user.level)) user.level = 1
					if (!('pasangan' in user)) user.pasangan = ''
					if (!isNumber(user.exp)) user.exp = 1
					if (!isNumber(user.pc)) user.pc = 1
					if (!isNumber(user.korbanngocok)) user.korbanngocok = 1
					if (!isNumber(user.ojekk)) user.ojekk = 1
					if (!isNumber(user.trofi)) user.trofi = 1
					if (!user.rtrofi) user.rtrofi = 'Perunggu'
					if (!isNumber(user.troopcamp)) user.troopcamp = 1
					if (!isNumber(user.coin)) user.coin = 1
					if (!isNumber(user.atm)) user.atm = 1
					if (!isNumber(user.limit)) user.limit = 30
					if (!isNumber(user.glimit)) user.glimit = 30
					if (!isNumber(user.tprem)) user.tprem = 1
					if (!isNumber(user.tigame)) user.tigame = 5
					if (!isNumber(user.lastclaim)) user.lastclaim = 1
					if (!isNumber(user.balance)) user.balance = 1
					if (!isNumber(user.rumahsakit)) user.rumahsakit = 1
					if (!isNumber(user.fortress)) user.fortress = 1
					if (!isNumber(user.shield)) user.shield = false
					if (!isNumber(user.pertanian)) user.pertanian = 1
					if (!isNumber(user.pertambangan)) user.pertambangan = 1


					if (!isNumber(user.botol)) user.botol = 1
					if (!isNumber(user.kardus)) user.kardus = 1
					if (!isNumber(user.kaleng)) user.kaleng = 1
					if (!isNumber(user.aqua)) user.aqua = 1
					if (!isNumber(user.diamond)) user.diamond = 1
					if (!isNumber(user.iron)) user.iron = 1
					if (!isNumber(user.emas)) user.emas = 1
					if (!isNumber(user.arlok)) user.arlok = 1

					if (!isNumber(user.common)) user.common = 1
					if (!isNumber(user.as)) user.as = 1
					if (!isNumber(user.uncommon)) user.uncommon = 1
					if (!isNumber(user.mythic)) user.mythic = 1
                    if (!isNumber(user.boxs)) user.boxs = 1
					if (!isNumber(user.legendary)) user.legendary = 1
					if (!isNumber(user.glory)) user.glory = 1
					if (!isNumber(user.enchant)) user.enchant = 1
					if (!isNumber(user.pet)) user.pet = 1
					if (!isNumber(user.psepick)) user.psepick = 1
					if (!isNumber(user.psenjata)) user.psenjata = 1

					if (!isNumber(user.potion)) user.potion = 1
                    if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
					if (!isNumber(user.sampah)) user.sampah = 1
					if (!isNumber(user.armor)) user.armor = 1
					if (!isNumber(user.pancing)) user.pancing = 1

					if (!isNumber(user.apel)) user.apel = 1
					if (!isNumber(user.ayamb)) user.ayamb = 1
					if (!isNumber(user.ayamg)) user.ayamg = 1
					if (!isNumber(user.sapir)) user.sapir = 1
					if (!isNumber(user.ssapi)) user.ssapi = 1
					if (!isNumber(user.esteh)) user.esteh = 1
					if (!isNumber(user.leleg)) user.leleg = 1
					if (!isNumber(user.leleb)) user.leleb = 1

					if (!isNumber(user.sword)) user.sword = 1
					if (!isNumber(user.sworddurability)) user.sworddurability = 1
					if (!isNumber(user.pickaxe)) user.pickaxe = 1
					if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 1
					if (!isNumber(user.fishingrod)) user.fishingrod = 1
					if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 1
					if (!isNumber(user.umpan)) user.umpan = 1

					if (!isNumber(user.kucing)) user.kucing = 1
					if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 1
					if (!isNumber(user.kuda)) user.kuda = 1
					if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 1
					if (!isNumber(user.rubah)) user.rubah = 1
					if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 1
					if (!isNumber(user.anjing)) user.anjing = 1
					if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 1
					if (!isNumber(user.serigalalastclaim)) user.serigalalastclaim = 1 
					if (!isNumber(user.nagalastclaim)) user.nagalastclaim = 1
					if (!isNumber(user.phonixlastclaim)) user.phonixlastclaim = 1
					if (!isNumber(user.griffinlastclaim)) user.griffinlastclaim = 1
					if (!isNumber(user.centaurlastclaim)) user.centaurlastclaim = 1

					if (!isNumber(user.makananpet)) user.makananpet
					if (!isNumber(user.makanannaga)) user.makanannaga = 1
					if (!isNumber(user.makananphonix)) user.makananphonix = 1
					if (!isNumber(user.makanangriffin)) user.makanangriffin = 1
					if (!isNumber(user.makananserigala)) user.makananserigala = 1
					if (!isNumber(user.makanancentaur)) user.makanancentaur = 1

					if (!'Banneduser' in user) user.Banneduser = false
					if (!'BannedReason' in user) user.BannedReason = ''
					if (!isNumber(user.warn)) user.warn = 1

					if (!isNumber(user.afk)) user.afk = -1
					if (!'afkReason' in user) user.afkReason = ''

					if (!isNumber(user.healthmonster)) user.healthmonster = 1
					if (!isNumber(user.anakkucing)) user.anakkucing = 1
					if (!isNumber(user.anakkuda)) user.anakkuda = 1
					if (!isNumber(user.anakrubah)) user.anakrubah = 1
					if (!isNumber(user.anakanjing)) user.anakanjing = 1
					if (!isNumber(user.serigala)) user.serigala = 1
					if (!isNumber(user.anakserigala)) user.anakserigala = 1
					if (!isNumber(user.naga)) user.naga = 1
					if (!isNumber(user.anaknaga)) user.anaknaga = 1
					if (!isNumber(user.phonix)) user.phonix = 1
					if (!isNumber(user.anakphonix)) user.anakphonix = 1
                    if (!isNumber(user.emerald)) user.emerald = 1
					if (!isNumber(user.griffin)) user.griffin = 1
					if (!isNumber(user.anakgriffin)) user.anakgriffin = 1
					if (!isNumber(user.kyubi)) user.kyubi = 1
					if (!isNumber(user.anakkyubi)) user.anakkyubi = 1
					if (!isNumber(user.centaur)) user.centaur = 1
					if (!isNumber(user.anakcentaur)) user.anakcentaur = 1
					if (!isNumber(user.makananpet)) user.makananpet = 1

					if (!isNumber(user.antispam)) user.antispam = 1
					if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 1

					if (!isNumber(user.kayu)) user.kayu = 1
					if (!('kingdom' in user)) user.kingdom = false
					if (!isNumber(user.batu)) user.batu = 1
                    if (!isNumber(user.coal)) user.coal = 1
					if (!isNumber(user.ramuan)) user.ramuan = 1
					if (!isNumber(user.string)) user.string = 1
					if (!isNumber(user.sword)) user.sword = 1
					if (!isNumber(user.sworddurability)) user.sworddurability = 1
					if (!isNumber(user.pickaxe)) user.pickaxe = 1
					if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 1
					if (!isNumber(user.fishingrod)) user.fishingrod = 1
					if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 1

					if (!isNumber(user.paus)) user.paus = 1
					if (!isNumber(user.kepiting)) user.kepiting = 1
					if (!isNumber(user.gurita)) user.gurita = 1
					if (!isNumber(user.cumi)) user.cumi = 1
					if (!isNumber(user.buntal)) user.buntal = 1
					if (!isNumber(user.dory)) user.dory = 1
					if (!isNumber(user.lumba)) user.lumba = 1
					if (!isNumber(user.lobster)) user.lobster = 1
					if (!isNumber(user.hiu)) user.hiu = 1
					if (!isNumber(user.udang)) user.udang = 1
					if (!isNumber(user.ikan)) user.ikan = 1
					if (!isNumber(user.nila)) user.nila = 1
					if (!isNumber(user.bawal)) user.bawal = 1
					if (!isNumber(user.lele)) user.lele = 1
					if (!isNumber(user.orca)) user.orca = 1

                    if (!isNumber(user.banteng)) user.banteng = 1
                    if (!isNumber(user.harimau)) user.harimau = 1
                    if (!isNumber(user.gajah)) user.gajah = 1
                    if (!isNumber(user.kambing)) user.kambing = 1
                    if (!isNumber(user.panda)) user.panda = 1
                    if (!isNumber(user.buaya)) user.buaya = 1
                    if (!isNumber(user.kerbau)) user.kerbau = 1
                    if (!isNumber(user.sapi)) user.sapi = 1
                    if (!isNumber(user.monyet)) user.monyet = 1
                    if (!isNumber(user.babihutan)) user.babihutan = 1
                    if (!isNumber(user.babi)) user.babi = 1
                    if (!isNumber(user.ayam)) user.ayam = 1
                    
                    if (!isNumber(user.lastadventure)) user.lastadventure = 1
                    if (!isNumber(user.lastkill)) user.lastkill = 1
                    if (!isNumber(user.lastfishing)) user.lastfishing = 1
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 1
                    if (!isNumber(user.lastwar)) user.lastwar = 1
                    if (!isNumber(user.lastsda)) user.lastsda = 1
                    if (!isNumber(user.lastberburu)) user.lastberbru = 1
		    if (!isNumber(user.lastbunuhi)) user.lastbunuhi = 1
                    if (!isNumber(user.lastduel)) user.lastduel = 1
                    if (!isNumber(user.lastjb)) user.lastjb = 1
                    if (!isNumber(user.lastSetStatus)) user.lastSetStatus = 1
                    if (!isNumber(user.lastmining)) user.lastmining = 1
                    if (!isNumber(user.lasthunt)) user.lasthunt = 1
                    if (!isNumber(user.lastngocok)) user.lastngocok = 1
                    if (!isNumber(user.lastgift)) user.lastgift = 1
                    if (!isNumber(user.lastrob)) user.lastrob = 1
                    if (!isNumber(user.lastngojek)) user.lastngojek = 1
                    if (!isNumber(user.lastgrab)) user.lastgrab = 1
                    if (!isNumber(user.lastberkebon)) user.lastberkebon = 1
                    if (!isNumber(user.lastcodereg)) user.lastcodereg = 1
                    if (!isNumber(user.lastdagang)) user.lastdagang = 1
                    if (!isNumber(user.lasthourly)) user.lasthourly = 1
                    if (!isNumber(user.lastweekly)) user.lastweekly = 1
                    if (!isNumber(user.lastmonthly)) user.lastmonthly = 1
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 1
                    if (!isNumber(user.lastturu)) user.lastturu = 1
                    if (!isNumber(user.lastseen)) user.lastseen = 1
                    if (!isNumber(user.lastbansos)) user.lastbansos = 1
                    if (!isNumber(user.lastrampok)) user.lastrampok = 1
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                        if (!('name' in user)) user.name = this.getName(m.sender)
                    
                        if (!isNumber(user.apel)) user.apel = 1
                        if (!isNumber(user.anggur)) user.anggur = 1
                        if (!isNumber(user.jeruk)) user.jeruk = 1
                        if (!isNumber(user.semangka)) user.semangka = 1
                        if (!isNumber(user.mangga)) user.mangga = 1
                        if (!isNumber(user.stroberi)) user.stroberi = 1
                        if (!isNumber(user.pisang)) user.pisang = 1
                        if (!isNumber(user.kayu)) user.kayu = 1
                        if (!isNumber(user.emas)) user.emas = 1
                        if (!isNumber(user.makanan)) user.makanan = 1
                        if (!isNumber(user.bibitanggur)) user.bibitanggur = 1
                        if (!isNumber(user.gardenboxs)) user.gardenboxs = 10
                        if (!isNumber(user.bibitpisang)) user.bibitpisang = 1
                        if (!isNumber(user.bibitapel)) user.bibitapel = 1
                        if (!isNumber(user.bibitmangga)) user.bibitmangga = 1
                        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 1
                    
                    
                        if (!isNumber(user.age)) user.age = -1
                        if (!isNumber(user.premiumDate)) user.premiumDate = -1
                        if (!isNumber(user.regTime)) user.regTime = -1
                    
                    }
                    if (!isNumber(user.level)) user.level = 1
                    if (!user.job) user.job = 'Pengangguran'
                    if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
                    if (!user.premium) user.premium = false
                    if (!user.premium) user.premiumTime = 1
                    if (!user.role) user.role = 'Newbie ㋡'
                    if (!('autolevelup' in user)) user.autolevelup = true
                    if (!('lastIstigfar' in user)) user.lastIstigfar = true
                    } else global.db.data.users[m.sender] = {
                    health: 200,
                    title: '',
                    haus: 111,
                    tiketcoin: 0,
                    laper: 111,
                    tprem: 1,
                    stamina: 111,
                    level: 1,
                    pasangan: '',
                    pc: 1,
                    exp: 1,
                    coin: 1,
                    atm: 1,
                    limit: 31,
                    tigame: 999,
                    lastclaim: 1,
                    balance: 1,
                    emerald: 1,
                    diamond: 1,
                    iron: 1,
                    emas: 1,
                    common: 1,
                    uncommon: 1,
                    mythic: 1,
                    legendary: 1,
                    rumahsakit: 1,
                    fortress: 1,
                    trofi: 1,
                    rtrofi: 'perunggu',
                    makanan: 1,
                    troopcamp: 1,
                    shield: 1,
                    arlok: 1,
                    ojekk: 1,
                    korbanngocok: 1,
                    
                    as: 1,
                    paus: 1,
                    boxs: 1,
                    kepiting: 1,
                    gurita: 1,
                    cumi: 1,
                    buntal: 1,
                    dory: 1,
                    lumba: 1,
                    lobster: 1,
                    hiu: 1,
                    lele: 1,
                    nila: 1,
                    bawal: 1,
                    udang: 1,
                    ikan: 1,
                    orca: 1,
                    banteng: 1,
                    harimau: 1,
                    gajah: 1,
                    kambing: 1,
                    panda: 1,
                    buaya: 1,
                    kerbau: 1,
                    sapi: 1,
                    monyet: 1,
                    babihutan: 1,
                    babi: 1,
                    ayam: 1,
                    apel: 21,
                    ayamb: 1,
                    ayamg: 1,
                    ssapi: 1,
                    sapir: 1,
                    leleb: 1,
                    leleg: 1,
                    esteh: 1,
                    pet: 1,
                    potion: 1,
                    sampah: 1,
                    armor: 1,
                    kucing: 1,
                    kucinglastclaim: 1,
                    kuda: 1,
                    kudalastclaim: 1,
                    rubah: 1,
                    rubahlastclaim: 1,
                    anjing: 1,
                    anjinglastclaim: 1,
                    naga: 1,
                    nagalastclaim: 1,
                    griffin: 1,
                    griffinlastclaim: 1,
                    centaur: 1,
                    centaurlastclaim: 1,
                    serigala: 1,
                    serigalalastclaim: 1,
                    phonix: 1,
                    phonixlastclaim: 1,
                    makanannaga: 1,
                    makananphonix: 1,
                    makanancentaur: 1,
                    makananserigala: 1,
                    
                    Banneduser: false,
                    BannedReason: '',
                    warn: 1,
                    afk: -1,
                    afkReason: '',
                    anakkucing: 1,
                    anakkuda: 1,
                    anakrubah: 1,
                    anakanjing: 1,
                    makananpet: 1,
                    antispam: 1,
                    antispamlastclaim: 1,
                    kayu: 1,
                    batu: 1,
                    coal: 1,
                    string: 1,
                    umpan: 1,
                    sword: 1,
                    sworddurability: 1,
                    pickaxe: 1,
                    pickaxedurability: 1,
                    fishingrod: 1,
                    fishingroddurability: 1,
                    lastadventure: 1,
                    lastkill: 1,
                    lastfishing: 1,
                    lastdungeon: 1,
                    lastduel: 1,
                    lastmining: 1,
                    lasthourly: 1,
                    lasthunt: 1,
                    lastweekly: 1,
                    lastmonthly: 1,
                    lastjb: 1,
                    lastrob: 1,
                    lastdaang: 1,
                    lastngojek: 1,
                    lastgrab: 1,
                    lastngocok: 1,
                    lastturu: 1,
                    lastseen: 1,
                    lastSetStatus: 1,
                    registered: false,
                    apel: 21,
                    gardenboxs: 10,
                    mangga: 1,
                    stroberi: 1,
                    semangka: 1,
                    jeruk: 1,
                    semangka: 1,
                    name: this.getName(m.sender),
                    age: -1,
                    regTime: -1,
                    premium: false,
                    premiumTime: 1,
                    job: 'Pengangguran',
                    lbars: '[▒▒▒▒▒▒▒▒▒]',
                    role: 'Newbie ㋡',
                    registered: false,
                    name: this.getName(m.sender),
                    age: -1,
                    regTime: -1,
                    autolevelup: true,
                    lastIstigfar: 1,
				}
				let chat = global.db.data.chats[m.chat]
				if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
				if (chat) {
					if (!('isBanned' in chat)) chat.isBanned = false
					if (!('welcome' in chat)) chat.welcome = false
					if (!('autoread' in chat)) chat.autoread = false
					if (!('detect' in chat)) chat.detect = false
					if (!('sWelcome' in chat)) chat.sWelcome = ''
					if (!('sBye' in chat)) chat.sBye = ''
					if (!('sPromote' in chat)) chat.sPromote = ''
					if (!('sDemote' in chat)) chat.sDemote = ''
					if (!('delete' in chat)) chat.delete = false
					if (!('antiLink' in chat)) chat.antiLink = true
					if (!('viewonce' in chat)) chat.viewonce = false
					if (!('antiToxic' in chat)) chat.antiToxic = false
				} else global.db.data.chats[m.chat] = {
					isBanned: false,
					welcome: false,
					autoread: false,
					detect: false,
					sWelcome: '',
					sBye: '',
					sPromote: '',
					sDemote: '',
					delete: false,
					antiLink: false,
					viewonce: false,
					antiToxic: false,
				}
			} catch (e) {
				console.error(e)
			}
			if (opts['nyimak']) return
			if (!m.fromMe && opts['self']) return
			if (opts['pconly'] && m.chat.endsWith('g.us')) return
			if (opts['gconly'] && !m.chat.endsWith('g.us')) return
			if (opts['swonly'] && m.chat !== 'status@broadcast') return
			if (typeof m.text !== 'string') m.text = ''
			if (opts['queque'] && m.text) {
				this.msgqueque.push(m.id || m.key.id)
				await delay(this.msgqueque.length * 1000)
			}
			for (let name in global.plugins) {
				let plugin = global.plugins[name]
				if (!plugin) continue
				if (plugin.disabled) continue
				if (!plugin.all) continue
				if (typeof plugin.all !== 'function') continue
				try {
					await plugin.all.call(this, m, chatUpdate)
				} catch (e) {
					if (typeof e === 'string') continue
					console.error(e)
				}
			}
			if (m.isBaileys) return
			m.exp += Math.ceil(Math.random() * 10)

			let usedPrefix
			let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

			let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
			let isOwner = isROwner || m.fromMe
			let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
			let isPrems = global.db.data.users[m.sender].premium
			let groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
			let participants = (m.isGroup ? groupMetadata.participants : []) || []
			let user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
			let bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
			let isAdmin = user && user.admin || false // Is User Admin?
			let isBotAdmin = bot && bot.admin || false // Are you Admin?
			for (let name in global.plugins) {
				let plugin = global.plugins[name]
				if (!plugin) continue
				if (plugin.disabled) continue
				if (!opts['restrict'])
					if (plugin.tags && plugin.tags.includes('admin')) {
						// global.dfail('restrict', m, this)
						continue
					}
				const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
				let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
				let match = (_prefix instanceof RegExp ? // RegExp Mode?
					[
						[_prefix.exec(m.text), _prefix]
					] :
					Array.isArray(_prefix) ? // Array?
					_prefix.map(p => {
						let re = p instanceof RegExp ? // RegExp in Array?
							p :
							new RegExp(str2Regex(p))
						return [re.exec(m.text), re]
					}) :
					typeof _prefix === 'string' ? // String?
					[
						[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
					] : [
						[
							[], new RegExp
						]
					]
				).find(p => p[1])
				if (typeof plugin.before === 'function')
					if (await plugin.before.call(this, m, {
							match,
							conn: this,
							participants,
							groupMetadata,
							user,
							bot,
							isROwner,
							isOwner,
							isAdmin,
							isBotAdmin,
							isPrems,
							chatUpdate,
						})) continue
				if (typeof plugin !== 'function') continue
				if ((usedPrefix = (match[0] || '')[0])) {
					let noPrefix = m.text.replace(usedPrefix, '')
					let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
					args = args || []
					let _args = noPrefix.trim().split` `.slice(1)
					let text = _args.join` `
					command = (command || '').toLowerCase()
					let fail = plugin.fail || global.dfail // When failed
					let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
						plugin.command.test(command) :
						Array.isArray(plugin.command) ? // Array?
						plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
							cmd.test(command) :
							cmd === command
						) :
						typeof plugin.command === 'string' ? // String?
						plugin.command === command :
						false

					if (!isAccept) continue
					m.plugin = name
					if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
						let chat = global.db.data.chats[m.chat]
						let user = global.db.data.users[m.sender]
						if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
						if (name != 'unbanuser.js' && user && user.banned) return
					}
					if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
						fail('owner', m, this)
						continue
					}
					if (plugin.rowner && !isROwner) { // Real Owner
						fail('rowner', m, this)
						continue
					}
					if (plugin.owner && !isOwner) { // Number Owner
						fail('owner', m, this)
						continue
					}
					if (plugin.mods && !isMods) { // Moderator
						fail('mods', m, this)
						continue
					}
					if (plugin.premium && !isPrems) { // Premium
						fail('premium', m, this)
						continue
					}
					if (plugin.group && !m.isGroup) { // Group Only
						fail('group', m, this)
						continue
					} else if (plugin.botAdmin && !isBotAdmin) { // You Admin
						fail('botAdmin', m, this)
						continue
					} else if (plugin.admin && !isAdmin) { // User Admin
						fail('admin', m, this)
						continue
					}
					if (plugin.private && m.isGroup) { // Private Chat Only
						fail('private', m, this)
						continue
					}
					if (plugin.register == true && _user.registered == false) { // Butuh daftar?
						fail('unreg', m, this)
						continue
					}
					m.isCommand = true
					let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
					if (xp > 200) m.reply('Ngecit -_-') // Hehehe
					else m.exp += xp
					if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
						this.reply(m.chat, `Your limit runs out, please buy through ${usedPrefix}buylimit, or contact the owner sazumi-bot *+628873133561*`, m)
						continue
					}
					if (plugin.level > _user.level) {
						this.reply(m.chat, `Levels required ${plugin.level} to use this command. your level ${_user.level}`, m)
						continue
					}
					let extra = {
						match,
						usedPrefix,
						noPrefix,
						_args,
						args,
						command,
						text,
						conn: this,
						participants,
						groupMetadata,
						user,
						bot,
						isROwner,
						isOwner,
						isAdmin,
						isBotAdmin,
						isPrems,
						chatUpdate,
					}
					try {
						await plugin.call(this, m, extra)
						if (!isPrems) m.limit = m.limit || plugin.limit || false
					} catch (e) {
						m.error = e
						console.error(e)
						if (e) {
							let text = util.format(e)
							for (let key of Object.values(APIKeys))
								text = text.replace(new RegExp(key, 'g'), 'sazumiviki')
							if (e.name)
								for (let jid of owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid)) {
									let data = (await this.onWhatsApp(jid))[0] || {}
									if (data.exists)
										m.reply(`• Plugin: ${m.plugin}\n*• Sender:* @${m.sender.split`@`[0]}\n*• Chat:* ${m.chat}\n*• Chat Name:* ${await this.getName(m.chat)}\n*• Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid, {
											mentions: [m.sender]
										})
								}
							m.reply(text)
						}
					} finally {
						if (typeof plugin.after === 'function') {
							try {
								await plugin.after.call(this, m, extra)
							} catch (e) {
								console.error(e)
							}
						}
					//	if (m.limit) m.reply(+m.limit + ' Limit terpakai')
					}
					break
				}
			}
		} catch (e) {
			console.error(e)
		} finally {
			let user, stats = global.db.data.stats
			if (m) {
				if (m.sender && (user = global.db.data.users[m.sender])) {
					user.exp += m.exp
					user.limit -= m.limit * 1
				}

				let stat
				if (m.plugin) {
					let now = +new Date
					if (m.plugin in stats) {
						stat = stats[m.plugin]
						if (!isNumber(stat.total)) stat.total = 1
						if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
						if (!isNumber(stat.last)) stat.last = now
						if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
					} else stat = stats[m.plugin] = {
						total: 1,
						success: m.error != null ? 0 : 1,
						last: now,
						lastSuccess: m.error != null ? 0 : now
					}
					stat.total += 1
					stat.last = now
					if (m.error == null) {
						stat.success += 1
						stat.lastSuccess = now
					}
				}
			}

			try {
				require('./lib/print')(m, this)
			} catch (e) {
				console.log(m, m.quoted, e)
			}
			if (opts['autoread']) await this.readMessages([m.key])
		}
	},
	async participantsUpdate({
		id,
		participants,
		action
	}) {
		if (opts['self']) return
		if (global.isInit) return
		let chat = global.db.data.chats[id] || {}
		let text = ''
		switch (action) {
			case 'add':
			case 'remove':
				if (chat.welcome) {
					let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata;
					for (let user of participants) {
					  let pp = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png';
					  try {
						pp = await this.profilePictureUrl(user, 'image');
					  } catch (e) {
						console.log(e);
					  } finally {
						let text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
						  (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', `@${user.split`@`[0]}`);
						
						this.sendMessage(id, {
						  text: text,
						  contextInfo: {
							mentionedJid: [user],
							externalAdReply: {
							  title: `${global.namebot}`,
						   // body: action === 'add' ? "💬 WELCOME" : "💬 GOODBYE",
							  thumbnailUrl: pp,
							  sourceUrl: `${global.gc}`,
							  mediaType: 1,
							  renderLargerThumbnail: true
							}
						  }
						});
					  }
					}
				  }
				
				break
			case 'promote':
				text = (chat.sPromote || this.spromote || conn.spromote || '@user is now Admin')
			case 'demote':
				if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user is no longer Admin')
				text = text.replace('@user', '@' + participants[0].split('@')[0])
				if (chat.detect) this.sendMessage(id, text, {
					contextInfo: {
						mentionedJid: this.parseMention(text)
					}
				})
				break
		}
	},
	async delete({
		remoteJid,
		fromMe,
		id,
		participant
	}) {
		if (fromMe) return
		let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
		if (!chats) return
		let msg = JSON.parse(chats[1].messages[id])
		let chat = global.db.data.chats[msg.key.remoteJid] || {}
		if (chat.delete) return
		await this.reply(msg.key.remoteJid, `
Detected @${participant.split`@`[0]} have deleted messages
To turn this feature off, type
.enable delete
`.trim(), msg, {
			mentions: [participant]
		})
		this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
	}
}

global.dfail = async (type, m, conn) => {
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/510e37bebbf7a780e7ade93a66f268ff.jpg')
  let {
    data
  } = await conn.getFile(await (await require('node-fetch')(pp)).buffer())
  let msg = {
    rowner: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ʙʏ ᴛʜᴇ ʀᴇᴀʟ ᴏᴡɴᴇʀ.`,
    owner: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ʙʏ ᴛʜᴇ ᴏᴡɴᴇr.`,
    mods: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ʙʏ ᴍᴏᴅᴇʀᴀᴛᴏʀ.`,
    premium: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ꜰᴏʀ ᴘʀᴇᴍɪᴜᴍ ᴍᴇᴍʙᴇʀꜱ ᴏɴʟʏ.`,
    group: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘꜱ.`,
    private: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ.`,
    admin: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ.`,
    botAdmin: `ʜᴀɪ @${m.sender.split('@')[0]}, ᴍᴀᴋᴇ ᴛʜᴇ ʙᴏᴛ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ.`,
    unreg: `ʜᴀɪ *@${m.sender.split('@')[0]}*⁩, ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ᴜꜱɪɴɢ ᴛʜᴇ ʙᴏᴛ, ᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ꜰɪʀꜱᴛ, ᴇxᴀᴍᴘʟᴇ:

•  *ᴍᴀɴᴜᴀʟ* : .ʀᴇɢɪꜱᴛᴇʀ ᴠɪᴋɪ.18
•  *ᴡɪᴛʜ ᴇᴍᴀɪʟ* : .ʀᴇɢᴍᴀɪʟ ʜɪ@ᴇᴍᴀɪʟ.ᴄᴏᴍ
`,
    restrict: 'ᴛʜɪꜱ ꜰᴇᴀᴛᴜʀᴇ ɪꜱ ᴅɪꜱᴀʙʟᴇᴅ.'
  } [type]
  if (msg) {
    conn.reply(m.chat, msg, m, {
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `${global.sazumiviki_title}`,
          thumbnailUrl: `${global.sazumiviki_thumb}`,
       // thumbnailUrl: pp,
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    })
  }
}


const now = new Date();
const options = {
  timeZone: 'Asia/Makassar',
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
const formatter = new Intl.DateTimeFormat('en-US', options);
const datetimeString = formatter.format(now);
console.log(`Your current date and time in Makassar is: ${repairTemplateString(datetimeString)}`);

//fixdelay
let handler = {};
handler.run = async (m, chat, args) => {
  fixdelay.fixDelay(conn, m);
};

//report-erorr
let handlers = [
  reportError,
];

//function
global.Func = new Function();

//exited
fixerror(conn);

//autobackup
autobackup(conn)

//exited
try {
} catch (error) {
  handleExitedError(error);
}


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'handler.js'"))
	delete require.cache[file]
	if (global.reloadHandler) console.log(global.reloadHandler())
})