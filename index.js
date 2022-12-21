const { Client } = require("whatscode.js");
const bot = new Client({
  name: "Zanixon Games",
  prefix: ['$getVar[prefix]','.','cid==>>'] //cid==>> adalah custom id button agar bot lain tidak ikut balas command!
});

bot.status({
 status: ["✨︱©ZanixonMD","🔥︱Made with ♥️ by ZTRdiamond","🌟︱Epic RPG Whatsapp Bot","👨‍💻︱Made with Whatscode.js"],
 every: 15000
})


//handler 
const fs = require("fs");
const path = "./commands/";
var reader = fs.readdirSync(path).filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(path + file);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    code: command.code,
  });

}



bot.variables(require('./handler/variables/mainvar.js'))
bot.variables(require('./handler/variables/games.js'))

// required callback
bot.onConnectionUpdate(); // connection update
bot.onCredsUpdate(); // credentials update
bot.onMessage(); // message update

//bot commands

//main
bot.command({
	name: "owner",
	code: `
$reply
*Nomor Dibawah Ini Adalah Owner Kami*
wa.me/$splitText[1]
wa.me/$splitText[2]
$footer[$getVar[footer]]
$button[cid==>>menu:Menu Commands]

$textSplit[$getVar[owner];|]
`
})

bot.command({
	name: "donate",
	aliases: ['donasi','donat'],
	code: `
$reply
Sedekahnya kak $senderPushName plis🥺
$image[./assets/image/qris.png]
$button[cid==>>menu:Menu]
`
})

bot.command({
    name: "status",
    aliases: ['infobot','speed'],
    code: `
$reply
_Merespon dalam $minMax[100;1000] Milidetik!!!_
$footer[*Ping:* $pingms
*Ram:* $ram[usage] usage / $ram[total] total
*dbPing:* $dbPingms
*Node:* $nodeVersion
*Uptime:* $uptime

$getVar[footer]]
$button[cid==>>menu:Menu]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})



bot.command({
    name: "source",
    code: `
$reply
Bot whatsapp ini menggunakan package Whatscode.js(Beta)
$image[https://repository-images.githubusercontent.com/489881367/437b5777-ab5f-4598-8ac8-f18f9ff56d6f]
$footer[Jangan lupa share package nya biar semakin banyak kontributor dan pengguna😉

Docs: https://whatscode.jstnlt.my.id/]
$button[cid==>>menu:Menu]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
	name: "ping",
	code: `
$reply
🏓 Ping: $pingms
$footer[$getVar[footer]]
$button[cid==>>menu:Menu]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
});

//only owner 

//panel 
bot.command({
    name: "panel",
    code: `
$reply
╭──「 *Owner Bot Panel* 」
・ *kill*
 - digunakan untuk memberhentikan sistem bot 
・ *reboot*
 - digunakan untuk merestart bot 
・ *status*
 - digunakan untuk melihat statistik bot
╰─────────────────────❑
$footer[$getVar[footer]]

$addSectionsRows[Option List;Kill:cid==>>kill:Untuk mematikan bot;Reboot:cid==>>reboot:Untuk merestart bot;Status Bot:cid==>>status:Cek statistik bot]

$addSectionsDisplayText[Option List]

$addSections[Option List]

$onlySender[;$splitText[1];$splitText[2]]

$textSplit[$getVar[owner];|]
`
})

//eval
bot.command({
    name: "eval",
    code: `
$reply
*Eval:*
$eval[$message]

$onlySender[;$splitText[1];$splitText[2]]

$textSplit[$getVar[owner];|]
`
});

bot.command({
    name: "bannedchat",
    aliases: ['banchat'],
    code: `
$setUserVar[banchat;true;$remoteJid]
$reply
Chat telah dibanned, Bot tidak akan merespon pada chat ini!

$onlyIf[$getUserVar[banchat;$remoteJid]==false;❌ Chat ini telah terbanned sebelumnya!]

$onlyIf[$getGlobalUserVar[ownersec]==true;$getVar[ownerc]]
`
})

bot.command({
    name: "unbannedchat",
    aliases: ['unbanchat'],
    code: `
$setUserVar[banchat;false;$remoteJid]
$reply
Chat telah di unbanned, Bot akan merespon pada chat ini!

$onlyIf[$getUserVar[banchat;$remoteJid]==true;❌ Chat ini sudah tidak terbanned!]



$onlyIf[$getGlobalUserVar[ownersec]==true;$getVar[ownerc]]

`
})

//kill
bot.command({
    name: "kill",
    code: `
$killClient



$wait[1000]
$send[⏳ Mematikan bot...;$remoteJid]

$onlySender[;$splitText[1];$splitText[2]]

$textSplit[$getVar[owner];|]
`
});

bot.command({
    name: "reboot",
    code: `
$reboot

$wait[1000]
$send[⏳ Tunggu 10 detik, Bot sedang di restart...;$remoteJid]

$onlySender[;$splitText[1];$splitText[2]]

$textSplit[$getVar[owner];|]
`
});

//feature commands  



//anime
bot.command({
    name: "animequotes",
    aliases: ['animeq'],
    code: `
$reply
*Anime 「 $get[anime] 」*
╭───「 Quotes 」──・
\`\`\`$get[quote]\`\`\`
╰─────────────────❑
_- $get[char]_
$footer[Mengambil request dari animechan.vercel.app API]
$button[cid==>>animequotes:More Quotes]

$let[anime;$replaceText[$getObjectProperty[anime];";;all]]
$let[quote;$replaceText[$getObjectProperty[quote];";;all]]
$let[char;$replaceText[$getObjectProperty[character];";;all]]

$createObject[$httpRequest[https://animechan.vercel.app/api/random]]


$suppressErrors[Error!]

$onlyIf[$getGlobalUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
	name: "hentai",
	aliases: ['nekonsfw','waifunsfw'],
	code: `
$reply
Sagne kok sama anime😂
$image[$replaceText[$getObjectProperty[url];";;2]]

$createObject[$randomText[$httpRequest[https://api.waifu.pics/nsfw/waifu];$httpRequest[https://api.waifu.pics/nsfw/neko]]]


$onlyIf[$isGroup==false;❌ Command ini hanya bisa digunakan untuk chat pribadi!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
	name: "waifu",
	code: `
$reply
Ini *Waifu* lu ngap!
$image[$replaceText[$getObjectProperty[url];";;2]]
$button[cid==>>waifu:Gacha Lagi]
$createObject[$httpRequest[https://api.waifu.pics/sfw/waifu]]


$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
	name: "neko",
	code: `
$reply
Ini *Neko* lu ngap!
$image[$replaceText[$getObjectProperty[url];";;2]]
$button[cid==>>neko:Gacha Lagi]
$createObject[$httpRequest[https://api.waifu.pics/sfw/neko]]


$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

//random
bot.command({
    name: "profilepic",
    aliases: ['pp'],
    code: `
$reply
Ini kak foto profile nya 
$image[$let[pp]]

$get[pp;$profilePic[$replaceText[$mentioned[1];@;;1]@s.whatsapp.net]]

$argsCheck[>1;❌ Tolong tag user nya!]

$suppressErrors[Error!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})


bot.command({
	name: "broadcastgroup",
	aliases: ['bcgc','bcgroup'],
	code: `
$send[Berhasil broadcast ke semua grup!]
*Broadcast ke semua grup!*
$broadcast[$message]
$footer[Broadcast by $senderPushName

$getVar[footer]]
$button[cid==>>menu:Menu]

$onlySender[$getVar[ownerc];$splitText[1];$splitText[2]]

$textSplit[$getVar[owner];|]


`
})

//group
bot.command({
    name: "join",
    code: `
$setGlobalUserVar[botjoin;$sub[$getGlobalUserVar[botjoin];1]]
$log[・$replaceText[$senderNumber;:6;;1]︱use .join - URL:$message[1]]
$groupAcceptInvite[$message[1]]
$send[Bot berhasil join ke grup!!!

*Rules Memasukan Bot*
- No spam command
- No spam button 
- No spam saat bot offline 
- No manfaatkan bug 
- Nemu error/bug lapor!

Melanggar? banned group/akun permanen!
]

$onlyIf[$includes[$message[1];https://chat.whatsapp.com/]==true;❌ Link grup tidak valid!]

$onlyIf[$message[1]!=;❌ Tolong berikan link grup yang akan dimasuki bot!]

$onlyIf[$getGlobalUserVar[botjoin]>0;❌ Limit invite bot kamu telah habis, Jika ingin limit mu bertambah silahkan beli ke .owner!]

$suppressErrors[Error!, Link tidak valid atau rusak!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "leave",
    code: `
$log[・$replaceText[$senderNumber;:6;;1]︱leave from group - Jid: $remoteJid]
$botLeave
$wait[5000]
$send[Dadah ges, Aku keluwar💦🤓;$remoteJid]
$onlySender[$getVar[ownerc];$splitText[1]]
$onlyIf[$isGroup==true;Chat ini bukan grup!]
$textSplit[$getVar[owner];|]

$suppressErrors[Error!]
`
})

//games cmd

bot.command({
    name: "profile",
    aliases: ['p'],
    code: `
$reply
Profile *$get[user]*

🧬 Level: *$numberSeparator[$getGlobalUserVar[level]]*
♥️ Health: *$numberSeparator[$getGlobalUserVar[health]]*
⚡Stamina: *$numberSeparator[$getGlobalUserVar[stamina]]*
💵 Money: *$replaceText[$abbreviate[$getGlobalUserVar[money]];NaNundefined;$getGlobalUserVar[money];all]*
🏧 Bank: *$replaceText[$abbreviate[$getGlobalUserVar[bank]];NaNundefined;$getGlobalUserVar[bank];all]*

*Equipment:*
🗡️ Sword: *none*
🥋 Armor: *none*
🐱 Pets: *none*

$footer[$getVar[footer]]
$button[cid==>>inventory:🎒Inventory;cid==>>market:🛒Market]

$let[user;@$replaceText[$senderNumber;:6;;all]]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "balance",
    aliases: ['bal'],
    code: `
$reply
Balance *$senderPushName*

💵 Money: *$replaceText[$numberSeparator[$getGlobalUserVar[money]];NaNundefined;$getGlobalUserVar[money];all]*
🏧 Bank: *$replaceText[$numberSeparator[$getGlobalUserVar[bank]];NaNundefined;$getGlobalUserVar[bank];all]*
$footer[$getVar[footer]]
$button[cid==>>profile:👤Profile;cid==>>inventory:🎒Inventory;cid==>>market:🛒Market]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "inventory",
    aliases: ['inv'],
    code: `
$reply
Inventory: *$senderPushName*

💵 Money: *$replaceText[$abbreviate[$getGlobalUserVar[money]];NaNundefined;$getGlobalUserVar[money];all]*
🏧 Bank: *$replaceText[$abbreviate[$getGlobalUserVar[bank]];NaNundefined;$getGlobalUserVar[bank];all]*

*Item List*
🪨 Stone: *x$numberSeparator[$getGlobalUserVar[stone]]*
🪵 Wood: *x$numberSeparator[$getGlobalUserVar[wood]]*
⛓️ Iron: *x$numberSeparator[$getGlobalUserVar[iron]]*
🟨 Gold: *x$numberSeparator[$getGlobalUserVar[gold]]*
💎 Diamond: *x$numberSeparator[$getGlobalUserVar[diamond]]*

*Crates List*
📦 Goldbox: *x$numberSeparator[$getGlobalUserVar[goldbox]]*
🀄 Dragonbox: *x$numberSeparator[$getGlobalUserVar[dragonbox]]*
💠 Phoenixbox: *x$numberSeparator[$getGlobalUserVar[phoenixbox]]*

$button[cid==>>profile:👤Profile;cid==>>market:🛒Market]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`,
})

bot.command({
    name: "market",
    aliases: ['shop'],
    code: `
$reply
╭───「 *Market Area* 」───❑
・ *Animal* - Tempat pets
・ *Weapon* - Beli senjata disini
・ *Armor* - Beli armor disini
・ *Upgrades* - Upgrade kekuatan
・ *Premium* - Special item 
╰───────────────────────❑

$addSectionsRows[Pilih Market;Animal:cid==>>market0-animal0:Tempat pets;Weapon:cid==>>market0-weapon:Tempat senjata;Armor:cid==>>market0-armor:Tempat armor;Upgrades:cid==>>market0-upgrades0:Upgrade kekuatan;Premium:cid==>>market0-premium0:Special item]
$addSectionsDisplayText[Pilih Market]
$addSections[Pilih Market]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "deposit",
    aliases: ['dep'],
    code: `
$reply
$send[Berhasil menyetor *$abbreviate[$message[1]]* uang $replaceText[@$senderNumber;:6;;1] kedalam bank!]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message[1]]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message[1]]]

$wait[3000]
$send[Sedang memproses setoran anda!]

$onlyIf[$getGlobalUserVar[money]>=$message[1];❌ kamu tidak dapat menyetor uang sebanyak *$message[1]* karna uangmu tidak cukup!]

$onlyIf[$message[1]!=0;❌ Kamu tidak bisa menyetor uang dengan jumlah *0*!]

$onlyIf[$isNumber[$message[1]]==true;❌ harap masukan nominal deposit yang benar!]

$onlyIf[$message[1]!=;❌ Nominal deposit tidak boleh kosong!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "withdraw",
    aliases: ['wd'],
    code: `
$reply
$send[Berhasil menarik *$abbreviate[$message[1]]* uang $replaceText[@$senderNumber;:6;;1] dari bank!]

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message[1]]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$message[1]]]

$wait[3000]

$send[Sedang memproses withdraw anda!;$remoteJid]

$onlyIf[$getGlobalUserVar[bank]>=$message[1];❌ kamu tidak dapat menarik uang sebanyak *$$message[1]* karna uangmu tidak cukup di bank!]

$onlyIf[$message[1]!=0;❌ Kamu tidak bisa menarik uang dengan jumlah *0*!]

$onlyIf[$isNumber[$message[1]]==true;❌ harap masukan nominal withdraw yang benar!]

$onlyIf[$message[1]!=;❌ Nominal withdraw tidak boleh kosong!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
    name: "work",
    code: `
$reply
Kamu bekerja sebagai *$get[kerja]* dan mendapatkan uang *$abbreviate[$get[upah]]*

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$get[upah]]]
$let[upah;$minMax[30;500]]
$let[kerja;$randomText[Bartender;Pandai Besi;Pengrajin;Prajurit;Penjaga;Prajurit Bayaran;Perampok;Pencopet;Penipu;Penjarah;Pembegal;Pencuri;Petarung Jalanan;Algojo;Tukang Kayu;Nelayan;Pemburu Zombie]]

$globalCooldown[1m;❌ Tunggu %time% untuk bekerja lagi!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`,
});

bot.command({
    name: "adventure",
    aliases: ['adven'],
    code: `
$reply
Masih dibuat ngap...

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})

bot.command({
	name: "transfer",
	aliases: ['tf'],
	code: `
$reply
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message[1]]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1;yes]];$message[1]];$mentioned[1;yes]]

Berhasil mengirim *$abbreviate[$message[1]]* ke $mentioned[1]

$let[userid;$replaceText[$senderNumber;:6;;1]@s.whatsapp.net]

$onlyIf[$message[1]<=$getGlobalUserVar[money];❌ Kamu tidak bisa mengirim uang lebih dari *$numberSeparator[$getGlobalUserVar[money]]*!]

$onlyIf[$message[2]!=@$replaceText[$senderNumber;:6;;1];❌ Kamu tidak bisa mengirim uang pada dirimu sendiri!]

$onlyIf[$message[2]==$mentioned[1];❌ Tolong tag user bukan nomor atau huruf!]

$onlyIf[$message[2]!=;❌ Tolong tag user yang akan dikirim uang!]

$onlyIf[$message[1]>=1;❌ Kamu tidak bisa mengirim uang dengan nominal *0*!]

$onlyIf[$message[1]!=;❌ Kamu tidak bisa mengirim uang dengan nominal kosong!]

$onlyIf[$isNumber[$message[1]]==true;❌ Tolong masukan nominal yang benar!]

$argsCheck[>2;❌ Tolong tag user yang akan dikirim uang!]

$argsCheck[>1;❌ Tolong masukan nominal yang akan dikirim!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
})