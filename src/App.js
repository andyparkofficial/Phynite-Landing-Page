import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Blog from "./pages/Blog.js"
import FAQ from "./pages/FAQ.js"
import GetStarted from "./pages/GetStarted.js"
import WhitePaper from "./pages/WhitePaper.js"
import ScrollToTop from "./hooks/ScrollToTop.js";
import useWindowSize from "./hooks/useWindowSize.js";
import { useEffect, useState } from "react"

function App() {

  const [displayType, setDisplayType] = useState(null)


  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 600) {
      setDisplayType('mobile')
    } else {
      setDisplayType('computer')
    }
  }, [windowSize])
  

  return (
    <div className="">
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home
              displayType={displayType}
            />
          </Route>
          <Route path="/about">
            <About
              displayType={displayType}
            />
          </Route>
          <Route path="/blog">
            <Blog
              displayType={displayType}
            />
          </Route>
          <Route path="/phyniteProtocol">
            <WhitePaper
            displayType={displayType}/>
          </Route>
          <Route path="/faq">
            <FAQ
              displayType={displayType}
            />
          </Route>
          <Route path="/getStarted">
            <GetStarted
              displayType={displayType}
            />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
