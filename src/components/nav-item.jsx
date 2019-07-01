import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class NavItem extends React.Component {
  render() {
    const { to, isDisabled, children } = this.props;
    var isActive = this.context.router.route.location.pathname === to;
    var liClassName = isActive ? "nav-item active" : "nav-item";
    var nlClassName = isDisabled ? "nav-link disabled" : "nav-link";

    return (
      <li className={liClassName}>
        <NavLink className={nlClassName} to={to}>
          {children}
        </NavLink>
      </li>
    );
  }
}

NavItem.contextTypes = {
  router: PropTypes.object
};

export default NavItem;
