import React from "react";
import NavLinks from "../NavLinks";
import Footer from "../Footer"
import Box from "../Box"
import TextExplanation from "../TextExplanation"
import Pcard from './Pcard'

import './product.css'

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
      <Box className="Products" ButtonClassName='OfferButton' onButtonClick={console.log("hi")} />
      <TextExplanation className="ServiceText"  text="Ability to book consultations,schedule vaccination reminders and book pet care provides" /> 
      </div>

      <div className="ProductCards">
        <Pcard className="Doctorcard" heading="Get discovered!" brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos praesentium, nobis doloremque itaque quam vel eaque aperiam ipsam voluptatum ad aliquam autem molestiae, iste, cumque eveniet dolorum. Amet, sed." link="/signup"/>
        <Pcard className="CareProvidercard" heading="Give your time and earn!" brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos praesentium, nobis doloremque itaque quam vel eaque aperiam ipsam voluptatum ad aliquam autem molestiae, iste, cumque eveniet dolorum. Amet, sed." link="/signup"/>
        <Pcard className="Usercard" heading="Get the best facilities!" brief="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dignissimos praesentium, nobis doloremque itaque quam vel eaque aperiam ipsam voluptatum ad aliquam autem molestiae, iste, cumque eveniet dolorum. Amet, sed." link="/signup"/>
      </div>

    <div className="ProductPricing">
      <Pcard className="DoctorPrice" heading="Pricing for Doctors" brief="99 per month*" link="dummy"/>
    </div>

      
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Product;

