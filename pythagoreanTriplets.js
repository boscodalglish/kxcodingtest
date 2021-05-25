let a = 0, b = 0, c = 0;
let s = 1000;
let found = false;
for (a = 1; a < s / 3; a++) {
    for (b = a; b < s / 2; b++) {
        c = s - a - b;
 
        if (a * a + b * b == c * c) {
            found = true;
            break;
        }
    }
 
    if (found) {
        console.log(" A:"+ a + " B:" + b + " C:" + c);
        break;
    }
}