interface A {
  a: string;
}
const obj1: A = { a: "hello", b: "world" };
//  b가 없다고 출력이 됩니다

// ** 잉여 속성 검사 **
const obj = { a: "hello", b: "world" };
const obj1: A = obj;
//  변수로 따로 빼줄경우 검사를 하지않아 이상없이 출력됩니다.
