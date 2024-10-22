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
    <p>This is a bilingual site, but every page does not need a translation. Just be sure the id is the same.</p>
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

// PROdb collection
cms.collection(
  "prodb",
  "gh:/src/prodb/*.md",
  [
    "title: text",
    {
      name: "summary",
      type: "textarea",
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
    "tags: list",
    "draft: checkbox",
    "show_toc: checkbox",
    "content: markdown",
  ],
);

// Security collection
cms.collection(
  "security",
  "gh:/src/security/*.md",
  [
    "title: text",
    {
      name: "summary",
      type: "textarea",
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
    "tags: list",
    "draft: checkbox",
    "show_toc: checkbox",
    "content: markdown",
  ],
);

export default cms;