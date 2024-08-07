import React from "react";
import NavLinks from "../NavLinks";
import Footer from "../Footer";
import Box from "../Box";
import TextExplanation from "../TextExplanation";
import Quad from "../../Quad";

import "./about.css";

function About() {
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
        <Box
          className="Services"
          ButtonClassName="OfferButton"
          onButtonClick={console.log("hi")}
        />
        <TextExplanation
          className="ServiceText"
          text="Ability to book consultations,schedule vaccination reminders and book pet care provides"
        />
      </div>
      <div className="Explain">
      <img className="Dog" src="./src/assets/dog.png" alt="dog" />
        <Quad
          className="explainQuad"
          heading="friends"
          brief="At friends, we provide best-in-class care for your beloved pet friends. Our dedicated team of professionals ensures top-notch services tailored to meet the unique needs of each pet. With a focus on compassionate care and cutting-edge treatments, we strive to make every visit a positive experience for both pets and their owners. Trust us to keep your furry friends happy, healthy, and thriving. Be assured, your pets are in the best hands with us."
        />
      </div>
      {/* testimonials part using quad heading name breif comment ismae ek div fir usme ek aur div fir nichae quad */}
      {/* fir explore idhar */}
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
