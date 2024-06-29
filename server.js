//const jsonString = '{"name": "john", "age" : 25, "city" : "Delhi"}';
//const jsonObject = JSON.parse(jsonString);
//console.log(jsonObject);

//object to JSON convert

const objectToConvert = {
    name: "Alice",
    age:38
};
const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString);
console.log(typeof jsonString);