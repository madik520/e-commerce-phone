import { SUBMIT_TO_DETAILS } from './constans';

export interface IDetails {
    id: number | null,
    title: string | null,
    img: string | null,
    price: number | null,
    company: string | null,
    info: string | null,
}

export interface ISUBMIT {
    type: typeof SUBMIT_TO_DETAILS,
    payload: IDetails
}