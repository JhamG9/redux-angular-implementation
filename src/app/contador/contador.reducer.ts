import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";


// export function contadorReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1;

//         case decrementar.type:
//             return state - 1;

//         default:
//             return state;
//     }

export const initialState = 20;
const _contadorReducer = createReducer(
    initialState,
    on(incrementar, state => state + 1),
    on(decrementar, state => state - 1),
    // Deestructurar el objeto {numero}= props or props.numero
    on(multiplicar, (state, { numero }) => state * numero),
    on(dividir, (state, props) => state = state / props.numero),
    on(reset, state => state = 0)
);

export function contadorReducer(state: any, action: any) {
    return _contadorReducer(state, action)
}


