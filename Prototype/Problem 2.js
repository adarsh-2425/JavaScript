//create a program that models a simple bank account

//defining object bankaccount
function BankAccount() {
    this.balance = 0;
}

//adding method deposit using prototype
BankAccount.prototype.deposit = function(value) {
    this.balance += value;
}

BankAccount.prototype.withdraw = function(value) {
    this.balance -= value;
}

BankAccount.prototype.checkBalance = function() {
    console.log(`Balance: ${this.balance}`)
}

//creating new instance of BankAccount object
const account = new BankAccount();

//depositing money
account.deposit(100);

//check balance
account.checkBalance();

//withdraw money
account.withdraw(50);

//check balance
account.checkBalance();
