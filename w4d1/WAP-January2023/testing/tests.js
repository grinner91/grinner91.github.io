describe("A function named add", ()=>{
    it("Takes two inputs and sums them", ()=>{
        assert.equal(add(2,4),6);
        assert.equal(add(4,9), 13);
        assert.equal(add('4',9), 49);
    });
    it("Takes two inputs and doesn't subtract them",()=>{
        assert.notEqual(add(2,4), -2);
        assert.notEqual(add(6,3), "James");
    });
});

describe("Function 'multiply'", ()=>{
    it("Takes two inputs and returns the sum of those inputs", ()=>{
        assert.equal(multiply(2,4), 8);
        assert.notEqual(multiply(2,8), 8);
    });
});