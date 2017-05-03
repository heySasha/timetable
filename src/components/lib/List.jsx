import  React from 'react';
import PropTypes from 'prop-types';

import Department from './Department';

function List(props) {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                {props.thead.map(name => <td>name</td>)}
            </tr>
            </thead>
            <tbody>

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