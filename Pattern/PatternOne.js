/* 
o/p
    ****
    ****
    ****
    ****
*/

/* 
    1. for the outer loop, count the no. of lines
    2. for the inner loop, focus on the columns,  and connect them somewhere to the rows 
    3. print  the "*"
    4. (optional step ) observe symmetery 
*/

/*  */

/* 
o/p
    ****
    ****
    ****
    ****
*/
console.log("My name is %s and I am %d years old.", "Naveed", 22);



function PatternOne(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let columns = 0; columns < n; columns++) {
      str += "*";
    }
    console.log(str);
    str += "";
  }
}

console.log(PatternOne(4));
