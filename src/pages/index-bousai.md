---
title: 防災
url: /bousai/
id: bousaifolder
lang: ja
order: 450
templateEngine: [vto, md]
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/bousai/", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>