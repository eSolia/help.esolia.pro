[![Netlify Status](https://api.netlify.com/api/v1/badges/7bfb45da-9787-468c-bb64-158e43108f49/deploy-status)](https://app.netlify.com/sites/help-esolia-pro/deploys)

# help.esolia.pro

This doc site is built and based on [lume](https://lume.land/), the static site generator for deno, and is hosted on [Netlify](https://netlify.com) as static files. It's intended to give details about topics that might be too much for eSolia's main marketing sites, such as details about the security of our PROdb cloud database or bulk email error codes. It takes advantage of the i18n feature of lume to generate content pages in English and Japanese. 

Thank you, [Óscar Otero](https://github.com/oscarotero), for lume and all your support on Discord. 🙏🏻

## Mechanics
### Deno-related

Upgrade:

```
> deno task lume upgrade
```

Serve locally:

```
> deno task lume --serve
```

### Markdown
If you set `templateEngine: [vto, md]` in frontmatter, you can use components or call helpers: 

```
{{ comp.callout({
  text: "Lorem ipsum", 
  type: "warning"
  })}}
```

With just the markdown engine you can use "alerts", which come from the alert plugin to markdown-it allowing [github-style alerts](https://github.com/orgs/community/discussions/16925):

```
> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```
