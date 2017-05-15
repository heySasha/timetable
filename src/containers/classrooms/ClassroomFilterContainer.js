import { connect } from 'react-redux';

import { setClassroomFilter, GET_BUILDINGS } from '../../actions/index';
import ClassroomFilter from '../../components/classrooms/ClassroomFilter';

function mapStateToProps(state) {
    return {
        activeFilter: state.classroomFilter,
        buildings: state.buildings
    };
}

const mapDispatchToProps = dispatch => ({
    onSetFilter: filter => dispatch(setClassroomFilter(filter))
});

const ClassroomFilterContainer = connect(mapStateToProps, mapDispatchToProps)(ClassroomFilter);

export default ClassroomFilterContainer;