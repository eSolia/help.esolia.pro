---
title: 防災
date: Git Last Modified
url: /bousai/
id: bousaifolder
lang: ja
order: 450
templateEngine: [vto, md]
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/pages/", "tags*=防災", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>