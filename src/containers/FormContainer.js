import { connect } from 'react-redux';

import From from '../components/department/Form';
import { addDepartment } from '../actions';

const mapDispatchToProps = dispatch => ({
    onAdd: (id_department, name_department, short_name_department, id_department_type, id_department_link) =>
        dispatch(addDepartment(id_department, name_department, short_name_department, id_department_type, id_department_link))
});

const FormContainer = connect(null, mapDispatchToProps)(From);

export default FormContainer;