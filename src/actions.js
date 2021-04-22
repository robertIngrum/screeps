const harvest = require("actions.harvest");
const store   = require("actions.store");

const indexes = {
  idle: 0,
  harvesting: 1,
  storing: 2,
};

const emojiAssociations = {
  idle: "💤",
  harvesting: "🔄",
  storing: "🏦",
};

const logic = {
  0: () => {},
  1: harvest,
  2: store,
};

const updateAction = (creep, actionName) => {
  creep.memory.action = indexes[actionName];
  creep.say(`${emojiAssociations[actionName]} ${actionName}`);
};

const run = (creep) => {
  const action = creep.memory.action;

  logic[action](creep);
}

const actions = {
  indexes: indexes,
  updateAction: updateAction,
  run: run,
};

module.exports = actions;
