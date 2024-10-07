import postcss from "lume/plugins/postcss.ts"; //
import pagefind from "lume/plugins/pagefind.ts"; //
import resolveUrls from "lume/plugins/resolve_urls.ts"; //
import nav from "lume/plugins/nav.ts"; //
import title from "https://deno.land/x/lume_markdown_plugins@v0.7.1/title.ts"; //
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.1/toc.ts"; //
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.1/footnotes.ts"; //
import prism from "lume/plugins/prism.ts"; //
import date from "lume/plugins/date.ts"; //
import { enUS } from "npm:date-fns/locale/en-US";
import { ja } from "npm:date-fns/locale/ja";
import basePath from "lume/plugins/base_path.ts"; //
import favicon, { Options as FaviconOptions } from "lume/plugins/favicon.ts"; //
import phosphor, {
  Options as IconOptions,
} from "https://deno.land/x/lume_icon_plugins@v0.2.4/phosphor.ts"; //
import { alert } from "npm:@mdit/plugin-alert@0.13.1"; //
import multilanguage from "lume/plugins/multilanguage.ts"; //

// import codeHighlight from "lume/plugins/code_highlight.ts";
import ogImages from "lume/plugins/og_images.ts"; //
import metas from "lume/plugins/metas.ts"; //
import sitemap from "lume/plugins/sitemap.ts";
import attributes from "lume/plugins/attributes.ts";
import filterPages from "lume/plugins/filter_pages.ts";
import sri from "lume/plugins/sri.ts";
import "lume/types.ts"; //

// import cache_busting from "https://raw.githubusercontent.com/lumeland/experimental-plugins/c8778bfbf480f57a2357ab94bc22290b8bf11d12/cache_busting/mod.ts";
export interface Options {
  /**
   * Options for the favicon plugin.
   */
  favicon?: FaviconOptions;

  /**
   * Options for the phosphor plugin.
   */
  icons?: IconOptions;
    /**
   * Language options for the multilanguage plugin.
   * The first language is the default language.
   */
  languages?: string[];

  /**
   * Language names for the multilanguage plugin.
   * The key is the language code and the value is the language name.
   * This is used to display the language name in the language switcher.
   */
  languageNames?: Record<string, string>;
}

export default function (options: Options = {}) {
  return (site: Lume.Site) => {
    // site.use(multilanguage(
    //   {
    //   languages: ["ja", "en"],
    //   defaultLanguage: "ja",
    //   }
    // ))
    //.use(codeHighlight())
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
    .use(favicon(options.favicon))
    .use(prism())
    .use(resolveUrls())
    .use(date(
      {
        locales: { enUS, ja },
      }
    ))
    .use(basePath())
    .use(phosphor({
      ...options.icons,
      name: "icon",
    }))
    .use(sri())
    .use(filterPages({
      fn: (page) => page.data.ignored !== true,
    }))
    // .use(cache_busting())
    .data("layout", "layout.vto")
    .data("og_images", "og_images.jsx")
    .data("date", "Git Last Modified")
    .data("languages", options.languages || ["ja", "en"])
    .mergeKey("extra_head", "stringArray")
    //.copy(menu.js)
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

    // Multilanguage site
    if (options.languages?.length) {
      site.use(multilanguage({
        languages: options.languages,
        defaultLanguage: options.languages[0],
      }));

      const names = new Map<string, string>();
      options.languages.forEach((lang) => {
        if (options.languageNames?.[lang]) {
          names.set(lang, options.languageNames[lang]);
        } else {
          const dn = new Intl.DisplayNames(lang, { type: "language" });
          names.set(lang, dn.of(lang) || lang);
        }
      });
      site.filter("langName", (lang: string) => names.get(lang) || lang);
    }

    // Basic CSS Design System
    // site.remoteFile(
    //   "_includes/css/ds.css",
    //   "https://unpkg.com/@lumeland/ds@0.5.2/ds.css",
    // );

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

  };
}
