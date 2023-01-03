
let num = +prompt('Zinapoyaning sonini kirting')
// let b = '';
let a = '=';

for (let i = 0; i < num; i++) {
    // b += '*'
    a += '*'
    // a += '='
    // a = a + '-'
    console.log(a);
    
}

let b = +prompt('Son kiriting')
while (isNaN(b)) {
    b = +prompt('Siz son kiritmadingiz, iltimos son kiriting')
    
}

let d = +prompt('Sonning darajasini kiriting')
while (isNaN(d)) {
    d = +prompt('Darajani son korinishida kirgazing')
    
}

// console.log(b**d);

