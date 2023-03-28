import { Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, NavbarBrand } from "reactstrap";

const Navbars = () => {

  const { state } = useLocation();

  return (
    <div className="px-5 py-1" style={{backgroundColor: '#002B5B'}}>
      <Navbar>
        <NavbarBrand href="/" className="text-white">
          My Online Shopping Site
        </NavbarBrand>
        <div>
        <Button   variant="contained" style={{backgroundColor : '#57c5b6' , borderColor: '#57c5b6'}} outline>
        <Link to='/dashboard/editprofile' state={state}  className="text-decoration-none text-white">Edit Profile</Link>
        </Button>
        <Button className="mx-2" variant="outlined" style={{color : '#57c5b6' , borderColor: '#57c5b6'}} outline>
            Logout
        </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbars;