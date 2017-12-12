//Assignment 04 PART 1.2 REDUX

//function myset_remove(data, remove_value) { ... }

function myset_remove(data, remove_value) {

 for(i = 0; i < data.length; i++) {
    if(remove_value == data[i]) {
        data[i] = "";
        return data;
    }
  }
}





let myData = ["John", "Paul", "George", "Art", "Pete"];
let myDataNum = [1,3,5,7,9];
console.log(myset_remove(myData, "Pete"));
console.log(myset_remove(myDataNum, 5));
