const actions = require("actions");

const updateCreepStatus = (creep) => {
	if(creep.memory.action == actions.indexes.storing &&
     creep.store[RESOURCE_ENERGY] == 0) {
		actions.updateAction(creep, "harvesting");
	}

	if(creep.memory.action == actions.indexes.harvesting &&
     creep.store.getFreeCapacity() == 0) {
		actions.updateAction(creep, "storing");
	}
}

const harvester = {
  run: function(creep) {
    updateCreepStatus(creep);

    actions.run(creep);
  },
}

module.exports = harvester;
