from __future__ import print_function
import sys
import markovify

text = sys.stdin.read()

text_model = markovify.Text(text)

for i in range(20):
    print(text_model.make_sentence())
