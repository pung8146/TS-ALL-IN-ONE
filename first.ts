const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;
// any를 최대한으로 줄이는게 타입스크립트의 목표

function add(x: number, y: number): number { return x + y; }
// 함수의 타입스크립트는 뒤에 리턴값은 앞에

const add(x:number , y:number) => number => (x,y) => x + y; 
// 화살표 함수에서에 타입스크립트 표기법 1번
type Add = (x : number , y:number) => number;
const add: Add = (x, y) => x + y;
// 화살표 함수에서에 타입스크립트 표기법 2번
 
const obj: {lat : number, lan :number} = {lat:37.5 , lan:127.5}