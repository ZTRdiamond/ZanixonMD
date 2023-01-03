module.exports = {
    name: "sell-",
    aliases: ['sell'],
    code: `
$reply
@$splitText[1] Contoh penggunaan yang benar ada di bawah ini 

*Contoh penggunaan:*
.sell-<nama item> <jumlah>

_Contoh: .sell-wood 50_
$footer[$getVar[footer]]
$button[cid==>>menu:📔︱Menu]

$textSplit[$senderNumber;:]
`
}