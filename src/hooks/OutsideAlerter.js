import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, handleClick) {

  
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return handleClick()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({ children, handleClick, widthFull = false }) {
  const [style, setStyle] = useState("h-full")
  useEffect(() => {
    if (widthFull === true) {
      setStyle('h-full w-full')
    } else {
      setStyle('h-full')
    }
  },[widthFull])
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleClick);

  return <div className={style} ref={wrapperRef}>{children}</div>;
}