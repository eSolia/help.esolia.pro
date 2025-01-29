---
title: モダンスキルズ
url: /skills/
id: skillsfolder
lang: ja
order: 600
templateEngine:
  - vto
  - md
---

# インデックス
<ul class="menu">
  {{ for item of nav.menu("/skills/", "lang=ja", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>
