const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, usedPrefix, owner }) => {
    try {
        let user = global.db.data.users[m.sender]
        let __timers = new Date() - (global.db.data.users[m.sender].lastadventure || 0);
        let _timers = 600000 - __timers;
        let timers = clockString(_timers);
        if (global.db.data.users[m.sender].health > 79) {
            if (new Date - user.lastadventure > 600000) {
                let _health = `${Math.floor(Math.random() * 101)}`.trim();
                let health = (_health * 1);
                let exp = `${Math.floor(Math.random() * 10000)}`.trim();
                let uang = `${Math.floor(Math.random() * 1000000)}`.trim();
                let _potion = ['1', '2', '3', '4', '4', '2'];
                let potion = _potion[Math.floor(Math.random() * _potion.length)];
                let _sampah = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
                let sampah = _sampah[Math.floor(Math.random() * _sampah.length)];
                let _diamond = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                let diamond = _diamond[Math.floor(Math.random() * _diamond.length)];
                let _common = ['1', '2', '3'];
                let common = _common[Math.floor(Math.random() * _common.length)];
                let _uncommon = ['1', '2', '1', '2', '3', '5', '4'];
                let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)];
                let _mythic = `${pickRandom(['1', '3', '1', '1', '2', '3', '2'])}`;
                let mythic = (_mythic * 1);
                let _legendary = `${pickRandom(['1', '3', '1', '1', '2', '2', '1'])}`;
                let legendary = (_legendary * 1);
                let itemrand = [
                    `*Selamat anda mendapatkan item rare yaitu*\n${mythic} Mythic Crate`,
                    `*Selamat kamu mendapatkan item rare yaitu*\n${legendary} Legendary Crate`
                ];
                let rendem = itemrand[Math.floor(Math.random() * itemrand.length)];
                let ages = 'https://telegra.ph/file/ea469189ccc6705a144bc.jpg';
                let location = pickRandom([
                    'Jepang', 'Korea', 'Bali', 'Amerika', 'Iraq', 'Arab', 'Pakistan', 'German',
                    'Finlandia', 'Ke bawa dunia mimpi', 'Ujung dunia', 'Mars', 'Zimbanwe',
                    'Bulan', 'Pluto', 'Matahari', 'Hatinya dia'
                ]);
                let str = `Sedang dalam proses petualangan menuju *${location}*...`;

                setTimeout(() => {
                    conn.reply(m.chat, str, m);
                }, 1000);

                setTimeout(() => {
                    let result = `Petualanganmu telah berakhir di *${location}* dan kamu mendapatkan:

• *Exp:* ${exp}
• *Balance:* ${uang}
• *Tiketcoin:* 1
• *Sampah:* ${sampah}${potion == 0 ? '' : '\n• *Potion:* ' + potion}${diamond == 0 ? '' : '\n• *Diamond:* ' + diamond} ${common == 0 ? '' : '\n• *Common Crate:* ' + common}${uncommon == 0 ? '' : '\n• *Uncommon Crate:* ' + uncommon}`;
                    conn.sendMessage(m.chat, {
                        text: result,
                        contextInfo: {
                            externalAdReply: {
                                title: `${global.namebot}`,
                                body: date,
                                thumbnailUrl: 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/20230526_175640.jpg',
                                sourceUrl: `${global.sourceUrl}`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                }, 3000);

                setTimeout(() => {
                    conn.reply(m.chat, rendem, m);
                }, 4000);

                global.db.data.users[m.sender].health -= health * 1;
                global.db.data.users[m.sender].exp += exp * 1;
                global.db.data.users[m.sender].tiketcoin += 1;
                global.db.data.users[m.sender].balance += uang * 1;
                global.db.data.users[m.sender].potion += potion * 1;
                global.db.data.users[m.sender].diamond += diamond * 1;
                global.db.data.users[m.sender].common += common * 1;
                global.db.data.users[m.sender].uncommon += uncommon * 1;
                global.db.data.users[m.sender].sampah += sampah * 1;
                global.db.data.users[m.sender].mythic += mythic * 1;
                global.db.data.users[m.sender].legendary += legendary * 1;
                global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silakan coba *${timers}* lagi`, m);
            
        } else conn.reply(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa terlebih dahulu dengan mengetik *' + usedPrefix + 'shop buy potion <jumlah>* dan ketik *' + usedPrefix + 'heal', m);
        
    } catch (e) {
        console.log(e);
        conn.reply(m.chat, 'Error', m);
    }
};

handler.help = ['adventure'];
handler.tags = ['rpg'];
handler.command = /^(adventure|berpetualang|adv)$/i;
handler.limit = true;
handler.group = false;
handler.fail = null;

module.exports = handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}