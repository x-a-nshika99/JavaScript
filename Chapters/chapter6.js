//conditinal operations 

var age=20;
if(age>18){
    console.log("you can vote");
}
else{
    console.log("you can not vote");
}








if (age>2){
    console.log("you can not drink")
}
else{
    console.log("you can drink")
}

//if else ladder

if (age>20){
    console.log("you are not kid")
}
else if (age>2){
    console.log("you are kid")
}
else if (age>40){
    console.log("you are not young")
}
else {
    console.log("you are young")
}

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

