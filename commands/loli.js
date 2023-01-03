module.exports = {
    name: "loli",
    code: `
$reply
$image[$get[loli]]
Njirr sukanya sama anak kecil🤨
_FBI akan tiba $randomText[10 menit;5 detik;10 detik;1 jam;5 hari;20 tahun;99999 tahun;1 detik;0 detik;0.00005 detik] lagi!_
$footer[$getVar[footer]]
$button[cid==>>loli:🎁Gacha Loli Lagi]

$let[loli;$replaceText[$httpRequest[https://api.lolicon.app/setu/v2?tag=lolicon&tag=loli;get;;data[0].urls.original];";;all]]

$globalCooldown[3s;❌ Tunggu %time% untuk gacha lagi agar tidak terkena ratelimit!]
$suppressErrors[Something Error!]
`
}