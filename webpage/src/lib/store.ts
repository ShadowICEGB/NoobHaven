import { writable, type Writable } from "svelte/store";



export const toastStateStore: Writable<string> = writable('hide');
export const setToastState = (value: string) => {toastStateStore.set(value)};


export type routeType = {
    routeName: string,
    route: string,
    routeSubText: string,
    subHeader: string
}
//
export const routeData: Writable<routeType> = writable();
export const setRouteData = (value: routeType) => {routeData.set(value)};


type ErrorData = {
    code: number;
    name: string;
    message: string;
    solution: string;
};
// Errors
export const errors = writable<ErrorData[]>([]);
export const addError = (error: ErrorData[]) => {errors.set(error)};