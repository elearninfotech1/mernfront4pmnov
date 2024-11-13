import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="">Add Treatment</NavLink>
        </li>
        <li>
          <NavLink to="edittreatment">Delete & Edit Treatment</NavLink>
        </li>
        <li>
          <NavLink to="addoffer">Add Offers</NavLink>
        </li>
        <li>
          <NavLink to="editoffer">Delete & Edit Offers</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
