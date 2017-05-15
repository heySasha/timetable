import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';

class Classroom extends React.Component {
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
            this.refs.number_classroom.focus();
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const number = this.refs.number_classroom.value;
        const count_places = this.refs.count_places.value;

        this.props.onEdit(this.props.id_classroom, number, count_places);

        this.setState({ editing: false });
    }

    handleDelete() {
        this.props.onDelete(this.props.id_classroom);
    }

    handleEdit() {
        this.setState({ editing: true });
    }

    renderDisplay() {

        return (
            <tr>
                <td>{this.props.number_classroom}</td>
                <td>{this.props.count_places}</td>

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
                <td><input type="text" ref="name_building" form="edit-form" defaultValue={this.props.number_classroom} /></td>
                <td><input type="text" ref="number_building" form="edit-form" defaultValue={this.props.count_places} /></td>

                <td><Button type="submit" form="edit-form" onClick={this.handleSubmit}>save</Button></td>
            </tr>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Classroom.propTypes = {
    id_classroom: PropTypes.number.isRequired,
    number_classroom: PropTypes.string.isRequired,
    count_places: PropTypes.number.isRequired,
    id_building: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Classroom;