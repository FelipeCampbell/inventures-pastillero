# conmutativos: + *
# asociativos: + con + . * con * .
# asociatividad: (2 + 3) + 4 = 2 + (3 + 4)

# the order in which the numbers are located from left to right is (a+((b+(c+d)))

# digits_string = input("Enter the 4 digit string: ")
digits_string = "1821"
digits_list = [int(digit) for digit in digits_string]



ops_list = ["+", "-", "*", "/"]


def apply_operator(x, y, op):
    if(op == "+"):
        return x+y
    elif(op == "-"):
        return x - y
    elif(op == "*"):
        return x * y
    else:
        if(y != 0):
            return x / y


def print_parenthesis_combinations_of_ordered_nums(ordered_list):
    # i will be left parenthesis
    # j will be right parenthesis

    for i in range(0, 3):
        for j in range(0, 3):
            print(j)


def print_dif_ops(num_0, num_1, num_2, num_3):
    print(f"{num_0} + {num_1} + {num_2} + {num_3}")


def ops_all_configs(digits_list_inp):
    for i in range(0,len(digits_list_inp)):
        for j in range(0,len(digits_list_inp)):
            if(i != j):
                for op_1 in ops_list:
                    for k in range(0,len(digits_list_inp)):
                        for op_2 in ops_list:
                            if(i != k and j != k):
                                for op_3 in ops_list:
                                    for l in range(0,len(digits_list_inp)):
                                        if (i != l and j != l and k != l):
                                            if(apply_operator(apply_operator(apply_operator(digits_list_inp[i], digits_list_inp[j], op_1), digits_list_inp[k], op_2), digits_list_inp[l], op_3) == 25):
                                                return(
                                                    f"((({digits_list_inp[i]} {op_1} {digits_list_inp[j]}) {op_2} {digits_list_inp[k]}) {op_3} {digits_list_inp[l]})")
                                                    
                                            elif(apply_operator(apply_operator(digits_list_inp[i], digits_list_inp[j], op_1), apply_operator(digits_list_inp[k], digits_list_inp[l], op_2), op_3) == 25):
                                                return(
                                                    f"(({digits_list_inp[i]} {op_1} {digits_list_inp[j]}) {op_2} ({digits_list_inp[k]} {op_3} {digits_list_inp[l]}))")
    return("No Hay Solución")



print(ops_all_configs(digits_list))

# digits_all_configs(digits_list)
