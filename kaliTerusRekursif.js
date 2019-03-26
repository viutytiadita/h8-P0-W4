function kaliTerusRekursif(angka) {
    var convertertoString = angka + ''
    if(convertertoString.length == 1){
        return convertertoString
    }
    else if(convertertoString >= 1){
        var hasil = (angka%10) * kaliTerusRekursif(Math.floor(angka / 10)) + ''         
    }
    
    while(hasil.length > 1){
        var hasil = (hasil%10) * kaliTerusRekursif(Math.floor(hasil / 10)) + ''
    }

    return hasil
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(77)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6