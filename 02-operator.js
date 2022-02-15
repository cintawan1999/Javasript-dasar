///02-operator.js

/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

//Sisa gaji = Pemasukan - pengeluaran
//total Pamasukan = gaji pokok + gaji bonus + gaji lembur
//Total pengeluaran = Kebutuhan premire + kebutuhan tresier

let gajiPokok = 5000000;
let gajiBonus = 10/100 * gajipokok;
let gajiLembur = 5/100 * gajiPokok;
let gajiTotal = gajiPokok + gajiBonus + gajiLembur;

let gundam = 750000;
let makan = 2000000;
let kost = 1000000;
let subscription = 250000;
let pengeluaran = gundam + makan + kost + subscription;

const sisaGaji = gajiTotal - pengeluaran;
console.log(sisaGaji)

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = oneInString === oneInNumber;
console.log (isSame)

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = studentA  <= studentB;
console.log (isHigher)

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const oneInString = "1";
const oneInNumber = 1;
const final = typeOfoneInString === typeOfoneInNumber;
console.log(final)