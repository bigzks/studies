with open('sample.txt', 'r') as file:
    data = file.read().replace('\n', ' ')
    print(data)