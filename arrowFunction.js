let variableFunction = function () {
    return "this is an anonymous function"
}
console.log("variableFunction", variableFunction());

let variableArrowFunction = (parameter) => {
    return "this is an anonymous function" + parameter
}
console.log("variableArrowFunction", variableArrowFunction("isi parameter"));

//delay selama masukan variable ke2
setTimeout(() => {
    console.log("this log  will be dekayed");
}, 3000)

//karena singkronus tidak mau menunggu perintah tereksekusi selama inputan variable ke2 

function getPesan() {
    setTimeout(() => {
        callback("this is a string from getPesan()")
    }, 3000);
    console.log("getPesan() has finisjed reading all of it's codes");
}
console.log("form getPesan():", getPesan);

// setTimeout digunakan untuk mendelay eksekusi

function getpesancallback(callback) {
    setTimeout(() => {
        callback("this is a string from getpesancallback()")
    }, 3000);
    console.log("getpesancallback() has finished reading");
    getpesancallback(
        (result) => {
            console.log("from getpesancallback():", result);
        }
    )
}