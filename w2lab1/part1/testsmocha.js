
describe("Sum", function(){
    it("Sum of the elements of an array", function(){
        assert.equal(sum([2,5,7]), 14);
    });
 });
    
    describe("Multiply", function(){
        it("Multiply of the elements of an array", function(){
            assert.equal(multiplyNums([2,5,7]), 70);
        });
    });

describe("Reverse", function(){
    it("Reverse of a string", function(){
        assert.equal(reverseStr('WAP is a fun'), 'nuf a si PAW');
    });    
});

describe("Filter Long Words", function () {
    it("Filter long words", function () {
        assert.deepEqual(filterLongWords(['rafsan', 'zaman', 'shaila', 'wap', 'is', 'fun'], 5), ['rafsan', 'shaila']);
    });
});
