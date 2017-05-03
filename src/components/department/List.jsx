import  React from 'react';
import PropTypes from 'prop-types';

import Department from './Department';

function List(props) {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <td>Назва департамента</td>
                    <td>Коротка назва</td>
                    <td>Тип</td>
                </tr>
            </thead>
            <tbody>
                {props.departments.map(department =>
                    <Department
                        key={department.id_department}
                        id_department={department.id_department}
                        name_department={department.name_department}
                        short_name_department={department.short_name_department}
                        id_department_type={department.id_department_type}
                        id_department_link={department.id_department_link}
                        name_department_type={department.name_department_type}
                        onDelete={props.onDelete}
                        onEdit={props.onEdit}/>)}
            </tbody>
        </table>
    );
}

List.propTypes = {
    departments: PropTypes.arrayOf(PropTypes.shape({
        id_department: PropTypes.number.isRequired,
        name_department: PropTypes.string.isRequired,
        short_name_department: PropTypes.string.isRequired,
        id_department_type: PropTypes.number.isRequired,
        id_department_link: PropTypes.oneOfType([ PropTypes.number, PropTypes.null ])
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default List;