import React from 'react';
import PropTypes from 'prop-types';

function FilterLink(props) {
    console.log('FilterLink', props.active);
    return (
        <a className={props.active ? 'is-active' : ''} onClick={props.onClick}>
            <i className="material-icons">{props.icon}</i>
        </a>
    );
}

FilterLink.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLink;

// oneOfType([ PropTypes.number, PropTypes.null ])