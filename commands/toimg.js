module.exports = {
    name: "toimg",
    code: `
$reply
$image[$receivedQuotedSticker[yes]]
Ini gambar nya kak!

$wait[1000]
$send[⏳ Gambar sedang diproses, Tunggu Sebentar...;$remoteJid]

$onlyIf[$receivedQuotedSticker[yes]!=;❌ Balas sticker nya!]
$suppressErrors[Something Error!]
`
}