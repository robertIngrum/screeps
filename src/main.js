const memory  = require("memory");
const roles   = require("roles");
const spawn   = require("spawn");
const towers  = require("towers");

Creep.prototype.behavior = {
  log: () => { console.log(this.name); }
};

module.exports.loop = function () {
  memory.clean()
  spawn.run();
  towers.run();

  roles.meta.runForAllCreeps();
};
