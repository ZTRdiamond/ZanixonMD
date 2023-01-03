module.exports = {
    name: "work",
    aliases: ['kerja'],
    code: `
$reply
Kamu bekerja sebagai *$get[kerja]* dan mendapatkan uang *$abbreviate[$get[upah]]*

$footer[$getVar[footer]]
$button[cid==>>work:💼Work;cid==>>balance:💳Balance]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$get[upah]]]

$let[upah;$minMax[30;500]]

$let[kerja;$randomText[Bartender;Pandai Besi;Pengrajin;Prajurit;Penjaga;Prajurit Bayaran;Perampok;Pencopet;Penipu;Penjarah;Pembegal;Pencuri;Petarung Jalanan;Algojo;Tukang Kayu;Nelayan;Pemburu Zombie]]

$globalCooldown[1m;❌ Tunggu %time% untuk bekerja lagi!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}