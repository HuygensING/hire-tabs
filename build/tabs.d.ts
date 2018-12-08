import * as React from "react";
interface Props {
    activeTab: string;
    className?: string;
    onChange: (tab: string, index: number) => void;
}
interface State {
    activeTab: string;
}
export default class Tabs extends React.PureComponent<Props, State> {
    state: State;
    componentWillReceiveProps(nextProps: Props): void;
    render(): JSX.Element;
    private handleClick;
}
export {};
