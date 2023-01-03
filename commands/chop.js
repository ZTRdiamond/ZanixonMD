module.exports = {
    name: "chop",
    aliases: ['menebang','nebang'],
    code: `
$setGlobalUserVar[stamina;$sub[$getGlobalUserVar[stamina];2]]

$setGlobalUserVar[wood;$sum[$getGlobalUserVar[wood];$get[logearn]]]

$reply
@$splitText[1] menebang *x$get[treechop] Pohon🌲* dan mendapatkan *x$get[logearn] Wood🪵*

$footer[$getVar[footer]]
$button[cid==>>chop:🪓︱Menebang;cid==>>inventory:🎒︱Inventory]

$let[logearn;$randomText[1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20]]
$let[treechop;$randomText[1;2;3;4;5;6;7;8;9;10]]

$wait[2000]
$send[@$splitText[1] Sedang menebang pohon...]

$textSplit[$senderNumber;:]

$globalCooldown[15s;❌ Tunggu %time% untuk menebang lagi!]
`
}