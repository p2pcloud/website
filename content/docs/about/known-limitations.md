---
title: "Known limitations"
description: "Known limitations of p2pcloud - distributed virtual machine hosting on avalanche blockchain"
weight: 2030
---

## Current state of the project
Updated: February 2023

- Security is not guaranteed. We are still in the development phase. P2PCloud is not responsible for any data loss or theft.
- Testnet is available for clients only, not for providers.

## Solved
- ~~SSD disks are slower due to the overhead of encryption and virtualization. Partially solved: as a solution for 100k+ IOPS applications, we added direct NVME attachment support. Look for offers with dedicated NVMe. Please refer to [Securing NVMe](/docs/get_started/nvme-setup) guide.~~ 
- ~~Attestation is partially happening on p2pcloud servers.~~ Attestation runs 100% in the client's browser or server.
- ~~All disks are encrypted with a single password "dev_preview"~~. Disks are encrypted with user's password.
- ~~- Disk encryption is happening on p2pcloud's servers.~~ Disk encryption is happening on VM boot.
- ~~No dedicated IPv4 is available yet. Workaround: [use Cloudflare tunnels to accept traffic from the internet](/docs/get_started/overcoming-nat).~~ General availability of dedicated IPv4 is here.
- ~~Only local NVMe storage is available. No network disks. Treat VMs as if they were bare metal.~~ Network storage is available.

## Work in progress
- Drop support for 1st and 2nd generation AMD SEV technology due to security concerns
- Add support for custom root key, right now it is derived from Metamask/Core signature, which could be a security concern.
- The only distro available is Ubuntu 22.04 LTS. We are working on adding more distros.

## Unsolvable
- Hosting provider can not restart the virtual machine on another host machine without the user's permission. Unsolvable.