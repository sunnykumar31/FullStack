const fs= require("fs");

//Asynchronus
function callback(err,data){
    if(!err) console.log(data);
}

for(let i=1;i<=5;i++) {
    fs.readFile("q"+i+".txt",'utf-8',callback);
}
//Syncronous
// let count=0;
// function print(err,data){
//     count+=1;
//     if(count<=5){
//         if(!err){
//             console.log(data);
//         }
//         else{
//             console.log(err);
//         }
//     }
//     fs.readFile("q"+(count+1)+".txt",'utf-8',print);

// }
// fs.readFile("q1.txt",'utf-8',print);