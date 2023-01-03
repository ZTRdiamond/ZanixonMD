module.exports = {
    name: "sell-wood",
    code: `
$setGlobalUserVar[wood;$sub[$getGlobalUserVar[wood];$message[1]]]
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$get[earned]]]
$let[earned;$multi[$message[1];2]]

$reply
@$splitText[1] Berhasil menjual *x$message[1] Wood🪵* dan mendapatkan uang sebanyak *💵$multi[$message[1];2]*

$footer[$getVar[footer]]
$button[cid==>>balance:💳Balance;cid==>>inventory:🎒Inventory]

$wait[2000]
$send[@$splitText[1] Sedang menjual *x$message[1] Wood🪵*;$remoteJid]

$onlyIf[$getGlobalUserVar[wood]>=$message[1];❌ @$splitText[1] Wood yang kamu miliki kurang dari *$message[1]*!!!]

$onlyIf[$message[1]>0;❌ @$splitText[1] Kamu tidak bisa menjual wood dengan jumlah *0*!]

$onlyIf[$isNumber[$message[1]]==true;❌ @$splitText[1] Tolong masukan angka yang benar!]

$onlyIf[$message[1]!=;❌ @$splitText[1] Masukan jumlah wood yang akan kamu jual!]

$textSplit[$senderNumber;:]
`
}