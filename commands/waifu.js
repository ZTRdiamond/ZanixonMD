module.exports = {
	name: "waifu",
	code: `
$reply
Ini *Waifu* lu ngap!
$image[$replaceText[$getObjectProperty[url];";;2]]

$footer[$getVar[footer]]
$button[cid==>>waifu:🎁Gacha Waifu Lagi]
$createObject[$httpRequest[https://api.waifu.pics/sfw/waifu]]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`

}