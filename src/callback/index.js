function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1,num2);
}

console.log(calc(4,6,sum));

setTimeout(function () {
    console.log('Hola JavaScript');
}, 5000)

function greeting(name){
    console.log(`Hola ${name}`);
}
setTimeout(greeting, 2000,'Oscar')