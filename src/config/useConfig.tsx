import * as React from "react";
import { configPromise, Config } from "./config";

export function useConfig(): Config | undefined {
    const [config, setConfig] = React.useState<Config | undefined>(undefined);

    React.useEffect(() => {
        async function getConfigAsync() {
            const configResult = await configPromise;
            setConfig(configResult);
        }

        getConfigAsync();
    });

    return config;
}
