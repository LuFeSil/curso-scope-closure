//Sin closures
//#region
function moneyBox(coins) {
  let savedCoins = 0;
  savedCoins += coins;
}

moneyBox(5);
moneyBox(5);
//#endregion

// Con Closures
//#region
function moneyBox() {
  let savedCoins = 0;

  return function saveCoins(coins) {
    savedCoins += coins;
    console.log(`MoneyBox: $${savedCoins}`);
  };
}

const mySavedMoney = moneyBox();

mySavedMoney(5);
mySavedMoney(5);
mySavedMoney(15);

const annasMoneyBox = moneyBox();

annasMoneyBox(10);
annasMoneyBox(3);
annasMoneyBox(5);
//#endregion
