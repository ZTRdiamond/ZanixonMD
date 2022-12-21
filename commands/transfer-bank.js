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

$onlyIf[$message[2]!=@$replaceText[$senderNumber;:6;;1];❌ Kamu tidak bisa mengirim uang pada dirimu sendiri!]

$onlyIf[$message[2]==$mentioned[1];❌ Tolong tag user bukan nomor atau huruf!]

$onlyIf[$message[2]!=;❌ Tolong tag user yang akan dikirim uang dari bank!]

$onlyIf[$message[1]>=1;❌ Kamu tidak bisa mengirim uang dengan nominal *0*!]

$onlyIf[$message[1]!=;❌ Kamu tidak bisa mengirim uang dengan nominal kosong!]

$onlyIf[$isNumber[$message[1]]==true;❌ Tolong masukan nominal yang benar!]

$argsCheck[>2;❌ Tolong tag user yang akan dikirim uang dari bank!]

$argsCheck[>1;❌ Tolong masukan nominal yang akan dikirim!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
}