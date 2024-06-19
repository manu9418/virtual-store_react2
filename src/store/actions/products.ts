import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "captureText", 
    // (text) => ({ payload: { text } })
    // call back  
    (obj) => ({ payload: { text: obj.text } })
    // enviamos captura de datos al reductor, para que este actualice los estados
    //(obj) => {     
    //     return {
    //         payload : { text, obj.text }
    //     }
    // }
)

//const productsActions = {captureText}
//export default productsActions

export {captureText}