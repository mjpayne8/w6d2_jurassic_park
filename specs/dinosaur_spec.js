const assert = require("assert");
const Dinosaur = require("../dinosaur.js")

describe("Dinosaur", function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("T-Rex","Carnivore",100)
  });

  it("should have a species",function(){
    const actual = dinosaur.species;
    assert.strictEqual(actual, "T-Rex");
  });

  it("should have a type", function() {
    const actual = dinosaur.type;
    assert.strictEqual(actual, "Carnivore");
  });

  it("attracts a number of visitors", function(){
    const actual = dinosaur.visitors;
    assert.strictEqual(actual, 100);
  });

});
