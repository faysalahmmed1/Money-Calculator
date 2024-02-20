document.getElementById('Total-cost-button').addEventListener('click', function () {

    //Food Cost
    const FoodCost = document.getElementById('food-cost');
    const InputFoodCost = FoodCost.value;
    const NewInputFoodCost = parseFloat(InputFoodCost) || 0;

    // Rent Cost 
    const RentCost = document.getElementById('rent-cost');
    const InputRentCost = RentCost.value;
    const NewInputRentCost = parseFloat(InputRentCost) || 0;

    // Clothes Cost
    const ClothesCost = document.getElementById('clothes-cost');
    const InputClothesCost = ClothesCost.value;
    const NewInputClothesCost = parseFloat(InputClothesCost) || 0;

    //Total Expenses
    const NewTotalClothesCost = NewInputFoodCost + NewInputRentCost + NewInputClothesCost;
    const TotalClothesCost = document.getElementById('total-expenses');
    TotalClothesCost.innerText = NewTotalClothesCost;

    // Income
    const Income = document.getElementById('Income');
    const InputIncome = Income.value;
    const NewInputIncome = parseFloat(InputIncome) || 0;

    //Balance Total  
    const TotalBalance = document.getElementById('Balance-total');
    const NewBalance = NewInputIncome - NewTotalClothesCost;
    TotalBalance.innerText = NewBalance;


    // Save Amount Element
    const SaveAmountElement = document.getElementById('save-amount');
    const SaveAmount = 0.2 * NewInputIncome;
    SaveAmountElement.innerText = SaveAmount;

    //Remaining Balance
    const RemainingBalance = document.getElementById('remaining-Balance');
    const TotalRemaininBalance = NewBalance - SaveAmount;
    RemainingBalance.innerText = TotalRemaininBalance;
});



