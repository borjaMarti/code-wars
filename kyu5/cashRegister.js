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
  let change = [];
  let rest = cash * 100 - price * 100;
  let totalCid = 0;
  let insufficient = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  for (let money of cid) {
    totalCid += money[1] * 100;
  }

  if (totalCid === rest) {
    return {
      status: "CLOSED",
      change: cid,
    };
  } else if (close < rest) {
    return insufficient;
  }

  for (let [index, currency] of cid.reverse().entries()) {
    let currentChange;
    let changeLeft = currency[1] * 100;

    if (index === 0) {
      currentChange = ["ONE HUNDRED", 0];
      while (rest - 10000 >= 0 && changeLeft > 0) {
        currentChange[1] += 100;
        changeLeft -= 10000;
        rest -= 10000;
      }
    } else if (index === 1) {
      currentChange = ["TWENTY", 0];
      while (rest - 2000 >= 0 && changeLeft > 0) {
        currentChange[1] += 20;
        changeLeft -= 2000;
        rest -= 2000;
      }
    } else if (index === 2) {
      currentChange = ["TEN", 0];
      while (rest - 1000 >= 0 && changeLeft > 0) {
        currentChange[1] += 10;
        changeLeft -= 1000;
        rest -= 1000;
      }
    } else if (index === 3) {
      currentChange = ["FIVE", 0];
      while (rest - 500 >= 0 && changeLeft > 0) {
        currentChange[1] += 5;
        changeLeft -= 500;
        rest -= 500;
      }
    } else if (index === 4) {
      currentChange = ["ONE", 0];
      while (rest - 100 >= 0 && changeLeft > 0) {
        currentChange[1] += 1;
        changeLeft -= 100;
        rest -= 100;
      }
    } else if (index === 5) {
      currentChange = ["QUARTER", 0];
      while (rest - 25 >= 0 && changeLeft > 0) {
        currentChange[1] += 0.25;
        changeLeft -= 25;
        rest -= 25;
      }
    } else if (index === 6) {
      currentChange = ["DIME", 0];
      while (rest - 10 >= 0 && changeLeft > 0) {
        currentChange[1] += 0.1;
        changeLeft -= 10;
        rest -= 10;
      }
    } else if (index === 7) {
      currentChange = ["NICKEL", 0];
      while (rest - 5 >= 0 && changeLeft > 0) {
        currentChange[1] += 0.05;
        changeLeft -= 5;
        rest -= 5;
      }
    } else if (index === 8) {
      currentChange = ["PENNY", 0];
      while (rest - 1 >= 0 && changeLeft > 0) {
        currentChange[1] += 0.01;
        changeLeft -= 1;
        rest -= 1;
      }
    }

    if (currentChange[1]) change.push(currentChange);
  }

  return rest === 0
    ? {
        status: "OPEN",
        change: change,
      }
    : insufficient;
}
