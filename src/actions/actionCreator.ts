import { SUBMIT_TO_DETAILS, OPEN_MODAL, CLOSE_MODAL } from '../constans';
import { IDetails, ISUBMIT } from '../types';


export const submitToDetails = (obj:IDetails):ISUBMIT => ({
    type: SUBMIT_TO_DETAILS,
    payload: {
        ...obj
    }
});

export const openModal = () => ({
    type: OPEN_MODAL,
    payload: {
        isOpen: true
    }
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
    payload: {
        isOpen: false
    }
})
