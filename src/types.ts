import { ADD_CART_ITEM, CLOSE_MODAL, OPEN_MODAL, SUBMIT_TO_DETAILS, REMOVE_CART_ITEM, CLEAR_CART } from './constans';

// Store TYPES
export interface IStore {
    id: number,
    title: string,
    img: string,
    price: number,
    company: string,
    info: string,
    inCart: boolean,
    total: number,
    count: number,
}
interface ISUBMIT {
    type: typeof SUBMIT_TO_DETAILS,
    payload: number
}

// MODAL TYPES
export interface IModalProps {
    title: string | null,
    img: string | null,
    price: number | null,
    isOpen: boolean
}

interface IMODALOPEN {
    type: typeof OPEN_MODAL 
    payload: IModalProps
}

interface IMODALCLOSE {
    type: typeof CLOSE_MODAL,
    payload: {
        isOpen: boolean
    }
}

export type IMODAL = IMODALOPEN | IMODALCLOSE;

//CART TYPES


interface IAddToCart {
    type: typeof ADD_CART_ITEM,
    payload: number
}

interface IRemoveCartItem {
    type: typeof REMOVE_CART_ITEM,
    payload: number
}

interface IClearCart {
    type: typeof CLEAR_CART,
    payload: {
        item: Array<any>
    }
}
export type ICardItems = {
    id: number,
    title: string,
    img: string,
    price: number,
    company: string,
    inCart: boolean,
    count: number,
    total: number,
    info?:string
}
export type ICartActionTypes = IAddToCart | IRemoveCartItem | IClearCart | ISUBMIT;