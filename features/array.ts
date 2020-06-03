const cars = ['cars', 'volvo']
// inferred is
const cars1: string[] = []

// for a 2d array
const cars2: string[][] = []
// ie

const cars3 = [
    ['volvo'],
    ['audi'],
    ['mini']
]

// the inference of this will be any
const any = [ ]

// you also get inference when poping cars.pop() also cars[0]
// will help incompatibale values being added to an array.

// can use | operator for mutiple types of values

const date2: (Date|string)[] = [new Date(), '12th dec 2009']