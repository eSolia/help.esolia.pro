import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssFontFormatKeywords from "https://deno.land/x/postcss_font_format_keywords/mod.js";
import lightningCss from "lume/plugins/lightningcss.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import terser from "lume/plugins/terser.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import base_path from "lume/plugins/base_path.ts";
// import netlify_cms from "lume/plugins/netlify_cms.ts";
import minify_html from "lume/plugins/minify_html.ts";
import imagick from "lume/plugins/imagick.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import metas from "lume/plugins/metas.ts";
import remark from "lume/plugins/remark.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";
import source_maps from "lume/plugins/source_maps.ts";

const site = lume({
	src: "./src",
	dest: "./_dist"
});

site
  .ignore("README.md")
  .copy("static", ".")
  .copy("_redirects")
  .use(code_highlight())
  .use(tailwindcss(
	  {
	  	// Extract the classes from HTML and JSX files
	  	extensions: [".html", ".jsx"],
	  	// Your Tailwind options, like the theme colors and fonts
	  	options: {
			theme: {
		  	colors: {
				blue: "#1fb6ff",
				purple: "#7e5bef",
				pink: "#ff49db",
		  	},
		  	fontFamily: {
				sans: ["Graphik", "sans-serif"],
				serif: ["Merriweather", "serif"],
		  	},
			},
	  	}, 
	  }
  ))
  .use(postcss(
	  {
		plugins: [postcssFontFormatKeywords()],
		keepDefaultPlugins: true,
	  }
  ))
  .use(lightningCss(
	  {
		extensions: [".css"],
		options: {
		  minify: true,
		  drafts: {
			nesting: true,
			customMedia: true,
		  },
		  targets: {
			android: version(98),
			chrome: version(98),
			edge: version(98),
			firefox: version(97),
			ios_saf: version(15),
			safari: version(15),
			opera: version(83),
			samsung: version(16),
		  },
		},
	  }
  ))
  .use(inline())
  .use(terser())
  .use(base_path())
  .use(sitemap())
//  .use(netlify_cms());
  .use(minify_html())
  .use(multilanguage())
  .use(metas())
  .use(remark())
  .use(attributes())
  .use(code_highlight())
  .use(date())
  .use(pagefind())
  .use(source_maps())

export default site;
