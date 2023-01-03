module.exports = {
    name: "profile",
    aliases: ['p'],
    code: `
$reply
Profile *@$splitText[1]*

🧬 Level: *$numberSeparator[$getGlobalUserVar[level]]*
♥️ Health: *$numberSeparator[$getGlobalUserVar[health]]*
⚡Stamina: *$numberSeparator[$getGlobalUserVar[stamina]]*
💵 Money: *$replaceText[$abbreviate[$getGlobalUserVar[money]];NaNundefined;$getGlobalUserVar[money];all]*
🏧 Bank: *$replaceText[$abbreviate[$getGlobalUserVar[bank]];NaNundefined;$getGlobalUserVar[bank];all]*

*Equipment:*
🗡️ Weapon: *$getGlobalUserVar[$getGlobalUserVar[weaponuse]]*
🥋 Armor: *none*
🐱 Pets: *none*

$footer[$getVar[footer]]
$button[cid==>>inventory:🎒Inventory;cid==>>market:🛒Market]

$textSplit[$senderNumber;:]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}