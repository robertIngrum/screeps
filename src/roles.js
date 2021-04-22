const runForCreep = (creep) => {
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
};

const runForAllCreeps = () => {
  for(var name in Game.creeps) {
    runForCreep(Game.creeps[name]);
  }
};

const roles = {
  meta: {
    runForAllCreeps: runForAllCreeps,
  },
  builder:   require("roles.builder"),
  harvester: require("roles.harvester"),
  upgrader:  require("roles.upgrader"),
};

module.exports = roles;