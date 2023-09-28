---
title: "Sparq Marketplace Deployment"
description: "Deploy Sparq SDK with just a few clicks"
weight: 1010
---

We are thrilled to unveil our groundbreaking [partnership](https://medium.com/@SparqNet/sparqnet-x-p2p-cloud-partnership-bb7e114ad57e) with [Sparq Network](https://sparq.network), a collaboration that redefines the landscape of cloud infrastructure. Leveraging Sparq's state-of-the-art meta-network, our alliance empowers developers to build application-specific native chains compatible with any EVM-based network. P2P Cloud is pioneering a simplified deployment process through Sparq's SDK, offering a one-click deployment feature in our marketplace. This enables developers to launch their projects swiftly and efficiently. By deploying networks atop P2P Cloud's secure and cost-effective infrastructure, users gain the advantage of robust security and affordability for a myriad of applications, ranging from data storage and decentralized email servers to cloud services and VPNs.

This post will show you how to deploy Sparq's SDK using P2P Cloud’s decentralized cloud marketplace. 

## Deploying the Sparq Orbiter SDK:

Before you begin, you must install the MetaMask extension on your browser. 
1. Read our [Fund Your Account](https://p2pcloud.io/docs/developer-hub/funding-wallet/) tutorial to learn how to fund your wallet when booking a virtual machine.  
2. Once you fund your wallet, go to the marketplace [homepage](https://app.p2pcloud.io/vms/new)
3. Click on the Sqarq icon, and you select a VM

![Sparq-VM-Deployment](/src/assets/sparq-vm.png)
> The VMs are already filtered based on the requirements of each application

4. Select your desired VM 
5. (optional) Give your VM a name

![P2P Cloud Hostname](/src/assets/hostname.png)

6. Click the book button where you will be prompted to sign a TX

Once completed, you will be taken to the WebSSH screen. 

> Note: After you sign the TX with your MetaMask, you will be redirected to the booking screen, where your VM initializes. During this process, **DO NOT REFRESH THE SCREEN or you will have to reinstall the SDK.** 

![P2P Cloud WebSSH](/src/assets/webssh_screen_v2.png)
> To see the logs, run: **docker logs sparqnet**

## Accessing the SDK:
1. Get the container ID by running: ***docker ps -a*** 

2. Copy the container ID and run: **docker exec -it <containerID> bash**

> Note: if you don’t see Spaqnet container listed then it’s still being configured on the VM. We recommend waiting 2-3min before you run the docker command.  

Follow us on [Twitter](https://twitter.com/p2pcloud_io) or join our [Telegram](http://t.me/p2pcloud) group to get the latest information on what we are building! 

Need a virtual machine to run your application, dApp, or website? Book a VM on our [marketplace](https://app.p2pcloud.io/vms/new) today to get started!  


### Learn more about Sparq Network:

Website: [https://sparq.network](https://sparq.network/)

Twitter: [https://twitter.com/SparqNet](https://twitter.com/SparqNet)

Discord: [https://discord.gg/VMKrxF7vwu](https://discord.gg/VMKrxF7vwu)