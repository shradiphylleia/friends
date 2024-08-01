import React from "react";
import './side.css'

function Sidebar() {
  return (
    <>
      <div className="SideComponent">
        <h2 className="title">friends</h2>
        <h2>Select requirement</h2>
        <div className="Option">
        <label>
        <input type="radio" name="category" value="all" />
        All
      </label>
      <br />
      <label>
        <input type="radio" name="category" value="doctor" />
        Doctor
      </label>
      <br />
      <label>
        <input type="radio" name="category" value="petShop" />
        Pet Shop
      </label>
      <br />
      <label>
        <input type="radio" name="category" value="petCareProvider" />
        Care Provider
      </label>
        </div>
        <h3 className="Logout">Logout</h3>
      </div>
    </>
  );
}

export default Sidebar;
