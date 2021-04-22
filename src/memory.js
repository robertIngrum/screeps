const cleanDeadCreepMemory = () => {
  for(var name in Memory.creeps) {
    if(!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}

const memory = {
  clean: () => {
    cleanDeadCreepMemory();
  }
}

module.exports = memory;
