function soNguyenTo(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 1 == 0 && i % i == 0) {
            console.log(i);
        }
    }
}
soNguyenTo(10);