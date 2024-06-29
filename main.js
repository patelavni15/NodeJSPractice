const person = {
    name:"John",
    age:30,
    isStudent:false,
    hobbies:["Cricket", "chess", "Football"]
};
console.log(person.name);
console.log(person.hobbies[1]);
console.log(person.age);

//const ages =[12,40,25,30];
const ages=prompt("Please enter age");
const result = ages.filter(checkAge);
function checkAge(age){
    return age<=26
}

console.log(result);

