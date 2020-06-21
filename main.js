const payTheBill = require('./backend');
const payNoTips = require('./backend2');

const total = Number(getInput(0));
const percentage = Number(getInput(1));
const people = Number(getInput(2));
const erro = Number(getInput(3));
const peopleNoTips = Number(getInput(1));

const calculate = payTheBill(total, percentage, people, erro);
const calculateNoTips = payNoTips(total,peopleNoTips);

if (total && percentage && people && erro){
    console.log( calculate);
}
else if(total && percentage && people && !erro){
    console.log("Each person pays: "+calculate);
} else if (total && peopleNoTips){
    console.log("Each person pays: "+calculateNoTips+ "\nPlease pay your own tips.")
} else if (total){
    console.log("You pay with 20% tips: $"+calculateNoTips );
}else {
    console.log(`Please enter the total bill, tip percentage \nand total number of people.
    OR \nPlease enter the total bill, and total numbers of people,\n if you want to pay the tips separately.`)
}





function getInput(i){
    return process.argv[i+2];
}