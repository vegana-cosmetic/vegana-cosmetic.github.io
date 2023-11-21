def process_string(s):
    alphabet_sum = sum(ord(char) - ord('A') + 1 for char in s.upper() if char.isalpha())
    binary_representation = bin(alphabet_sum)[2:]
    
    max_consecutive = 0
    current_consecutive = 0

    for digit in binary_representation:
        if digit == '1':
            current_consecutive += 1
        else:
            max_consecutive = max(max_consecutive, current_consecutive)
            current_consecutive = 0

    max_consecutive = max(max_consecutive, current_consecutive)

    return alphabet_sum, binary_representation, max_consecutive


input_string = input()

result = process_string(input_string)

for item in result:
    print(item)
