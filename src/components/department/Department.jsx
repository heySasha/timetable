import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '../lib/Button';

class Department extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            types: [],
            //name_department_type: this.props.name_department_type
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        //this.state.name_department_type = this.props.name_department_type;

        axios.get('/api/department_types')
            .then(res => res.data)
            .then(types => this.setState({ types }));
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.editing) {
            this.refs.name_department.focus();
            //this.refs.short_name_department.focus();
            //this.refs.id_department_type.focus();
        }
    }

    componentWillUpdate(nextProps, nextState) {

    }

    handleSubmit(event) {
        event.preventDefault();

        const name_department = this.refs.name_department.value;
        const short_name_department = this.refs.short_name_department.value;
        const id_department_type = this.refs.id_department_type.value;

        this.props.onEdit(this.props.id_department, name_department, short_name_department, id_department_type);

        //let name_department_type;
/*
        axios.patch(`api/department_types/${id_department_type}`)
            .then(res => res.data)
            .then(type => this.setState({
                editing: false,
                name_department_type: type.name_department_type
            }));
*/

       this.setState({ editing: false });
    }

    handleDelete() {
        this.props.onDelete(this.props.id_department);
    }

    handleEdit() {
        this.setState({ editing: true });
    }


    //
    renderDisplay() {
        //console.log('renderDisplay:', this.props);

        return (
            <tr>
                <td>{this.props.name_department}</td>
                <td>{this.props.short_name_department}</td>
                <td>{this.props.id_department_type}</td>

                <td>
                    <Button onClick={this.handleEdit}>edit</Button>
                    <Button onClick={this.handleDelete}>delete</Button>
                </td>
            </tr>
        )
    }
    // <form id="edit-form" onSubmit={this.handleSubmit}/>
    // <td><input type="text" ref="id_department_type" form="edit-form" defaultValue={this.props.id_department_type} /></td>
    renderForm() {
        return (
            <tr>
                <td><input type="text" ref="name_department" form="edit-form" defaultValue={this.props.name_department} /></td>
                <td><input type="text" ref="short_name_department" form="edit-form" defaultValue={this.props.short_name_department} /></td>

                <td>
                    <select ref="id_department_type"  defaultValue={this.props.id_department_type}>
                        {this.state.types.map(type =>
                            <option key={type.id_department_type} value={type.id_department_type}>{type.name_department_type}</option>)}
                    </select>
                </td>

                <td><Button type="submit" form="edit-form" onClick={this.handleSubmit}>Save</Button></td>
            </tr>
        )
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

Department.propTypes = {
    id_department: PropTypes.number.isRequired,
    name_department: PropTypes.string.isRequired,
    short_name_department: PropTypes.string.isRequired,
    //name_department_type: PropTypes.string.isRequired,
    id_department_type: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Department;