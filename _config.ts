import lume from "lume/mod.ts";
import notes from "./mod.ts";

const site = lume({
  src: "./src",
});
site.use(notes());
site.copy("assets");
site.copy("menu.js");

// Create zip and tree scripts
site.script("zipsite", "zip -r _site/help_esolia_pro_site.zip _site");
site.script("maketree", "cd _site && tree -H . -L 5 --charset utf-8 -C -h -o esolia_help_tree.html");
// Execute scripts after build
site.addEventListener("afterBuild", "zipsite");
site.addEventListener("afterBuild", "maketree");

export default site;
