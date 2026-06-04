// const list_of_cars: string[] = ['toyota', 'camry', 'lexus', 'tycan'];

// const var4: string

// interface obj1 {
//   name: string;
//   age: number;
//   isStudent: boolean;
//   pGrade: grade;
// }

// enum grade {
//   js1,
//   js2,
//   js3,
//   ss1,
//   ss2,
//   ss3,
// }

// const obj1: obj1[] = [
//   {
//     name: 'ade',
//     age: 14,
//     isStudent: false,
//     pGrade: grade.ss2,
//   },
//   {
//     name: 'mary',
//     age: 25,
//     isStudent: true,
//     pGrade: grade.ss3,
//   },
//   {
//     name: 'felix',
//     age: 45,
//     isStudent: true,
//     pGrade: grade.js3,
//   },
// ];

const newFunc = (x: number, y: number): number => {
  return x + y;
};

const num1 = 24;
const num2 = 16;

const result = newFunc(num1, num2);

console.log(typeof result);
