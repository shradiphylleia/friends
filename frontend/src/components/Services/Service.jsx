import React from "react";
import NavLinks from "../NavLinks";
import Footer from "../Footer"
import Box from "../Box"
import TextExplanation from "../TextExplanation"
import Calendar from "./Calendar"
import Reminder from "./Reminder";
import Button from "../Button";


import './service.css'
import Profile from "./Profile";


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
      <div className="CalendarBox">
      <TextExplanation className="CalendarText" text="Book Hassle free with ease.Vet appointments,vaccinations & more"/>
      <Calendar className="Calendarrep"/>
      {/* when the rep square is clicked then pet cat cow dog shows */}
      </div>
      <div className="Reminder">
        <Reminder className='Reminderbox' ButtonClassName="ReminderLogin" name="Get Started" onButtonClick={console.log("loginButton")}/>
      </div>
      <div className="Explore">
      <Profile className="doctor"  username="Dr.qw" occupation="Vetenerian" location="India"/>
      <Profile className="provider"  username="Rue" occupation="Caretaker" location="India"/>
      <Profile className="doctor"  username="Dr.qw" occupation="Vetenerian" location="India"/>
      </div>
      <Button className="ExploreLogin" onCilck={()=>redirect='/explore'} name="Explore"/>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Product;
