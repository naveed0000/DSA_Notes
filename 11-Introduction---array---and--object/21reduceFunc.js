/**
 * 
 * reduce is a higer order function avilable for arrays 
 * reduce also takes a function f as an arugument 
 * when reduce does is , it one by one goes to every element of the array. 
 * say the current element is arr[i]
 * reduce will pass this element to the function f, and accumulate the result of further function calls with this particular result 
 * 
 */


const arr = [1, 2, 3, 4, 5, 6]; 

function sum(prevResult, currVal)  {
    console.log(prevResult, " : ", currVal)
    return prevResult + currVal; 
}

// const result  = arr.reduce(sum); 
// console.log(result); 


// Explore 


/**
 * Cart -> [iphone {price : 10000000, name : "iphone"}, case{price:500, name : "backcover"},tempered glass {}]
 */
function addThePrices(prevREsult, currVal) { 
    console.log(prevREsult, " :  ", currVal);
    let newPrice  = prevREsult.price + currVal.price;
    return {price : newPrice}
}

let cart = [
    {
        price: 100_000, 
        name: "Iphone"
    }, 
    {
        price : 500, 
        name : "backcover"
    }, 
    { 
        price : 300, 
        name : "tempered glass"
    }
]

const totalPrice = cart.reduce(addThePrices); 

console.log(totalPrice.price);