import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal } from "../actions/products";

// import { productsActions } from "../actions/products";
// const {captureText} = productsActions;

// Estado inicial para el reducer
const initialState = { 
    text: "",
    total: 0
};

// Reducer de productos
const productsReducer = createReducer(
  initialState,
    // call back constructora, agregando casos (acciones) q dependen de 2 parametros
  (build) => build
              .addCase(
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
              .addCase(
                calculateTotal,
                (state, action) => { 
                  const products = action.payload.products
                  const subtotals = products.map((each) => each.price * each.units);
                  const total = subtotals.reduce((acc: number, val: number) => acc + val);
                  const newState = {
                     ...state,
                     total,
                  };
                  return newState;
               }
              )
);

export default productsReducer;