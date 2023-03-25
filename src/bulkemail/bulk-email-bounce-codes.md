---
title: バルクメールのエラーコード
date: Git Last Modified
description: バルクメールシステムで利用しているエラーコード
order: 100
category: サービス詳細
lang: ja
series: ja-bulkemail
url: /bulkemail/bulk-email-bounce-codes/
id: bulkbouncecodes
tags:
  - バルクメール
  - エラーコード
---

バルクメール送信で利用しているシステムのエラーコード。

### Postmark バウンスエラー

| **タイプ** | **コード** | **説明** |
| ---- | ---- | ------------------ |
| HardBounce | 1 | ハードバウンス — サーバーは送信したメールを届けることが出来なかった。 (例: ユーザーが無い、メールボックスが無い) |
| Transient | 2 | 送信遅れ — 一時的に送信したメールを届けることが出来なかった。  (例: ネットワークトラブルによる問題) |
| Unsubscribe | 16 | 送信停止依頼 — 送信先ユーザーから送信停止依頼を受けた。 |
| Subscribe | 32 | サブスク依頼 — 送信一覧にサブスクしたい、ユーザーからの依頼。 |
| AutoResponder | 64 | 自動応対 — 自動レスポンスメッセージが戻って来た。 (例: "手が離さない" 又は "休み中") |
| AddressChange | 128 | アドレス変更依頼 — 受信者によるアドレス変更依頼を受けた。 |
| DnsError | 256 | DNSエラー — 一時的DNSエラーが発生した。 |
| SpamNotification | 512 | スパム通知 — メッセージ届けたが、ユーザーがブロックを掛けたか、スパムやバルクメールとしてフラグを立てた。 |
| OpenRelayTest | 1024 | オープンリレー調査 — 本NDR （Non-Delivery Report 配信不能レポート） はオープンリレーかどうかの確認調査。 |
| Unknown | 2048 | 区別不可 — 区別が出来ないNDR。 |
| SoftBounce | 4096 | ソフトバウンス — 一時的に送信したメールを届けることが出来なかった。 (例: メールボックスがいっぱい、アカウントが無効になっている、保存クォータをオーバしている、ハードディスク保存領域がもう無い) |
| VirusNotification | 8192 | ウイルス通知 — 受信メッセージにウイルスを検知したと言う通知。|
| ChallengeVerification | 16384 | スパム確認 — スパムソフト （例： Spam Arrest, MailFrontier Matadorなど） が送ってくる「身分確認」チャレンジ。|
| BadEmailAddress | 100000 | 無効なメールアドレス — メールアドレス事態が無効です。 |
| SpamComplaint | 100001 | スパム苦情 — 受信者が本メールを明示的にスパムとしてフラグを立てた。 |
| ManuallyDeactivated | 100002 | 手動無効化 — 送信先メールは手動的に無効化された。 |
| Unconfirmed | 100003 | 一覧登録未確認 — 一覧メンバーはまだサブスクの同意はしていない。 |
| Blocked | 100006 | ISPブロック — コンテントやブラックリストによる、処理しているISPがブロックを掛けた。 |
| SMTPApiError | 100007 | SMTP API エラー — SMTP API経由でメールを受け取った時、エラーが発生した。 |
| InboundError | 100008 | 処理失敗 — 受信処理が途中で失敗した。 |
| DMARCPolicy | 100009 | DMARC規定 — DMARC ポリシーによって送信が失敗した。 |
| TemplateRenderingFailed | 100010 | テンプレート利用失敗 — メール送信をしようとした時、メールのコンテンツを作成することが出来なかった。 |
