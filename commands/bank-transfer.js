module.exports = {
    name: "transferbank",
    aliases: ['tfbank'],
    code: `
$reply

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message[1]]]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$mentioned[1;yes]];$message[1]];$mentioned[1;yes]]

Berhasil mengirim *$abbreviate[$message[1]]* uang bank ke $mentioned[1]

$let[userid;$replaceText[$senderNumber;:6;;1]@s.whatsapp.net]

$onlyIf[$message[1]<=$getGlobalUserVar[bank];❌ Kamu tidak bisa mengirim uang dari bank lebih dari *$numberSeparator[$getGlobalUserVar[bank]]*!]

$onlyIf[$message[2]!=@$replaceText[$senderNumber;:6;;1];❌ Kamu tidak bisa mengirim uang pada dirimu sendiri!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$message[2]==$mentioned[1];❌ Tolong tag user bukan nomor atau huruf!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$message[2]!=;❌ Tolong tag user yang akan dikirim uang dari bank!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$message[1]>=1;❌ Kamu tidak bisa mengirim uang dengan nominal *0*!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$message[1]!=;❌ Kamu tidak bisa mengirim uang dengan nominal kosong!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$isNumber[$message[1]]==true;❌ Tolong masukan nominal yang benar!
*Usage:* .transferbank <nominal> <@tag>]

$argsCheck[>2;❌ Tolong tag user yang akan dikirim uang dari bank!
*Usage:* .transferbank <nominal> <@tag>]

$argsCheck[>1;❌ Tolong masukan nominal yang akan dikirim!
*Usage:* .transferbank <nominal> <@tag>]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
}