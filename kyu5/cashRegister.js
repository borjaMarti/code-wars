// freeCodeCamp JS & Algorithms Course
// Cash Register
// JavaScript:

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  const currency = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };
  const change = [];
  let rest = cash * 100 - price * 100;
  let totalCid = 0;

  for (let money of cid) {
    totalCid += money[1] * 100;
  }

  if (totalCid === rest) {
    return {
      status: "CLOSED",
      change: cid,
    };
  }

  for (let ammount of cid.reverse()) {
    let currentChange = [ammount[0], 0];
    let changeLeft = ammount[1] * 100;

    while (rest - currency[ammount[0]] >= 0 && changeLeft > 0) {
      currentChange[1] += currency[ammount[0]] / 100;
      changeLeft -= currency[ammount[0]];
      rest -= currency[ammount[0]];
    }

    if (currentChange[1]) change.push(currentChange);
  }

  return rest === 0
    ? {
        status: "OPEN",
        change: change,
      }
    : {
        status: "INSUFFICIENT_FUNDS",
        change: [],
      };
}
