import { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id_department_type: null,
            types: []
        };
    }

    componentDidMount() {
        axios.get('/api/department_types')
            .then(res => res.data)
            .then(types => this.setState({ types }));
    }

    render() {
        return (
            <select
                name="select_types"
                onChange={this.handleChangeIdTypeDepartment}>
                {this.state.types.map(type =>
                    <option key={type.id_department_type} value={type.id_department_type}>{type.name_department_type}</option>)}
            </select>
        );
    }
}