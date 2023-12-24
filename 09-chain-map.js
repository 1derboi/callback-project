/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

let chainMap = function(value, ...cb) {
    let res = value;
    if (cb === undefined) {     // if there are no more callbacks to chain, the result will be returned
        return res;
    } else {
        cb.forEach(function (el) {  // for each callback; each callback will take-in the previous result or starting value (if el = first callback) and return a new value
            res = el(res)
        })
        return res;
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
