module.exports = {
    name: "daily",
    aliases: ['d'],
    code: `
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];1000]]

$reply
Kamu mengklaim daily dan mendapatkan uang sebanyak *1,000*!

$footer[$getVar[footer]]
$button[cid==>>work:💼︱Work]

$globalCooldown[1d;❌ Tunggu %time% untuk mengklaim daily lagi!]
`
}