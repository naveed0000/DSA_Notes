function PatternThree(n) { 
    for(let row = 0; row < n; row++) { 
        let str = "";
        for(let column = 0; column <= row; column++) {    
            str += ( column + 1) + ""
        }
        console.log(str);
    }
    return ""
}

console.log(PatternThree(4));