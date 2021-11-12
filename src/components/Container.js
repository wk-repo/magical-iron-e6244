import clsx from "clsx";
import React  from "react";

import { Props } from "./props";

export default class Container extends React.Component {
     render() {
        const className = _.get(this.props, 'className');
        const children = _.get(this.props, 'children');
        return (
        <div className={clsx("px-4 mx-auto max-w-screen-md", className)}>
        {children}
        </div>
    );
};