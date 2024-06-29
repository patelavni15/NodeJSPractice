var _ = require('lodash');

const array = ["Name", "Age", "City", 1, 1, 3, 3, "Age"];
const data = _.uniq(array);
console.log(data);
const filter = _.slice(array, 2, 5);
console.log(filter);

console.log(_.isString("hello"));

var array1 = [1];
var other = _.concat(array1, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array1);
// => [1]