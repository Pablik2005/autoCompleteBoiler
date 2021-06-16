import { SET_DATA } from "./namesActions";

const initialState = {
    data: []
}

const  namesReducer = ( state = initialState ,action) => {
    switch(action.type){

        case SET_DATA: 
            return {
                ...state,
                data: action.payload
            }
        default :
            return state;

    }

}

export default namesReducer