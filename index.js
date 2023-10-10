const username = prompt("what is your name");
const height = prompt("what is your height in cm");
const weight = prompt("what is your weight in kg");

function calcBMI(height, weight){
    return(weight / height ** 2) *10000

    if(bmi <= 18.5){
        return "ur underweight go eat!";
    }
    else if(bmi >=30){
        return "ur obese go on a diet!"
    }
}
BMI = calcBMI
console.log ("bmi")
