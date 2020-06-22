function divideTheBill(totalBill, tipPercentage, noOfPeople, fourthNo){
  if(fourthNo){
    return "input the numbers in correct format. \ntotal bill\ntip percentage \nno of people \nand that's it\ndon't put the fourth number."
  } else {
  
  const perPerson = (totalBill + (tipPercentage/100) * totalBill) / noOfPeople;
  return perPerson.toFixed(2);
  }


}

 const z=divideTheBill(100,20,2);
 z;



module.exports = divideTheBill;