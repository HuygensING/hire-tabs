"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
exports.default = (props) => (React.createElement("div", { className: cx("hire-tab", { [props.className]: props.className != null }) }, props.children));
