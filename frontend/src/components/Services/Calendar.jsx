import React from "react";
import Square from "./Square"

const date=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

function Calendar({className}) {
  return (
    <>
      <div className={className}>
      <div className="row">
        <Square date={date[0]}/>
        <Square date={date[1]}/>
        <Square date={date[2]}/>
        <Square date={date[3]}/>
        <Square date={date[4]}/>
        <Square date={date[5]}/>
      </div>

      <div className="row">
        <Square date={date[6]}/>
        <Square date={date[7]}/>
        <Square date={date[8]}/>
        <Square date={date[9]}/>
        <Square date={date[10]}/>
        <Square date={date[11]}/>
      </div>

      <div className="row">
        <Square date={date[12]}/>
        <Square date={date[13]}/>
        <Square date={date[14]}/>
        <Square date={date[15]}/>
        <Square date={date[16]}/>
        <Square date={date[17]}/>
      </div>

      <div className="row">
        <Square date={date[18]}/>
        <Square date={date[19]}/>
        <Square date={date[20]}/>
        <Square date={date[21]}/>
        <Square date={date[22]}/>
        <Square date={date[23]}/>
      </div>

      <div className="row">
        <Square date={date[24]}/>
        <Square date={date[25]}/>
        <Square date={date[26]}/>
        <Square date={date[27]}/>
        <Square date={date[28]}/>
        <Square date={date[29]}/>
      </div>
      </div>
    </>
  );
}

export default Calendar;
