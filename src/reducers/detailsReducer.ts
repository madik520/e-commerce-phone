import { SUBMIT_TO_DETAILS } from '../constans';
import { IDetails, ISUBMIT } from '../types';

const initialState:IDetails = {
    id: null,
    title: null,
    img: null,
    price: null,
    company: null,
    info: null
}

const detailsReducer = (state = initialState, action: ISUBMIT):IDetails => {
    switch(action.type){
        case SUBMIT_TO_DETAILS:
            return {
                id: action.payload.id,
                title: action.payload.title,
                img: action.payload.img,
                price: action.payload.price,
                company: action.payload.company,
                info: action.payload.info
            }
        default:
            return state;
    }
}

export default detailsReducer;