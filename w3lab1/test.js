describe("class SavingsAccount, methods tests", function(){
    it("addInterest() to savings amount 100, interest rate 10.", function(){
        const acc = new SavingsAccount(this.nextNumber, 10);
        acc.deposit(100);
        const expected = 100 * 10 / 100; //balance * interest / 100
        assert.equal(acc.addInterest(),  expected);
    });

});

describe("class CheckingAccount, methods test ", function(){
    it("withdraw() to check overdraft -50 when overdraft limit is 100",function(){
        const acc = new CheckingAccount(1, 100);
        acc.deposit(100);
        acc.withdraw(150);
        assert.equal(acc.getBalance(), -50);
    })
});

describe("class Bank, methods test ", function() {
    it("accountReport() prints all accounts", function() {
        const bank = new Bank();
        bank.addAccount();
        bank.addCheckingAccount(100);
        bank.addSavingsAccount(10);
        const str = bank.accountReport();
        assert.equal(str, str);
    })

    it("endOfMonth() prints all accounts endOfMonths()", function() {
        const bank = new Bank();
        bank.addAccount();
        bank.addCheckingAccount(100);
        bank.addSavingsAccount(10);
        const str = bank.endOfMonth();
        assert.equal(str, str);
    })
});