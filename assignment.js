class BankAccount {
  constructor(accountNumber, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount, balance: this.balance });
    console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
    this.transactions.push({ type: 'Withdraw', amount, balance: this.balance });
    console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
  }

  transfer(amount, targetAccount) {
    if (!(targetAccount instanceof BankAccount)) {
      console.log("Invalid target account.");
      return;
    }
    if (amount <= 0) {
      console.log("Transfer amount must be positive.");
      return;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return;
    }

    this.withdraw(amount);
    targetAccount.deposit(amount);
    this.transactions.push({ type: 'Transfer Out', amount, balance: this.balance });
    targetAccount.transactions.push({ type: 'Transfer In', amount, balance: targetAccount.balance });
    console.log(`Transferred ₹${amount} to account ${targetAccount.accountNumber}.`);
  }

  addInterest(rate) {
    if (rate <= 0) {
      console.log("Interest rate must be positive.");
      return;
    }
    const interest = (this.balance * rate) / 100;
    this.balance += interest;
    this.transactions.push({ type: 'Interest', amount: interest, balance: this.balance });
    console.log(`Interest of ₹${interest.toFixed(2)} added. New balance: ₹${this.balance}`);
  }

  getAccountDetails() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
      transactions: this.transactions
    };
  }
}

const account1 = new BankAccount('123456', 5000);
const account2 = new BankAccount('654321', 10000);

account1.deposit(2000);
account1.withdraw(1000);
account1.withdraw(8000);
account1.transfer(1500, account2);
account1.addInterest(5);
account2.addInterest(9);

console.log(account1.getAccountDetails());
console.log(account2.getAccountDetails());
