const actions = require("actions");

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
    let creep = Game.creeps[name];

    if (creep.memory.action === undefined) {
      actions.updateAction(creep, "harvesting");
    }

    runForCreep(creep);
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