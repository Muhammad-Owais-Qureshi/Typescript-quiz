#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log("============================================================")
console.log(chalk.bold.blue("============:Well come to quiz compitaion==================="))
console.log("============================================================")
const Test:{
    quistion_1:string
    quistion_2:string
    quistion_3:string
    quistion_4:string
    quistion_5:string
    quistion_6:string
    quistion_7:string
    quistion_8:string
    quistion_9:string
    quistion_10:string

}= await inquirer.prompt([
    {
        name:"quistion_1",
        type:'list',
        message:'Q_1 What are the three main "simple types" in TypeScript?',
        choices:["object,number,string","boolean,number,string","object,Array,string","object,symbol,string"],

    },
    {
    name:"quistion_2",
    type:'list',
    message:"Q_2 What type of assignment is this variable, `const fullName: string = 'Dylan';`?",
    choices:["Implicit","Explicit"]
    },
    {
    name:"quistion_3",
    type:'list',
    message:"Q_3 True or False: TypeScript can always correctly infer a variables type.",
    choices:["True","False"]
    },
    {
    name:"quistion_4",
    type:'list',
    message:"Q_4 ______ is similar to 'any', but a safer alternative when uncertain about the type.",
    choices:["unknow","any","never"]
    },
    {
    name:"quistion_5",
    type:'list',
    message:"Q_5 What is the inherited type for the variable example in `const example = ['Dylan']`?",
    choices:["unknow[]","any[]","string[]",'string']
    },
    {
    name:"quistion_6",
    type:'list',
    message:"Q_6 True or False: TypeScript will always correctly infer the type of an array.",
    choices:["ture","false"]
    },
    {
    name:"quistion_7",
    type:'list',
    message:"Q_7 True or False: a Tuple and an Array are the same thing when discussing types",
    choices:["ture","false"]
    },
    {
    name:"quistion_8",
    type:'list',
    message:"Q_8 Type Aliases are mostly used with ______.",
    choices:["boolean","number","string"]
    },
    {
    name:"quistion_9",
    type:'list',
    message:"Q_9 True or False: Interfaces are similar to type aliases, but only for object types?",
    choices:["ture","false"]
    },
    {
    name:"quistion_10",
    type:'list',
    message:"Q_10 What are the two types of enums?",
    choices:["number and number array","number and booleans","number and string","string and booleans"]
    },

])

let score:number = 0;


switch(Test.quistion_1){
    case"boolean,number,string":
    console.log(chalk.green("1: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("1: Incorrect answer"))
}
switch(Test.quistion_2){
    case"Explicit":
    console.log(chalk.green("2: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("2: Incorrect answer"))
}
switch(Test.quistion_3){
    case"False":
    console.log(chalk.green("3: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("3: Incorrect answer"))
}
switch(Test.quistion_4){
    case"unknow":
    console.log(chalk.green("4: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("4: Incorrect answer"))
}
switch(Test.quistion_5){
    case"string[]":
    console.log(chalk.green("5: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("5: Incorrect answer"))
}
switch(Test.quistion_6){
    case"false":
    console.log(chalk.green("6: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("6: Incorrect answer"))
}
switch(Test.quistion_7){
    case"false":
    console.log(chalk.green("7: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("7: Incorrect answer"))
}
switch(Test.quistion_8){
    case"string":
    console.log(chalk.green("8: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("8: Incorrect answer"))
}
switch(Test.quistion_9){
    case"ture":
    console.log(chalk.green("9: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("9: Incorrect answer"))
}
switch(Test.quistion_10){
    case"number and string":
    console.log(chalk.green("10: Correct answer"))
    ++score;
    break;
    default:
        console.log(chalk.red("10: Incorrect answer"))
}
console.log(chalk.bold.blue`Your score is :${score}`)