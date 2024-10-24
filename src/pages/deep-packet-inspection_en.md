---
title: Deep Packet Inspection
description: Benefits of enabling deep packet SSL inspection on your firewall
order: 400
category: Service Details
lang: en
series: en-security
url: /security/deep-packet-inspection/
id: deeppacketinspection
tags:
  - Firewall
  - DPI
  - Security
image: ''
draft: false
---
# SSL Deep Packet Inspection

Using Fortinet Fortigate as an example, it is good practice to enable DPI "Deep Packet Inspection" in your firewall policies. What setting DPI does is, when a user makes a connection to a site via HTTPS, the Fortigate will replace the SSL certificate of the site with its own, then inspect the traffic that is flowing through, for malware or other problems. Google estimates 90% of traffic is encrypted, so this is important to get full protection. This figure shows that the firewall is replacing the SSL certificate, allowing DPI to occur.

<img class="zoom" src="/assets/img/fortigate-ssl-deep-packet-inspection.png" width="100%" alt="Figure: Fortigate Deep Packet Inspection">

## Primary Benefits

* Allows encrypted TLS traffic to be decrypted so it can be fully inspected and logged, increasing the chances of preventing malware. 
* Allows businesses to get full return on their firewall appliance investment. 
* Gives full information about traffic, so businesses and security admins can make informed decisions. 

## Caveats and Impacts

* The firewall's CA certificate needs to be installed on all the devices connecting to the internet via the firewall. In a corporate environment, this would usually be done by a system like M365 "InTune", that lets you push the needed CA cert to all your devices. If you don't have InTune or another MDM, you would need to install manually, which could be a challenge depending on work volume.  
* Some sites don't work well when run through a DPI scan, so you might need to whitelist them. 

See [this guide](https://docs.fortinet.com/document/fortigate/7.4.5/administration-guide/122078) for information from Fortinet.

> [!TIP]
> [Deep packet inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection) (DPI) may go by different names depending on the firewall brand, such as "complete packet inspection", "information extraction" or "packet sniffing". No matter what it is called, the technique allows inspection of data to filter malware and other unwanted traffic.
