const unitCounts = {
  harvester: {
    targetCount: 3,
    components: [WORK,WORK,CARRY,CARRY,MOVE,MOVE],
  },
  builder: {
    targetCount: 2,
    components: [WORK,CARRY,MOVE],
  },
  upgrader: {
    targetCount: 5,
    components: [WORK,WORK,WORK,CARRY,MOVE,MOVE,MOVE],
  },
};

const constructUnit = (role, data) => {
  var newName = role + Game.time;
  Game.spawns['Spawn1'].spawnCreep(
    data.components,
    newName,
    { memory: { role: role } }
  );
}

const showSpawnMessage = () => {
  if(!Game.spawns['Spawn1'].spawning) { return }

  var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
  Game.spawns['Spawn1'].room.visual.text(
    '🛠️' + spawningCreep.memory.role,
    Game.spawns['Spawn1'].pos.x + 1, 
    Game.spawns['Spawn1'].pos.y, 
    {align: 'left', opacity: 0.8}
  );
};

const logUnitCounts = () => {
  let counts = {};

  for (role of Object.keys(unitCounts)) {
    var units = _.filter(Game.creeps, (creep) => creep.memory.role == role);
    counts[role] = units.length;
  }

  console.log(
    Object.entries(counts).map(([role, count]) => {
      const expectedCount = unitCounts[role].targetCount;

      return `${role}: ${count}/${expectedCount}`
    }).join('; ')
  );
}

var spawn = {
  run: function() {
    for(const [role, data] of Object.entries(unitCounts)) {
      var units = _.filter(Game.creeps, (creep) => creep.memory.role == role);

      if (units.length < data.targetCount) {
        constructUnit(role, data);
      }
    }

    // showSpawnMessage();
    logUnitCounts();
  }
};

module.exports = spawn;
