import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "assets/img/reactlogo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo" disabled style ={{backgroundColor: 'rgb(53, 54, 56)'}}>
          {/* this               is                for            app             logo*/}
           {/* <a
            href="#"
            className="simple-text logo-mini" 
          >  */}
            {/* <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div> */}
          {/* </a> */}
          <img src={require("../../assets/img/rocon-white.png")} style={{size:'50px'}}/>
          {/* <a
            href="#"
            className="simple-text logo-normal" 
           style={{textAlign:'center'}}>
               RO=C=N
          </a> */}
        </div>
        <div className="sidebar-wrapper" style ={{colorText:'white',backgroundColor: 'rgb(53, 54, 56)'}}>
          <ul className="nav" >
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                        
                    }
                    key={key}
                    style ={{backgroundColor: 'rgb(53, 54, 56)'}}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p style={{color:'white'}}>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
