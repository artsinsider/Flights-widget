import React, {Component} from 'react';
import {isEmpty}          from 'ramda';

export default class CardCompanies extends Component {
    constructor(props) {
        super(props);

        this.cardCompany = this.cardCompany.bind(this);
        this.travelTime = this.travelTime.bind(this);
    }

    /**
     * Парсит машинную дату для лучшей восприимчивости
     * @param time
     * @returns {string}
     */
    travelTime(time) {
        const times = new Date(Date.parse(time));
        const options = { hour: 'numeric', minute: 'numeric',year: 'numeric', month: 'long', day: 'numeric'};
        return times.toLocaleString('en-US', options);
    }

    /**
     * Рендерит карточки авиа компаний
     * @param obj
     * @returns {*}
     */
    cardCompany(obj) {
         return !isEmpty(obj)
             ?
             obj.map( e => {
                return  (
                    <div key={`${e.id}-${e.carrier}`} className='card-company'>
                        <div className='company-name' >{e.carrier}</div>
                        <div className='from-to'>
                            From:&nbsp; <strong> {e.direction.from} </strong>
                             <p>&#8594;</p>
                            To:&nbsp; <strong> {e.direction.to} </strong>
                        </div>
                        <hr/>
                        <div className='time departure'>
                            Departure: {this.travelTime(e.departure)}
                        </div>
                        <div className='time arrival'>
                            Arrival: {this.travelTime(e.arrival)}
                        </div>
                    </div>
                )
            }
         )
        :
        <h3>Nothing found</h3>
    }

    render() {
        const {flights,foundDataCompany} = this.props;
        const data = !foundDataCompany? flights: foundDataCompany;
        return (
            <div className='companies'>
                <h3>List of companies</h3>
                {this.cardCompany(data)}
            </div>
        )
    }
}

