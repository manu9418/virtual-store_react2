import { createReducer } from "@reduxjs/toolkit";
import { captureText } from "../actions/products";

// import { productsActions } from "../actions/products";
// const {captureText} = productsActions;

// Estado inicial para el reducer
const initialState = { 
    text: "" 
};

// Reducer de productos
const productsReducer = createReducer(
  initialState,
    // call back constructora, agregando casos (acciones) q dependen de 2 parametros
  (build) => build.addCase(
    captureText,
    // call back que se encarga de reducir (modificar/actualizar datos)
    // cada cambio en el SEARCH actualiza el estado
    (state, action) => {
        // Actualiza el estado con el nuevo texto
        const newState = {
            // una copia del estado actual usando el expreid? operation
            ...state,
            text: action.payload.text,
        };
        return newState;
    }
  )
);

export default productsReducer;