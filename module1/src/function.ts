function add(num1: number, num2: number):number {
    return num1+num2
}


add(2,5)

type PoorUser ={
    name: string;
    age: number;
    balance: number;
    addBalance: (balance:number)=>string
}
const poorUser: PoorUser = {
    name: 'wasim',
    age: 29,
    balance: 0,
    addBalance(balance: number):string{
        return `New Balance ${this.balance + balance}`
    }
}

const arr:number[] = [2,4,6,8]

const newArray: number[] = arr.map((ele:number): number=> ele*ele)