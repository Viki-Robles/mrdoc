const generateComponent = require("./generate/component");
const generatePage = require("./generate/page");
const generateIcon = require("./generate/icon");
const generateUtil = require("./generate/util");
const generateHook = require("./generate/hook");

module.exports = function (plop) {
  plop.setHelper("obj", (text) => `{{ ${text} }}`);
  plop.setHelper("propsHelper", (text) => `{${text}}`);

  plop.setGenerator("component", generateComponent);
  plop.setGenerator("page", generatePage);
  plop.setGenerator("icon", generateIcon);
  plop.setGenerator("util", generateUtil);
  plop.setGenerator("hook", generateHook);
};
