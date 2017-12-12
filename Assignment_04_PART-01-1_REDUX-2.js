//Assignment 4 PART 1.1 REDUX

//function myset_add(data, new_value) { ... }
//function 1: add a value to the "Set" (array)

function myset_add(data, new_value) {

  for(i = 0; i < data.length; i++) {
    if(new_value == data[i]) {
      return data;
    }
  }
 for(i = 0; i < data.length; i++) {
    if(new_value !== data[i]) {
      data[data.length] = new_value
        return data;
    }
  }
}

let mySet = ["John", "Paul", "George", "Ringo"];
let mySetNum = [1,3,5,7,9,11];

console.log(myset_add(mySet, "John"));
console.log(myset_add(mySet, "Ringo"));
console.log(myset_add(mySet, "Pete"));
console.log(myset_add(mySetNum, 7));
console.log(myset_add(mySetNum, 99));
