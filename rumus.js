//Luas Persegi
function luasPersegi(sisi,){
    return sisi*sisi
}

//Kel. Persegi
function kelilingPersegi(sisi) {
    return 4 * sisi
}

//Luas Persegi Panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar
}

//Keliling Persegi Panjang
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar)
}

module.exports = {luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang};