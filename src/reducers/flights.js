import * as flight        from '../init/data';
import * as helperFly     from './helpers/flightsHelper';
import * as actionTypes   from '../constants/flightsActionType';

const initialState = {
    flights: flight.flights,
    airlines: helperFly.listButton(flight.flights)
};


export default function flights(state = initialState, action) {
    const {payload, type} = action;
    switch(type) {
    /*** Обновление данных компаний */
        case actionTypes.UPDATE_COMPANY:
            return helperFly.selestCompany(state, payload);

        default:
            return state;
    }
}
