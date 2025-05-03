// generic type

type GenericArray<T> = Array<T>;

// const rollNumbers: number[] = [3, 6, 8];
const rollNumbers: GenericArray<number> = [3, 6, 8];

// const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const boolArray: boolean[] = [true, false, true];
const boolArray: GenericArray<boolean> = [true, false, true];