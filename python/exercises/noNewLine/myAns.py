"""
Read text file into a variable and replace all newlines with space
"""
with open('text.txt') as f:
  lines = f.read()

print(lines.replace('\n', ' '))