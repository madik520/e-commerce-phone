import { SUBMIT_TO_DETAILS } from '../constans';
import { IDetails, ISUBMIT } from '../types';

export const submitToDetails = (obj:IDetails):ISUBMIT => ({
    type: SUBMIT_TO_DETAILS,
    payload: {
        ...obj
    }
});