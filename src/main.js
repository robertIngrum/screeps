const actions = require("actions");
const memory  = require("memory");
const roles   = require("roles");
const spawn   = require("spawn");
const towers  = require("towers");

module.exports.loop = function () {
  actions.log();

  memory.clean()
  spawn.run();
  towers.run();

  roles.meta.runForAllCreeps();
};
