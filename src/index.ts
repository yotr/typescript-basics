// //typescript static chicking  tdect errors without runing code
// let Name = "test";
// let age: number = 10;
// let all: any;
// let test; //any
// //assign varables and u can not aassign value just type too

// function add(n1:number,n2:number) {
//     return n1 + " " + n2;
// }
// console.log(add(10,20));

// var tst:string = "hi";
//  tst = "ffffffff";

// let allAnyType; //any cuz all its any type so u can redeclare as u want
// allAnyType = 'hi';
// allAnyType = 10;
// allAnyType = true;


// let twotype: (string | number);
// twotype = 10;
// twotype = 'hi';


// let myFriends = ['a', 'b', 'c','d'];


// for (let i = 0; i < myFriends.length; i++) {
//  console.log(myFriends[i].repeat(3));
// }


// // type annotation with multidimensional arrays

// let arr1:number[] = [1, 2, 3];
// let arr2:string[] = ['a', 'b', 'c', 'd'];
// let arr3: (number | string)[] = [1, 2, 3,'a', 'b', 'c', 'd'];
// let arr4: (number | string | string[])[] = [1, 2, 3,'a', 'b', 'c',['d', 'g']];
// //////////////////

// let show = true;

// function showDetails(name: string,age: number,salary: number) {
//     if(show){
//         console.log(`hello ${name} , age ${age} ,salary ${salary}`);
//     }
// }
// console.log(showDetails('hima',40,5000));


// //  function optional and  default parameters
// // ? optional parameter should  come at the end of parameters
// function showDetails1(name: string = 'un',age?: number,salary: number = 5000) {
//  return `${name} ${age} ${salary}`;
// }


// console.log(showDetails1(undefined,5000));


// ///funcrion rest parameters


// function restParameters(...nums: number[]){
//     let result = 0;
//     // for (let i = 0; i < nums.length; i++) {
//     //     result += nums[i];
//     // }
//     nums.forEach(num => result += num);
//     return result;
// }

// console.log(restParameters(10,20,30));

/////// anotation with anonymous function and arrow functian

// const add = function(number1: number, number2: number):number {
//     return number1 + number2;
// }

// console.log(add(10,20));

// //arrow
// const arrowFun = (number1:number,number2:number):number => number1 + number2;

// console.log(arrowFun(10,20));

//////  data types & type Alias

// type str = string;
// let theString: str = 'kjdk';

//// Data Types - Type Alias Advanced

// type Buttons = {
//     up : string,
//     down : string,
//     left : string,
//     right : string,
// }

// type last = Buttons & {
//  x: boolean;
// }

// function getActions(btns: last) {
//     console.log(`print btn ${btns.up}`);
//     console.log(`print btn ${btns.down}`);
//     console.log(`print btn ${btns.left}`);
//     console.log(`print btn ${btns.right}`);
// }
// console.log(getActions({up: 'up', down: 'down' , left: 'left', right: 'right', x: true}));

/////  Data Types - Literal Types

// type nums = 0 | 1 | -1;
// function compare(aNum:number, bNum:number) : nums {
//     if(aNum === bNum) return 0 ;
//     else if(aNum > bNum) return 1;
//     else return -1;
// }

// console.log(compare(20,20)); //0
// console.log(compare(30,20)); //1
// console.log(compare(10,20)); //-1

// /// Data Types - Tuple is another sort of array type

// let articale : readonly [number, string,boolean] = [11,'title',true]

// articale = [12,'title',false];
// // articale.push(true); // u can't push when its readonly value

// console.log(articale);
// const [id, title,published] = articale;

// // Data Types - Void And Never

// void dosnt return a value
// never dosnt return anything no return term
// function logged(msg: string): void {
//     console.log(msg);
//     // return msg;
//     // i can return nothing its ok
//     return;
// }

// console.log(logged('testing...'));

// const fail = (msg: string) =>  {
//     throw new Error(msg);
//     // return 1; // unreachable code
// }

// //// Data Types - Enums Part 1

/// // allow us to declare a set of constants

//  const kids = 15;
//  const easy = 9;
//  const medium = 6;
//  const hard = 3;

// function returnHard():  number {
//     return 3;
// }
/// enum kids {
//     five = 25,
//     seven = 20,
//     ten = 15
// }

//  enum Level {
//     kid = kids.ten,
//     easy = 9,
//     medium = easy - 3,
//     hard = returnHard()
// }

// let  lvl: string = "easy";
// if (lvl === "easy") {
//     console.log(`the level  is ${lvl}`);
// }

//  ///Data Types - Type Assertions

// let myImg = document.getElementById('myImg') as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById('myImg');
// console.log(myImg.src);

// let testAssertion :any = '1000';

// console.log((testAssertion as string).repeat(2));

//// Data Types - Union And Intersection Types

// type A = {
//     one:string,
//     two:number,
//     three:boolean,
// }
// type B = A & {
//     four:boolean,
// }
// type C =  {
//     five:boolean,
// }
// type mix = A & C;

// function printTypes ( nums: mix) {
//     console.log(`type ${nums.one}`);
//     console.log(`type ${nums.two}`);
//     console.log(`type ${nums.three}`);
//     console.log(`type ${nums.five}`);
// }

// console.log(printTypes({one: 'one', two: 3, three: true,five: false}))
// ////    Type Annotations With Object

// let myObjetct: {
//    readonly username: string,
//     id: number,
//     hire: boolean,
//     skills: {
//         one:string,
//         two?:string,
//         three?:string,
//     }

// } = {
//     username: 'username',
//     id: 1,
//     hire: true,
//     skills: {
//         one: 'HTML',
//     }
// }

// // myObjetct.username = 'dd'; cuz its readonly property
// console.log(myObjetct.skills.one);

// //// Interface Declaration

// interface User {
//     id: number,
//     username: string,
//     country: string,
// }

// let user: User = {
//     id: 1,
//     username: 'username',
//     country: 'USA'
// }

// function getData(data: User){
//     console.log(data.id);
//     console.log(data.username);
//     console.log(data.country);
// }

/// ////  Interface Method And Parameters

// interface User {
//     id: number,
//     username: string,
//     country: string,
//     sayHello(): string,
//     getDouble(num: number): number
// }
// let user: User = {
//     id: 1,
//     username: 'username',
//     country: 'USA',
//     sayHello() {
//         return 'Hello';
//     },
//     getDouble(num) {
//         return num * 2;
//     },
// }

//  /// Interface Reopen And Use Cases

// // Homepage

// interface Settings {
//     theme: boolean;
//     font : string;
// }

// // Articalespage

// interface Settings {
//     sidebar: boolean;
// }
// let userSettings: Settings = {
//     sidebar: true,
//     theme: true,
//     font: 'front'
// }

/// ////  Interface Extend

// interface User {
//    id: number;
//    username: string;
//    country: string;
// }

// interface Modrator {
//    role: string | number;
// }
// interface Admin extends User, Modrator {
//    protect: boolean;
// }
// let user: Admin = {
//     id: 1,
//     username: 'username',
//     country: 'USA',
//     role: 'Moderator',
//     protect: true,
// }

/// /////////  Class Type Annotations

// class User {
//   u: string;
//   s: number;
//   msg: () => string;
//   constructor(username: string, salary: number) {
//     this.u = username;
//     this.s = salary;
//     this.msg = function () {
//       return `hello ${this.u}`;
//     };
//   }
//   sayMsg() {
//     return `hello ${this.u}`;
//   }
// }
// let userOne = new User("username", 1000);

// ////// Class Access Modifiers And Parameters Properties

// class User {
//   msg: () => string;
//   constructor(private username: string, protected salary: number) {
//     // this.u = username;
//     // this.s = salary;
//     this.msg = function () {
//       return `hello ${this.username}`;
//     };
//   }
//   sayMsg() {
//     return `hello ${this.username}`;
//   }
// }
// let userOne = new User("username", 1000);


/// //// Class Get And Set Accessors

// class User {
//   msg: () => string;
//   constructor(private _username: string, protected salary: number) {
//     // this.u = username;
//     // this.s = salary;
//     this.msg = function () {
//       return `hello ${this._username}`;
//     };
//   }
//   sayMsg() {
//     return `hello ${this.username}`;
//   }
//   get username(): string {
//     return this._username;
//   }
//   set username(value: string)  {
//      this._username = value;
//   }
// }
// let userOne = new User("username", 1000);

// /// Class Static Members

// class Test {
//     static created: number = 0;
//     static getCount(): void {
//         console.log(`${this.created}`)
//     } 
//     constructor(public username: string) {
//         Test.created++;
//     }
// }

// Test.created = 0;
// let user1 = new Test("username1");
// let user2 = new Test("username2");
// let user3 = new Test("username3");

// Test.getCount();


// /// Class Implements Interface

// interface Setup {
//     theme: boolean;
//     font?: string;
//     save(): void;
// }

// class App implements Setup {
//    constructor(public theme: boolean){
//    }
//    save(): void {
//        console.log("saved");
//    }
// }

//  ////  Abstract Classes And Members

// abstract class Food {
//     constructor(public title: string){}
//     abstract getCookingTime(): void;
// }

// class pizza extends Food {
//     constructor(title: string,public price:number){
//         super(title); // just to inherit from superclass
//     }
//     getCookingTime(): void {
//         console.log("5 minutes")
//     }
// };
// class Burger extends Food {
//     getCookingTime(): void {
//         console.log("15 minutes");
//     }

// };

///  Polymorphism And Method Override 

// class Player {
//     constructor(public name: string){}
//     attack(): void { 
//     console.log("attack...");
//     }
// }

// class Amazon extends Player {
//     constructor(name: string,public spears: number){
//         super(name);
//     }
//     override attack(): void {
//         super.attack();
//         console.log(this.spears);
//         this.spears -= 1;
//     }
// }

/// ////  Generics Introduction help to write a reusable code
/// ////////////////////////////////// to pass type as parameter to another type

/// declare valuable ad GenericType and u assign the a type when u call th function

// /// static way 
// function returnNumber(value: number): number {
//     return value;
// }
// function returnString(value: string): string {
//   return value;
// }
// function returnBoolean(value: boolean): boolean {
//   return value;
// }
// // more efficient way

// function returnValue(
//   value: boolean | number | string): boolean | number | string {
//   return value;
// }
// // the best dynamic way

// function returnType<GenericType>(value: GenericType): GenericType{
//     return value;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("hima"));
// console.log(returnType<boolean>(false));
// console.log(returnType<number[]>([1, 2, 3]));

// ////// Generics Multiple Types

// function testType<T>(value: T): string {
//     return `value: ${value}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("hima"));

// function multiType<T,S>(value1: T,value2: S): string {
//   return `value1: ${value1}, value2: ${value2}`;
// }

// console.log(multiType<number,string>(100,"value"));
// console.log(multiType<boolean,number[]>(false,[1, 2, 3]));

// //  Generics Classes

// class Generator<T> {
//     constructor(public value: T){}
//     show(msg: T): void {
//         console.log(msg);
//     }
// }

// let gen1 = new Generator<string>('value');
// let gen2 = new Generator<number>(100);


//// Generics And Interfaces////

// interface Book {
//     itemType: string;
//     title: string;
//     isBen: number;
//     author?: string;
// }
// interface Game {
//   itemType: string;
//   title: string;
//   style: string;
//   price: number;
// }

// class Collection<T> {
//     public data:T[] = [];
//     add(item:T) : void {
//         this.data.push(item);
//     }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "book", title: "cool way", isBen: 55 });