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

Park.prototype.findType = function(type){
  let type_array = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.type === type){
      type_array.push(dinosaur);
    }
  }
  return type_array;
};

Park.prototype.maxDinosaur = function() {
  let max_dinosaur = this.dinosaurs[0]
  for(dinosaur of this.dinosaurs){
    if(dinosaur.visitors > max_dinosaur.visitors){
      max_dinosaur = dinosaur;
    }
  }
  return max_dinosaur;
};

module.exports = Park;
