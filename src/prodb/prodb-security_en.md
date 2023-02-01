---
title: PROdb Security
date: 2023-02-01T16:25:30+09:00
description: Various aspects of the trustworthy SaaS cloud database "PROdb"
order: 200
category: Service Details
lang: en
url: /en/prodb/prodb-security/
tags:
  - PROdb
  - Security
---

# PROdb Security

Please have a look at our [PROdb Security and Privacy Policy](https://esolia.com/prodb-security-and-privacy) page, and the following additional points. 

## Regarding eSolia's Partner Foresoft

eSolia has been a business partner of Foresoft since 2010, more than 12 years so far. Foresoft is a trustworthy partner and service provider, providing exemplary support for a superior platform. Unplanned system downtime has been extremely low ([status page](http://status.foresoft.net/1019628)).

Foresoft is PCI compliant, assessed by [Trustwave Holdings](https://www.trustwave.com/en-us/capabilities/by-mandate/pci/). See details on Foresoft's "Security and Stability" page [here](https://teamdesk.crmdesk.com/answer.aspx?aid=11476).

![Secure Trust](/img/secure-trust-validate.png)

## Infrastructure Housing

The Top Level Tier-3 datacenter housing PROdb is operated by Steadfast Networks, located at [350 East Cermak Road](https://www.steadfast.net/managed-hosting/data-center-colocation/350-e-cermak-chicago-data-center), Chicago, Ill, USA, and features 2N redundancy for all aspects of the infrastructure including power, HVAC, network and security. Steadfast have achieved SAS70, SSAE16 and HIPAA compliance. See [here](https://www.steadfast.net/healthcare) and [here](https://teamdesk.crmdesk.com/answer.aspx?aid=11476), as well as: 

* [Steadfast-2020-Type 2 SOC 1-Final Report.pdf](https://teamdesk.crmdesk.com/image.aspx?mode=file&id=16061)
* [Steadfast SOC 1 Bridge Letter 07-27-2021.pdf](https://teamdesk.crmdesk.com/image.aspx?mode=file&id=16179)

In the event that clients would rather not be hosted in the USA, Foresoft also offers their platform in Microsoft Azure's West EU datacenter in the Netherlands. Whereas the Steadfast DC is co-location of physical servers, Azure is a cloud offering which meaning it is database hosting, data and file storage, on virtual servers. See Microsoft's pages regarding [Security](https://azure.microsoft.com/en-us/overview/security/) and [Compliance Certifications](https://azure.microsoft.com/en-us/overview/trusted-cloud/compliance/). 

**Option:** A fee-based private cloud option is available on Azure, giving you access to virtual device logs and other information. {.tip}

## Rock Solid Application Security
PROdb is encrypting data over the wire via 256-bit (SHA2) TLS certificate, using TLS 1.2, 1.1 or 1.0 preferring the stronger variant by default. The database and all file attachments are encrypted using AES256. 

All servers are running fully-patched Windows Server 2019 operating system, with Microsoft SQL Server 2019 Enterprise Edition as the database server.

All Microsoft patches, hot fixes and updates are installed on a weekly basis, with the most critical installed immediately upon release. 

Any planned maintenance requiring restarts will occur weekly on Saturdays from approximately 15:30 JST, and clients will be informed of such a maintenance window in advance. 

All systems are passing a monthly penetration test performed by Trustwave SecureTrust. 

![Secure Trust Logo](/img/secure-trust-logo.png)

          