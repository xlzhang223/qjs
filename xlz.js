var person0 = {firstName:"Bzill1", lastName:"Gzates1", age:12, eyeColor:"blue"};
var person1 = {firstName:"Bzill2", lastName:"Gzates2", age:12, eyeColor:"blue"};
var mycars = ["Saab","Volvo","BMW"];

var array = {}
for(var i = 0;i != 5000; i++){
    var person2 = {firstName:"Bill", lastName:"Gates", age:i, eyeColor:"blue"};
    person2["firstName"] = "long";
    array[i] = person2;
    for(var j = 0; j != i; j++){
        array[j].age = j + 1;
    }
}




// print ('Hello o from world!');


// var person3 = {firstName:"zill", lastName:"ates", age:12, eyeColor:"red"};

// person2["lastName"];
