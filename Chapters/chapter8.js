shift();

// array method 
// shift: method phele element ko hata ke baki element de deta ha but output mai yeh tumko phela hataya hua element hi show karega.
// unshift: eshme kya hota hai ki ek new element add kar deta hai starting mai
//main starting mai tmhra diya hua element add ho jayega starting wale ko hata ke 
// agar unshift ko run karke length ko print karwaoge to yeh ek bad jayegi like phele length 5
//  thi to unshift ke bad length 6 ho jayegi
//sort arrange kar deti ha chote se bada 
//tostring string mai badal deti ha 

var arr3 =[1,2,3,4,5,6,7,8,9];
console.log(arr3.length);

// console.log(arr3.shift()); 
// console.log(arr3.length);
// console.log(arr3);

console.log(arr3.unshift(90)); 
console.log(arr3.length);
console.log(arr3);

console.dir(document);
console.log(arr.shift)
console.log("if use shift in arr " + (arr.unshift))
console.log("if use shift in arr " + (arr.length))


var arr4=[9,8,7,6,5,4,3,2,1];
console.log(arr4);
console.log(arr4.toString());
console.log(arr4);
console.log(arr4.sort());
console.log(arr4);
console.log(arr4.toString());
console.log(arr4);
var myArr=[1,2,3,4,5,6,7,8,9]
h=myArr.shift()
console.log(h)
g=myArr.unshift()
console.log(g)
v=myArr.toString();
c=myArr.sort();
console.log(c)
console.log(v)

let myarr=["fan","name",32,null,true]
console.log(myarr.length)
console.log(myarr)
myarr.pop();
console.log(myarr.length)
console.log(myarr)

myarr.push("harry");
console.log(myarr.length)
console.log(myarr);
myarr.shift();
myarr.unshift("anshika");
console.log(myarr.length)
console.log(myarr);
const newlen= myarr.unshift("anshika")
console.log(newlen);
console.log(myarr);


foreach
shift
unshift
sort
tostring
push
pop



// string method in js
// indexOf bata ha konse index se start ho rha ha 
// lastIndexOf bata h lasst index se khatam hua ha 
// replace method sirf firdt occuranace ko hi replace karta ha
 
let mystring="anshika is a good  good girl";
console.log(mystring);
console.log(mystring.length);
console.log(mystring.indexOf("good"));
console.log(mystring.lastIndexOf("good"));
//slice(starting index, ending index)
console.log(mystring.slice(0,9));
d = mystring.replace("anshika","khushi")
console.log(mystring.replace("anshika","khushi"));
console.log(d)

//date
//new keyword new date bannane ke liye krte ha 

let mydate = new Date();
console.log(mydate)
z=mydate.getDate();
console.log(z)
x=mydate.getTime();
console.log(x)
w=mydate.getHours();
console.log(w)
console.log(mydate.getDate());
console.log(mydate.getTime());
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());

//document 
//console pe document likhe ke dekho 
//document.location likhe ke dekho 
// html page ko acces karne ke liya doc ka use kar ke manupilation kar skte h 
//DOCUMENT OBJECT MODEL

//html ko dynamic access kar sakte ha mtlb ki tm inspect pe jake tm change kar sakte ho 
//document.getElementById eshki help se changes kar sakte ha html mai dyanmically

//same naam ki class ho sakti hai par id nhi mtlb 
// ekjaha class = one ha to tm dushri jagah bhi class = one likhe sakte ho 
//par same cheez tm id ke sath nnhi kar sakte 