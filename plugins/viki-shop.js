
const potion = 20000
const Spotion = 100 
const Bdiamond = 100000
const Sdiamond = 1000
const Bcommon = 100000
const Scommon = 1000
const Suncommon = 100
const Buncommon = 100000
const Bmythic = 100000
const Smythic = 1000
const Blegendary = 200000
const Slegendary = 5000
const Bsampah = 120
const Ssampah = 5
const Bkayu = 1000
const Skayu = 400
const Bbotol = 300
const Sbotol = 50
const Bkaleng = 400
const Skaleng = 100
const Bkardus = 400
const Skardus = 50
const Bpisang = 5500
const Spisang = 100
const Bmangga = 4600
const Smangga = 150
const Bjeruk = 6000
const Sjeruk = 300
const Banggur = 5500
const Sanggur = 150
const Bapel = 5500
const Sapel = 400
const Bbibitpisang = 550
const Sbibitpisang = 50
const Bbibitmangga = 550
const Sbibitmangga = 50
const Bbibitjeruk = 550
const Sbibitjeruk = 50
const Bbibitanggur = 550
const Sbibitanggur = 50
const Bbibitapel = 550
const Sbibitapel = 50
const Bgardenboxs = 65000
const Sgardenboc = 350000
const Bberlian = 150000
const Sberlian = 10000
const Bemasbatang = 250000
const Semasbatang = 10000
const Bemasbiasa = 150000
const Semasbiasa = 15000
const Bphonix = 1000000000
const Sphonix = 1000000
const Bgriffin = 100000000
const Sgriffin = 100000
const Bkyubi = 100000000
const Skyubi = 100000
const Bnaga = 100000000
const Snaga = 100000
const Bcentaur = 100000000
const Scentaur = 100000
const Bkuda = 50000000
const Skuda = 100000
const Brubah = 100000000
const Srubah = 100000
const Bkucing = 5000000
const Skucing = 50000
const Bserigala = 50000000
const Sserigala = 500000
const Bmakananpet = 50000
const Smakananpet = 500
const Bmakananphonix = 80000
const Smakananphonix = 5000
const Bmakanangriffin = 80000
const Smakanangriffin = 5000
const Bmakanannaga = 150000
const Smakanannaga = 10000
const Bmakanankyubi = 150000
const Smakanankyubi = 10000
const Bmakanancentaur = 150000
const Smakanancentaur = 10000
const Bhealtmonster = 20000
const Bpet = 150000
const Spet = 1000
const Blimit = 30000
const Slimit = 10000
const Bexp = 550
const Baqua = 5000
const Saqua = 1000
const Biron = 20000
const Siron = 5000
const Bstring = 50000
const Sstring = 5000
const Bsword = 150000
const Ssword = 15000
const Bumpan = 1500
const Sumpan = 100
const Bpancingan = 5000000
const Spancingan = 500000
const BBensin = 20000
const BWeap = 150000
const SWeap = 15000
const SBensin = 10000
const Bbatu = 500
const Sbatu = 100
const Bketake = 15
const Btiketcoin = 500
const Bkoinexpg = 500000
const BObat = 15000
const ObatStock = 500
const Beleksirb = 500
const BnStock  = 9999
const WeapStock = 50
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `
Penggunaan ${usedPrefix}shop <Buy|sell> <item> <jumlah>
Contoh penggunaan: *${usedPrefix}shop buy potion 1*

============================
*Kebutuhan   |  Harga Beli*
Limit:     ${Blimit}
TiketM:     ${Bhealtmonster}
Cupon:     ${Btiketcoin}
KoinExpg:     ${Bkoinexpg}

*Kebutuhan   |  Harga Jual*
Limit:     ${Slimit}
============================
*Bibit Buah   |  Harga Beli*
BibitPisang:       ${Bbibitpisang}
BibitAnggur:       ${Bbibitanggur}
BibitMangga:       ${Bbibitmangga}
BibitJeruk:       ${Bbibitjeruk}
BibitApel:       ${Bbibitapel}
Gardenboxs:     ${Bgardenboxs}
============================
*Barang   |  Harga Beli*
Potion:       ${potion}
Diamond:     ${Bdiamond}
Common:     ${Bcommon}
Uncommon:  ${Buncommon}
Mythic:     ${Bmythic}
Legendary: ${Blegendary}
Sampah:     ${Bsampah}
Armor:       ${armor}
String:       ${Bstring}
Iron:       ${Biron}
Sword:       ${Bsword}
Batu:       ${Bbatu}
Botol:       ${Bbotol}
Kaleng:       ${Bkaleng}
Kardus:       ${Bkardus}
Kayu:       ${Bkayu}
Berlian:       ${Bberlian}
Emas:       ${Bemasbiasa}
Bensin: ${BBensin} | Stock: ${BnStock}
Weapon: ${BWeap} | Stock: ${WeapStock}
Obat: ${BObat} | Stock: ${ObatStock}

*Barang   | Harga Jual*
Potion:       ${Spotion}
Diamond:     ${Sdiamond}
Common:     ${Scommon}
Uncommon:  ${Suncommon}
Mythic:     ${Smythic}
Legendary: ${Slegendary}
Sampah:     ${Ssampah}
String:       ${Sstring}
Iron:       ${Siron}
Sword:       ${Ssword}
Batu:       ${Sbatu}
Botol:       ${Sbotol}
Kaleng:       ${Skaleng}
Kardus:       ${Skardus}
Kayu:       ${Skayu}
Berlian:       ${Sberlian}
Emas:       ${Semasbiasa}
Bensin: ${SBensin} | Stock: ${BnStock}
Weapon: ${SWeap} | Stock: ${WeapStock}
============================
*List Makanan:*

*Makanan | Harga Beli*
Pisang:       ${Bpisang}
Anggur:       ${Banggur}
Mangga:       ${Bmangga}
Jeruk:       ${Bjeruk}
Apel:       ${Bapel}
MakananPet:       ${Bmakananpet}
MakananNaga:       ${Bmakanannaga}
MakananKyubi:       ${Bmakanankyubi}
MakananGriffin:       ${Bmakanangriffin}
MakananPhonix:       ${Bmakananphonix}
MakananCentaur:       ${Bmakanancentaur}

*Makanan | Harga Jual*
Pisang:       ${Spisang}
Anggur:       ${Sanggur}
Mangga:       ${Smangga}
Jeruk:       ${Sjeruk}
Apel:       ${Sapel}
MakananPet:       ${Smakananpet}
MakananNaga       ${Smakanannaga}
MakananKyubi:       ${Smakanankyubi}
MakananGriffin:       ${Smakanangriffin}
MakananPhonix:       ${Smakananphonix}
MakananCentaur:       ${Smakanancentaur}
============================
*Minuman | Harga Beli*
Aqua:       ${Baqua}

*Minuman | Harga Jual*
Aqua:       ${Saqua}
============================
*Fishing | Harga Beli*
Pancingan:       ${Bpancingan}
Umpan:       ${Bumpan}
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].balance >= potion * count) {
                                global.db.data.users[m.sender].balance -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} balance\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} balance`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].balance >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].balance -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} balance`, m)
                            } else conn.reply(m.chat, `balance anda tidak cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].balance >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].balance -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                          
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].balance >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].balance -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].balance >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].balance -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].balance >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].balance -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].balance >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].balance -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} balance`.trim(), m)
                        
                        break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].balance >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].balance -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} balance`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].balance >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].balance -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} balance`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].balance >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].balance -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} balance`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].balance >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].balance -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} balance`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].balance >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].balance -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} balance`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].balance >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].balance -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} balance`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].balance >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].balance -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} balance`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].balance >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].balance -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} balance`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].balance >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].balance -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} balance`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].balance >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} balance`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].balance >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} balance`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].balance >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} balance`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].balance >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} balance`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].balance >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} balance`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].balance >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].balance -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga ${Bgardenboxs * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} gardenboxs dengan harga ${Bgardenboxs * count} balance`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].balance >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].balance -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Berlian dengan harga ${Bberlian * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} balance`.trim(), m)
                        
                        break
                    case 'bensin':
                            if (global.db.data.users[m.sender].balance >= BBensin * count) {
                                global.db.data.users[m.sender].bensin += count * 1
                                global.db.data.users[m.sender].balance -= BBensin * count
                                conn.reply(m.chat, `Succes membeli ${count}L Bensin dengan harga ${BBensin * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bensin dengan harga ${BBensin * count} balance`.trim(), m)
                        
                        break
                        case 'weapon':
                            if (global.db.data.users[m.sender].balance >= BWeap * count) {
                                global.db.data.users[m.sender].weapon += count * 1
                                global.db.data.users[m.sender].balance -= BWeap * count
                                conn.reply(m.chat, `Succes membeli ${count} Weapon dengan harga ${BWeap * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Weapon dengan harga ${BWeap * count} balance`.trim(), m)
                        
                        break
                        case 'obat':
                            if (global.db.data.users[m.sender].balance >= BObat * count) {
                                global.db.data.users[m.sender].obat += count * 1
                                global.db.data.users[m.sender].balance -= BObat * count
                                conn.reply(m.chat, `Succes membeli ${count} kapsul Obat dengan harga ${BObat * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kapsul Obat dengan harga ${BObat * count} balance`.trim(), m)
                        
                        break
                        
                    case 'emas':
                            if (global.db.data.users[m.sender].balance >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].balance -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} balance`.trim(), m)
                        
                        break 
                     case 'pet':
                            if (global.db.data.users[m.sender].balance >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].balance -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} balance`.trim(), m)
                        
                        break
                   case 'limit':
                            if (global.db.data.users[m.sender].balance >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].balance -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} balance`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].balance >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].balance -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} exp dengan harga ${Bexp * count} balance`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].balance >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].balance -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} balance`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].balance >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].balance -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga ${Bkoinexpg * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} koinexpg dengan harga ${Bkoinexpg * count} balance`.trim(), m)
                        
                        break*/
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                  case 'makananpet':
                            if (global.db.data.users[m.sender].balance >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].balance -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} balance`.trim(), m)
                        
                        break 
                case 'makanannaga':
                            if (global.db.data.users[m.sender].balance >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan naga dengan harga ${Bmakanannaga * count} balance`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].balance >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].balance -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan phonix dengan harga ${Bmakananphonix * count} balance`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].balance >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} balance`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].balance >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} balance`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].balance >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} balance`.trim(), m)
                        
                        break 
                  case 'tiketm':
                            if (global.db.data.users[m.sender].balance >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].balance -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} balance`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].balance >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].balance -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} balance`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].balance >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].balance -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} balance`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].balance >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].balance -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} balance`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].balance >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].balance -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} balance`.trim(), m)
                        
                        break 
                  case 'batu':
                            if (global.db.data.users[m.sender].balance >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].balance -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} balance`.trim(), m)
                        
                        break 
                    case 'umpan':
                            if (global.db.data.users[m.sender].balance >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].balance -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} balance`.trim(), m)
                        
                        break 
                    case 'pancingan':
                            if (global.db.data.users[m.sender].balance >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].balance -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} balance`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].balance > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].balance -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} balance` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} balance`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].balance += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} balance`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].balance += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} balance`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].balance += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} balance`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].balance += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} balance`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].balance += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} balance`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].balance += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} balance`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].balance += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} balance`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].balance += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} balance`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].balance += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} balance`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].balance += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} balance`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].balance += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} balance`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m)
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].balance += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} balance`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].balance += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} balance`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].balance += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} balance`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].balance += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} balance`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                   case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].balance += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} balance`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].balance += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas , dan anda mendapatkan ${Semasbiasa * count} balance`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break  
                   case 'bensin':
                        if (global.db.data.users[m.sender].bensin >= count * 1) {
                            global.db.data.users[m.sender].bensin -= count * 1
                            global.db.data.users[m.sender].balance += SBensin * count
                            conn.reply(m.chat, `Succes menjual ${count} bensin , dan anda mendapatkan ${SBensin * count} balance`, m)
                        } else conn.reply(m.chat, `Bensin anda tidak cukup`, m)  
                        break  
                   case 'weapon':
                        if (global.db.data.users[m.sender].weapon >= count * 1) {
                            global.db.data.users[m.sender].weapon -= count * 1
                            global.db.data.users[m.sender].balance += SWeap * count
                            conn.reply(m.chat, `Succes menjual ${count} Weapon , dan anda mendapatkan ${SWeap * count} balance`, m)
                        } else conn.reply(m.chat, `Weapon anda tidak cukup`, m)  
                        break  
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].balance += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} balance`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                    case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].balance += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                    case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].balance += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].balance += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].balance += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} balance`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].balance += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break 
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].balance += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].balance += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} balance`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].balance += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} balance`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].balance += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} balance`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].balance += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} balance`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].balance += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} balance`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].balance += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} balance`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].balance += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} balance`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].balance += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} balance`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].balance >= potion * count) {
                            global.db.data.users[m.sender].balance -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} balance\n\nGunakan potion dengan ketik: .heal <jumlah potion>`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} balance`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].balance >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].balance -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} balance`, m)
                        } else conn.reply(m.chat, `balance anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].balance >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].balance -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} balance`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].balance >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].balance -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} balance`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].balance >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].balance -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} balance`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].balance >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].balance -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} balance`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} balance\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].balance >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].balance -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} balance`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} balance`.trim(), m)
                    
                    break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].balance >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].balance -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} balance`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].balance >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].balance -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} balance`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].balance >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].balance -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} balance`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].balance >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].balance -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} balance`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].balance >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].balance -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} balance`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].balance >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].balance -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} balance`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].balance >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].balance -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} balance`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].balance >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].balance -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} balance`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].balance >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].balance -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} balance`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].balance >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} balance`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].balance >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} balance`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].balance >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} balance`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].balance >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} balance`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].balance >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].balance -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} balance`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].balance >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].balance -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga ${Bgardenboxs * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} gardenboxs dengan harga ${Bgardenboxs * count} balance`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].balance >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].balance -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bberlian * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} balance`.trim(), m)
                        
                        break
                    case 'emas':
                            if (global.db.data.users[m.sender].balance >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].balance -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} balance`.trim(), m)
                        
                        break  
                     case 'pet':
                            if (global.db.data.users[m.sender].balance >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].balance -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} balance`.trim(), m)
                        
                        break
                  case 'limit':
                            if (global.db.data.users[m.sender].balance >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].balance -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} limit dengan harga ${Blimit * count} balance`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].balance >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].balance -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} exp dengan harga ${Bexp * count} balance`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].balance >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].balance -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} balance`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].balance >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].balance -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga ${Bkoinexpg * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} koinexpg dengan harga ${Bkoinexpg * count} balance`.trim(), m)
                        
                        break*/
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                 case 'makananpet':
                            if (global.db.data.users[m.sender].balance >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].balance -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} balance`.trim(), m)
                        
                        break
                case 'makanannaga':
                            if (global.db.data.users[m.sender].balance >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakanannaga * count} balance`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].balance >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].balance -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananphonix * count} balance`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].balance >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} balance`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].balance >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} balance`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].balance >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].balance -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} balance`.trim(), m)
                        
                        break 
                case 'tiketm':
                            if (global.db.data.users[m.sender].balance >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].balance -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} balance`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].balance >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].balance -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} balance`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].balance >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].balance -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} balance`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].balance >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].balance -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} balance`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].balance >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].balance -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} balance`.trim(), m)
                        
                        break
                  case 'batu':
                            if (global.db.data.users[m.sender].balance >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].balance -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} balance`.trim(), m)
                        
                        break 
                 case 'umpan':
                            if (global.db.data.users[m.sender].balance >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].balance -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} balance`.trim(), m)
                        
                        break
                    case 'pancingan':
                            if (global.db.data.users[m.sender].balance >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].balance -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} balance`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} balance`.trim(), m)
                        
                        break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].balance > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].balance -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} balance` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} balance`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].balance += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].balance += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].balance += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].balance += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].balance += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].balance += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} balance`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].balance += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} balance`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].balance += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} balance`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].balance += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} balance`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].balance += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} balance`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].balance += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} balance`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m) 
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].balance += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} balance`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].balance += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} balance`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].balance += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} balance`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].balance += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} balance`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                    case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].balance += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} balance`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].balance += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas, dan anda mendapatkan ${Semasbiasa * count} balance`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].balance += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} balance`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                 case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].balance += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].balance += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                 case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].balance += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].balance += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} balance`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].balance += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].balance += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} balance`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].balance += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} balance`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].balance += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} balance`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].balance += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} balance`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].balance += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} balance`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].balance += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} balance`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].balance += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} balance`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].balance += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} limit, dan anda mendapatkan ${Slimit * count} balance`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].balance += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} balance`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
handler.register = true
handler.limit = true
handler.group = true
module.exports = handler
