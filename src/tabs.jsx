import React from "react";
import cx from "classnames";

import {elementOrArrayOfElement} from "hire-forms-prop-types";
import {castArray} from "hire-forms-utils";

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.activeTab
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
          <li
            className={cx({
              active: tab.props.label === this.state.activeTab,
              [tab.props.className]: tab.props.className != null
            })}
            key={index}
            onClick={this.handleClick.bind(this, index)}>
            <span className="label">
              {tab.props.label}
            </span>
          </li>;
      });

    const child = children.find((tab) => tab.props.label === this.state.activeTab);

    return (
      <div className={cx(
          "hire-tabs",
          {[this.props.className]: this.props.className != null}
        )}>
        {labels.length ? <ul>{labels}</ul> : null}
        {child}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: elementOrArrayOfElement,
  className: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Tabs;
