// var a = 100;
// for (i = 1; i < a; i++) {
//     console.log(i = i + 1);
// }


// for (var a = 1; a < 1000;) {
//     var str = a + " " + (a + 1) + " " + (a + 2) + " " + (a + 3) + " " + (a + 4);
//     console.log(str);
//     a = a + 5;
// }

// function c2() {
//     for (var b = 0; b < 10; b = b + 1) {
//         var str = "";
//         for (var a = 1; a <= 5; a = a + 1) {}
//     }
// }

// function number1() {
//     for (var i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// console.log(number1());

// function number2() {
//     for (var i = 100; i >= 1; i--) {
//         console.log(i);
//     }
// }
// console.log(number2());

// function number3() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 3 == 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(number3());

// function number4() {
//     for (var i = 99; i >= 1; i--) {
//         if (i % 7 == 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(number4());

sum = 0;

function sum5000() {
    for (var i = 1; i <= 3; i++) {
        sum += i;
    }
}

console.log("Tổng từ 1 - 5000 là: " + sum5000());