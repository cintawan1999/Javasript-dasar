/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error ialah error yang muncul jika kita menggunakan nilai yang berada di luar kisaran tipe yang diharapkan.
/// - Reference Error ialah error yang disebaban jika kita menggunakan (referensi) variabel yang belum dideklarasikan.
/// - Range Error ialah error yang disebaban jika kita menggunakan angka yang berada di luar rentang nilai legal.
/// - Syntax Error ialah error apabila kita mencoba mengevaluasi kode dengan kesalahan sintaks.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// - Error
// - Reference Error
// - hal tersebut error dikarenakan variabel belum dideklarasikan sehingga peirntah console.log error dalam mencetak variabel yang diperintah atau yang diminta