---
title: Bulk Email
date: Git Last Modified
url: /bulk-email/
id: bulkemailfolder
lang: en
order: 300
templateEngine: [vto, md]
---

# Index of Subpages
<ul class="menu">
  {{ for item of nav.menu("/en/bulk-email", "lang=en", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>
