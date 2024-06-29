/* var a=20;
var b=40;
console.log(a+b);
if (a==='20')
    {
        console.log("matched");
    }
    else{
        console.log("unmatched");
    }
     */

   /*  for(i=0; i<=10; i++)
        {
            console.log(i);
        }
 */
const demo_index = require('./demo_index')
console.log(demo_index.x)
console.log(demo_index.y)
console.log(demo_index.z)
console.log(demo_index.z())
const arr = [2,5,6,7,1,4,5,6];
console.log(arr);
const result=arr.filter((item)=>{

    return item>4
})
console.warn(result)

const result2 = arr.filter((item)=>{
    return item===5
})
console.log(result2)