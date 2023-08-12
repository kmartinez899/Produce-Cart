# opens items.txt and reads file line by line
file = open('items.txt', 'r')
data = file.readlines()
file.close()

# list that contains lists of the item name and its image
info = []
for i in range(len(data)):
    info.append(data[i].strip().split("|"))

id = []
itemNames = []
images = []


for j in range(len(info)):
    itemNames.append(info[j][0])
    images.append(info[j][1])

for i in range(len(itemNames)):
    newID = itemNames[i].replace(" ","")
    id.append(newID.lower())
    

# for i in range(30):
#     print()

# for i in range(134):
#     product = " {\nid: "+f'"{id[i]}"'+ ",\nname: "+f'"{itemNames[i]}"' +",\nimg: "+f'"{images[i]}"'+" \n},"
#     print(product)

# for i in range(134, 268):
#     product = " {\nid: "+f'"{id[i]}"'+ ",\nname: "+f'"{itemNames[i]}"' +",\nimg: "+f'"{images[i]}"'+" \n},"
#     print(product)

for i in range(269, 368):
    product = " {\nid: "+f'"{id[i]}"'+ ",\nname: "+f'"{itemNames[i]}"' +",\nimg: "+f'"{images[i]}"'+" \n},"
    print(product)





# for item in itemNames:
#     print(item)

# print()

# for image in images:
#     print(image)

# for elem in id:
#     print(elem)



# {
#     id: ID,
#     name: itemName,
#     img: image
# }, 

