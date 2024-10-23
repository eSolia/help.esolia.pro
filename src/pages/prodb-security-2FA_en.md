---
title: PROdb MFA Security Settings
description: Multifactor authentication settings
order: 600
category: Service Details
lang: en
series: en-prodb
url: /prodb/prodb-security-2FA/
id: prodbsec2fa
tags:
  - PROdb
  - 2FA
  - MFA
---

# PROdb 2FA

We strongly recommend PROdb clients elect to enable 2FA for their users, whether they are on the `pro.dbflex.net` domain or a custom domain. Two factor authentication will provide protection if your password is ever leaked. Once enabled, an additional 6-digit code is required to confirm the login.

## Enabling

2FA is enabled in the "Manage Users" section, either per user or in bulk, after selecting multiple users. 

<img src="/assets/img/figure-prodb-enable-2fa-in-manage-users.png" width="100%" alt="Fig: PROdb Enable 2FA in Manage Users Screen">

## Ways of Using

There are three ways users can leverage two-factor authentication with PROdb: 
 
1. For users using the TMC "Teamdesk Mobile Client" app, you can tap a popup, and link to FaceID or other biometrics to login seamlessly. 
2. For users not using TMC, the code will be sent via email, and copy it into the 2FA prompt to log in. You can get the code by email if you click "Send New Code" in the login screen. 
3. For users with standard Authenticator apps such as Codebook, 1Password, Google Authenticator and so on, visit the user preferences screen (upper right, click the username and select) and click "show pairing code for authenticator apps" checkbox. Copy the code and store wherever a TOTP code is stored in your authenticator app.  

<img src="/assets/img/figure-prodb-2fa-authenticator-totp-code.png" width="100%" alt="Fig: PROdb 2FA TOTP Code Storage in Authenticator App">
  
<img src="/assets/img/figure-prodb-2fa-code-entry-screen.png" width="100%" alt="Fig: PROdb 2FA Code Entry Screen">
  
<img src="/assets/img/figure-prodb-tmc-2fa-popup-screen.png" width="100%" alt="Fig: PROdb TMC 2FA Popup">

## Typical Login Process

Here's the typical login process, assuming users with a paired TMC app: 
 
1. In a web browser, users enter their email and password as usual, in the PROdb login form. A “Code” screen appears, but nothing needs to be done. 
2. Users unlock their phones, and TMC app will show a popup which can be tapped to log in. The first time, users should tap to allow it to use FaceID for convenience. Subsequently, users just tap and authenticate via FaceID. 
3. Users will see PROdb will automatically switch from the "Code" screen to the normal logged in start screen.

> [!TIP]
> Users should upgrade the TMC app, and be aware that popups in TMC may be suppressed by "Focus" or "Do Not Disturb" settings. 
