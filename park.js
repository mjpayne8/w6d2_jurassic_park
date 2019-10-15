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

Park.prototype.findSpecies = function(species){
  let species_array = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      species_array.push(dinosaur);
    }
  }
  return species_array;
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

Park.prototype.dailyVisitors = function(){
  let total = 0;
  for (dinosaur of this.dinosaurs){
    total += dinosaur.visitors;
  }
  return total;
};

Park.prototype.yearlyVisitors = function(){
  return this.dailyVisitors()*365;
};

Park.prototype.yearlyTakings = function(){
  return this.yearlyVisitors()*this.price;
};

Park.prototype.removeSpecies = function(species){
  const species_array= this.findSpecies(species);
  for (dinosaur of species_array){
    this.removeDinosaur(dinosaur);
  }
};

module.exports = Park;
