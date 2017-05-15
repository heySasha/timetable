import React from 'react';

import ClassroomFilterContainer from '../../containers/classrooms/ClassroomFilterContainer';
import ClassroomListContainer from '../../containers/classrooms/ClassroomListContainer';
import ClassroomFormContainer from '../../containers/classrooms/ClassroomFormContainer';

const Classrooms = () =>
    <main>
        <ClassroomFilterContainer />
        <ClassroomListContainer />
        <ClassroomFormContainer />
    </main>;

export default Classrooms;