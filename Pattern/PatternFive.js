

function PatternFive(n) { 

    for(let row = 0; row < n; row++){ 
        let str = "";
        for(let column = 0; column < n; column++) { 
            if(column < n - row) { 
                str += "*"
            }
        }
        console.log(str);
    }
    return "";
}
console.log(PatternFive(4));