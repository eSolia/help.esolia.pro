import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssFontFormatKeywords from "https://deno.land/x/postcss_font_format_keywords/mod.js";
import codeHighlight from "lume/plugins/code_highlight.ts";
import inline from "lume/plugins/inline.ts";
import terser from "lume/plugins/terser.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import esbuild from "lume/plugins/esbuild.ts";
// import netlify_cms from "lume/plugins/netlify_cms.ts";
import imagick from "lume/plugins/imagick.ts";
import metas from "lume/plugins/metas.ts";
// import remark from "lume/plugins/remark.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import pagefind from "lume/plugins/pagefind.ts";
// import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";
import sourceMaps from "lume/plugins/source_maps.ts";

const markdown = {
  plugins: [toc],
  keepDefaultPlugins: true,
};

const site = lume(
	{
	location: new URL("https://help.esolia.pro"),
	server: {
		page404: "/en/404/"
	},
	src: "./src",
	dest: "./_dist"
    },
	{ markdown },
);

site
  .ignore("README.md")
  .ignore("velociraptor.json")
  .ignore("scripts")
  .copy("static", ".")
  // .copy("_redirects")
  .use(multilanguage())
  .use(codeHighlight())
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
		},
	  }
  ))
  .use(inline())
  .use(esbuild({
	  extensions: [".js"],
	}))
  .use(imagick({
	  functions: {
		cropCenter(image, width: number, height: number) {
		  image.crop(width, height, 5);
		},
	  },
	}))
  .use(terser())
//  .use(netlify_cms());
  .use(metas())
//  .use(remark())
  .use(attributes())
  .use(codeHighlight())
  .use(date())
  .use(pagefind({
		binary: {
		  path: "./_bin/pagefind", // Binary location
		  extended: true, // Set true for Chinese and Japanese support.
		},
	  }))
  .use(sourceMaps({
		inline: true,
		sourceContent: false,
	  }))
  .use(sitemap())
  .scopedUpdates(
	  (path) => path.endsWith(".png") || path.endsWith(".jpg"),
	)
  .filter("slice", (arr, length) => arr.slice(0, length))
  .process([".html"], (page) => {
	  const doc = page.document!;
	  const blocks = doc.querySelectorAll("lume-code");
  
	  blocks.forEach((block, i) => {
		const pres = (block as unknown as HTMLElement).querySelectorAll(
		  ":scope > pre",
		);
  
		const menu = doc.createElement("ul");
		menu.setAttribute("role", "tablist");
		menu.setAttribute("aria-label", "Code Tabs");
		menu.classList.add("lume-code-menu");
  
		pres.forEach((pre, j) => {
		  const title = pre.querySelector("code")!.getAttribute("title")!;
  
		  const li = doc.createElement("li");
		  li.setAttribute("role", "presentation");
  
		  const button = doc.createElement("button");
		  button.setAttribute("role", "tab");
		  button.setAttribute("aria-selected", j === 0 ? true : false);
		  button.setAttribute("aria-controls", `panel-${i + 1}-${j + 1}`);
		  button.setAttribute("id", `tab-${i + 1}-${j + 1}`);
		  button.setAttribute("tabindex", j === 0 ? 0 : -1);
		  button.innerText = title;
		  button.classList.add("lume-code-tab");
  
		  if (j > 0) {
			pre.setAttribute("hidden", "true");
		  } else {
			button.classList.add("is-active");
		  }
  
		  pre.setAttribute("role", "tabpanel");
		  pre.setAttribute("aria-labelledby", `tab-${i + 1}-${j + 1}`);
		  pre.setAttribute("id", `panel-${i + 1}-${j + 1}`);
		  pre.setAttribute("tabindex", "0");
  
		  li.append(button);
		  menu.appendChild(li);
		});
  
		(block as unknown as HTMLElement).prepend(menu as unknown as Node);
	  });
	})
  //.use(minifyHTML())

export default site;
