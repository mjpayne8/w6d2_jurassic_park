const assert = require("assert");
const Dinosaur = require("../dinosaur.js");
const Park = require("../park.js");

describe("Park", function(){

  let dinosaur1;
  let dinosaur2;
  let park;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("T-Rex","Carnivore",100);
    dinosaur2 = new Dinosaur("Steggasaurus","Herbivore",50);
    park = new Park("Jurassic Park", 20, [dinosaur1]);
  });

  it("should have a name",function(){
    const actual = park.name;
    assert.strictEqual(actual,"Jurassic Park");
  });

  it("should have ticket price",function(){
    const actual = park.price;
    assert.strictEqual(actual,20);
  });

  it("should have a list of dinosaurs",function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dinosaur1]);
  });

  it("should be able to add a dinosaur",function(){
    park.addDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[dinosaur1,dinosaur2]);
  });

});
