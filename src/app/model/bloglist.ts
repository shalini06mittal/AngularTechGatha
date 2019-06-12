import { Blog } from './blog';

export let blogs:Blog[]=[
    new Blog('My first interview',
    'it was an amazing experience and lots to learn in the firts interview',
    '22 May 2019','8:03 Pm','personal'),
    new Blog('Interesting Trip To Kerala',
    'The beauty just mesmerizes me the momo=ent I entered the soft waters of the Kolam beach\
    at Kerala. It was a soothing experience with water rushing down my feets and so clear.',
    '22 May 2019','8:03 Pm','nature'),
    new Blog('Kids bringing Up',
    'Kids nowadays are very tech savy. If you dont keep pace with them the connect does not happens',
    '22 May 2019','8:03 Pm','personal'),
    new Blog('Triumphant Win',
    'Enormous win by Narendra Modi in 2019 elections. Never seen such a vast liking of a person till date',
    '22 May 2019','8:03 Pm','politics'),
    
]

export let categories=['personal','politics','nature','technical'];