import React from 'react';
import { Link } from 'react-router';

export  default function NavLink(props) {
    return <Link activeClassName="is-active" {...props}/>
}