const harvest = (creep) => {
  if (creep.store.getFreeCapacity() <= 0) {
    return;
  }
  
  var sources = creep.room.find(FIND_SOURCES);
  if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
    creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
  }
};

module.exports = harvest;
