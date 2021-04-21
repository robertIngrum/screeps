var roleHarvester = require('role.harvester');

module.exports.loop = function () {
  // Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

  for(var name in Game.creeps) {
    var creep = Game.creeps[name];
    
    roleHarvester.run(creep);
  }
}
