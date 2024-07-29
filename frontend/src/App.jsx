import React from "react";
import NavLinks from "./components/NavLinks";
import Button from "./components/Button";
import Header from "./components/Header";
import Box from "./components/Box";
import Auth from "./auth_service/Auth";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

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
        <div className="RightNav">
          <Button
            className={isAuthenticated ? "Logout" : "Login"}
            onButtonClick={handleButtonClick}
            name={isAuthenticated ? "Logout" : "Login"}
          />
        </div>
      </div>
      <div className="Landing">
        <Header className='HeaderLanding' text='Pet care services & products'/>
      </div>
      <div className="Offering">
        <Box className="Services" ButtonClassName='OfferButton' onButtonClick={handleButtonClick} />
        <Box className="Products" ButtonClassName='OfferButton' onButtonClick={handleButtonClick} />
        <Box className="About" ButtonClassName='OfferButton' onButtonClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;
