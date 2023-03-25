---
title: アプリ アーキテクチャー
date: Git Last Modified
description: PROdbの、モダン且つセキュリティ重視しているアプリケーションアーキテクチャーをご紹介します。
order: 300
category: サービス詳細
lang: ja
series: ja-prodb
url: /prodb/prodb-application-architecture/
id: prodbapparchi
tags:
  - PROdb
  - 構成
  - アーキテクチャー
---

# アプリケーション アーキテクチャー
## モダン且つセキュリティ重視しているアプリケーション
dbFLEX アプリケーション アーキテクチャーは次の通りとなります：

<img src="/img/figure-dbflex-system-architecture.png" width="100%" alt="図： PROdb アプリ アーキテクチャー">


-   dbFLEX は SQL データーベースの論理的ビューを提供してます。
-   一つの物理サーバーと SQL データーベースに、複数社のデータがありますが、データ･アクセス･レイヤー DAL と言う技術を使って、各論理 "データベースアプリケーション" で徹底的に別けてます。DAL しか直接 SQL テーブルにアクセス出来ません。
-   例えば、dbFLEX でユーザーが View（一覧や図など）を閲覧しようとする場合：

    1.  View が Table の下に作られていて、表示する Column と検索条件で出来ている。
    2.  閲覧依頼が来たら、View を表示するページが DAL に依頼を渡す。
    3.  DAL が Database のメタデータを見て、この View が入っている Table がこの Database のメンバーかどうか、閲覧するユーバーが Table と View の権限あるかどうか、各 Column にも閲覧権限が十分かどうかを確認する。
    4.  Column レベルで権限なければ、アクセスが完全拒否されるか、Column が隠されて表示する場合もある。
    5.  全確認が OK な場合、DAL が閲覧出来るデータの SQL QUERY を作り、データを拾って依頼ユーザーに見せる。

          
