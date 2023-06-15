/*Create an object called bankAccount with a property balance, and a setter method deposit that adds a specified amount of money to the balance. 
The deposit method should only accept positive numbers as input, and should throw an error if a negative number is provided.*/

const bankAccount = {
  _balance: 0,
  get balance() {
    return this._balance;
  },
  set deposit(amount) {
    if (amount < 0) {
      throw new Error ('Deposit must be positive');
    }
    this._balance = amount;
  }
};

console.log(bankAccount._balance);
bankAccount.deposit = 100;
console.log(bankAccount._balance);
//bankAccount.deposit = -50;
//console.log(bankAccount._balance);
