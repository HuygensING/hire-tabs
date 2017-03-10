import * as React from "react";
import * as cx from "classnames";

export default (props) => (
	<div
		className={cx(
			"hire-tab",
			{[props.className]: props.className != null}
		)}
	>
		{props.children}
	</div>
);
