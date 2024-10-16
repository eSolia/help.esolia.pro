---
title: ディープ・パケット・インスペクション
date: Git Last Modified
description: ファイアウォールにて、ディープ・パケット・インスペクションを有効にする利点
order: 400
category: サービス詳細
lang: ja
series: ja-security
url: /security/deep-packet-inspection/
id: deeppacketinspection
tags:
  - ファイアウォール
  - DPI
---

# SSL ディープ・パケット・インスペクション
Fortinet Fortigate を例に挙げると、ポリシーで DPI「ディープ ・パケット ・インスペクション」を有効にすることをお勧めします。これにより、ユーザーが HTTPS 経由でサイトに接続すると、Fortigate はサイトの SSL 証明書を独自の証明書に置き換え、通過するトラフィックを検査してマルウェアやその他の問題がないかを確認します。Google はトラフィックの 90% が暗号化されていると推定しているため、完全な保護を得ることが重要です。この図は、ファイアウォールが SSL 証明書を置き換え、DPI の発生を許可していることを示しています。

<img src="/assets/img/fortigate-ssl-deep-packet-inspection.png" width="100%" alt="Figure: Fortigate Deep Packet Inspection">

## 主な利点
* 暗号化された TLS トラフィックを復号化できるため、完全に検査してログに記録できるようになり、マルウェアの防止効果が向上します。
* 企業はファイアウォール アプライアンスへの投資から最大限の利益を得ることができます。
* トラフィックに関する完全な情報が提供されるため、企業やセキュリティ管理者は十分な情報に基づいた意思決定を行うことができます。

## 問題点、インパクト
* ファイアウォールの CA 証明書は、ファイアウォール経由でインターネットに接続するすべてのデバイスにインストールする必要があります。企業環境では通常、必要な CA 証明書をすべてのデバイスにプッシュできる InTune などのシステムによって行われます。InTune または別の MDM がない場合は、手動でインストールする必要がありますが、作業量によっては少し困難になる可能性があります。
* 一部のサイトは DPI スキャンで実行すると正常に動作しないため、ホワイトリストに登録する必要がある場合があります。
Fortinet からの情報については、[このガイド](https://docs.fortinet.com/document/fortigate/7.4.5/administration-guide/122078) をご参照ください。