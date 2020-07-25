// Example 1
// function CurrentDate(){
//     var date = new Date();
//     document.write(date);
// }
// CurrentDate();

// Example 2
// function PrintName(){
//     var fn = "Arsalan";
//     var ln = "Sheikh";

//     document.write("Welcome ", fn , " ", ln);
// }
// PrintName();

// // Example 3
// function Add(){
//     var num1 = parseInt(prompt("Enter first number to add"));
//     var num2 = parseInt(prompt("Enter second number to add"));

//     return num1+num2
// }
// var result = Add();
// document.write(result);

// // Example 4
// function Calc(num1,num2, op){
//     if(op == '+')
//     {
//         return num1 + num2;
//     }
//     else if(op == '-')
//     {
//         return num1 - num2;
//     }
//     else if(op == '*')
//     {
//         return num1 * num2;
//     }
//     else if(op == '/')
//     {
//         return num1 / num2;
//     }
// }
// var num1 = parseInt(prompt("Enter first number to add"));
// var num2 = parseInt(prompt("Enter second number to add"));
// var op = prompt("Enter an operator for arthematic operations");

// var result = Calc(num1,num2, op);

// document.write(num1, op, num2, "=", result);


// // Example 5
// function Square(){
//     document.write(num1 * num1)
// }
// var num1 = parseInt(prompt("Enter number to squaring"));
// Square(num1);

// // // Example 6
// function Factorial(num1){
//     if(num1<=1){
//         return 1
//     }
//     return num1*Factorial(num1-1);
// }
// var num1 = parseInt(prompt("Enter number to squaring"));
// var result = Factorial(num1);

// document.write(result)


// // Example 7

// function counterFunc(start, end){
//     for(let i = start; i <= end; i++)
//     {
//         document.write(i, "<br>");
//     }
// }
// var start   = parseInt(prompt("Enter first number: "));
// var end     = parseInt(prompt("Enter second number: "));

// counterFunc(start, end);



// // // Example 8
// function calculateHypotenuse(perp_out, base_out){
//     var hypo;
//     function calculateSquare(perp_in, base_in){
//        return ((perp_in*perp_in) + (base_in*base_in))
//     }
//     hypo = calculateSquare(perp_out, base_out);
//     document.write(hypo)
// }
// var perp = parseInt(prompt("Enter perpendicular"));
// var base = parseInt(prompt("Enter base"));

// calculateHypotenuse(perp, base);



// // Example 9
// function area_of_rectangle(width, height){
//     var area = width * height;
//     return area;
// }
// var width = 5
// var height = 2

// area_of_rectangle(width, height);
// document.write("Area of rectangle values: ", area_of_rectangle(10, 5), "<br>")
// document.write("Area of rectangle variables: ", area_of_rectangle(width, height), "<br>")


// // Example 10
// function chekingPalindrome(str1){
//     let ind = 0;
//     let mid1 = parseInt(str.length / 2)
//     let mid2;
//     var chArray = str1;
    
//     if(mid1 != str.length / 2){

//         mid2 = mid1+1
//         while(ind < mid2){
//             if(mid2 == ind){
//                 break;
//             }
//             if(str.charAt(ind) == str.charAt(str.length-(ind+1))){
//                 ind++;
//                 check = true;
//             }
//             else{
//                 document.write("No");
//                 break;
//             }
//             if(mid1 == ind){
//                 if(check == true){
//                     document.write("Yes");
//                 }
//                 break;
//             }       
//             if(mid2 == ind+1){
//                 if(check == true){
//                     document.write("Yes");
//                 }
//                 break;
//             }
//             console.log(str.charAt(str.length-(ind+1)))
//         }
//     }
//     else{
//         while(ind < mid1){
//             if(mid1 == ind){
//                 break;
//             }
//             console.log(str.charAt(ind))
//             if(str.charAt(ind) == str.charAt(str.length-(ind+1))){
//                 ind++;
//                 check = true;
//             }
//             else{
//                 document.write("No");
//                 break;
//             }
//             if(mid1 == ind){
//                 if(check == true){
//                     document.write("Yes");
//                 }
//                 break;
//             }
//             console.log(str.charAt(str.length-(ind+1)))
//         }
//     }
    
// }

// var str = prompt("Enter string (to check Palindrome or not)");
// chekingPalindrome(str)


// // Example 11
// function convertString(str){
//    let converted_str = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//    document.write(converted_str);

// }
// var str = prompt("Enter any string");
// convertString(str);

// // Example 12
// var str = "Web Development Tutorial arsalankhan";
// var arr = [];
// arr = str.split(" ", str.length);

// function findLargestWord(){
//     var found = [];
//     for(let j = 0; j < arr.length; j++)
//     {
//         found[j] = arr[j].length;
//     }
//     found = found.sort(function(a, b){return a-b});

//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i].length == found[found.length-1]){  
//                 document.write(arr[i], ", " )
//         }
//     }
// }

// Example 14 The Geometrizer
// function calcCircumference(r){
//     let circumference;
//     circumference = 2 * Math.PI * r;
//     document.write("The circumference is : ", circumference, '<br>');
// }
// function calcArea(r){
//     let area;
//     area = Math.PI * (r * r);
//     document.write("The circumference is : ", area);
// }

// let radius = 20;
// calcCircumference(radius);
// calcArea(radius);



