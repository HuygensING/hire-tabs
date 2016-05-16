import React from "react";
import cx from "classnames";

import {elementOrArrayOfElement} from "hire-forms-prop-types";

class Tab extends React.Component {
  render() {
    return (
      <div
        className={cx(
          "hire-tab",
          {[this.props.className]: this.props.className != null}
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  children: elementOrArrayOfElement,
  className: React.PropTypes.string,
};

export default Tab;
