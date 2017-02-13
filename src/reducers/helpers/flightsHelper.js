/**
 * Подучаем список всех авиакомпаний
 * @param state
 * @returns {Array}
 */
export function listButton(state) {
    const carrier = state.map(e => { return e.carrier;  }).sort();
    for (var i = carrier.length - 1; i > 0; i--) {
        if (carrier[i] == carrier[i - 1])
            carrier.splice(i, 1);
    }
    const airlines = [];
    carrier.map(item => {
        return airlines.push({value:item, label:item})
    });
    return airlines;
}

/**
 * Список выбранныхкомпаний
 * @returns {{updateCompany: *}}
 */
export function selestCompany(state, payload){
    const foundDataCompany =  dataCompany(state,payload);
    console.log('foundDataCompany',foundDataCompany);
    return { ...state, updateCompany: payload, foundDataCompany: foundDataCompany}
}

/**
 *
 * @param allCompany - список всех компаний
 * @param selectCompany - список выбранных компаний
 * @returns {Array}
 */
export function dataCompany(allCompany,selectCompany) {
    const {flights} = allCompany;
    var dataCompany = [];
    for(var i = 0; i < selectCompany.length; i ++){
        flights.filter( el => {
            return (el.carrier == selectCompany[i].value) ? dataCompany.push(el): null;
        })
    }
    return dataCompany;
}
