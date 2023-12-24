/*******************************************************************************
Write a function `one` that accepts an array and a callback as arguments. The
function should call the callback for each element of the array, passing in the
element and its index. The function should return a boolean indicating whether
or not exactly one element of the array results in true when passed into the callback.

Examples:

let result1 = one(['x', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result1);   // false

let result2 = one(['x', 'a', 'y', 'z'], function(el) {
    return el === 'a';
});
console.log(result2);   // true

let result3 = one(['x', 'a', 'y', 'a', 'z'], function(el) {
    return el === 'a';
});
console.log(result3);   // false

let result4 = one(['apple', 'dog'], function(el) {
    return el.length > 3;
});
console.log(result4);   // true

let result5 = one(['apple', 'dog', 'pear'], function(el) {
    return el.length > 3;
});
console.log(result5);   // false

let result6 = one(['apple', 'dog', 'food', 'cat'], function(el, idx) {
    return el.length === idx;
});
console.log(result6);   // true
*******************************************************************************/

let one = function(array, cb) {
    let trueCount = 0;
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        let res = cb(el, i)
        trueCount += res // if callback returns true, the count value goes up by 1
    }
    return trueCount === 1 // the function will only return true if only ONE value in the callback returns truthy
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = one;
