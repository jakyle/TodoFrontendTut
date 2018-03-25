import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export interface NavbarState {
}

interface NavbarProps {

}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  
  render() {

    return (
      <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/addtodo">Add</Link>
        <Link to="/removetodos">Remove</Link>
      </div>
    );
  }
}

export default Navbar;
