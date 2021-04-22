const actions = require("actions");
const roles   = require("roles");
const spawn   = require('spawn');

const clearOldCreepMemory = () => {
  for(var name in Memory.creeps) {
    if(!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}

const runRoleForCreep = (creep) => {
  switch (creep.memory.role) {
    case "harvester":
      roles.harvester.run(creep);
      break;
    case "upgrader":
      roles.upgrader.run(creep);
      break;
    case "builder":
      roles.builder.run(creep);
      break;
  }
}

module.exports.loop = function () {
  actions.log();

  clearOldCreepMemory();
  spawn.run();
  roles.tower.run();

  for(var name in Game.creeps) {
    runRoleForCreep(Game.creeps[name]);
  }
}