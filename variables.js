// var 123name = "Bipsa";
// var name@email = "abc@gmail.com";
//letter, _ ,$

 
//string
// var college = "LCC";
// console.log(college);
// console.log(typeof(college));



//boolean 
// var isStudent = true;
// console.log(typeof(isStudent));

//null
//output- object
// var tax= null;
// console.log(typeof(tax));


//undefined
// var tax= undefined;
// console.log(typeof(tax));


//typecasting
// let a=10;
// let b = "20";
// console.log(a-b);
// console.log(a+b);  //if + agadi ya paxadi string vyepr string mai jnxa
// console.log(a*b);


//programmer le change (explicit)
// var a= "10.233";  //string
// console.log(typeof(a));
// var b = Number(a)
// var b = parseInt(a)
// var b = parseFloat(a)
// console.log(b)
// console.log(typeof(b));



// var str="abc"
// var num= parseInt(str)
// console.log(num)
// var day = "monday ";

// switch(day){
//     case "monday ":
//     console.log (" today is sunday");
//     break;
//     case "sunday ":
//     console.log ("today is monday";
//         break;
//     )
// }
// var areaofshape ="square";
// switch(areaofshape){
//     case "square":
//     console.log("the shape is square");
//     let a=4;
//     console.log ( "the area is ");
//     console.log ( a*a);
//     break;
// case "circle":
// console.log("the shape is circle ");
// let b=5;
// console.log ("area is:",(3.14*b*b))
// break;
// case "rectangle":
// console.log ("the shape is rectangle");
// let c= 4 ,d=3;
// console.log ("area is : " ,(c*d));
// break;
// default:
// console.log ("sorry the shape is not available ");


// }
// lets create table of 5
// var a= 5;
// var i= 0;
// while ( i<=10){
// console.log( a,"*",i,"=",a*i);
// i++;
// }


// user input
// const prompt = require("prompt-sync")();
// var a= 10
// var b= prompt("enter your name: ")

// Guess the number 
// please enter 1 to 100
// step 1 sn = 50
// while in
//prompt 
//prompt == sn break
//prompt > msg your guess is high
//propmt > msg your guess is low
//
 const prompt = require("prompt-sync")({sigint : true});
// // 
// var a=5;
// var i;
// for (var i = 1; i<=10; i++){
//     console.log(a,"*",i,"=",a*i);
// }
//WAP to print 10 to 20
// const prompt = require("prompt-sync")({sigint : true});
// let n= parseInt (prompt ("enter a number"))
// for (let i=0 ;i>-10;i++){
//     console.log(i);
// }
//print even numbers to 10
// var n;
// for (n=0;n<=10;n++){
//     if(n%2==0)
//         console.log (n, "is even")
// }
//sum of even numbers
// var sum=0;
// for ( var i=0;i<=5;i++){
//     if ( i%2==0){
// sum = sum + i;
//     }}
// console.log(sum);

//string 
//check if character is vowel
// let place ="butwal";

// for ( let i of place ){
//     if ( i == "a"|| i =="e"){
//         console.log ( "vowel");
//     }
// }


//count words in string 
// let place  ="js is very hard";
// var c=0
// for (let i of place ){
//     c++;
// }
// console.log(c);

// let college = "Lumbini";
// var new_college = "";
// // output Lumbini
// for ( let i of college ){
//     if (i=="l"){
//         new_college = new_college + "L"
//     }
//     else {
//         new_college = new_college +i;
//     }
// }
// console.log(new_college);


// var lines = "js is very hard"
// var nolines=" ";
// //output jsisveryhard
//  var new_line= " ";
//  for ( let i of lines){
//     if ( i== " "){
//  }
//  else {
//     nolines = nolines + i
// }}
// console.log (nolines);


//reverse of string 
// var str ="bipsa";
// var reverse_str = ""
// for (let i of str){
//    reverse_str = i + reverse_str
// }
// console.log (reverse_str);

//count
// var str1 = "apple anta"
// var c = 0;
// for(let i of str1){
//     if(i== "a"){
//         c++ ;
//     }}
//     console.log(c);

// function fun (){

// }
// var math =45
// var science=40
// var sum = math + science;
// console.log(sum);

///WAP to greet user with his or her name pass name as parameter to the function
// function greet (name){
//    console.log ("Hi!",name,"How u doing?")
// }
// greet ("Bipsa")
// greet("Joey")


//WAP for a shop product(prince,quantity)
// function shop(price,quantity){
//    console.log(price * quantity)
// }
// shop(100,2)
// shop(300,4)

//
// function reverse_str (name){
//    var reverse=""
//    for(let i of string){
//       reverse= i+ reverse
//    }
// console.log(reverse);
// }
// reverse_str("Bipsa")

//palindromee
// function rev (string){
//    var reverse =""
//    for (let i of string ){
//       reverse = i+ reverse
   
//    }
//    if (reverse ==string ){
//       console.log(reverse,"palindrome")
//    }else{
//       console.log("not palindrome")
//    }
//    }
//    rev ("hahaha")
//    rev("lol")


//return...value return function name
//terminate

// function add(a,b){
//    return a + b

// }
// x =add(4,7)
// console.log(add(4,7));


//calculator
function addition(a,b){
   return a+b
}

function subtraction(a,b){
   return a-b
}

function multiplication(a,b){
   return a*b
}

function division(a,b){
   return a/b
}
while(true){
   console.log("1.Add 2.Sub 3.Multi 4.Div 5.exit")
   userInput = parseInt(prompt("Enter your choice"))

   let num1 = parseInt(prompt("num1"))
   let num2 = parseInt(prompt("num2"))
   
   if (usernameInput===1){
      console.log(addition(num1,num2));
   }
   else if (usernameInput===2){
      console.log(subtraction(num1,num2));
} else if
(usernameInput===3){
      console.log(multiplication(5,10));
}else if 
(usernameInput===4){
      console.log(division(5,10));
} else if 
(userInput==5){
console.log("Thank you for visisting my app");
break;

}
}
