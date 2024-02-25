function ProductCost(cost) {
    const Cost = document.getElementById(cost);
    const InputCost = Cost.value;
    const NewInputCost = parseFloat(InputCost);
    return NewInputCost;
};

function UpdateBalance(Balance, amount) {
    const InputBalance = document.getElementById(Balance);
    const NewBalance = Income - amount;
    InputBalance.innerText = NewBalance;
}

document.getElementById('Total-cost-button').addEventListener('click', function () {

    //Food Cost
    const foodCost = ProductCost('food-cost');

    // Rent Cost 
    const RentCost = ProductCost('rent-cost');

    // Clothes Cost
    const ClotheCost = ProductCost('clothes-cost');

    //Total Expenses
    const NewTotalClothesCost = foodCost + RentCost + ClotheCost;
    const TotalClothesCost = document.getElementById('total-expenses');
    TotalClothesCost.innerText = NewTotalClothesCost;

    // Income
    const Income = ProductCost('Income')

    //Balance Total  
    const TotalBalance = document.getElementById('Balance-total');
    const NewBalance = Income - NewTotalClothesCost;
    TotalBalance.innerText = NewBalance;



    // Save Amount Element
    const SaveAmountElement = document.getElementById('save-amount');
    const SaveAmount = 0.2 * Income;
    SaveAmountElement.innerText = SaveAmount;

    //Remaining Balance
    const RemainingBalance = document.getElementById('remaining-Balance');
    const TotalRemaininBalance = NewBalance - SaveAmount;
    RemainingBalance.innerText = TotalRemaininBalance;

});



