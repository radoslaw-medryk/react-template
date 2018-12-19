import { styled } from "linaria/react";

export type RotorProps = {
    cycleTimeSec: number;
};

// TODO [RM]: linaria passes all props down to div which gives React warning.
export const Rotor = styled.div<RotorProps>`
    display: flex;
    flex-flow: row-nowrap;
    justify-content: center;
    align-items: center;

    & > * {
        animation: rotate ${props => props.cycleTimeSec}s linear infinite;
    }

    @keyframes rotate {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
`;
