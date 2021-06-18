const { alias, aliasJest } = require("react-app-rewire-alias");

const aliasMap = {
  "@components": "src/components",
  "@containers": "src/containers",
  "@images": "src/assets/images/",
  "@fire": "src/firebase.config.js",
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
