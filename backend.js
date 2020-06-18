function divideTheBill(totalBill, tipPercentage, noOfPeople){
  const perPerson = (totalBill + (tipPercentage/100) * totalBill) / noOfPeople;
  return Math.round(perPerson);
}

 const z=divideTheBill(100,20,2);
 z;



module.exports = divideTheBill;