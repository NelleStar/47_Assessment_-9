import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

// NavBar component - returns a div that has a NavLink to go to '/' and a NavItem to take us to /snacks
function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

//export for use
export default NavBar;
