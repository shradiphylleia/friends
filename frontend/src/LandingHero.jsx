import React from "react";
import Quad from "./Quad";

function LandingHero() {
  return (
    <>
      <div className="Hero">
        <div className="Hero1">
          <Quad
            className="Quad1"
            heading="Pet Boarding and Sitting"
            brief="Your pet’s staycations while you are on vacation."
          />
        </div>
        <div className="Hero2">
          <Quad
            className="Quad2"
            heading="Vet consultations"
            brief="Book appointments.Hassle free.Easy"
          />
          <Quad
            className="Quad3"
            heading="Pet Vaccination Reminder"
            brief="Pet health management"
          />
        </div>
        <div className="Hero3">
        <Quad
          className="Quad4"
          heading="Grooming & hygiene"
          brief="Book grooming and hygiene sessions"
          />
        </div>
      </div>
    </>
  );
}

export default LandingHero;
