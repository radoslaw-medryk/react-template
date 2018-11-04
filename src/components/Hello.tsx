import * as React from "react";

const styles = require("./Hello.scss");

export type HelloProps = {
    name: string;
};

export const Hello: React.SFC<HelloProps> = ({name}) => (
    <h1 className={styles.header}>Hello, {name}!</h1>
);
