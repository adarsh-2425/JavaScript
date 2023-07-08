/*"Write a JavaScript function that takes a withdrawal amount and calculates the new balance after deducting the withdrawal amount 
and a bank charge of 0.5 from an initial balance of 100. The function should return an error message if the withdrawal amount is not a multiple of 5 
or if there is not enough balance to complete the transaction. 
Otherwise, it should return a success message with the new balance. Bonus points if you can make the bank charge configurable."*/

const BANK_CHARGE = 0.50;

const transaction = (withdrawal) => {
    let balance = 100;
    
    if(withdrawal % 5 !== 0) {
        return 'Amount must be a multiple of 5';
    } else if (withdrawal + BANK_CHARGE > balance) {
        return 'Not enough balance';
    } else {
        balance -= withdrawal + BANK_CHARGE;
        return `Transaction of amount ${withdrawal} completed. New balance ${balance}`;
    }
}

const withdrawal = 20;
const atm = transaction(withdrawal);
console.log(atm);
