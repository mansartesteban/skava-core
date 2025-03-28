"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getProperties = (instance) => {
  let proto = Object.getPrototypeOf(instance);
  let descriptors = Object.getOwnPropertyDescriptors(proto);
  let getters = Object.keys(descriptors).filter(
    (key) => typeof descriptors[key].get === "function"
  );
  return getters.reduce((acc, key) => {
    acc[key] = instance[key];
    return acc;
  }, {});
};
exports.getProperties = getProperties;
//# sourceMappingURL=Object.cjs.js.map
