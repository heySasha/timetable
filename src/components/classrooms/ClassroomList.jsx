import  React from 'react';
import PropTypes from 'prop-types';

import Classroom from './Classroom';
//import { setClassroomFilter } from '../../actions';


function ClassroomList(props) {
    console.log(props.filter);
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <td>Номер</td>
                <td>Кількість місць</td>
                <td/>
            </tr>
            </thead>
            <tbody>
            {props.classrooms.map(classroom =>
                <Classroom
                    key={classroom.id_classroom}
                    id_classroom={classroom.id_classroom}
                    number_classroom={classroom.number_classroom}
                    count_places={classroom.count_places}
                    id_building={classroom.id_building}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit} />)}
            </tbody>
        </table>
    );
}

ClassroomList.propTypes = {
    classrooms: PropTypes.arrayOf(PropTypes.shape({
        id_classroom: PropTypes.number.isRequired,
        number_classroom: PropTypes.string.isRequired,
        count_places: PropTypes.number.isRequired,
        id_building: PropTypes.number.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default ClassroomList;