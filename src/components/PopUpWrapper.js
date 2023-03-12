import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../styles.css"

export default function PopUpWrapper(props) {

  return (

    <CSSTransition
        in={props.popUpOn}
        unmountOnExit
        timeout={{appear:10,enter:300, exit:300}}
        classNames="pop-up"
        >
        <div className= "">
            {props.children}
        </div>
        
    </CSSTransition>
  );
}