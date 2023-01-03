module.exports = {
    name: "market0-weapon",
    code: `
$reply
Gunakan *.buy-<ID senjata>* untuk membeli nya!

╭ 🗡️Wooden Sword: *Free* - Id: _woodensword_
╰────────────────❑
╭ 🗡️Dagger: *5,000* - Id: _dagger_
╰────────────────❑
╭ 🗡️Petal Sword: *20,000* - Id: _petalsword_ 
╰────────────────❑
╭ 🗡️Platinum Sword: *45,000* - Id: _platinumsword_  
╰────────────────❑
╭ 🌩️Lightning Bolt: *5,000,000,000,000* - Id: _lightingbolt_ 
╰────────────────❑

$footer[$getVar[footer]]
$button[cid==>>market:🛒Market]
`
}