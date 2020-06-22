const payTheBill = require('./backend');
const payNoTips = require('./backend2');

const total = Number(getInput(0));
const percentage = Number(getInput(1));
const people = Number(getInput(2));
const fourthNo = Number(getInput(3));//if user inputs 4th no ..it'll o/p user to input correct input.
const peopleNoTips = Number(getInput(1));//made extra var peopleNoTips to make it easy for reading.

//created var for function to code easily
const calculate = payTheBill(total, percentage, people, fourthNo);
const calculateNoTips = payNoTips(total,peopleNoTips);



if (total && percentage && people && fourthNo){
    console.log( calculate);//function
}else if(total && percentage && people && !fourthNo){
    console.log("Each person pays: $"+calculate+", in total.");
} else if (total && peopleNoTips){
    console.log("Each person pays: $"+calculateNoTips+ "\nPlease pay your own tips.")
} else if (total){
    console.log("Could you pay with 20% tips: $"+calculateNoTips+", in total" );
}else if (!total){
    console.log(calculate);
} 









function getInput(i){
    return process.argv[i+2];
}