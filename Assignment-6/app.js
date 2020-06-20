
// Chapter 21
// Task1:
/*
    var firstname = prompt("Enter your first name: ");
    var lastname = prompt("Enter your last name: ");
    var fullName = firstname + " "+ lastname;

    document.write("hello " , fullName);
*/

// Task2:
/*
    var mobileInfo = prompt("Enter your favorite mobile name and model (like: Samasung J7): ");

    document.write("My favorite mobile phone is " , mobileInfo , '<br>');
    document.write("Length of string is " , mobileInfo.length);

*/


// Task3:
/*
    var str = "Pakistani";
    document.write("string " , str , '<br>');
    document.write("Index of " , str.indexOf('n') , '<br>');
    
*/

// Task4:
/*
    var str = "Hello World";
    document.write("string " , str , '<br>');
    document.write("Last Index of " , str.lastIndexOf('l') , '<br>');
*/
// Task5:
/*
    var str = "Pakistani";
    document.write("string " , str , '<br>');
  //or  document.write("character at index 3: " , str.charAt(3), '<br>');
    document.write("character at index 3: " , str.slice(3,4), '<br>');
*/

// Task6:
/*
    var firstname = prompt("Enter your first name: ");
    var lastname = prompt("Enter your last name: ");
    var fullName = firstname.concat(" ", lastname)

    document.write("hello " , fullName);
*/

//Task7:
/*
    var city = "Hyderabad";

    document.write("City: " , city, '<br>');
    document.write("After Replacement " , city.replace("Hyder", "Islam"));
*/
//Task8:
/*
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    document.write("The message was: " , message, '<br>');
    document.write("After Replacement " , message.replace(/and/g, "&"));
*/

//Task9:
/*
    var value = "472";
    document.write("value: " , value, '<br>');
    document.write("type: " , typeof(value), '<br>');
    
    value = parseInt(value);
    document.write("value: " , value, '<br>');
    document.write("type: " , typeof(value), '<br>');
*/

//Task10:
/*
    var input = prompt("Write any thing or a word: ");
    document.write("The input was: " , input, '<br>');
    document.write("After Replacement " , input.toUpperCase());
*/
//Task11:
/*
var input = prompt("Write any thing or a word: ");

input = input.toLowerCase()
var getChar = input.charAt(0);
var UppCaseChar = getChar;
UppCaseChar = UppCaseChar.toUpperCase();


document.write("user input : " , input, '<br>');
document.write("After Replacement " , input.replace(getChar, UppCaseChar));
*/

//tASK12:
/*
    var num = 35.36 ;
    document.write("Number Was : " , num, '<br>');
    document.write("result : " , num.toString().replace('.', ''), '<br>');
*/


//Task13:
/*
    var checker;
    var username;
    username = UsernameChecker();

    while(true)
    {
        if(checker == true){
            document.write("Welcome ", username, '<br>');
            break;
        }
        else{
            username = UsernameChecker();
        }
    }
    function UsernameChecker()
    {
        var username = prompt("Enter your name: ");
        for(var i = 0; i < username.length; i++)
        {
            if((username.charCodeAt(i) >= 31 && username.charCodeAt(i) < 65) || (username.charCodeAt(i) >= 91 && username.charCodeAt(i) < 97) || (username.charCodeAt(i) >= 123 && username.charCodeAt(i) < 128))
            {
                checker = false;
                alert("Invalid Username! Please enter a valid");

            }
            else{
                checker=true;
            }
        }
        if(checker == true){
            return username;
        }
    }
*/