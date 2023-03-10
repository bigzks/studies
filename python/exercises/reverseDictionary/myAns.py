# show dictionary value before index
ascii_dict = {'A': 65, 'B': 66, 'C': 67, 'D': 68}
ascii_dict_reverse = {value: key for key, value in ascii_dict.items()}
print(ascii_dict_reverse)