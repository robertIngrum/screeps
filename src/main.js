var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var spawn = require('spawn');

const clearOldCreepMemory = () => {
  for(var name in Memory.creeps) {
    if(!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log('Clearing non-existing creep memory:', name);
    }
  }
}

// TODO: this needs work, and likely to be moved out of this file
const towerLogic = () => {
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

const runRoleForCreep = (creep) => {
  switch (creep.memory.role) {
    case "harvester":
      roleHarvester.run(creep);
      break;
    case "upgrader":
      roleUpgrader.run(creep);
      break;
    case "builder":
      roleBuilder.run(creep);
      break;
  }
}

module.exports.loop = function () {
  clearOldCreepMemory();
  spawn.run();
  towerLogic();

  for(var name in Game.creeps) {
    runRoleForCreep(Game.creeps[name]);
  }
}