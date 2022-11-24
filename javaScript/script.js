// function first(){
//     console.log('first');
// }
// function second(){
//     console.log('second');
// }
// function third(){
//     console.log('third');
// }
// first();
// second();
// third();

// function first(){
//     alert('first');
//     second(); 
// }
// function second(){
//     console.log('second');
//     third();
// }
// function third(){
//     console.log('third');
// }
// const a=5,
// b=8;
// alert(a+b);
// let c=9,
// d=81;
// alert(d/c);
// console.log(d/c);
// document.write("81/9="+d/c)

// alert(NaN**2);

// let x=NaN;
// console.log(x,typeof x);

// let isGreater=4>1;
// alert(isGreater);

// function typeConversion(){
//     let num=document.getElementById("userinput").value;

//     console.log(num+" "+typeof +num);
// }
// console.log('this is first string ' +'this is second string');
// console.log('6'-2);
// let num=2;
// let num=2;
// console.log(++num);
// console.log(num++);
// console.log(num);

// let a=0,b=3,c=7;
// console.log(b&&c||a);

// console.log('tree'>'trie');
// console.log('tree'>'aries');

// console.log(5!=8);
// console.log(!true);
// let num=19;
// console.log(num>18?true:false);

// let sum=0;
// while(true){
//     let value=prompt('enter the value','');
//     if(!value) break;
//     sum+=+value;
    
// }
// alert(sum);

// let message2='i am 30 year old'
// function abc(a,b){
//     // message2='i am 20 year old'
//     let message2='i am 20 year old'
//     let message='i am sunny kumar'
//     console.log(a+b+message+message2);
// }
// abc('jhon','doe');
// console.log(message2);
// console.log(message);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(9,6)==undefined);

// function sum(a,b){
//     return
// }
// console.log(sum(9,6)==undefined);//true because return value is not assign


// let sayhi=function(){
//     console.log("hello");
// }
// sayhi();
// let greet=sayhi();
// console.log(greet);

// let sum=(a,b)=> a+b;
// console.log(sum(8,7));

// let sum=()=> console.log("hello");
// console.log(sum());
// sum()

// let num=255;
// console.log(num.toString(16));
// console.log(num.toString(2));

// let num2=12.4789
// console.log(Math.round(num2*100)/100)
// console.log(num2.toFixed(3));

// let str="missiy name is isunnyis"
// // console.log(str.indexOf('is',));
// // console.log(str[2])

// function count(str){
//     let count=0;
//     for(i=0;i<str.length-1;i++){
//         if(str.substring(i,i+2)=='is'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count(str));

// let ar=[1,2,3,4];
// console.log(ar[3]);

// // let arr[2];
// let arr=[[1,2,3],[4,5,6]];
// // console.log(arr[1][2]);
// let sum=0;
// for(let i=0;i<2;i++){
//     for(let j=0;j<=2;j++){
//         sum+=arr[i][j];
//         console.log(i,j);
//     }
// }
// console.log(sum);

let str="This is a dev class";
// let s="";
// let final=""
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i)==" "){
//         let smallstringrev="";
//         for(let j=s.length-1;j>=0;j--){
//             smallstringrev+=s.charAt(j);
//             // console.log(s.charAt(j));
//         }
//         final+=smallstringrev+" ";
//         // console.log(" ");
//         s="";
//     }
//     s+=str.charAt(i);
// }
// let smallstringrev="";
// for(let j=s.length-1;j>=0;j--){
//     smallstringrev+=s.charAt(j);
//     // console.log(s.charAt(j));
// }
// final+=smallstringrev+" ";
// console.log(final);

// let ar=str.split(" ");
// // console.log(ar[3])
// let final="";
// for(let i=0;i<ar.length;i++){
//     let s="";
//     for(let j=ar[i].length-1;j>=0;j--){
//         s+=ar[i].charAt(j);
//     }
//     final+=s+" ";
// }
// console.log(final);

// let p2={
//     isbult:true,
//     _prito_
// }
/*
function print(val){
    console.log(val);
}
function add(n1,n2,print){
    let sum=n1+n2;
    print(sum);
}
add(2,3,print)
*/

const fs=require("fs");

let count = 0;

function print(err,data){
    if(!err){
        count += 1;
        if(count < 6){
            var pr=fs.readFile("q"+count+".txt",'utf-8',print);            
        }
        console.log(pr);
    }
}

// Synchronous

// Asynchronous

// for(let i=1;i<=5;i++) {
//     fs.readFile("q"+i+".txt",'utf-8',callback);
// }/
