


function PatternFour(n) { 
    for(let row = 0; row < n; row++) { 
        let str = ""
        for(let column = 0; column <= row; column++) { 
            str += (row + 1) + "";
        }
        console.log(str)
    }
    return "";
}
console.log(PatternFour(4));