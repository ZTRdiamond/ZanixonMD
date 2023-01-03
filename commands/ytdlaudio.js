module.exports = {
    name: "ytdlaudio",
    aliases: ['paud'],
    code: `
$reply
$audio[$get[audiopath].mp3;no]

$let[audiopath;$downloadContentFromUrl[$get[url];YTDL.mp3]]

$let[url;$replaceText[$httpRequest[https://saipulanuar.ga/api/download/ytmp3?url=$get[src];get;;result.url];";;all]]


$textSplit[$senderNumber;:]

$let[src;$message[1]]

$onlyIf[$isURL[$message[1]]==true;❌ URL tidak valid!]
$onlyIf[$message[1]!=;❌ Tolong berikan link video yang akan di download audio nya!]
`
}