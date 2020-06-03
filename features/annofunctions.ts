// need to annotate otherwise has an any type
// need to return a tyoe
// NO TYPE INFERENCE FOR ARGUMENTS
const add = (a:number,b:number): number => {
    // we have to return a number here
    return a+b 
}


const subtract = (a:number,b:number) => {
    // we do not return anythin here
    // typescript will not throw error
    // will assume you did not want to return anything
     a-b 
}
// here we define expected type of return
// otherwise won't  expect a return statement
const divide = (a:number,b:number):number => {
    return a / b
}

// if we try to return will throw an error
// we've defined it as void
const logger = (message:string):void => {
    console.log(message)
}
// only use this if we expect the function to never
// rreach end of function/ USED V RARELY
const throwError = (message: string): never => {
    throw new Error(message)
}

const logWeather = (forecast: {date: Date, weather: string}):void => {
    console.log(forecast.date)
}
// using es6 syntax
const logWeather2 = ({date, weather}: {date: Date, weather: string}):void => {
    console.log(date)
}