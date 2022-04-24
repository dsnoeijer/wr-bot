file = open("qs.txt", "r")
full = file.read()
textString = ''


# Seperate every Q&A block
blocks = full.split("\n\n")

file.close()
x = 0

with open('testing.txt', 'w') as f:

    for item in blocks:
        i = 0
        # create array of question + answers
        block = item.split("\n")
        for line in block:
            max_lines = len(block)
            # print(line)
            if i == 0:
                textString += ('{\n')
                if x < 10:
                    quest = block[i][27:-2]
                    textString += '"question": ' + '"' + quest + '",\n'
                elif x > 9 and x < 100:
                    quest = block[i][28:-2]
                    textString += '"question": ' + '"' + quest + '",\n'
                elif x > 99 and x < 1000:
                    quest = block[i][29:-2]
                    textString += '"question": ' + '"' + quest + '",\n'
                else:
                    quest = block[i][30:-2]
                    textString += '"question": ' + '"' + quest + '",\n'
            elif i == 1:
                textString += '"answer": [\n'
                if i < (max_lines - 1):
                    textString += '"' + block[i][26:-2] + '",\n'
                else:
                    textString += '"' + block[i][26:-2] + '"\n'
            else:
                if i < (max_lines - 1):
                    textString += '"' + block[i][26:-2] + '",\n'
                else:
                    textString += '"' + block[i][26:-2] + '"\n'
            i += 1
        textString += ']\n'
        textString += '},\n'
        x += 1
    f.write(textString)

    print(x)
