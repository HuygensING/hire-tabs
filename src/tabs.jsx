import React from "react";
import cx from "classnames";

import {elementOrArrayOfElement} from "hire-forms-prop-types";
import {castArray} from "hire-forms-utils";

class Tabs extends React.Component {
	handleClick(index) {
		if (this.props.onChange) {
			let children = castArray(this.props.children);

			let tabLabel = children[index].props.label;
			this.props.onChange(tabLabel, index);
		}
	}

	render() {
		let children = castArray(this.props.children);

		let labels = children
			.map((tab, index) => {
				return (tab == null) ?
					null :
					<li
						className={cx({active: tab.props.active})}
						key={index}
						onClick={this.handleClick.bind(this, index)}>
						<span className="label">
							{tab.props.label}
						</span>
					</li>;
			}

			);

		labels = labels.length ?
			<ul>{labels}</ul> :
			null;

		let className = this.props.className != null ?
			`hire-tabs ${this.props.className}` :
			"hire-tabs";

		return (
			<div className={className}>
				{labels}
				{children}
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