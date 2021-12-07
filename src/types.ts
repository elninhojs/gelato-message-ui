export type GelatoMessageConfig = {
    timeout: Number,
    position: Position
    closeAllRendered: Boolean,
    document: Document
}

export enum Severity {
    ERROR = 'ERROR',
    INFO = 'INFO',
    WARN = 'WARN',
    FATAL = 'FATAL',
    NONE = 'NONE'
}

export enum Position {
    TOP_LEFT,
    TOP_CENTER,
    TOP_RIGHT,
    MIDDLE_LEFT,
    MIDDLE_CENTER,
    MIDDLE_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_CENTER,
    BOTTOM_RIGHT
}