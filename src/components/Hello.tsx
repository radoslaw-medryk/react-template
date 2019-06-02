import * as React from "react";
import { styled } from "linaria/react";
import { Rotor } from "./Rotor";

const HelloRotor = styled(Rotor)`
    background: papayawhip;
    height: 100vh;
`;

const HelloText = styled.h1`
    color: tomato;
`;

export type HelloProps = {
    name: string;
};

export const Hello: React.SFC<HelloProps> = ({ name }) => {
    return (
        <HelloRotor cycleTimeSec={2}>
            <HelloText>Hello {name}!</HelloText>
        </HelloRotor>
    );
};
