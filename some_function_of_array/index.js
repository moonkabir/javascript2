//array er element gula ke ultano
var myString="the quick brwn fox";
var dividedStringArray=myString.split("");
var reversedStringArray=dividedStringArray.reverse();
var myNewString=reversedStringArray.join("");
console.log(myNewString);
//sort korar array
var l=[10,1,22,500,80,210,101,30];
var sorted=l.sort((a,b)=>{
    return a-b;
});
console.log(sorted);
//duita array jog kora o katar array
myArray=[1,2,3,4,5];
myArray2=[6,7,8,9,10];
var newArray2=myArray.concat(myArray2);
var newArray=myArray.slice(2,3);
console.log(newArray);
console.log(newArray2);
//even odd ber korar function
var oddNumber=function(num){
    var vagshes=num%2;
    if(vagshes===0)return false;
    return true;
};
var oddArray=myArray.filter(oddNumber);
console.log(oddArray);
//delete o add korar fiunction
myArray.splice(1,2,"alu","potol");
console.log(myArray);