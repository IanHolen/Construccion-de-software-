//Exercise 1
function firstchar(){
    const string = "abacddbec"; // String find the first non-repeated character
    for(let i = 0; i < string.length; i++){
        // The condicion check if the character is not repeated by spliting the string 
        //and checking the length of the array that comes from the split
        if((string.split(string[i]).length - 1) == 1){
            console.log(string[i]); // Print the first non-repeated character
            break; 
        }

    }


}

//Exercise 2
function bubbleSort(){
    list = [2, 5, 1, 3, 4];
    for (let i = 0; i < list.length; i++){
        for (let j = 0; j < list.length; j++){
            if (list[i] < list[j]){ // If the element is less than the next element, swap them
                const aux = list[i]; // Auxiliar variable to swap the elements
                list[i] = list[j];// Swap the elements
                list[j] = aux; // Swap the elements
            }
        }
        
    }
    console.log(list);

}
//Exercise 3
function reverseString(){
    string = "Luffy"; // String to reverse
    let reverse = ""; // String to store the reversed string
    // For loop to iterate the string from the end to the beginning
    for (let i = string.length - 1; i >= 0; i--){
        reverse += string[i];// Add the character to the reversed string
    }
    console.log(reverse);
}

// Exercise 4
function capitalizeFIrsteLetter(){
    const string = "mugiwara no luffy"; // String to capitalize the first letter
    let newString = ""; // String to store the new string
    // For loop to iterate the string
    for (let i = 0; i < string.length; i++){
        if (i == 0){
            newString += string[i].toUpperCase(); // Capitalize the first letter
        }
        else if (string[i-1] == " "){
            newString += string[i].toUpperCase(); // Capitalize the first letter after a space
        }
        else{
            newString += string[i]; // Add none capitalized letters
        }
    }
    console.log(newString);
}


//Exercise 5
function findMaxComDiv(){
    const number1 = 12; 
    const number2 = 24;
    let maxComDiv = 0; 
    // If the second number is greater than the first number, the smaller number is the first number
    if (number2 > number1){
        for (let i = 1; i <= number1; i++){
            if ((number1 % i == 0 && number2 % i == 0)){
                maxComDiv = i; // The smaller number is the max common divisor
            }
        }
    }
    // If the first number is greater than the second number, the smaller number is the second number
    else{
        for (let i = 1; i <= number2; i++){
            if ((number1 % i == 0 && number2 % i == 0)&& i <= number1 && i <= number2){
                maxComDiv = i;// The smaller number is the max common divisor
            }
        }
        
    }

    console.log(maxComDiv);
}
//Exercise 6
function cipherHackerSpeak(){
    keys = {"a": "4", "e": "3", "i": "1", "o": "0", "s": "5"}; // Change dictionary
    const string = "My name is Luffy";// String to change
    let newString = ""; // String to store the new string
    for (let i = 0; i < string.length; i++){
        if (keys[string[i]]){// If the character is in the dictionary, change it
            newString += keys[string[i]];// Add the new character to the new string
        }
        else{ // If the character is not in the dictionary, add it to the new string
            newString += string[i];
        }
    }
    console.log(newString);
}


//Exercise 7
function findFactors(){
    const number = 10
    let factors = [];
    // For loop from 0 to the number
    for (let i = 1; i <= number; i++){
        if (number % i == 0){
            factors.push(i); // If the remainder is 0, it is a factor
        }
    }
    console.log(factors);
}

//Exercise 8
function clearDuplicates()
{
    const array = [0, 1, 0, 1, 1, 1, 0, 1];
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        flag = true;
        for (let j = 0; j < newArray.length; j++){
            if (array[i] == newArray[j]){
                flag = false; // If the element is already in the new array, do not add it
                break;
            }
        }
        if (flag){
            newArray.push(array[i]);
        }
        
    }
    console.log(newArray);
}

//Exercise 9
function findSmallestString()
{
    const array = ["Luffy", "Zoro", "Nami", "Sanji", "Usopp", "Chopper", "Robin", "Franky", "Brook"];
    let smallest = "";
    // For loop to iterate the array
    for (let i = 0; i < array.length; i++){
        // Condition that check if the length of the string is smaller than the smallest string atm
        if (array[i].length < smallest.length || smallest == ""){

            smallest = array[i];
        }
    }
    console.log(smallest);
}

//Exercise 10
function palindrome(){
    let string = 'smoms';
    let palindrome = true;
    for (let i =0; i< string.length; i++){
        if (string[i] != string[string.length -1 -i]){
            palindrome = false; // If the character is not the same as the character in the opposite position set flag to false
        }
    }
    // Print if the string is palindrome or not
    if (palindrome){
        console.log("Es palindrome");
    }
    else{
        console.log("No es palindrome");
    }
}


//Exercise 11
function orderStringArrayByAlphabet(){
    array = ["Luffy", "zoro", "nami", "Sanji", "Usopp", "chopper", "Robin", "Franky", "Brook"];
    array2 = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array2.length; j++){

            if (array[i].toUpperCase() < array2[j].toUpperCase()){
                array2.splice(j, 0, array[i]); // if the string is smaller than the string in the array, add it before that string
                break;            
            }
            else if (j == array2.length - 1){
                array2.push(array[i]); // If the string is the biggest, add it to the end of the array
                break;
            }
        }
        if (i == 0){
            array2.push(array[i]); // If the array is empty, add the first string
        }
        
    }
    console.log(array2);
}
// Exercise 12

function median(array){
    if (array.length % 2 == 0){
        median = (array[array.length/2 - 1] + array[array.length/2])/2; // If the length of the array is even, the median is the average of the two middle numbers
    }
    else{
        median = array[parseInt(array.length/2)]; // If the length of the array is odd, the median is the middle number   
    }
    return median;

}

function mode(array){
    let mode = 0;
    let modaCount = 0;
    for(let i = 0; i<array.length; i++){
        let count = 0;
        for(let j = 0; j<array.length; j++){// Count the number of times the number appears in the array
            if(array[i] == array[j]){
                count++;// If the number appears, add 1 to count
            }
        }
        if(count > modaCount){
            modaCount = count;// If the number appears more times than the previous number, change count to current
            mode = array[i];// If the number appears more times than the previous number, change mode to current number
        }

    }
    return mode;
}
function medianaModa(){
    const list = [1,2,3,8,6,7,8,9,9,10,9,10];


    list.sort((a, b) => a - b); // Sort the array on ascending order

    console.log("The Median is ", median(list));// Print the median
    console.log("The Mode is ", mode(list)); // Print the mode
}

//Exercise 13
function getMoreFrecuentString(){
    array = ["Luffy", "Kaido", "Luffy", "Big Mom", "Luffy", "Shanks", "Kaido"]
    console.log("The most frecuent string is", mode(array)); // Print the Frencuent string

}


//Ejercicio 14
function checkifpower2()
{
    
    acum = 2;
    num = 129;
    // While loop to check if the number is a power of 2, until the iteration number is bigger than the number.
    while (true)
    {
        if (acum == num)
        {
            console.log("Es potencia de 2");// If the number is a power of 2, print it
            break;
        }
        else if (acum > num)
        {
            console.log("No es potencia de 2");// If the number is bigger than the number, print is not a power of 2
            break;
        }
        acum = acum * 2;// Multiply the iteration number by 2
    }
}
//Ejercicio 15
function orderBackwards()
{
    const array = [1,2,3,4,5,6,7,6,9,8,25];
    const newArray = [];
    
    for (let i = 0; i < array.length; i++)
    {
        for (let j = 0; j < newArray.length; j++)// For loop so the number is added in the correct position
        {
            if (array[i] > newArray[j])
            {
                newArray.splice(j, 0, array[i]);// If the number is bigger than the number in the array, add it before that number
                break;
            }
            else if (j == newArray.length - 1)
            {
                newArray.push(array[i]);// If the number is the smallest, add it to the end of the array
                break;
            }
        }
        if (i == 0)
        {
            newArray.push(array[i]); // If the array is empty, add the first number
        }
    }
    console.log(newArray);

}
console.log("Ejercicio 1")
firstchar();
console.log("Ejercicio 2")
bubbleSort();
console.log("Ejercicio 3")
reverseString();
console.log("Ejercicio 4")
capitalizeFIrsteLetter();
console.log("Ejercicio 5")
findMaxComDiv();
console.log("Ejercicio 6")
cipherHackerSpeak();
console.log("Ejercicio 7")
findFactors();
console.log("Ejercicio 8")
clearDuplicates();
console.log("Ejercicio 9")
findSmallestString();
console.log("Ejercicio 10")
palindrome();
console.log("Ejercicio 11")
orderStringArrayByAlphabet();
console.log("Ejercicio 12")
medianaModa();
console.log("Ejercicio 13")
getMoreFrecuentString();
console.log("Ejercicio 14")
checkifpower2();
console.log("Ejercicio 15")
orderBackwards();