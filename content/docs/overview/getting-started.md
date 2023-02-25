---
title: "Getting Started"
description: "Getting Stated with P2P Cloud"
weight: 1010
---


The P2P contract requires **USDC** on the Avalanche network. To learn how to bridge assets over, [click here](https://support.avax.network/en/articles/6657391-how-to-use-the-avalanche-bridge-core-app-bridge) for more information.


 > Note: when bridging **USDC** over to avalanche you will receive **[USDC.e](https://www.circle.com/blog/understanding-avalanche-usdc-vs.-usdc.e)** which is not accepted in the current implementation of the P2P broker smart contract. You will need to swap **USDC.e** for **USDC**.
 

### 1. Add USDC to P2PCloud Smart contract
The P2P cloud broker [smart contract](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) is the middle man for facilitating the distributions of funds from client to broker. 

To get started, go to [p2pcloud control panel](https://p2pcloud.io/panel#!/vms) and click on the wallet icon.

![wallet](/src/assets/wallet.png)


Under **Payment,** enter the amount of **USDC** you would like to deposit into the [broker.sol](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) contract and click "Deposit". 

> Note: you will need to sign 2 transactions: wallet approval and depositing funds.

### 3. Book a VM on p2pcloud

Head over to the [offers page](https://p2pcloud.io/panel#!/offers) where you will see a list of VMs that are currently being offered by other server providers on the network. 

Once you find the VM with your desired specs, click "**book**" where it will ask you to sign a message. 

![book](/src/assets/book.png)

> Note: This signature is a seed to generate keys to access your VM. To learn more about

If you already have an SSH pub key you wish to import, see out advansed docs(coming soon). To see a more detailed breakdown of the VM, click on the "JSON spec" arrow.

## 4. Launch it

Once you've booked your server, you can proceed to click the "VM booked! Now launch it" button. Alternatively, you can navigate to the [VMs](https://p2pcloud.io/panel#!/vms) tab to see your booked VM. 

![launch](/src/assets/launch.png)


Next, click **Open my SSH keystore** to see the current environment variables that will be injected into the VM upon initiation.   

Last, click the **approve launch** button and sign an approval message for the hosting provider and wait up to 1 minute for the instance to be spun up.

![signature](/src/assets/signature.png)


> Note: The hosting provider uses this signature to make sure nobody would send a request to shut down your VMs without your approval.

## 4. SSH into your VM via WebSSH
At this point, you are now ready to SSH into your VM through your browser

To do so, navigate to the [booked VMs page](https://p2pcloud.io/panel#!/vms) and click on the green **WebSSH** button and begin configuring your server. 

![ssh button](/src/assets/ssh_button.png)