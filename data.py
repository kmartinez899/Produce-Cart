file = open('items.txt', 'r')
data = file.readlines()
file.close()

# contains item and its image
info = []

itemNames = []
images = []

for i in range(len(data)):
    info.append(data[i].strip().split("|"))

for j in range(len(info)):
    itemNames.append(info[j][0])
    images.append(info[j][1])

# for item in itemNames:
#     print(item)

# print()

# for image in images:
#     print(image)



