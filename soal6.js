class identitas {
    constructor(nama,usia,alamat)
{
    this.nama = nama;
    this.usia = usia;
    this.alamat = alamat;
    }
    method () {
        console.log(`nama ${this.nama} usia ${this.usia} alamat ${this.alamat}`);
    }
}
var id = new identitas ("Robbie","17Tahun","Taman Kopo Katapang")
    id.method()