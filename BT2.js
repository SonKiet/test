// for (let i = 1; i <= 7; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

for (let i = 1; i <= 7; i++) {
    let row = '';
    for (let j = 1; j <= i * 2 + 1; j++) {
        row += '*';
    }
    console.log(row);
}