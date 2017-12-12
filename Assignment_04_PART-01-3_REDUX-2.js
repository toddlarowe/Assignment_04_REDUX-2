//Assignment 4 PART 1.3 REDUX

// Return true if test_value is in the set, false otherwise
// function myset_has(data, test_value) { ... }

function myset_has(data, test_value) {

  for(i = 0; i < data.length; i++) {
    if(test_value == data[i]) {
      return true;
    } else {
        return false;
    }
  }
}

let myData = ["John", "Paul", "George", "Ringo"];
let myDataNum = [1,2,3,4,5,6,7,8,10]

console.log(myset_has(myData, "John"));
console.log(myset_has(myData, "Pete"));
console.log(myset_has(myDataNum, 1));
console.log(myset_has(myDataNum, 99));
