---
title: PROdb クッキー
date: Git Last Modified
description: 信頼できるSaaSクラウド型データーベース「PROdb」はどんなクッキーを作成するか。
order: 500
category: サービス詳細
lang: ja
series: ja-prodb
url: /PROdb/prodb-cookies/
id: prodbcookies
tags:
  - PROdb
  - クッキー
---

**COMING SOON:** 時期日本語版も公開いたしますので、暫くお待ちください！ {.tip}
          
# PROdb クッキー

PROdb's platform dbFLEX uses cookies for authentication, storing certain user preferences and tracking user movements around the site. No cookies, however, contain personally identifiable information. 

## 標準

The following are the cookies utilized in versions 3 or 2 of the user interface:

* **.SOD** - authorization information. It contains no personal information and is encrypted to prevent third-parties from sniffing its content. Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **lastappid** - last visited database identifier, number. Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **opendoc** - short lived cookie for Navigate to Document custom action, contains options for the document to generate. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Not visible for scripts. Short lived -- exists when navigating from the page executing Document Navigation action to a target page. Removed immediately after navigation.
* **td-wks** - currently selected workspace ID, number. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Set by script, read by the server.
* **v3** - (new) indicates the user switched to the new design (beta as of year end 2023). Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Set by script, read by the server.

## ブラウザーのみ設定

The following two are used by the V2 UI only, because the V3 UI stores browser-only settings in localStorage: 

* **td-sidebar** - show or hide the sidebar
* **td-dense** - use small or large fonts

## 管理者用 Setup セクション

Finally, the two below are for setup pages used by system administrators:

* **CSRFToken** - short-lived cookie with encrypted randomly generated token used to protect from cross-site request forgery (currently in setup section). Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **pins** -- stores the list of pinned table IDs. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id` or `https://your.dbflex.domain/secure/db/your-app-id/setup`. Set by script, read by the server.
