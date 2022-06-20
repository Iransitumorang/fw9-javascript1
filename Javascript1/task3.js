// for (let i = 1; i <= 6; i++) {
//     let task = ' ';
//     for (let j = 1; j < i; j++) {
//         task += i + ' ';
//     }
//     console.log(task);
// }

// for (let i = 1; i < 6; i++) {
//     let task = ' ';
//     for (let j = 1; j <= i; j++) {
//         task += i + ' ';
//     }
//     console.log(task);
// }

// for (let i = 0; i < 5; i++) {
//     let s = ' ';
//     for (let j = 0; j < 5-i; j++) {
//         s += (i+j+1) + ' ';       
//     }
//     console.log(s);
// }

for (let i = 1; i <= 5; i++) {
    let result = ' ';
    for (let j = 1; j <= 6-i; j++) {
        result += j + ' ';
    }
    console.log(result);
}