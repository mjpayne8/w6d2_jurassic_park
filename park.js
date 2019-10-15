const Park = function(name,price,dinosaurs){
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(new_dinosaur){
  this.dinosaurs.push(new_dinosaur);
};

module.exports = Park;
