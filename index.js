const { Client } = require("whatscode.js");
const bot = new Client({
  name: "Zanixon Games",
  autoRead: false,
  prefix: ['$getVar[prefix]','.','cid==>>'] //cid==>> adalah custom id button agar bot lain tidak ikut balas command!
});

bot.status({
 status: ["✨︱©ZanixonMD","🔥︱Made with ♥️ by ZTRdiamond","🏞️︱Epic RPG Whatsapp Bot"],
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
*_Source Bot ZanixonMD_*
$footer[Coming soon...]
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

$onlyIf[$getGlobalUserVar[botjoin]>=1;❌ Limit invite bot kamu telah habis, Jika ingin limit mu bertambah silahkan beli ke .owner!]

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

//sticker




