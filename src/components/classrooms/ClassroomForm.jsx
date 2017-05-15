import React from 'react';
import PropTypes from 'prop-types';

import Button from '../lib/Button';

class ClassroomForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number_classroom: '',
            count_places: '',
        };

        this.store = this.props.store;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeNumberClassroom = this.handleChangeNumberClassroom.bind(this);
        this.handleChangeCountPlaces = this.handleChangeCountPlaces.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let number = this.state.number_classroom;
        let count_places = this.state.count_places;

        if (number && Number(count_places)) {
            this.props.onAdd(undefined, number, Number(count_places));
            this.setState({
                number_classroom: '',
                count_places: '',
            });
        }
    }

    handleChangeNumberClassroom(event) {
        let number_classroom = event.target.value;
        this.setState({ number_classroom });
    }

    handleChangeCountPlaces(event) {
        let count_places = event.target.value;
        this.setState({ count_places });
    }

    render() {
        const disabled = !this.state.number_classroom || !this.state.count_places;

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.number_classroom}
                    placeholder="Назва"
                    onChange={this.handleChangeNumberClassroom} />
                <input
                    type="text"
                    value={this.state.count_places}
                    placeholder="Номер"
                    onChange={this.handleChangeCountPlaces} />

                <Button type="submit" disabled={disabled}>Добавить</Button>
            </form>
        );
    }
}

ClassroomForm.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default ClassroomForm;