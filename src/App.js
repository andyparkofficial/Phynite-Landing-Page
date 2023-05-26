import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Blogs from "./pages/Blogs.js"
import Blog from "./pages/Blog.js"
import FAQ from "./pages/FAQ.js"
import GetStarted from "./pages/GetStarted.js"
import ScrollToTop from "./hooks/ScrollToTop.js";
import useWindowSize from "./hooks/useWindowSize.js";
import { useEffect, useState } from "react"
import TermsOfService from "./pages/TermsOfService.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import ReactGA from "react-ga4"

function App() {

  const [displayType, setDisplayType] = useState(null)


  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 600) {
      setDisplayType('mobile')
    } else if (windowSize.width <= 900) {
      setDisplayType('tablet')
    } else if (windowSize.width <= 1350) {
      setDisplayType("smallComputer")
    }
    else {
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
          <Route path="/blogs">
            <Blogs
              displayType={displayType}
            />
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
          <Route path="/blog/:blogName">
            <Blog
              displayType={displayType}
            />
          </Route>
          <Route path="/termsOfService">
            <TermsOfService
              displayType={displayType}
            />
          </Route>
          <Route path="/privacyPolicy">
            <PrivacyPolicy
              displayType={displayType}
            />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
