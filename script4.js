function addWithDelay(...args) {
    args.sort();
    prom = new Promise((resolve, reject) =>
    {
        if (args[0] >= 0) {
            setTimeout(() => resolve("result"), 1000);
        } else {
            setTimeout(() => reject(new Error("ignored")),);
        }
    });
    prom.then(
        result => {
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            console.log(args.reduce(reducer));
        },
        error => console.log("Error! Some parameter is a negative number!")
    );

}

addWithDelay(3, 2, 1,1);

// const a = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve();
//     },1000)
// })

// return result;
    // if (args[0] >= 0) {
    //    return new Promise(re)
    // } else {
    //     console.log("vatas")
    // }

    // let sum = 0;
    // for (i = 0; i < args.length; i++) {
    //     if (args[i] >= 0) {
    //         sum += args[i];
    //         setTimeout(() => {
    //             // console.log(Promise.resolve(numbersSum))
    //             myPromise()
    //                 .then(function (v) {
    //                     // console.log(sum)
    //                 })
    //         }, 4000)

    //         // console.log(numbersSum)
    //     } else
    //     {
    //     myPromise()
    //                 .then(function (v) {
    //                     console.log("aaa")
    //                     return Promise.reject("Error! Some parameter is a negative number!")
    //                 })
    //                 .catch(function(err) {
    //                     console.log("Error! Some parameter is a negative number!", err)
    //                     return
    //                 })
    //             }   

    // }
    // return sum;