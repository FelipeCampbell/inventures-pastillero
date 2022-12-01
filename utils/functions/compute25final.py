# conmutativos: + *
# asociativos: + con + . * con * .
# asociatividad: (2 + 3) + 4 = 2 + (3 + 4)

# the order in which the numbers are located from left to right is (a+((b+(c+d)))
# if we dont shuffle the numbers, we cant make all parenthesis options
# if we shuffle numbers and operands, we only need to chek 2 parenthesis options:
    # (((i [op] j) [op] k) [op] l)
    # ((i [op] j) [op] (k [op] l))

# digits_string = input("Enter the 4 digit string: ")
digits_string = "1821"
digits_list = [int(digit) for digit in digits_string]



ops_list = ["+", "-", "*", "/"]


def apply_op(x, y, op):
    if(op == "+"):
        return x+y
    elif(op == "-"):
        return x - y
    elif(op == "*"):
        return x * y
    else:
        if y:
            return x / y


def compute25(digits):
    for i in range(0,len(digits)):
        for j in range(0,len(digits)):
            if(i != j):
                for op_1 in ops_list:
                    for k in range(0,len(digits)):
                        for op_2 in ops_list:
                            if(i != k and j != k):
                                for op_3 in ops_list:
                                    for l in range(0,len(digits)):
                                        if (i != l and j != l and k != l):
                                            if(apply_op(apply_op(apply_op(digits[i], digits[j], op_1), digits[k], op_2), digits[l], op_3) == 25):
                                                return(
                                                    f"((({digits[i]} {op_1} {digits[j]}) {op_2} {digits[k]}) {op_3} {digits[l]})")
                                            elif(apply_op(apply_op(digits[i], digits[j], op_1), apply_op(digits[k], digits[l], op_2), op_3) == 25):
                                                return(
                                                    f"(({digits[i]} {op_1} {digits[j]}) {op_2} ({digits[k]} {op_3} {digits[l]}))")
    return("No Hay Solución")



print(compute25(digits_list))

# digits_all_configs(digits_list)
