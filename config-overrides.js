const { alias, aliasJest } = require("react-app-rewire-alias");

const aliasMap = {
  "@components": "src/components",
  "@containers": "src/containers",
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
