import { SUBMIT_TO_DETAILS, OPEN_MODAL, CLOSE_MODAL, ADD_CART_ITEM, REMOVE_CART_ITEM, INCREMENT, DECREMENT, CLEAR_CART } from '../constans';
import { IMODAL, IModalProps, ICartActionTypes, IStore } from '../types';


export const submitToDetails = (id:number):ICartActionTypes => ({
    type: SUBMIT_TO_DETAILS,
    payload:id
});

export const openModal = (obj:IModalProps):IMODAL => ({
    type: OPEN_MODAL,
    payload: {
        ...obj,
        isOpen: true
    }
});

export const closeModal = ():IMODAL => ({
    type: CLOSE_MODAL,
    payload: {
        isOpen: false
    }
})

export const addToCart = (id:number):ICartActionTypes => ({
    type: ADD_CART_ITEM,
    payload: id
})

export const clearCart = ():ICartActionTypes => ({
    type: CLEAR_CART,
    payload: []
})

export const removeCartItem = (id:number):ICartActionTypes => ({
    type: REMOVE_CART_ITEM,
    payload: id
})

export const increment = (id:number):ICartActionTypes => ({
    type: INCREMENT,
    payload: id
})
export const decrement = (id:number):ICartActionTypes => ({
    type: DECREMENT,
    payload: id
})