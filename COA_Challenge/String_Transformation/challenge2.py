def transform_string(s):
    length = len(s)
    
    if (length % 3 == 0 and length % 5 == 0 ):
        # Length is divisible by 15: perform both operations in order
        s = s[::-1]  # Reverse the string
        s = ' '.join(str(ord(char)) for char in s)  # Replace each character with its ASCII code
    elif length % 5 == 0:
        # Length is divisible by 5: replace each character with its ASCII code
        s = ' '.join(str(ord(char)) for char in s)
    elif length % 3 == 0:
        # Length is divisible by 3: reverse the string
        s = s[::-1]
    
    return s

n = input("Enter the string to checked : ")
result = transform_string(n)

print(" After checking the length of the the result is :"  , result)
