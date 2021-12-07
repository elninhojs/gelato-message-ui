import { GelatoMessageConfig, Severity } from "./types";

export const getVersion = ():string => {
    return 'beta';
}

export const init = (config: GelatoMessageConfig) : void =>{
    console.log({config});
}

export const addMessage = (message: string, severity: Severity = Severity.INFO) : void =>{
    console.log({message, severity});
}
export const addInfoMessage = (message:string) => addMessage(message, Severity.INFO);
export const addErrorMessage = (message:string) => addMessage(message, Severity.ERROR);
export const addWarnMessage = (message:string) => addMessage(message, Severity.WARN);
export const addFatalMessage = (message:string) => addMessage(message, Severity.FATAL);