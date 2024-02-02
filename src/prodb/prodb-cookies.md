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
          
# PROdb クッキー

PROdbのプラットフォームdbFLEXは、認証、特定のユーザー設定の保存、及びサイト内でのユーザーの動きの追跡のためにクッキーを使用します。ただし、個人を特定できる情報(PII)を含むクッキーはありません。

## 標準

ユーザーインターフェイスのバージョン３またはバージョン２で使用されるクッキーは次の通りです。

* **.SOD** - 認証情報。個人情報は含まれておらず、第三者が内容を盗み見ることを防ぐために暗号化もされております。`https://your.dbflex.domain/secure` 以外では表示されません。スクリプトでは表示されません。
* **lastappid** - 最後にアクセスしたデータベースの識別子、番号。`https://your.dbflex.domain/secure`以外では表示されません。スクリプトでは表示されません。
* **opendoc** - 「ドキュメントへ移動」というカスタムアクション用クッキーで、ドキュメントを生成するためのオプションが含まれてます。`https://your.dbflex.domain/secure/db/your-app-id` 以外では表示されません。スクリプトでは表示されません。有効期限は短い - ドキュメントナビゲーションアクションを実行しているページからターゲットページに移動するときに存在するのみでナビゲーション直後に削除されます。
* **td-wks** - 現在選択されているワークスペースID、番号。`https://your.dbflex.domain/secure/db/your-app-id`以外では表示されません。スクリプトによって設定され、サーバーによって読み込まれます。
* **v3** - この新クッキーは、ユーザーが新しいV3デザイン（2023年末時点でべーた版）に切り替えたことを示します。`https://your.dbflex.domain/secure/db/your-app-id`以外では表示されません。スクリプトによって設定され、サーバーによって読み込まれます。

## ブラウザーのみ設定

V3 UIはブラウザー専用の設定をlocalStorageに保存するため、以下の２つはV2 UIのみで使用されます。

* **td-sidebar** - ユーザー毎サイドバーの表示または非表示
* **td-dense** - ユーザー毎小さいフォントまたは大きいフォントの使用

## 管理者用 Setup セクション

最後に、以下の2つはシステム管理者が使用するSETUP（設定）ページです。

* **CSRFToken** - クロスサイトリクエストフォージェリから保護するために使用される暗号化されたランダムに生成されたトークンを含む有効期間の短いクッキー（現在SETUPセクションにあります）。`https://your.dbflex.domain/secure`以外では表示されません。スクリプトでは表示されません。
* **pins** -- ピン留めされたテーブルIDのリストを保存します。`https://your.dbflex.domain/secure/db/your-app-id`または`https://your.dbflex.domain/secure/db/your-app-id/setup`以外では表示されません。スクリプトに設定され、サーバーに読み込まれます。
