module.exports = {
	name: "neko",
	code: `
$reply
Ini *Neko* lu ngap!
$image[$replaceText[$getObjectProperty[url];";;2]]

$footer[$getVar[footer]]
$button[cid==>>neko:🎁Gacha Neko Lagi]
$createObject[$httpRequest[https://api.waifu.pics/sfw/neko]]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]
`
}