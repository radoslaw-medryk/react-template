import * as React from "react";
import { Hello } from "./Hello";
import { configPromise } from "src/config";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = props => {
    const [name, setName] = React.useState("[Loading...]");

    React.useEffect(() => {
        const setNameAsync = async () => {
            const newName = (await configPromise).hello;
            setName(newName);
        };
        setNameAsync();
    });

    return <Hello name={name} />;
};
