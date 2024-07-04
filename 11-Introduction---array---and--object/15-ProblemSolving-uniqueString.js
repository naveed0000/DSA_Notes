/**
 *  Given an array of strings, print all the unique string in the array
 *  example -> ["abc", "hello", 'c', 'd', "abc", 'c', "d"]
 * ans -> abc, hello, c , d, 
 */


let arr = ["abc", "hello", 'c', 'd', 'c', "abc", 'd'];

let obj = {}; 
for(const element of arr) { 
    if(!obj[element]) { 
        obj[element] = true; 
    }
}

for(const key in obj) { 
    console.log(key)
}



