const tower = {
  run: () => {
    var tower = Game.getObjectById('68d2fc4d6f707e7b9c883b4f');
    if(tower) {
      var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
      });
      if(closestDamagedStructure) {
        tower.repair(closestDamagedStructure);
      }
  
      var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
      if(closestHostile) {
        tower.attack(closestHostile);
      }
    }
  }
}

module.exports = tower;
