module.exports = {
    name: "rob",
    code: `


$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$get[robuser]];$get[robearn]];$get[robuser]]

$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$sender];$get[robearn]];$sender]

$reply 
Berhasil merampok uang $mentioned[1] sebanyak *$abbreviate[$get[robearn]]* 

$let[robearn;$minMax[100;$getGlobalUserVar[money;$get[robuser]]]]

$onlyIf[$getGlobalUserVar[money;$get[robuser]]>=500;❌ Uang yang dimiliki user tersebut kurang dari *500*]

$let[robuser;$replaceText[$mentioned[1];@;;all]@s.whatsapp.net]

$globalCooldown[1h;❌ Tunggu %time% untuk merampok lagi!]


`
}