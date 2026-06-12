// 1 ways to print in js 
// console.log("hello world")
// alert("me")
// document.write("this is document write")

 

// 2 Js console API
// console.log("hello world","anshika pal");
// console.warn("this is warning");
// console.error("this is an error");

// var num1=10;
// var num2=20;
// console.log("The sum is: " + (num1 + num2));
// console.log("The difference is: " + (num2 - num1));
// console.log("The product is: " + (num1 * num2));
// console.log("The quotient is: " + (num2 / num1));
// console.log("The remainder is: " + (num2 % num1));

// var str1="Hello world";
// console.log("length is :" + (str1.length));

//var str2 ;
//console.log("length is :" + (str2.length));

var score={
    "Alice":90,
    "Bob":85,
    "Charlie":92
}
console.log(score);
console.log("Alice's score is: " + score["Alice"]);

var a = true;
var b = false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log("the value of a is: " + a);
console.log("the value of b is: " + b);

// var arr=[1,2,3,4,5];
// console.log("the array is: " + arr);
// console.log("the first element is: " + arr[0]);
// console.log("the length of array is: " + arr.length);

//important

function color() {
    document.body.style.backgroundColor = "pink";
}
function alert() { 
    var a=1;
    var b=2;
    var c=a+b;
    alert(c);
}

window.onload = function() {
    document.body.style.backgroundColor = "lightblue";
};

anu.addEventListener('mouseover',function(){
    document.body.style.backgroundColor = "green";
});

anu.addEventListener('mouseout',function(){
    document.body.style.backgroundColor = "lightblue";
}   );


// parseInt mtlb hota ha conversion like int to float 
// .value ka mtlb hota ha user ne joh value likhi ha wo value isme a jati ha 

sum =() =>{
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("sum").innerHTML = sum ;
}

// function value leta ha kuch return karta ha 
log = () => {
    console.log("this is a log after 10 seconds");
    document.getElementById("khu").innerHTML = "<h1>hello i am superman</h1>";
}
// use of 10 sec bad screen change karna ya kuch print karna 
setTimeout(log, 10000);

//  setinterval mtlb yeh har interval mai call hoga like 10 sec ke bad repeat hoga ek loop jaissa 
var d = 0;
 time = () =>{
    d+=1
    document.getElementById("am").innerHTML = d
 };

//  har ek interval ke bad d ki value increase hoti jayegi

function start()
{
     a=setInterval(time,1000)
}
function stop(){
    clearInterval(a);
}

// json string use karte ha data ko backend mai le janane ke liya 

o={"name":"json","age":34,"city":"newyork"}
j=JSON.stringify(o);
console.log(j);
o2=JSON.parse(j);
console.log(o2);
 

// at the very high level, there are two types of data types in js 
// 1 primitve : undefined,null,string,boolean,symbol(uniqeue key deta ha)
// 2 reference data types: array and object

// var arr=[1,2,3,4,5]
// // if you want these value by indexing simply write 
// console.log(arr[3])
// console.log(arr)

// function in js

// function avg(a,b)
// {
//     c=(a=b)/2;
//     return c;
// }
// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1,c2)

// conditonal operators

// var age=4;
// if (age>2){
//     console.log("you can not drink")
// }
// else{
//     console.log("you can drink")
// }


// if else ladder

// if (age>20){
//     console.log("you are not kid")
// }
// else if (age>2){
//     console.log("you are kid")
// }
// else if (age>40){
//     console.log("you are not young")
// }
// else {
//     console.log("you are young")
// }

// for looping

// var arr=[1,2,3,5,4,7,6,8,9]
// console.log(arr)
// for(var i =0;i<arr.length;i++){
//     if(i==2){
//         break;
//     }
//     else if(i==7){
//         continue;
//     }
//     console.log(arr[i])
// }


// array ko treat karne ke liya foreach ka use kar sakte yeh bhi output dega joh yeh upar wala for loop de rha ha 

// arr.forEach(function(element){
//     console.log(element)
// });

// assume karne ke liya let ka use karte ha temporary hotaha function ke bahr use nhi kar skate ha 

// let j=0;
// const m=0; 
// m++;

// let j=7;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }


// do{
//     console.log(arr[j])
//     j++;

// }while(j<arr.length);

// array method 
// shift: method phele element ko hata ke baki element de deta ha 
// unshift:main starting mai tmhra diya hua element add ho jayega starting wale ko hata ke 
// agar unshift ko run karke length ko print karwaoge to yeh ek bad jayegi like phele length 5
//  thi to unshift ke bad length 6 ho jayegi 
// myArr.toString()
// myArr.sort();

// let myArr=["fan","name",32,null,true]
// console.log(myArr.length)
// myArr.pop();
// myArr.push("harry");
// myArr.shift();
// myArr.unshift("anshika");
// const newlen= myArr.unshift("anshika")
// console.log(newlen);
// console.log(myArr);

// string method in js
// indexOf bata ha konse index se start ho rha ha 
// lastIndexOf bata h lasst index se khatam hua ha 
// replace method sirf firdt occuranace ko hi replace karta ha

// let mystring="anshika is a good girl";
// console.log(mystring.length);
// console.log(mystring.indexOf("anshika"));
// console.log(mystring.lastIndexOf("anshika"));
// console.log(mystring.slice(0,4));
// d = mystring.replace("anshika","khushi")
// console.log(d);

// let mydate = new Date();
// console.log(mydate.getDate);
// console.log(mydate.getTime);
// console.log(mydate.getHours);

// doct manupilation
// html page ko acces karne ke liya doc ka use kar ke manupilation kar skte h 
 




