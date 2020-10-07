import { OPEN_MODAL, CLOSE_MODAL } from '../constans';


const initialState = {
    isOpen: false
}

const modalReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
        case CLOSE_MODAL:
            return {
                isOpen: action.payload.isOpen
            }
        default:
            return state;
    }
}

export default modalReducer;