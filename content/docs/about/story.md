---
title: "Idea of p2pcloud"
description: "Idea of p2pcloud"
draft: true
weight: 3030
---

## The story and idea of p2pcloud

Hi, my name is Ilia. I love crypto and infrastructure. By crypto, I mean blockchain technology and not coins themselves. Data replication, failovers, p2p networking - all those technologies fascinate me.

I had a question how can I store data of my current business (TBs of structured data with 100s TPS) without using my own servers? 

I had a few ideas:
- Blockchain? Expensive. Bytes, Kilobytes, not Terrabytes.
- IPFS? 100s writes per second? Nope. And IPFS actually requires me to run my own servers, which defeats the purpose.
- Encrypt data and incentivize people to store it in their databases. With deterministic encryption, a frequency attack is inevitable; sorting and filtering are impossible without it.
- Intel SGX? I can decrypt the data inside an enclave, perform a search, and return it using an encrypted channel. The problem is RAM inside the SGX enclave: under 100 megabytes. Just imagine a MySQL database with that much cache. BTW SGX is discontinued.

In February 2022, I discovered AMD SEV, which can encrypt the whole RAM. And its integration with Luks that encrypts the entire disk. And some VPN like Zerotier or Yggdrasil encrypts networking! I went to Aliexpress, ordered my AMD EPYC server for $868, and began the journey!

My path to prototype lasted half a year and was not easy. The people hunting went real hard. Many people I interviewed for this job told me that many of the goals we have to accomplish are impossible. 

Technology was also a big challenge. I started this project as a mainly JavaScript developer. Today I edited some C++ crypto attestation code from AMDs interacting with the C system library made in the 90s and ran it in Chrome's wasm. We had to build our custom Grub with custom-written modules. We are creating our own Ubuntu ISOs to encrypt them properly. 

As of July 2022, the prototype is ready. I do confirm that we can safely encrypt the disk, memory, and networking of a VM running, even if this VM is running on a server with a hacker's root access to it.