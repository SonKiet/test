// =========================================================
/*
    BAI TAP 1
    INPUT   : Nhap vao n
    PROCESS : In so do ra 10 lan
    OUTPUT  : undefined
*/
function bai_tap_1(n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result + "bc";
    }
    console.log(result);
    return;
}
bai_tap_1(10);
// =========================================================
/*
    BAI TAP 2
    INPUT   : 
    PROCESS : In so do ra 1 -> 100
    OUTPUT  : 
*/
function bai_tap_2(m) {
    for (let i = 1; i <= m; i++) {
        console.log(i);
    }
    return;
}
bai_tap_2(100);

// =========================================================
/*
    BAI TAP 3
    INPUT   : 
    PROCESS : In so do ra 100 -> 1
    OUTPUT  : 
*/
function bai_tap_3(a) {
    for (let i = a; i >= 1; i--) {
        console.log(i);
    }
    return;
}
bai_tap_3(100);
// =========================================================
/*
    BAI TAP 4
    INPUT   : 
    PROCESS : In so do ra 1 -> 100 mà chia hết cho 3
    OUTPUT  : 
*/
function bai_tap_4(b) {
    for (let i = 1; i <= b; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
    return;
}
bai_tap_4(100);
// =========================================================
/*
    BAI TAP 5
    INPUT   : 
    PROCESS : In so do ra 1 -> 100 mà chia hết cho 7
    OUTPUT  : 
*/
function bai_tap_5(v) {
    for (let i = v; i >= 1; i--) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
    return;
}
bai_tap_5(99);
// =========================================================
/*
    BAI TAP 6
    INPUT   : 
    PROCESS : Tính tổng của 1,2,3,4....5000
    OUTPUT  : 
*/
function bai_tap_6(ac) {
    var sum = 0;
    for (let i = 1; i <= ac; i++) {
        sum += i;
    }
    return;
}
bai_tap_6(10);
// =========================================================
/*
    BAI TAP 7
    INPUT   : 
    PROCESS : Tính tổng của 5001,5002,...,10000
    OUTPUT  : 
*/
function bai_tap_7() {
    /* 
        PROCESS
    */


    return;
}

// =========================================================
/*
    BAI TAP 8
    INPUT   : 
    PROCESS : Tính tổng của 30 số 5, 10, 15, 20, 25
    OUTPUT  : 
*/
function bai_tap_8() {
    /* 
        PROCESS
    */


    return;
}

// =========================================================
/*
    BAI TAP 9
    INPUT   : Số n
    PROCESS : Tính giai thừa
    OUTPUT  : n!
*/
function bai_tap_9() {
    var ret = 1;
    /* 
        PROCESS
    */

    return ret;
}

// =========================================================
/*
    BAI TAP 10
    INPUT   : Số n
    PROCESS : Kiểm tra số này phải số nguyên tố không?
    OUTPUT  : 
        * true  - số nguyên tố
        * false - không phải số nguyên tố
*/
function bai_tap_10() {
    var ret = false;
    /* 
        PROCESS
    */

    return ret;
}

// =========================================================
/*
    BAI TAP 11
    INPUT   : Số n
    PROCESS : In ra n số fibnacci đầu tiên
    OUTPUT  : 
*/
function bai_tap_12(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 1 == 0 && i % i == 0) {
            console.log(i);
        }
    }
}
bai_tap_12(10);