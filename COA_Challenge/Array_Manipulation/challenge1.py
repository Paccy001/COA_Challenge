def check_array_sum(arr, target):
    """
    This function checks if there exists a contiguous subarray within the array that sums up to the target.
    It uses a dictionary to store the cumulative sum and its occurrence.
    
    Parameters:
    arr (list): The list of integers.
    target (int): The target sum to find in any contiguous subarray.
    
    Returns:
    bool: True if such a subarray exists, otherwise False.
    """
    # Dictionary to store the cumulative sum and its occurrence
    sum_map = {0: 1}
    current_sum = 0
    
    for num in arr:
        current_sum += num
        
        # Check if there is a subarray that sums up to the target
        if (current_sum - target) in sum_map:
            return True
        
        # Update the map with the current cumulative sum
        if current_sum in sum_map:
            sum_map[current_sum] += 1
        else:
            sum_map[current_sum] = 1
            
    return False

def get_user_input():
    """
    This function prompts the user for input and checks if any subarray in the input array sums up to the target.
    """
    # Prompt the user to enter the array length
    length = int(input("Enter the length of the array: "))
    
    # Prompt the user to enter the target sum
    target = int(input("Enter the target sum: "))
    
    # Initialize an empty list (Python's version of an array)
    arr = []

    # Prompt the user to enter each element of the array
    for i in range(length):
        try:
            element = int(input(f"Enter element {i + 1}: "))
            arr.append(element)
        except ValueError:
            print("Invalid element. Please enter an integer.")
            return

    # Check if any element or subarray sum equals the target
    result = check_array_sum(arr, target)
    print(f"The array contains an element or subarray that sums up to {target}: {result}")

# Call the function to get user input and check the array
get_user_input()