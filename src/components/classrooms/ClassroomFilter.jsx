import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

function ClassroomFilter(props) {
    return (
        <div>
            {props.buildings.map(building =>
                <FilterLink
                    key={building.id_building}
                    icon={building.name_building}
                    active={props.activeFilter}
                    onClick={() => props.onSetFilter(building.id_building)} />)}
        </div>
    );
}

ClassroomFilter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onSetFilter: PropTypes.func.isRequired
};

export default ClassroomFilter;