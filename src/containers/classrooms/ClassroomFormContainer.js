import { connect } from 'react-redux';

import ClassroomFrom from '../../components/classrooms/ClassroomForm';
import { addClassroom } from '../../actions/index';

const mapDispatchToProps = dispatch => ({
    onAdd: (id_classroom, number_classroom, count_places, id_building) =>
        dispatch(addClassroom(id_classroom, number_classroom, count_places, id_building))
});

const FormContainer = connect(null, mapDispatchToProps)(ClassroomFrom);

export default FormContainer;