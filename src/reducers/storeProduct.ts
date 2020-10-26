import { IStore, ICartActionTypes } from '../types';
import { storeProducts } from '../data';
import { SUBMIT_TO_DETAILS, ADD_CART_ITEM, INCREMENT, DECREMENT, CLEAR_CART, REMOVE_CART_ITEM } from '../constans';


type StateTypes = {
    products: IStore[],
    details: IStore[],
    shopingCart:IStore[]
}

const initialState:StateTypes = {
    products: storeProducts,
    details: [],
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
                products: state.products.map(i => i.id === action.payload ? ({ ...i, inCart: true }) : i),
                details: state.details.map(i => ({...i, inCart: true })),
                shopingCart: state.shopingCart.concat(changeItem)
            }
        case INCREMENT:
            return{
                ...state,
                shopingCart: state.shopingCart.map(i => i.id === action.payload ? ({ ...i,  count: ++i.count }) : i)
            }
        case DECREMENT:
            return{
                ...state,
                shopingCart: state.shopingCart.map(i => i.id === action.payload ? ({ ...i, count: i.count !== 1 ? --i.count : 1 }) : i)
            }
        case REMOVE_CART_ITEM:
            return{
                ...state,
                products: state.products.map(i => i.id === action.payload ? ({ ...i, inCart: false }) : i),
                shopingCart: state.shopingCart.filter(i => i.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                products: state.products.map(i => ({ ...i, inCart: false })),
                shopingCart: []
            }
        default:
            return state;
    }
};

export default storeProductReducer;