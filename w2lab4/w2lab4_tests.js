describe("filter function in String.prototype", function () {
    it("Removes banned words from the string", function () {
      let input = "This house is not nice!";
      let expected = "This house is nice!";
      assert.equal(input.filter("not"), expected);
    });
  });
  
  describe("BubbleSort function in Array.prototype: ", function () {
    it("Sort [6,4,0, 3,-2,1] through bubble sort", function () {
      let input = [6, 4, 0, 3, -2, 1];
      let expected = [-2, 0, 1, 3, 4, 6];
      assert.equal(input.bubbleSort().join(), expected.join());
    });
  });