import * as React from "react";
import { Hello } from "./Hello";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = props => <Hello />;
