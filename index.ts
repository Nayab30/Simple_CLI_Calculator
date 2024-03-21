#! /usr/bin/env node
import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    message :"Enter first number",
    type:"number",
    name:"firstNumber"});
    const input2 = await inquirer.prompt({
    message :"Enter Second number",
    type:"number",
    name:"secondNumber"});
    const input3 = await inquirer.prompt({
        message :"Select any one operator to perform action",
        type:"list",
        name:"operator", 
        choices:["Addition","Subtraction","Multiplication","Division"] });

 //Conditional Statement
 if (input3. operator === "Addition"){
    console.log(`Your answer is : ${input1.firstNumber + input2.secondNumber}`);
 } else if  (input3. operator === "Subtraction"){
    console.log(`Your answer is : ${input1.firstNumber - input2.secondNumber}`);}
   else if  (input3. operator === "Multiplication"){
        console.log(`Your answer is : ${input1.firstNumber * input2.secondNumber}`);}
   else if  (input3. operator === "Division"){
            console.log(`Your answer is : ${input1.firstNumber / input2.secondNumber}`);}
     else {
        console.log("Please select valid operator")
     }       




    

