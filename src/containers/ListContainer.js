import { connect } from 'react-redux';

import List from '../components/department/List';
import { deleteDepartment, editDepartment } from '../actions';

const mapStateToProps = state => {
    console.log(state.departments);
    return { departments: state.departments };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id_department => dispatch(deleteDepartment(id_department)),
    onEdit: (id_department, name_department, short_name_department, id_department_type) =>
        dispatch(editDepartment(id_department, name_department, short_name_department, Number(id_department_type)))
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;