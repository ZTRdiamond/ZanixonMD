module.exports = {
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
}