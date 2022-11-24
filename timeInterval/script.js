let a=true;
// setTimeout(function(){
//     a=false;

// },1000);

// while(a){
//     console.log("hello");
// }

let count=1;
setInterval(function(){
    if(a){
        console.log(count++);
    }
},1000);

setTimeout(function(){
    a=false;

},10069);
