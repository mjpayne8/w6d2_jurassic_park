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

  it("should be able to remove a dinosaur",function(){
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[]);
  });

  it("should find all dinosaurs of species",function(){
    park.addDinosaur(dinosaur2);
    const actual = park.findSpecies('Steggasaurus');
    assert.deepStrictEqual(actual,[dinosaur2]);
  });

  it("should find the dinosaur with most visitors",function(){
    park.addDinosaur(dinosaur2);
    const actual = park.maxDinosaur()
    assert.strictEqual(actual,dinosaur1);
  });

  it("should find total daily visitors",function(){
    park.addDinosaur(dinosaur2);
    const actual = park.dailyVisitors();
    assert.strictEqual(actual,150);
  });

  it("should find total yearly visitors",function(){
    const actual = park.yearlyVisitors();
    assert.strictEqual(actual,36500);
  });

  it("should find total yearly takings",function(){
    const actual = park.yearlyTakings();
    assert.strictEqual(actual,36500*20);
  });

  it("should be able to remove a dinosaur species",function(){
    park.addDinosaur(dinosaur1);
    park.removeSpecies("T-Rex");
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[]);
  });

  it("should be able to count diet types of dinosaurs",function(){
    park.addDinosaur(dinosaur2);
    const actual = park.numberOfType();
    assert.strictEqual(actual.Carnivore,1);
    assert.strictEqual(actual.Herbivore,1);
    assert.strictEqual(actual.Omnivore,0);
  });

});
