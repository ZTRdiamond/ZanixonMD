module.exports = {
    name: "ytdlvideo",
    aliases: ['pvid'],
    code: `
$reply
Ini video *YouTube* nya kak!

*Source:* $message[1]
$video[$downloadContentFromUrl[$replaceText[$httpRequest[https://saipulanuar.ga/api/download/ytmp4?url=$get[src];get;;result.url];";;all];idye$minMax[1;9999999999].mp4]]

$let[videopath;$downloadContentFromUrl[$get[url];YTDL.mp4]]

$let[url;$replaceText[$httpRequest[https://saipulanuar.ga/api/download/ytmp4?url=$get[src];get;;result.url];";;all]]

$wait[1000]
$send[⏳ Request *YTDLvideo* @$splitText[1] sedang di proses...;$remoteJid]

$textSplit[$senderNumber;:]

$let[src;$message[1]]

$onlyIf[$isURL[$message[1]]==true;❌ URL tidak valid!]
$onlyIf[$message[1]!=;❌ Tolong berikan link video yang akan di download audio nya!]
`
}