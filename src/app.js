console.log("Merhaba Kodlama.io")
// JS type safe değildir.
var dolarDun = 9.20
var dolarBugun = 9.30
{
    let dolarDun = 9.10
}
console.log(dolarDun)
const euroDun= 11.2
//euroDun= 11 

console.log(euroDun)

// array: dizi
// isimlendirmede camelCasing kullanıyoruz.
// PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
 // İsimlendirme yapmak çok önemlidir.

 // döngü elindeki bir veriyi dolaşmama yarıyo
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")   
}
console.log("</ul>")

 console.log(konutKredileri)
 // üç noktaya basıp add remote diyip git huba yükle