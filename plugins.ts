import multilanguage from "lume/plugins/multilanguage.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import postcss from "lume/plugins/postcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import nav from "lume/plugins/nav.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.7.0/title.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.0/footnotes.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import attributes from "lume/plugins/attributes.ts";
import filterPages from "lume/plugins/filter_pages.ts";

import "lume/types.ts";

export default function () {
  return (site: Lume.Site) => {
    site.use(multilanguage(
      {
      languages: ["ja", "en"],
      defaultLanguage: "ja",
      }
    ));
    site.use(codeHighlight());
    site.use(attributes());
    site.use(nav());
    site.use(title());
    site.use(metas());
    site.use(sitemap());
    site.use(toc());
    site.use(footnotes());
    site.use(postcss());
    site.use(pagefind());
    site.use(favicon());
    site.use(prism());
    site.use(resolveUrls());
    site.use(date());
    site.use(basePath());
    site.use(filterPages({
      fn: (page) => page.data.ignored !== true,
    }));
    site.data("layout", "layout.vto");
    site.data("date", "Git Last Modified");
    site.copy([
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".svg",
      ".mp4",
      ".webm",
      ".gif",
      ".svg",
    ]);

    // Basic CSS Design System
    site.remoteFile(
      "_includes/css/ds.css",
      "https://unpkg.com/@lumeland/ds@0.3.3/ds.css",
    );
  };
}
