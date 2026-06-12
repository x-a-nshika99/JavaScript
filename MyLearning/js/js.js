 

// //WAYS TO PRINT IN JS 
//     console.log("hello");
//     // alert("me");
//     //document.write("this is document write");


// //Javascript console API (APPLICATION PROGRAMMING INTERFACE)
//     console.warn("this is warning");
//     console.error("this is error");
//     // console.clear("clear the console");
//     console.assert("use for comparing")

// //js variables 
// var num1=10;
// var num2=20;
// console.log("The sum is: " + (num1 + num2));
// console.log("The difference is: " + (num2 - num1));
// console.log("The product is: " + (num1 * num2));
// console.log("The quotient is: " + (num2 / num1));
// console.log("The remainder is: " + (num2 % num1));

// var str1="Hello world";
// console.log("length is :" + (str1.length));

// var str2="anshika" ;
// console.log("length is :" + (str2.length));

//js dic
// var score={
//     "Alice":90,
//     "Bob":85,
//     "Charlie":92
// }

// var score={
//     "name1":"anshika",
//     "name2":"khushi",
//     "name3":"akriti",
//     "name4" : "shiwani"
// };

// var a = score.length

// console.log(score);
// // console.log(a);

// console.log("length is:" + (score.length));
// // console.log(score)
// console.log("name 1 is :" + score["name1"]);
// console.log("name 2 is :" + score["name2"]);
// console.log("name 3 is :" + score["name3"]);
// console.log("name 4 is :" + score["name4"]);










// console.log("alice score is " + score["Alice"])
// console.log("alice score is " + score["Bob"])
// console.log("alice score is " + score["Charlie"])

//js array

// at the very high level, there are two types of data types in js 
// 1 primitve : undefined,null,string,boolean,symbol(uniqeue key deta ha)
// 2 reference data types: array and object



// var marks = [78,23,34,45,56,78,89];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]);
// console.log(marks[7]);








// var arr=[1,2,3,4,5]
// // if you want these value by indexing simply write 
// console.log(arr[3])
// console.log(arr)

// var arr=[1,12,3,4,5,6,7,8,9,10];
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr)
 

// console.log("hello js function");
// // function in js 

// var c1,c2
// //joh bhi variable logo ushko define karo verna error dega 


// function avg(a,b)
// {
//     c=(a+b)/2;
//     return c;
// }

// console.log("the average of 10 and 30 is :" + avg(10,30))
// c1=avg(90,100);
// console.log(c1);
// function avg(a,b,c)
// {
//     d=(a+b+c)/2;
//     return d;
// }

// c1=avg(2,3,4);
// c1=avg(12,13,14);
// c1=avg(22,33,44);
// console.log(c1)
// console.log(c2)

// //conditinal operations 

// var age=20;
// if(age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can not vote");
// }








// if (age>2){
//     console.log("you can not drink")
// }
// else{
//     console.log("you can drink")
// }

// //if else ladder

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

// //for looping

// var arr=[1,2,3,4,5,6,7,8,9,10];

// for(i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(i==2){
//         continue;
//     }
//     else{
//         console.log(arr[i]);
//     }

// }
// for(i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(i==2){
//         break;
//     }
//     else{
//         console.log(arr[i]);
//     }
// }





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


// // array ko treat karne ke liya foreach
// //  ka use kar sakte yeh bhi output dega joh yeh upar wala
// //  for loop de rha ha 


// var arr=[1,2,3,5,4,7,6,8,9]

// arr.forEach(function(element)
// {
//     console.log(element)
// })

 
 
// //for assuming we use let 
// //while loop
 
// // let j=0;
// // const m=0; 
// // m++;

// var arr=[1,2,3,5,4,7,6,8,9]
// let j=1;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// var arr1=[10,20,30,40,50];
// let m=0;
// console.log(arr1.length)

// while(m<arr1.length){
//     console.log(arr1[m])
//     m++;
// }


//do while loop


// do{
//     console.log(arr[j])


// }while(j<arr.length);

// shift();

// // array method 
// // shift: method phele element ko hata ke baki element de deta ha but output mai yeh tumko phela hataya hua element hi show karega.
// // unshift: eshme kya hota hai ki ek new element add kar deta hai starting mai
// main starting mai tmhra diya hua element add ho jayega starting wale ko hata ke 
// // agar unshift ko run karke length ko print karwaoge to yeh ek bad jayegi like phele length 5
// //  thi to unshift ke bad length 6 ho jayegi
// //sort arrange kar deti ha chote se bada 
// //tostring string mai badal deti ha 

// var arr3 =[1,2,3,4,5,6,7,8,9];
// console.log(arr3.length);

// // console.log(arr3.shift()); 
// // console.log(arr3.length);
// // console.log(arr3);

// console.log(arr3.unshift(90)); 
// console.log(arr3.length);
// console.log(arr3);

// console.dir(document);
// console.log(arr.shift)
// console.log("if use shift in arr " + (arr.unshift))
// console.log("if use shift in arr " + (arr.length))


// var arr4=[9,8,7,6,5,4,3,2,1];
// console.log(arr4);
// console.log(arr4.toString());
// console.log(arr4);
// console.log(arr4.sort());
// console.log(arr4);
// console.log(arr4.toString());
// console.log(arr4);
// var myArr=[1,2,3,4,5,6,7,8,9]
// h=myArr.shift()
// console.log(h)
// g=myArr.unshift()
// console.log(g)
// v=myArr.toString();
// c=myArr.sort();
// console.log(c)
// console.log(v)

// let myarr=["fan","name",32,null,true]
// console.log(myarr.length)
// console.log(myarr)
// myarr.pop();
// console.log(myarr.length)
// console.log(myarr)

// myarr.push("harry");
// console.log(myarr.length)
// console.log(myarr);
// myarr.shift();
// myarr.unshift("anshika");
// console.log(myarr.length)
// console.log(myarr);
// const newlen= myarr.unshift("anshika")
// console.log(newlen);
// console.log(myarr);


//foreach
//shift
//unshift
//sort
//tostring
//push
//pop



// // string method in js
// // indexOf bata ha konse index se start ho rha ha 
// // lastIndexOf bata h lasst index se khatam hua ha 
// // replace method sirf firdt occuranace ko hi replace karta ha
 
// let mystring="anshika is a good  good girl";
// console.log(mystring);
// console.log(mystring.length);
// console.log(mystring.indexOf("good"));
// console.log(mystring.lastIndexOf("good"));
// //slice(starting index, ending index)
// console.log(mystring.slice(0,9));
// d = mystring.replace("anshika","khushi")
// console.log(mystring.replace("anshika","khushi"));
// console.log(d)

// //date
// //new keyword new date bannane ke liye krte ha 

// let mydate = new Date();
// console.log(mydate)
// z=mydate.getDate();
// console.log(z)
// x=mydate.getTime();
// console.log(x)
// w=mydate.getHours();
// console.log(w)
// console.log(mydate.getDate());
// console.log(mydate.getTime());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
// console.log(mydate.getFullYear());
// console.log(mydate.getMonth());

// //document 
// //console pe document likhe ke dekho 
// //document.location likhe ke dekho 
// // html page ko acces karne ke liya doc ka use kar ke manupilation kar skte h 
// //DOCUMENT OBJECT MODEL

// //html ko dynamic access kar sakte ha mtlb ki tm inspect pe jake tm change kar sakte ho 
// //document.getElementById eshki help se changes kar sakte ha html mai dyanmically

// //same naam ki class ho sakti hai par id nhi mtlb 
// // ekjaha class = one ha to tm dushri jagah bhi class = one likhe sakte ho 
// //par same cheez tm id ke sath nnhi kar sakte 

// //DOM manipulation

//document object model

//window hota hai ek eshke andar share document hote hai

//window.document.agar tm kuch bhi likhoge to wo document mai jayega

// eshko agar console se dekhna haia to 
// console.dir(window.document) likhna padhta hai

// console.log("hello); yeh print karne ke liya hota ha
// //console.dir(document) yeh document or property ko access karne ke liya hota ha"



// document.getElementById("click").style.border="2px solid red"
// document.getElementsByClassName("container")[0].style.background="yellow"
// document.getElementsByClassName("container")[1].style.background="red"
// document.getElementsByClassName("container")[0].style.border="2px solid red"

// // document.getElementById   getbi likhoge to ye ayega 
// // document.getElementsByClassName getc likhoge to ye ayega 

// document.getElementsByTagName("h1")[0].style.background="green"


document.body.style.background="lightblue"









// let elem = document.getElementById('click');
// console.log(elem)

// let elemclass = document.getElementsByClassName('container')
// console.log(elemclass)

// //itna samjho tm beena ccs html ko touch kiya rtm yaha se changes kar sakte ho 

// elemclass[0].classList.add("bg-primary")
// elemclass[0].classList.add("text-success")
// elemclass[0].classList.remove("bg-primary")

// //esse tm html ke tags ko console mai dekh sakte sath hi tm output bhi dekh 
// //sakte ho 
// console.log(elemclass[0].innerHTML)
// console.log(elemclass[0].innerText)

// document.getElementById("heading").innerText="hello anshika"
// document.getElementById("click").innerText="hello anshika"
// document.getElementById("heading").innerHTML="hello anshika"
// document.getElementById("click").innerHTML="hello anshika"


// //eshe kya hota ha sare button ya div tag tmhre samne a jayege 
// //document.getElementsByTagName esse tm sare tag name ko access kar sakte ho 


// //ek difference samjho 
// //document.getElementById or document.getElementsByClassName
// //id ek hi ho sakti ha class same bhi ho sakti hai 
// let  m = document.getElementsByTagName("button")
// console.log(m)
// m[0].style.background="pink"

// // tn = document.getElementsByTagName("button")
// // console.log(tn)
// // createdElement = document.createElement('p')
// // createdElement.innerText = "this is element"
// // tn[0].appendChild(createdElement)


// // createdElement2 = document.createElement('b')
// // createdElement2.innerText = "this is element2"
// // tn[0].replaceChild(createdElement2,createdElement)

//  //document loaction 
//  //document title 
//  //document url 
//  //document script 
//  //document link 
//  //document images
//  //document form 

//  //selecting using query
 
//  //querySelector sirf ke element  return karega 
//  //querySelectorAll pura node list of element return karega 

//  sel = document.querySelector('.container')
//  console.log(sel)

//  selall = document.querySelectorAll('.container')
//  console.log(selall)

//  events in js 
//  jab eshpe click aru to yeh ho jaye 


//  clicked button function ko run karwane ke liye phele tmko html pe button 
//  ke tag mai jake onclick use kkarke apne function ko call kar dena 
//  <button id="click" onclick="clicked()">click me</button>
//  like this'
 
//    document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked </b>"
//  esse ham jab cick karenge to output mai likh ke a jayega apne click kiya ha 


//  function clicked(){
//     document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked </b>"
//     console.log('the buttton was clicked')
//  }

//  yaha pe kya hua joh phele jaisa tha click ek bar karneke bad again click 
//  karne pe phele jaise ho gya 

//  let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// first.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log(' mouse  UP')
// })



//  yeh batata ha tmhra document load ho gya ha ki nhi hua ha 
//  window.onload = function(){
//     console.log('the document was loaded')
//  }

// button click hoke load hua to bhi batayega 
// first.addEventListener('click',function(){
//     console.log('clicked hua')
// })

// container pe jitni bar mouse leke jaoge to likh ke ayega 
// first.addEventListener('mouseover',function(){
//     console.log(' mouse  in')
// })


// mouse container se bahar le gye to yeh bhi bateyega 
// first.addEventListener('mouseout',function(){
//     console.log(' mouse out')
// })

// click kiya mouse se to bhi bateyega 
// first.addEventListener('mouseup',function(){
//     console.log(' mouse clicked')
// })

// mouse dabaya aur choda to bhi bateyga 
// first.addEventListener('mousedown',function(){
//     console.log(' mouse down hua ')
// })






// //setTimeout and setinterval

// logkaro = ()=>{
//     console.log("i am your log")

// }

// setTimeout will show you output after some time 
// setInterval will show you output after regular interval of time

// setTimeout(logkaro,10000); //10 second ke bad yeh function run hoga
// setInterval(logkaro,5000); //har 5 second ke bad yeh function run hoga

// clr = setTimeout(logkaro,5000);
// clr = setInterval(logkaro,2000);

// use clearInterval(clr)/clearTimeout to cancel setInterval/setTimeout 

//javascript localstorage

// localStorage.setItem("name","khushi");

// setItem()
// getitem()
//removeitem()
//clear()

// localStorage.setItem("name","harry"); //console pe yeh likh sakte ha 
// setItem mean new item in 
// getitem mean item lena 
// localStorage.getItem('name') 
// localStorage.removeItem('name') //item will removed 
// yeh name ki value return karega

//sirf choti moti cheeze store karo bahut jada store nhi kar sakte ha 

// localStorage.clear();
//local storage delete kar sakte ha 



//json
// javascript object notation 
// data ko exchange karne mai use karte ha 

//typeof kisi ka bhi datatype bata ha 

//json double quote support karta ha bas 

obj = {name: "harry", length: 1}
console.log(obj)
console.log(typeof obj)
// obj ka agar datatype dekhoge to object bateyega 
jso = JSON.stringify(obj) 
// abhi yeh obj ko string mai convert kar diya ha 
console.log(jso)
console.log(typeof jso)

// kisi bhi obj ko json string mai convert karna ha to json.stringify ka use karte ha 
//eshi ko inverse karne ke liye 

parsed = JSON.parse('{"name": "harry", "length": 1}');
console.log(parsed);

// ECMAscript javascript ka advance version 
//javascript ko standard kiya gya 

//template literals - backyicks
// a=34;
// console.log('this is my ${a}')


// bootstrap 
// javascript ka yeh framework ha 







