// Example 1

// var date = new Date();
// document.write(date, '<br>')


// Example 2

// var date = new Date();
// var month = date.getMonth()
// document.write("Current month: ", month, '<br>')
// if(month == 1){
//     document.write("Current month: ", "January")
// }
// else if(month == 2){
//     document.write("Current month: ", "Feburary")
// }
// else if(month == 3){
//     document.write("Current month: ", "March")
// }
// else if(month == 4){
//     document.write("Current month: ", "April")
// }
// else if(month == 5){
//     document.write("Current month: ", "May")
// }
// else if(month == 6){
//     document.write("Current month: ", "June")
// }
// else if(month == 7){
//     document.write("Current month: ", "July")
// }
// else if(month == 8){
//     document.write("Current month: ", "August")
// }
// else if(month == 9){
//     document.write("Current month: ", "September")
// }
// else if(month == 10){
//     document.write("Current month: ", "Octuber")
// }
// else if(month == 11){
//     document.write("Current month: ", "November")
// }
// else if(month == 12){
//     document.write("Current month: ", "December")
// }


// Example 3

// var date = new Date();
// var day = date.getDay()
// //document.write("Current month: ", day, '<br>')
// if(day == 1){
//     alert("Today is Monday")
// }
// else if(day == 2){
//     alert("Today is Tuesday")
// }
// else if(day == 3){
//     alert("Today is Wednesday")
// }
// else if(day == 4){
//     alert("Today is Thursday")
// }
// else if(day == 5){
//     alert("Today is Friday")
// }
// else if(day == 6){
//     alert("Today is Saturday")
// }
// else if(day == 7){
//     alert("Today is Sunday")
// }

// Example 4

// var date = new Date();
// var day = date.getDay()
// //document.write("Current month: ", day, '<br>')
// if(day == 1){
//     alert("Today is Monday")
// }
// else if(day == 2){
//     alert("Today is Tuesday")
// }
// else if(day == 3){
//     alert("Today is Wednesday")
// }
// else if(day == 4){
//     alert("Today is Thursday")
// }
// else if(day == 5){
//     alert("Today is Friday")
// }
// else if(day == 6){
//     alert("Today is Saturday")
//     alert("Its Fun day")
// }
// else if(day == 7){
//     alert("Today is Sunday")
//     alert("Its Fun day")
// }

// Example 5
// var date = new Date();
// var month = date.getDate()
// //document.write("Current month: ", day, '<br>')
// if(month <= 15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// Example 6
// var currentdate = new Date().setFullYear(2020,6,24,5);
// document.write("Current Date: ", currentdate, '<br>');
// var oldDate = new Date().setFullYear(1970, 1, 1)
// // = currentDate.setFullYear(1970, 1, 1);

// document.write("Elapsed miliseconds since Jan. 1, 1970: ", oldDate, '<br>');
// var diffboth_Minutes = new Date().setMinutes((currentdate-oldDate)/60000)
// document.write("Elapsed minutes since Jan. 1, 1970: ", diffboth_Minutes);

// Example 7
// var currentdate = new Date();
// document.write("Current Date: ", currentdate.getHours(), '<br>');

// if(currentdate.getHours() >= 0 && currentdate.getHours() < 12){
//     alert("Its AM")
// }
// else if(currentdate.getHours() >= 12 && currentdate.getHours() < 24){
//     alert("Its PM")
// }

// Example 8
// var laterDate = new Date(2020, 11, 31, 23, 59, 59);
// document.write("Latter Date: ", laterDate, '<br>');

// Example 9
// var thisRamadan = new Date().setFullYear(2020,5,24);
// var pastRamadan = new Date().setFullYear(2015, 5, 18)

// var thisRamadanDays = thisRamadan/86400000;
// var pastRamadanDays = pastRamadan/86400000;
// var totalDays = thisRamadanDays-pastRamadanDays;

// document.write(totalDays, ' days have passed since 1st ramadan, 2015 ');








