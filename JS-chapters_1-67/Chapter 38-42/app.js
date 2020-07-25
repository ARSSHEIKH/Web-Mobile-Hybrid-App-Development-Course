
// Example 1
// var a = 2,  b = 3;
// document.write(Math.pow(a, b))

// // Example 2
// var year = parseInt(prompt("Enter any Year: "));

// switch(year % 4)
// {
//     case 0:
//         document.write("The year is a Leap year")
//         break;
//     default:
//         document.write("The year is not a Leap year")
// }

// // Example 3
// function calculate_S(a, b, c){
//     return (a+b+c)/2
// }
// function area_Trianagle(S, a, b, c){
//     var area = S * (S - a)*(S - b)*(S - c)
//     return area;
// }
// let S = calculate_S(2, 3, 4);
// document.write("Area of Trianagle: ", area_Trianagle(S, 2, 3, 4));

// // Example 4
// function mainFunction(){
//     var sub1, sub2, sub3;
//     sub1 = 50, sub2 = 75, sub3 = 87;
//     document.write("The Percentage is: ", percentage(average(sub1, sub2, sub3)));
    
//     function average(sub1_in, sub2_in, sub3_in){
//         return sub1_in + sub2_in +sub3_in;
//     }
//     function percentage(avg){
//       return ((avg*100)/300).toFixed(2);
//     }
// }
// mainFunction()

// // Example 5
// function index_of(str, letter){
//     let arr = str.split("", str.length);
//     let ind=0;
//     let found = false
//     while(ind<arr.length){
//         if(letter == arr[ind]){
//             found=true;
//             return ind;
//         }
//         ind++;
//     }
//     if(found == false){
//         return "sorry, you entered an invalid character"
//     }
// }
// var obj1 = {str: prompt("Enter any string: ")};
// var indof = prompt(`Enter index of any character of ${obj1.str}`);
// document.write("Index of ", indof, " is :", index_of(obj1.str, indof));











