
let username = prompt("what is your name");
let height = prompt("what is your height in cm");
let weight = prompt("what is your weight in kg");

function calcBMI(height, weight){
    return(weight / height ** 2) *10000
}
const bmi = calcBMI();
console.log ("bmi");

function rangeBMI(bmi){
    if(bmi <= 18.5){
        return "ur underweight go eat!";
    }
    else if(bmi >=18.5 && bmi <=24.99999){
        return "wow ur so healthy!";
    }
    else if(bmi <=29.99999 && bmi >=25){
        return "u a bit big! just a bit!";
    }
    else if(bmi >=30){
        return "ur obese go on a diet!";
    }
}
BMI = calcBMI

