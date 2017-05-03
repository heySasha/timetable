import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';

class BuildingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name_building: '',
            number_building: '',
            address_building: ''
        };

        this.store = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNameBuilding = this.handleChangeNameBuilding.bind(this);
        this.handleChangeNumberBuilding = this.handleChangeNumberBuilding.bind(this);
        this.handleChangeAddressBuilding = this.handleChangeAddressBuilding.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let name_building = this.state.name_building;
        let number_building = this.state.number_building;
        let address_building = this.state.address_building;
        //console.log(value, shortValue, selectedType);
        if (number_building && Number(number_building) && address_building) {
            this.props.onAdd(undefined, name_building, Number(number_building), address_building);
            this.setState({
                name_building: '',
                number_building: '',
                address_building: ''
            });
        }
    }

    handleChangeNameBuilding(event) {
        let name_building = event.target.value;
        this.setState({ name_building });
    }

    handleChangeNumberBuilding(event) {
        let number_building = event.target.value;
        this.setState({ number_building });
    }

    handleChangeAddressBuilding(event) {
        let address_building = event.target.value;
        this.setState({ address_building });
    }

    render() {
        const disabled = !this.state.name_building || !this.state.number_building || !this.state.address_building;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.name_building}
                    placeholder="Назва"
                    onChange={this.handleChangeNameBuilding} />
                <input
                    type="text"
                    value={this.state.number_building}
                    placeholder="Номер"
                    onChange={this.handleChangeNumberBuilding} />
                <input
                    type="text"
                    value={this.state.address_building}
                    placeholder="Адреса"
                    onChange={this.handleChangeAddressBuilding} />

                <Button type="submit" disabled={disabled}>Добавить</Button>
            </form>
        );
    }
}

BuildingForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default BuildingForm;