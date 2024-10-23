import lume from "lume/mod.ts";
import wiki from "wiki/mod.ts";

//add to base from wiki
import date from "lume/plugins/date.ts"; //
import { enUS } from "npm:date-fns/locale/en-US";
import { ja } from "npm:date-fns/locale/ja";
import metas from "lume/plugins/metas.ts"; 
import sitemap from "lume/plugins/sitemap.ts";
import attributes from "lume/plugins/attributes.ts";
import filterPages from "lume/plugins/filter_pages.ts";
import sri from "lume/plugins/sri.ts";
// import autoTrim from "vento/plugins/auto_trim.ts";
import terser from "lume/plugins/terser.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
  src: "./src",
  location: new URL("https://help.esolia.pro"),
});
site.use(wiki({
  languages: ["ja", "en"],
  defaultLanguage: "ja",
}));
site.use(date(
  {
    locales: { enUS, ja },
  }
))
site.use(metas());
site.use(sitemap());
site.use(attributes());
site.use(filterPages({
  fn: (page) => page.data.ignored !== true,
}))
site.use(sri());
// env.use(autoTrim());
site.use(terser());
site.use(lightningCss());

site.copy("assets");
site.copy("menu.js");

// Create zip and tree scripts
site.script("zipsite", "zip -r _site/help_esolia_pro_site.zip _site");
site.script("maketree", "cd _site && tree -H . -L 5 --charset utf-8 -C -h -o esolia_help_tree.html");
// Execute scripts after build
site.addEventListener("afterBuild", "zipsite");
site.addEventListener("afterBuild", "maketree");

export default site;
