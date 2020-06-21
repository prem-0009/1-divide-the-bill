function noTips(totalBill, noOfPeople){

    
    if(!noOfPeople){
        return totalBill + 0.2 * totalBill;
    } else {
        const perPerson = totalBill /noOfPeople;
        return perPerson;
    }

    // return perPerson;
}

module.exports = noTips;