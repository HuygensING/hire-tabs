"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cx = require("classnames");
const castArray = (arr) => (Array.isArray(arr)) ? arr : [arr];
class Tabs extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            activeTab: this.props.activeTab
        };
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.activeTab !== nextProps.activeTab) {
            this.setState({ activeTab: nextProps.activeTab });
        }
    }
    handleClick(index) {
        const children = castArray(this.props.children);
        const activeTab = children[index].props.label;
        this.setState({ activeTab });
        if (this.props.onChange != null) {
            this.props.onChange(activeTab, index);
        }
    }
    render() {
        let children = castArray(this.props.children);
        let labels = children
            .map((tab, index) => {
            return (tab == null) ?
                null :
                React.createElement("li", { className: cx({
                        active: tab.props.label === this.state.activeTab,
                        [tab.props.className]: tab.props.className != null
                    }), key: index, onClick: this.handleClick.bind(this, index) },
                    React.createElement("span", { className: "label" }, tab.props.label));
        });
        const child = children.find((tab) => tab.props.label === this.state.activeTab);
        return (React.createElement("div", { className: cx("hire-tabs", { [this.props.className]: this.props.className != null }) },
            labels.length ? React.createElement("ul", null, labels) : null,
            child));
    }
}
exports.default = Tabs;
