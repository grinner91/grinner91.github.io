/*


Create a CheckingAccount class by extending Account. In addition to the attributes of an Account, it should have an overdraft limit variable. The overdraft amount indicates how much a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the amount that an account is allowed to go into the red (negative balance). Be sure to set this value in the constructor and create a getter and a setter for it. Also make sure that you override the withdraw(amount) method and the toString() method. Test with Mocha / Chai tests

*/

class CheckingAccount extends Account {
    constructor(num, overdraftLimit) {
        super(num);
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    setOverdraftLimit(value) {
        this._overdraftLimit = value;
    }


    withdraw(amount) {
        // if (amount <= 0) {
        //     throw new RangeError("Withdraw amount has to be greater than zero");
        // }
        // if (amount > this._balance) {
        //     throw Error("Insufficient funds");
        // }
        // this._balance -= amount;
     
        let currentBalance = this._balance - amount;
        if(currentBalance < (-1 * this._overdraftLimit)) {
            throw new RangeError("Withdraw amount has to be within overdraft limit: " + this._overdraftLimit);
        } else {
            this._balance -= amount;
        }
    }

    toString() {
        return super.toString() + ", overdraft limit: " + this._overdraftLimit;
    }

    endOfMonth() {
       if(this.getBalance() <= this._overdraftLimit) 
            return "Warning, low balance CheckingAccount "+ this.getNumber()
            +": balance: " + this.getBalance()
            + " overdraft limit: " + this._overdraftLimit;
        else 
            return  "CheckingAccount "+ this.getNumber()
            +": balance: " + this.getBalance()
            + " overdraft limit: " + this._overdraftLimit;
    }

}

