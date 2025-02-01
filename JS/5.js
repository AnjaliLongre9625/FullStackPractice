// let arr=[1,2,3,4,5];

// arr.forEach( (el) =>{  //arrow function
//     console.log(el)
// });

// arr.forEach(function(el){
//     console.log(el)
// });
// let print=function(el){
//     console.log(el);
// };

// arr.forEach(print);

// let students=[{
//     name:"anjali",
//     marks:95
// },{
//     name:"priya",
//     marks:94
// },{
//     name:"nehal",
//     marks:93
// }];


// let gpa=students.map((ele)=> {
//     return ele.marks/10;
// })

// arr.forEach((student)=>{
//     console.log(student.marks);
// });


// let num=[1,2,3,4];
// let double=num.map((ele)=>{
//     return ele*2;
// })

// console.log([2,4,6].every((el)=>el%2==0)); //every

// [1,2,3,4].reduce((res,el)=>(res+el));

// let arr=[1,2,3,4,5];

// let max=-1;

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

// let arr=[1,2,3,4,15];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// })
// console.log(max);

// function sum(a,b=3){
//     return a+b;
// }
// sum(2);

// let arr=[1,2,3,4,5];  //spread
// let newarr=[...arr];

// let chars=[..."hello"];

// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];

// let nums=[...odd,...even];


// const data={
//     email:"anjalilongre349@gmail.com",
//     password:"abcd",
// };

// const datacopy={...data};


// let arr=[1,3,5,7,9];
// let obj1={...arr};



//REST
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//        console.log("u gave us",args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
// }



// function sum(...args){
//     return args.reduce((sum,el)=>sum+ele);
// }
// function min(...args){
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     })
// }


// //destructing
// let names=["anjali","nehal","priya"];
// // let winner=names[0];
// // let runnerup=names[1];
// // let secondrunnerup=names[2];

// let [winner,runnerup,secondrunnerup]=names;


const student={
    name:"anjali",
    age:"20",
    subjects:["hind","eng","maths"],
    username:"anjali123",
    password:"384728",
    city:"bangalore",

};


// let username=student.username;
// let password=student.password;
let {username,password,city="delhi"}=student;


























