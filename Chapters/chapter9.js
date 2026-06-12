// //DOM manipulation

//document object model

//window hota hai ek eshke andar share document hote hai

//window.document.agar tm kuch bhi likhoge to wo document mai jayega

// eshko agar console se dekhna haia to 
// console.dir(window.document) likhna padhta hai

// console.log("hello); yeh print karne ke liya hota ha
// //console.dir(document) yeh document or property ko access karne ke liya hota ha"



document.getElementById("click").style.border="2px solid red"
document.getElementsByClassName("container")[0].style.background="yellow"
document.getElementsByClassName("container")[1].style.background="red"
document.getElementsByClassName("container")[0].style.border="2px solid red"

// // document.getElementById   getbi likhoge to ye ayega 
// // document.getElementsByClassName getc likhoge to ye ayega 

document.getElementsByTagName("h1")[0].style.background="green"


document.body.style.background="lightblue"
 



let elem = document.getElementById('click');
console.log(elem)

let elemclass = document.getElementsByClassName('container')
console.log(elemclass)

//itna samjho tm beena ccs html ko touch kiya rtm yaha se changes kar sakte ho 

elemclass[0].classList.add("bg-primary")
elemclass[0].classList.add("text-success")
elemclass[0].classList.remove("bg-primary")

//esse tm html ke tags ko console mai dekh sakte sath hi tm output bhi dekh 
//sakte ho 
console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)

document.getElementById("heading").innerText="hello anshika"
document.getElementById("click").innerText="hello anshika"
document.getElementById("heading").innerHTML="hello anshika"
document.getElementById("click").innerHTML="hello anshika"


//eshe kya hota ha sare button ya div tag tmhre samne a jayege 
//document.getElementsByTagName esse tm sare tag name ko access kar sakte ho 


//ek difference samjho 
//document.getElementById or document.getElementsByClassName
//id ek hi ho sakti ha class same bhi ho sakti hai 
let  m = document.getElementsByTagName("button")
console.log(m)
m[0].style.background="pink"

// tn = document.getElementsByTagName("button")
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "this is element"
// tn[0].appendChild(createdElement)


// createdElement2 = document.createElement('b')
// createdElement2.innerText = "this is element2"
// tn[0].replaceChild(createdElement2,createdElement)

 //document loaction 
 //document title 
 //document url 
 //document script 
 //document link 
 //document images
 //document form 

 //selecting using query
 
 //querySelector sirf ke element  return karega 
 //querySelectorAll pura node list of element return karega 

 sel = document.querySelector('.container')
 console.log(sel)

 selall = document.querySelectorAll('.container')
 console.log(selall)
