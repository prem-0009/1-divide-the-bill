function divideTheBill(totalBill, tipPercentage, noOfPeople, fourthNo){
  if(fourthNo){
    return "Please enter the numbers in correct format. \n1. Total bill\n2. Tip percentage \n3. Numbers of people \nAnd that's it, don't put the fourth number."
  } else if(!totalBill){
    return "Please enter the numbers in correct format. \n1. Total bill\n2. Tip percentage \n3. Numbers of people \nAnd that's it, don't put the fourth number."
  }else {
    const perPerson = (totalBill + (tipPercentage/100) * totalBill) / noOfPeople;
  return perPerson.toFixed(2);
  }


}




module.exports = divideTheBill;