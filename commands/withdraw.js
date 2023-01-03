module.exports = {
    name: "withdraw",
    aliases: ['wd'],
    code: `
$reply
$send[Berhasil menarik *$abbreviate[$message[1]]* uang @$splitText[1] dari bank!]

$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message[1]]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$message[1]]]

$wait[3000]

$send[Sedang memproses withdraw @$splitText[1]!;$remoteJid]

$textSplit[$senderNumber;:]

$onlyIf[$getGlobalUserVar[bank]>=$message[1];❌ kamu tidak dapat menarik uang sebanyak *$$message[1]* karna uangmu tidak cukup di bank!]

$onlyIf[$message[1]!=0;❌ Kamu tidak bisa menarik uang dengan jumlah *0*!]

$onlyIf[$isNumber[$message[1]]==true;❌ harap masukan nominal withdraw yang benar!]

$onlyIf[$message[1]!=;❌ Nominal withdraw tidak boleh kosong!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}