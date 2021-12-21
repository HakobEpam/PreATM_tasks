//This is the first task "Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values"
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
// console.log(a);
console.log(a);