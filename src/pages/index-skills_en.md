---
title: Modern Skills
url: /skills/
id: skillsfolder
lang: en
order: 600
templateEngine:
  - vto
  - md
---

# Section Index
<ul class="menu">
  {{ for item of nav.menu("/en/skills", "lang=en", "order=asc").children }}
    <li>
      {{ include "templates/menu_item.vto" { item } }}
    </li>
  {{ /for }}
</ul>
