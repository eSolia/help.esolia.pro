---
title: M365
url: /m365/
id: m365folder
lang: ja
order: 200
templateEngine: [vto, md]
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/m365/", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>