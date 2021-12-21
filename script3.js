var happines = {
    happy: 4,
    happyier: 5,
    unhappy: 1,
    lessHappy: 3,
    moreLessHappy: 2
}

// function sorting(){
//     var arr = [];
//     // for(i = 0; i <= 5; i ++){
//     //     console.log(happines.entries(obj))
//     // }

//     for (const [key, value] of Object.entries(happines)) {
//         console.log(`${key}: ${value}`);
//         arr.push( ${value} );
//       }
// }

var arr = [];
for (const [key, value] of Object.entries(happines)) {
    // console.log(`${key}: ${value}`);
    arr.push(parseInt(`${value}`));

}
arr.sort();
arr.reverse();
console.log(arr);
var arr1 = [];

for(i = 0; i < arr.length; i++){
    for (const [key, value] of Object.entries(happines)) {
        var t = parseInt(`${value}`);
        if (arr[i] == t && arr1) {
            console.log(t);
            arr1.push(`${key}`)
        } 
    }
}


console.log(arr1)