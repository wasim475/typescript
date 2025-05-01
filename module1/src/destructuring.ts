const morePoorUser ={
    name:{
        firstName:'Wasim',
        lastName:'Hossain'
    },
    contactNo: 1718885075,
    nationality: "bangladeshi"

}

const {contactNo, name:{firstName:firstPartOfName}}= morePoorUser // firstName এর পরিবর্তে firstPartOfName দিয়ে কল করতে পারবো

// Array Destructuring

const myFriends =['Rony','Mitu',"Shahin",'sohanur roni','anik','tushar']

const [a,b,c,bestFriend]= myFriends // a = rony b= mitu c= shahin bestfriend = sohanur roni

const [,,,againBestFriend]= myFriends // প্রথম তিনটা ভ্যালু স্কিপ করবে এবং  bestfriend = sohanur roni
const [,,,againAndAgainBestFriend,...rest]= myFriends // প্রথম তিনটা ভ্যালু স্কিপ করবে এবং  bestfriend = sohanur roni থাকবে এবং anik tushar rest ভ্যারিয়েবল এ অ্যারে আকারে যুক্ত হবে

