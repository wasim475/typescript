{

    /*
    ==============================================================
                generic constraint keyof
    ================================================================

    keyof TypeScript-এর একটি type operator, যা কোনো object টাইপের সব কী (property name) থেকে একটি union type তৈরি করে।

✅ কেন ব্যবহার করবো?
object-এর কী গুলো থেকে টাইপ বানাতে চাইলে

টাইপ-সেফ কোড লিখতে

dynamic property access টাইপ-চেক করার জন্য

✅ কখন ব্যবহার করবো?
যখন তুমি এমন ফাংশন বানাতে চাও, যেটা object-এর নির্দিষ্ট key-access নিয়ে কাজ করবে

Generic utility functions তৈরি করতে

✅ উদাহরণ:

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // 'name' | 'age'
এখন PersonKeys হলো union type: 'name' | 'age'

✅ Practical Use:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Wasim', age: 29 };

const name = getProperty(person, 'name'); // string টাইপ
👉 এখানে keyof নিশ্চিত করছে যে তুমি কেবল বৈধ কী-ই access করছো।
    */
    
    //
    type vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // manually
    type Owner2 = keyof vehicle;
  
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
      return obj[key];
    };
  
    const user = {
      name: "Mr. Wasim",
      age: 26,
      address: "ctg",
    };
  
    const car = {
      model: "Toyota 100",
      year: 200,
    };
  
    const result1 = getPropertyValue(car, "year");
  
    // obj[key]   26
  
  

    //
}