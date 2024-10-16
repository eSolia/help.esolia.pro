---
title: Bulk Email Error Codes
date: Git Last Modified
description: Error Codes from Bulk Email Systems
order: 300
category: Service Details
lang: en
series: en-bulkemail
url: /bulk-email/bulk-email-bounce-codes/
id: bulkbouncecodes
tags:
  - Bulk Email
  - Error Codes
---

The following error codes are from the bulk email systems we use to send newsletters. 

### Postmark App Bounce Error Codes

| Type | Code | Name & Description |
| ---- | ---- | ------------------ |
| HardBounce | 1 | Hard bounce — The server was unable to deliver your message (ex: unknown user, mailbox not found). |
| Transient | 2 | Message delayed — The server could not temporarily deliver your message (ex: Message is delayed due to network troubles). |
| Unsubscribe | 16 | Unsubscribe request — Unsubscribe or Remove request. |
| Subscribe | 32 | Subscribe request — Subscribe request from someone wanting to get added to the mailing list. |
| AutoResponder | 64 | Auto responder — Automatic email responder (ex: "Out of Office" or "On Vacation"). |
| AddressChange | 128 | Address change — The recipient has requested an address change. |
| DnsError | 256 | DNS error — A temporary DNS error. |
| SpamNotification | 512 | Spam notification — The message was delivered, but was either blocked by the user, or classified as spam, bulk mail, or had rejected content. |
| OpenRelayTest | 1024 | Open relay test — The NDR is actually a test email message to see if the mail server is an open relay. |
| Unknown | 2048 | Unknown — Unable to classify the NDR. |
| SoftBounce | 4096 | Soft bounce — Unable to temporarily deliver message (i.e. mailbox full, account disabled, exceeds quota, out of disk space). |
| VirusNotification | 8192 | Virus notification — The bounce is actually a virus notification warning about a virus/code infected message. |
| ChallengeVerification | 16384 | Spam challenge verification — The bounce is a challenge asking for verification you actually sent the email. Typcial challenges are made by Spam Arrest, or MailFrontier Matador. |
| BadEmailAddress | 100000 | Invalid email address — The address is not a valid email address. |
| SpamComplaint | 100001 | Spam complaint — The subscriber explicitly marked this message as spam. |
| ManuallyDeactivated | 100002 | Manually deactivated — The email was manually deactivated. |
| Unconfirmed | 100003 | Registration not confirmed — The subscriber has not clicked on the confirmation link upon registration or import. |
| Blocked | 100006 | ISP block — Blocked from this ISP due to content or blacklisting. |
| SMTPApiError | 100007 | SMTP API error — An error occurred while accepting an email through the SMTP API. |
| InboundError | 100008 | Processing failed — Unable to deliver inbound message to destination inbound hook. |
| DMARCPolicy | 100009 | DMARC Policy — Email rejected due to DMARC Policy. |
| TemplateRenderingFailed | 100010 | Template rendering failed — An error occurred while attempting to render your template. |
