import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "npm:octokit";

const username = Deno.env.get("USERNAME1")!;
const password = Deno.env.get("PASSWORD1")!;

const cms = lumeCMS({
  site: {
    name: "eSolia Help CMS",
    description: "Edit the content of the eSolia Help site",
    url: "https://help.esolia.pro",
    body: `
    <p>This is a bilingual English and Japanese help and how-to site, but every page does not require a translation. When you do have a translation pair, just be sure the id is the same for both pages in the pair. You can open a page and duplicate it, as a starting point. </p>
    `,
  },
  auth: {
    method: "basic",
    users: {
      // foo: "bar",
      [username]: password,
    },
  },
});

// Register GitHub storage
cms.storage(
  "gh",
  new GitHub({
    client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
    owner: "eSolia",
    repo: "help.esolia.pro",
  }),
);
// Register local storage
// cms.storage("gh", "/");

// Configure an upload folder
cms.upload("media", "gh:src/assets/img");

// Pages collection
cms.collection(
  "pages",
  "gh:/src/pages/*.md",
  [
    {
      name: "title",
      type: "text",
      label: "Title of the Page",
      description: "Visible in browser tab and page header",
      attributes: {
        required: true,
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Description for the Page",
      description: "Visible in search engine results",
      attributes: {
        required: true,
      },
    },
    {
      name: "image",
      type: "file",
      uploads: "media",
      attributes: {
        accept: "image/*",
      },
    },
    {
      name: "tags",
      type: "list",
      label: "Tags",
      description: "Tags to categorize the page",
      init(field) {
        field.options = ["PROdb", "M365", "Security", "Email", "Disaster", "セキュリティ", "メール", "災害"];
      },
      // init(field: any, { data }) {
      //   const site = data.site;
      //   const allTags = site.search.values("tags");
      //   field.options = allTags;
      // },
    },
    "draft: checkbox",
    // {
    //   name: "show_toc",
    //   type: "checkbox",
    //   label: "Show TOC on Page",
    //   description: "Checked causes the table of contents to show for the page",
    //   attributes: {
    //     required: false,
    //     value: true,
    //   },
    // },
    {
      name: "order",
      type: "number",
      label: "Order",
      description: "Order in which the page will appear in the menu",
      attributes: {
        required: true,
      },
    },
    {
      name: "lang",
      type: "select",
      label: "Language",
      description: "Select the language of the page content",
      attributes: {
        required: true,
      },
      options: [
        {
          label: "日本語",
          value: "ja"
        },
        {
          label: "English",
          value: "en"
        },
      ],
    },
    {
      name: "id",
      type: "text",
      label: "Unique ID for a Translation Pair",
      description: "Must be the same for each language version of the same page",
      attributes: {
        required: true,
      },
    },
    "content: markdown",
  ],
);


export default cms;