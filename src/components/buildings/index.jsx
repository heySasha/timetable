import  React from 'react';

import BuildingListContainer from '../../containers/BuildingListContainer';
import BuildingFormContainer from '../../containers/BuildingFormContainer';

function Buildings() {
    return (
        <main>
            <BuildingListContainer />
            <BuildingFormContainer />
        </main>
    )
}

export default Buildings;