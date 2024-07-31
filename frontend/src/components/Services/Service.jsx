import React from "react";
import NavLinks from "../NavLinks";
import Footer from "../Footer"
import Box from "../Box"
import TextExplanation from "../TextExplanation"

import './service.css'

function Product() {
  return (
    <div>
      <div className="Navbar">
        <div className="LeftNav">
          <NavLinks className="NavLink" name="About Us" redirect="/about" />
          <NavLinks className="NavLink" name="Services" redirect="/services" />
          <NavLinks className="NavLink" name="Product" redirect="/product" />
        </div>
        <div className="Home">
          <NavLinks className="HomeLink" name="friends" redirect="/" />
        </div>
      </div>
      <div className="OfferDetails">
      <Box className="Services" ButtonClassName='OfferButton' onButtonClick={console.log("hi")} />
      <TextExplanation className="ServiceText"  text="Ability to book consultations,schedule vaccination reminders and book pet care provides" /> 
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Product;
