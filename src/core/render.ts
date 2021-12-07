import { Severity } from "../types";

export const GELATO_MESSAGE_CONTAINER = 'gelato-message-container';

export const getInstance = (document = window.document) => {
    let divContainer  = document.querySelector(`div#${GELATO_MESSAGE_CONTAINER}`);
    if(!divContainer){
        divContainer = document.createElement('div');
        divContainer.id = GELATO_MESSAGE_CONTAINER;
        document.body.appendChild(divContainer);
    }
    return divContainer;
}

export const addMessageItem = (message: string, severity: Severity, document = window.document) =>{
    const messageItem = document.createElement('div');
    messageItem.id = 'msg-item';
    messageItem.className = `msg-item msg-item-${severity}`,
    messageItem.innerText = message;
    getInstance(document).appendChild(messageItem);
}