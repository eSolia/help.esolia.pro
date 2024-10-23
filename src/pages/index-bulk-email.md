---
title: バルクメール
url: /bulk-email/
id: bulkemailfolder
lang: ja
order: 300
templateEngine: [vto, md]
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/bulk-email/", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>