// import express
import express  from "express";

//init express router
const router = express.Router();

// basic route
router.get('/biodata/:nama/:Tempat/:Tanggal/:jenis/:Agama/:Alamat/:Telpon/:Email/:hobi/:cita_cita', (req, res) => {

    var Nama = req.params.nama;
    var Tempat_lahir = req.params.Tempat;
    var Tanggal_lahir =req.params.Tanggal ;
    var jenis_kelamin = req.params.jenis;
    var Agama = req.params.Agama;
    var Alamat = req.params.Alamat;
    var Telpon = req.params.Telpon;
    var Email  = req.params.Email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;

    res.send(
        'Nama : ' + Nama + '<br>' +
        'Tempat lahir :' + Tempat_lahir + '<br>' +
        'Tanggal Lahir :' + Tanggal_lahir + '<br>' +
        'Jenis Kelamin :' + jenis_kelamin + '<br>' +
        'agama :' + Agama + '<br>'+ 
        'Alamat :' + Alamat + '<br>' +
        'Telepon :' + Telpon + '<br>' +
        'email :' + Email + '<br>' +
        'hobi :' + hobi + '<br>' +
        'cita-cita:' + cita_cita + '<br>' 
    );
        
});
router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
var nama = req.params.nama;
var kelas = req.params.kelas;
var pts = parseInt(req.params.pts);
var pas = parseInt(req.params.pas);

var rapot = (pts + pas) / 2;

if (rapot >= 90 && rapot <= 100) {
    var grade = "grade A";
} else if (rapot >= 80) {
    var grade= "grade B";
} else if (rapot >= 70) {
    var grade= "grade C";
} else if (rapot >= 60) {
    var grade= "grade D";
} else if (rapot >= 50) {
    var grade= "grade E";
} else if (rapot >= 0) {
    var grade= " sing getol di ajar";
} else {
    var grade = "Nilai tidak valid" ;   
} 


res.send(
   ' nama : ' + nama + '<br>' +
   ' kelas : ' + kelas + '<br>' +
   ' Nilai pts : ' + pts + '<br>' +
   ' Nilai pas : ' + pas + '<br>' +
   ' Nilai rapot : ' + rapot + '<br>' +
   ' keterangan : ' + grade

   );
});

router.get('/aritmatika', (req, res) => {
     
    var bilangan1 =10;
    var bilangan2=5;
    var tambah1 = bilangan1 + bilangan2;
    var tambah2 = bilangan1 - bilangan2;
    var tambah3 = bilangan1 * bilangan2;
    var tambah4 = bilangan1 / bilangan2;

    res.send(
    '<h3>Penjumlahan</h3>' +
    'Bilangan ke 1 :' + bilangan1 + '<br>' +
    'Bilangan ke 2 :' + bilangan2 + '<br>' +
    'Hasil tambah :' + tambah1 + '<hr><br>' +
    '<h3>Pegurangan</h3>' +

    'Bilangan ke 1 :' + bilangan1 + '<br>' +
    'Bilangan ke 2 :' + bilangan2 + '<br>' +
    'Hasil kurang :' + tambah2 + '<hr><br>' +
    '<h3>Perkalian</h3>' +

    'Bilangan ke 1 :' + bilangan1 + '<br>' +
    'Bilangan ke 2 :' + bilangan2 + '<br>' +
    'hasil kali :' + tambah3 + '<hr> <br>' +
    '<h3>Pembagian</h3>' +

    'Bilangan ke 1 :' + bilangan1 + '<br>' +
    'Bilangan ke 2 :' + bilangan2 + '<br>' +
    'Hasil bagi :' + tambah4 + '<hr>'
    
    );
     
})

router.get('/bangun_datar', (req, res) => {
    //persegi
    var sisi = 5;
    var persegi = sisi * sisi

    //PERSESGI PANJANG
    var panjang = 15;
    var lebar = 10;
    var luas = panjang * lebar;
    
    //SEGITIGA
    var Alas = 10;
    var Tinggi = 15;
    var segitiga = Alas * Tinggi / 2;

    //LINGKARAN
    var konstanta = 3.14;
    var jari2_Lingkaran = 10;
    var Lingkaran = konstanta * jari2_Lingkaran * jari2_Lingkaran;
    res.send(
        '<h3>PERSEGI</h3> ' +
        'nilai sisi :' + sisi + '<br>' +
        // 'Rumus : sisi X sisi' + '<br>' +
        // 'Hitung : ' + sisi + ' x ' + sisi + ' = ' + persegi + '<hr><br>' +
        'hasil :' + persegi + '<hr><br>' +

        '<h3>Persegi Panjang</h3>' +
        'panjang :' + panjang + '<br>' +
        'lebar :' + lebar + '<br>' +
        // 'rumus : Panjang X Lebar' + '<br>' +
        'Luas : ' + luas + '<hr><br>' +

        '<h3>SEGITIGA</h3>' +
        'Alas : ' + Alas + '<br>' +
        'tinggi :' + Tinggi + '<br>' +
        'hasil : ' + segitiga + '<hr><br>' +

        '<h3>Lingkaran</h3>' +
        'konstanta : ' + konstanta + '<br>' +
        'jari-jari : ' + jari2_Lingkaran + '<br>' +
        'hasil : ' + Lingkaran
    );
    })  
    router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {
        var nama = req.params.nama;
        var jurusan = req.params.jurusan;
        var kelas = req.params.kelas

        if(jurusan == 'RPL') {
            if (kelas = '10 RPL'){
                var ket = "Anda Kelas 10 RPL"
            } else if (kelas = '11 RPL'){
                var ket = "Anda Kelas 11 RPL"
            } else if (kelas = '12 RPL'){
                var ket = "Anda Kelas 12 RPL"

            }
        } else if (jurusan == 'TKRO'){
            if (kelas = '10 TKRO'){
                var ket = "Anda Kelas 10 TKRO"
            } else if (kelas = '11 TKRO'){
                var ket = "Anda Kelas 11 TKRO"
            } else if (kelas = '12 TKRO'){
                var ket = "Anda Kelas 12 TKRO"
            
            }
        } else if(jurusan == 'TBSM') {
            if (kelas = '10 TBSM'){
                var ket = "Anda Kelas 10 TBSM"
            } else if (kelas = '11 TBSM'){
                var ket = "Anda Kelas 11 TBSM"
            } else if (kelas = '12 TBSM'){
                var ket = "Anda Kelas 12 TBSM"
            }
        } else {

        }
        res.send(
        'nama : ' + nama + '<br>'+
        'jurusan :' + ket
    );

    })

    router.get('/Latihan/:nama/:tanggal/:jenis/:pesanan/:jumlah', (req, res) => {
        var nama = req.params.nama;
        var tanggal = req.params.tanggal;
        var jenis =req.params.jenis;
        var pesanan = req.params.pesanan;
        var jumlah = req.params.jumlah;
        

        if(jenis == 'makanan') {
            if (pesanan == 'nasi goreng'){
                var harga = 20000
             } else if (pesanan == 'mie goreng'){
                var harga = 25000
             } else if (pesanan == 'ayam goreng'){
                var harga = 50000
             } else {
                var pesanan = "Makanan Tidak tersedia"
             }

            }else if(jenis == 'minuman') {
                if (pesanan == 'air mineral'){
                    var harga = 50000
                 } else if (pesanan == 'jus'){
                    var harga = 15000
                 } else if (pesanan == 'kopi'){
                    var harga = 10000
                  } else {
                    var pesanan = "Minuman Tidak tersedia"
            }
        }

        var total = harga * jumlah;

        if (total >= 100000){
            var diskon = total * 0.5;
        } else{
            var diskon = 0;
        }
        var totalbayar = total - diskon;

    

        res.end(
            'Nama Pembeli :' + nama + '<br>' +
            'Tanggal      :' + tanggal + '<br>' +
            'jenis        :' + jenis + '<br>' +
            'pesanan      :' + pesanan + '<br>' +
            'harga        :' + harga + '<br>' +
            'jumlah       :' + jumlah + '<br>' +
            '----------------------------------------<br>'+
            'total :' + total + '<br>'+
            'diskon 50% :' + diskon + '<br>' +
            'total pembayaran :' + totalbayar + '<br>' +
            '----------------------------------------<br>' 
            
           
            
        )
         });

         router.get('/sample', (req, res) => {

            res.send(
                '<h3>Selamat datang</h3>'

            );
         })




// export default router
export default router;