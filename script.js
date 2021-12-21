function myNubers() {
    let arr = [];
    for (let index = 0; index <= 9; index++) {
        arr.push(parseInt(Math.random() * 100))
    };
    arr.sort();
    const result = arr[9] * arr[8] * arr[7];
    return result;
}
let a = myNubers();
console.log(a)