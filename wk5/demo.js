const multiply = (a, b) => {
    // Method 1: new Promise object
    // return new Promise((resolve, reject) => {
    //     if (Number.isInteger(a) && Number.isInteger(b))
    //         resolve(a * b);
    //     else
    //         reject("this is invalid");
    // });

    // Method 2: return Promise.resolve / reject object
    if (Number.isInteger(a) && Number.isInteger(b))
        return Promise.resolve(a * b);
    else
        return Promise.reject("this is invalid");
}
multiply('a', 4)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })