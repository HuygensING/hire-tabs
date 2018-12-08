import * as React from "react"
import * as cx from "classnames"

interface Props {
	children: any
	className?: string
	label: string
}
export default function(props: Props) {
	return (
		<div
			className={cx(
				"hire-tab",
				{[props.className]: props.className != null}
			)}
		>
			{props.children}
		</div>
	)
}
