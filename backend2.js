function noTips(totalBill, noOfPeople){
    const perPerson = totalBill /noOfPeople;
    return perPerson;
}

module.exports = noTips;