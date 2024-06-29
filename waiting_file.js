let a= 10;
let b=0;

let wiatingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)

    }, 2000)

})

wiatingData.then((data)=>{
    console.log(a+data);
})