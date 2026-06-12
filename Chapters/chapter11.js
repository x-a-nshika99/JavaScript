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