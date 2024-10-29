// 1
function power(a, b) {
    return Math.pow(a, b);
}
// 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
// 3
function triangleArea(a, b, c) {
    const S = (a + b + c) / 2;
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
// 4
function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function calculatePercentage(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    return (totalMarks / (marks.length * 100)) * 100; // Assuming each subject is out of 100
}

function mainFunction(marks) {
    const average = calculateAverage(marks);
    const percentage = calculatePercentage(marks);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

// Exa:
const marks = [85, 90, 78]; // Example marks
mainFunction(marks);
// 5
function customIndexOf(string, character) {
    for (let index = 0; index < string.length; index++) {
        if (string[index] === character) {
            return index;
        }
    }
    return -1; // Return -1 if the character is not found
}

// Example usage:
console.log(customIndexOf("hello", "e")); // Output: 1
console.log(customIndexOf("hello", "a")); // Output: -1
// 6
function removeVowels(sentence) {
    var vowels = 'aeiouAEIOU'; // String containing all vowels
    var result = ''; // Initialize an empty string to store the result

    // Loop through each character in the sentence
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];
        // Check if the character is not a vowel
        if (vowels.indexOf(char) === -1) { // Using indexOf to check for vowels
            result += char; //  the result if it's not a vowel
        }
    }

    return result; // Return the result without vowels
}

// Example usage:
var sentence = "This is an example sentence.";
var result = removeVowels(sentence);
console.log(result); // Output: "Ths s n xmpl sntnc."

// Example usage:
var sentence = "This is an example sentence.";
var  result = removeVowels(sentence);
console.log(result); // Output: 

// 7
function countDoubleVowels(text) {
    var count = 0;
    var vowels = 'aeiouAEIOU';

    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text[i];
        var nextChar = text[i + 1];

        switch (true) {
            case vowels.indexOf(currentChar) !== -1 && vowels.indexOf(nextChar) !== -1:
                count++;
                break;
            default:
                break;
        }
    }
    return count;
}

// Example usage:
var sentence = "Pleases read this application and give me gratuity";
var doubleVowelCount = countDoubleVowels(sentence);
console.log(doubleVowelCount); // Output: 3 (for "ea", "ea", "ui")
// 8
function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}

function convertToInches(km) {
    return km * 39370.1;
}

function convertToCentimeters(km) {
    return km * 100000;
}

// Example usage:
var distanceInKm = 5; // Input distance in kilometers
console.log("Meters: " + convertToMeters(distanceInKm));
console.log("Feet: " + convertToFeet(distanceInKm));
console.log("Inches: " + convertToInches(distanceInKm));
console.log("Centimeters: " + convertToCentimeters(distanceInKm));
// 9
function calculateOvertimePay(hoursWorked) {
    var overtimeRate = 12.00;
    var regularHours = 40;
    
    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    } else {
        return 0; // No overtime pay
    }
}

// Example usage:
var hours = 45; // Input hours worked
var overtimePay = calculateOvertimePay(hours);
console.log("Overtime Pay: Rs. " + overtimePay);
// 10
function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount / 100);
    var remainingAmount = amount % 100;

    var notes50 = Math.floor(remainingAmount / 50);
    remainingAmount %= 50;

    var notes10 = Math.floor(remainingAmount / 10);

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}

// Example usage:
var amountToWithdraw = 560; // Input amount in hundreds
var notes = calculateCurrencyNotes(amountToWithdraw);
console.log("Notes of 100: " + notes.notes100);
console.log("Notes of 50: " + notes.notes50);
console.log("Notes of 10: " + notes.notes10);