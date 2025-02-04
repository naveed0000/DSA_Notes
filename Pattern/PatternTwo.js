
function PatternTwo(n) { 
    for(let i = 0; i < n; i++) {  // for row 
        let str = "";
        for(let j = 0; j <=i; j++) {  // for colum , condition is j <= i
            str += "*"; // culumative for row
        }
        console.log(str);
    }
    return "";
}
console.log(PatternTwo(4));