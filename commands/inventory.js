module.exports = {
    name: "inventory",
    aliases: ['inv'],
    code: `
$reply
Inventory: *@$splitText[1]*

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

$textSplit[$senderNumber;:]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}