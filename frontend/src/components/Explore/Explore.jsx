import React from 'react'
import Profile from '../Services/Profile'
import NavLinks from "../NavLinks";

import './explore.css'
import SearchBar from '../SearchBar';

function Explore() {
  return (
    <>
        <div className="Navbar">
        <div className="LeftNav">
          <NavLinks className="NavLink" name="About Us" redirect="/about" />
          <NavLinks className="NavLink" name="Services" redirect="/services" />
          <NavLinks className="NavLink" name="Product" redirect="/product" />
        </div>
        <div className="Home">
          <NavLinks className="HomeLink" name="friends" redirect="/" />
        </div>
        <div className="SearchBar">
        <SearchBar/>
      </div>
      </div>
        <div className="ExplorePage">
        <div className="Row">
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        </div>
        <div className="Row">
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        </div>
        <div className="Row">
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        </div>
        <div className="Row">
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        </div>
        <div className="Row">
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        <Profile className="UserProfile" username="A" occupation="Doctor" location="India"/>
        </div>
        </div>
        
    </>
  )
}

export default Explore