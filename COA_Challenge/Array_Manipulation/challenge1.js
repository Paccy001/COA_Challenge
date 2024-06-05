function checkArraySum(arr, target) {
    // Dictionary to store the cumulative sum and its occurrence
    let sumMap = new Map([[0, 1]]);
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;
        
        // Check if there is a subarray that sums up to the target
        if (sumMap.has(currentSum - target)) {
            return true;
        }
        
        // Update the map with the current cumulative sum
        if (sumMap.has(currentSum)) {
            sumMap.set(currentSum, sumMap.get(currentSum) + 1);
        } else {
            sumMap.set(currentSum, 1);
        }
    }
    
    return false;
}

function getUserInput() {
    // Prompt the user to enter the array length
    let length = parseInt(prompt("Enter the length of the array: "));
    
    // Prompt the user to enter the target sum
    let target = parseInt(prompt("Enter the target sum: "));
    
    // Initialize an empty array
    let arr = [];

    // Prompt the user to enter each element of the array
    for (let i = 0; i < length; i++) {
        let element = parseInt(prompt(`Enter element ${i + 1}: `));
        if (isNaN(element)) {
            alert("Invalid element. Please enter an integer.");
            return;
        }
        arr.push(element);
    }

    // Check if any element or subarray sum equals the target
    let result = checkArraySum(arr, target);
    alert(`The array contains an element or subarray that sums up to ${target}: ${result}`);
}

// Call the function to get user input and check the array
getUserInput();