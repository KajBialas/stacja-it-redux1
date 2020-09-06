import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/subpage">Subpage</Link>
      <Link to="/todo">Todos</Link>
    </div>
  )
}

export default Nav;