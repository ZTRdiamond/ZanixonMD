module.exports = {
    name: "market",
    aliases: ['shop'],
    code: `
$reply
╭───「 *Market Area* 」───❑
・ *Animal* - Tempat pets
・ *Weapon* - Beli senjata disini
・ *Armor* - Beli armor disini
・ *Upgrades* - Upgrade kekuatan
・ *Premium* - Special item 
╰───────────────────────❑

$addSectionsRows[Pilih Market;Animal:cid==>>market0-animal:Tempat pets;Weapon:cid==>>market0-weapon:Tempat senjata;Armor:cid==>>market0-armor:Tempat armor;Upgrades:cid==>>market0-upgrades:Upgrade kekuatan;Premium:cid==>>market0-premium:Special item]

$addSectionsDisplayText[Pilih Market]

$addSections[Pilih Market]

$onlyIf[$getUserVar[banchat;$remoteJid]==false;$getVar[banchatc]]

`
}