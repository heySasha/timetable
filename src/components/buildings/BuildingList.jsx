import  React from 'react';
import PropTypes from 'prop-types';

import Building from './Building';

function BuildingList(props) {
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <td>Назва</td>
                <td>Номер</td>
                <td>Адрес</td>
                <td/>
            </tr>
            </thead>
            <tbody>
            {props.buildings.map(building =>
                <Building
                    key={building.id_building}
                    id_building={building.id_building}
                    name_building={building.name_building}
                    number_building={Number(building.number_building)}
                    address_building={building.address_building}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}/>)}
            </tbody>
        </table>
    );
}

BuildingList.propTypes = {
    buildings: PropTypes.arrayOf(PropTypes.shape({
        id_building: PropTypes.number.isRequired,
        name_building: PropTypes.string.isRequired,
        number_building: PropTypes.number.isRequired,
        address_building: PropTypes.string.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default BuildingList;