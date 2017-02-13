import React, {Component} from 'react';
import Select             from 'react-select';

export default class AirsCompany extends Component {
    constructor(props) {
        super(props);
        this.state= {
            crazy: false,
            options: [],
            value: this.props.airlines,
        };

        this.handleSelectChange =this.handleSelectChange.bind(this);
    }

    handleSelectChange (value) {
        const {update} = this.props;
        this.setState({ value:value });
        update(value);
    }

    render() {
        const {airlines} = this.props;
        return (
            <div className='airs-company'>
                <h3>Aairs Company</h3>
                <Select
                    multi
                    value={this.state.value}
                    options={airlines}
                    onChange={this.handleSelectChange}
                />
            </div>
        )
    }
}
