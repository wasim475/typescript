let friends: string[] = ["anik", "rony"];

const roleNumber: number[] = [1, 3, 5];

// tuple
let user: [string, number] = ["Wasim", 29];

/**
  টুপল (Tuple) TypeScript-এ টুপল হলো এমন একটি বিশেষ অ্যারে যেখানে প্রতিটি এলিমেন্টের টাইপ নির্দিষ্টভাবে নির্ধারিত থাকে 
  এবং তাদের ক্রম (order) গুরুত্বপূর্ণ। এটি এমন ডেটা স্ট্রাকচার যেখানে নির্দিষ্ট সংখ্যক ও নির্দিষ্ট টাইপের ভ্যালু রাখা যায়,
   যেমন: [string, number] মানে প্রথমটা string, পরেরটা number হতে হবে।

   উদাহরণঃ let user: [string, number] = ["Wasim", 29];

এখানে ভ্যালুগুলোর টাইপ ও অবস্থান (order) গুরুত্বপূর্ণ।
যদি ["Wasim", 29] এর বদলে [29, "Wasim"] দিতাম, তাহলে TypeScript ত্রুটি (error) দিত।

✅ প্রিমিটিভ ভ্যালু (Primitive Values):
string

number

boolean

null

undefined

bigint

symbol

✅ নন-প্রিমিটিভ ভ্যালু (Non-Primitive Values):
object

array

function

class

Map

Set

Date
 */
