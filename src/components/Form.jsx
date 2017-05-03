import React from 'react';

import Button from './Button';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.value;

        if (value) {
            this.props.onAdd(value);
            this.setState({value: ''});
        }
    }

    handleChange(event) {
        let value = event.target.value;

        this.setState({value});
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    placeholder="Что нужно сделать?"
                    onChange={this.handleChange}
                />

                <Button type="submit">Добавить</Button>
            </form>
        );
    }
}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired
};

export default Form;