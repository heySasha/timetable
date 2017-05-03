import React from 'react';
import axios from 'axios';

import Data from './Data';
import Form from './Form';

class Faculties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            departments: []
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/db')
            .then(response => response.data)
            .then(departments => this.setState({ departments }))
            .catch(Faculties.handleError);
    }

    handleDelete(id) {
        axios.delete(`/api/db/${id}`)
            .then(() => {
                const departments = this.state.departments.filter(item => item.id !== id);

                this.setState({ departments });
            })
            .catch(Faculties.handleError);
    }

    handleEdit(id, value) {
        axios.put(`/api/db/${id}`, { value })
            .then(response => {
                const departments = this.state.departments.map(item => {
                    if (item.id === id) {
                        item = response.data;
                    }
                    return item;
                });

                this.setState({ departments });
            })
            .catch(Faculties.handleError);
    }

    handleAdd(value) {
        axios.post('/api/db', { value })
            .then(response => response.data)
            .then(item => {
                const departments = [...this.state.departments, item];

                this.setState({ departments });
            })
            .catch(Faculties.handleError);
    }

    static handleError(error) {
        console.error(error);
    }

    render() {
        return (
            <section>
                {this.state.departments.map((item) => <Data
                        key={item.id}
                        id={item.id}
                        value={item.value}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEdit}
                    />)}

                <Form onAdd={this.handleAdd}/>
            </section>
        );
    }
}


export default Faculties;