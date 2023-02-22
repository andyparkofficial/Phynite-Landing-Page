import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function DescriptionDropdownMenu(props) {
  const [menuHeight, setMenuHeight] = useState(null);

  const ref = useRef(null)

  useEffect(()=>{
    setMenuHeight(ref.current.clientHeight)
  },[])

  function heightOnEnter(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function heightOnExit() {
    setMenuHeight(0);
  }

  return (
    <div
      style={{ height: menuHeight }}
      className="overflow-hidden bg-gray4 dropdown"
    >
      <CSSTransition
        ref={ref}
        in={props.menuOpened}
        unmountOnExit
        timeout={500}
        onEnter={heightOnEnter}
        onExit={heightOnExit}
      >
        {props.children}
      </CSSTransition>
    </div>
  );
}
