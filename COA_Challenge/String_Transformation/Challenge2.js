function transformString(s) {
    let length = s.length;
    
    if (length % 3 === 0 && length % 5 === 0) {
        // Length is divisible by 15: perform both operations in order
        s = s.split('').reverse().join(''); // Reverse the string
        s = s.split('').map(char => char.charCodeAt(0)).join(' '); // Replace each character with its ASCII code
    } else if (length % 5 === 0) {
        // Length is divisible by 5: replace each character with its ASCII code
        s = s.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Length is divisible by 3: reverse the string
        s = s.split('').reverse().join('');
    }
    
    return s;
}

const n = prompt("Enter the string to be checked:");
const result = transformString(n);

console.log("After checking the length of the string, the result is:", result);