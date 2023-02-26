"""
Reverse each word of a string
"""
def reverse(raw):
  split = raw.split(" ")

  #inverting
  for word in split:
    result += (word[::-1] + " ")
  
  return result

print (reverse(input("Frase pra inverter: \n")))