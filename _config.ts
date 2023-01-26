import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import base_path from "lume/plugins/base_path.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
// import netlify_cms from "lume/plugins/netlify_cms.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import metas from "lume/plugins/metas.ts";
import remark from "lume/plugins/remark.ts";
import attributes from "lume/plugins/attributes.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import date from "lume/plugins/date.ts";
import pagefind from "lume/plugins/pagefind.ts";
import source_maps from "lume/plugins/source_maps.ts";

const site = lume();

site.use(terser());
site.use(base_path());
site.use(tailwindcss());
site.use(postcss());
site.use(sitemap());
// site.use(netlify_cms());
site.use(minify_html());
site.use(multilanguage());
site.use(metas());
site.use(remark());
site.use(attributes());
site.use(code_highlight());
site.use(date());
site.use(pagefind());
site.use(source_maps());

site.copy("static", ".")

export default site;
