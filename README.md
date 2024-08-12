<div align="center">
  <h1>Bank</h1>
</div>

## Overview

The `BankAccount` class is a simple implementation of a bank account in JavaScript. It supports basic banking operations such as deposits, withdrawals, transfers, and interest calculations. Additionally, it maintains a transaction history for tracking all changes to the account.

## Features

- **Deposit:** Add money to the account.
- **Withdraw:** Remove money from the account, ensuring sufficient funds are available.
- **Transfer:** Move money from one account to another.
- **Add Interest:** Calculate and add interest to the account balance.
- **Get Account Details:** Retrieve account information including balance and transaction history.

## Usage

### Creating Accounts

```javascript
const account1 = new BankAccount('123456', 5000);
const account2 = new BankAccount('654321', 10000);
