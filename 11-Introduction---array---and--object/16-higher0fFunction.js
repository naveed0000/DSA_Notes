

/**
 * array are also custom objects in js
 * index of the element is the key and the element it self is the value
 *  ["abc", "def", "ghi"] -> {0: "abc", 1:"def", 0:"ghi"}
 */


/**
 * higher order function 
 * there are function that depends & operate on other function : higher order functions take another function as an argument or return a function  and then excute a logic
 * Example 
 * 
 *  function gun() { 
 * }
 * function func(gun) { 
 *  gun();
 * }
 * 
 * link
 */

/**
 * map function 
 * map is a higher order function available with arrays 
 * it takes a function as an agrument
 * it returns an array in which every value is actually populated by calling 
 * function f with original array of element as argument 
 * 
 * Every element of the original array is passed one by one in the argument function  f 
 * Whatever is the output for each individual element, we populate that output in an array
 * map internally iterates/loops over every element of the given original array 
 * pass that element in the argument function f and then store the 
 * value inside an array. 
 */

function isEvenOrOdd(x) { 
    if(x % 2 == 0) { 
        return "even"
    }
    else { 
        return 'odd'
    }
}

function square(el) { 
    return el*el // return square
}
function cube(el) { 
    return el*el*el // return square
}

const arr = [1, 2, 3, 4, 5, 6]; // original array

const result = arr.map(square); // square is function passed as an argument 

/**
 * square(1) -> 1
 * square(2) -> 4
 * square(3) -> 9
 * square(4) -> 16
 * square(5) -> 25 
 */

console.log(result)

const cubeResult = arr.map(cube); 
console.log(cubeResult)


const evenodd = arr.map(isEvenOrOdd)
console.log(evenodd)