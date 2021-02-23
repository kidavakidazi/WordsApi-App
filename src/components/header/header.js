import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import './header.css'

const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <Button className="header--button__home" size='large' color='primary'>Home</Button>
      </Link>
      <Link to="/word">
        <Button className="header--button__word" size='large' color='primary'>Word</Button>
      </Link>
    </div>
  );
};

export default Header;