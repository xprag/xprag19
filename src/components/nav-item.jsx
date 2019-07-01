import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class NavItem extends React.Component {
  render() {
    console.log(this.context.router.route.location.pathname, this.props.to);
    var isActive =
      this.context.router.route.location.pathname === this.props.to;
    var liClassName = isActive ? "nav-item active" : "nav-item";
    var nlClassName = this.props.isDisabled ? "nav-link disabled" : "nav-link";

    return (
      <li className={liClassName} {...this.props}>
        <NavLink className={nlClassName} to={this.props.to}>
          {this.props.children}
        </NavLink>
      </li>
    );
  }
}

NavItem.contextTypes = {
  router: PropTypes.object
};

export default NavItem;
