import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select>
                {props.data.map(item =>
                    <option value={item.id}>{item.value}</option>)}
            </select>
        );

    }

}