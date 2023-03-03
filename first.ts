const a: string = "5";
const aa = '5'; 
// 이때 굳이 string 을 적을 필요가 없습니다 
// 타입스크립트가 자동으로 추론 해주기에 틀릴경우에만 직접 수정해주면 됩니다. 
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null  = null;
const f: any = true;
// any를 최대한으로 줄이는게 타입스크립트의 목표
const g: 5 = false;
const h: true = false;

// 타입스크립트 객체 배열 사용

const arr: string[] = ['123' , '456']
const arr2: number[] = [123 , 456]
const arr3: Array<number> = [123 , 456]
const obj: {lat : number, ion :number} = {lat:37.5 , ion:127.5}

// 함수의 타입 표기법 ##############

function add(x: number, y: number): number { return x + y; }
// 함수의 타입스크립트는 뒤에 리턴값은 앞에
type Add = (x : number , y:number) => number;
function add(x , y) {
    return x + y
}
// 위에는 타입만 되어있고 아래는 선언만 사용되어있는 표기법

const add(x:number , y:number) => number => (x,y) => x + y; 
// 화살표 함수에서에 타입스크립트 표기법 1번
const add: Add = (x, y) => x + y;
// 화살표 함수에서에 타입스크립트 표기법 2번

// 타입 스크립트에서 빈배열 never 
// never 타입 빈배열이 나올땐 타입을 지정해주는것이 좋음
try {
    const array: string[] = [];
    array.push('hello');
    } catch(error) {
        error;
    }

// as 로 문자열을 바꾸는방법 ###
let aa = 123;
aa = 'hello' as unknown as                                                                                                                number;
// 앞에 타입을 강제로 변경시킵니다

// : , as , type , interface, 제네릭, body 없는 function 은
// tsc 변환후 사라질 수 있다. 즉 저런 표시가 없어도 
// js코드는 이상없이 작성되있어야한다 

// interface 를 통해 함수를 만드는 법 
interface Add {
    (x: number , y: number):number;
}

const add: Add = (x , y) => x + y;

// 타입스크립트의 느낌표#####
// 별로 권장 되지 않음 
// null 아님을 확실히 선언 할때 사용 합니다.
const head = document.querySelector('#head')!;

// 추천 하는 방법
const head = document.querySelector('#head');
if(head){
    head.innerHTML = 'hello'
}

// 타입을 새롭게 만들 수 있습니다 ###
// 타입을 정교하게 만들 수 있습니다.
type World = 'world';
const a: World = 'world';

const b = `hello ${a}`;
// type Greeting = 'hello world"
type Greeting = `hello ${World}`

// rest 에서도 규칙이 적용됩니다 ###
function rest(...args: string[]) {
    console.log(args)
}
rest('1','2','3')

// ## tuple 튜플 [크기가 고정되어있는 배열]
const tuple: [string , number] = ['1' , 1]
tuple[2] = 'hello' // 막아주지만
tuple.push('hello') // 에러표시가 되지 않습니다.

// ## enum 이넘 
// 순서대로  0 1 2 3 이 부여됩니다.
// 여러개의 변수들을 하나의 그룹으로 묶고싶을때 사용합니다.
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}
const a = EDirection.up