import  React from 'react';

import BuildingListContainer from '../../containers/buildings/BuildingListContainer';
import BuildingFormContainer from '../../containers/buildings/BuildingFormContainer';

const Buildings = () =>
    <main>
        <BuildingListContainer />
        <BuildingFormContainer />
    </main>;

export default Buildings;