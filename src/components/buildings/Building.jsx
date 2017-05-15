import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';

class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {

        if (this.state.editing) {
            this.refs.name_building.focus();
            //this.refs.number_building.focus();
            //this.refs.address_building.focus();
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        const name = this.refs.name_building.value;
        const number = this.refs.number_building.value;
        const address = this.refs.address_building.value;
        this.props.onEdit(this.props.id_building, name, Number(number), address);
        this.setState({ editing: false });
    }
    handleDelete() {
        this.props.onDelete(this.props.id_building);
    }
    handleEdit() {
        this.setState({ editing: true });
    }
    renderDisplay() {
        return (
            <tr>
                <td>{this.props.name_building}</td>
                <td>{this.props.number_building}</td>
                <td>{this.props.address_building}</td>
                <td>
                    <Button onClick={this.handleEdit}>edit</Button>
                    <Button onClick={this.handleDelete}>delete</Button>
                </td>
            </tr>
        )
    }
    renderForm() {
        return (
            <tr>
                <td><input type="text" ref="name_building" form="edit-form" defaultValue={this.props.name_building} /></td>
                <td><input type="text" ref="number_building" form="edit-form" defaultValue={this.props.number_building} /></td>
                <td><input type="text" ref="address_building" form="edit-form" defaultValue={this.props.address_building} /></td>

                <td><Button type="submit" form="edit-form" onClick={this.handleSubmit}>save</Button></td>
            </tr>
        )
    }
    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}
Building.propTypes = {
    id_building: PropTypes.number.isRequired,
    name_building: PropTypes.string.isRequired,
    number_building: PropTypes.number.isRequired,
    address_building: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};
export default Building;