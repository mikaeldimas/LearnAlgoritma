let total = 0
let listharga = [5000, 6000, 9000]
for (let index = 0; index < listharga.length; index++) {
    const element = listharga[index];
    console.log("element:", element);
    // total = total + element
    total += element

}
console.log("total", total);


let totalwhile = 0
let i = 0
while (i < listharga.length) {
    const element = listharga[i];
    totalwhile += element
    i++
}
console.log("totalwhile", totalwhile);


let produk = {
    name: "sabun mandi",
    photoUrl: "https://...",
    ratingcount: 0,
    price: 0
}
for (const properti in produk) {
    const value = produk[properti];
    if (typeof value == "number") {
        produk[properti] = "tidakada"
    }
}
console.log("produk", produk);


const temperatures = [32, 33, 31, 29, 18]
for (const temperatur of temperatures) {
    console.log(temperatur);

}