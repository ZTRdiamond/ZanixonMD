module.exports = {
    name: "allmenu",
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

╭─「 *Owner* 」
│ .eval <code>
│ .kill <stop bot>
│ .reboot <restart bot>
│ .banchat 
│ .unbanchat
│ .broadcastgroup <text>
╰────────────────❑

╭─「 *Epic RPG Games* 」
│ .profile
│ .balance
│ .inventory
│ .buy-<nama item> <jumlah>
│ .sell-<nama item> <jumlah>
│ .transfer <jumlah> <@tag>
│ .transferbank <jumlah> <@tag>
│ .deposit <jumlah>
│ .withdraw <jumlah>
│ .work 
│ .chop
│ .adventure 
│ .scavenge 
│ .market 
│ .rob <@tag>
╰────────────────❑

╭─「 *Group* 」
│ .join <link grup>
│ .leave <ONLY OWNER>
╰────────────────❑

╭─「 *Anime* 」
│ .waifu
│ .neko
│ .loli
│ .animequotes
╰────────────────❑

╭─「 *Downloader* 」
│ .ytdlvideo <url>
│ .tiktokdl <url>
╰────────────────❑

╭─「 *Random* 」
│ .profilepic <@tag>
│ .toimg <reply sticker>
╰────────────────❑

$footer[_No limit usage, Free use, 24/7 online._
$getVar[footer]]
$button[cid==>>donate:🥺︱Donate;cid==>>owner:🎩︱Owner]

$textSplit[$parseDate[$dateStamp;date],$replaceText[$senderNumber;:;,;all];,]
`
}