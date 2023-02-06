import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Blog from "./pages/Blog.js"
import FAQ from "./pages/FAQ.js"
import GetStarted from "./pages/GetStarted.js"
import WhitePaper from "./pages/WhitePaper.js"
import ScrollToTop from "./hooks/ScrollToTop.js";


function App() {
  return (
    <div className="">
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home
            />
          </Route>
          <Route path="/about">
            <About
            />
          </Route>
          <Route path="/blog">
            <Blog
            />
          </Route>
          <Route path="/phyniteProtocol">
            <WhitePaper />
          </Route>
          <Route path="/faq">
            <FAQ
            />
          </Route>
          <Route path="/getStarted">
            <GetStarted
            />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
