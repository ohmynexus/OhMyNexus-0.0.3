global.owner = ['6282177779477'];
global.mods = ['6282177779477'];
global.prems = ['6282177779477'];

global.nameowner = 'addykece';
global.numberowner = '6282177779477';
global.mail = 'addykece010911@hotmail.com';

global.namebot = 'XDA - OhMyNexus';
global.gc = 'https://chat.whatsapp.com/';
global.web = 'https://ohmynexus.xyz';
global.instagram = 'https://www.instagram.com/addykece_/';

global.lolkey = 'haikalgans';
global.sazumiviki_title = 'OhMyNexus'
global.sazumiviki_thumb = 'https://telegra.ph/file/f02511798bc638a249e5a.png'
global.sazumiviki_source = 'https://www.instagram.com/addykece_/'
global.sazumiviki_profile = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/510e37bebbf7a780e7ade93a66f268ff.jpg'
global.sig = 'https://www.instagram.com/addykece_/'
global.sazumi_version = '© OhMyNexus - Bot'
global.footer = 'OhMyNexus By addykece; With <3'
global.wm = 'OhMyNexus';
global.watermark = wm;
global.wait = 'Wait a moment..';
global.sazumiviki_imgur = 'Client-ID 5f98ee8de4fa3c5';
global.rose = 'Rk-bd116451aa3883e018c20c1b_free_tier';
global.xzn = 'sazumiviki';
global.sourceUrl = 'https://www.instagram.com/addykece_/';

global.stiker_wait = 'Wait a moment..';
global.packname = 'addykece';
global.author = 'OhMyNexus';

global.APIs = {
  lolhuman: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  skizo: 'https://xzn.wtf/',
  sazumiviki: 'https://api.sazumiviki.me'
};

global.APIKeys = {
  'https://api.sazumiviki.me': 'sazumiviki',
  'https://xzn.wtf/': 'sazumiviki',
  'https://api.itsrose.life': 'Rk-bd116451aa3883e018c20c1b_free_tier',
  'https://api.lolhuman.xyz': 'haikalgans',
};

global.multiplier = 45;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈',
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

let fs = require('fs');
let chalk = require('chalk');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});