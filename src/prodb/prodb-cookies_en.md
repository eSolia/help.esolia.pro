---
title: PROdb Cookies
date: Git Last Modified
description: What cookies are produced by the SaaS cloud database "PROdb"
order: 500
category: Service Details
lang: en
series: en-prodb
url: /prodb/prodb-cookies/
id: prodbcookies
tags:
  - PROdb
  - Cookies
---

# PROdb Cookies

PROdb's platform dbFLEX uses cookies for authentication, storing certain user preferences and tracking user movements around the site. No cookies, however, contain personally identifiable information, PII. 

## Standard

The following are the cookies utilized in versions 3 or 2 of the user interface:

* **.SOD** - authorization information. It contains no personal information and is encrypted to prevent third-parties from sniffing its content. Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **lastappid** - last visited database identifier, number. Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **opendoc** - short lived cookie for the "Navigate to Document" custom action, containing options for the document to generate. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Not visible for scripts. Short lived -- exists when navigating from the page executing Document Navigation action to a target page. Removed immediately after navigation.
* **td-wks** - currently selected workspace ID, number. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Set by script, read by the server.
* **v3** - (new) indicates the user switched to the new design (beta as of year end 2023). Not visible outside `https://your.dbflex.domain/secure/db/your-app-id`. Set by script, read by the server.

## Browser-only Settings

The following two are used by the V2 UI only, because the V3 UI stores browser-only settings in localStorage: 

* **td-sidebar** - show or hide the sidebar
* **td-dense** - use small or large fonts

## Setup Section

Finally, the two below are for setup pages used by system administrators:

* **CSRFToken** - short-lived cookie with encrypted randomly generated token used to protect from cross-site request forgery (currently in setup section). Not visible outside `https://your.dbflex.domain/secure`. Not visible for scripts.
* **pins** -- stores the list of pinned table IDs. Not visible outside `https://your.dbflex.domain/secure/db/your-app-id` or `https://your.dbflex.domain/secure/db/your-app-id/setup`. Set by script, read by the server.
