const { alias, aliasJest } = require("react-app-rewire-alias");

const aliasMap = {
  "@components": "src/components/",
  "@containers": "src/containers/",
  "@pages": "src/pages/",
  "@images": "src/assets/images/",
  "@fire": "src/firebase.config.js",
  "@store": "src/store/",
  "@hoc": "src/hoc/",
  "@data": "src/data/",
  "@hooks": "src/hooks/",
};

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
