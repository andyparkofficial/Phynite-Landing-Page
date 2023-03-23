require("@babel/register")({
    extends: "./.babelrc",
});
require.extensions[".scss"] = () => {}
require.extensions[".jpg"] = () => {}
require.extensions[".png"] = () => {}
require.extensions[".svg"] = () => {}
require.extensions[".css"] = () => { }
require.extensions[".mp4"] = () => {}
   
  const router = require("./App.jsx").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://www.phynite.io")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();