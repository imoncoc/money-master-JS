// Elements
const incomeField = document.querySelector("#income-field");
const foodField = document.querySelector("#food-field");
const rentField = document.querySelector("#rent-field");
const clothesField = document.querySelector("#clothes-field");
const btnCalculate = document.querySelector("#btn-calculate");
const totalExpensesBtn = document.querySelector("#total-expenses-btn");
const totalBalancesBtn = document.querySelector("#total-balances-btn");

const saveIncomeField = document.querySelector("#save-income-field");
const saveBtn = document.querySelector("#save-btn");
const totalSaving = document.querySelector("#total-saving");
const totalRemaining = document.querySelector("#total-remaining");

let sumOfTotalExpenses;

btnCalculate.addEventListener("click", function () {
  const incomeAmount = parseInt(incomeField.value);
  const foodAmount = parseInt(foodField.value);
  const rentAmount = parseInt(rentField.value);
  const clothesAmount = parseInt(clothesField.value);

  if (isNaN(incomeAmount) || incomeAmount < 0) {
    alert("Please input Valid Income Amount");
    return;
  } else if (isNaN(foodAmount) || foodAmount < 0) {
    alert("Please input Valid Food Amount");
    return;
  } else if (isNaN(rentAmount) || rentAmount < 0) {
    alert("Please input Valid Rent Amount");
    return;
  } else if (isNaN(clothesAmount) || clothesAmount < 0) {
    alert("Please input Valid Clothes Amount");
    return;
  }
  // Calculate Total expenses
  sumOfTotalExpenses = foodAmount + rentAmount + clothesAmount;

  if (incomeAmount < sumOfTotalExpenses) {
    alert("Please reduce Your expense and Try Again");
    return;
  }
  // Total Expenses Updated
  totalExpensesBtn.innerText = sumOfTotalExpenses;

  //  Balances Updated
  totalBalancesBtn.innerText = incomeAmount - sumOfTotalExpenses;
});





//   Save Button
saveBtn.addEventListener("click", function () {
  const saveIncomeAmount = parseInt(saveIncomeField.value);
  if (saveIncomeAmount > 100){
    alert("You can't save more then 100%");
    return;
  }
    if (isNaN(saveIncomeAmount) || saveIncomeAmount < 0) {
      alert("Please input Valid Income Amount");
      return;
    }

  const incomeAmount = parseInt(incomeField.value);
  if(isNaN(incomeAmount) ||  incomeAmount === 0){
    alert("Please enter your income first");
    return;
  }
  


  // Set the Saving Amount Value
  totalSavingAmount = incomeAmount * (0.01 * saveIncomeAmount);

  if ((sumOfTotalExpenses + totalSavingAmount) > incomeAmount) {
    alert(
      "Please Reduce your Expenses to save money or reduce your saving amount"
    );
    return;
  }

  totalSaving.innerText = totalSavingAmount;
  // Set the Remaining Amount value
  totalRemaining.innerText =
    incomeAmount - (totalSavingAmount + sumOfTotalExpenses);
});
