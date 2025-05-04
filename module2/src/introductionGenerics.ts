{
    // generic type
/* 
    TypeScript-এর Generic Type হলো এমন একটি ফিচার, যেটা কোডকে বেশি flexible এবং reusable করে তোলে।
    Generics তোমাকে এমন ফাংশন, ইন্টারফেস বা ক্লাস বানাতে সাহায্য করে যেটা যে কোনো টাইপের ডেটার সাথে কাজ করতে পারে,
    কিন্তু সেই টাইপটা runtime-এ না বরং compile time-এ নির্ধারণ করা হয়... */
  
    type GenericArray<T> = Array<T>; //এখানে <T> হচ্ছে Generic Type Parameter। T যেকোনো টাইপ হতে পারে—string, number, object, ইত্যাদি।
  
    // const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers: GenericArray<number> = [3, 6, 8];
  
    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  
    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];
  
    interface User {
      name: string;
      age: number;
    }
  
    const user: GenericArray<User> = [
      {
        name: "Mezba",
        age: 100,
      },
      {
        name: "Jhankar Mahbub",
        age: 110,
      },
    ];
  
    const add = (x: number, y: number) => x + y;
  
    add(30, 20);
  
    //generic tuple
    //Generic Tuple মানে — tuple এর টাইপ গুলো dynamic রাখা, যেন আমরা পরে নির্দিষ্ট টাইপ দিয়ে সেটা তৈরি করতে পারি।
  
    type GenericTuple<X, Y> = [X, Y];
  
    const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  
    const UserWithID: GenericTuple<number, { name: string; email: string }> = [
      1234,
      { name: "persian", email: "a@gmail.com" },
    ];
  }