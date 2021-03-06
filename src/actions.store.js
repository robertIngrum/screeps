const store = (creep) => {
  if (creep.store[RESOURCE_ENERGY] == 0) {
    return;
  }

  var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_TOWER) && 
              structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
    }
  });

  targets = _.sortBy(targets, t => creep.pos.getRangeTo(t));
  if (targets.length > 0) {
    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
    }
  }
};

module.exports = store;