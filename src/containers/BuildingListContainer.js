import { connect } from 'react-redux';

import BuildingList from '../components/buildings/BuildingList';
import { deleteBuilding, editBuilding } from '../actions';

const mapStateToProps = state => {
    console.log(state);
    return { buildings: state.buildings };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id_building => dispatch(deleteBuilding(id_building)),
    onEdit: (id_building, name_building, number_building, address_building) =>
        dispatch(editBuilding(id_building, name_building, number_building, address_building))
});

const BuildingListContainer = connect(mapStateToProps, mapDispatchToProps)(BuildingList);

export default BuildingListContainer;