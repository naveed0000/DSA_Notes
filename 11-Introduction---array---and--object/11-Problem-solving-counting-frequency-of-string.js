/*
Given a string, key to print no of occurences of each unique character of a string 

    example -> javasccript 


/*
    Approach
    how about we somehow store frequency of each unique char 
    we need a mapping based structure. 
    <key -> value > object 
    
    "javascript"

    frequency map : { 

    }


*/

let str = "javascript"; 
let freqMap = { }; 
for(const char of str) { 
    if(freqMap[char]) { 
        freqMap[char] += 1; 
    }
    else { 
        freqMap[char] = 1; 
    }
}
console.log(freqMap)