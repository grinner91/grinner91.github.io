/*

Next create a Bank class, a Bank object should have an array of Account objects, and have addAccount(), addSavingsAccount(interest), addCheckingAccount(overdraft) methods each of which returns the number of the created account. Also add a closeAccount(number) method that closes (removes from the array) the account with that number, and a accountReport() method that returns a
 
String with each account on its own line. Use a static nextNumber variable on the Bank class to know what the number for the next account will be. Create Mocha / Chai tests to ensure that everything is working.

*/


class Bank {

    constructor() {
        this._accounts = [];
        this.nextNumber = 0;
    }

    addAccount() {
        this.nextNumber +=1;
        const acc  = new Account(this.nextNumber);
        acc.deposit(200);
        this._accounts.push(acc);
        return this.nextNumber;
    }

    addSavingsAccount(interest) {
        this.nextNumber +=1;
        const acc = new SavingsAccount(this.nextNumber, interest);
        acc.deposit(100);
        this._accounts.push(acc);
        return this.nextNumber;
    }

    addCheckingAccount(overdraft) {
        this.nextNumber +=1;
        const acc = new CheckingAccount(this.nextNumber, overdraft);
        acc.deposit(100);
        this._accounts.push(acc);
        return this.nextNumber;
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter( x => x.getNumber() != number);
    }

    accountReport() {
        //this._accounts.forEach(x => console.log(x.toString()));
        return this._accounts.reduce((acc, x) => acc + ",\n" + x.toString());
    }

    endOfMonth() {
        //this._accounts.forEach(x => console.log(x.endOfMonth()))
        return this._accounts.reduce((acc, x) => acc + ", \n" + x.endOfMonth());
    }

}

const bank = new Bank();
bank.addAccount();
bank.addCheckingAccount(100);
bank.addSavingsAccount(10);

console.log("........accounts report()..............");

console.log(bank.accountReport());

console.log("........account endOfMoth()..............");

console.log(bank.endOfMonth());