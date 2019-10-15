const Park = function(name,price,dinosaurs){
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function(new_dinosaur){
  this.dinosaurs.push(new_dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur_to_remove){
  const dino_index = this.dinosaurs.indexOf(dinosaur_to_remove);
  this.dinosaurs.splice(dino_index,1);
};

module.exports = Park;
