import * as actionTypes   from '../constants/flightsActionType';

export function selestCompany(payload) {
    return {
        type: actionTypes.UPDATE_COMPANY,
        payload: payload
    }
}