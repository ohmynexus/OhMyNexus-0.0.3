<h3>SAZUMI-BOT (BETA VERSION)</h3>

![sazumi-bot](https://cdn.jsdelivr.net/gh/SazumiVicky/sazumi-bot@main/storage/20230810_130446.jpg)

##

<h4>What is sazumi-bot ?</h4>
<p>Sazumi-bot is a multi-device WhatsApp bot that is derived from the Ayaka V2 package, more precisely, sazumi-bot is the upcoming version that will be enhanced and will become the stable version.</p>

##
<h>**config.js**</h2>

```javascript
global.owner = ['628873133561']; // Your number is here
global.mods = ['628873133561']; // Your number is here
global.prems = ['628873133561']; // Your number is here

global.nameowner = 'Sazumi Viki'; // Owner name
global.numberowner = '628873133561'; // Owner number
global.mail = 'hi@sazumiviki.dev'; // Owner E-mail

global.namebot = 'Sazumi - Bot Whatsapp'; // Your bot name
global.gc = 'https://chat.whatsapp.com/LqvyPGgU82ZHogxjpU60BE'; // Your group
global.web = 'https://chat.whatsapp.com/LqvyPGgU82ZHogxjpU60BE'; // Your site
global.instagram = 'https://instagram.com/moe.sazumiviki'; // Your instagram account

global.lolkey = 'xxxxxx'; // Your LoL Human Api
global.sazumiviki_title = 'Sazumi - Bot Whatsapp' // Your Title Here
global.sazumiviki_thumb = 'https://cdn.jsdelivr.net/gh/SazumiVicky/sazumi-bot@main/storage/20230810_130446.jpg' // Thumbnail Url Here
global.sazumiviki_source = 'https://instagram.com/moe.sazumiviki' // Your Source Url Here
global.sazumiviki_profile = 'https://cdn.jsdelivr.net/gh/SazumiVicky/Storage@main/510e37bebbf7a780e7ade93a66f268ff.jpg' // When there is no profile photo
global.sig = 'https://instagram.com/moe.sazumiviki' // Your instagram url
global.footer = '≈ ꜱᴀᴢᴜᴍɪ-ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴢᴜᴍɪ ᴠɪᴋɪ' // Your Bot Footer
global.wm = 'Sazumi - Bot Whatsapp'; // Watermak 
global.watermark = wm; // Dont Change This
global.wait = 'Wait a moment..'; // Dont change this
global.sazumiviki_imgur = 'Client-ID xxxxxxxxxxxxx'; // Your imgur Client-iD Here: https://api.imgur.com/oauth2/addclient
global.rose = 'Rs-xxxxxxx'; // Your Rose apikey
global.xzn = 'xxxxxxxxxx'; // Your xzn apikey
global.sourceUrl = 'https://Instagram.com/moe.sazumiviki'; // Your source url

global.stiker_wait = 'Wait a moment..'; // Dont change this
global.packname = '@moe.sazumiviki'; // Your packname sticker
global.author = 'MakeMeow\n'; // Your Author sticker

/*
* This section is down, don t change it
*/

global.APIs = {
  lolhuman: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  rey: 'https://api.sazumiviki.me'
};

global.APIKeys = {
  'https://api.sazumiviki.me': 'sazumiviki',
  'https://api.itsrose.life': 'sazumiviki',
  'https://api.lolhuman.xyz': 'sazumiviki',
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
```
##

<h4>How much does sazumi-bot script cost?</h4>

- 🏷️ IDR **Rp 100.000** / **$ 66** Free Update 2x</b>

##

<h4>Bot Code Type</h4>

- <b>Plugins</b>
- ~Case~

##

**Benefits**
- [x] Free updates according to plan
- [x] Free [LoL Human REST APIs](https://api.lolhuman.xyz) [ **5month** ]
- [x] Bonus [ITSROSE - APIs](https://api.itsrose.life)
      
##

<h4>Where can I buy sazumi-bot script officially?</h4>

- [Whatsapp](https://wa.me/+628873133561)
- [Telegram](https://t.me/sazumiviki)

##

<h4>Read this before purchasing the script</h4>

- Should I understand programming?
   - Yes, you should be able to master basic JavaScript & Node.js.

- Can I get a refund once I've received the script?
   - No, I do not accept refund requests.
 
- Are there any plugins that are encrypted?
   - Adding encryption to certain parts of the code in plugins, in order to prevent unauthorized transactions.

- Can I request a feature?
   - Yes, you are free to request any feature, but I may not necessarily develop it, though I will do my best.

- Is it possible to negotiate the price of the script?
   - No, I do not accept price negotiations.

- Can I get the script for free?
   - No, I do not provide the script for free

- How many times can I change my IP address?
   - You can change your IP address up to 5 times.

- When I have used all of my IP addresses, will there be a charge to obtain more IP slots?
   - Yes, you will incur an additional fee to obtain more IP slots. The cost for 1 IP slot is **Rp 15.000,00** / **$1**.

- Will I get the werewolf and blackjack features as well?
   - I'm sorry, I haven't published the werewolf and blackjack features yet.
 
- Which features do you encrypt?
   - I encrypted the **index.js**, **print.js**, and **viki-regmail.js** files **(97% Not Encrypted)**.

- Why did you encrypt the code?
   - I encrypted the code to prevent it from being sold, and the encrypted code doesn't contain any watermark within the text message.

- Am I allowed to share plugins, code, and bot api keys with others?
   - No, I strongly prohibit that.

##

<h4>The script is supported to run on:</h4>

- [x] Rdp
- [x] Vps
- [x] Railway
- [x] Panel Pterodactyl  

##

<h4>Minimum specifications required</h4>

- [x] **Node Version:** 18.16.1
- [x] **Npm Version:** 9.8.0
- [x] **Cpu:** 300%
- [x] **Memory:** 3GB
- [x] **Disk:** 5GB

##

<h4>Recommendations specifications required</h4>

- [x] **Node Version:** 18.16.1
- [x] **Npm Version:** 9.8.0
- [x] **Cpu:** 400%
- [x] **Memory:** 8GB
- [x] **Disk:** 10GB

##

Demo : [sazumi-bot v1.0.0](https://wa.me/62857961868359?text=.menu)
<br>
Creator : [Sazumi Viki](https://wa.me/628873133561)
<br>
Official Group : [PEKO PEKO](https://chat.whatsapp.com/LqvyPGgU82ZHogxjpU60BE)

##

<h4>Latest changelog update</h4>

| ChangeLog | Published On |
| ----- | ------------ |
|  New feature, **create subdomains** and **delete subdomains** ( cloudflare )| Tue Aug 22 2023 |
|  Fixed **simi simi** features| Tue Aug 22 2023 |
|  Fix **Antiporn**| Mon Aug 21 2023 |
|  Fixed the **pairing code** error when entering the **pairing code**| Fri Aug 18 2023 |
|  Added features **Tebak Bom**| Fri Aug 18 2023 |
|  Fixed **Backup** Feature on Bot| Thu Aug 17 2023 |
|  Updating the data on the **lyric feature**| Tue Aug 15 2023 |
|  Added **ram** usage **limit**| Tue Aug 15 2023 |
|  Add Feature **Tts**| Mon Aug 14 2023 |
|  New Feature **Compress Image**| Sun Aug 13 2023 |
|  New Feature **Deepfake**| Sun Aug 13 2023 |
|  New Sticker Feature **.snobg (Sticker without background)** & **.scircle (Circle shape sticker)**| Sun Aug 13 2023 |
|  Remove **Bard Ai**| Sat Aug 12 2023 |
|  Fix **Emojimix**| Fri Aug 11 2023 |
|  Starting **sazumi-bot version 1.0.0** and onwards| Thu Aug 10 2023 |
