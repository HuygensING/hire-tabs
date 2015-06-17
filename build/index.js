(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.HireTabs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var elementOrArrayOfElement = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.element)]);

exports.elementOrArrayOfElement = elementOrArrayOfElement;
/**
 * A string or an object,
 * example: {key: "somekey", value: "somevalue"}.
 */
var stringOrKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
})]);

exports.stringOrKeyValue = stringOrKeyValue;
var stringOrArray = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.array]);

exports.stringOrArray = stringOrArray;
var stringOrArrayOfString = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string)]);

exports.stringOrArrayOfString = stringOrArrayOfString;
var arrayOfKeyValue = _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string.isRequired,
	value: _react2["default"].PropTypes.string.isRequired
}));

exports.arrayOfKeyValue = arrayOfKeyValue;
/**
 * An array of strings or an array of key/value objects,
 * example: [{key: "somekey", value: "somevalue"}].
 */
var arrayOfStringOrArrayOfKeyValue = _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string), _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.shape({
	key: _react2["default"].PropTypes.string,
	value: _react2["default"].PropTypes.string
}))]);
exports.arrayOfStringOrArrayOfKeyValue = arrayOfStringOrArrayOfKeyValue;

},{"react":"react"}],2:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _tabs = _dereq_("./tabs");

var _tabs2 = _interopRequireDefault(_tabs);

var _tab = _dereq_("./tab");

var _tab2 = _interopRequireDefault(_tab);

exports.Tabs = _tabs2["default"];
exports.Tab = _tab2["default"];

},{"./tab":3,"./tabs":4}],3:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var Tab = (function (_React$Component) {
	function Tab() {
		_classCallCheck(this, Tab);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Tab, _React$Component);

	_createClass(Tab, [{
		key: "render",
		value: function render() {
			if (this.props.active) {
				return _react2["default"].createElement(
					"div",
					{ className: "hire-tab" },
					this.props.children
				);
			}

			return null;
		}
	}]);

	return Tab;
})(_react2["default"].Component);

Tab.defaultProps = {
	active: false
};

Tab.propTypes = {
	active: _react2["default"].PropTypes.bool,
	children: _hireFormsPropTypes.elementOrArrayOfElement
};

exports["default"] = Tab;
module.exports = exports["default"];

},{"hire-forms-prop-types":1,"react":"react"}],4:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = _dereq_("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = _dereq_("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _hireFormsPropTypes = _dereq_("hire-forms-prop-types");

var _hireFormsUtils = _dereq_("hire-forms-utils");

var Tabs = (function (_React$Component) {
	function Tabs(props) {
		_classCallCheck(this, Tabs);

		_get(Object.getPrototypeOf(Tabs.prototype), "constructor", this).call(this, props);

		this.state = {
			children: this.props.children
		};
	}

	_inherits(Tabs, _React$Component);

	_createClass(Tabs, [{
		key: "handleClick",
		value: function handleClick(index) {
			if (this.props.onChange) {
				var tabLabel = this.props.children[index].props.label;
				this.props.onChange(tabLabel, index);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this = this;

			var children = (0, _hireFormsUtils.castArray)(this.props.children);

			var labels = children.map(function (tab, index) {
				return _react2["default"].createElement(
					"li",
					{
						className: (0, _classnames2["default"])({ active: tab.props.active }),
						key: index,
						onClick: _this.handleClick.bind(_this, index) },
					_react2["default"].createElement(
						"span",
						{ className: "label" },
						tab.props.label
					)
				);
			});

			return _react2["default"].createElement(
				"div",
				{ className: "hire-tabs" },
				_react2["default"].createElement(
					"ul",
					null,
					labels
				),
				children
			);
		}
	}]);

	return Tabs;
})(_react2["default"].Component);

Tabs.propTypes = {
	children: _hireFormsPropTypes.elementOrArrayOfElement,
	onChange: _react2["default"].PropTypes.func
};

exports["default"] = Tabs;
module.exports = exports["default"];

},{"classnames":"classnames","hire-forms-prop-types":1,"hire-forms-utils":5,"react":"react"}],5:[function(_dereq_,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var castArray = function castArray(array) {
	return Array.isArray(array) ? array : [array];
};
exports.castArray = castArray;

},{}]},{},[2])(2)
});
