import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// The following function can be used as a fragment that sends the 
// window back up to the top when it loads a new route
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);