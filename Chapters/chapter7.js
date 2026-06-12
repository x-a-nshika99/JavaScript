//for looping

var arr=[1,2,3,4,5,6,7,8,9,10];

for(i=0;i<arr.length;i++){
    // console.log(arr[i]);
    if(i==2){
        continue;
    }
    else{
        console.log(arr[i]);
    }

}
for(i=0;i<arr.length;i++){
    // console.log(arr[i]);
    if(i==2){
        break;
    }
    else{
        console.log(arr[i]);
    }
}





var arr=[1,2,3,5,4,7,6,8,9]
console.log(arr)
for(var i =0;i<arr.length;i++){
    if(i==2){
        break;
    }
    else if(i==7){
        continue;
    }
    console.log(arr[i])
}


// array ko treat karne ke liya foreach
//  ka use kar sakte yeh bhi output dega joh yeh upar wala
//  for loop de rha ha 


var arr=[1,2,3,5,4,7,6,8,9]

arr.forEach(function(element)
{
    console.log(element)
})

 
 
//for assuming we use let 
//while loop
 
// let j=0;
// const m=0; 
// m++;

var arr=[1,2,3,5,4,7,6,8,9]
let j=1;
while(j<arr.length){
    console.log(arr[j])
    j++;
}

var arr1=[10,20,30,40,50];
let m=0;
console.log(arr1.length)

while(m<arr1.length){
    console.log(arr1[m])
    m++;
}


//  do while loop


do{
    console.log(arr[j])


}while(j<arr.length);
