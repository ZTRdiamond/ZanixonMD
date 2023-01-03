module.exports = {
    name: "help",
    aliases: ['menu'],
    code: `
$reply
╭─「 *Zanixon Bot* 」
│ Halo, $senderPushName
│
│ Tanggal: $splitText[1]
│ Waktu: $splitText[2]
│ Uptime: $get[uptime]
╰────────────────❑

╭─「 *User Info* 」
│ Nama: $senderPushName
│ Mention: @$splitText[3]
│ Nomor: wa.me/$splitText[3]
│ Limit Invite Bot: $numberSeparator[$getGlobalUserVar[botjoin]]
╰────────────────❑

$footer[_No limit usage, Free use, 24/7 online._
$getVar[footer]]

$addSectionsRows[Menu List;📔︱All Menu:cid==>>allmenu:Menampilkan semua command;🥺︱Sedekah:cid==>>donate:Sedekahnya kak plis;📈︱Status Bot:cid==>>status:Cek statistik bot;🎩︱Owner Bot:cid==>>owner:Nomor owner bot;🗃️︱Source Code:cid==>>source:Info package yang dipakai bot ini]

$addSectionsDisplayText[Menu List]

$addSections[Menu List]

$textSplit[$parseDate[$dateStamp;date],$replaceText[$senderNumber;:;,;all];,]

$let[uptime;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime; year;y;1]; month;mon;1]; week;w;1]; day;d;1]; hour;h;1]; minute;m;1]; minutes;m;1]; seconds;s;1]]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
}