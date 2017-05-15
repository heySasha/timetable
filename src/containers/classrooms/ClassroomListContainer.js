import { connect } from 'react-redux';

import ClassroomList from '../../components/classrooms/ClassroomList';
import { deleteClassroom, editClassroom, setClassroomFilter } from '../../actions/index';

const mapStateToProps = state => {
    console.log(state);
    return { classrooms: state.classrooms };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id_classroom => dispatch(deleteClassroom(id_classroom)),
    onEdit: (id_classroom, number_classroom, count_places, id_building) =>
        dispatch(editClassroom(id_classroom, number_classroom, count_places, id_building)),
    filter: setClassroomFilter()
});

const ClassroomListContainer = connect(mapStateToProps, mapDispatchToProps)(ClassroomList);

export default ClassroomListContainer;