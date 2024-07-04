let name = 'john'

let company = 'Amazon'; 
console.log(name, "works in ", company); 
console.log(`${name} works in ${company}`);

/*
    instead of just printing, we want to store it also 

*/

let str = "javascript"
let obj  = { 
}
let count = 0; 

for(const char of str) { 
    if(obj[char]){ 
        
    }
    else { 
        console.log(`${obj[char]} is ${count} ${str[count]}`);
        count += 1; 
    }
}