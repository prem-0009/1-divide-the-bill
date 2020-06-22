function noTips(totalBill, noOfPeople){

    
    if(!noOfPeople){
        return totalBill + 0.2 * totalBill;
    } else {
        const perPerson = totalBill /noOfPeople;
        return perPerson.toFixed(2);
    }

    // return perPerson;
}

module.exports = noTips;