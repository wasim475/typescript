function add(num1: number, num2: number):number {
    return num1+num2
}


add(2,5)

type PoorUser ={
    name: string;
    age: number;
    balance: number;
}
const poorUser = {
    name: 'wasim',
    age: 29,
    balance: 0,
    addBalance(balance: number):string{
        return `New Balance ${this.balance + balance}`
    }
}