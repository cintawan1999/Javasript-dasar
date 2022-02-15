/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// - ada 2 variabel scope yang dimiliki oleh javascript
// - Global scope berarti variabel yang dapat diakses dimanapun dalam suatu file,sehingga varaiebl harus dideklarasikan diluar blocks.
//   Local scope berarti variabel yang hanya dapat diakses di dalam bloks saja sehingga variabel ini dideklarasikan didalam blocks.
// - Global Scope
Let myAge = 10;
function Age(){
return myAge; // 10
}
console.log(myAge); //10
//   Local Scope
function Age(){
Let myAge = 10;
return myAge; // 10
}
console.log(Age()); //10

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

// - console.log(printFirstName("Mariah Carey")); // Mariah Carey
// - karena variabel scope yang digunakan ialah global Scope, sehingga variabel yang diakses adalah variabel Mariah Carey