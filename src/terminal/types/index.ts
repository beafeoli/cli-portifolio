export interface IInput {
    value: string;
    valueLastChange?: string;
    index: number | null;
    disabled: boolean;
}

export interface IHistory {
    input: IInput;
    inputHistory: Array<string>;
    history: Array<JSX.Element>;
}