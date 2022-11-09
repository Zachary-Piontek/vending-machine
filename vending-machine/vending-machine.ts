// Implement your vending machine here!
import process from 'node:process'

// console.log(process.argv)

let arg = null
let cost = null
let payment = null

while((arg = process.argv.shift()) != null) {
  if(arg == '--item-cost') {
    const costInput = process.argv.shift()
    cost = Math.floor(Number(costInput || '0') * 100)
  } else if(arg == '--payment') {
    const paymentInput = process.argv.shift()
    payment = Math.floor(Number(paymentInput || '0') * 100)
  }
}

console.error('--item-cost', cost)
console.error('--payment', payment)

// Narrow cost to a number.
if(cost == null) {
  console.error('--item-cost is required but not provided. Exiting.')
  process.exit(1)
}
if(payment == null) {
  console.error('--payment is required but not provided. Exiting.')
  process.exit(2)
}

const getChange = function(payment: number, cost: number) {
    let change = (payment - cost);
    console.log(`Your total change amount is ${change} cents.`);
    if (change > 24) {
        console.log(`You recieve ${Math.floor(change/25)} quarters,`);
        change = change - 25;
    }
    if (change > 9) {
        console.log(`${Math.floor(change/10)} dimes,`);
        change = change - 10;
    }
    if (change > 4) {
        console.log(`${Math.floor(change/5)} nickels,`);
        change = change - 5;
    if (change > 0) {
        console.log(`and ${Math.floor(change/1)} pennies back for your change.`);
        change = change - 1;
    }
    }
}

getChange(payment, cost);