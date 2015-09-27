import markovify

with open("./corpus.txt") as f:
    text = f.read()

text_model = markovify.Text(text)

for i in range(20):
    print text_model.make_sentence()
