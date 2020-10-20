import { OPEN_MODAL, CLOSE_MODAL } from '../constans';
import { IModalProps, IMODAL } from '../types';

const initialState:IModalProps = {
    title: null, 
    img: null, 
    price: null, 
    isOpen: false
}

const modalReducer = (state = initialState, action:IMODAL):IModalProps => {
    switch(action.type){
        case OPEN_MODAL:
            return {
                title: action.payload.title,
                img: action.payload.img,
                price: action.payload.price,
                isOpen: action.payload.isOpen
            }
        case CLOSE_MODAL:
            return {
                title: null,
                img: null,
                price: null,
                isOpen: action.payload.isOpen
            }
        default:
            return state;
    }
}

export default modalReducer;