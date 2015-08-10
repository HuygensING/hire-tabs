import React from "react";

import {elementOrArrayOfElement} from "hire-forms-prop-types";

class Tab extends React.Component {
	render() {
		let style = (!this.props.active) ?
			{display: "none"} :
			{};

		// if (this.props.active) {
		return (
			<div className="hire-tab" style={style}>
				{this.props.children}
			</div>
		);
		// }

		// return null;
	}
}

Tab.defaultProps = {
	active: false
};

Tab.propTypes = {
	active: React.PropTypes.bool,
	children: elementOrArrayOfElement
};

export default Tab;