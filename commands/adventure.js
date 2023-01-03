module.exports = {
    name: "adventure",
    aliases: ['adven'],
    code: `
$reply
Kamu berpetualang dari *$get[area-start]* sampai *$get[area-end]* menghabiskan *$get[stamin]⚡* dan mendapatkan:
🧬Exp: $minMax[10;100]
🪨Stone: $minMax[5;35]
🪵Wood: $minMax[5;30]
⛓️Iron: $minMax[5;25]
🟨Gold: $minMax[5;20]
💎Diamond: $minMax[5;15]

$footer[Command Ini Dalam Tahap Percobaan!]
$button[cid==>>work:💼Work;cid==>>balance:💳Balance]
$let[area-end;$randomText[Dark Mountain;Rain Forest;Light City;Market City;Himalayan Mountain;Iron City;AI City;Rebel City]]
$let[area-start;$randomText[Death City;Plains 51;Forest;Death Ocean;Desert Temple;Cyber City;Stone City;Dungeon Area]]
`
}