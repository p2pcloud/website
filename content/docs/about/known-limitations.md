---
title: "Known limitations"
description: "Known limitations of p2pcloud - distributed virtual machine hosting on avalanche blockchain"
weight: 2030
---

## Current state of the project
Updated: February 2023

- VMs are available on the Avalanche mainnet to rent
- Reliable enough to host non-critical services that would not suffer from a single VM failure.
- Security is not guaranteed. We are still in the development phase. P2PCloud is not responsible for any data loss or theft.

## Solved
- ~~SSD disks are slower due to the overhead of encryption and virtualization. Partially solved: as a solution for 100k+ IOPS applications, we added direct NVME attachment support. Look for offers with dedicated NVMe. Please refer to [Securing NVMe](/docs/get_started/nvme-setup) guide.~~ Local NVMe speed is good enough.
- ~~Attestation is partially happening on p2pcloud servers.~~ Attestation runs 100% in the client's browser or server.
- ~~All disks are encrypted with a single password "dev_preview"~~. Disks are encrypted with a password derived from Metamask signature.
- ~~- Disk encryption is happening on p2pcloud's servers.~~ Disk encryption is happening on VM boot.

## Work in progress
- No dedicated IPv4 is available yet. Workaround: [use Cloudflare tunnels to accept traffic from the internet](/docs/get_started/overcoming-nat).
- Only local NVMe storage is available. No network disks. Treat VMs as if they were bare metal.

## Unsolvable
- Hosting provider can not restart the virtual machine on another host machine without the user's permission. Unsolvable.