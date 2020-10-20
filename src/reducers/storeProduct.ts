import { IStore, ICartActionTypes } from '../types';
import { storeProducts } from '../data';
import { SUBMIT_TO_DETAILS, ADD_CART_ITEM } from '../constans';


type StateTypes = {
    products: IStore[],
    details: IStore[] | null,
    shopingCart: IStore[]
}

const initialState:StateTypes = {
    products: storeProducts,
    details: null,
    shopingCart: []
}

const storeProductReducer = (state = initialState, action:ICartActionTypes):StateTypes =>{
    switch(action.type){
        case SUBMIT_TO_DETAILS: 
        return {
            ...state,
            details: state.products.filter(i => i.id === action.payload)
        }
        case ADD_CART_ITEM:
            const getItem = state.products.filter(i => i.id === action.payload);
            const changeItem = getItem.map(i => ({ ...i, inCart: true }));
            return {
                ...state,
                products: state.products.map(i => i.id === action.payload ? ({ ...i, inCart: true }) : i),
                shopingCart: state.shopingCart.concat(changeItem)
            }
        default:
            return state;
    }
};

export default storeProductReducer;