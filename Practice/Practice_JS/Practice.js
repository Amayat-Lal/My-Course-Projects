// function performOperation(secondInteger, secondDecimal, secondString) {
//     // Declare a variable named 'firstInteger' and initialize with integer value 4.
//     const firstInteger = 4;
//     console.log(parseInt(firstInteger + secondInteger))
// };

// performOperation(5);

// javascriptloops

// function vowelsAndConsonants(s) {
//     const vowels = 'aeiou';
//     for (let char of s) {
//         if (vowels.includes(char.toLowerCase())) {
//             console.log(char);
//         }
//     }
//     for (let char of s) {
//         if (!vowels.includes(char.toLowerCase())) {
//             console.log(char);
//         }
//     }
// };




// ctrl + shift + `` => to open terminal
// function reverseString(S) {
//     try {
//         // Try to reverse the string S using split, reverse, and join methods
//         let reversedString = S.split('').reverse().join('');
        
//         // Print the reversed string if no exception is thrown
//         console.log(reversedString);
//     } catch (error) {
//         // If an exception is thrown, print the error message and the original string
//         console.log(error.message);
//         console.log(S);
//     }
// }


function isPositive(a) {
    try {
        if (a > 0) {
            return "Yes"
        }
    } catch (error) {
        if (a === 0) {
            console.log("Zero Error", error)  
        } else {  
            console.log("Negative Error", error); 
        }
    }
}

function isPositive(a) {
    try {
        if (a > 0) {
            return "Yes";
        } else if (a === 0) {
            throw new Error("Zero Error");
        } else {
            throw new Error("Negative Error");
        }
    } catch (error) {
        console.log(error.message);
    }
}
