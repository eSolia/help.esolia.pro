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
import { enUS } from "npm:date-fns/locale/en-US";
import { ja } from "npm:date-fns/locale/ja";
import basePath from "lume/plugins/base_path.ts";
import favicon from "lume/plugins/favicon.ts";
import ogImages from "lume/plugins/og_images.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import attributes from "lume/plugins/attributes.ts";
import filterPages from "lume/plugins/filter_pages.ts";

// import cache_busting from "https://raw.githubusercontent.com/lumeland/experimental-plugins/c8778bfbf480f57a2357ab94bc22290b8bf11d12/cache_busting/mod.ts";

import "lume/types.ts";
import sri from "lume/plugins/sri.ts";


export default function () {
  return (site: Lume.Site) => {
    site.use(multilanguage(
      {
      languages: ["ja", "en"],
      defaultLanguage: "ja",
      }
    ))
    .use(codeHighlight())
    .use(attributes())
    .use(nav())
    .use(title())
    .use(ogImages())
    .use(metas())
    .use(sitemap())
    .use(toc())
    .use(footnotes())
    .use(postcss())
    .use(pagefind())
    .use(favicon())
    .use(prism())
    .use(resolveUrls())
    .use(date(
      {
        locales: { enUS, ja },
      }
    ))
    .use(basePath())
    .use(sri())
    .use(filterPages({
      fn: (page) => page.data.ignored !== true,
    }))
    // .use(cache_busting())
    .data("layout", "layout.vto")
    .data("og_images", "og_images.jsx")
    .data("date", "Git Last Modified")
    .mergeKey("extra_head", "stringArray")
    .copy([
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".svg",
      ".mp4",
      ".webm",
      ".gif",
      ".svg",
      ".pdf",
    ]);

    // Basic CSS Design System
    site.remoteFile(
      "_includes/css/ds.css",
      "https://unpkg.com/@lumeland/ds@0.5.2/ds.css",
    );
  };
}
