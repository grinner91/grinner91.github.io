/*
Extend the Account class by creating a class called SavingsAccount in a file called savingsaccount.js. 
In addition to the attributes of Account, SavingsAccount should have an interest variable, 
which is set in the constructor and has a getter and a setter mehtod. 
It should also have an addInterest() method which deposits the interest amount into the account. 
The calculation for the amount is balance * interest / 100 . 
Be sure to also overwrite the toString() method, and create Mocha / Chai 
tests for the methods in SavingsAccount. 
You do not have to test the methods that SavingsAccount receives from Account, 
since they’ve already been tested in Account.

*/

class SavingsAccount extends Account {
    constructor(num, interest) {
        super(num);
        this._interest = interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(value) {
        this._interest = value;
    }

    addInterest() {
        let amount = this.getBalance() * this._interest / 100;
        super.deposit(amount);
        return amount;
    }

    toString() {
        return super.toString() + ", intereset rate: " + this._interest;
    }

    endOfMonth() {
       
        const amount = this.addInterest();

        return "Interest added SavingsAccount " + this.getNumber() 
        + ": balance: " + this.getBalance() 
        +" interest: " + amount;
    }
}