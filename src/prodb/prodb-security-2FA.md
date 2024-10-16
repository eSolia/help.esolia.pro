---
title: PROdb 二要素認証（2FA）セキュリティ設定変更
date: Git Last Modified
description: 二要素認証（2FA）設定
order: 600
category: サービス詳細
lang: ja
series: ja-prodb
url: /prodb/prodb-security-2FA/
id: prodbsec2fa
tags:
  - PROdb
  - 2FA
  - MFA
  - 二要素認証
---

# PROdb 二要素認証「2FA」

当サービスの`pro.dbflex.net`ドメインご利用でもカスタムドメインでも、二要素認証「2FA」を設定するのは強くおすすめします。万が一パスワードが漏れても、2FAを使っていれば、より安全です。二要素認証「2FA」を設定した後、ログインするには6桁コードを入れる必要があります。

## 有効に設定する

二要素認証「2FA」を "Manage Users" セクションで設定します。各ユーザー毎かバルクでも設定可能です。  

<img src="/assets/img/figure-prodb-enable-2fa-in-manage-users.png" width="100%" alt="図: PROdb Manage Users 画面で有効に設定する">

## 利用方法

二要素認証「2FA」を三つの方法でご利用可能です。

1. TMC "Teamdesk Mobile Client"を使っている場合、ポップアップをタップしてFaceIDなどにリンクするとログインがスムーズに。
2. TMC使っていなければ、メールでコードが送られてきます。コードをログイン画面に貼り付けるとログインします。"Send New Code" をクリックすると、新規でコードが送信されます。
3. Codebook, 1Password, Google Authenticatorなどオーセンチケーターアプリご利用の場合、 ユーザー各自設定画面（右上、ユーザー名選択してからPreferences）にて、"show pairing code for authenticator apps" チェックボックスの選択すれば、オーセンチケーターアプリに貼り付けると利用可能です。 

<img src="/assets/img/figure-prodb-2fa-authenticator-totp-code.png" width="100%" alt="図: PROdb 2FA TOTP Code Storage in Authenticator App">
  
<img src="/assets/img/figure-prodb-2fa-code-entry-screen.png" width="100%" alt="図: PROdb 2FA Code Entry Screen">
  
<img src="/assets/img/figure-prodb-tmc-2fa-popup-screen.png" width="100%" alt="図: PROdb TMC 2FA Popup">

## 通常ログイン段取り

TMCご利用の場合、次のようにログインします：

1. ブラウザーにてメールとパスワードを普通に入力する。「Code」画面が出るが、なにもしないで置く。
2. スマホをアンロックして、TMCアプリのポップアップをタップする。最初はFaceIDにリンクしますが、次回からタップしてFaceIDをするだけで、ログインします。
3. PROdbは自動的に「Code」画面からお馴染みの画面に切り替えます。

> [!TIP]
> TMCアプリのアップグレードを心掛けましょう。スマホの「フォーカス」や「ナイトモード」設定でポップアップが押さえる場合もありますので、注意が必要。 


