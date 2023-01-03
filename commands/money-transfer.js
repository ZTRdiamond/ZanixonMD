module.exports = {
	name: "transfer",
	aliases: ['tf'],
	code: `
$reply
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message[1]]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$mentioned[1;yes]];$message[1]];$mentioned[1;yes]]

Berhasil mengirim *$abbreviate[$message[1]]* ke $mentioned[1]

$let[userid;$replaceText[$senderNumber;:6;;1]@s.whatsapp.net]

$onlyIf[$message[1]<=$getGlobalUserVar[money];❌ Kamu tidak bisa mengirim uang lebih dari *$numberSeparator[$getGlobalUserVar[money]]*!]

$onlyIf[$message[2]!=@$replaceText[$senderNumber;:6;;1];❌ Kamu tidak bisa mengirim uang pada dirimu sendiri!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$message[2]==$mentioned[1];❌ Tolong tag user bukan nomor atau huruf!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$message[2]!=;❌ Tolong tag user yang akan dikirim uang!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$message[1]>=1;❌ Kamu tidak bisa mengirim uang dengan nominal *0*!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$message[1]!=;❌ Kamu tidak bisa mengirim uang dengan nominal kosong!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$isNumber[$message[1]]==true;❌ Tolong masukan nominal yang benar!
*Usage:* .transfer <nominal> <@tag>]

$argsCheck[>2;❌ Tolong tag user yang akan dikirim uang!
*Usage:* .transfer <nominal> <@tag>]

$argsCheck[>1;❌ Tolong masukan nominal yang akan dikirim!
*Usage:* .transfer <nominal> <@tag>]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}