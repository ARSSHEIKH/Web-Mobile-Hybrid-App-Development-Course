
//Example 1
// var number;
// number =  prompt("Enter any positive number");
// document.write("number: " , number , '<br>');
// document.write("round: " , Math.round(number) , '<br>');
// document.write("floor: " , Math.floor(number) , '<br>');
// document.write("ceil : " , Math.ceil(number) , '<br>');

//Example 2
// var number;
// number =  prompt("Enter any negative number");
// document.write("number: " , number , '<br>');
// document.write("round: " , Math.round(number) , '<br>');
// document.write("floor: " , Math.floor(number) , '<br>');
// document.write("ceil : " , Math.ceil(number) , '<br>');

//Example 3
//  var number = -4;
//  document.write("Absolute : " , Math.abs(number) , '<br>');


//Example 4
//  var random;
//  document.write("random dice value: " ,Math.round(Math.random(random) * 10 ), '<br>');
//  document.write("random dice value: " ,Math.round(Math.random(random) * 10 ), '<br>');


//Example 5.1
//  if we consider 0 and 1 

// function randomCoinValue(){
//     var random;
//     if(Math.random(random) >= 0 && Math.random(random) <= 0.5){
//         random = 1
//         document.write("random dice value: " , random, '<br>');
//     }
//     else if(Math.random(random) > 0.5 && Math.random(random) <= 1){
//         random = 2
//         document.write("random dice value: " , random, '<br>');
//     }
//     else{
//         randomCoinValue();
//     }
// }
// randomCoinValue();

//Example 5.2
// OR if we consider 0 and 1 

// function randomCoinValue(){
//     var random;
//     random = Math.random(random);
//     if(random >= 0 && random <= 0.5){
//         document.write("random dice value: ", Math.floor(random), '<br>');
//     }
//     else if(random > 0.5 && random <= 1){
//         document.write("random dice value: ", Math.floor(random), '<br>');
//     }
//     else{
//         randomCoinValue();
//     }
// }
// randomCoinValue();

//Example 5.3
// or if we consider 1 and 2 
// function randomCoinValue(){
//     var random;
//     random = Math.random(random);
//     if(random >= 0 && random <= 0.5){
//         document.write("random dice value: ", Math.ceil(random), '<br>');
//     }
//     else if(random > 0.5 && random <= 1){
//         random++;
//         document.write("random dice value: ", Math.ceil(random), '<br>');
//     }
//     else{
//         randomCoinValue();
//     }
// }
// randomCoinValue();


//Example 6
// function randomCoinValue(){
//     var random;

//     random = Math.round(Math.random(random)*10);
//     if(random >= 1 && random <= 100 ){
//         document.write("random dice value: ", random, '<br>');
//     }
//     else{
//         randomCoinValue();
//     }
    
// }
// randomCoinValue();


//Example 7
    // var number =  parseInt(prompt("Enter your weight"));
    // var random;
    // random = ((Math.random(random)*10)+number).toFixed(1);       
    // document.write("The weight of user: ", random, '<br>');
    
//Example 8
    // function SecretNumber(){
    //     var number =  parseInt(prompt("Enter a secret number"));
    //     var random;
    //     random = (Math.random(random)*10).toFixed(0);   

    //     if(number == random){
    //         document.write("Congratulation", '<br>');
    //         document.write("Secret Number is ", random, '<br>');
    //     }
    //     else{
    //         alert("Sorry! Try again", '<br>');
    //         SecretNumber();
    //     }
    // }
    // SecretNumber();
    

