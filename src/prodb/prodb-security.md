---
title: PROdb セキュリティ
date: 2023-02-01T16:25:30+09:00
description: 信頼できるSaaSクラウド型データーベース「PROdb」を色んな面のセキュリティのご紹介です。
order: 200
category: サービス詳細
lang: ja
series: ja-prodb
url: /prodb/prodb-security/
tags:
  - PROdb
  - セキュリティ
---

# PROdb セキュリティ

[セキュリティおよびプライバシーポリシー](https://esolia.co.jp/prodb-security-and-privacy)ページをご覧頂き、以下の点もご参考にしてください。

## イソリアパートナーであるForesoft社について

イソリアは Foresoft 社と、2010 年から 10 年以上、パートナーとして付き合ってます。しっかりしていて信頼のある会社で、サポートとプラットフォームは優れてます。ダウンタイムは[極めて少ない](http://status.foresoft.net/1019628)。

Foresoft は、Trustwave Holdings 社から PCI コンプライアンス準拠してます。[こちら](https://sealserver.trustwave.com/cert.php?customerId=7901d29c0ca511e0b34b005056b201e5&size=105x54&style=normal&language=jp)でご確認頂けます。

![Secure Trust Validate](/img/secure-trust-validate.png)

## トップレベル Tier 3 データセンター利用

PROdb システムが入っているシカゴにある Steadfast DC は、SAS70 / SSAE16 取得済で、米 HIPAA 監査を[合格してます](https://www.steadfast.net/healthcare)。

米国でホスティングするのに抵抗があるお客様に、ヨーロッパにあるマイクロソフト Azure に、ホストすることも可能です。どちらも Foresoft 社運用となります。

他社の PaaS/SaaS ベンダー同様プライベートクラウドのオプションはありません。

Steadfast 監査報告はこちら：

[Steadfast-2020-Type 2 SOC 1-Final Report.pdf](https://teamdesk.crmdesk.com/image.aspx?mode=file&id=16061)

[Steadfast SOC 1 Bridge Letter 07-27-2021.pdf](https://teamdesk.crmdesk.com/image.aspx?mode=file&id=16179)

さらに、Steadfast DC について：

-   [350 East Cermak Road](https://www.steadfast.net/managed-hosting/data-center-colocation/350-e-cermak-chicago-data-center)の DC になります
-   Tier III DC で、電気、HVAC、ネットワーク接続、セキュリティの冗長性が 2N（必要なキャパの倍）

**有料オプション:** 有料「プライベートクラウド」オプションもございます。Azureに御社のPROdbを乗せて、仮想デバイスログやその他の情報が閲覧可能になります。 {.tip}

## アプリ セキュリティも抜群

PROdb は 256-ビット (SHA2) TLS サーティフィケイト、TLS1.0、1.1 および 1.2 を介してワイヤー上でデータを暗号化します。データベースと添付ファイルは AES256 にて暗号化されます。

全てのサーバーは Windows Server 2019 で、最新パッチが当ててあります。Database は Microsoft SQL Server 2019 Enterprise Edition です。

週次ベースでマイクロソフトが提供しているパッチ、ホットフィックス、更新をサーバーにかけて、使っている OS はいつも最新の状態にしてあります。クリティカルな更新があれば、直ちに当てます。メンテがあれば、土曜日の午後 15：30 頃から開始となります。

月次ベースでサーバーは Trustwave SecureTrust セキュリティ調査（pen test）を受けて、合格してます。

![Secure Trust Logo](/img/secure-trust-logo.png)

          