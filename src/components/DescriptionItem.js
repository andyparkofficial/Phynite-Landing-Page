import React, { useState, useEffect } from "react";
import caretDown from "../assets/caret-down.png";

export default function DescriptionItem(props) {
  const [border, setBorder] = useState(null);

  useEffect (()=>{
    if (props.menuOpened){
      setBorder("border-y border-gray1 pl-4 py-4 flex font-semibold text-lg items-center hover:cursor-pointer")
    } else {
      setBorder("border-t border-gray1 pl-4 py-4 flex font-semibold text-lg items-center hover:cursor-pointer")
    }
  },[props.menuOpened])

  function itemClicked() {
    return props.toggleDropdownMenu(props.itemIndex);
  }

  return (
    <div className="flex-col ">
      <div className={border} onClick={itemClicked}>
        <h2 className="text-white mr-2">{props.number}.</h2>
        <h1 className="text-white">{props.itemName}</h1>
        {props.children ? (
          <div className="flex-grow flex justify-end">
            <div
              className="w-4 mr-4 z-0 -translate-x-1"
            >
            {props.menuOpened ? (
              <img src={caretDown} className="-rotate-90 duration-75"></img>
              ) : (
              <img src={caretDown} className="rotate-0 duration-75"></img>
            )}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="text-sm font-normal">{props.children}</div>
    </div>
  );
}
