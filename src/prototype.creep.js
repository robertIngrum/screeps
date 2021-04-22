const behaviors = {
  harvest: () => {

  }
}

Creep.prototype.behaviors = behaviors;

Creep.prototype.harvestClosest = () => {
  if (this.store.getFreeCapacity() <= 0) {
    return;
  }

  var sources = this.room.find(FIND_SOURCES);
  sources = _.sortBy(sources, s => this.pos.getRangeTo(t));

  if (sources.length == 0) {
    return;
  }

  if(this.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    this.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
  }
};

Creep.prototype.storeClosest = () => {
  if (this.store[RESOURCE_ENERGY] == 0) {
    return;
  }

  var targets = this.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
      return (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN ||
              structure.structureType == STRUCTURE_TOWER) && 
              structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
    }
  });

  targets = _.sortBy(targets, t => this.pos.getRangeTo(t));

  if (targets.length == 0) {
    return;
  }

  if(this.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    this.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
  }
}