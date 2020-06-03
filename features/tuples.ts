
const pepsi:[string, boolean, number] = ['brown', true, 40]

// to create a type Drink

type Drink = [string, boolean, number]
// then - this is a tuple of type drink
const sprite:Drink = ['clear', true, 30]

// javascript objects are often better than typescript tuples