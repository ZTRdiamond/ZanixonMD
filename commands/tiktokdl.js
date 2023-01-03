module.exports = {
    name: "tiktokdl",
    aliases: ['ttdl','tt','tiktok'],
    code: `
$reply
Ini video *TikTok* nya kak!

*Source:* $message[1]
$video[$downloadContentFromUrl[$replaceText[$getObjectProperty[video.link2];";;all];tiktokdl.mp4]]

$createObject[$httpRequest[https://saipulanuar.ga/api/download/tiktok2?url=$message[1];get;;result]]

$wait[1000]
$send[⏳ Request *TIKTOKDL* @$splitText[1] sedang di proses...]

$textSplit[$senderNumber;:]

$onlyIf[$isURL[$message[1]]==true;❌ Url/Link tidak valid!]

$onlyIf[$message[1]!=;❌ Tolong berikan link video tiktok yang akan di download!]
`
}