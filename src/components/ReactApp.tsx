import * as React from "react";
import { Hello } from "./Hello";
import { useConfig } from "@/src/config/useConfig";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = () => {
    const config = useConfig();
    const name = config ? config.hello : "~loading~";

    return <Hello name={name} />;
};
