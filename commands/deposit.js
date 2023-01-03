module.exports = {
    name: "deposit",
    aliases: ['dep'],
    code: `
$reply
$send[Berhasil menyetor *$abbreviate[$message[1]]* uang @$splitText[1] kedalam bank!]

$setGlobalUserVar[money;$sub[$getGlobalUserVar[money];$message[1]]]

$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message[1]]]

$wait[3000]

$send[Sedang memproses setoran @$splitText[1]!]

$textSplit[$senderNumber;:]

$onlyIf[$getGlobalUserVar[money]>=$message[1];❌ kamu tidak dapat menyetor uang sebanyak *$message[1]* karna uangmu tidak cukup!]

$onlyIf[$message[1]!=0;❌ Kamu tidak bisa menyetor uang dengan jumlah *0*!]

$onlyIf[$isNumber[$message[1]]==true;❌ harap masukan nominal deposit yang benar!]

$onlyIf[$message[1]!=;❌ Nominal deposit tidak boleh kosong!]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}