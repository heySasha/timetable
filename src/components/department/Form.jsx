import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from '../lib/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name_department: '',
            short_name_department: '',
            id_department_type: null,
            types: []
        };

        this.store = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNameDepartment = this.handleChangeNameDepartment.bind(this);
        this.handleChangeShortNameDepartment = this.handleChangeShortNameDepartment.bind(this);
        this.handleChangeIdTypeDepartment = this.handleChangeIdTypeDepartment.bind(this);
    }

    componentDidMount() {
        axios.get('/api/department_types')
            .then(res => res.data)
            .then(types => this.setState({ types }));
    }

    handleSubmit(event) {
        event.preventDefault();
        let name_department = this.state.name_department;
        let short_name_department = this.state.short_name_department;
        let id_department_type = this.state.id_department_type;
        //console.log(value, shortValue, selectedType);
        if (name_department && short_name_department && id_department_type) {
            this.props.onAdd(undefined, name_department, short_name_department, id_department_type);
            this.setState({
                name_department: '',
                short_name_department: ''
            });
        }
    }

    handleChangeIdTypeDepartment(event) {
        let id_department_type = Number(event.target.value);
        this.setState({ id_department_type });
    }

    handleChangeNameDepartment(event) {
        let name_department = event.target.value;

        this.setState({ name_department });
    }

    handleChangeShortNameDepartment(event) {
        let short_name_department = event.target.value;

        this.setState({ short_name_department });
    }

    render() {
        const disabled = !this.state.name_department || !this.state.name_department || !this.state.id_department_type;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.name_department}
                    placeholder="Назва"
                    onChange={this.handleChangeNameDepartment} />
                <input
                    type="text"
                    value={this.state.short_name_department}
                    placeholder="Коротка назва"
                    onChange={this.handleChangeShortNameDepartment} />
                <select
                    name="select_types"
                    onChange={this.handleChangeIdTypeDepartment}>
                        {this.state.types.map(type =>
                            <option key={type.id_department_type} value={type.id_department_type}>{type.name_department_type}</option>)}
                </select>

                <Button type="submit" disabled={disabled}>Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
 };

export default Form;