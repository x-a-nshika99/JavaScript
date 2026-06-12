//  events in js 
//  jab eshpe click aru to yeh ho jaye 


 //clicked button function ko run karwane ke liye phele tmko html pe button 
// ke tag mai jake onclick use kkarke apne function ko call kar dena 
 // <button id="click" onclick="clicked()">click me</button>
 //like this'
 
   document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked </b>"
 //esse ham jab cick karenge to output mai likh ke a jayega apne click kiya ha 


 function clicked(){
    document.querySelectorAll('.container')[1].innerHTML= "<b> we have clicked </b>"
    console.log('the buttton was clicked')
 }

// yaha pe kya hua joh phele jaisa tha click ek bar karneke bad again click 
// karne pe phele jaise ho gya 

 let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
first.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log(' mouse  UP')
})



 //yeh batata ha tmhra document load ho gya ha ki nhi hua ha 
 window.onload = function(){
    console.log('the document was loaded')
 }

//button click hoke load hua to bhi batayega 
first.addEventListener('click',function(){
    console.log('clicked hua')
})

//container pe jitni bar mouse leke jaoge to likh ke ayega 
first.addEventListener('mouseover',function(){
    console.log(' mouse  in')
})


//mouse container se bahar le gye to yeh bhi bateyega 
first.addEventListener('mouseout',function(){
    console.log(' mouse out')
})

//click kiya mouse se to bhi bateyega 
first.addEventListener('mouseup',function(){
    console.log(' mouse clicked')
})

//mouse dabaya aur choda to bhi bateyga 
first.addEventListener('mousedown',function(){
    console.log(' mouse down hua ')
})




