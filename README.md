# Hire Tabs

Tabs. You know and love.

## Example
```javascript
import React, { Component } from 'react';
import { Tabs, Tab } from 'hire-tabs';
import history from './history';
import { SomeComponent, SomeOtherComponents } from 'some-component-collection';

class MyTabbedComponent extends Component {
	// Catch tab change. For example: to alter the history.
	handleTabChange = (label, /* index */) => {
		const path = `/some-route/${label}`;
		history.push(path);
	}

	render() {
		return (
			<Tabs
				activeTab="first-tab"
				onChange={this.handleTabChange}>
				<Tab label="First Tab">
					<SomeComponent />
				</Tab>
				<Tab label="Second Tab">
					<SomeOtherComponent />
				</Tab>
			</Tabs>
		);
	}
}
```

