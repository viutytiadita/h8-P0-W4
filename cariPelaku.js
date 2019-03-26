function cariPelaku(str) {
    var hitungabc = str.match(/abc/g)
    if(hitungabc == null){
        return 'tidak ditemukan'
    }
    return hitungabc.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
console.log(cariPelaku('viutytiadita')); // tidak ditemukan