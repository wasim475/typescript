// type assertion

let anything: any;

anything = 'Next level web development.';

const sliceResult = (anything as string).charAt(4)

console.log(sliceResult)


const kgToGram = (value: string| number |undefined): string| number| undefined=>{
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000
        return `Converted value is: ${convertedValue.toFixed(2)} gram.`
    }
    if(typeof value ==='number'){
        return (value*1000).toFixed(2)
    }

}

const resultOfKgToGram = kgToGram('7') as string

console.log(resultOfKgToGram)

type CustomError = {
    message:string
}

try {
    
} catch (error) {
    console.log((error as CustomError).message)
}

