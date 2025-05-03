{
    //

    //   type alias আমরা অবজেক্ট এবং প্রিমিটিভ ভ্যালুর ক্ষেত্রে ব্যবহার করতে পারি কিন্ত interface শুধুমাত্র object এর ক্ষেত্রে ব্যবহার করতে হবে...

type user1 = {
    name: string,
    age: number,
}

type userWithRoll1 = user1 &{role: number} //with intersection

const user1:userWithRoll1 ={
    name: 'nadim Nafi',
    age: 30,
    role: 155911
}

interface User2 {
    name: string;
    role: string;
}

interface userWithRole2 extends User2 {age:number}

const user2:userWithRole2 ={
    name: 'nadim Nafi',
    age: 30,
    role: "mern stack developer"
}


type roll = number[]

const roll:roll=[1,2,3,4]

interface roll2 {
    [index:number]:number
}

const roll2: roll2 = [1,2,3,4]


type Add = (num1:number, num2:number)=>number

interface Add2 {
    (num1:number, num2:number): number
}

const add:Add2= (num1, num2)=> num1+num2
    //
}


