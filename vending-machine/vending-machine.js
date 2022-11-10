"use strict";
exports.__esModule = true;
/** Implement your vending machine here! */
/**
 * Represents a vending machine calculations.
 * @constructor
 * @param {number} payment - The amount paid for item in vending machine.
 * @param {number} cost - The cost of item paid for in vending machine.
 */

var node_process_1 = require("node:process");
var arg = null;
var cost = null;
var payment = null;
while ((arg = node_process_1["default"].argv.shift()) != null) {
    if (arg == '--item-cost') {
        var costInput = node_process_1["default"].argv.shift();
        cost = Math.floor(Number(costInput || '0') * 100);
    }
    else if (arg == '--payment') {
        var paymentInput = node_process_1["default"].argv.shift();
        payment = Math.floor(Number(paymentInput || '0') * 100);
    }
}
console.error('--item-cost', cost);
console.error('--payment', payment);
/** Narrow cost to a number. */
if (cost == null) {
    console.error('--item-cost is required but not provided. Exiting.');
    node_process_1["default"].exit(1);
}
if (payment == null) {
    console.error('--payment is required but not provided. Exiting.');
    node_process_1["default"].exit(2);
}
var getChange = function (payment, cost) {
    /** calculate change */
    var change = (payment - cost);
    console.log("Your total change from vending machine is ".concat(change, " cents.\n                \uD83D\uDFE5\uD83D\uDFE5\uD83D\uDFE5\uD83D\uDFE5\n                \uD83D\uDFE5\uD83C\uDF6C\uD83E\uDD64\uD83D\uDD22\n                \uD83D\uDFE5\uD83E\uDDC3\uD83C\uDF6D\uD83D\uDCB3\n                \uD83D\uDFE5\u2B1B\u2B1B\uD83D\uDFE5\n                \uD83D\uDFE5\u2B1C\u2B1C\uD83D\uDFE5 "));
    /** run through change amount and return correct change amount in currency */
    if (change > 24) {
        console.log("Your change total change includes\n        ".concat(Math.floor(change / 25), " quarters"));
        change = change % 25;
    }
    if (change > 9) {
        console.log("        ".concat(Math.floor(change / 10), " dimes"));
        change = change % 10;
    }
    if (change > 4) {
        console.log("        ".concat(Math.floor(change / 5), " nickels"));
        change = change % 5;
    }
    if (change > 0) {
        console.log("    and ".concat(Math.floor(change / 1), " pennies back for your change \uD83D\uDCB0."));
        change = change % 1;
    }
};
/**
call function with params
*/
getChange(payment, cost);
