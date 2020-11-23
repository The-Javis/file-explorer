"use strict";
exports.__esModule = true;
var is_1 = require("./is");
function lastElement(element) {
    if (is_1["default"](element) === "array") {
        return element[element.length - 1];
    }
    else {
        throw { error: "require array" };
    }
}
exports["default"] = lastElement;