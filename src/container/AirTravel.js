import React, {Component}     from 'react';
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
import AirsCompany            from '../components/AirTravel/AirsCompany';
import CardCompanies          from '../components/AirTravel/CardCompanies';
import * as flightsAction     from './../actions/flightsAction';

class AirTravel extends Component{
    constructor(props) {
        super(props);
        this.flightsAction = bindActionCreators( flightsAction, props.dispatch);
    }

    render() {
        const {flights,airlines,foundDataCompany} = this.props;

        return (
            <div className='widget-air-travel'>
                <AirsCompany
                    airlines={airlines}
                    flights={flights}
                    update = {this.flightsAction.selestCompany}
                />
                <CardCompanies
                    flights={flights}
                    foundDataCompany={foundDataCompany}
                />
            </div>
        )
    }
}

function mapStateToProps({flights}) {
    return {
        ...flights
    }
}

export default connect(mapStateToProps) (AirTravel);
