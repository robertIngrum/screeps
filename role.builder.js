const constants = require('constants');

const updateCreepStatus = (creep) => {
	if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
		creep.memory.building = false;
		creep.say('🔄 harvest');
	}

	if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
		creep.memory.building = true;
		creep.say('🚧 build');
	}
}

const buildAction = (creep) => {
	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

	if (targets.length == 0) {
		creep.moveTo(constants.Spawn1.builderIdleZone.x, constants.Spawn1.builderIdleZone.y);
		return;
	}

	if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
		creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
	}
};

const harvestAction = (creep) => {
	if (creep.store.getFreeCapacity() <= 0) {
		return;
	}
	
	var sources = creep.room.find(FIND_SOURCES);
	if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
		creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
	}
};

var roleBuilder = {
	run: function(creep) {
		updateCreepStatus(creep);

		if(creep.memory.building) {
			buildAction(creep);
		} else {
			harvestAction(creep);
		}
	}
};

module.exports = roleBuilder;
