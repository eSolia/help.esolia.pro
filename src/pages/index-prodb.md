---
title: クラウド型DB PROdb
url: /prodb/
id: prodbfolder
lang: ja
order: 100
templateEngine: [vto, md]
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/prodb/", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>