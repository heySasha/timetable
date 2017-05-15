import { connect } from 'react-redux';

import BuildingFrom from '../../components/buildings/BuildingForm';
import { addBuilding } from '../../actions/index';

const mapDispatchToProps = dispatch => ({
    onAdd: (id_building, name_building, number_building, address_building) =>
        dispatch(addBuilding(id_building, name_building, number_building, address_building))
});

const FormContainer = connect(null, mapDispatchToProps)(BuildingFrom);

export default FormContainer;